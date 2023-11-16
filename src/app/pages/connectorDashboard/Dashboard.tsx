import * as React from 'react';
import { PageSection, PageSectionTypes, Text, TextContent, Wizard, WizardStep } from '@patternfly/react-core';
// import { AppBreadcrumb } from '@app/components';

const Dashboard: React.FunctionComponent = () => {
  const PageTemplateTitle = (
    <PageSection variant="light">
      <TextContent>
        <Text component="h1">Create connectors</Text>
        <Text component="p">Configure your connector by following the steps below.</Text>
      </TextContent>
    </PageSection>
  );

  return (
    <>
      {/* <DashboardWrapper hasPageTemplateTitle> */}
      {/* <AppBreadcrumb /> */}
      {PageTemplateTitle}
      <PageSection isFilled type={PageSectionTypes.wizard}>
        <Wizard>
          <WizardStep name="Information" id="wizard-step-1">
            <p>Step 1 content</p>
          </WizardStep>
          <WizardStep
            name="Configuration"
            id="wizard-step-2"
            steps={[
              <WizardStep name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
                <p>Configuration substep A</p>
              </WizardStep>,
              <WizardStep name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
                <p>Configuration substep B</p>
              </WizardStep>,
            ]}
          />
          <WizardStep name="Additional" id="wizard-step-3">
            <p>Step 3 content</p>
          </WizardStep>
          <WizardStep name="Review" id="wizard-step-4" footer={{ nextButtonText: 'Finish' }}>
            <p>Review step content</p>
          </WizardStep>
        </Wizard>
      </PageSection>
      {/* </DashboardWrapper> */}
    </>
  );
};

export { Dashboard };
