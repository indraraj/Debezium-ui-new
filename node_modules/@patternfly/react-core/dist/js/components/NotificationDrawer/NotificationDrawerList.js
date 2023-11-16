"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationDrawerList = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const NotificationDrawerList = (_a) => {
    var { children, className = '', isHidden = false, 'aria-label': ariaLabel } = _a, props = tslib_1.__rest(_a, ["children", "className", "isHidden", 'aria-label']);
    return (React.createElement("ul", Object.assign({}, props, { className: (0, react_styles_1.css)('pf-v5-c-notification-drawer__list', className), hidden: isHidden, role: "list", "aria-label": ariaLabel }), children));
};
exports.NotificationDrawerList = NotificationDrawerList;
exports.NotificationDrawerList.displayName = 'NotificationDrawerList';
//# sourceMappingURL=NotificationDrawerList.js.map