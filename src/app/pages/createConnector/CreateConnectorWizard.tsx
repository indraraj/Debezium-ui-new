import * as React from "react";
import {
  Button,
  Modal,
  ModalVariant,
  PageSection,
  PageSectionTypes,
  Skeleton,
  Split,
  SplitItem,
  Switch,
  Text,
  TextContent,
  Wizard,
  WizardFooterWrapper,
  WizardStep,
  useWizardContext,
} from "@patternfly/react-core";
import { useNavigate, useParams } from "react-router-dom";
import { AppLayoutContext } from "@app/AppLayout";
import { Services } from "@app/apis/services";
import useFetchDynamicApi from "@app/hooks/useFetchDynamicApi";
import { cloneDeep, filter } from "lodash";
import { ConnectionStep } from "./ConnectionStep";
import "./CreateConnectorWizard.css";
import { FilterStep } from "./FilterStep";
import { DataOptionStep } from "./DataOptionStep";
import { RuntimeOptionStep } from "./RuntimeOptionStep";
import { FormStep, PropertyCategory } from "@app/constants";
import { useCallback, useEffect } from "react";
import { ReviewStep } from "./ReviewStep";
import { getConnectorClass, isEmpty } from "@app/utils";
import usePostWithReturnApi from "@app/hooks/usePostWithReturnApi";

export const CreateConnectorWizard: React.FunctionComponent = () => {
  let { connectorPlugin } = useParams();

  const [isAdvanceChecked, setIsAdvanceChecked] = React.useState<boolean>(true);

  const [isCancelModalOpen, setIsCancelModalOpen] = React.useState(false);

  const [connectionFilled, setConnectionFilled] = React.useState<
    boolean | undefined
  >(false);

  const [connectorName, setConnectorName] = React.useState<Record<string, any>>(
    { name: "" }
  );
  const [connectionFormData, setConnectionFormData] = React.useState<
    Record<string, any>
  >({});

  const [filterFormData, setFilterFormData] = React.useState<
    Record<string, any>
  >({});

  const [dataOptionFormData, setDataOptionFormData] = React.useState<
    Record<string, any>
  >({});

  const [runtimeFormData, setRuntimeFormData] = React.useState<
    Record<string, any>
  >({});

  const updateFormData = useCallback(
    (key: string, value: any, formStep: FormStep) => {
      switch (formStep) {
        case FormStep.CONNECTOR_NAME:
          setConnectorName({ [key]: value });
          break;
        case FormStep.CONNECTION:
          setConnectionFormData(
            cloneDeep({ ...connectionFormData, [key]: value })
          );
          break;
        case FormStep.FILTER:
          setFilterFormData(cloneDeep({ ...filter, [key]: value }));
          break;
        case FormStep.DATA_OPTION:
          setDataOptionFormData(
            cloneDeep({ ...dataOptionFormData, [key]: value })
          );
          break;
        case FormStep.RUNTIME_OPTION:
          setRuntimeFormData(cloneDeep({ ...runtimeFormData, [key]: value }));
          break;
      }
    },
    [connectionFormData, filterFormData, dataOptionFormData, runtimeFormData]
  );
  // console.log("connectorName", connectorName);
  // console.log("connectionFormData", connectionFormData);
  // console.log("filterFormData", filterFormData);
  // console.log("dataOptionFormData", dataOptionFormData);
  // console.log("runtimeFormData", runtimeFormData);

  const navigate = useNavigate();

  const cancelConnectorWizard = () => navigate("/");

  const handleAdvanceChange = (
    _event: React.FormEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    setIsAdvanceChecked(checked);
  };

  const appLayoutContext = React.useContext(AppLayoutContext);
  const { cluster: clusterUrl, addNewNotification } = appLayoutContext;
  const connectorService = Services.getConnectorService();

  const getConnectorSchema = useFetchDynamicApi<OpenApiSchema>(
    clusterUrl,
    connectorService.getConnectorSchema,
    connectorService,
    connectorPlugin
  );

  const {
    data: connectorSchema,
    isLoading: connectorsSchemaLoading,
    error: connectorsSchemaError,
  } = getConnectorSchema;

  useEffect(() => {
    if (connectorSchema) {
      const connectorSchemaObject = connectorSchema.components.schemas;
      const requiredList = Object.values(connectorSchemaObject)[0].required;
      setConnectionFilled(
        !isEmpty(connectorName.name) &&
          requiredList?.every(
            (propertyName: string) =>
              // connectionFormData[propertyName.replace(/\./g, "_")] && connectionFormData[propertyName.replace(/\./g, "_")] !== ""
              connectionFormData[propertyName] &&
              connectionFormData[propertyName] !== ""
          )
      );
    }
  }, [connectionFormData, connectorName]);

  const generateConnectorProperties = () => {
    const connectorProperties = {} as Record<string, ConnectorProperties>;
    if (connectorSchema) {
      const connectorSchemaObject = connectorSchema.components.schemas;
      const properties = Object.values(connectorSchemaObject)[0].properties;
      for (const [property, value] of Object.entries(properties)) {
        // const updatedProperty = property.replace(/\./g, "_");
        const updatedProperty = property;
        connectorProperties[updatedProperty] = value;
      }
    }
    return connectorProperties;
  };

  const generateRequiredList = () => {
    let requiredList = [] as string[] | null | undefined;
    if (connectorSchema) {
      const connectorSchemaObject = connectorSchema.components.schemas;
      const required = Object.values(connectorSchemaObject)[0].required;
      requiredList = required;
    }
    return requiredList;
  };

  const allConnectorProperties = generateConnectorProperties();

  const basicProperties = filter(allConnectorProperties, {
    "x-category": PropertyCategory.BASIC,
  });

  const advanceProperties = filter(allConnectorProperties, {
    "x-category":
      PropertyCategory.ADVANCED_GENERAL ||
      PropertyCategory.ADVANCED_SSL ||
      PropertyCategory.ADVANCED_PUBLICATION ||
      PropertyCategory.ADVANCED_REPLICATION,
  });

  const dataOptionProperties = filter(allConnectorProperties, {
    "x-category": PropertyCategory.DATA_OPTIONS_GENERAL,
  });

  const dataOptionAdvanceProperties = filter(allConnectorProperties, {
    "x-category": PropertyCategory.DATA_OPTIONS_ADVANCED,
  });

  const dataOptionSnapshotProperties = filter(allConnectorProperties, {
    "x-category": PropertyCategory.DATA_OPTIONS_SNAPSHOT,
  });

  const runtimeOptionsEngineProperties = filter(allConnectorProperties, {
    "x-category": PropertyCategory.RUNTIME_OPTIONS_ENGINE,
  });

  const runtimeOptionsHeartbeatProperties = filter(allConnectorProperties, {
    "x-category": PropertyCategory.RUNTIME_OPTIONS_HEARTBEAT,
  });

  const filterProperties = filter(allConnectorProperties, {
    "x-category": "FILTERS",
  });

  const PageTemplateTitle = (
    <PageSection variant="light">
      <Split>
        <SplitItem>
          <TextContent>
            <Text component="h1">Create {connectorPlugin} connectors</Text>
            <Text component="p">
              Configure {connectorPlugin} connector by following the steps
              below.
            </Text>
          </TextContent>
        </SplitItem>
        <SplitItem isFilled></SplitItem>
        <SplitItem>
          <Switch
            label="Skip additional properties"
            labelOff="Configure additional properties"
            isChecked={isAdvanceChecked}
            onChange={handleAdvanceChange}
            id="Advance-config-switch"
            name="Toggle Hide and Show Advanced Configuration steps"
          />
        </SplitItem>
      </Split>
    </PageSection>
  );

  const createConnectorPost = usePostWithReturnApi<ConnectorConfigResponse>();

  const {
    response: createConnectorResponse,
    isLoading: createConnectorLoading,
    error: createConnectorError,
    postWithReturn: createConnectorPostWithReturn
  } = createConnectorPost;

  const ReviewStepFooter = () => {
    const { goToNextStep, goToPrevStep, close } = useWizardContext();
    const [isLoading, setIsLoading] = React.useState(false);

    async function onNext() {
      console.log("clusterUrl", clusterUrl);
      setIsLoading(true);
      await createConnectorPostWithReturn(
        clusterUrl,
    connectorService.createConnector,
    connectorService,
    {name: connectorName.name, config: {"connector.class": getConnectorClass(connectorPlugin), ...connectionFormData, ...dataOptionFormData, ...runtimeFormData}}
      )
      setIsLoading(false);
      console.log("createConnectorResponse", createConnectorResponse,createConnectorLoading,createConnectorError);

      goToNextStep();
    }

    return (
      <WizardFooterWrapper>
        <Button
          variant="secondary"
          onClick={goToPrevStep}
          isDisabled={isLoading}
        >
          Back
        </Button>
        <Button
          variant="primary"
          onClick={onNext}
          isLoading={isLoading}
          isDisabled={isLoading}
        >
          Finish
        </Button>
        <Button variant="link" onClick={close} isDisabled={isLoading}>
          Cancel
        </Button>
      </WizardFooterWrapper>
    );
  };

  return (
    <>
      {PageTemplateTitle}
      <PageSection isFilled type={PageSectionTypes.wizard}>
        <Wizard
          className="connector-config-wizard"
          onClose={() => setIsCancelModalOpen(true)}
          isVisitRequired
        >
          <WizardStep
            name="Connection"
            id="wizard-step-1"
            footer={{ isNextDisabled: !connectionFilled }}
          >
            {connectorsSchemaLoading ? (
              <React.Fragment>
                <Skeleton
                  width="75%"
                  screenreaderText="Loaded 25% of content"
                />
                <br />
                <Skeleton
                  width="100%"
                  screenreaderText="Loaded 33% of content"
                />
                <br />
                <Skeleton
                  width="75%"
                  screenreaderText="Loaded 50% of content"
                />
                <br />
                <Skeleton
                  width="100%"
                  screenreaderText="Loaded 66% of content"
                />
                <br />
                <Skeleton
                  width="75%"
                  screenreaderText="Loaded 75% of content"
                />
                <br />
                <Skeleton />
              </React.Fragment>
            ) : (
              <>
                <ConnectionStep
                  connectorName={connectorName}
                  connectionBasicProperties={...[...basicProperties]}
                  connectionAdvancedProperties={...advanceProperties}
                  formData={connectionFormData}
                  updateFormData={updateFormData}
                  requiredList={generateRequiredList()}
                />
              </>
            )}
          </WizardStep>
          <WizardStep
            name="Additional properties"
            id="wizard-step-2"
            isExpandable
            isHidden={!isAdvanceChecked}
            steps={[
              <WizardStep
                name="Filter definition"
                id="wizard-step-2a"
                key="wizard-step-2a"
                isHidden={!isAdvanceChecked}
              >
                <FilterStep
                  filterProperties={...filterProperties}
                  requiredList={generateRequiredList()}
                />
              </WizardStep>,
              <WizardStep
                name="Transformation"
                id="wizard-step-2b"
                key="wizard-step-2b"
                isHidden={!isAdvanceChecked}
              >
                <p>Transformation step </p>
              </WizardStep>,
              <WizardStep
                name="Topic creation"
                id="wizard-step-2c"
                key="wizard-step-2c"
                isHidden={!isAdvanceChecked}
              >
                <p>Topic creation step</p>
              </WizardStep>,
              <WizardStep
                name="Data options"
                id="wizard-step-2d"
                key="wizard-step-2d"
                isHidden={!isAdvanceChecked}
              >
                <DataOptionStep
                  dataOptionProperties={...dataOptionProperties}
                  dataOptionAdvanceProperties={...dataOptionAdvanceProperties}
                  dataOptionSnapshotProperties={...dataOptionSnapshotProperties}
                  formData={connectionFormData}
                  updateFormData={updateFormData}
                  requiredList={generateRequiredList()}
                />
              </WizardStep>,
              <WizardStep
                name="Runtime options"
                id="wizard-step-2e"
                key="wizard-step-2e"
                isHidden={!isAdvanceChecked}
              >
                <RuntimeOptionStep
                  runtimeOptionEngineProperties={...runtimeOptionsEngineProperties}
                  runtimeOptionHeartbeatProperties={...runtimeOptionsHeartbeatProperties}
                  formData={connectionFormData}
                  updateFormData={updateFormData}
                  requiredList={generateRequiredList()}
                />
              </WizardStep>,
              <WizardStep
                name="Custom properties"
                id="wizard-step-2f"
                key="wizard-step-2f"
                isHidden={!isAdvanceChecked}
              >
                <p>Custom properties step</p>
              </WizardStep>,
            ]}
          />
          {/* <WizardStep name="Additional" id="wizard-step-3">
            <p>Step 3 content</p>
          </WizardStep> */}
          <WizardStep
            name="Review"
            id="wizard-step-3"
            // footer={{ nextButtonText: "Finish" }}
            footer={<ReviewStepFooter />}
          >
            <ReviewStep
              connectorSchema={
                connectorSchema
                  ? Object.values(connectorSchema.components.schemas)[0]
                      .properties
                  : {}
              }
              connectorName={connectorName}
              connectorType={connectorPlugin}
              connectorProperties={{
                ...connectionFormData,
                ...dataOptionFormData,
                ...runtimeFormData,
              }}
            />
          </WizardStep>
        </Wizard>
        <Modal
          variant={ModalVariant.small}
          title={`Delete connector?`}
          titleIconVariant="warning"
          isOpen={isCancelModalOpen}
          onClose={() => setIsCancelModalOpen(false)}
          actions={[
            <Button
              key="confirm"
              variant="primary"
              onClick={cancelConnectorWizard}
            >
              Confirm
            </Button>,
            <Button
              key="cancel"
              variant="link"
              onClick={() => setIsCancelModalOpen(false)}
            >
              Cancel
            </Button>,
          ]}
        >
          Do you want to delete the connector?
        </Modal>
      </PageSection>
      {/* </DashboardWrapper> */}
    </>
  );
};
