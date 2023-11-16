import * as React from 'react';
import { IVisibility } from './utils/decorators/classNames';
import { OUIAProps } from '@patternfly/react-core';
import { TableVariant } from './TableTypes';
export interface BaseCellProps {
    /** Content rendered inside the cell */
    children?: React.ReactNode;
    /** Additional classes added to the cell  */
    className?: string;
    /** Element to render */
    component?: React.ReactNode;
    /** Modifies cell to center its contents. */
    textCenter?: boolean;
    /** Style modifier to apply */
    modifier?: 'breakWord' | 'fitContent' | 'nowrap' | 'truncate' | 'wrap';
    /** Width percentage modifier */
    width?: 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 60 | 70 | 80 | 90 | 100;
    /** Visibility breakpoint modifiers */
    visibility?: (keyof IVisibility)[];
    /** @hide Forwarded ref */
    innerRef?: React.Ref<any>;
}
export interface TableProps extends React.HTMLProps<HTMLTableElement>, OUIAProps {
    /** Adds an accessible name for the Table */
    'aria-label'?: string;
    /** Content rendered inside the Table */
    children?: React.ReactNode;
    /** Additional classes added to the Table  */
    className?: string;
    /**
     * Style variant for the Table
     * compact: Reduces spacing and makes the table more compact
     */
    variant?: TableVariant | 'compact';
    /** Render borders */
    borders?: boolean;
    /** Specifies the grid breakpoints  */
    gridBreakPoint?: '' | 'grid' | 'grid-md' | 'grid-lg' | 'grid-xl' | 'grid-2xl';
    /** A valid WAI-ARIA role to be applied to the table element */
    role?: string;
    /** If set to true, the table header sticks to the top of its container */
    isStickyHeader?: boolean;
    /** @hide Forwarded ref */
    innerRef?: React.RefObject<any>;
    /** Flag indicating table is a tree table */
    isTreeTable?: boolean;
    /** Flag indicating this table is nested within another table */
    isNested?: boolean;
    /** Flag indicating this table should be striped. This property works best for a single <tbody> table. Striping may also be done manually by applying this property to Tbody and Tr components. */
    isStriped?: boolean;
    /** Flag indicating this table contains expandable rows to maintain proper striping */
    isExpandable?: boolean;
    /** Flag indicating this table's rows will not have the inset typically reserved for expanding/collapsing rows in a tree table. Intended for use on tree tables with no visible rows with children. */
    hasNoInset?: boolean;
    /** Collection of column spans for nested headers. Deprecated: see https://github.com/patternfly/patternfly/issues/4584 */
    nestedHeaderColumnSpans?: number[];
    /** Visible text to add alongside the hidden a11y caption for tables with selectable rows. */
    selectableRowCaptionText?: string;
    /** Value to overwrite the randomly generated data-ouia-component-id.*/
    ouiaId?: number | string;
    /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
    ouiaSafe?: boolean;
}
interface TableContextProps {
    registerSelectableRow?: () => void;
}
export declare const TableContext: React.Context<TableContextProps>;
export declare const Table: React.ForwardRefExoticComponent<Pick<TableProps, "children" | "className" | "onSelect" | "name" | "cite" | "data" | "form" | "label" | "slot" | "span" | "style" | "summary" | "title" | "pattern" | "color" | "hidden" | "type" | "onChange" | "property" | "radioGroup" | "wrap" | "content" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "size" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "value" | "width" | "wmode" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "spellCheck" | "tabIndex" | "translate" | "role" | "about" | "datatype" | "inlist" | "prefix" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "variant" | "innerRef" | "ouiaId" | "ouiaSafe" | "borders" | "gridBreakPoint" | "isStickyHeader" | "isTreeTable" | "isNested" | "isStriped" | "isExpandable" | "hasNoInset" | "nestedHeaderColumnSpans" | "selectableRowCaptionText"> & React.RefAttributes<HTMLTableElement>>;
export {};
//# sourceMappingURL=Table.d.ts.map