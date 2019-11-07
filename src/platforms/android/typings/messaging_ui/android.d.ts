/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class BuildConfig {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.BuildConfig>;
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
			export module messaging_ui {
				export class ConversationActivity implements com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.ConversationActivity>;
					public static INTENT_ACTION: string;
					public static TYPE_CLOSE_CHAT: number;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
					public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onBackPressed(): void;
					public setSecureFormMode(param0: boolean, param1: string): void;
					public onResume(): void;
					public getUiUtils(): com.liveperson.infra.messaging_ui.uicomponents.MessagingUIUtils;
					public onStart(): void;
					public setFullImageMode(param0: boolean): void;
					public onNewIntent(param0: globalAndroid.content.Intent): void;
					public constructor();
					public onPostCreate(param0: globalAndroid.os.Bundle): void;
					public onPause(): void;
					public setPCIToolbar(param0: string): void;
					public onResolveConversationClick(): void;
					public onMarkAsUrgentClick(param0: com.liveperson.messaging.Messaging): void;
					public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
					public onConnectionChanged(param0: boolean): void;
					public onClearHistoryClicked(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class IMessagingUi {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.IMessagingUi>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.messaging_ui.IMessagingUi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						init(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData): void;
						isInitialized(): boolean;
						shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
						logout(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
						getConversationFragment(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
						showConversation(param0: globalAndroid.app.Activity, param1: string, param2: com.liveperson.infra.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
						hideConversation(param0: globalAndroid.app.Activity): void;
						onAgentAvatarTapped(param0: string): void;
					});
					public constructor();
					public showConversation(param0: globalAndroid.app.Activity, param1: string, param2: com.liveperson.infra.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
					public logout(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public onAgentAvatarTapped(param0: string): void;
					public hideConversation(param0: globalAndroid.app.Activity): void;
					public init(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData): void;
					public isInitialized(): boolean;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class MessagingUIFactory extends com.liveperson.infra.messaging_ui.IMessagingUi {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.MessagingUIFactory>;
					public static instance: com.liveperson.infra.messaging_ui.MessagingUIFactory;
					public mMessagingUi: com.liveperson.infra.messaging_ui.MessagingUi;
					public showConversation(param0: globalAndroid.app.Activity, param1: string, param2: com.liveperson.infra.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
					public logout(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public init(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData): void;
					public isInitialized(): boolean;
					public restart(): void;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
					public getMessagingUi(): com.liveperson.infra.messaging_ui.MessagingUi;
					public onAgentAvatarTapped(param0: string): void;
					public constructor();
					public hideConversation(param0: globalAndroid.app.Activity): void;
					public createController(): com.liveperson.infra.messaging_ui.MessagingUi;
					public clear(): void;
					public static getInstance(): com.liveperson.infra.messaging_ui.MessagingUIFactory;
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class MessagingUi extends com.liveperson.infra.messaging_ui.IMessagingUi {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.MessagingUi>;
					public static TAG: string;
					public showConversation(param0: globalAndroid.app.Activity, param1: string, param2: com.liveperson.infra.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
					public logout(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public onAgentAvatarTapped(param0: string): void;
					public constructor();
					public hideConversation(param0: globalAndroid.app.Activity): void;
					public clear(): void;
					public init(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData): void;
					public restart(): void;
					public isInitialized(): boolean;
					public getInitBrandId(): string;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export class MessagingUiInitData {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.MessagingUiInitData>;
					public constructor(param0: com.liveperson.infra.callbacks.InitLivePersonCallBack, param1: string, param2: com.liveperson.infra.Interceptors);
					public getInitCallBack(): com.liveperson.infra.callbacks.InitLivePersonCallBack;
					public constructor(param0: com.liveperson.infra.InitLivePersonProperties, param1: string, param2: com.liveperson.infra.Interceptors);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module dialog {
					export class ClearHistoryConfirmationDialog {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.dialog.ClearHistoryConfirmationDialog>;
						public static TARGET_ID: string;
						public constructor();
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static getInstance(param0: string): com.liveperson.infra.messaging_ui.dialog.ClearHistoryConfirmationDialog;
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
				export module dialog {
					export class ConversationIsActiveWarningDialog {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.dialog.ConversationIsActiveWarningDialog>;
						public constructor();
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static getInstance(): com.liveperson.infra.messaging_ui.dialog.ConversationIsActiveWarningDialog;
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
				export module dialog {
					export class NewUserDialog {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.dialog.NewUserDialog>;
						public constructor();
						public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
						public static getInstance(): com.liveperson.infra.messaging_ui.dialog.NewUserDialog;
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
					export class ConnectionStatusController {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.ConnectionStatusController>;
						public static TAG: string;
						public static TRYING_TO_CONNECT_DELAY: number;
						public static CONNECTING_DELAY: number;
						public registerToChanges(param0: com.liveperson.infra.messaging_ui.fragment.IConnectable): void;
						public constructor(param0: globalAndroid.content.Context);
						public unregister(): void;
						public initState(param0: boolean, param1: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
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
					export class ConversationFragment implements com.liveperson.infra.messaging_ui.fragment.NestedFragmentsContainerCallbacks, com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction, com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener, com.liveperson.infra.messaging_ui.fragment.IConnectable {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.ConversationFragment>;
						public static TAG: string;
						public static BUNDLE_CONVERSATION_ID: string;
						public static PICK_PHOTO_FOR_MESSAGE: number;
						public static REQUEST_TAKE_PHOTO: number;
						public mRecyclerView: com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView;
						public mEmptyView: globalAndroid.widget.TextView;
						public mEnterMessageLayout: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage;
						public mConversationLayout: globalAndroid.widget.RelativeLayout;
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
						public mContextualActionBehavior: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior;
						public sendCSAT(param0: number, param1: number): void;
						public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
						public onPause(): void;
						public static newInstance(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams, param3: boolean): com.liveperson.infra.messaging_ui.fragment.ConversationFragment;
						public onDestroy(): void;
						public performSaveFile(param0: string): void;
						public OnFileClicked(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: number, param4: number, param5: string): void;
						public onAttach(param0: globalAndroid.content.Context): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public handleClosedDialog(param0: string, param1: string): void;
						public PerformCopyTextToClipboard(param0: string): void;
						public registerConnectionReceiver(): void;
						public constructor();
						public handleConversationUpdate(param0: string, param1: com.liveperson.api.response.types.ConversationState, param2: com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS, param3: string): void;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public startCamera(): void;
						public registerBroadCastReceivers(): void;
						public onResume(): void;
						public connect(): void;
						public onStop(): void;
						public performFileAction(param0: string, param1: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action): void;
						public registerFormStateChangeReceiver(): void;
						public registerDialogStateChangedReceiver(): void;
						public onConversationFragmentClosed(): void;
						public registerConversationStateChangedReceiver(): void;
						public setFullImageMode(param0: boolean): void;
						public initConversationProvider(): void;
						public onConversationResolved(param0: string): void;
						public onStart(): void;
						public onSurveySubmitted(param0: string, param1: number): void;
						public unregisterReceivers(): void;
						public slideOutSecureFormFragment(): void;
						public verifyCameraPermissions(param0: globalAndroid.app.Activity): boolean;
						public verifyStoragePermissions(param0: globalAndroid.app.Activity): boolean;
						public onBackPressed(): boolean;
						public verifyStorageAndRecordPermissions(param0: globalAndroid.app.Activity): boolean;
						public slideOutFragment(): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public initRecyclerView(): void;
						public unregisterFragment(): void;
						public initRelevantToolbar(): void;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public performOpenLink(param0: string): void;
						public setSecureFormMode(param0: boolean, param1: string): void;
						public unregisterForegroundService(): void;
						public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
						public handleConversationClosed(param0: string, param1: string): void;
						public attachActivity(param0: androidx.fragment.app.FragmentActivity): void;
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
					export class ConversationFragmentCallbacks {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
							onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
							setSecureFormMode(param0: boolean, param1: string): void;
							setFullImageMode(param0: boolean): void;
						});
						public constructor();
						public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public setSecureFormMode(param0: boolean, param1: string): void;
						public setFullImageMode(param0: boolean): void;
					}
					export module ConversationFragmentCallbacks {
						export class NullConversationFragmentCallbacks extends com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks.NullConversationFragmentCallbacks>;
							public constructor();
							public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
							public setSecureFormMode(param0: boolean, param1: string): void;
							public setFullImageMode(param0: boolean): void;
							public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
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
				export module fragment {
					export class FeedbackFragment implements com.liveperson.infra.messaging_ui.fragment.IFeedbackActions {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.FeedbackFragment>;
						public static TAG: string;
						public static CSAT_FLOW_DEBUG: boolean;
						public onConnectionChanged(param0: boolean): void;
						public constructor();
						public onResume(): void;
						public static newInstance(param0: string, param1: string, param2: string): com.liveperson.infra.messaging_ui.fragment.FeedbackFragment;
						public slideOutFragment(): boolean;
						public skipFeedBackScreen(): void;
						public onPause(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateAnimation(param0: number, param1: boolean, param2: number): globalAndroid.view.animation.Animation;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public closeFeedBackScreen(): void;
						public onAttachFragment(): void;
					}
					export module FeedbackFragment {
						export class ScreenState {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState>;
							public static CSAT: com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState;
							public static THANK_YOU: com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState;
							public static values(): native.Array<com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState>;
							public static valueOf(param0: string): com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.ScreenState;
						}
						export class StarHandler {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.FeedbackFragment.StarHandler>;
							public constructor(param0: com.liveperson.infra.messaging_ui.fragment.FeedbackFragment);
							public handleMessage(param0: globalAndroid.os.Message): void;
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
				export module fragment {
					export class FullImageFragment {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.FullImageFragment>;
						public static TAG: string;
						public static KEY_IMAGE_URI_STRING: string;
						public static newInstance(param0: string): com.liveperson.infra.messaging_ui.fragment.FullImageFragment;
						public toggleFullScreen(): void;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
						public onDestroy(): void;
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
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
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.IConnectable>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.fragment.IConnectable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							connect(): void;
						});
						public constructor();
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
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.IFeedbackActions>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.fragment.IFeedbackActions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							closeFeedBackScreen(): void;
							skipFeedBackScreen(): void;
						});
						public constructor();
						public closeFeedBackScreen(): void;
						public skipFeedBackScreen(): void;
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
					export class NestedFragmentsContainerCallbacks {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.NestedFragmentsContainerCallbacks>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.fragment.NestedFragmentsContainerCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sendCSAT(param0: number, param1: number): void;
							onSurveySubmitted(param0: string, param1: number): void;
							slideOutFragment(): void;
							slideOutSecureFormFragment(): void;
							setSecureFormMode(param0: boolean, param1: string): void;
							setFullImageMode(param0: boolean): void;
						});
						public constructor();
						public sendCSAT(param0: number, param1: number): void;
						public onSurveySubmitted(param0: string, param1: number): void;
						public setSecureFormMode(param0: boolean, param1: string): void;
						public slideOutFragment(): void;
						public setFullImageMode(param0: boolean): void;
						public slideOutSecureFormFragment(): void;
					}
					export module NestedFragmentsContainerCallbacks {
						export class NullNestedFragmentsContainerCallbacks extends com.liveperson.infra.messaging_ui.fragment.NestedFragmentsContainerCallbacks {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.NestedFragmentsContainerCallbacks.NullNestedFragmentsContainerCallbacks>;
							public constructor();
							public onSurveySubmitted(param0: string, param1: number): void;
							public slideOutFragment(): void;
							public setSecureFormMode(param0: boolean, param1: string): void;
							public setFullImageMode(param0: boolean): void;
							public sendCSAT(param0: number, param1: number): void;
							public slideOutSecureFormFragment(): void;
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
				export module fragment {
					export class SecuredFormFragment {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.SecuredFormFragment>;
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
						public constructor();
						public slideOutSecureFormFragment(): boolean;
						public onActivityCreated(param0: globalAndroid.os.Bundle): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.content.Context): void;
						public slideOutFragment(): boolean;
						public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
						public onStart(): void;
						public onPause(): void;
					}
					export module SecuredFormFragment {
						export class WebAppInterface {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.SecuredFormFragment.WebAppInterface>;
							public onPCIMessage(param0: string): void;
							public constructor(param0: com.liveperson.infra.messaging_ui.fragment.SecuredFormFragment);
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
				export module notification {
					export class NotificationController extends com.liveperson.infra.Clearable {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.notification.NotificationController>;
						public static instance: com.liveperson.infra.messaging_ui.notification.NotificationController;
						public static ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION: string;
						public static ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA: string;
						public getNumUnreadMessages(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
						public clearMessagesForBrand(param0: globalAndroid.content.Context, param1: string): void;
						public static valueOf(param0: string): com.liveperson.infra.messaging_ui.notification.NotificationController;
						public addMessageToCounter(param0: string, param1: com.liveperson.infra.model.PushMessage): number;
						public clear(): void;
						public addMessageAndDisplayNotification(param0: globalAndroid.content.Context, param1: string, param2: com.liveperson.infra.model.PushMessage, param3: boolean, param4: number): void;
						public getNumUnreadMessages(param0: string): number;
						public static values(): native.Array<com.liveperson.infra.messaging_ui.notification.NotificationController>;
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
				export module screens {
					export class CaptionPreviewActivity {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.screens.CaptionPreviewActivity>;
						public static BRAND_ID: string;
						public static TARGET_ID: string;
						public static IMAGE_URI: string;
						public static IMAGE_ORIENTATION: string;
						public static IMAGE_FROM_CAMERA: string;
						public static AUTH_KEY: string;
						public static VIEW_PARAMS: string;
						public constructor();
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onBackPressed(): void;
						public onPause(): void;
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
				export module toolbar {
					export class CaptionPreviewToolBar {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.toolbar.CaptionPreviewToolBar>;
						public setTitle(param0: string): void;
						public constructor(param0: globalAndroid.content.Context);
						public init(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onFinishInflate(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
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
				export module toolbar {
					export class ConversationToolBar extends com.liveperson.infra.messaging_ui.toolbar.LPToolBar {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.toolbar.ConversationToolBar>;
						public mAgentTypingReceiver: com.liveperson.infra.LocalBroadcastReceiver;
						public constructor(param0: globalAndroid.content.Context);
						public setAgentName(param0: string): void;
						public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public registerReceivers(): void;
						public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public onResume(): void;
						public onFinishInflate(): void;
						public unregisterReceivers(): void;
						public updateAgent(): void;
						public onPause(): void;
						public updateToolBarData(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setFullImageMode(param0: boolean): void;
						public onInitCompleted(): void;
						public initReceivers(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setBrandId(param0: string): void;
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
				export module toolbar {
					export abstract class LPToolBar {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.toolbar.LPToolBar>;
						public mBrandId: string;
						public constructor(param0: globalAndroid.content.Context);
						public setAgentName(param0: string): void;
						public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public registerReceivers(): void;
						public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public onResume(): void;
						public onFinishInflate(): void;
						public unregisterReceivers(): void;
						public updateAgent(): void;
						public onPause(): void;
						public updateToolBarData(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setFullImageMode(param0: boolean): void;
						public onInitCompleted(): void;
						public initReceivers(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public setBrandId(param0: string): void;
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
				export module toolbar {
					export class SecuredFormToolBar extends com.liveperson.infra.messaging_ui.toolbar.LPToolBar {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.toolbar.SecuredFormToolBar>;
						public constructor(param0: globalAndroid.content.Context);
						public setAgentName(param0: string): void;
						public onResume(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onFinishInflate(): void;
						public onInitCompleted(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onPause(): void;
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
					export class AmsEnterMessage {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage>;
						public static MAX_RECORD_TIME_MS: number;
						public mHandler: globalAndroid.os.Handler;
						public mRecordProgressBar: globalAndroid.widget.ProgressBar;
						public mMaxRecordTimeTextView: globalAndroid.widget.TextView;
						public mRecordProgressTimeTextView: globalAndroid.widget.TextView;
						public mMaxRecordTimeMs: number;
						public micButton: globalAndroid.widget.ImageButton;
						public stopButton: globalAndroid.widget.ImageButton;
						public replayButton: globalAndroid.widget.ImageButton;
						public recordingIndicator: globalAndroid.widget.ImageView;
						public mMicTooltipWindow: com.liveperson.infra.ui.view.ui.TooltipWindow;
						public onConnectionChanged(param0: boolean): void;
						public cancelRecording(): void;
						public sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;
						public isContentWaiting(): boolean;
						public sendMessage(param0: string): void;
						public sendMessage(): void;
						public changeState(param0: com.liveperson.infra.model.types.ChatState): void;
						public constructor(param0: globalAndroid.content.Context);
						public enableMicButtonTooltips(param0: boolean): void;
						public onAfterChangedText(param0: string): void;
						public onFinishInflate(): void;
						public isRecordingInProgress(): boolean;
						public setEnabled(param0: boolean): void;
						public onHasText(param0: boolean): void;
						public onBeforeChangedText(): void;
						public shouldUpdateSendButton(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
					export module AmsEnterMessage {
						export class RecordingStatus {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus>;
							public static STOPPED: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
							public static MAX_REACHED: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
							public static RECORDING: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
							public static PAUSED: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
							public static PLAYING: com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
							public static values(): native.Array<com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus>;
							public static valueOf(param0: string): com.liveperson.infra.messaging_ui.uicomponents.AmsEnterMessage.RecordingStatus;
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
					export class AttachmentMenu {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.AttachmentMenu>;
						public setOnCloseListener(param0: com.liveperson.infra.ui.view.uicomponents.ICloseMenuListener): void;
						public constructor(param0: globalAndroid.content.Context);
						public show(): void;
						public isMenuOpen(): boolean;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public setListener(param0: com.liveperson.infra.messaging_ui.uicomponents.AttachmentMenu.AttachmentMenuListener): void;
						public onFinishInflate(): void;
						public hide(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
					export module AttachmentMenu {
						export class AttachmentMenuListener {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.AttachmentMenu.AttachmentMenuListener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.AttachmentMenu$AttachmentMenuListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onGalleryButtonPressed(): void;
								onCameraButtonPressed(): void;
							});
							public constructor();
							public onGalleryButtonPressed(): void;
							public onCameraButtonPressed(): void;
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
					export class IScrollDownIndicator {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							resetAndHide(): void;
							resetAndShowCollapsed(): void;
							show(param0: number, param1: string): void;
							setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
							isExpand(): boolean;
						});
						public constructor();
						public resetAndHide(): void;
						public isExpand(): boolean;
						public show(param0: number, param1: string): void;
						public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public resetAndShowCollapsed(): void;
					}
					export module IScrollDownIndicator {
						export class NullImplementation extends com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator.NullImplementation>;
							public constructor();
							public resetAndHide(): void;
							public isExpand(): boolean;
							public resetAndShowCollapsed(): void;
							public show(param0: number, param1: string): void;
							public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
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
					export class ListBehavior extends androidx.coordinatorlayout.widget.CoordinatorLayout.Behavior<globalAndroid.view.View> {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.ListBehavior>;
						public layoutDependsOn(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public onDependentViewChanged(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): boolean;
						public onDependentViewRemoved(param0: androidx.coordinatorlayout.widget.CoordinatorLayout, param1: globalAndroid.view.View, param2: globalAndroid.view.View): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
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
					export class MessagingUIUtils {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.MessagingUIUtils>;
						public showMarkAsUrgentDialog(param0: globalAndroid.content.Context, param1: string, param2: string): void;
						public constructor(param0: com.liveperson.messaging.Messaging);
						public showResolveDialog(param0: globalAndroid.content.Context, param1: string): void;
						public showMarkAsNormalDialog(param0: globalAndroid.content.Context, param1: string, param2: string): void;
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
					export class PushMessageParser {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.PushMessageParser>;
						public constructor();
						public static convertDataToBundle(param0: java.util.Map<string,string>): globalAndroid.os.Bundle;
						public static parseBundle(param0: string, param1: globalAndroid.os.Bundle): com.liveperson.infra.model.PushMessage;
						public static parse(param0: string, param1: java.util.Map<string,string>): com.liveperson.infra.model.PushMessage;
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
					export class ScrollDownIndicator implements com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.ScrollDownIndicator>;
						public constructor(param0: globalAndroid.content.Context);
						public isExpand(): boolean;
						public resetAndHide(): void;
						public show(param0: number, param1: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onFinishInflate(): void;
						public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public resetAndShowCollapsed(): void;
					}
					export module ScrollDownIndicator {
						export class MODE {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.ScrollDownIndicator.MODE>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module inlinemessages {
						export class IInlineMessage {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.IInlineMessage>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.IInlineMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								show(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								hide(): void;
							});
							public constructor();
							public hide(): void;
							public show(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
					export module inlinemessages {
						export class InlineMessagesController {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.InlineMessagesController>;
							public mTTRReceiver: com.liveperson.infra.LocalBroadcastReceiver;
							public unregister(): void;
							public registerTTRReceiver(): void;
							public register(param0: string): void;
							public onConversationResolved(): void;
							public hideAll(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.content.res.Resources, param2: globalAndroid.view.View, param3: com.liveperson.infra.ui.view.uicomponents.IConversationProvider);
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
					export module inlinemessages {
						export class OffHours extends com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.IInlineMessage {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.OffHours>;
							public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.widget.TextView);
							public hide(): void;
							public show(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
					export module inlinemessages {
						export class TTRSnackBar extends com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.IInlineMessage {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.TTRSnackBar>;
							public hide(): void;
							public constructor(param0: globalAndroid.content.res.Resources, param1: globalAndroid.view.View);
							public show(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
						export module TTRSnackBar {
							export class TTRMode {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.TTRSnackBar.TTRMode>;
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
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageBgFgListener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageBgFgListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onBackground(): void;
								onForeground(): void;
							});
							public constructor();
							public onBackground(): void;
							public onForeground(): void;
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
						export class ChatMessageListRecyclerView implements com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageBgFgListener {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView>;
							public static TAG: string;
							public removeQuickRepliesMessageOfConversation(param0: string): void;
							public removeQuickRepliesMessageOfDialog(param0: string): void;
							public onBackground(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onFinishInflate(): void;
							public focusLastItem(): void;
							public setAgentIsTyping(param0: boolean, param1: string): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public initData(param0: com.liveperson.messaging.Messaging, param1: string, param2: globalAndroid.view.View, param3: com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator, param4: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior, param5: globalAndroid.os.Parcelable, param6: com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener): void;
							public onConnectionChanged(param0: boolean): void;
							public getCopyBehavior(): com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior;
							public constructor(param0: globalAndroid.content.Context);
							public onForeground(): void;
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
						export class MessagesAsListAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder> {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListAdapter>;
							public constructor(param0: com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView, param1: globalAndroid.view.View, param2: com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator, param3: com.liveperson.messaging.model.AmsMessagesLoaderProvider, param4: string, param5: globalAndroid.os.Parcelable);
							public setCopyBehavior(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior): void;
							public onClearAllMessages(param0: number, param1: number): void;
							public getItemViewType(param0: number): number;
							public notifyUnreadMessagesChanged(param0: number, param1: string, param2: number): void;
							public getAgentAvatarUrl(param0: string): string;
							public onNewSystemMessageAdded(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
							public onItemRemoved(param0: number): void;
							public onItemMoved(param0: number, param1: number): void;
							public onMessageUpdated(param0: number, param1: globalAndroid.os.Bundle): void;
							public onCreateHeaderViewHolder(param0: globalAndroid.view.ViewGroup): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder;
							public getItem(param0: number): com.liveperson.messaging.model.FullMessageRow;
							public getCopyBehavior(): com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior;
							public onConnectionLost(): void;
							public onForeground(): void;
							public onBindViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number): void;
							public onHistoryLoaded(param0: number, param1: number, param2: boolean): void;
							public getHeaderId(param0: number): number;
							public onNewUserMessageAdded(param0: number): void;
							public onBindViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number, param2: java.util.List<any>): void;
							public onBindHeaderViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number): void;
							public removeQuickRepliesMessageOfConversation(param0: string): void;
							public removeQuickRepliesMessageOfDialog(param0: string): void;
							public onBackground(): void;
							public onNewAgentMessagesLoaded(param0: number, param1: number): void;
							public onConnectionAvailable(): void;
							public onNewUnreadMessages(param0: number, param1: number): void;
							public getLastVisibleItemPosition(): number;
							public onNewAgentMessageReceived(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
							public onNewMessagesLoaded(param0: number, param1: number, param2: number): void;
							public getItemCount(): number;
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

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module list {
						export class MessagesAsListLoader extends com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageBgFgListener {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader>;
							public addWelcomeMessage(): boolean;
							public getMDataSet(): java.util.ArrayList<com.liveperson.messaging.model.FullMessageRow>;
							public size(): number;
							public isItemAtPositionVisible(param0: number): boolean;
							public removeListener(): void;
							public hasVisibleItems(): boolean;
							public constructor(param0: com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView, param1: globalAndroid.view.View, param2: com.liveperson.messaging.model.AmsMessagesLoaderProvider, param3: com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader.OnListUpdated, param4: string);
							public removeQuickRepliesMessageOfConversation(param0: string): void;
							public removeQuickRepliesMessageOfDialog(param0: string): void;
							public onScroll(param0: number): void;
							public onBackground(): void;
							public hideShowQuickRepliesFlagInSharedPreference(): void;
							public getAgentAvatarUrl(param0: string): string;
							public onConnectionAvailable(): void;
							public removeIfResolvedMessagesIsDisabled(param0: java.util.List<com.liveperson.messaging.model.FullMessageRow>): java.util.List<com.liveperson.messaging.model.FullMessageRow>;
							public getPositionMergeStarts(param0: com.liveperson.messaging.model.FullMessageRow): number;
							public getUnreadPosition(): number;
							public removeItemFromDataSet(param0: number, param1: string): void;
							public getTimeAtPosition(param0: number): number;
							public onConnectionLost(): void;
							public getLoadingMessagesHandler(): com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader.LoadingMessagesHandler;
							public getItem(param0: number): com.liveperson.messaging.model.FullMessageRow;
							public onForeground(): void;
						}
						export module MessagesAsListLoader {
							export class LoadingMessagesHandler {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader.LoadingMessagesHandler>;
								public static SECOND_PHASE_DELAY_MILLIS: number;
								public static FIRST_PHASE_DELAY_MILLIS: number;
								public constructor(param0: com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader);
							}
							export module LoadingMessagesHandler {
								export class LoadingNewMessagesRunnableFirstPhase {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader.LoadingMessagesHandler.LoadingNewMessagesRunnableFirstPhase>;
									public run(): void;
								}
								export class LoadingNewMessagesRunnableSecondPhase {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader.LoadingMessagesHandler.LoadingNewMessagesRunnableSecondPhase>;
									public run(): void;
								}
							}
							export class OnListUpdated {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader.OnListUpdated>;
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.list.MessagesAsListLoader$OnListUpdated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onNewAgentMessageReceived(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
									onNewUserMessageAdded(param0: number): void;
									onNewSystemMessageAdded(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
									onHistoryLoaded(param0: number, param1: number, param2: boolean): void;
									onNewMessagesLoaded(param0: number, param1: number, param2: number): void;
									onNewAgentMessagesLoaded(param0: number, param1: number): void;
									onMessageUpdated(param0: number, param1: globalAndroid.os.Bundle): void;
									onClearAllMessages(param0: number, param1: number): void;
									onItemRemoved(param0: number): void;
									onItemMoved(param0: number, param1: number): void;
									getFirstVisibleItemPosition(): number;
									getLastVisibleItemPosition(): number;
									notifyUnreadMessagesChanged(param0: number, param1: string, param2: number): void;
									onNewUnreadMessages(param0: number, param1: number): void;
								});
								public constructor();
								public getFirstVisibleItemPosition(): number;
								public notifyUnreadMessagesChanged(param0: number, param1: string, param2: number): void;
								public onNewAgentMessagesLoaded(param0: number, param1: number): void;
								public onNewSystemMessageAdded(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
								public onClearAllMessages(param0: number, param1: number): void;
								public onMessageUpdated(param0: number, param1: globalAndroid.os.Bundle): void;
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

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module list {
						export abstract class OnSCActionClickListener {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener>;
							public constructor();
							public onClick(param0: org.json.JSONArray): void;
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
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onClick(): void;
							});
							public constructor();
							public onClick(): void;
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
						export class TouchyWebView {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.TouchyWebView>;
							public setWebViewOnClickListener(param0: globalAndroid.content.Context, param1: string, param2: com.liveperson.messaging.structuredcontent.model.actions.BaseAction, param3: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
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
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module quickreplies {
							export class QuickRepliesControl {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.quickreplies.QuickRepliesControl>;
								public static TAG: string;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public constructor(param0: globalAndroid.content.Context);
								public setQuickRepliesElement(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement, param1: number, param2: string, param3: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param4: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener): void;
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
							export class CustomViewPager {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.viewpager.CustomViewPager>;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
								public constructor(param0: globalAndroid.content.Context);
								public onMeasure(param0: number, param1: number): void;
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
							export class CustomViewPagerAdapter {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.viewpager.CustomViewPagerAdapter>;
								public getPageWidth(param0: number): number;
								public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
								public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
								public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: java.util.List<com.liveperson.messaging.structuredcontent.model.elements.BaseElement>, param3: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations, param4: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener);
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
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.viewpager.ViewPaperPageListener>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module uicomponents {
					export module structuredcontent {
						export module visitor {
							export abstract class BaseViewBuilderVisitor {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.BaseViewBuilderVisitor>;
								public mContext: globalAndroid.content.Context;
								public mGlobalListener: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener;
								public mBrandId: string;
								public mContentDescriptionStringBuilder: java.lang.StringBuilder;
								public mStructuredContentContainerOperations: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations;
								public activateActions(param0: java.util.List<com.liveperson.messaging.structuredcontent.model.actions.BaseAction>, param1: com.liveperson.messaging.structuredcontent.model.elements.ActionableElement): void;
								public convertDip2Pixels(param0: globalAndroid.content.Context, param1: number): number;
								public setStyle(param0: globalAndroid.widget.TextView, param1: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle): void;
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param3: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
								public createElementContentDescription(param0: globalAndroid.view.View, param1: string, param2: string): string;
								public setElementClickListener(param0: com.liveperson.messaging.structuredcontent.model.elements.ActionableElement, param1: globalAndroid.view.View): void;
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
						export module visitor {
							export class QuickRepliesViewBuilderVisitor extends com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.BaseViewBuilderVisitor {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.QuickRepliesViewBuilderVisitor>;
								public static TAG: string;
								public activateActions(param0: java.util.List<com.liveperson.messaging.structuredcontent.model.actions.BaseAction>, param1: com.liveperson.messaging.structuredcontent.model.elements.ActionableElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement): void;
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param3: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement): void;
								public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.ViewGroup, param2: string, param3: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param4: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener, param5: number, param6: number, param7: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
								public getOutputView(): globalAndroid.view.View;
								public setStyle(param0: globalAndroid.widget.TextView, param1: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle): void;
								public createElementContentDescription(param0: globalAndroid.view.View, param1: string, param2: string): string;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement): void;
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
						export module visitor {
							export class ViewBuilderVisitor extends com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.BaseViewBuilderVisitor {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor>;
								public static TAG: string;
								public mQuickRepliesActionListener: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement): void;
								public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param3: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations);
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement): void;
								public setQuickRepliesActionListener(param0: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener): void;
								public getViewGroup(): globalAndroid.view.ViewGroup;
								public createViewGroupIfMissing(): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement): void;
							}
							export module ViewBuilderVisitor {
								export class AccessibilityDelegateForSc {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.AccessibilityDelegateForSc>;
									public onRequestSendAccessibilityEvent(param0: globalAndroid.view.ViewGroup, param1: globalAndroid.view.View, param2: globalAndroid.view.accessibility.AccessibilityEvent): boolean;
								}
								export class StructuredContentContainerOperations {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations>;
									/**
									 * Constructs a new instance of the com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor$StructuredContentContainerOperations interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
									 */
									public constructor(implementation: {
										onChangeContainerSize(param0: number): void;
										getLeftPadding(): number;
										showAvatar(param0: boolean): void;
										showTimestamp(param0: boolean): void;
									});
									public constructor();
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
					export class ConversationStateHandler {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.utils.ConversationStateHandler>;
						public static TAG: string;
						public static setIsHideConversationCalledInBackground(param0: boolean): void;
						public static isConversationFragmentRunning(): boolean;
						public constructor();
						public static setIsConversationFragmentRunning(param0: boolean): void;
						public static setConversationBackgroundStatus(param0: boolean): void;
						public static isConversationInBackground(): boolean;
						public static isHideConversationCalledInBackground(): boolean;
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
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.utils.LpFileProvider>;
						public constructor();
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
						export class MessagingAdapterListener {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								OnFileClicked(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: number, param4: number, param5: string): void;
							});
							public constructor();
							public OnFileClicked(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: number, param4: number, param5: string): void;
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
							export abstract class ContextualActionBehavior {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior>;
								public mActivityProvider: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IActivityProvider;
								public mMenuCallback: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IMenuCallback;
								public mContextualItemAction: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction;
								public mBundledViewData: java.util.ArrayList<java.lang.Integer>;
								public mIsFileSelected: boolean;
								public setActionMode(): void;
								public getListOfSelectedItems(): java.util.ArrayList;
								public setActivityProvider(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IActivityProvider): void;
								public isSelectable(): boolean;
								public hasFilePath(param0: com.liveperson.messaging.model.FileMessage): boolean;
								public getOnLongClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): globalAndroid.view.View.OnLongClickListener;
								public setMenuStateListener(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IMenuCallback): void;
								public getOnClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): globalAndroid.view.View.OnClickListener;
								public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
								public isFile(param0: com.liveperson.messaging.model.FileMessage): boolean;
								public getContextualItemAction(): com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction;
								public getIfFileSelectedBeforeOrientation(): boolean;
								public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
								public applyContextualActionBehavior(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): void;
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
							export class ContextualItemAction {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction>;
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									performOpenLink(param0: string): void;
									PerformCopyTextToClipboard(param0: string): void;
									performSaveFile(param0: string): void;
									performFileAction(param0: string, param1: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action): void;
								});
								public constructor();
								public performFileAction(param0: string, param1: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action): void;
								public PerformCopyTextToClipboard(param0: string): void;
								public performSaveFile(param0: string): void;
								public performOpenLink(param0: string): void;
							}
							export module ContextualItemAction {
								export class Action {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action>;
									public static SHARE: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action;
									public static OPEN: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action;
									public static values(): native.Array<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action>;
									public static valueOf(param0: string): com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action;
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
				export module view {
					export module adapter {
						export module copybehavior {
							export class IActivityProvider {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IActivityProvider>;
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IActivityProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getActivity(): globalAndroid.app.Activity;
								});
								public constructor();
								public getActivity(): globalAndroid.app.Activity;
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
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IMenuCallback>;
								/**
								 * Constructs a new instance of the com.liveperson.infra.messaging_ui.view.adapter.copybehavior.IMenuCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onMenuOpen(): void;
									onMenuClose(): void;
								});
								public constructor();
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

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module copybehavior {
							export class MessagingContextualActionModeBehavior extends com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.MessagingContextualActionModeBehavior>;
								public onDestroyActionMode(param0: globalAndroid.view.ActionMode): void;
								public onCreateActionMode(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
								public setActionMode(): void;
								public constructor(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction, param1: java.util.ArrayList<java.lang.Integer>, param2: boolean);
								public onActionItemClicked(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
								public getListOfSelectedItems(): java.util.ArrayList;
								public onPrepareActionMode(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
								public isSelectable(): boolean;
								public setOnClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): void;
								public getOnLongClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): globalAndroid.view.View.OnLongClickListener;
								public setSelected(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): void;
								public setOnLongClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): void;
								public getOnClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): globalAndroid.view.View.OnClickListener;
								public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
								public getSelectionTextToCopy(): string;
								public getIfFileSelectedBeforeOrientation(): boolean;
								public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
								public applyContextualActionBehavior(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): void;
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
							export class MessagingContextualSimpleMenuBehavior extends com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.MessagingContextualSimpleMenuBehavior>;
								public constructor(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction, param1: java.util.ArrayList, param2: boolean);
								public setActionMode(): void;
								public getListOfSelectedItems(): java.util.ArrayList;
								public getOnClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): globalAndroid.view.View.OnClickListener;
								public isSelectable(): boolean;
								public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
								public getIfFileSelectedBeforeOrientation(): boolean;
								public applyContextualActionBehavior(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): void;
								public getOnLongClickListener(param0: number, param1: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param2: com.liveperson.messaging.model.FileMessage): globalAndroid.view.View.OnLongClickListener;
							}
							export module MessagingContextualSimpleMenuBehavior {
								export class MyOnMenuItemClickListener {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.copybehavior.MessagingContextualSimpleMenuBehavior.MyOnMenuItemClickListener>;
									public onMenuItemClick(param0: globalAndroid.view.MenuItem): boolean;
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
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentFileViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentFileViewHolder>;
								public static TAG: string;
								public mMessageImageView: globalAndroid.widget.ImageView;
								public mFileStatusView: globalAndroid.widget.ImageView;
								public mDownloadableFileViewProcessor: com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewProcessor;
								public mMessageType: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
								public setMessageImage(param0: string, param1: string, param2: com.liveperson.infra.database.tables.FilesTable.LoadStatus, param3: com.liveperson.messaging.background.filesharing.FileSharingType): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public getAmsDownloadableFileViewProcessor(): com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewProcessor;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public setImageLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
								public recycle(): void;
								public setImageClickListener(param0: globalAndroid.view.View.OnClickListener): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentFormInvitationViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentFormInvitationViewHolder>;
								public static EXTRA_MESSAGE_STATE: string;
								public getTextToCopy(): string;
								public applyColors(): void;
								public constructor(param0: globalAndroid.view.View, param1: string);
								public updateContentDescription(): void;
								public setMessageText(param0: string, param1: boolean): void;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public setViewAppearanceByState(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
								public setMessageState(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentStructuredContentViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder implements com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentStructuredContentViewHolder>;
								public constructor(param0: globalAndroid.view.View, param1: string);
								public updateContentDescription(): void;
								public getLeftPadding(): number;
								public onChangeContainerSize(param0: number): void;
								public showAvatar(param0: boolean): void;
								public recycle(): void;
								public constructor(param0: globalAndroid.view.View);
								public setRootElement(param0: com.liveperson.messaging.structuredcontent.model.elements.SimpleElement, param1: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener, param2: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.QRActionClickListener): void;
								public applyColors(): void;
								public setVisibility(param0: boolean): void;
								public setMessageText(param0: string, param1: boolean): void;
								public showTimestamp(param0: boolean): void;
								public setRootElement(param0: com.liveperson.messaging.structuredcontent.model.elements.SimpleElement, param1: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener): void;
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
							export class AmsAgentTypingViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentTypingViewHolder>;
								public mAgentIsTypingAnimatedIndicator: globalAndroid.widget.ImageView;
								public setMessageText(param0: string, param1: boolean): void;
								public showTypingAnimation(): void;
								public recycle(): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentURLViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentURLViewHolder>;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior);
								public getTextToCopy(): string;
								public applyColors(): void;
								public setTimestamp(param0: number): void;
								public setMessageText(param0: string, param1: boolean): void;
								public recycle(): void;
								public constructor(param0: globalAndroid.view.View);
							}
							export module AmsAgentURLViewHolder {
								export class MyLinkPreviewCallback {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentURLViewHolder.MyLinkPreviewCallback>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsAgentViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder>;
								public mAgentAvatar: globalAndroid.widget.ImageView;
								public mAgentNickName: string;
								public applyColors(): void;
								public onBind(): void;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public updateContentDescription(): void;
								public setMessageText(param0: string, param1: boolean): void;
								public setOnAgentAvatarClicked(param0: globalAndroid.view.View.OnClickListener): void;
								public setAgentAvatar(param0: string): void;
								public setAgentNickName(param0: string): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsBrandMsgViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsBrandMsgViewHolder>;
								public applyColors(): void;
								public updateContentDescription(): void;
								public setMessageText(param0: string, param1: boolean): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsConsumerFormSubmissionViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerFormSubmissionViewHolder>;
								public getTextToCopy(): string;
								public applyColors(): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public setMessageText(param0: string, param1: boolean): void;
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
							export class AmsConsumerImageViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerImageViewHolder>;
								public static TAG: string;
								public mMessageImageView: globalAndroid.widget.ImageView;
								public mFileStatusView: globalAndroid.widget.ImageView;
								public mDownloadableFileViewProcessor: com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewProcessor;
								public setMessageImage(param0: string, param1: string, param2: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public getAmsDownloadableFileViewProcessor(): com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewProcessor;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public setImageLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
								public recycle(): void;
								public setImageClickListener(param0: globalAndroid.view.View.OnClickListener): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
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
							export class AmsConsumerURLViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerURLViewHolder>;
								public getTextToCopy(): string;
								public applyColors(): void;
								public setTimestamp(param0: number): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public setMessageText(param0: string, param1: boolean): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior);
								public recycle(): void;
							}
							export module AmsConsumerURLViewHolder {
								export class MyLinkPreviewCallback {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerURLViewHolder.MyLinkPreviewCallback>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsConsumerViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder>;
								public mMessageStateText: globalAndroid.widget.TextView;
								public mMessageStateIcon: globalAndroid.widget.ImageView;
								public mMessageErrorView: globalAndroid.widget.ImageView;
								public static mSdkMessageState: number;
								public static mMessageStateTextArray: native.Array<string>;
								public mViewHolderType: com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder.ViewHolderType;
								public mMessageType: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
								public getErrorView(): globalAndroid.widget.ImageView;
								public applyColors(): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public onBind(): void;
								public setStateVisibility(param0: number): void;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public updateContentDescription(): void;
								public setMessageText(param0: string, param1: boolean): void;
								public setViewAppearanceByState(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: com.liveperson.infra.model.Message): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
							}
							export module AmsConsumerViewHolder {
								export class ViewHolderType {
									public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder.ViewHolderType>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsConsumerVoiceViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerVoiceViewHolder>;
								public static TAG: string;
								public stopPlaying(): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public updateContentDescription(): void;
								public setFileRowId(param0: number): void;
								public playVoiceMessage(param0: string): void;
								public recycle(): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: string);
								public setVoiceProperties(param0: string, param1: string, param2: number, param3: number, param4: com.liveperson.infra.database.tables.FilesTable.LoadStatus, param5: string): void;
								public setCurrentPlaying(param0: string, param1: number, param2: number): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
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
							export class AmsControllerSystemViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsControllerSystemViewHolder>;
								public mMessageSequence: number;
								public getMessageSequence(): number;
								public setMessageSequence(param0: number): void;
								public applyColors(): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export abstract class AmsDownloadableFileViewProcessor {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewProcessor>;
								public static TAG: string;
								public mFileStatusView: globalAndroid.widget.ImageView;
								public mFileRowId: number;
								public mFullFile: string;
								public mFileTpe: string;
								public mPreviewImage: string;
								public applyChanges(param0: globalAndroid.os.Bundle): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public additionalFailAction(): void;
								public setFileRowId(param0: number): void;
								public applyLoadStatusForDownloadFlow(param0: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
								public onCompletedAction(): void;
								public onNotStartedAction(): void;
								public startFailedAnimation(): void;
								public getFailedDownloadDrawableResourceId(): number;
								public onRequestingUrlAction(): void;
								public startProgressBar(): void;
								public stopAnimation(): void;
								public applyLoadStatusForUploadFlow(param0: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
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
							export class AmsLoadMoreViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsLoadMoreViewHolder>;
								public applyColors(): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsSystemDialogResolvedViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsSystemDialogResolvedViewHolder>;
								public mMessageSequence: number;
								public getMessageSequence(): number;
								public setMessageSequence(param0: number): void;
								public applyColors(): void;
								public hideSystemMessageView(param0: boolean): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsSystemMaskedViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsSystemMaskedViewHolder>;
								public mMessageSequence: number;
								public getMessageSequence(): number;
								public setMessageSequence(param0: number): void;
								public applyColors(): void;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class AmsSystemResolvedViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsSystemResolvedViewHolder>;
								public mMessageSequence: number;
								public getMessageSequence(): number;
								public setMessageSequence(param0: number): void;
								public applyColors(): void;
								public hideSystemMessageView(param0: boolean, param1: boolean): void;
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
			export module messaging_ui {
				export module view {
					export module adapter {
						export module viewholder {
							export class UiUnreadIndicatorViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.UiUnreadIndicatorViewHolder>;
								public applyColors(): void;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
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
			export module messaging_ui {
				export module view {
					export module decorators {
						export class AgentIsTypingDecorator {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.decorators.AgentIsTypingDecorator>;
							public static TAG: string;
							public constructor();
							public fixLayoutSize(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup): void;
							public setAgentIsTyping(param0: boolean, param1: string): void;
							public onDraw(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
							public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:

