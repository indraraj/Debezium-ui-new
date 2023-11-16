import { Form, FormGroup, FormSelect, FormSelectOption } from '@patternfly/react-core';
import React, { useEffect } from 'react';

interface Props {
  updateCluster: (cluster: string) => void;
}

export const KafkaConnectCluster: React.FC<Props> = ({ updateCluster }) => {
  const [formValue, setFormValue] = React.useState(process.env.KAFKA_CONNECT_CLUSTERS?.split(',')[0]);

  const onChange = (_event: React.FormEvent<HTMLSelectElement>, value: string) => {
    setFormValue(value);
    updateCluster(value);
  };

  useEffect(() => {
    const value = process.env.KAFKA_CONNECT_CLUSTERS?.split(',')[0];
    setFormValue(value);
    updateCluster(value || '');
  }, []);

  return (
    <Form isHorizontal className="pf-v5-theme-dark">
      <FormGroup label="Kafka connect cluster:" type="string" fieldId="kafka-connect-cluster">
        <FormSelect id="kafka-connect-cluster" value={formValue} onChange={onChange} aria-label="Kafka connect cluster">
          {process.env.KAFKA_CONNECT_CLUSTERS?.split(',').map((cluster) => (
            <FormSelectOption key={cluster} value={cluster} label={cluster} />
          ))}
        </FormSelect>
      </FormGroup>
    </Form>
  );
};
