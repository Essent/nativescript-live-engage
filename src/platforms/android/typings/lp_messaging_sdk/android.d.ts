/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module liveperson {
		export module messaging {
			export module sdk {
				export class BuildConfig {
					public static class: java.lang.Class<com.liveperson.messaging.sdk.BuildConfig>;
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
		export module messaging {
			export module sdk {
				export module api {
					export class LivePerson {
						public static class: java.lang.Class<com.liveperson.messaging.sdk.api.LivePerson>;
						public static ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION: string;
						public static ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA: string;
						public static hideConversation(param0: globalAndroid.app.Activity): void;
						public static reconnect(param0: com.liveperson.infra.LPAuthenticationParams): void;
						public static initialize(param0: globalAndroid.content.Context, param1: com.liveperson.infra.InitLivePersonProperties): void;
						public static getSDKVersion(): string;
						public static checkAgentID(param0: com.liveperson.infra.ICallback<com.liveperson.messaging.model.AgentData,java.lang.Exception>): void;
						public static removeCallBack(): void;
						/** @deprecated */
						public static registerLPPusher(param0: string, param1: string, param2: string): void;
						public static getNumUnreadMessages(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
						public static setIsDebuggable(param0: boolean): void;
						/** @deprecated */
						public static unregisterLPPusher(param0: string, param1: string): void;
						public static setImageServicePendingIntent(param0: globalAndroid.app.PendingIntent): void;
						public static setUserProfile(param0: com.liveperson.messaging.sdk.api.model.ConsumerProfile): void;
						public static resolveConversation(): void;
						public static updateTokenInBackground(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
						public static setCallback(param0: com.liveperson.api.LivePersonCallback): void;
						public static showConversation(param0: globalAndroid.app.Activity, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): boolean;
						public static setImageServiceDownloadNotificationBuilder(param0: globalAndroid.app.Notification.Builder): void;
						public static registerLPPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.LPAuthenticationParams, param4: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
						/** @deprecated */
						public static getNumUnreadMessages(param0: string): number;
						public static handlePushMessage(param0: globalAndroid.content.Context, param1: java.util.Map<string,string>, param2: string, param3: boolean): com.liveperson.infra.model.PushMessage;
						public static unregisterLPPusher(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
						public static getUnreadMessagesCount(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
						public static clearHistory(): boolean;
						public static setImageServiceUploadNotificationBuilder(param0: globalAndroid.app.Notification.Builder): void;
						public static markConversationAsNormal(): void;
						public static shutDown(param0: com.liveperson.messaging.sdk.api.callbacks.ShutDownLivePersonCallback): void;
						public static getConversationFragment(param0: com.liveperson.infra.LPAuthenticationParams, param1: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
						public static logOut(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.liveperson.messaging.sdk.api.callbacks.LogoutLivePersonCallback): void;
						public static markConversationAsUrgent(): void;
						public static checkActiveConversation(param0: com.liveperson.infra.ICallback<java.lang.Boolean,java.lang.Exception>): void;
						public static checkConversationIsMarkedAsUrgent(param0: com.liveperson.infra.ICallback<java.lang.Boolean,java.lang.Exception>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module sdk {
				export module api {
					export module callbacks {
						export class LogoutLivePersonCallback {
							public static class: java.lang.Class<com.liveperson.messaging.sdk.api.callbacks.LogoutLivePersonCallback>;
							/**
							 * Constructs a new instance of the com.liveperson.messaging.sdk.api.callbacks.LogoutLivePersonCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onLogoutSucceed(): void;
								onLogoutFailed(): void;
							});
							public constructor();
							public onLogoutFailed(): void;
							public onLogoutSucceed(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module sdk {
				export module api {
					export module callbacks {
						export class ShutDownLivePersonCallback {
							public static class: java.lang.Class<com.liveperson.messaging.sdk.api.callbacks.ShutDownLivePersonCallback>;
							/**
							 * Constructs a new instance of the com.liveperson.messaging.sdk.api.callbacks.ShutDownLivePersonCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onShutdownSucceed(): void;
								onShutdownFailed(): void;
							});
							public constructor();
							public onShutdownFailed(): void;
							public onShutdownSucceed(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module sdk {
				export module api {
					export module model {
						export class ConsumerProfile {
							public static class: java.lang.Class<com.liveperson.messaging.sdk.api.model.ConsumerProfile>;
							public getAvatarUrl(): string;
							public getFirstName(): string;
							public getLastName(): string;
							public getPhoneNumber(): string;
							public getNickname(): string;
						}
						export module ConsumerProfile {
							export class Builder {
								public static class: java.lang.Class<com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder>;
								public setPhoneNumber(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public setAvatarUrl(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public setNickname(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public setLastName(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public constructor();
								public build(): com.liveperson.messaging.sdk.api.model.ConsumerProfile;
								public setFirstName(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
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
		export module monitoring {
			export module sdk {
				export module api {
					export class LivepersonMonitoring {
						public static class: java.lang.Class<com.liveperson.monitoring.sdk.api.LivepersonMonitoring>;
						public static TAG: string;
						public static getEngagement(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.EngagementCallback): void;
						public static getSDKVersion(): string;
						public static sendSde(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
					}
				}
			}
		}
	}
}

//Generics information:

