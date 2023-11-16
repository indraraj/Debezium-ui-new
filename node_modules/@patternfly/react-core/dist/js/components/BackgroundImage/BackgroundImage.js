"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundImage = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_styles_1 = require("@patternfly/react-styles");
const background_image_1 = tslib_1.__importDefault(require("@patternfly/react-styles/css/components/BackgroundImage/background-image"));
const BackgroundImage = (_a) => {
    var { className, src } = _a, props = tslib_1.__rest(_a, ["className", "src"]);
    return (react_1.default.createElement("div", Object.assign({ className: (0, react_styles_1.css)(background_image_1.default.backgroundImage, className), style: {
            '--pf-v5-c-background-image--BackgroundImage': `url(${src})`
        } }, props)));
};
exports.BackgroundImage = BackgroundImage;
exports.BackgroundImage.displayName = 'BackgroundImage';
//# sourceMappingURL=BackgroundImage.js.map