/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export class BuildConfig {
					public static class: java.lang.Class<com.liveperson.infra.ui.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class BaseMessageViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.adapter.viewholder.BaseMessageViewHolder>;
								public applyColors(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class BaseViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder>;
								public mMessageTextView: globalAndroid.widget.TextView;
								public mTimestampAccessibilityString: string;
								public setContentDescription(param0: string): void;
								public getTimeFormat(param0: number): string;
								public setOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
								public setContextualBehaviorOnLongClick(param0: globalAndroid.view.View.OnLongClickListener): boolean;
								public linkifyText(param0: globalAndroid.widget.TextView): boolean;
								public updateContentDescription(): void;
								public setTimestampTextView(param0: number): void;
								public recycle(): void;
								public setContextualBehaviorOnClick(param0: globalAndroid.view.View.OnClickListener): void;
								public constructor(param0: globalAndroid.view.View);
								public getTextToCopy(): string;
								public getTempPosition(): number;
								public setMessageTextView(param0: string): void;
								public onBind(): void;
								public setTempPosition(param0: number): void;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
								public getAccessibilityDateTimeFormat(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class EndViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseMessageViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.adapter.viewholder.EndViewHolder>;
								public mTimestampTextView: globalAndroid.widget.TextView;
								public updateContentDescription(): void;
								public setTimestampTextView(param0: number): void;
								public constructor(param0: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class HeaderViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.adapter.viewholder.HeaderViewHolder>;
								public getTextToCopy(): string;
								public setHeaderText(param0: string): void;
								public updateContentDescription(): void;
								public constructor(param0: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class MiddleViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseMessageViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder>;
								public constructor(param0: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class StartViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseMessageViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.adapter.viewholder.StartViewHolder>;
								public mTimestampTextView: globalAndroid.widget.TextView;
								public setTimestampTextView(param0: number): void;
								public constructor(param0: globalAndroid.view.View);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export class HeaderPositionCalculator {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.header.HeaderPositionCalculator>;
							public initHeaderBounds(param0: globalAndroid.graphics.Rect, param1: globalAndroid.support.v7.widget.RecyclerView, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: boolean): void;
							public hasStickyHeader(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
							public constructor(param0: com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter<any>, param1: com.liveperson.infra.ui.view.header.caching.HeaderProvider, param2: com.liveperson.infra.ui.view.header.util.OrientationProvider, param3: com.liveperson.infra.ui.view.header.calculation.DimensionCalculator);
							public hasNewHeader(param0: number, param1: boolean): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export class StickyRecyclerHeadersAdapter<VH>  extends java.lang.Object {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter<any>>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getHeaderId(param0: number): number;
								onCreateHeaderViewHolder(param0: globalAndroid.view.ViewGroup): VH;
								onBindHeaderViewHolder(param0: VH, param1: number): void;
								getItemCount(): number;
							});
							public constructor();
							public getHeaderId(param0: number): number;
							public getItemCount(): number;
							public onCreateHeaderViewHolder(param0: globalAndroid.view.ViewGroup): VH;
							public onBindHeaderViewHolder(param0: VH, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export class StickyRecyclerHeadersDecoration {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.header.StickyRecyclerHeadersDecoration>;
							public invalidateHeaders(): void;
							public findHeaderPositionUnder(param0: number, param1: number): number;
							public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.support.v7.widget.RecyclerView, param2: globalAndroid.support.v7.widget.RecyclerView.State): void;
							public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: globalAndroid.support.v7.widget.RecyclerView, param3: globalAndroid.support.v7.widget.RecyclerView.State): void;
							public constructor(param0: com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter<any>);
							public getHeaderView(param0: globalAndroid.support.v7.widget.RecyclerView, param1: number): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module caching {
							export class HeaderProvider {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.header.caching.HeaderProvider>;
								/**
								 * Constructs a new instance of the com.liveperson.infra.ui.view.header.caching.HeaderProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getHeader(param0: globalAndroid.support.v7.widget.RecyclerView, param1: number): globalAndroid.view.View;
									invalidate(): void;
								});
								public constructor();
								public getHeader(param0: globalAndroid.support.v7.widget.RecyclerView, param1: number): globalAndroid.view.View;
								public invalidate(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module caching {
							export class HeaderViewCache extends com.liveperson.infra.ui.view.header.caching.HeaderProvider {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.header.caching.HeaderViewCache>;
								public getHeader(param0: globalAndroid.support.v7.widget.RecyclerView, param1: number): globalAndroid.view.View;
								public invalidate(): void;
								public constructor(param0: com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter<any>, param1: com.liveperson.infra.ui.view.header.util.OrientationProvider);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module calculation {
							export class DimensionCalculator {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.header.calculation.DimensionCalculator>;
								public initMargins(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module rendering {
							export class HeaderRenderer {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.header.rendering.HeaderRenderer>;
								public constructor(param0: com.liveperson.infra.ui.view.header.util.OrientationProvider);
								public drawHeader(param0: globalAndroid.support.v7.widget.RecyclerView, param1: globalAndroid.graphics.Canvas, param2: globalAndroid.view.View, param3: globalAndroid.graphics.Rect): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module util {
							export class LinearLayoutOrientationProvider extends com.liveperson.infra.ui.view.header.util.OrientationProvider {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.header.util.LinearLayoutOrientationProvider>;
								public getOrientation(param0: globalAndroid.support.v7.widget.RecyclerView): number;
								public constructor();
								public isReverseLayout(param0: globalAndroid.support.v7.widget.RecyclerView): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module util {
							export class OrientationProvider {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.header.util.OrientationProvider>;
								/**
								 * Constructs a new instance of the com.liveperson.infra.ui.view.header.util.OrientationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getOrientation(param0: globalAndroid.support.v7.widget.RecyclerView): number;
									isReverseLayout(param0: globalAndroid.support.v7.widget.RecyclerView): boolean;
								});
								public constructor();
								public getOrientation(param0: globalAndroid.support.v7.widget.RecyclerView): number;
								public isReverseLayout(param0: globalAndroid.support.v7.widget.RecyclerView): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module resources {
						export class ResourceHelper {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.resources.ResourceHelper>;
							public constructor();
							public static updateTextColorLink(param0: globalAndroid.widget.TextView, param1: number): void;
							public static updateBackgroundStrokeColor(param0: globalAndroid.view.View, param1: number, param2: number): void;
							public static updateBackgroundSolidColor(param0: globalAndroid.view.View, param1: number): void;
							public static updateBackgroundDrawable(param0: globalAndroid.view.View, param1: number): void;
							public static updateTextColor(param0: globalAndroid.widget.TextView, param1: number): void;
							public static updateBackgroundColor(param0: globalAndroid.view.View, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class CustomButton {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.CustomButton>;
							public static TAG: string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class CustomEditText {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.CustomEditText>;
							public static TAG: string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class CustomTextView {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.CustomTextView>;
							public static TAG: string;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class RoundedCornersLayout {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.RoundedCornersLayout>;
							public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
							public setBorderColor(param0: number): void;
							public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
							public setBorders(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setCornersRadius(param0: number, param1: number, param2: number, param3: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setBorderWidth(param0: number): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class TooltipWindow {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TooltipWindow>;
							public static TAG: string;
							public isTooltipShown(): boolean;
							public enable(param0: boolean): void;
							public showToolTip(param0: globalAndroid.view.View, param1: string): void;
							public showToolTip(param0: globalAndroid.view.View, param1: string, param2: boolean): void;
							public dismissTooltip(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class TouchImageView {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView>;
							public canScrollHorizontally(param0: number): boolean;
							public setZoom(param0: number, param1: number, param2: number, param3: globalAndroid.widget.ImageView.ScaleType): void;
							public setImageResource(param0: number): void;
							public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							public setZoom(param0: com.liveperson.infra.ui.view.ui.TouchImageView): void;
							public isZoomed(): boolean;
							public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
							public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
							public setZoom(param0: number): void;
							public setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
							public onMeasure(param0: number, param1: number): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public getZoomedRect(): globalAndroid.graphics.RectF;
							public getCurrentZoom(): number;
							public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
							public setOnTouchImageViewListener(param0: com.liveperson.infra.ui.view.ui.TouchImageView.OnTouchImageViewListener): void;
							public getMinZoom(): number;
							public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
							public resetZoom(): void;
							public onDraw(param0: globalAndroid.graphics.Canvas): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public setScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
							public setZoom(param0: number, param1: number, param2: number): void;
							public getMaxZoom(): number;
							public setMinZoom(param0: number): void;
							public setOnTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
							public setScrollPosition(param0: number, param1: number): void;
							public getScrollPosition(): globalAndroid.graphics.PointF;
							public canScrollHorizontallyFroyo(param0: number): boolean;
							public setImageURI(param0: globalAndroid.net.Uri): void;
							public setMaxZoom(param0: number): void;
							public onSaveInstanceState(): globalAndroid.os.Parcelable;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module TouchImageView {
							export class CompatScroller {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.CompatScroller>;
								public constructor(param0: com.liveperson.infra.ui.view.ui.TouchImageView, param1: globalAndroid.content.Context);
								public getCurrY(): number;
								public forceFinished(param0: boolean): void;
								public getCurrX(): number;
								public computeScrollOffset(): boolean;
								public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
								public isFinished(): boolean;
							}
							export class DoubleTapZoom {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.DoubleTapZoom>;
								public run(): void;
							}
							export class Fling {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.Fling>;
								public cancelFling(): void;
								public run(): void;
							}
							export class GestureListener {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.GestureListener>;
								public onLongPress(param0: globalAndroid.view.MotionEvent): void;
								public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
								public onDoubleTap(param0: globalAndroid.view.MotionEvent): boolean;
								public onSingleTapConfirmed(param0: globalAndroid.view.MotionEvent): boolean;
								public onDoubleTapEvent(param0: globalAndroid.view.MotionEvent): boolean;
							}
							export class OnTouchImageViewListener {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.OnTouchImageViewListener>;
								/**
								 * Constructs a new instance of the com.liveperson.infra.ui.view.ui.TouchImageView$OnTouchImageViewListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onMove(): void;
								});
								public constructor();
								public onMove(): void;
							}
							export class PrivateOnTouchListener {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.PrivateOnTouchListener>;
								public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
							}
							export class ScaleListener {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.ScaleListener>;
								public onScale(param0: globalAndroid.view.ScaleGestureDetector): boolean;
								public onScaleBegin(param0: globalAndroid.view.ScaleGestureDetector): boolean;
								public onScaleEnd(param0: globalAndroid.view.ScaleGestureDetector): void;
							}
							export class State {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.State>;
								public static NONE: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static DRAG: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static ZOOM: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static FLING: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static ANIMATE_ZOOM: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static values(): native.Array<com.liveperson.infra.ui.view.ui.TouchImageView.State>;
								public static valueOf(param0: string): com.liveperson.infra.ui.view.ui.TouchImageView.State;
							}
							export class ZoomVariables {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.ui.TouchImageView.ZoomVariables>;
								public scale: number;
								public focusX: number;
								public focusY: number;
								public scaleType: globalAndroid.widget.ImageView.ScaleType;
								public constructor(param0: com.liveperson.infra.ui.view.ui.TouchImageView, param1: number, param2: number, param3: number, param4: globalAndroid.widget.ImageView.ScaleType);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export abstract class BaseEnterMessage implements com.liveperson.infra.ui.view.uicomponents.IConnectionChangedCustomView, com.liveperson.infra.ui.view.uicomponents.IUpdateFromBrand {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.uicomponents.BaseEnterMessage>;
							public static RECORDING_LAYOUT_ANIMATION_DURATION_MILLIS: number;
							public textInput: globalAndroid.widget.EditText;
							public mTextSendButton: globalAndroid.widget.Button;
							public mImageSendButton: globalAndroid.widget.ImageButton;
							public trashButton: globalAndroid.widget.ImageButton;
							public mEnterMessageLayoutSwitcher: globalAndroid.widget.ViewSwitcher;
							public mBrandIdProvider: com.liveperson.infra.ui.view.uicomponents.IConversationProvider;
							public mEnterMessageListener: com.liveperson.infra.ui.view.uicomponents.IEnterMessageListener;
							public mIsConnected: boolean;
							public mIsUpdated: boolean;
							public onBeforeChangedText(): void;
							public updateSendButtonState(): void;
							public showNoNetworkMessage(): void;
							public shouldUpdateSendButton(): boolean;
							public clearText(): void;
							public setEnterMessageListener(param0: com.liveperson.infra.ui.view.uicomponents.IEnterMessageListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public setEnabled(param0: boolean): void;
							public onConnectionChanged(param0: boolean): void;
							public setText(param0: string): void;
							public sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
							public getText(): string;
							public onAfterChangedText(param0: string): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onFinishInflate(): void;
							public static extractLinks(param0: string): native.Array<string>;
							public setOverflowMenu(param0: com.liveperson.infra.ui.view.uicomponents.IOverflowMenu): void;
							public setBrandIdProvider(param0: com.liveperson.infra.ui.view.uicomponents.IConversationProvider): void;
							public onUpdate(param0: boolean): void;
							public onHasText(param0: boolean): void;
							public isContentWaiting(): boolean;
							public hideSoftKeyboard(param0: globalAndroid.view.View): void;
							public sendMessage(): void;
							public sendMessage(param0: string): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module BaseEnterMessage {
							export class InputState {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.uicomponents.BaseEnterMessage.InputState>;
								public static HAS_TEXT: com.liveperson.infra.ui.view.uicomponents.BaseEnterMessage.InputState;
								public static NONE: com.liveperson.infra.ui.view.uicomponents.BaseEnterMessage.InputState;
								public static values(): native.Array<com.liveperson.infra.ui.view.uicomponents.BaseEnterMessage.InputState>;
								public static valueOf(param0: string): com.liveperson.infra.ui.view.uicomponents.BaseEnterMessage.InputState;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export class ICloseMenuListener {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCloseMenu(): void;
							});
							public constructor();
							public onCloseMenu(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export class IConnectionChangedCustomView {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.uicomponents.IConnectionChangedCustomView>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IConnectionChangedCustomView interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnectionChanged(param0: boolean): void;
							});
							public constructor();
							public onConnectionChanged(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export class IConversationProvider {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.uicomponents.IConversationProvider>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IConversationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getBrandId(): string;
								getTargetId(): string;
							});
							public constructor();
							public getTargetId(): string;
							public getBrandId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export class IEnterMessageListener {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.uicomponents.IEnterMessageListener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IEnterMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onMessageSent(): void;
								onVoiceRecordingPermissionRequired(param0: com.liveperson.infra.IPermissionCallback): void;
							});
							public constructor();
							public onVoiceRecordingPermissionRequired(param0: com.liveperson.infra.IPermissionCallback): void;
							public onMessageSent(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export class IOverflowMenu {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.uicomponents.IOverflowMenu>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IOverflowMenu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								show(): void;
								hide(): void;
								isMenuOpen(): boolean;
								setOnCloseListener(param0: com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener): void;
							});
							public constructor();
							public show(): void;
							public hide(): void;
							public isMenuOpen(): boolean;
							public setOnCloseListener(param0: com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export class IUpdateFromBrand {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.uicomponents.IUpdateFromBrand>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IUpdateFromBrand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onUpdate(param0: boolean): void;
							});
							public constructor();
							public onUpdate(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module utils {
						export class ImageUrlUtil {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.utils.ImageUrlUtil>;
							public constructor();
							public static completeToValidImageUrl(param0: string, param1: string): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module utils {
						export class UIUtils {
							public static class: java.lang.Class<com.liveperson.infra.ui.view.utils.UIUtils>;
							public static TAG: string;
							public constructor();
							public static detectEmojis(param0: string): number;
							public static changeCustomTextViewFont(param0: globalAndroid.widget.TextView, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet, param3: native.Array<number>, param4: number): void;
							public static startProgressBarAnimation(param0: globalAndroid.widget.ImageView, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module utils {
						export module picasso {
							export class CircleTransform {
								public static class: java.lang.Class<com.liveperson.infra.ui.view.utils.picasso.CircleTransform>;
								public key(): string;
								public constructor();
								public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter:1

