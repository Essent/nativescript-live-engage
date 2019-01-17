/// <reference path="./_helpers.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
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

import androidosBundle = android.os.Bundle;
import androidviewKeyEvent = android.view.KeyEvent;
import androidviewMenu = android.view.Menu;
import androidviewMenuItem = android.view.MenuItem;
import androidcontentIntent = android.content.Intent;
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.Menu.d.ts" />
/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.fragment.IFeedbackActions.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.MessagingUIUtils.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class ConversationActivity {
					public static INTENT_ACTION: string;
					public static TYPE_CLOSE_CHAT: number;
					public onNewIntent(param0: androidcontentIntent): void;
					public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
					public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
					public onPrepareOptionsMenu(param0: androidviewMenu): boolean;
					public onBackPressed(): void;
					public onCreate(param0: androidosBundle): void;
					public onKeyDown(param0: number, param1: androidviewKeyEvent): boolean;
					public setSecureFormMode(param0: boolean, param1: string): void;
					public onResume(): void;
					public getUiUtils(): com.liveperson.infra.messaging_ui.uicomponents.MessagingUIUtils;
					public onPostCreate(param0: androidosBundle): void;
					public onCreateOptionsMenu(param0: androidviewMenu): boolean;
					public constructor();
					public onPause(): void;
					public setPCIToolbar(param0: string): void;
					public onResolveConversationClick(): void;
					public onMarkAsUrgentClick(param0: com.liveperson.messaging.Messaging): void;
					public onConnectionChanged(param0: boolean): void;
					public onOptionsItemSelected(param0: androidviewMenuItem): boolean;
					public onClearHistoryClicked(): void;
				}
			}
		}
	}
}

import androidcontentContext = android.content.Context;
import androidsupportv4appFragment = android.support.v4.app.Fragment;
import androidappActivity = android.app.Activity;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./com.liveperson.infra.ConversationViewParams.d.ts" />
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.LogoutLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.MessagingUiConfiguration.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.MessagingUiInitData.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class IMessagingUi {
					/**
					 * Constructs a new instance of the com.liveperson.infra.messaging_ui.IMessagingUi interface with the provided implementation.
					 */
					public constructor(implementation: {
						init(param0: androidcontentContext, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.messaging_ui.MessagingUiConfiguration): void;
						isInitialized(): boolean;
						shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
						logout(param0: androidcontentContext, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
						getConversationFragment(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidsupportv4appFragment;
						showConversation(param0: androidappActivity, param1: string, param2: com.liveperson.infra.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
						hideConversation(param0: androidappActivity): void;
						setConfiguration(param0: com.liveperson.infra.messaging_ui.MessagingUiConfiguration): void;
						onAgentAvatarTapped(param0: string): void;
					});
					public onAgentAvatarTapped(param0: string): void;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidsupportv4appFragment;
					public init(param0: androidcontentContext, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.messaging_ui.MessagingUiConfiguration): void;
					public hideConversation(param0: androidappActivity): void;
					public setConfiguration(param0: com.liveperson.infra.messaging_ui.MessagingUiConfiguration): void;
					public isInitialized(): boolean;
					public logout(param0: androidcontentContext, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
					public showConversation(param0: androidappActivity, param1: string, param2: com.liveperson.infra.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./com.liveperson.infra.ConversationViewParams.d.ts" />
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.LogoutLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.MessagingUi.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.MessagingUiConfiguration.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.MessagingUiInitData.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class MessagingUIFactory {
					public static instance: com.liveperson.infra.messaging_ui.MessagingUIFactory;
					public mMessagingUi: com.liveperson.infra.messaging_ui.MessagingUi;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidsupportv4appFragment;
					public setConfiguration(param0: com.liveperson.infra.messaging_ui.MessagingUiConfiguration): void;
					public isInitialized(): boolean;
					public restart(): void;
					public getMessagingUi(): com.liveperson.infra.messaging_ui.MessagingUi;
					public showConversation(param0: androidappActivity, param1: string, param2: com.liveperson.infra.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
					public onAgentAvatarTapped(param0: string): void;
					public constructor();
					public init(param0: androidcontentContext, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.messaging_ui.MessagingUiConfiguration): void;
					public createController(): com.liveperson.infra.messaging_ui.MessagingUi;
					public clear(): void;
					public hideConversation(param0: androidappActivity): void;
					public static getInstance(): com.liveperson.infra.messaging_ui.MessagingUIFactory;
					public logout(param0: androidcontentContext, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./com.liveperson.infra.ConversationViewParams.d.ts" />
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.LogoutLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.MessagingUiConfiguration.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.MessagingUiInitData.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class MessagingUi {
					public static TAG: string;
					public mMessagingUiConfiguration: com.liveperson.infra.messaging_ui.MessagingUiConfiguration;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidsupportv4appFragment;
					public setConfiguration(param0: com.liveperson.infra.messaging_ui.MessagingUiConfiguration): void;
					public restart(): void;
					public isInitialized(): boolean;
					public showConversation(param0: androidappActivity, param1: string, param2: com.liveperson.infra.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
					public onAgentAvatarTapped(param0: string): void;
					public constructor();
					public init(param0: androidcontentContext, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.messaging_ui.MessagingUiConfiguration): void;
					public clear(): void;
					public hideConversation(param0: androidappActivity): void;
					public getInitBrandId(): string;
					public logout(param0: androidcontentContext, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

import javautilHashMap = java.util.HashMap;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class MessagingUiConfiguration {
					public static CLEAR_HISTORY_SHOW_CONFIRM_DIALOG: string;
					public static TTR_MESSAGE_OFF_HOURS_ENABLED: string;
					public static DISABLE_TTR_POPUP: string;
					public static SHOW_TIMESTAMP_IN_TTR_NOTIFICATION: string;
					public static CONTEXTUAL_MENU_ON_TOOLBAR: string;
					public static SHOW_FEEDBACK: string;
					public static SHOW_CSAT_THANK_YOU: string;
					public static SHOW_AGENT_DETAILS_CSAT: string;
					public static SHOW_YES_NO_QUESTION: string;
					public static ENABLE_PHOTO_SHARING: string;
					public getFeature(param0: string): boolean;
					public putFeature(param0: string, param1: boolean): void;
					public constructor(param0: javautilHashMap);
					public getAllFeatures(): javautilHashMap;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.InitLivePersonProperties.d.ts" />
/// <reference path="./com.liveperson.infra.Interceptors.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.InitLivePersonCallBack.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class MessagingUiInitData {
					public constructor(param0: com.liveperson.infra.callbacks.InitLivePersonCallBack, param1: string, param2: com.liveperson.infra.Interceptors);
					public getInitCallBack(): com.liveperson.infra.callbacks.InitLivePersonCallBack;
					public constructor(param0: com.liveperson.infra.InitLivePersonProperties, param1: string, param2: com.liveperson.infra.Interceptors);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class ResourceMapper {
					public static INSTANCE: com.liveperson.infra.messaging_ui.ResourceMapper;
					public static KEY_CONVERSATION_BG_COLOR: string;
					public static VALUE_CONVERSATION_BG_COLOR: string;
					public static KEY_AGENT_CONVERSATION_BUBBLE_BG_COLOR: string;
					public static VALUE_AGENT_CONVERSATION_BUBBLE_BG_COLOR: string;
					public static valueOf(param0: string): com.liveperson.infra.messaging_ui.ResourceMapper;
					public static values(): native.Array<com.liveperson.infra.messaging_ui.ResourceMapper>;
				}
			}
		}
	}
}

import androidappDialog = android.app.Dialog;
/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module dialog {
					export class ClearHistoryConfirmationDialog {
						public static TARGET_ID: string;
						public constructor();
						public onCreateDialog(param0: androidosBundle): androidappDialog;
						public static getInstance(param0: string): com.liveperson.infra.messaging_ui.dialog.ClearHistoryConfirmationDialog;
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module dialog {
					export class ConversationIsActiveWarningDialog {
						public constructor();
						public onCreateDialog(param0: androidosBundle): androidappDialog;
						public static getInstance(): com.liveperson.infra.messaging_ui.dialog.ConversationIsActiveWarningDialog;
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Dialog.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module dialog {
					export class NewUserDialog {
						public constructor();
						public onCreateDialog(param0: androidosBundle): androidappDialog;
						public static getInstance(): com.liveperson.infra.messaging_ui.dialog.NewUserDialog;
					}
				}
			}
		}
	}
}

import androidutilAttributeSet = android.util.AttributeSet;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.fragment.IConnectable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module fragment {
					export class ConnectionStatusController {
						public static TAG: string;
						public static TRYING_TO_CONNECT_DELAY: number;
						public static CONNECTING_DELAY: number;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public onError(): void;
						public registerToChanges(param0: com.liveperson.infra.messaging_ui.fragment.IConnectable): void;
						public unregister(): void;
						public initState(param0: boolean, param1: boolean): void;
						public onConnected(): void;
						public onConnecting(param0: boolean): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

import androidviewLayoutInflater = android.view.LayoutInflater;
import androidviewViewGroup = android.view.ViewGroup;
import androidviewView = android.view.View;
import androidsupportv4appFragmentActivity = android.support.v4.app.FragmentActivity;
import androidwidgetTextView = android.widget.TextView;
import androidwidgetRelativeLayout = android.widget.RelativeLayout;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.FragmentActivity.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.RelativeLayout.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liveperson.api.response.types.ConversationState.d.ts" />
/// <reference path="./com.liveperson.infra.ConversationViewParams.d.ts" />
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.LocalBroadcastReceiver.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.fragment.FullImageFragment.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.InlineMessagesController.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.uicomponents.IConversationProvider.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.FileSharingType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module fragment {
					export class ConversationFragment {
						public static TAG: string;
						public static BUNDLE_CONVERSATION_ID: string;
						public static PICK_PHOTO_FOR_MESSAGE: number;
						public static REQUEST_TAKE_PHOTO: number;
						public mRecyclerView: com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView;
						public mEmptyView: androidwidgetTextView;
						public mEnterMessageLayout: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage;
						public mConversationLayout: androidwidgetRelativeLayout;
						public mConnectionReceiver: com.liveperson.infra.LocalBroadcastReceiver;
						public mConversationStateChangeReceiver: com.liveperson.infra.LocalBroadcastReceiver;
						public mDialogStateChangeReceiver: com.liveperson.infra.LocalBroadcastReceiver;
						public mFormStateChangeReceiver: com.liveperson.infra.LocalBroadcastReceiver;
						public mAgentTypingReceiver: com.liveperson.infra.LocalBroadcastReceiver;
						public mUnAuthenticatedUserExpired: com.liveperson.infra.LocalBroadcastReceiver;
						public mFragmentContainer: com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks;
						public mFullImageFragment: com.liveperson.infra.messaging_ui.fragment.FullImageFragment;
						public mInlineMessagesController: com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.InlineMessagesController;
						public mBrandId: string;
						public mLPAuthenticationParams: com.liveperson.infra.LPAuthenticationParams;
						public mConversationViewParams: com.liveperson.infra.ConversationViewParams;
						public mIConversationProvider: com.liveperson.infra.ui.view.uicomponents.IConversationProvider;
						public conversationId: string;
						public mCopyBehavior: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior;
						public mFeaturesConfiguration: javautilHashMap;
						public onSaveInstanceState(param0: androidosBundle): void;
						public onFileClicked(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: number, param4: number, param5: string): void;
						public sendCSAT(param0: number, param1: number): void;
						public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
						public unregisterReceivers(): void;
						public slideOutSecureFormFragment(): void;
						public onActivityResult(param0: number, param1: number, param2: androidcontentIntent): void;
						public verifyStoragePermissions(param0: androidappActivity): boolean;
						public verifyStorageAndRecordPermissions(param0: androidappActivity): boolean;
						public onPause(): void;
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public static newInstance(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: javautilHashMap, param3: com.liveperson.infra.ConversationViewParams, param4: boolean): com.liveperson.infra.messaging_ui.fragment.ConversationFragment;
						public onDestroy(): void;
						public onBackPressed(): boolean;
						public slideOutFragment(): void;
						public initRecyclerView(): void;
						public onViewCreated(param0: androidviewView, param1: androidosBundle): void;
						public handleClosedDialog(param0: string, param1: string): void;
						public unregisterFragment(): void;
						public registerConnectionReceiver(): void;
						public attachActivity(param0: androidsupportv4appFragmentActivity): void;
						public initRelevantToolbar(): void;
						public constructor();
						public handleConversationUpdate(param0: string, param1: com.liveperson.api.response.types.ConversationState, param2: com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS, param3: string): void;
						public startCamera(): void;
						public registerBroadCastReceivers(): void;
						public onResume(): void;
						public verifyCameraPermissions(param0: androidappActivity): boolean;
						public connect(): void;
						public onStop(): void;
						public onActivityCreated(param0: androidosBundle): void;
						public registerFormStateChangeReceiver(): void;
						public registerDialogStateChangedReceiver(): void;
						public onCreate(param0: androidosBundle): void;
						public onSurveySubmitted(param0: string): void;
						public onConversationFragmentClosed(): void;
						public setSecureFormMode(param0: boolean, param1: string): void;
						public registerConversationStateChangedReceiver(): void;
						public unregisterForegroundService(): void;
						public handleConversationClosed(param0: string, param1: string): void;
						public initConversationProvider(): void;
						public onConversationResolved(param0: string): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.messaging_ui.fragment.IFeedbackActions.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module fragment {
					export class ConversationFragmentCallbacks {
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks interface with the provided implementation.
						 */
						public constructor(implementation: {
							setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
							onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
							setSecureFormMode(param0: boolean, param1: string): void;
						});
						public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public setSecureFormMode(param0: boolean, param1: string): void;
					}
					export module ConversationFragmentCallbacks {
						export class NullConversationFragmentCallbacks {
							public constructor();
							public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
							public setSecureFormMode(param0: boolean, param1: string): void;
							public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						}
					}
				}
			}
		}
	}
}

import androidviewanimationAnimation = android.view.animation.Animation;
import androidosMessage = android.os.Message;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.view.animation.Animation.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module fragment {
					export class FeedbackFragment {
						public static TAG: string;
						public static CSAT_FLOW_DEBUG: boolean;
						public onSaveInstanceState(param0: androidosBundle): void;
						public onConnectionChanged(param0: boolean): void;
						public constructor();
						public onResume(): void;
						public slideOutFragment(): boolean;
						public skipFeedBackScreen(): void;
						public onPause(): void;
						public onCreate(param0: androidosBundle): void;
						public onCreateAnimation(param0: number, param1: boolean, param2: number): androidviewanimationAnimation;
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public closeFeedBackScreen(): void;
						public onAttachFragment(): void;
						public static newInstance(param0: string, param1: string, param2: string, param3: javautilHashMap): com.liveperson.infra.messaging_ui.fragment.FeedbackFragment;
					}
					export module FeedbackFragment {
						export class ScreenState {
							public static CSAT: com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState;
							public static THANK_YOU: com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState;
							public static values(): native.Array<com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState>;
							public static valueOf(param0: string): com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState;
						}
						export class StarHandler {
							public handleMessage(param0: androidosMessage): void;
							public constructor(param0: com.liveperson.infra.messaging_ui.fragment.FeedbackFragment, param1: com.liveperson.infra.messaging_ui.fragment.FeedbackFragment);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module fragment {
					export class FullImageFragment {
						public static TAG: string;
						public static KEY_IMAGE_URI_STRING: string;
						public static newInstance(param0: string): com.liveperson.infra.messaging_ui.fragment.FullImageFragment;
						public toggleFullScreen(): void;
						public constructor();
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public onViewCreated(param0: androidviewView, param1: androidosBundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module fragment {
					export class IConnectable {
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.fragment.IConnectable interface with the provided implementation.
						 */
						public constructor(implementation: {
							connect(): void;
						});
						public connect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module fragment {
					export class IFeedbackActions {
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.fragment.IFeedbackActions interface with the provided implementation.
						 */
						public constructor(implementation: {
							closeFeedBackScreen(): void;
							skipFeedBackScreen(): void;
						});
						public closeFeedBackScreen(): void;
						public skipFeedBackScreen(): void;
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
			export module messaging_ui {
				export module fragment {
					export class NestedFragmentsContainerCallbacks {
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.fragment.NestedFragmentsContainerCallbacks interface with the provided implementation.
						 */
						public constructor(implementation: {
							sendCSAT(param0: number, param1: number): void;
							onSurveySubmitted(param0: string): void;
							slideOutFragment(): void;
							slideOutSecureFormFragment(): void;
							setSecureFormMode(param0: boolean, param1: string): void;
						});
						public sendCSAT(param0: number, param1: number): void;
						public onSurveySubmitted(param0: string): void;
						public setSecureFormMode(param0: boolean, param1: string): void;
						public slideOutFragment(): void;
						public slideOutSecureFormFragment(): void;
					}
					export module NestedFragmentsContainerCallbacks {
						export class NullNestedFragmentsContainerCallbacks {
							public constructor();
							public onSurveySubmitted(param0: string): void;
							public slideOutFragment(): void;
							public setSecureFormMode(param0: boolean, param1: string): void;
							public sendCSAT(param0: number, param1: number): void;
							public slideOutSecureFormFragment(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.LayoutInflater.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.fragment.SecuredFormFragment.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module fragment {
					export class SecuredFormFragment {
						public static TAG: string;
						public static JS_INTERFACE_OBJ_NAME: string;
						public static STATE: string;
						public static VIEWED: string;
						public static SUBMIT: string;
						public static TOKEN: string;
						public static GATEWAY_DOMAIN: string;
						public static ERROR: string;
						public static ERROR_REASON: string;
						public static URL: string;
						public static INVITATION_ID: string;
						public static FORM_TITLE: string;
						public static ABORTED: string;
						public static NOT_DEFINED_YET: number;
						public onActivityCreated(param0: androidosBundle): void;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public onCreateView(param0: androidviewLayoutInflater, param1: androidviewViewGroup, param2: androidosBundle): androidviewView;
						public slideOutSecureFormFragment(): boolean;
						public onAttach(param0: androidcontentContext): void;
						public slideOutFragment(): boolean;
						public onStart(): void;
						public onPause(): void;
					}
					export module SecuredFormFragment {
						export class WebAppInterface {
							public onPCIMessage(param0: string): void;
							public constructor(param0: com.liveperson.infra.messaging_ui.fragment.SecuredFormFragment);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.model.PushMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module notification {
					export class NotificationController {
						public static instance: com.liveperson.infra.messaging_ui.notification.NotificationController;
						public static ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION: string;
						public static ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA: string;
						public static valueOf(param0: string): com.liveperson.infra.messaging_ui.notification.NotificationController;
						public addMessageToCounter(param0: string, param1: com.liveperson.infra.model.PushMessage): number;
						public clearMessagesForBrand(param0: androidcontentContext, param1: string): void;
						public addMessageAndDisplayNotification(param0: androidcontentContext, param1: string, param2: com.liveperson.infra.model.PushMessage, param3: boolean, param4: number): void;
						public getNumUnreadMessages(param0: string, param1: string, param2: com.liveperson.infra.ICallback): void;
						public clear(): void;
						public getNumUnreadMessages(param0: string): number;
						public static values(): native.Array<com.liveperson.infra.messaging_ui.notification.NotificationController>;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module screens {
					export class CaptionPreviewActivity {
						public static BRAND_ID: string;
						public static TARGET_ID: string;
						public static IMAGE_URI: string;
						public static IMAGE_ORIENTATION: string;
						public static IMAGE_FROM_CAMERA: string;
						public static AUTH_KEY: string;
						public static VIEW_PARAMS: string;
						public constructor();
						public onCreate(param0: androidosBundle): void;
						public onResume(): void;
						public onBackPressed(): void;
						public onPause(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module toolbar {
					export class CaptionPreviewToolBar {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setTitle(param0: string): void;
						public init(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onFinishInflate(): void;
						public constructor(param0: androidcontentContext);
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liveperson.infra.LocalBroadcastReceiver.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.fragment.IFeedbackActions.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module toolbar {
					export class ConversationToolBar extends com.liveperson.infra.messaging_ui.toolbar.LPToolBar {
						public mAgentTypingReceiver: com.liveperson.infra.LocalBroadcastReceiver;
						public setAgentName(param0: string): void;
						public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public registerReceivers(): void;
						public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public onResume(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onFinishInflate(): void;
						public unregisterReceivers(): void;
						public updateAgent(): void;
						public onPause(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public updateToolBarData(): void;
						public onInitCompleted(): void;
						public constructor(param0: androidcontentContext);
						public initReceivers(): void;
						public setBrandId(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.fragment.IFeedbackActions.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module toolbar {
					export abstract class LPToolBar {
						public mBrandId: string;
						public setAgentName(param0: string): void;
						public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public registerReceivers(): void;
						public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public onResume(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onFinishInflate(): void;
						public unregisterReceivers(): void;
						public updateAgent(): void;
						public onPause(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public updateToolBarData(): void;
						public onInitCompleted(): void;
						public constructor(param0: androidcontentContext);
						public initReceivers(): void;
						public setBrandId(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module toolbar {
					export class SecuredFormToolBar extends com.liveperson.infra.messaging_ui.toolbar.LPToolBar {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setAgentName(param0: string): void;
						public onResume(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onFinishInflate(): void;
						public onInitCompleted(): void;
						public constructor(param0: androidcontentContext);
						public onPause(): void;
					}
				}
			}
		}
	}
}

import androidosHandler = android.os.Handler;
import androidwidgetProgressBar = android.widget.ProgressBar;
import androidwidgetImageButton = android.widget.ImageButton;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.widget.ImageButton.d.ts" />
/// <reference path="./android.widget.ProgressBar.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liveperson.infra.model.types.ChatState.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.ui.TooltipWindow.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class AmsEnterMessage {
						public static MAX_RECORD_TIME_MS: number;
						public mHandler: androidosHandler;
						public mRecordProgressBar: androidwidgetProgressBar;
						public mMaxRecordTimeTextView: androidwidgetTextView;
						public mRecordProgressTimeTextView: androidwidgetTextView;
						public mMaxRecordTimeMs: number;
						public mMicButton: androidwidgetImageButton;
						public mMicTooltipWindow: com.liveperson.infra.ui.view.ui.TooltipWindow;
						public onConnectionChanged(param0: boolean): void;
						public cancelRecording(): void;
						public sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
						public sendMessage(param0: string): void;
						public sendMessage(): void;
						public changeState(param0: com.liveperson.infra.model.types.ChatState): void;
						public enableMicButtonTooltips(param0: boolean): void;
						public onCancelRecording(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onAfterChangedText(param0: string): void;
						public onFinishInflate(): void;
						public isRecordingInProgress(): boolean;
						public setEnabled(param0: boolean): void;
						public onHasText(param0: boolean): void;
						public onBeforeChangedText(): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public shouldUpdateSendButton(): boolean;
						public constructor(param0: androidcontentContext);
						public onRecordVoice(): void;
					}
					export module AmsEnterMessage {
						export class RecordingStatus {
							public static STOPPED: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
							public static MAX_REACHED: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
							public static RECORDING: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
							public static values(): native.Array<com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus>;
							public static valueOf(param0: string): com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class AttachmentMenu {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setOnCloseListener(param0: com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener): void;
						public show(): void;
						public isMenuOpen(): boolean;
						public setListener(param0: com.liveperson.infra.messaging_ui.uicomponents.AttachmentMenu.AttachmentMenuListener): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onFinishInflate(): void;
						public hide(): void;
						public constructor(param0: androidcontentContext);
					}
					export module AttachmentMenu {
						export class AttachmentMenuListener {
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.AttachmentMenu$AttachmentMenuListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onGalleryButtonPressed(): void;
								onCameraButtonPressed(): void;
							});
							public onGalleryButtonPressed(): void;
							public onCameraButtonPressed(): void;
						}
					}
				}
			}
		}
	}
}

import androiddatabaseCursor = android.database.Cursor;
import androidsupportv4appLoaderManager = android.support.v4.app.LoaderManager;
import androidsupportv4contentCursorLoader = android.support.v4.content.CursorLoader;
import androidsupportv4contentLoader = android.support.v4.content.Loader;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.LoaderManager.d.ts" />
/// <reference path="./android.support.v4.content.CursorLoader.d.ts" />
/// <reference path="./android.support.v4.content.Loader.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.ChatMessageRecyclerView.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.CursorLoaderFactory.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class ChatMessageRecyclerView {
						public static TAG: string;
						public onConnectionChanged(param0: boolean): void;
						public getCopyBehavior(): com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior;
						public initListCursorLoader(param0: androidsupportv4appLoaderManager, param1: com.liveperson.messaging.Messaging, param2: com.liveperson.infra.messaging_ui.uicomponents.CursorLoaderFactory): void;
						public changeCursor(param0: androiddatabaseCursor): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onFinishInflate(): void;
						public setCopyBehavior(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setMoveToBeginningOnNextUpdate(): void;
						public focusLastItem(): void;
						public setLoaded(): void;
						public getItemCount(): number;
						public constructor(param0: androidcontentContext);
					}
					export module ChatMessageRecyclerView {
						export class ListLoaderCallback {
							public onLoaderReset(param0: androidsupportv4contentLoader): void;
							public constructor(param0: com.liveperson.infra.messaging_ui.uicomponents.ChatMessageRecyclerView);
							public setCursorLoaderFactory(param0: com.liveperson.infra.messaging_ui.uicomponents.CursorLoaderFactory): void;
							public onCreateLoader(param0: number, param1: androidosBundle): androidsupportv4contentCursorLoader;
							public onLoadFinished(param0: androidsupportv4contentLoader, param1: androiddatabaseCursor): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.support.v4.content.CursorLoader.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class CursorLoaderFactory {
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.CursorLoaderFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							create(): androidsupportv4contentCursorLoader;
							getTargetId(): string;
							getBrandId(): string;
						});
						public getBrandId(): string;
						public getTargetId(): string;
						public create(): androidsupportv4contentCursorLoader;
					}
				}
			}
		}
	}
}

import androidviewViewOnClickListener = android.view.View.OnClickListener;
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class IScrollDownIndicator {
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator interface with the provided implementation.
						 */
						public constructor(implementation: {
							resetAndHide(): void;
							resetAndShowCollapsed(): void;
							show(param0: number, param1: string): void;
							setOnClickListener(param0: androidviewViewOnClickListener): void;
							isExpand(): boolean;
						});
						public setOnClickListener(param0: androidviewViewOnClickListener): void;
						public resetAndHide(): void;
						public isExpand(): boolean;
						public show(param0: number, param1: string): void;
						public resetAndShowCollapsed(): void;
					}
					export module IScrollDownIndicator {
						export class NullImplementation {
							public constructor();
							public resetAndHide(): void;
							public isExpand(): boolean;
							public resetAndShowCollapsed(): void;
							public show(param0: number, param1: string): void;
							public setOnClickListener(param0: androidviewViewOnClickListener): void;
						}
					}
				}
			}
		}
	}
}

import androidsupportdesignwidgetCoordinatorLayout = android.support.design.widget.CoordinatorLayout;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.support.design.widget.CoordinatorLayout.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class ListBehavior {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public onDependentViewRemoved(param0: androidsupportdesignwidgetCoordinatorLayout, param1: androidviewView, param2: androidviewView): void;
						public onDependentViewChanged(param0: androidsupportdesignwidgetCoordinatorLayout, param1: androidviewView, param2: androidviewView): boolean;
						public layoutDependsOn(param0: androidsupportdesignwidgetCoordinatorLayout, param1: androidviewView, param2: androidviewView): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class MessagingUIUtils {
						public constructor(param0: com.liveperson.messaging.Messaging);
						public showNoNetworkMessage(param0: androidcontentContext): void;
						public showResolveDialog(param0: androidcontentContext, param1: string): void;
						public showMarkAsUrgentDialog(param0: androidcontentContext, param1: string, param2: string): void;
						public showMarkAsNormalDialog(param0: androidcontentContext, param1: string, param2: string): void;
						public showActionNotAvailableMessage(param0: androidcontentContext): void;
					}
				}
			}
		}
	}
}

import javautilMap = java.util.Map;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.liveperson.infra.model.PushMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class PushMessageParser {
						public constructor();
						public static parse(param0: string, param1: javautilMap): com.liveperson.infra.model.PushMessage;
						public static convertDataToBundle(param0: javautilMap): androidosBundle;
						public static parseBundle(param0: string, param1: androidosBundle): com.liveperson.infra.model.PushMessage;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export class ScrollDownIndicator {
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
						public setOnClickListener(param0: androidviewViewOnClickListener): void;
						public isExpand(): boolean;
						public resetAndHide(): void;
						public show(param0: number, param1: string): void;
						public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
						public onFinishInflate(): void;
						public constructor(param0: androidcontentContext);
						public resetAndShowCollapsed(): void;
					}
					export module ScrollDownIndicator {
						export class MODE {
							public static CLOSE: com.liveperson.infra.messaging_ui.uicomponents.ScrollDownIndicator.MODE;
							public static OPEN_COLLAPSED: com.liveperson.infra.messaging_ui.uicomponents.ScrollDownIndicator.MODE;
							public static OPEN_EXPAND: com.liveperson.infra.messaging_ui.uicomponents.ScrollDownIndicator.MODE;
							public static valueOf(param0: string): com.liveperson.infra.messaging_ui.uicomponents.ScrollDownIndicator.MODE;
							public static values(): native.Array<com.liveperson.infra.messaging_ui.uicomponents.ScrollDownIndicator.MODE>;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module inlinemessages {
						export class IInlineMessage {
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.IInlineMessage interface with the provided implementation.
							 */
							public constructor(implementation: {
								show(param0: androidcontentContext, param1: androidcontentIntent): void;
								hide(): void;
							});
							public hide(): void;
							public show(param0: androidcontentContext, param1: androidcontentIntent): void;
						}
					}
				}
			}
		}
	}
}

import androidcontentresResources = android.content.res.Resources;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.LocalBroadcastReceiver.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.uicomponents.IConversationProvider.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module inlinemessages {
						export class InlineMessagesController {
							public mTTRReceiver: com.liveperson.infra.LocalBroadcastReceiver;
							public constructor(param0: androidcontentContext, param1: androidcontentresResources, param2: androidviewView, param3: com.liveperson.infra.ui.view.uicomponents.IConversationProvider, param4: javautilHashMap);
							public unregister(): void;
							public registerTTRReceiver(): void;
							public register(param0: string): void;
							public onConversationResolved(): void;
							public hideAll(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module inlinemessages {
						export class OffHours {
							public hide(): void;
							public constructor(param0: androidcontentresResources, param1: androidwidgetTextView);
							public show(param0: androidcontentContext, param1: androidcontentIntent): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module inlinemessages {
						export class TTRSnackBar {
							public hide(): void;
							public show(param0: androidcontentContext, param1: androidcontentIntent): void;
							public constructor(param0: androidcontentresResources, param1: androidviewView, param2: javautilHashMap);
						}
						export module TTRSnackBar {
							export class TTRMode {
								public static TIMESTAMP: com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.TTRSnackBar.TTRMode;
								public static SHORTLY: com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.TTRSnackBar.TTRMode;
								public static values(): native.Array<com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.TTRSnackBar.TTRMode>;
								public static valueOf(param0: string): com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.TTRSnackBar.TTRMode;
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
			export module messaging_ui {
				export module uicomponents {
					export module list {
						export class ChatMessageBgFgListener {
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageBgFgListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onBackground(): void;
								onForeground(): void;
							});
							public onBackground(): void;
							public onForeground(): void;
						}
					}
				}
			}
		}
	}
}

import androidosParcelable = android.os.Parcelable;
import javalangRunnable = java.lang.Runnable;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module list {
						export class ChatMessageListRecyclerView {
							public static TAG: string;
							public initData(param0: com.liveperson.messaging.Messaging, param1: string, param2: androidviewView, param3: com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator, param4: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior, param5: androidosParcelable, param6: com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener): void;
							public removeQuickRepliesMessageOfConversation(param0: string): void;
							public post(param0: javalangRunnable): boolean;
							public getCopyBehavior(): com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior;
							public removeQuickRepliesMessageOfDialog(param0: string): void;
							public onBackground(): void;
							public removeCallbacks(param0: javalangRunnable): boolean;
							public onFinishInflate(): void;
							public getView(): androidviewView;
							public postDelayed(param0: javalangRunnable, param1: number): boolean;
							public getContext(): androidcontentContext;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public focusLastItem(): void;
							public constructor(param0: androidcontentContext);
							public setAgentIsTyping(param0: boolean, param1: string): void;
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
							public onConnectionChanged(param0: boolean): void;
							public onForeground(): void;
						}
					}
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsMessagesLoaderProvider.d.ts" />
/// <reference path="./com.liveperson.messaging.model.FullMessageRow.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module list {
						export class MessagesAsListAdapter {
							public onClearAllMessages(param0: number, param1: number): void;
							public getItemViewType(param0: number): number;
							public hideAgentIsTyping(): void;
							public showAgentIsTyping(param0: string): void;
							public notifyUnreadMessagesChanged(param0: number, param1: string, param2: number): void;
							public getAgentAvatarUrl(param0: string): string;
							public onNewSystemMessageAdded(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
							public onItemRemoved(param0: number): void;
							public onItemMoved(param0: number, param1: number): void;
							public onCreateHeaderViewHolder(param0: androidviewViewGroup): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder;
							public getItem(param0: number): com.liveperson.messaging.model.FullMessageRow;
							public onConnectionLost(): void;
							public onForeground(): void;
							public onBindViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number): void;
							public onHistoryLoaded(param0: number, param1: number, param2: boolean): void;
							public getHeaderId(param0: number): number;
							public onNewUserMessageAdded(param0: number): void;
							public onBindHeaderViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number): void;
							public removeQuickRepliesMessageOfConversation(param0: string): void;
							public getCopyBehavior(): com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior;
							public removeQuickRepliesMessageOfDialog(param0: string): void;
							public constructor(param0: com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView, param1: androidviewView, param2: com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator, param3: com.liveperson.messaging.model.AmsMessagesLoaderProvider, param4: string, param5: androidosParcelable);
							public onBackground(): void;
							public onNewAgentMessagesLoaded(param0: number, param1: number): void;
							public onMessageUpdated(param0: number, param1: androidosBundle): void;
							public onConnectionAvailable(): void;
							public onNewUnreadMessages(param0: number, param1: number): void;
							public getLastVisibleItemPosition(): number;
							public onNewAgentMessageReceived(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
							public onCreateViewHolder(param0: androidviewViewGroup, param1: number): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder;
							public onNewMessagesLoaded(param0: number, param1: number, param2: number): void;
							public setCopyBehavior(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior): void;
							public getItemCount(): number;
							public onBindViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number, param2: javautilList): void;
							public getFirstVisibleItemPosition(): number;
							public onViewRecycled(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
							public setListener(param0: com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsMessagesLoaderProvider.d.ts" />
/// <reference path="./com.liveperson.messaging.model.FullMessageRow.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module list {
						export class MessagesAsListLoader {
							public size(): number;
							public isItemAtPositionVisible(param0: number): boolean;
							public removeListener(): void;
							public hasVisibleItems(): boolean;
							public removeQuickRepliesMessageOfConversation(param0: string): void;
							public removeQuickRepliesMessageOfDialog(param0: string): void;
							public onScroll(param0: number): void;
							public onBackground(): void;
							public setNumOfUnreadAgentMessages(param0: number): void;
							public onAgentIsTyping(param0: boolean, param1: string): void;
							public getAgentAvatarUrl(param0: string): string;
							public onConnectionAvailable(): void;
							public setQuickRepliesMessageShown(param0: boolean): void;
							public getPositionMergeStarts(param0: com.liveperson.messaging.model.FullMessageRow): number;
							public constructor(param0: com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader.IHandlerProvider, param1: androidviewView, param2: com.liveperson.messaging.model.AmsMessagesLoaderProvider, param3: com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader.OnListUpdated, param4: string);
							public getUnreadPosition(): number;
							public getTimeAtPosition(param0: number): number;
							public onConnectionLost(): void;
							public getItem(param0: number): com.liveperson.messaging.model.FullMessageRow;
							public onForeground(): void;
						}
						export module MessagesAsListLoader {
							export class IHandlerProvider {
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader$IHandlerProvider interface with the provided implementation.
								 */
								public constructor(implementation: {
									post(param0: javalangRunnable): boolean;
									postDelayed(param0: javalangRunnable, param1: number): boolean;
									removeCallbacks(param0: javalangRunnable): boolean;
									getContext(): androidcontentContext;
									getView(): androidviewView;
								});
								public getView(): androidviewView;
								public postDelayed(param0: javalangRunnable, param1: number): boolean;
								public getContext(): androidcontentContext;
								public removeCallbacks(param0: javalangRunnable): boolean;
								public post(param0: javalangRunnable): boolean;
							}
							export class LoadingMessagesHandler {
								public static SECOND_PHASE_DELAY_MILLIS: number;
								public static FIRST_PHASE_DELAY_MILLIS: number;
								public removeAgentIsTyping(): void;
								public showAgentIsTyping(param0: string): void;
							}
							export module LoadingMessagesHandler {
								export class LoadingNewMessagesRunnableFirstPhase {
									public run(): void;
								}
								export class LoadingNewMessagesRunnableSecondPhase {
									public run(): void;
								}
							}
							export class OnListUpdated {
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader$OnListUpdated interface with the provided implementation.
								 */
								public constructor(implementation: {
									onNewAgentMessageReceived(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
									onNewUserMessageAdded(param0: number): void;
									onNewSystemMessageAdded(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
									onHistoryLoaded(param0: number, param1: number, param2: boolean): void;
									onNewMessagesLoaded(param0: number, param1: number, param2: number): void;
									onNewAgentMessagesLoaded(param0: number, param1: number): void;
									onMessageUpdated(param0: number, param1: androidosBundle): void;
									onClearAllMessages(param0: number, param1: number): void;
									onItemRemoved(param0: number): void;
									onItemMoved(param0: number, param1: number): void;
									getFirstVisibleItemPosition(): number;
									getLastVisibleItemPosition(): number;
									notifyUnreadMessagesChanged(param0: number, param1: string, param2: number): void;
									onNewUnreadMessages(param0: number, param1: number): void;
								});
								public getFirstVisibleItemPosition(): number;
								public notifyUnreadMessagesChanged(param0: number, param1: string, param2: number): void;
								public onNewAgentMessagesLoaded(param0: number, param1: number): void;
								public onNewSystemMessageAdded(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
								public onClearAllMessages(param0: number, param1: number): void;
								public onMessageUpdated(param0: number, param1: androidosBundle): void;
								public onNewUnreadMessages(param0: number, param1: number): void;
								public onNewMessagesLoaded(param0: number, param1: number, param2: number): void;
								public getLastVisibleItemPosition(): number;
								public onNewUserMessageAdded(param0: number): void;
								public onHistoryLoaded(param0: number, param1: number, param2: boolean): void;
								public onItemRemoved(param0: number): void;
								public onNewAgentMessageReceived(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
								public onItemMoved(param0: number, param1: number): void;
							}
						}
					}
				}
			}
		}
	}
}

import orgjsonJSONArray = org.json.JSONArray;
/// <reference path="./org.json.JSONArray.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module list {
						export abstract class OnSCActionClickListener {
							public constructor();
							public onClick(param0: orgjsonJSONArray): void;
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
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export class QRActionClickListener {
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onClick(): void;
							});
							public onClick(): void;
						}
					}
				}
			}
		}
	}
}

import androidviewMotionEvent = android.view.MotionEvent;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.actions.BaseAction.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export class TouchyWebView {
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							public setWebViewOnClickListener(param0: androidcontentContext, param1: string, param2: com.liveperson.messaging.structuredcontent.model.actions.BaseAction, param3: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener): void;
							public constructor(param0: androidcontentContext);
							public constructor(param0: androidcontentContext, param1: androidutilAttributeSet, param2: number);
							public onTouchEvent(param0: androidviewMotionEvent): boolean;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module quickreplies {
							export class QuickRepliesControl {
								public static TAG: string;
								public constructor(param0: androidcontentContext);
								public setQuickRepliesElement(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement, param1: number, param2: string, param3: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param4: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener): void;
								public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							}
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
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module viewpager {
							export class CustomViewPager {
								public constructor(param0: androidcontentContext);
								public onMeasure(param0: number, param1: number): void;
								public constructor(param0: androidcontentContext, param1: androidutilAttributeSet);
							}
						}
					}
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module viewpager {
							export class CustomViewPagerAdapter {
								public isViewFromObject(param0: androidviewView, param1: javalangObject): boolean;
								public getPageWidth(param0: number): number;
								public destroyItem(param0: androidviewViewGroup, param1: number, param2: javalangObject): void;
								public constructor(param0: androidcontentContext, param1: string, param2: javautilList, param3: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations, param4: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener);
								public instantiateItem(param0: androidviewViewGroup, param1: number): javalangObject;
								public getCount(): number;
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
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module viewpager {
							export class ViewPaperPageListener {
								public static TAG: string;
								public constructor(param0: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
								public onPageScrolled(param0: number, param1: number, param2: number): void;
							}
						}
					}
				}
			}
		}
	}
}

import javalangStringBuilder = java.lang.StringBuilder;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.ActionableElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.StringBuilder.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module visitor {
							export abstract class BaseViewBuilderVisitor {
								public mContext: androidcontentContext;
								public mGlobalListener: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener;
								public mBrandId: string;
								public mContentDescriptionStringBuilder: javalangStringBuilder;
								public mStructuredContentContainerOperations: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations;
								public setElementClickListener(param0: com.liveperson.messaging.structuredcontent.model.elements.ActionableElement, param1: androidviewView): void;
								public convertDip2Pixels(param0: androidcontentContext, param1: number): number;
								public createElementContentDescription(param0: androidviewView, param1: string, param2: string): string;
								public activateActions(param0: javautilList, param1: com.liveperson.messaging.structuredcontent.model.elements.ActionableElement): void;
								public setStyle(param0: androidwidgetTextView, param1: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle): void;
								public constructor(param0: androidcontentContext, param1: string, param2: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param3: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.ActionableElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module visitor {
							export class QuickRepliesViewBuilderVisitor extends com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.BaseViewBuilderVisitor {
								public static TAG: string;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement): void;
								public createElementContentDescription(param0: androidviewView, param1: string, param2: string): string;
								public activateActions(param0: javautilList, param1: com.liveperson.messaging.structuredcontent.model.elements.ActionableElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement): void;
								public setStyle(param0: androidwidgetTextView, param1: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle): void;
								public constructor(param0: androidcontentContext, param1: string, param2: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param3: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement): void;
								public constructor(param0: androidcontentContext, param1: androidviewViewGroup, param2: string, param3: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param4: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener, param5: number, param6: number, param7: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
								public getOutputView(): androidviewView;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module visitor {
							export class ViewBuilderVisitor extends com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.BaseViewBuilderVisitor {
								public static TAG: string;
								public mQuickRepliesActionListener: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement): void;
								public constructor(param0: androidcontentContext, param1: string, param2: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param3: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement): void;
								public getViewGroup(): androidviewViewGroup;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement): void;
								public setQuickRepliesActionListener(param0: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener): void;
								public createViewGroupIfMissing(): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement): void;
							}
							export module ViewBuilderVisitor {
								export class StructuredContentContainerOperations {
									/**
									 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor$StructuredContentContainerOperations interface with the provided implementation.
									 */
									public constructor(implementation: {
										onChangeContainerSize(param0: number): void;
										getLeftPadding(): number;
										showAvatar(param0: boolean): void;
										showTimestamp(param0: boolean): void;
									});
									public showTimestamp(param0: boolean): void;
									public getLeftPadding(): number;
									public onChangeContainerSize(param0: number): void;
									public showAvatar(param0: boolean): void;
								}
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
			export module messaging_ui {
				export module utils {
					export class LpFileProvider {
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.model.FileMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingChatMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export class ChatMessageRow {
							public constructor(param0: com.liveperson.messaging.model.MessagingChatMessage, param1: string, param2: string, param3: com.liveperson.messaging.model.FileMessage);
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export class MessageRow {
							public getMessageState(): com.liveperson.messaging.model.MessagingChatMessage.MessageState;
							public setMessageState(param0: number): void;
							public getMessageType(): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
							public constructor(param0: string, param1: number, param2: number);
							public getAgentAvatarUrl(): string;
							public getTimestamp(): number;
							public setAgentAvatarUrl(param0: string): void;
							public getMessage(): string;
							public getEventId(): string;
							public setEventId(param0: string): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.background.filesharing.FileSharingType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export class MessagingAdapterListener {
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onFileClicked(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: number, param4: number, param5: string): void;
							});
							public onFileClicked(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: number, param4: number, param5: string): void;
						}
					}
				}
			}
		}
	}
}

import androidsupportv7widgetRecyclerViewViewHolder = android.support.v7.widget.RecyclerView.ViewHolder;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.ChatMessageRow.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export class MessagingRecyclerViewCursorAdapter {
							public static TAG: string;
							public onCreate(param0: androidviewViewGroup, param1: number): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder;
							public getItemViewType(param0: number): number;
							public isLoadingItem(param0: number): boolean;
							public onBind(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: com.liveperson.infra.messaging_ui.view.adapter.ChatMessageRow, param2: number, param3: number): void;
							public getCopyBehavior(): com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior;
							public setCopyBehavior(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior): void;
							public onViewRecycled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
							public constructor(param0: androidcontentContext, param1: androiddatabaseCursor);
							public extractFromCursor(param0: androiddatabaseCursor): com.liveperson.infra.messaging_ui.view.adapter.ChatMessageRow;
							public setListener(param0: com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener): void;
							public onAccessibilityEventAvailable(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
						}
					}
				}
			}
		}
	}
}

import androidviewViewOnLongClickListener = android.view.View.OnLongClickListener;
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IActivityProvider.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IMenuCallback.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module copybehavior {
							export abstract class CopyBehavior {
								public mActivityProvider: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IActivityProvider;
								public mMenuCallback: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IMenuCallback;
								public getOnClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): androidviewViewOnClickListener;
								public onViewRecycled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
								public setMenuStateListener(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IMenuCallback): void;
								public applyCopyCapability(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
								public setActivityProvider(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IActivityProvider): void;
								public isSelectable(): boolean;
								public getOnLongClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): androidviewViewOnLongClickListener;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.app.Activity.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module copybehavior {
							export class IActivityProvider {
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IActivityProvider interface with the provided implementation.
								 */
								public constructor(implementation: {
									getActivity(): androidappActivity;
								});
								public getActivity(): androidappActivity;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module copybehavior {
							export class IMenuCallback {
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IMenuCallback interface with the provided implementation.
								 */
								public constructor(implementation: {
									onMenuOpen(): void;
									onMenuClose(): void;
								});
								public onMenuOpen(): void;
								public onMenuClose(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module copybehavior {
							export class MessagingActionModeCopyBehavior extends com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior {
								public setSelected(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
								public getOnClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): androidviewViewOnClickListener;
								public setOnLongClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
								public onViewRecycled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
								public applyCopyCapability(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
								public constructor();
								public isSelectable(): boolean;
								public getOnLongClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): androidviewViewOnLongClickListener;
								public getSelectionTextToCopy(): string;
								public setOnClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.MenuItem.d.ts" />
/// <reference path="./com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module copybehavior {
							export class MessagingSimpleMenuCopyBehavior extends com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior {
								public getOnClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): androidviewViewOnClickListener;
								public onViewRecycled(param0: androidsupportv7widgetRecyclerViewViewHolder): void;
								public applyCopyCapability(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
								public constructor();
								public isSelectable(): boolean;
								public getOnLongClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): androidviewViewOnLongClickListener;
							}
							export module MessagingSimpleMenuCopyBehavior {
								export class MyOnMenuItemClickListener {
									public onMenuItemClick(param0: androidviewMenuItem): boolean;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentFormInvitationViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder {
								public static EXTRA_MESSAGE_STATE: string;
								public getTextToCopy(): string;
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public applyColors(): void;
								public constructor(param0: androidviewView);
								public constructor(param0: androidviewView, param1: string, param2: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior);
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public setViewAppearanceByState(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.SimpleElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentStructuredContentViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder implements com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsViewHolder, com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations {
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public updateContentDescription(): void;
								public getLeftPadding(): number;
								public setAgentAvatar(param0: string): void;
								public onChangeContainerSize(param0: number): void;
								public showAvatar(param0: boolean): void;
								public recycle(): void;
								public setRootElement(param0: com.liveperson.messaging.structuredcontent.model.elements.SimpleElement, param1: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param2: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener): void;
								public applyColors(): void;
								public constructor(param0: androidviewView);
								public setMessageText(param0: string, param1: boolean): void;
								public showTimestamp(param0: boolean): void;
								public constructor(param0: androidviewView, param1: string);
								public setAgentNickName(param0: string): void;
								public setRootElement(param0: com.liveperson.messaging.structuredcontent.model.elements.SimpleElement, param1: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener): void;
								public setOnAgentAvatarClicked(param0: androidviewViewOnClickListener): void;
							}
						}
					}
				}
			}
		}
	}
}

import androidwidgetImageView = android.widget.ImageView;
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentTypingViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder {
								public mAgentIsTypingAnimatedIndicator: androidwidgetImageView;
								public applyColors(): void;
								public constructor(param0: androidviewView);
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public showTypingAnimation(): void;
								public recycle(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior.d.ts" />
/// <reference path="./com.liveperson.infra.utils.SourceContent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentURLViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder {
								public getTextToCopy(): string;
								public applyColors(): void;
								public setTimestamp(param0: number): void;
								public constructor(param0: androidviewView);
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public constructor(param0: androidviewView, param1: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior);
								public recycle(): void;
							}
							export module AmsAgentURLViewHolder {
								export class MyLinkPreviewCallback {
									public clean(): void;
									public getText(): string;
									public onPre(): void;
									public onPos(param0: com.liveperson.infra.utils.SourceContent, param1: boolean): void;
									public setText(param0: string): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentViewHolder {
								public mAgentAvatar: androidwidgetImageView;
								public mAgentNickName: string;
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public applyColors(): void;
								public constructor(param0: androidviewView);
								public onBind(): void;
								public updateContentDescription(): void;
								public setMessageText(param0: string, param1: boolean): void;
								public setAgentAvatar(param0: string): void;
								public setAgentNickName(param0: string): void;
								public setOnAgentAvatarClicked(param0: androidviewViewOnClickListener): void;
								public setSecuredFormTitle(): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsBrandMsgViewHolder {
								public applyColors(): void;
								public constructor(param0: androidviewView);
								public updateContentDescription(): void;
								public setMessageText(param0: string, param1: boolean): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsConsumerFormSubmissionViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public constructor(param0: androidviewView, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public getTextToCopy(): string;
								public applyColors(): void;
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsConsumerImageViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewHolder {
								public static TAG: string;
								public mMessageImageView: androidwidgetImageView;
								public constructor(param0: androidviewView, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public onNotStartedAction(): void;
								public applyColors(): void;
								public setMessageImage(param0: string, param1: string, param2: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
								public setMessageText(param0: string, param1: boolean): void;
								public onRequestingUrlAction(): void;
								public updateContentDescription(): void;
								public setImageClickListener(param0: androidviewViewOnClickListener): void;
								public onCompletedAction(): void;
								public recycle(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior.d.ts" />
/// <reference path="./com.liveperson.infra.utils.SourceContent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsConsumerURLViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public constructor(param0: androidviewView, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public constructor(param0: androidviewView, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.CopyBehavior);
								public getTextToCopy(): string;
								public applyColors(): void;
								public setTimestamp(param0: number): void;
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public recycle(): void;
							}
							export module AmsConsumerURLViewHolder {
								export class MyLinkPreviewCallback {
									public clean(): void;
									public getText(): string;
									public onPre(): void;
									public onPos(param0: com.liveperson.infra.utils.SourceContent, param1: boolean): void;
									public setText(param0: string): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./android.widget.TextView.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsConsumerViewHolder {
								public mMessageStateText: androidwidgetTextView;
								public mMessageStateIcon: androidwidgetImageView;
								public mMessageErrorView: androidwidgetImageView;
								public static mSdkMessageState: number;
								public static mMessageStateTextArray: native.Array<string>;
								public mViewHolderType: com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder.ViewHolderType;
								public mMessageType: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
								public constructor(param0: androidviewView, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public applyColors(): void;
								public getErrorView(): androidwidgetImageView;
								public onBind(): void;
								public setStateVisibility(param0: number): void;
								public updateContentDescription(): void;
								public setMessageText(param0: string, param1: boolean): void;
								public setViewAppearanceByState(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: com.liveperson.infra.model.Message): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
							}
							export module AmsConsumerViewHolder {
								export class ViewHolderType {
									public static ICON: com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder.ViewHolderType;
									public static TEXT: com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder.ViewHolderType;
									public static values(): native.Array<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder.ViewHolderType>;
									public static valueOf(param0: string): com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder.ViewHolderType;
								}
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsConsumerVoiceViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewHolder {
								public static TAG: string;
								public constructor(param0: androidviewView, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public stopPlaying(): void;
								public additionalFailAction(): void;
								public constructor(param0: androidviewView, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: string);
								public setFileRowId(param0: number): void;
								public updateContentDescription(): void;
								public onCompletedAction(): void;
								public recycle(): void;
								public setCurrentPlaying(param0: string, param1: number, param2: number): void;
								public onNotStartedAction(): void;
								public getFailedDownloadDrawableResourceId(): number;
								public applyColors(): void;
								public onRequestingUrlAction(): void;
								public stopAnimation(): void;
								public playVoiceMessage(param0: string): void;
								public setVoiceProperties(param0: string, param1: string, param2: number, param3: number, param4: com.liveperson.infra.database.tables.FilesTable.LoadStatus, param5: string): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsControllerSystemViewHolder {
								public mMessageSequence: number;
								public getMessageSequence(): number;
								public setMessageSequence(param0: number): void;
								public applyColors(): void;
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

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.widget.ImageView.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class AmsDownloadableFileViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public static TAG: string;
								public mFileStatusView: androidwidgetImageView;
								public mFileRowId: number;
								public mFullFile: string;
								public mPreviewImage: string;
								public constructor(param0: androidviewView, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public additionalFailAction(): void;
								public setFileRowId(param0: number): void;
								public updateContentDescription(): void;
								public applyLoadStatusForDownloadFlow(param0: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
								public onCompletedAction(): void;
								public onNotStartedAction(): void;
								public startFailedAnimation(): void;
								public getFailedDownloadDrawableResourceId(): number;
								public applyColors(): void;
								public onRequestingUrlAction(): void;
								public startProgressBar(): void;
								public stopAnimation(): void;
								public applyLoadStatusForUploadFlow(param0: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsLoadMoreViewHolder {
								public applyColors(): void;
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
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsSystemDialogResolvedViewHolder {
								public mMessageSequence: number;
								public getMessageSequence(): number;
								public setMessageSequence(param0: number): void;
								public applyColors(): void;
								public hideSystemMessageView(param0: boolean): void;
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

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsSystemMaskedViewHolder {
								public mMessageSequence: number;
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public getMessageSequence(): number;
								public setMessageSequence(param0: number): void;
								public applyColors(): void;
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
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsSystemResolvedViewHolder {
								public mMessageSequence: number;
								public getMessageSequence(): number;
								public setMessageSequence(param0: number): void;
								public applyColors(): void;
								public constructor(param0: androidviewView);
								public hideSystemMessageView(param0: boolean, param1: boolean): void;
								public updateContentDescription(): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsViewHolder {
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsViewHolder interface with the provided implementation.
								 */
								public constructor(implementation: {
									applyColors(): void;
									updateContentDescription(): void;
								});
								public applyColors(): void;
								public updateContentDescription(): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./com.liveperson.infra.model.Message.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class UiUnreadIndicatorViewHolder {
								public applyChanges(param0: androidosBundle, param1: com.liveperson.infra.model.Message): void;
								public applyColors(): void;
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

import androidgraphicsCanvas = android.graphics.Canvas;
import androidsupportv7widgetRecyclerView = android.support.v7.widget.RecyclerView;
import androidsupportv7widgetRecyclerViewState = android.support.v7.widget.RecyclerView.State;
import androidgraphicsRect = android.graphics.Rect;
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewGroup.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module decorators {
						export class AgentIsTypingDecorator {
							public static TAG: string;
							public constructor();
							public getItemOffsets(param0: androidgraphicsRect, param1: androidviewView, param2: androidsupportv7widgetRecyclerView, param3: androidsupportv7widgetRecyclerViewState): void;
							public onDraw(param0: androidgraphicsCanvas, param1: androidsupportv7widgetRecyclerView, param2: androidsupportv7widgetRecyclerViewState): void;
							public setAgentIsTyping(param0: boolean, param1: string): void;
							public fixLayoutSize(param0: androidviewView, param1: androidviewViewGroup): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.support.v7.widget.RecyclerView.d.ts" />
/// <reference path="./android.view.View.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module separator {
						export class ConversationSeparationDecorator {
							public getItemOffsets(param0: androidgraphicsRect, param1: androidviewView, param2: androidsupportv7widgetRecyclerView, param3: androidsupportv7widgetRecyclerViewState): void;
							public constructor(param0: androidcontentContext);
							public onDraw(param0: androidgraphicsCanvas, param1: androidsupportv7widgetRecyclerView, param2: androidsupportv7widgetRecyclerViewState): void;
						}
					}
				}
			}
		}
	}
}

