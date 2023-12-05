import { FilterExplicitFields, FormInputComponent } from "@app/components";
import { FormStep } from "@app/constants";
import {
  Button,
  Divider,
  Form,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from "@patternfly/react-core";
import { cloneDeep, filter } from "lodash";
import React, { useCallback } from "react";

interface FilterStepProps {
  filterProperties: ConnectorProperties[];
  requiredList: string[] | null | undefined;
  formData: Record<string, any>;
  updateFormData: (key: string, value: any, formStep: FormStep) => void;
  filterDatabase: () => Promise<void>;
  clearFilterFormData: () => void;
  deleteFilterExplicitProperty: (removeFilterProperty: string, addFilterProperty: string, value: string) => void;
}

export const FilterStep: React.FC<FilterStepProps> = ({
  filterProperties,
  requiredList,
  updateFormData,
  formData,
  filterDatabase,
  clearFilterFormData,
  deleteFilterExplicitProperty,
}) => {
  const explicitFields: ConnectorProperties[] = [];
  const filterFields: ConnectorProperties[] = [];
  filterProperties.forEach((property) => {
    if (
      property["x-name"].includes("include.list") ||
      property["x-name"].includes("exclude.list")
    ) {
      explicitFields.push(property);
    } else {
      filterFields.push(property);
    }
  });
  
  const explicitProperty: string[] = [];
  explicitFields.forEach((property) => {
    explicitProperty.indexOf(property["x-name"].split(".")[0]) === -1 &&
    explicitProperty.push(property["x-name"].split(".")[0]);
  });

  return (
    <>
      <Form isWidthLimited>
        
         {explicitProperty.map((propertyField) => {
        return (
          <FilterExplicitFields
          key={propertyField}
          property={propertyField}
          hasBoth={filter(explicitFields, function (e) {
            return (
              e["x-name"] === `${propertyField}.include.list` ||
              e["x-name"] === `${propertyField}.exclude.list`
            );
          }).length === 2 ? true : false}
          // explicitProperty={explicitFields}
          updateFormData={updateFormData}
          formData={formData}
          deleteFilterExplicitProperty={deleteFilterExplicitProperty}
        />
        );
      })}
        {filterFields.map((property) => {
          return (
            <FormInputComponent
              key={property["x-name"]}
              property={{
                ...cloneDeep(property),
                // "x-name": property["x-name"].replace(/\./g, "_"),
                "x-name": property["x-name"],
              }}
              requiredList={requiredList}
              formStep={FormStep.FILTER}
              updateFormData={updateFormData}
              formData={formData}
            />
          );
        })}
      </Form>

      <Toolbar id="filter-step-toolbar-items">
        <ToolbarContent>
        <ToolbarItem>
            <Button variant="secondary" onClick={filterDatabase}>
              Apply
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button variant="tertiary" onClick={clearFilterFormData}>Clear filters</Button>
          </ToolbarItem>
      
        </ToolbarContent>
      </Toolbar>
      <Divider style={{ paddingTop: "10px" }} />
    </>
  );
};
