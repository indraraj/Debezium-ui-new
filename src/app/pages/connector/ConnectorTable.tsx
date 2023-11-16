/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ActionsColumn, IAction, Table, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';
import { ConnectorStatusComponent, ConnectorTask, ConnectorTypeLogo } from '@app/components';
import { ConnectorInfo, ConnectorStatus } from '@app/utils/Connector';
import { AppLayoutContext, NotificationProps } from '@app/AppLayout';
import { Services } from '@app/apis/services';
import {
  Button,
  Form,
  FormGroup,
  FormHelperText,
  HelperText,
  HelperTextItem,
  Modal,
  ModalVariant,
  TextInput,
} from '@patternfly/react-core';

interface Props {
  connectorsStatus: Record<string, ConnectorStatus>;
  connectorsInfo: Record<string, ConnectorInfo>;
  addNewNotification: (variant: NotificationProps['variant'], heading?: string, msg?: string) => void;
}
type validate = 'success' | 'warning' | 'error' | 'default';

const ConnectorTable: React.FC<Props> = ({ connectorsStatus, connectorsInfo, addNewNotification }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [deleteConnectorName, setDeleteConnectorName] = React.useState<string>('');
  const [validated, setValidated] = React.useState<validate>('default');
  const [deleteConnectorNameConfirmation, setDeleteConnectorNameConfirmation] = React.useState('');

  const handleNameChange = (_event: any, name: string) => {
    setDeleteConnectorNameConfirmation(name);
    if (name === deleteConnectorName && name !== '') {
      setValidated('success');
    } else {
      setValidated('error');
    }
  };

  const appLayoutContext = React.useContext(AppLayoutContext);
  const clusterUrl = appLayoutContext.cluster;
  const connectorService = Services.getConnectorService();

  const clearDeleteOperation = () => {
    setDeleteConnectorNameConfirmation('');
    setDeleteConnectorName('');
    setIsDeleteModalOpen(false);
    setValidated('default')
  };

  const deleteConnector = () => {
    if (deleteConnectorName === deleteConnectorNameConfirmation && deleteConnectorName !== '') {
      connectorService
        .deleteConnector(clusterUrl, deleteConnectorName)
        .then((cConnectors: any) => {
          addNewNotification('success', 'Connector deleted', `Connector "${deleteConnectorName}" deleted successfully.`);
          clearDeleteOperation();
        })
        .catch((err) => {
          console.log('error', err);
        });
    }
  };

  const deleteConnectorModal = (connectorName: string) => {
    setIsDeleteModalOpen(true);
    setDeleteConnectorName(connectorName);
  };

  const defaultActions = (connectorName: string): IAction[] => [
    {
      title: 'Pause',
      onClick: () => {
        connectorService
          .pauseConnector(clusterUrl, connectorName)
          .then((cConnectors: any) => {
            addNewNotification('info', 'Connector paused', `Connector "${connectorName}" paused successfully.`);
          })
          .catch((err) => {
            console.log('error', err);
          });
      },
    },
    {
      title: 'Resume',
      onClick: () => {
        connectorService
          .resumeConnector(clusterUrl, connectorName)
          .then((cConnectors: any) => {
            addNewNotification('success', 'Connector resumed', `Connector "${connectorName}" resumed successfully.`);
          })
          .catch((err) => {
            console.log('error', err);
          });
      },
    },
    {
      isSeparator: true,
    },
    {
      title: 'Restart connector',
      onClick: () => {
        connectorService
          .restartConnector(clusterUrl, connectorName)
          .then((cConnectors: any) => {
            addNewNotification('success', 'Connector restarted', `Connector "${connectorName}" restarted successfully.`);
          })
          .catch((err) => {
            console.log('error', err);
          });
      },
    },
    {
      title: <a href="https://www.patternfly.org">Edit connector</a>,
    },
    {
      isSeparator: true,
    },
    {
      title: 'Delete connector',
      onClick: () => deleteConnectorModal(connectorName),
    },
  ];

  return (
    <>
      <Table aria-label="Actions table">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Name</Th>
            <Th>Status</Th>
            <Th>Tasks</Th>
            <Td></Td>
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(connectorsStatus).map((connectorName) => {
            // connectorList.map((connectorName) => {
            // Arbitrary logic to determine which rows get which actions in this example
            const rowActions: IAction[] | null = defaultActions(connectorName);

            // if (repo.name === '5') {
            //   rowActions = lastRowActions(repo);
            // }
            // let singleActionButton: React.ReactNode = null;
            // if (repo.singleAction !== '') {
            //   singleActionButton = (
            //     <TableText>
            //       <Button variant="secondary">{repo.singleAction}</Button>
            //     </TableText>
            //   );
            // }

            return (
              <Tr key={connectorName}>
                <Td dataLabel="connector-image">
                  <ConnectorTypeLogo type={connectorsInfo[connectorName].info.config['connector.class']} />
                </Td>
                <Td dataLabel="name">{connectorName}</Td>
                <Td dataLabel="status">
                  <ConnectorStatusComponent status={connectorsStatus[connectorName].status.connector.state} />
                </Td>
                <Td dataLabel="task"><ConnectorTask connectorTasks={connectorsStatus[connectorName].status.tasks!}/></Td>
                <Td></Td>

                <Td isActionCell>
                  {rowActions ? (
                    <ActionsColumn
                      items={rowActions}
                      isDisabled={false} // Also arbitrary for the example
                      //   actionsToggle={exampleChoice === 'customToggle' ? customActionsToggle : undefined}
                    />
                  ) : null}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Modal
        variant={ModalVariant.medium}
        title={`Delete "${deleteConnectorName}" connector?`}
        titleIconVariant="warning"
        isOpen={isDeleteModalOpen}
        onClose={clearDeleteOperation}
        actions={[
          <Button
            key="confirm"
            variant="primary"
            isDisabled={deleteConnectorName !== deleteConnectorNameConfirmation}
            onClick={deleteConnector}
          >
            Confirm
          </Button>,
          <Button key="cancel" variant="link" onClick={clearDeleteOperation}>
            Cancel
          </Button>,
        ]}
      >
        <Form>
          <FormGroup label="Connector name" fieldId="delete-connector-name">
            <TextInput
              isRequired
              validated={validated}
              type="text"
              id="delete-connector-name-text"
              name="delete-connector-name-text"
              aria-describedby="Delete connector name"
              value={deleteConnectorNameConfirmation}
              onChange={handleNameChange}
            />
            <FormHelperText>
              <HelperText>
                <HelperTextItem>Confirm the connector name you want to delete.</HelperTextItem>
              </HelperText>
            </FormHelperText>
          </FormGroup>
        </Form>
      </Modal>
    </>
  );
};

export default ConnectorTable;
