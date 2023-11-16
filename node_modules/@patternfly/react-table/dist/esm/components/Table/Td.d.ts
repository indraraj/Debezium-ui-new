import * as React from 'react';
import { BaseCellProps } from './Table';
import { TdActionsType, TdCompoundExpandType, TdDraggableType, TdExpandType, TdFavoritesType, TdSelectType, TdTreeRowType } from './base/types';
export interface TdProps extends BaseCellProps, Omit<React.HTMLProps<HTMLTableDataCellElement>, 'onSelect' | 'width'> {
    /**
     * The column header the cell corresponds to.
     * This attribute replaces table header in mobile viewport. It is rendered by ::before pseudo element.
     */
    dataLabel?: string;
    /** Renders a checkbox or radio select */
    select?: TdSelectType;
    /** Turns the cell into an actions cell. Recommended to use an ActionsColumn component as a child of the Td rather than this prop. */
    actions?: TdActionsType;
    /** Turns the cell into an expansion toggle and determines if the corresponding expansion row is open */
    expand?: TdExpandType;
    /** Turns the cell into a compound expansion toggle */
    compoundExpand?: TdCompoundExpandType;
    /** Turns the cell into a favorites cell with a star button */
    favorites?: TdFavoritesType;
    /** Turns the cell into the first cell in a tree table row */
    treeRow?: TdTreeRowType;
    /** Turns the cell into the first cell in a draggable row*/
    draggableRow?: TdDraggableType;
    /** True to remove padding */
    noPadding?: boolean;
    /** Applies pf-v5-c-table__action to td */
    isActionCell?: boolean;
    /**
     * Tooltip to show on the body cell.
     * Note: If the body cell is truncated and has simple string content, it will already attempt to display the cell text.
     * If you want to show a tooltip that differs from the cell text, you can set it here.
     * To disable it completely you can set it to null.
     */
    tooltip?: React.ReactNode;
    /** Callback on mouse enter */
    onMouseEnter?: (event: any) => void;
    /** Indicates the column should be sticky */
    isStickyColumn?: boolean;
    /** Adds a border to the right side of the cell */
    hasRightBorder?: boolean;
    /** Adds a border to the left side of the cell */
    hasLeftBorder?: boolean;
    /** Minimum width for a sticky column */
    stickyMinWidth?: string;
    /** Left offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that precede the current sticky column. */
    stickyLeftOffset?: string;
    /** Right offset of a sticky column. This will typically be equal to the combined value set by stickyMinWidth of any sticky columns that come after the current sticky column. */
    stickyRightOffset?: string;
}
export declare const Td: React.ForwardRefExoticComponent<Pick<TdProps, "children" | "className" | "name" | "cite" | "data" | "form" | "label" | "slot" | "select" | "span" | "style" | "summary" | "title" | "pattern" | "color" | "hidden" | "type" | "onChange" | "property" | "radioGroup" | "wrap" | "content" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "alt" | "as" | "async" | "autoComplete" | "autoFocus" | "autoPlay" | "capture" | "cellPadding" | "cellSpacing" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "controls" | "coords" | "crossOrigin" | "dateTime" | "default" | "defer" | "disabled" | "download" | "encType" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "frameBorder" | "headers" | "height" | "high" | "href" | "hrefLang" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "list" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "max" | "maxLength" | "media" | "mediaGroup" | "method" | "min" | "minLength" | "multiple" | "muted" | "nonce" | "noValidate" | "open" | "optimum" | "placeholder" | "playsInline" | "poster" | "preload" | "readOnly" | "rel" | "required" | "reversed" | "rows" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "size" | "sizes" | "src" | "srcDoc" | "srcLang" | "srcSet" | "start" | "step" | "target" | "useMap" | "value" | "width" | "wmode" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "spellCheck" | "tabIndex" | "translate" | "role" | "about" | "datatype" | "inlist" | "prefix" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "tooltip" | "component" | "actions" | "innerRef" | "noPadding" | "dataLabel" | "expand" | "isStickyColumn" | "hasRightBorder" | "hasLeftBorder" | "stickyMinWidth" | "stickyLeftOffset" | "stickyRightOffset" | "textCenter" | "modifier" | "visibility" | "compoundExpand" | "favorites" | "treeRow" | "draggableRow" | "isActionCell"> & React.RefAttributes<HTMLTableDataCellElement>>;
//# sourceMappingURL=Td.d.ts.map