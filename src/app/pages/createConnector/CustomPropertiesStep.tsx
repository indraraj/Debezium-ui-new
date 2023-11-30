import { FormStep } from "@app/constants";
import {
  EmptyState,
  EmptyStateVariant,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateActions,
  Button,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  Level,
  LevelItem,
  TextInput,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Label,
  LabelGroup,
} from "@patternfly/react-core";
import { CircleIcon, CubesIcon, PlusCircleIcon } from "@patternfly/react-icons";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import "./CustomPropertiesStep.css";
import { KeyValueInputGroup } from "@app/components";

interface CustomPropertiesStepProps {
  formData: Record<string, any>;
  updateFormData: (key: string, value: any, formStep: FormStep) => void;
  connectorProperties: Record<string, any>;
}

export const CustomPropertiesStep: React.FC<CustomPropertiesStepProps> = ({
  formData,
  updateFormData,
  connectorProperties,
}) => {
  return (
    <>
      {
        <>
          <Grid
            hasGutter
            // className="custom-properties-form"
          >
            <GridItem span={8}>
              {Object.keys(formData).map((propertyKey) => (
                <KeyValueInputGroup
                  key={crypto.randomUUID()}
                  formKey={propertyKey}
                  formValue={formData[propertyKey]}
                  updateFormData={updateFormData}
                />
              ))}
              <Toolbar id="additional-prop-step-toolbar-items">
                <ToolbarContent>
                  {/* <ToolbarItem>
                    <Button
                      variant="secondary"
                      onClick={saveAdditionalProperties}
                    >
                      Apply
                    </Button>
                  </ToolbarItem> */}
                  <ToolbarItem>
                    <Button variant="tertiary" icon={<PlusCircleIcon />}>
                      Add custom properties
                    </Button>
                  </ToolbarItem>
                </ToolbarContent>
              </Toolbar>
            </GridItem>
            <GridItem span={4} className="custom-properties_json-section">
              <LabelGroup
              // style={{ marginBottom: '15px' }}
              >
                <Label icon={<CircleIcon />}>
                  Already configured properties
                </Label>
                <Label icon={<CircleIcon />} color="blue">
                  Custom properties
                </Label>
              </LabelGroup>
              <DescriptionList
                isCompact={true}
                isFluid={true}
                isHorizontal={true}
                style={{ gap: "0" }}
              >
                <>
                  {Object.keys(connectorProperties).map((propKey) => (
                    <DescriptionListGroup
                      key={propKey}
                      // style={
                      //   props.customProperties.hasOwnProperty(key)
                      //     ? { color: '#0066CC' }
                      //     : {}
                      // }
                    >
                      <DescriptionListTerm>{propKey}</DescriptionListTerm>
                      <DescriptionListDescription>
                        {connectorProperties[propKey]?.toString()}
                      </DescriptionListDescription>
                    </DescriptionListGroup>
                  ))}
                </>
              </DescriptionList>
            </GridItem>
          </Grid>
        </>
      }
    </>
  );
};
