import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';

export const AppBreadcrumb: React.FunctionComponent = () => (
  <Breadcrumb ouiaId="BasicBreadcrumb">
    <BreadcrumbItem to="/">Connector</BreadcrumbItem>
    {/* <BreadcrumbItem to="#">Section title</BreadcrumbItem>
    <BreadcrumbItem to="#">Section title</BreadcrumbItem> */}
    <BreadcrumbItem to="/create-connector" isActive>
      Create connector
    </BreadcrumbItem>
  </Breadcrumb>
);
