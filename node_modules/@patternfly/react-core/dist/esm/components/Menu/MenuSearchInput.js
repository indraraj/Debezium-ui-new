import * as React from 'react';
import { css } from '@patternfly/react-styles';
export const MenuSearchInput = React.forwardRef((props, ref) => (
// Update to use the styles object when core adds the class
React.createElement("div", Object.assign({}, props, { className: css('pf-v5-c-menu__search-input', props.className), ref: ref }))));
MenuSearchInput.displayName = 'MenuSearchInput';
//# sourceMappingURL=MenuSearchInput.js.map