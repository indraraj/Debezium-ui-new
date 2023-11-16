import { __rest } from "tslib";
import React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/BackgroundImage/background-image';
export const BackgroundImage = (_a) => {
    var { className, src } = _a, props = __rest(_a, ["className", "src"]);
    return (React.createElement("div", Object.assign({ className: css(styles.backgroundImage, className), style: {
            '--pf-v5-c-background-image--BackgroundImage': `url(${src})`
        } }, props)));
};
BackgroundImage.displayName = 'BackgroundImage';
//# sourceMappingURL=BackgroundImage.js.map