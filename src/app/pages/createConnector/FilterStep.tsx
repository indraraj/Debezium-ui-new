
import { FormInputComponent } from "@app/components";
import { FormStep } from "@app/constants";
import { Form } from "@patternfly/react-core";
import { cloneDeep } from "lodash";
import React, { useCallback } from "react";

interface FilterStepProps {
  filterProperties: ConnectorProperties[];
  requiredList: string[] | null | undefined;
}

export const FilterStep: React.FC<FilterStepProps> = ({
  filterProperties,
  requiredList,
}) => {
  const [formData, setFormData] = React.useState<Record<string, any>>({});

  const updateFormData = useCallback(
    (key: string, value: any) => {
      setFormData(cloneDeep({ ...formData, [key]: value }));
    },
    [formData]
  );

  return (
    <Form isWidthLimited>
      {filterProperties.map((property) => {
        return (
          <FormInputComponent
            property={{
              ...cloneDeep(property),
              // "x-name": property["x-name"].replace(/\./g, "_"),
              "x-name": property["x-name"],
            }}
            requiredList={requiredList}
            formStep={FormStep.FILTER}
            updateFormData={updateFormData}
            formData={formData}
            key={property.title}
          />
        );
      })}
    </Form>
  );
};
