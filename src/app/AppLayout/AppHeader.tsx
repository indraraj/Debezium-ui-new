import {
  Brand,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadMain,
  Switch,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem,
} from '@patternfly/react-core';
import logo from '@app/assets/images/debezium_logo.png';
import React from 'react';
import { KafkaConnectCluster } from '@app/components';
// import { BarsIcon } from '@patternfly/react-icons';

interface Props {
  // toggleSidebar: () => void;
  updateCluster: (cluster: string) => void;
  notificationBadge: React.ReactNode;
}

const AppHeader: React.FC<Props> = ({ updateCluster, notificationBadge }) => {
  return (
    <Masthead display={{ default: 'inline' }}>
      <MastheadMain>
        <MastheadBrand>
          <Brand src={logo} alt="Patterfly Logo" heights={{ default: '36px' }} />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <Toolbar id="toolbar" isFullHeight isStatic>
          <ToolbarContent>
            <ToolbarItem variant="separator" />
            <ToolbarItem>
              <KafkaConnectCluster updateCluster={updateCluster} />
            </ToolbarItem>
            <ToolbarGroup
              variant="icon-button-group"
              align={{ default: 'alignRight' }}
              spacer={{ default: 'spacerNone', md: 'spacerMd' }}
            >
              <ToolbarItem>
                {notificationBadge}
              </ToolbarItem>

              <ToolbarItem>
                <Switch
                  id="simple-switch"
                  label="Message when on"
                  labelOff="Dark theme"
                  isChecked={true}
                  onChange={() => {}}
                  ouiaId="BasicSwitch"
                />
              </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
        </Toolbar>
      </MastheadContent>
    </Masthead>
  );
};

export default AppHeader;
