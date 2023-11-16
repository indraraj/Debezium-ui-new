import { __rest } from "tslib";
import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/InputGroup/input-group';
import { css } from '@patternfly/react-styles';
import { FormSelect } from '../FormSelect';
import { TextArea } from '../TextArea';
import { TextInput } from '../TextInput';
export const InputGroupBase = (_a) => {
    var { className, children, innerRef } = _a, props = __rest(_a, ["className", "children", "innerRef"]);
    const getIdItem = () => {
        const getChildId = (_children) => React.Children.toArray(_children).find((_child) => { var _a, _b; return !formCtrls.includes((_a = _child === null || _child === void 0 ? void 0 : _child.type) === null || _a === void 0 ? void 0 : _a.displayName) && ((_b = _child === null || _child === void 0 ? void 0 : _child.props) === null || _b === void 0 ? void 0 : _b.id); });
        let childId = getChildId(children);
        if (childId) {
            return childId;
        }
        React.Children.toArray(children).find((child) => {
            const _childId = getChildId(child.props.children);
            if (_childId) {
                childId = _childId;
                return true;
            }
        });
        return childId;
    };
    const formCtrls = [FormSelect, TextArea, TextInput].map((comp) => comp.displayName);
    const idItem = getIdItem();
    const ref = React.useRef(null);
    const inputGroupRef = innerRef || ref;
    const childrenWithId = React.Children.map(children, (child) => {
        var _a;
        if ((child === null || child === void 0 ? void 0 : child.type.displayName) === 'InputGroupItem') {
            const newChildren = React.Children.map(child.props.children, (_child) => {
                var _a;
                if (!_child.props) {
                    return _child;
                }
                if (_child.props['aria-describedby']) {
                    return _child;
                }
                if (!formCtrls.includes(_child.type.displayName)) {
                    return _child;
                }
                return React.cloneElement(_child, {
                    'aria-describedby': _child.props['aria-describedby'] === '' ? undefined : (_a = idItem === null || idItem === void 0 ? void 0 : idItem.props) === null || _a === void 0 ? void 0 : _a.id
                });
            });
            return React.cloneElement(child, {}, newChildren);
        }
        if (child === null || child === void 0 ? void 0 : child.props['aria-describedby']) {
            return child;
        }
        if (!formCtrls.includes(child === null || child === void 0 ? void 0 : child.type.displayName)) {
            return child;
        }
        return React.cloneElement(child, {
            'aria-describedby': child.props['aria-describedby'] === '' ? undefined : (_a = idItem === null || idItem === void 0 ? void 0 : idItem.props) === null || _a === void 0 ? void 0 : _a.id
        });
    });
    return (React.createElement("div", Object.assign({ ref: inputGroupRef, className: css(styles.inputGroup, className) }, props), idItem ? childrenWithId : children));
};
InputGroupBase.displayName = 'InputGroupBase';
export const InputGroup = React.forwardRef((props, ref) => (React.createElement(InputGroupBase, Object.assign({ innerRef: ref }, props))));
InputGroup.displayName = 'InputGroup';
//# sourceMappingURL=InputGroup.js.map