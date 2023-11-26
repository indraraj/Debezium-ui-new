import { AppLayoutContext } from "@app/AppLayout";
import { Services } from "@app/apis/services";
import { ConnectorTypeLogo } from "@app/components";
import useFetchApi from "@app/hooks/useFetchApi";
import {
  Brand,
  Bullseye,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Dropdown,
  DropdownItem,
  DropdownList,
  EmptyState,
  EmptyStateActions,
  EmptyStateFooter,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateVariant,
  Gallery,
  MenuToggle,
  MenuToggleElement,
  PageSection,
  PageSectionVariants,
  SearchInput,
  Text,
  TextContent,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from "@patternfly/react-core";
import {
  PlusCircleIcon,
  EllipsisVIcon,
  TrashIcon,
} from "@patternfly/react-icons";
import React from "react";
import "./ConnectorPlugins.css";
import { useNavigate } from "react-router-dom";

interface ConnectorPluginsProps {
  // Add any props you need for the component
}

export const ConnectorPlugins: React.FC<ConnectorPluginsProps> = (props) => {
  const [connectorPluginSelectedId, setConnectorPluginSelectedId] =
    React.useState<string>("");
  const appLayoutContext = React.useContext(AppLayoutContext);
  const { cluster: clusterUrl, addNewNotification } = appLayoutContext;
  const connectorService = Services.getConnectorService();

  const getConnectorsPlugins = useFetchApi<ConnectorPlugin[]>(
    clusterUrl,
    connectorService.getConnectorPlugins,
    connectorService
  );

  const navigate = useNavigate();
  const connectorConfigPage = () => navigate(`/config-connector/${connectorPluginSelectedId}`);
  
  const {
    data: connectorPlugins,
    isLoading: connectorPluginsLoading,
    error: connectorsPluginsError,
  } = getConnectorsPlugins;

  const onChange = (
    event: React.FormEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const name = event.currentTarget.name;
    setConnectorPluginSelectedId(name);
  };

  const toolbarItems = (
    <React.Fragment>
      <ToolbarItem variant="search-filter">
        <SearchInput aria-label="Search plugin type" />
      </ToolbarItem>
      <ToolbarItem>
        <Button variant="secondary">Search</Button>
      </ToolbarItem>
      <ToolbarItem variant="separator" />
      <ToolbarItem>
        <Button variant="primary" onClick={connectorConfigPage} isDisabled={!connectorPluginSelectedId}>Proceed</Button>
      </ToolbarItem>
    </React.Fragment>
  );

  const PageTemplateTitle = (
    <PageSection variant="light">
      <TextContent>
        <Text component="h1">Connector plugins</Text>
        <Text component="p">List of available connector plugin type.</Text>
      </TextContent>
      <Toolbar id="toolbar-group-types">
            <ToolbarContent>{toolbarItems}</ToolbarContent>
          </Toolbar>
    </PageSection>
  );

  return (
    <>
      {PageTemplateTitle}
      <PageSection isFilled>
        <Gallery hasGutter aria-label="Selectable card container">
          {connectorPlugins &&
            connectorPlugins.map((plugins, key) => (
              <Card
                isCompact
                isSelectable
                key={plugins.id}
                id={plugins.id}
                isRounded
              >
                <CardHeader
                  className="connector-plugin-card-header"
                  style={{ height: "175px" }}
                  selectableActions={{
                    selectableActionId: `connector-plugin-${plugins.id}`,
                    selectableActionAriaLabelledby: `connector-plugin-${plugins.id}-title`,
                    name: `${plugins.id}`,
                    isChecked: connectorPluginSelectedId === plugins.id,
                    variant: "single",
                    onChange,
                  }}
                >
                  <ConnectorTypeLogo type={plugins.className} size={"140px"} />
                </CardHeader>
                <CardTitle>{plugins.displayName}</CardTitle>

                <CardFooter>
                  <sub>
                    Version: <i>{plugins.version}</i>
                  </sub>
                </CardFooter>
              </Card>
            ))}
        </Gallery>
      </PageSection>
    </>
  );
};
