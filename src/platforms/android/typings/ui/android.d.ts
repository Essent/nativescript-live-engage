/// <reference path="./_helpers.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export class BuildConfig {
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

import androidcontentContext = android.content.Context;
import androiddatabaseCursor = android.database.Cursor;
import androidviewViewGroup = android.view.ViewGroup;
import androidsupportv7widgetRecyclerViewViewHolder = android.support.v7.widget.RecyclerView.ViewHolder;
import javalangObject = java.lang.Object;
import androidcontentresResources = android.content.res.Resources;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export abstract class BaseRecyclerViewCursorAdapter {
							public static TAG: string;
							public mContext: androidcontentContext;
							public mCursor: androiddatabaseCursor;
							public mCount: number;
							public mRowIdColumn: number;
							public mResourse: androidcontentresResources;
							public mSelectedPosition: number;
							public getItemId(param0: number): number;
							public getItemViewType(param0: number): number;
							public setHasStableIds(param0: boolean): void;
							public onAccessibilityEventAvailable(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
							public constructor(param0: androidcontentContext, param1: androiddatabaseCursor);
							public setSelectedPosition(param0: number): void;
							public onBind(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: javalangObject, param2: number, param3: number): void;
							public isCursorValid(): boolean;
							public onCreateViewHolder(param0: androidviewViewGroup, param1: number): androidsupportv7widgetRecyclerViewViewHolder;
							public getObjectAt(param0: number): javalangObject;
							public getCursor(): androiddatabaseCursor;
							public onViewAttachedToWindow(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
							public changeCursor(param0: androiddatabaseCursor): void;
							public getItemCount(): number;
							public onCreate(param0: androidviewViewGroup, param1: number): androidsupportv7widgetRecyclerViewViewHolder;
							public swapCursor(param0: androiddatabaseCursor): androiddatabaseCursor;
							public onBindViewHolder(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: number): void;
							public extractFromCursor(param0: androiddatabaseCursor): javalangObject;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export abstract class RecyclerViewCursorAdapter extends com.liveperson.infra.ui.view.adapter.BaseRecyclerViewCursorAdapter {
							public static TAG: string;
							public onCreate(param0: androidviewViewGroup, param1: number): com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder;
							public getItemViewType(param0: number): number;
							public onCreate(param0: androidviewViewGroup, param1: number): androidsupportv7widgetRecyclerViewViewHolder;
							public constructor(param0: androidcontentContext, param1: androiddatabaseCursor);
							public extractFromCursor(param0: androiddatabaseCursor): com.liveperson.infra.model.Message;
							public onBind(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: javalangObject, param2: number, param3: number): void;
							public extractFromCursor(param0: androiddatabaseCursor): javalangObject;
							public onBind(param0: com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder, param1: com.liveperson.infra.model.Message, param2: number, param3: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export abstract class StickyHeaderRecyclerViewCursorAdapter extends com.liveperson.infra.ui.view.adapter.BaseRecyclerViewCursorAdapter implements com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter {
							public static TAG: string;
							public onCreateHeaderViewHolder(param0: androidviewViewGroup): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder;
							public getHeaderId(param0: number): number;
							public onBindHeaderViewHolder(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: number): void;
							public onBindHeaderViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number): void;
							public onCreateHeaderViewHolder(param0: androidviewViewGroup): androidsupportv7widgetRecyclerViewViewHolder;
							public getItemCount(): number;
							public constructor(param0: androidcontentContext, param1: androiddatabaseCursor);
							public swapCursor(param0: androiddatabaseCursor): androiddatabaseCursor;
						}
					}
				}
			}
		}
	}
}

import androidviewView = android.view.View;
import androidviewViewOnLongClickListener = android.view.View.OnLongClickListener;
import androidviewViewOnClickListener = android.view.View.OnClickListener;
import androidwidgetTextView = android.widget.TextView;
import androidosBundle = android.os.Bundle;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class BaseViewHolder {
								public mMessageTextView: androidwidgetTextView;
								public mTimestampAccessibilityString: string;
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public setContentDescription(param0: string): void;
								public getTimeFormat(param0: number): string;
								public setOnLongClickListener(param0: androidviewViewOnLongClickListener): void;
								public updateContentDescription(): void;
								public setTimestampTextView(param0: number): void;
								public recycle(): void;
								public setOnClickListener(param0: androidviewViewOnClickListener): void;
								public setLongCopy(param0: androidviewViewOnLongClickListener): boolean;
								public linkifyText(param0: androidwidgetTextView): boolean;
								public getTextToCopy(): string;
								public setCopy(param0: androidviewViewOnClickListener): void;
								public constructor(param0: androidviewView);
								public getTempPosition(): number;
								public setMessageTextView(param0: string): void;
								public onBind(): void;
								public setTempPosition(param0: number): void;
								public getAccessibilityDateTimeFormat(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class EndViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder {
								public mTimestampTextView: androidwidgetTextView;
								public constructor(param0: androidviewView);
								public updateContentDescription(): void;
								public setTimestampTextView(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class HeaderViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder {
								public getTextToCopy(): string;
								public constructor(param0: androidviewView);
								public setHeaderText(param0: string): void;
								public updateContentDescription(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class MiddleViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder {
								public constructor(param0: androidviewView);
								public updateContentDescription(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class StartViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder {
								public mTimestampTextView: androidwidgetTextView;
								public constructor(param0: androidviewView);
								public setTimestampTextView(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

import androidgraphicsRect = android.graphics.Rect;
import androidsupportv7widgetRecyclerView = android.support.v7.widget.RecyclerView;
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.header.caching.HeaderProvider.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.header.calculation.DimensionCalculator.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.header.util.OrientationProvider.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export class HeaderPositionCalculator {
							public hasStickyHeader(param0: androidviewView, param1: number, param2: number): boolean;
							public constructor(param0: com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter, param1: com.liveperson.infra.ui.view.header.caching.HeaderProvider, param2: com.liveperson.infra.ui.view.header.util.OrientationProvider, param3: com.liveperson.infra.ui.view.header.calculation.DimensionCalculator);
							public hasNewHeader(param0: number, param1: boolean): boolean;
							public initHeaderBounds(param0: androidgraphicsRect, param1: androidsupportv7widgetRecyclerView, param2: androidviewView, param3: androidviewView, param4: boolean): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.ViewGroup.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export class StickyRecyclerHeadersAdapter {
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter interface with the provided implementation.
							 */
							public constructor(implementation: {
								getHeaderId(param0: number): number;
								onCreateHeaderViewHolder(param0: androidviewViewGroup): androidsupportv7widgetRecyclerViewViewHolder;
								onBindHeaderViewHolder(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: number): void;
								getItemCount(): number;
							});
							public getHeaderId(param0: number): number;
							public onBindHeaderViewHolder(param0: androidsupportv7widgetRecyclerViewViewHolder, param1: number): void;
							public onCreateHeaderViewHolder(param0: androidviewViewGroup): androidsupportv7widgetRecyclerViewViewHolder;
							public getItemCount(): number;
						}
					}
				}
			}
		}
	}
}

import androidsupportv7widgetRecyclerViewState = android.support.v7.widget.RecyclerView.State;
import androidgraphicsCanvas = android.graphics.Canvas;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export class StickyRecyclerHeadersDecoration {
							public getItemOffsets(param0: androidgraphicsRect, param1: androidviewView, param2: androidsupportv7widgetRecyclerView, param3: androidsupportv7widgetRecyclerViewState): void;
							public invalidateHeaders(): void;
							public findHeaderPositionUnder(param0: number, param1: number): number;
							public getHeaderView(param0: androidsupportv7widgetRecyclerView, param1: number): androidviewView;
							public onDrawOver(param0: androidgraphicsCanvas, param1: androidsupportv7widgetRecyclerView, param2: androidsupportv7widgetRecyclerViewState): void;
							public constructor(param0: com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module caching {
							export class HeaderProvider {
								/**
								 * Constructs a new instance of the com.liveperson.infra.ui.view.header.caching.HeaderProvider interface with the provided implementation.
								 */
								public constructor(implementation: {
									getHeader(param0: androidsupportv7widgetRecyclerView, param1: number): androidviewView;
									invalidate(): void;
								});
								public invalidate(): void;
								public getHeader(param0: androidsupportv7widgetRecyclerView, param1: number): androidviewView;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.header.util.OrientationProvider.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module caching {
							export class HeaderViewCache {
								public invalidate(): void;
								public getHeader(param0: androidsupportv7widgetRecyclerView, param1: number): androidviewView;
								public constructor(param0: com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter, param1: com.liveperson.infra.ui.view.header.util.OrientationProvider);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module calculation {
							export class DimensionCalculator {
								public initMargins(param0: androidgraphicsRect, param1: androidviewView): void;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.header.util.OrientationProvider.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module rendering {
							export class HeaderRenderer {
								public constructor(param0: com.liveperson.infra.ui.view.header.util.OrientationProvider);
								public drawHeader(param0: androidsupportv7widgetRecyclerView, param1: androidgraphicsCanvas, param2: androidviewView, param3: androidgraphicsRect): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module util {
							export class LinearLayoutOrientationProvider {
								public constructor();
								public getOrientation(param0: androidsupportv7widgetRecyclerView): number;
								public isReverseLayout(param0: androidsupportv7widgetRecyclerView): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module header {
						export module util {
							export class OrientationProvider {
								/**
								 * Constructs a new instance of the com.liveperson.infra.ui.view.header.util.OrientationProvider interface with the provided implementation.
								 */
								public constructor(implementation: {
									getOrientation(param0: androidsupportv7widgetRecyclerView): number;
									isReverseLayout(param0: androidsupportv7widgetRecyclerView): boolean;
								});
								public getOrientation(param0: androidsupportv7widgetRecyclerView): number;
								public isReverseLayout(param0: androidsupportv7widgetRecyclerView): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module resources {
						export class ResourceHelper {
							public constructor();
							public static updateTextColor(param0: androidwidgetTextView, param1: number): void;
							public static updateBackgroundDrawable(param0: androidviewView, param1: number): void;
							public static updateBackgroundColor(param0: androidviewView, param1: number): void;
							public static updateBackgroundSolidColor(param0: androidviewView, param1: number): void;
							public static updateBackgroundStrokeColor(param0: androidviewView, param1: number, param2: number): void;
							public static updateTextColorLink(param0: androidwidgetTextView, param1: number): void;
						}
					}
				}
			}
		}
	}
}

import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module resources {
						export class ResourceManager {
							public static instance: com.liveperson.infra.ui.view.resources.ResourceManager;
							public getDrawable(param0: number): androidgraphicsdrawableDrawable;
							public mapColor(param0: number, param1: number): void;
							public getColor(param0: number): number;
							public static values(): native.Array<com.liveperson.infra.ui.view.resources.ResourceManager>;
							public mapDimension(param0: number, param1: number): void;
							public static valueOf(param0: string): com.liveperson.infra.ui.view.resources.ResourceManager;
							public mapDrawable(param0: number, param1: number): void;
							public getDimension(param0: number): number;
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
					export module screen {
						export class BaseFragment {
							public constructor();
							public onPause(): void;
							public onResume(): void;
						}
					}
				}
			}
		}
	}
}

import androidutilAttributeSet = android.util.AttributeSet;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class CustomButton {
							public static TAG: string;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public constructor(param0: androidcontentContext);
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class CustomEditText {
							public static TAG: string;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public constructor(param0: androidcontentContext);
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class CustomTextView {
							public static TAG: string;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public constructor(param0: androidcontentContext);
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class RoundedCornersLayout {
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public constructor(param0: androidcontentContext);
							public setBorderColor(param0: number): void;
							public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
							public setBorders(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;
							public setCornersRadius(param0: number, param1: number, param2: number, param3: number): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
							public setBorderWidth(param0: number): void;
							public dispatchDraw(param0: androidgraphicsCanvas): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class TooltipWindow {
							public static TAG: string;
							public showToolTip(param0: androidviewView, param1: string): void;
							public constructor(param0: androidcontentContext);
							public isTooltipShown(): boolean;
							public showToolTip(param0: androidviewView, param1: string, param2: boolean): void;
							public enable(param0: boolean): void;
							public dismissTooltip(): void;
						}
					}
				}
			}
		}
	}
}

import androidviewViewOnTouchListener = android.view.View.OnTouchListener;
import androidviewGestureDetectorOnDoubleTapListener = android.view.GestureDetector.OnDoubleTapListener;
import androidgraphicsBitmap = android.graphics.Bitmap;
import androidnetUri = android.net.Uri;
import androidwidgetImageViewScaleType = android.widget.ImageView.ScaleType;
import androidgraphicsRectF = android.graphics.RectF;
import androidosParcelable = android.os.Parcelable;
import androidcontentresConfiguration = android.content.res.Configuration;
import androidgraphicsPointF = android.graphics.PointF;
import androidviewMotionEvent = android.view.MotionEvent;
import androidviewScaleGestureDetector = android.view.ScaleGestureDetector;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.PointF.d.ts" />
/// <reference path="./android.graphics.RectF.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.ScaleGestureDetector.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.ui.TouchImageView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module ui {
						export class TouchImageView {
							public canScrollHorizontally(param0: number): boolean;
							public setImageResource(param0: number): void;
							public onRestoreInstanceState(param0: androidosParcelable): void;
							public setZoom(param0: com.liveperson.infra.ui.view.ui.TouchImageView): void;
							public getZoomedRect(): androidgraphicsRectF;
							public isZoomed(): boolean;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public setOnDoubleTapListener(param0: androidviewGestureDetectorOnDoubleTapListener): void;
							public setZoom(param0: number): void;
							public onMeasure(param0: number, param1: number): void;
							public onSaveInstanceState(): androidosParcelable;
							public setScaleType(param0: androidwidgetImageViewScaleType): void;
							public setZoom(param0: number, param1: number, param2: number, param3: androidwidgetImageViewScaleType): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
							public getCurrentZoom(): number;
							public getScrollPosition(): androidgraphicsPointF;
							public setOnTouchImageViewListener(param0: com.liveperson.infra.ui.view.ui.TouchImageView.OnTouchImageViewListener): void;
							public getMinZoom(): number;
							public resetZoom(): void;
							public onConfigurationChanged(param0: androidcontentresConfiguration): void;
							public getScaleType(): androidwidgetImageViewScaleType;
							public setZoom(param0: number, param1: number, param2: number): void;
							public getMaxZoom(): number;
							public setMinZoom(param0: number): void;
							public setImageDrawable(param0: androidgraphicsdrawableDrawable): void;
							public setScrollPosition(param0: number, param1: number): void;
							public constructor(param0: androidcontentContext);
							public setOnTouchListener(param0: androidviewViewOnTouchListener): void;
							public setImageBitmap(param0: androidgraphicsBitmap): void;
							public canScrollHorizontallyFroyo(param0: number): boolean;
							public setImageURI(param0: androidnetUri): void;
							public setMaxZoom(param0: number): void;
							public onDraw(param0: androidgraphicsCanvas): void;
						}
						export module TouchImageView {
							export class CompatScroller {
								public getCurrY(): number;
								public constructor(param0: com.liveperson.infra.ui.view.ui.TouchImageView, param1: androidcontentContext);
								public forceFinished(param0: boolean): void;
								public getCurrX(): number;
								public computeScrollOffset(): boolean;
								public fling(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): void;
								public isFinished(): boolean;
							}
							export class DoubleTapZoom {
								public run(): void;
							}
							export class Fling {
								public cancelFling(): void;
								public run(): void;
							}
							export class GestureListener {
								public onLongPress(param0: androidviewMotionEvent): void;
								public onFling(param0: androidviewMotionEvent, param1: androidviewMotionEvent, param2: number, param3: number): boolean;
								public onDoubleTap(param0: androidviewMotionEvent): boolean;
								public onSingleTapConfirmed(param0: androidviewMotionEvent): boolean;
								public onDoubleTapEvent(param0: androidviewMotionEvent): boolean;
							}
							export class OnTouchImageViewListener {
								/**
								 * Constructs a new instance of the com.liveperson.infra.ui.view.ui.TouchImageView$OnTouchImageViewListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onMove(): void;
								});
								public onMove(): void;
							}
							export class PrivateOnTouchListener {
								public onTouch(param0: androidviewView, param1: androidviewMotionEvent): boolean;
							}
							export class ScaleListener {
								public onScaleBegin(param0: androidviewScaleGestureDetector): boolean;
								public onScale(param0: androidviewScaleGestureDetector): boolean;
								public onScaleEnd(param0: androidviewScaleGestureDetector): void;
							}
							export class State {
								public static NONE: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static DRAG: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static ZOOM: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static FLING: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static ANIMATE_ZOOM: com.liveperson.infra.ui.view.ui.TouchImageView.State;
								public static values(): native.Array<com.liveperson.infra.ui.view.ui.TouchImageView.State>;
								public static valueOf(param0: string): com.liveperson.infra.ui.view.ui.TouchImageView.State;
							}
							export class ZoomVariables {
								public scale: number;
								public focusX: number;
								public focusY: number;
								public scaleType: androidwidgetImageViewScaleType;
								public constructor(param0: com.liveperson.infra.ui.view.ui.TouchImageView, param1: number, param2: number, param3: number, param4: androidwidgetImageViewScaleType);
							}
						}
					}
				}
			}
		}
	}
}

import androidwidgetButton = android.widget.Button;
import androidwidgetImageButton = android.widget.ImageButton;
import androidwidgetViewSwitcher = android.widget.ViewSwitcher;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.Button.d.ts" />
/// <reference path="./android.widget.ImageButton.d.ts" />
/// <reference path="./android.widget.ViewSwitcher.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.uicomponents.IConversationProvider.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.uicomponents.IEnterMessageListener.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.uicomponents.IOverflowMenu.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export abstract class BaseEnterMessage {
							public static RECORDING_LAYOUT_ANIMATION_DURATION_MILLIS: number;
							public mTextSendButton: androidwidgetButton;
							public mImageSendButton: androidwidgetImageButton;
							public mTrashButton: androidwidgetImageButton;
							public mEnterMessageLayoutSwitcher: androidwidgetViewSwitcher;
							public mBrandIdProvider: com.liveperson.infra.ui.view.uicomponents.IConversationProvider;
							public mEnterMessageListener: com.liveperson.infra.ui.view.uicomponents.IEnterMessageListener;
							public mIsConnected: boolean;
							public mIsUpdated: boolean;
							public onBeforeChangedText(): void;
							public updateSendButtonState(): void;
							public showNoNetworkMessage(): void;
							public onAfterChangedText(param0: string): void;
							public shouldUpdateSendButton(): boolean;
							public onFinishInflate(): void;
							public static extractLinks(param0: string): native.Array<string>;
							public setOverflowMenu(param0: com.liveperson.infra.ui.view.uicomponents.IOverflowMenu): void;
							public setBrandIdProvider(param0: com.liveperson.infra.ui.view.uicomponents.IConversationProvider): void;
							public onUpdate(param0: boolean): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public onHasText(param0: boolean): void;
							public clearText(): void;
							public constructor(param0: androidcontentContext);
							public setEnterMessageListener(param0: com.liveperson.infra.ui.view.uicomponents.IEnterMessageListener): void;
							public sendMessage(): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
							public setEnabled(param0: boolean): void;
							public sendMessage(param0: string): void;
							public onConnectionChanged(param0: boolean): void;
							public enableSendButton(): void;
							public setText(param0: string): void;
							public sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
						}
						export module BaseEnterMessage {
							export class InputState {
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
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onCloseMenu(): void;
							});
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
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IConnectionChangedCustomView interface with the provided implementation.
							 */
							public constructor(implementation: {
								onConnectionChanged(param0: boolean): void;
							});
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
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IConversationProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getBrandId(): string;
								getTargetId(): string;
							});
							public getTargetId(): string;
							public getBrandId(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.IPermissionCallback.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export class IEnterMessageListener {
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IEnterMessageListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onMessageSent(): void;
								onVoiceRecordingPermissionRequired(param0: com.liveperson.infra.IPermissionCallback): void;
							});
							public onVoiceRecordingPermissionRequired(param0: com.liveperson.infra.IPermissionCallback): void;
							public onMessageSent(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module uicomponents {
						export class IOverflowMenu {
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IOverflowMenu interface with the provided implementation.
							 */
							public constructor(implementation: {
								show(): void;
								hide(): void;
								isMenuOpen(): boolean;
								setOnCloseListener(param0: com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener): void;
							});
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
							/**
							 * Constructs a new instance of the com.liveperson.infra.ui.view.uicomponents.IUpdateFromBrand interface with the provided implementation.
							 */
							public constructor(implementation: {
								onUpdate(param0: boolean): void;
							});
							public onUpdate(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module utils {
						export class ImageUrlUtil {
							public constructor();
							public static completeToValidImageUrl(param0: string, param1: string): string;
						}
					}
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module utils {
						export class ItemsView {
							public constructor(param0: androidcontentContext, param1: com.liveperson.infra.ui.view.utils.ItemsView.CellsFactory);
							public withCellType(param0: javalangObject): com.liveperson.infra.ui.view.utils.ItemsView;
							public reload(): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number, param3: com.liveperson.infra.ui.view.utils.ItemsView.CellsFactory);
							public add(param0: javalangObject): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: com.liveperson.infra.ui.view.utils.ItemsView.CellsFactory);
							public setData(param0: javautilList): void;
							public remove(param0: javalangObject): void;
							public filter(param0: string): void;
						}
						export module ItemsView {
							export abstract class CellHolder {
								public prepareForReuse(): void;
								public constructor(param0: androidviewView);
								public configure(param0: javalangObject): void;
								public getData(): javalangObject;
							}
							export class CellsFactory {
								/**
								 * Constructs a new instance of the com.liveperson.infra.ui.view.utils.ItemsView$CellsFactory interface with the provided implementation.
								 */
								public constructor(implementation: {
									create(param0: androidviewViewGroup, param1: number): com.liveperson.infra.ui.view.utils.ItemsView.CellHolder;
								});
								public create(param0: androidviewViewGroup, param1: number): com.liveperson.infra.ui.view.utils.ItemsView.CellHolder;
							}
							export class RecyclerViewAdapter {
								public onCreateViewHolder(param0: androidviewViewGroup, param1: number): com.liveperson.infra.ui.view.utils.ItemsView.CellHolder;
								public add(param0: javalangObject): void;
								public onViewRecycled(param0: com.liveperson.infra.ui.view.utils.ItemsView.CellHolder): void;
								public remove(param0: javalangObject): void;
								public getItemCount(): number;
								public onBindViewHolder(param0: com.liveperson.infra.ui.view.utils.ItemsView.CellHolder, param1: number): void;
								public setData(param0: javautilList): void;
							}
						}
					}
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
import androidcontentDialogInterfaceOnClickListener = android.content.DialogInterface.OnClickListener;
import androidappAlertDialog = android.app.AlertDialog;
import androidwidgetImageView = android.widget.ImageView;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.AlertDialog.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module utils {
						export class UIUtils {
							public static TAG: string;
							public constructor();
							public static detectEmojis(param0: string): number;
							public static createDialog(param0: androidcontentContext, param1: string, param2: string, param3: string, param4: androidcontentDialogInterfaceOnClickListener, param5: string, param6: androidcontentDialogInterfaceOnClickListener): androidappAlertDialog;
							public static changeCustomTextViewFont(param0: androidwidgetTextView, param1: androidcontentContext, param2: androidutilAttributeSet, param3: native.Array<number>, param4: number): void;
							public static hideKeyboard(param0: androidappActivity): void;
							public static startProgressBarAnimation(param0: androidwidgetImageView, param1: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module ui {
				export module view {
					export module utils {
						export module picasso {
							export class CircleTransform {
								public key(): string;
								public transform(param0: androidgraphicsBitmap): androidgraphicsBitmap;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

