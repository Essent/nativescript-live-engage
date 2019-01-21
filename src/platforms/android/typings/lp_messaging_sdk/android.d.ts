/// <reference path="./_helpers.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module sdk {
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
import androidappActivity = android.app.Activity;
import androidsupportv4appFragment = android.support.v4.app.Fragment;
import androidosBundle = android.os.Bundle;
import javautilMap = java.util.Map;
import androidappPendingIntent = android.app.PendingIntent;
import androidappNotificationBuilder = android.app.Notification.Builder;
/// <reference path="./android.app.Activity.d.ts" />
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.support.v4.app.Fragment.d.ts" />
/// <reference path="./com.liveperson.api.LivePersonCallback.d.ts" />
/// <reference path="./com.liveperson.infra.ConversationViewParams.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.InitLivePersonProperties.d.ts" />
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.InitLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.model.PushMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.sdk.api.callbacks.LogoutLivePersonCallback.d.ts" />
/// <reference path="./com.liveperson.messaging.sdk.api.callbacks.ShutDownLivePersonCallback.d.ts" />
/// <reference path="./com.liveperson.messaging.sdk.api.model.ConsumerProfile.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module sdk {
				export module api {
					export class LivePerson {
						public static ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_ACTION: string;
						public static ACTION_LP_UPDATE_NUM_UNREAD_MESSAGES_EXTRA: string;
						public static reconnect(param0: com.liveperson.infra.LPAuthenticationParams): void;
						public static hideConversation(param0: androidappActivity): void;
						public static showConversation(param0: androidappActivity, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): boolean;
						public static shutDown(): void;
						public static getSDKVersion(): string;
						public static initialize(param0: androidcontentContext, param1: com.liveperson.infra.InitLivePersonProperties): void;
						public static getNumUnreadMessages(param0: string): number;
						public static removeCallBack(): void;
						public static handlePush(param0: androidcontentContext, param1: androidosBundle, param2: string, param3: boolean): void;
						public static logOut(param0: androidcontentContext, param1: string, param2: string, param3: com.liveperson.messaging.sdk.api.callbacks.LogoutLivePersonCallback): void;
						public static setUserProfile(param0: com.liveperson.messaging.sdk.api.model.ConsumerProfile): void;
						public static resolveConversation(): void;
						public static getConversationFragment(param0: string): androidsupportv4appFragment;
						public static setUserProfile(param0: string, param1: string, param2: string, param3: string): void;
						public static updateTokenInBackground(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
						public static checkConversationIsMarkedAsUrgent(param0: com.liveperson.infra.ICallback): void;
						public static setCallback(param0: com.liveperson.api.LivePersonCallback): void;
						public static reconnect(param0: string): void;
						public static setImageServiceUploadNotificationBuilder(param0: androidappNotificationBuilder): void;
						public static setImageServiceDownloadNotificationBuilder(param0: androidappNotificationBuilder): void;
						public static setImageServicePendingIntent(param0: androidappPendingIntent): void;
						public static getNumUnreadMessages(param0: string, param1: com.liveperson.infra.ICallback): void;
						public static getConversationFragment(param0: com.liveperson.infra.LPAuthenticationParams, param1: com.liveperson.infra.ConversationViewParams): androidsupportv4appFragment;
						public static showConversation(param0: androidappActivity, param1: string): boolean;
						public static checkActiveConversation(param0: com.liveperson.infra.ICallback): void;
						public static clearHistory(): boolean;
						public static handlePushMessage(param0: androidcontentContext, param1: javautilMap, param2: string, param3: boolean): com.liveperson.infra.model.PushMessage;
						public static markConversationAsNormal(): void;
						public static unregisterLPPusher(param0: string, param1: string): void;
						public static shutDown(param0: com.liveperson.messaging.sdk.api.callbacks.ShutDownLivePersonCallback): void;
						public static showConversation(param0: androidappActivity): boolean;
						public static registerLPPusher(param0: string, param1: string, param2: string): void;
						public static initialize(param0: androidcontentContext, param1: string, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack): void;
						public static checkAgentID(param0: com.liveperson.infra.ICallback): void;
						public static registerLPPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.LPAuthenticationParams, param4: com.liveperson.infra.ICallback): void;
						public static markConversationAsUrgent(): void;
						public static getConversationFragment(): androidsupportv4appFragment;
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
							/**
							 * Constructs a new instance of the com.liveperson.messaging.sdk.api.callbacks.LogoutLivePersonCallback interface with the provided implementation.
							 */
							public constructor(implementation: {
								onLogoutSucceed(): void;
								onLogoutFailed(): void;
							});
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
							/**
							 * Constructs a new instance of the com.liveperson.messaging.sdk.api.callbacks.ShutDownLivePersonCallback interface with the provided implementation.
							 */
							public constructor(implementation: {
								onShutdownSucceed(): void;
								onShutdownFailed(): void;
							});
							public onShutdownFailed(): void;
							public onShutdownSucceed(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.sdk.api.model.ConsumerProfile.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module sdk {
				export module api {
					export module model {
						export class ConsumerProfile {
							public getAvatarUrl(): string;
							public getFirstName(): string;
							public getLastName(): string;
							public getPhoneNumber(): string;
							public getNickname(): string;
						}
						export module ConsumerProfile {
							export class Builder {
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

import javautilList = java.util.List;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.monitoring.sdk.callbacks.SdeCallback.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringParams.d.ts" />
/// <reference path="./com.liveperson.sdk.callbacks.EngagementCallback.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module sdk {
				export module api {
					export class LivepersonMonitoring {
						public static TAG: string;
						public static sendSde(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
						public static getEngagement(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.sdk.callbacks.EngagementCallback): void;
						public static getSDKVersion(): string;
					}
				}
			}
		}
	}
}

