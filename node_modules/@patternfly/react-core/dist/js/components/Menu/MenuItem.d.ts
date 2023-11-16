import * as React from 'react';
import { TooltipProps } from '../Tooltip';
export interface MenuItemProps extends Omit<React.HTMLProps<HTMLLIElement>, 'onClick'> {
    /** Content rendered inside the menu list item. */
    children?: React.ReactNode;
    /** Additional classes added to the menu list item */
    className?: string;
    /** Identifies the component in the Menu onSelect or onActionClick callback */
    itemId?: any;
    /** Target navigation link. Should not be used if the flyout prop is defined. */
    to?: string;
    /** Navigation link target. Only set when the to property is present. If isExternalLink is also passed in, this property will be set to "_blank". */
    target?: string;
    /** Navigation link relationship. Only set when the to property is present. */
    rel?: string;
    /** Flag indicating the item has a checkbox */
    hasCheckbox?: boolean;
    /** Flag indicating whether the item is active */
    isActive?: boolean;
    /** Flag indicating if the item is favorited */
    isFavorited?: boolean;
    /** Flag indicating if the item causes a load */
    isLoadButton?: boolean;
    /** Flag indicating a loading state */
    isLoading?: boolean;
    /** Callback for item click */
    onClick?: (event?: any) => void;
    /** Component used to render the menu item */
    component?: React.ElementType<any> | React.ComponentType<any>;
    /** Render item as disabled option */
    isDisabled?: boolean;
    /** Render item as aria-disabled option */
    isAriaDisabled?: boolean;
    /** Props for adding a tooltip to a menu item */
    tooltipProps?: TooltipProps;
    /** Render item with icon */
    icon?: React.ReactNode;
    /** Render item with one or more actions */
    actions?: React.ReactNode;
    /** Description of the menu item */
    description?: React.ReactNode;
    /** Render an external link icon on focus or hover, and set the link's
     * "target" attribute to a value of "_blank".
     */
    isExternalLink?: boolean;
    /** Flag indicating if the option is selected */
    isSelected?: boolean;
    /** Flag indicating the item is focused */
    isFocused?: boolean;
    /** Flag indicating the item is in danger state */
    isDanger?: boolean;
    /** @beta Flyout menu. Should not be used if the to prop is defined. */
    flyoutMenu?: React.ReactElement;
    /** @beta Callback function when mouse leaves trigger */
    onShowFlyout?: (event?: any) => void;
    /** @beta Drilldown menu of the item. Should be a Menu or DrilldownMenu type. */
    drilldownMenu?: React.ReactNode | (() => React.ReactNode);
    /** @beta Sub menu direction */
    direction?: 'down' | 'up';
    /** @beta True if item is on current selection path */
    isOnPath?: boolean;
    /** Adds an accessible name to the menu item. */
    'aria-label'?: string;
    /** @hide Forwarded ref */
    innerRef?: React.Ref<HTMLAnchorElement | HTMLButtonElement>;
    /** Sets the id attribute on the menu item component. */
    id?: string;
}
export declare const MenuItem: React.ForwardRefExoticComponent<Pick<MenuItemProps, "children" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "cite" | "classID" | "cols" | "colSpan" | "content" | "controls" | "coords" | "crossOrigin" | "data" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "form" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "label" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "name" | "nonce" | "noValidate" | "open" | "optimum" | "pattern" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "size" | "sizes" | "span" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "summary" | "target" | "type" | "useMap" | "value" | "width" | "wmode" | "wrap" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "slot" | "spellCheck" | "style" | "tabIndex" | "title" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "direction" | "to" | "component" | "isActive" | "isDisabled" | "isAriaDisabled" | "isLoading" | "icon" | "isDanger" | "innerRef" | "actions" | "description" | "isFavorited" | "itemId" | "hasCheckbox" | "isLoadButton" | "flyoutMenu" | "isExternalLink" | "isSelected" | "isFocused" | "onShowFlyout" | "drilldownMenu" | "isOnPath" | "tooltipProps"> & React.RefAttributes<any>>;
//# sourceMappingURL=MenuItem.d.ts.map