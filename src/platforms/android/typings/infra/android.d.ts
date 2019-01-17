/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class BadArgumentException {
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
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

import javalangLong = java.lang.Long;
import androidosParcel = android.os.Parcel;
import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class CampaignInfo {
				public static CREATOR: androidosParcelableCreator;
				public setCampaignId(param0: javalangLong): void;
				public writeToParcel(param0: androidosParcel, param1: number): void;
				public constructor(param0: javalangLong, param1: javalangLong, param2: string, param3: string, param4: string);
				public toString(): string;
				public getVisitorId(): string;
				public setEngagementId(param0: javalangLong): void;
				public getContextId(): string;
				public constructor(param0: androidosParcel);
				public getCampaignId(): javalangLong;
				public getConnectorId(): string;
				public setConnectorId(param0: string): void;
				public setVisitorId(param0: string): void;
				public describeContents(): number;
				public setSessionId(param0: string): void;
				public setContextId(param0: string): void;
				public constructor(param0: javalangLong, param1: javalangLong, param2: string, param3: string, param4: string, param5: string);
				public getEngagementId(): javalangLong;
				public getSessionId(): string;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class Clearable {
				/**
				 * Constructs a new instance of the com.liveperson.infra.Clearable interface with the provided implementation.
				 */
				public constructor(implementation: {
					clear(): void;
				});
				public clear(): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class Command {
				/**
				 * Constructs a new instance of the com.liveperson.infra.Command interface with the provided implementation.
				 */
				public constructor(implementation: {
					execute(): void;
				});
				public execute(): void;
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.liveperson.infra.CampaignInfo.d.ts" />
/// <reference path="./com.liveperson.infra.LPConversationHistoryMaxDaysDateType.d.ts" />
/// <reference path="./com.liveperson.infra.LPConversationsHistoryStateToDisplay.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class ConversationViewParams {
				public static CREATOR: androidosParcelableCreator;
				public setCampaignInfo(param0: com.liveperson.infra.CampaignInfo): com.liveperson.infra.ConversationViewParams;
				public writeToParcel(param0: androidosParcel, param1: number): void;
				public isFilterOn(): boolean;
				public setHistoryConversationsStateToDisplay(param0: com.liveperson.infra.LPConversationsHistoryStateToDisplay): com.liveperson.infra.ConversationViewParams;
				public getHistoryConversationMaxDaysType(): com.liveperson.infra.LPConversationHistoryMaxDaysDateType;
				public getHistoryConversationsMaxDays(): number;
				public isViewOnlyMode(): boolean;
				public constructor(param0: boolean);
				public getHistoryConversationsStateToDisplay(): com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public toString(): string;
				public constructor();
				public clearCampaignInfo(): void;
				public getCampaignInfo(): com.liveperson.infra.CampaignInfo;
				public constructor(param0: androidosParcel);
				public setHistoryConversationsMaxDays(param0: number): com.liveperson.infra.ConversationViewParams;
				public describeContents(): number;
				public setReadOnlyMode(param0: boolean): com.liveperson.infra.ConversationViewParams;
				public setHistoryConversationMaxDaysType(param0: com.liveperson.infra.LPConversationHistoryMaxDaysDateType): com.liveperson.infra.ConversationViewParams;
			}
		}
	}
}

import javautilHashSet = java.util.HashSet;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashSet.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class ForegroundService {
				public static SCREEN_FOREGROUND_ACTION: string;
				public static SCREEN_FOREGROUND_EXTRA_BRAND_ID: string;
				public static SCREEN_FOREGROUND_EXTRA_TARGET_ID: string;
				public static SCREEN_FOREGROUND_EXTRA_IS_FOREGROUND: string;
				public restart(): void;
				public unregisterBrand(param0: string): void;
				public unregisterAll(): void;
				public isBrandForeground(param0: string): boolean;
				public isBrandForeground(): boolean;
				public unregisterTarget(param0: string): void;
				public isTargetForeground(param0: string): boolean;
				public register(param0: string, param1: string): void;
				public shutDown(): void;
				public static getInstance(): com.liveperson.infra.ForegroundService;
				public getForegroundBrandId(): javautilHashSet;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashSet.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class ForegroundServiceInterface {
				/**
				 * Constructs a new instance of the com.liveperson.infra.ForegroundServiceInterface interface with the provided implementation.
				 */
				public constructor(implementation: {
					register(param0: string, param1: string): void;
					unregisterBrand(param0: string): void;
					unregisterAll(): void;
					unregisterTarget(param0: string): void;
					isBrandForeground(): boolean;
					isBrandForeground(param0: string): boolean;
					isTargetForeground(param0: string): boolean;
					getForegroundBrandId(): javautilHashSet;
				});
				public unregisterBrand(param0: string): void;
				public unregisterAll(): void;
				public isBrandForeground(param0: string): boolean;
				public isBrandForeground(): boolean;
				public unregisterTarget(param0: string): void;
				public isTargetForeground(param0: string): boolean;
				public register(param0: string, param1: string): void;
				public getForegroundBrandId(): javautilHashSet;
			}
		}
	}
}

import javalangObject = java.lang.Object;
import javalangThrowable = java.lang.Throwable;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class ICallback {
				/**
				 * Constructs a new instance of the com.liveperson.infra.ICallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onSuccess(param0: javalangObject): void;
					onError(param0: javalangThrowable): void;
				});
				public onSuccess(param0: javalangObject): void;
				public onError(param0: javalangThrowable): void;
			}
		}
	}
}

import javautilHashMap = java.util.HashMap;
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class IConfiguration {
				/**
				 * Constructs a new instance of the com.liveperson.infra.IConfiguration interface with the provided implementation.
				 */
				public constructor(implementation: {
					<clinit>(): void;
				});
				public static mFeaturesMap: javautilHashMap;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class IDisposable {
				/**
				 * Constructs a new instance of the com.liveperson.infra.IDisposable interface with the provided implementation.
				 */
				public constructor(implementation: {
					dispose(): void;
				});
				public dispose(): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class IPermissionCallback {
				/**
				 * Constructs a new instance of the com.liveperson.infra.IPermissionCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onPermissionsGranted(): void;
					onPermissionsDenied(): void;
				});
				public onPermissionsDenied(): void;
				public onPermissionsGranted(): void;
			}
		}
	}
}

import androidcontentContext = android.content.Context;
import javalangRunnable = java.lang.Runnable;
import androidosHandler = android.os.Handler;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Handler.d.ts" />
/// <reference path="./com.liveperson.infra.Infra.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.InitLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.LogoutLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.configuration.LptagEnvironment.d.ts" />
/// <reference path="./com.liveperson.infra.controller.DBEncryptionKeyHelper.d.ts" />
/// <reference path="./com.liveperson.infra.log.logreporter.loggos.Loggos.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.init.InfraInitData.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.logout.PreLogoutCompletionListener.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.InitProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.LogoutProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.ShutDownProcess.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class Infra {
				public static instance: com.liveperson.infra.Infra;
				public static KEY_BRAND_ID: string;
				public static KEY_AUTH_KEY: string;
				public static KEY_READ_ONLY: string;
				public static KEY_VIEW_PARAMS: string;
				public static KEY_TARGET_ID: string;
				public static SDK_VERSION: string;
				public static FEATURES_CONFIGURATION: string;
				public static SHOULD_USE_CONFIGURATION: string;
				public static CLEAR_HISTORY_SHOW_CONFIRM_DIALOG: string;
				public static TTR_MESSAGE_OFF_HOURS_ENABLED: string;
				public static DISABLE_TTR_POPUP: string;
				public static SHOW_TIMESTAMP_IN_TTR_NOTIFICATION: string;
				public static CONTEXTUAL_MENU_ON_TOOLBAR: string;
				public static SHOW_FEEDBACK: string;
				public static SHOW_CSAT_THANK_YOU: string;
				public static SHOW_AGENT_DETAILS_CSAT: string;
				public static SHOW_YES_NO_QUESTION: string;
				public static valueOf(param0: string): com.liveperson.infra.Infra;
				public getHostVersion(): string;
				public logout(param0: androidcontentContext, param1: com.liveperson.infra.sdkstatemachine.init.InfraInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
				public getApplicationHandler(): androidosHandler;
				public getLptagEnvironment(): com.liveperson.infra.configuration.LptagEnvironment;
				public shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
				public restart(): void;
				public getDbEncryptionKeyHelper(): com.liveperson.infra.controller.DBEncryptionKeyHelper;
				public getApplicationContext(): androidcontentContext;
				public clear(): void;
				public static values(): native.Array<com.liveperson.infra.Infra>;
				public isInitialized(): boolean;
				public postOnMainThread(param0: javalangRunnable): void;
				public init(param0: androidcontentContext, param1: com.liveperson.infra.sdkstatemachine.init.InfraInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
				public unregisterToNetworkChanges(): void;
				public registerToNetworkChanges(): void;
				public getLoggos(): com.liveperson.infra.log.logreporter.loggos.Loggos;
				public static getFileProviderAuthorityPrefix(): string;
				public setContext(param0: androidcontentContext): void;
			}
			export module Infra {
				export class InfraInitProcess extends com.liveperson.infra.statemachine.InitProcess {
					public constructor(param0: com.liveperson.infra.Infra, param1: androidcontentContext, param2: com.liveperson.infra.sdkstatemachine.init.InfraInitData, param3: com.liveperson.infra.statemachine.InitProcess);
					public getInitCallback(): com.liveperson.infra.callbacks.InitLivePersonCallBack;
					public constructor();
					public init(): void;
				}
				export class InfraLogoutProcess extends com.liveperson.infra.statemachine.LogoutProcess {
					public preLogout(param0: com.liveperson.infra.sdkstatemachine.logout.PreLogoutCompletionListener): void;
					public shutDownForLogout(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
					public constructor();
					public logout(): void;
					public constructor(param0: com.liveperson.infra.Infra, param1: androidcontentContext, param2: com.liveperson.infra.sdkstatemachine.init.InfraInitData, param3: com.liveperson.infra.statemachine.LogoutProcess);
					public initForLogout(): void;
					public getLogoutCallback(): com.liveperson.infra.callbacks.LogoutLivePersonCallBack;
				}
				export class InfraShutDownProcess extends com.liveperson.infra.statemachine.ShutDownProcess {
					public constructor();
					public constructor(param0: com.liveperson.infra.Infra, param1: com.liveperson.infra.statemachine.ShutDownProcess);
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.Interceptors.d.ts" />
/// <reference path="./com.liveperson.infra.MonitoringInitParams.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.InitLivePersonCallBack.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class InitLivePersonProperties {
				public constructor(param0: string, param1: string, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack);
				public static isValid(param0: com.liveperson.infra.InitLivePersonProperties): boolean;
				public getBrandId(): string;
				public addInterceptors(param0: com.liveperson.infra.Interceptors): void;
				public getMonitoringInitParams(): com.liveperson.infra.MonitoringInitParams;
				public getAppId(): string;
				public getInterceptors(): com.liveperson.infra.Interceptors;
				public constructor(param0: string, param1: string, param2: com.liveperson.infra.MonitoringInitParams, param3: com.liveperson.infra.callbacks.InitLivePersonCallBack);
				public isMonitoringParamsValid(): boolean;
				public getInitCallBack(): com.liveperson.infra.callbacks.InitLivePersonCallBack;
				public setInitCallBack(param0: com.liveperson.infra.callbacks.InitLivePersonCallBack): void;
			}
		}
	}
}

import javautilList = java.util.List;
import okhttp3Interceptor = okhttp3.Interceptor;
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Interceptor.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class Interceptors {
				public static TAG: string;
				public getHttpInterceptorList(): javautilList;
				public constructor(param0: javautilList);
				public addInterceptor(param0: okhttp3Interceptor): void;
			}
		}
	}
}

import androidcontentIntent = android.content.Intent;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.liveperson.infra.InternetConnectionService.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class InternetConnectionService {
				public static BROADCAST_INTERNET_CONNECTION_CONNECTED: string;
				public static BROADCAST_INTERNET_CONNECTION_DISCONNECTED: string;
				public registeredReceiver(): void;
				public shutDown(): void;
				public unRegisteredReceiver(): void;
				public static isNetworkAvailable(): boolean;
			}
			export module InternetConnectionService {
				export class ConnectionReceiver {
					public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
					public register(param0: androidcontentContext): void;
					public constructor(param0: com.liveperson.infra.InternetConnectionService);
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class LPAuthenticationParams {
				public static CREATOR: androidosParcelableCreator;
				public getAuthType(): com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType;
				public writeToParcel(param0: androidosParcel, param1: number): void;
				public setHostAppRedirectUri(param0: string): com.liveperson.infra.LPAuthenticationParams;
				public addCertificatePinningKey(param0: string): com.liveperson.infra.LPAuthenticationParams;
				public getHostAppJWT(): string;
				public constructor();
				public setAuthKey(param0: string): com.liveperson.infra.LPAuthenticationParams;
				public constructor(param0: com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType);
				public getAuthKey(): string;
				public constructor(param0: androidosParcel);
				public getHostAppRedirectUri(): string;
				public setHostAppJWT(param0: string): com.liveperson.infra.LPAuthenticationParams;
				public describeContents(): number;
				public isAuthenticated(): boolean;
				public getCertificatePinningKeys(): javautilList;
			}
			export module LPAuthenticationParams {
				export class LPAuthenticationType {
					public static SIGN_UP: com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType;
					public static UN_AUTH: com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType;
					public static AUTH: com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType;
					public static valueOf(param0: string): com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType;
					public static values(): native.Array<com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType>;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class LPConversationHistoryMaxDaysDateType {
				public static startConversationDate: com.liveperson.infra.LPConversationHistoryMaxDaysDateType;
				public static endConversationDate: com.liveperson.infra.LPConversationHistoryMaxDaysDateType;
				public static values(): native.Array<com.liveperson.infra.LPConversationHistoryMaxDaysDateType>;
				public static valueOf(param0: string): com.liveperson.infra.LPConversationHistoryMaxDaysDateType;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class LPConversationsHistoryStateToDisplay {
				public static OPEN: com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public static CLOSE: com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public static ALL: com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public static valueOf(param0: string): com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public static values(): native.Array<com.liveperson.infra.LPConversationsHistoryStateToDisplay>;
			}
		}
	}
}

/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class LivePersonConfiguration {
				public constructor(param0: javautilHashMap);
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.liveperson.infra.LocalBroadcastReceiver.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class LocalBroadcastReceiver {
				public unregister(): void;
				public register(): void;
				public isRegistered(): boolean;
			}
			export module LocalBroadcastReceiver {
				export class Builder {
					public constructor();
					public addAction(param0: string): com.liveperson.infra.LocalBroadcastReceiver.Builder;
					public setSingleCallback(): com.liveperson.infra.LocalBroadcastReceiver.Builder;
					public build(param0: com.liveperson.infra.LocalBroadcastReceiver.IOnReceive): com.liveperson.infra.LocalBroadcastReceiver;
				}
				export class IOnReceive {
					/**
					 * Constructs a new instance of the com.liveperson.infra.LocalBroadcastReceiver$IOnReceive interface with the provided implementation.
					 */
					public constructor(implementation: {
						onBroadcastReceived(param0: androidcontentContext, param1: androidcontentIntent): void;
					});
					public onBroadcastReceived(param0: androidcontentContext, param1: androidcontentIntent): void;
				}
				export class LPBroadcastReceiver {
					public register(): void;
					public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
					public unregister(): void;
					public constructor(param0: com.liveperson.infra.LocalBroadcastReceiver);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export class MonitoringInitParams {
				public getAppInstallId(): string;
				public setAppInstallId(param0: string): void;
				public constructor(param0: string);
			}
		}
	}
}

import javalangException = java.lang.Exception;
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module callbacks {
				export class InitLivePersonCallBack {
					/**
					 * Constructs a new instance of the com.liveperson.infra.callbacks.InitLivePersonCallBack interface with the provided implementation.
					 */
					public constructor(implementation: {
						onInitSucceed(): void;
						onInitFailed(param0: javalangException): void;
					});
					public onInitFailed(param0: javalangException): void;
					public onInitSucceed(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module callbacks {
				export class LogoutLivePersonCallBack {
					/**
					 * Constructs a new instance of the com.liveperson.infra.callbacks.LogoutLivePersonCallBack interface with the provided implementation.
					 */
					public constructor(implementation: {
						onLogoutSucceed(): void;
						onLogoutFailed(param0: javalangException): void;
					});
					public onLogoutFailed(param0: javalangException): void;
					public onLogoutSucceed(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module callbacks {
				export class ShutDownLivePersonCallBack {
					/**
					 * Constructs a new instance of the com.liveperson.infra.callbacks.ShutDownLivePersonCallBack interface with the provided implementation.
					 */
					public constructor(implementation: {
						onShutDownSucceed(): void;
						onShutDownFailed(param0: javalangException): void;
					});
					public onShutDownFailed(param0: javalangException): void;
					public onShutDownSucceed(): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module configuration {
				export class ConfigurableResource {
					public getResourceName(): string;
					public toString(): string;
					public getResourceType(): com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
					public getResourceId(): number;
					public constructor(param0: number, param1: string, param2: com.liveperson.infra.configuration.ConfigurableResource.ResourceType);
				}
				export module ConfigurableResource {
					export class ResourceType {
						public static Unknown: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static Integer: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static Color: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static Boolean: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static Dimension: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static valueOf(param0: string): com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static values(): native.Array<com.liveperson.infra.configuration.ConfigurableResource.ResourceType>;
					}
				}
			}
		}
	}
}

import androidgraphicsdrawableDrawable = android.graphics.drawable.Drawable;
import javalangClass = java.lang.Class;
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module configuration {
				export class Configuration {
					public static scanXmlIdsAndNames(param0: javalangClass): javautilHashMap;
					public static getBoolean(param0: number): boolean;
					public static getString(param0: number): string;
					public static set(param0: number, param1: number): void;
					public static getDimension(param0: number): number;
					public constructor();
					public static getInteger(param0: number): number;
					public static getDrawable(param0: number): androidgraphicsdrawableDrawable;
					public static set(param0: number, param1: string): void;
					public static set(param0: number, param1: boolean): void;
					public static reset(param0: number): void;
					public static getColor(param0: number): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module configuration {
				export class LptagEnvironment {
					public static LPTAG_PRODUCTION_DOMAIN: string;
					public static LPTAG_ALPHA_DOMAIN: string;
					public static LPTAG_QA_DOMAIN: string;
					public setEnvironment(param0: com.liveperson.infra.configuration.LptagEnvironment.Env): void;
					public constructor();
					public getEnvironment(): com.liveperson.infra.configuration.LptagEnvironment.Env;
					public getLptagDomain(): string;
				}
				export module LptagEnvironment {
					export class Env {
						public static PRODUCTION: com.liveperson.infra.configuration.LptagEnvironment.Env;
						public static ALPHA: com.liveperson.infra.configuration.LptagEnvironment.Env;
						public static QA: com.liveperson.infra.configuration.LptagEnvironment.Env;
						public static valueOf(param0: string): com.liveperson.infra.configuration.LptagEnvironment.Env;
						public static values(): native.Array<com.liveperson.infra.configuration.LptagEnvironment.Env>;
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
			export module controller {
				export class AudioPlayable {
					/**
					 * Constructs a new instance of the com.liveperson.infra.controller.AudioPlayable interface with the provided implementation.
					 */
					public constructor(implementation: {
						playVoiceMessage(param0: string): void;
						stopPlaying(): void;
					});
					public stopPlaying(): void;
					public playVoiceMessage(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module controller {
				export class AudioRecordable {
					/**
					 * Constructs a new instance of the com.liveperson.infra.controller.AudioRecordable interface with the provided implementation.
					 */
					public constructor(implementation: {
						cancelRecording(): void;
					});
					public cancelRecording(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.utils.EncryptionVersion.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module controller {
				export class DBEncryptionHelper {
					public constructor();
					public static decrypt(param0: com.liveperson.infra.utils.EncryptionVersion, param1: string): string;
					public static encrypt(param0: com.liveperson.infra.utils.EncryptionVersion, param1: string): string;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.infra.utils.EncryptionVersion.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module controller {
				export class DBEncryptionKeyHelper {
					public constructor(param0: string);
					public clear(): void;
					public static getAppEncryptionVersion(param0: androidcontentContext): com.liveperson.infra.utils.EncryptionVersion;
				}
			}
		}
	}
}

import javautilSet = java.util.Set;
/// <reference path="./com.liveperson.infra.controller.AudioPlayable.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module controller {
				export class PlayingAudioManager {
					public stopAllCurrentlyPlaying(): void;
					public toString(): string;
					public addPlayingAndStopOthers(param0: com.liveperson.infra.controller.AudioPlayable): void;
					public constructor();
					public stopPlaying(param0: com.liveperson.infra.controller.AudioPlayable): void;
					public removePlaying(param0: com.liveperson.infra.controller.AudioPlayable): void;
					public getMCurrentlyPlayingList(): javautilSet;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.database.DBUtilities.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export abstract class BaseDBRepository {
					public getDB(): com.liveperson.infra.database.DBUtilities;
					public constructor(param0: string);
				}
			}
		}
	}
}

import androidcontentContentValues = android.content.ContentValues;
import androiddatabaseCursor = android.database.Cursor;
/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export class DBUtilities {
					public static ROW_UPDATED: number;
					public query(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string): androiddatabaseCursor;
					public insertOrUpdate(param0: androidcontentContentValues, param1: androidcontentContentValues, param2: string, param3: native.Array<string>): number;
					public update(param0: androidcontentContentValues, param1: string, param2: native.Array<string>): number;
					public removeAll(param0: string, param1: native.Array<string>): number;
					public rawQuery(param0: string, param1: native.Array<javalangObject>): androiddatabaseCursor;
					public insertWithOnConflict(param0: androidcontentContentValues): number;
					public insert(param0: androidcontentContentValues): number;
					public replace(param0: androidcontentContentValues): number;
					public query(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string): androiddatabaseCursor;
					public runTransaction(param0: javautilList): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export class DataBaseCommand {
					public mPostQueryOnUI: com.liveperson.infra.database.DataBaseCommand.QueryCallback;
					public mPreQueryOnBackground: javalangRunnable;
					public mPostQueryOnBackground: com.liveperson.infra.database.DataBaseCommand.QueryCallback;
					public static create(param0: com.liveperson.infra.database.DataBaseCommand.QueryCommand): com.liveperson.infra.database.DataBaseCommand;
					public executeSynchronously(): javalangObject;
					public execute(): void;
					public setPostQueryOnUI(param0: com.liveperson.infra.database.DataBaseCommand.QueryCallback): com.liveperson.infra.database.DataBaseCommand;
					public setPreQueryOnBackground(param0: javalangRunnable): com.liveperson.infra.database.DataBaseCommand;
					public setPostQueryOnBackground(param0: com.liveperson.infra.database.DataBaseCommand.QueryCallback): com.liveperson.infra.database.DataBaseCommand;
					public constructor(param0: com.liveperson.infra.database.DataBaseCommand.QueryCommand);
				}
				export module DataBaseCommand {
					export class QueryCallback {
						/**
						 * Constructs a new instance of the com.liveperson.infra.database.DataBaseCommand$QueryCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onResult(param0: javalangObject): void;
						});
						public onResult(param0: javalangObject): void;
					}
					export class QueryCommand {
						/**
						 * Constructs a new instance of the com.liveperson.infra.database.DataBaseCommand$QueryCommand interface with the provided implementation.
						 */
						public constructor(implementation: {
							query(): javalangObject;
						});
						public query(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export class DataBaseExecutor {
					public static execute(param0: javalangRunnable): void;
					public static killAll(param0: com.liveperson.infra.ICallback): void;
					public constructor();
				}
			}
		}
	}
}

import androiddatabasesqliteSQLiteDatabase = android.database.sqlite.SQLiteDatabase;
/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.liveperson.infra.database.tables.BaseTable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export class DatabaseManager {
					public static getInstance(): com.liveperson.infra.database.DatabaseManager;
					public shutDown(): void;
					public clear(): void;
					public registerTable(param0: com.liveperson.infra.database.tables.BaseTable): void;
				}
				export module DatabaseManager {
					export class DatabaseHelper {
						public onUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public onCreate(param0: androiddatabasesqliteSQLiteDatabase): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class BaseTable {
						/**
						 * Constructs a new instance of the com.liveperson.infra.database.tables.BaseTable interface with the provided implementation.
						 */
						public constructor(implementation: {
							getCreateCommand(): string;
							onTableUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
							getName(): string;
						});
						public static KEY_ID: string;
						public onTableUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public getCreateCommand(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class BrandProfileTable {
						public static BRAND_TABLE: string;
						public static KEY_BIO: string;
						public static KEY_BRAND_ID: string;
						public static KEY_SKILL: string;
						public static KEY_COVER_IMAGE: string;
						public static KEY_NAME: string;
						public static KEY_LOGO_IMAGE: string;
						public static KEY_IS_SAVED: string;
						public onTableUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.liveperson.infra.database.tables.ConversationsTable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class ConversationsTable {
						public static TABLE_NAME: string;
						public onTableUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public getName(): string;
					}
					export module ConversationsTable {
						export class Key {
							public static BRAND_ID: string;
							public static TARGET_ID: string;
							public static START_TIMESTAMP: string;
							public static END_TIMESTAMP: string;
							public static STATE: string;
							public static CLOSE_REASON: string;
							public static UNREAD_MESSAGES_COUNT: string;
							public static REQUEST_ID: string;
							public static CSAT_STATUS: string;
							public static TTR_TYPE: string;
							public static CONVERSATION_ID: string;
							public static CONCURRENT_REQUESTS_COUNTER: string;
							public constructor(param0: com.liveperson.infra.database.tables.ConversationsTable);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./com.liveperson.infra.database.tables.DialogsTable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class DialogsTable {
						public static TABLE_NAME: string;
						public onTableUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public getName(): string;
					}
					export module DialogsTable {
						export class Key {
							public static CONVERSATION_ID: string;
							public static DIALOG_ID: string;
							public static DIALOG_TYPE: string;
							public static CHANNEL_TYPE: string;
							public static BRAND_ID: string;
							public static TARGET_ID: string;
							public static UNREAD_MESSAGES_COUNT: string;
							public static CLOSE_REASON: string;
							public static START_TIMESTAMP: string;
							public static END_TIMESTAMP: string;
							public static CSAT_STATUS: string;
							public static TTR_TYPE: string;
							public static ASSIGNED_AGENT_ID: string;
							public static LAST_SERVER_SEQUENCE: string;
							public static REQUEST_ID: string;
							public static STATE: string;
							public static CONCURRENT_REQUESTS_COUNTER: string;
							public constructor(param0: com.liveperson.infra.database.tables.DialogsTable);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class FilesTable {
						public static FILES_TABLE: string;
						public static KEY_ID_AS_VALUE: string;
						public static KEY_PREVIEW: string;
						public static KEY_SWIFT_PATH: string;
						public static KEY_FILE_TYPE: string;
						public static KEY_LOCAL_URL: string;
						public static KEY_LOAD_STATUS: string;
						public static KEY_RELATED_MESSAGE_ROW_ID: string;
						public static KEY_LOCAL_URL_UPDATE_TIMESTAMP: string;
						public onTableUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public static getProjection(): native.Array<string>;
						public getName(): string;
					}
					export module FilesTable {
						export class LoadStatus {
							public static NOT_STARTED: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
							public static PROCESSING: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
							public static REQUESTING_URL: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
							public static UPLOADING: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
							public static DOWNLOADING: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
							public static COMPLETED: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
							public static FAILED: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
							public static PREVIEW_ERROR: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
							public static values(): native.Array<com.liveperson.infra.database.tables.FilesTable.LoadStatus>;
							public static valueOf(param0: string): com.liveperson.infra.database.tables.FilesTable.LoadStatus;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class MessagesTable {
						public static MESSAGES_TABLE: string;
						public static KEY_SERVER_SEQUENCE: string;
						public static KEY_TEXT: string;
						public static KEY_CONTENT_TYPE: string;
						public static KEY_STATUS: string;
						public static KEY_DIALOG_ID: string;
						public static KEY_MESSAGE_TYPE: string;
						public static KEY_TIMESTAMP: string;
						public static KEY_ORIGINATOR_ID: string;
						public static KEY_EVENT_ID: string;
						public static KEY_ENCRYPTION_VERSION: string;
						public static ENCRYPTION_VERSION_CURSOR_AS_VALUE: string;
						public onTableUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public static getProjection(): native.Array<string>;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.database.sqlite.SQLiteDatabase.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class UsersTable {
						public static USERS_TABLE: string;
						public static KEY_DESCRIPTION: string;
						public static KEY_FIRST_NAME: string;
						public static KEY_LAST_NAME: string;
						public static KEY_NICKNAME: string;
						public static KEY_PHONE_NUMBER: string;
						public static KEY_USER_TYPE: string;
						public static KEY_ORIGINATOR_ID: string;
						public static KEY_BRAND_ID: string;
						public static KEY_EMAIL: string;
						public static KEY_PROFILE_IMAGE: string;
						public static KEY_COVER_IMAGE: string;
						public static KEY_REQUEST_ID: string;
						public static KEY_ENCRYPTION_VERSION: string;
						public static ENCRYPTION_VERSION_CURSOR_AS_VALUE: string;
						public onTableUpgrade(param0: androiddatabasesqliteSQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public static getProjection(): native.Array<string>;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module transaction_helper {
					export class InsertOrUpdateSQLCommand extends com.liveperson.infra.database.transaction_helper.UpdateSQLCommand {
						public getContentValuesForInsert(): androidcontentContentValues;
						public constructor(param0: androidcontentContentValues, param1: string, param2: native.Array<string>);
						public getType(): number;
						public constructor(param0: androidcontentContentValues, param1: androidcontentContentValues, param2: string, param3: native.Array<string>);
						public constructor(param0: androidcontentContentValues);
						public getContentValuesForUpdate(): androidcontentContentValues;
						public onInserted(param0: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentValues.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module transaction_helper {
					export class InsertSQLCommand extends com.liveperson.infra.database.transaction_helper.SQLiteCommand {
						public getType(): number;
						public constructor(param0: androidcontentContentValues);
						public onInserted(param0: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentValues.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module transaction_helper {
					export abstract class SQLiteCommand {
						public mListener: com.liveperson.infra.database.transaction_helper.SQLiteCommand.SQLiteCommandListener;
						public setListener(param0: com.liveperson.infra.database.transaction_helper.SQLiteCommand.SQLiteCommandListener): void;
						public getType(): number;
						public getContentValues(): androidcontentContentValues;
						public constructor(param0: androidcontentContentValues);
						public onInserted(param0: number): void;
					}
					export module SQLiteCommand {
						export class CommandType {
							/**
							 * Constructs a new instance of the com.liveperson.infra.database.transaction_helper.SQLiteCommand$CommandType interface with the provided implementation.
							 */
							public constructor(implementation: {
							});
							public static INSERT: number;
							public static UPDATE: number;
							public static INSERT_OR_UPDATE: number;
						}
						export class SQLiteCommandListener {
							/**
							 * Constructs a new instance of the com.liveperson.infra.database.transaction_helper.SQLiteCommand$SQLiteCommandListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onInsertComplete(param0: number): void;
							});
							public onInsertComplete(param0: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module transaction_helper {
					export class UpdateSQLCommand extends com.liveperson.infra.database.transaction_helper.SQLiteCommand {
						public getUpdateWhereArgs(): native.Array<string>;
						public constructor(param0: androidcontentContentValues, param1: string, param2: native.Array<string>);
						public getType(): number;
						public constructor(param0: androidcontentContentValues);
						public getUpdateWhereClause(): string;
					}
				}
			}
		}
	}
}

import androidappPendingIntent = android.app.PendingIntent;
import androidappNotificationBuilder = android.app.Notification.Builder;
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module handler {
				export class NotificationHandler {
					public setIconResourceId(param0: number): com.liveperson.infra.handler.NotificationHandler;
					public setNotificationDefaults(param0: number): com.liveperson.infra.handler.NotificationHandler;
					public constructor(param0: androidcontentContext, param1: string);
					public createForegroundServiceNotificationBuilder(): androidappNotificationBuilder;
					public constructor(param0: string, param1: androidcontentContext, param2: javalangClass, param3: string, param4: string);
					public setAutoCancel(param0: boolean): com.liveperson.infra.handler.NotificationHandler;
					public constructor(param0: string, param1: androidcontentContext, param2: javalangClass);
					public showNotification(): void;
					public static hideNotification(param0: androidcontentContext, param1: string): void;
					public setPendingIntent(param0: androidappPendingIntent): com.liveperson.infra.handler.NotificationHandler;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export class DefaultAndroidLogger {
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public w(param0: string, param1: string, param2: javalangThrowable): void;
					public constructor();
					public e(param0: string, param1: string, param2: javalangThrowable): void;
					public i(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export class ILogger {
					/**
					 * Constructs a new instance of the com.liveperson.infra.log.ILogger interface with the provided implementation.
					 */
					public constructor(implementation: {
						d(param0: string, param1: string): void;
						d(param0: string, param1: string, param2: javalangThrowable): void;
						i(param0: string, param1: string): void;
						e(param0: string, param1: string): void;
						e(param0: string, param1: string, param2: javalangThrowable): void;
						w(param0: string, param1: string): void;
						w(param0: string, param1: string, param2: javalangThrowable): void;
					});
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public w(param0: string, param1: string, param2: javalangThrowable): void;
					public e(param0: string, param1: string, param2: javalangThrowable): void;
					public i(param0: string, param1: string): void;
					public d(param0: string, param1: string, param2: javalangThrowable): void;
					public w(param0: string, param1: string): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.log.ILogger.d.ts" />
/// <reference path="./com.liveperson.infra.log.LPMobileLog.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export class LPMobileLog {
					public static LOGGOS_CONTEXT: string;
					public static INFO: string;
					public static WARNING: string;
					public static ERROR: string;
					public static e(param0: string, param1: string, param2: javalangThrowable): void;
					public static i(param0: string, param1: string): void;
					public static d(param0: string, param1: string, param2: string): void;
					public static e(param0: string, param1: string): void;
					public static e(param0: string, param1: string, param2: string): void;
					public static setDebugMode(param0: boolean): void;
					public static setLogger(param0: com.liveperson.infra.log.ILogger): void;
					public constructor();
					public static e(param0: string, param1: javalangThrowable): void;
					public static d(param0: string, param1: string): void;
					public static i(param0: string, param1: string, param2: string): void;
					public static w(param0: string, param1: string): void;
					public static w(param0: string, param1: javalangThrowable): void;
				}
				export module LPMobileLog {
					export class FlowTags {
						public static DIALOGS: string;
						public static LOGIN: string;
						public static DECRYPTION: string;
						public constructor(param0: com.liveperson.infra.log.LPMobileLog);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.log.logreporter.loggos.LoggosMessage.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export module logreporter {
					export module loggos {
						export class Loggos {
							public static TAG: string;
							public static PREFS_KEY_LOGGOS_DOMAIN: string;
							public static PREFS_KEY_LOGGOS_TARGETID: string;
							public static CERTIFICATE_ERROR_ACTION: string;
							public constructor();
							public sendMessageImmediately(param0: com.liveperson.infra.log.logreporter.loggos.LoggosMessage): void;
							public onError(param0: javautilList, param1: javalangThrowable): void;
							public onSuccess(): void;
							public shutdown(): void;
							public addMessage(param0: com.liveperson.infra.log.logreporter.loggos.LoggosMessage): void;
							public getTargetId(): string;
							public setTargetId(param0: string): void;
							public onError(param0: javautilList, param1: javalangException): void;
							public isShouldSendError(): boolean;
							public getDomain(): string;
							public setDomain(param0: string): void;
							public init(param0: string, param1: string, param2: javautilList): void;
						}
					}
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export module logreporter {
					export module loggos {
						export class LoggosMessage {
							public static TAG: string;
							public static LOG_LEVEL: string;
							public static CONTEXT: string;
							public static MESSAGE: string;
							public static NAMESPACE: string;
							public static ACCOUNT_ID: string;
							public static URL: string;
							public static TIME: string;
							public static DATE_FORMAT: string;
							public toJsonObject(): orgjsonJSONObject;
							public constructor(param0: orgjsonJSONObject);
							public setAccountId(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setTime(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setTime(param0: number): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public getLevel(): string;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
							public setUrl(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setLogContext(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setLevel(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public constructor(param0: string, param1: string, param2: string, param3: string);
							public setMessage(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public getUrl(): string;
							public getTime(): string;
							public getLogContext(): string;
							public getMessage(): string;
							public setNamespace(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public getAccountId(): string;
							public getNamespace(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export module logreporter {
					export module loggos {
						export module logsender {
							export class HttpLogSender extends com.liveperson.infra.log.logreporter.loggos.logsender.LogSender {
								public static TAG: string;
								public constructor();
								public sendBulk(param0: string, param1: javautilList, param2: javautilList): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export module logreporter {
					export module loggos {
						export module logsender {
							export abstract class LogSender {
								public mCallback: com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback;
								public setCallback(param0: com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback): void;
								public constructor();
								public sendBulk(param0: string, param1: javautilList, param2: javautilList): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export module logreporter {
					export module loggos {
						export module logsender {
							export class LogSenderCallback {
								/**
								 * Constructs a new instance of the com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback interface with the provided implementation.
								 */
								public constructor(implementation: {
									onSuccess(): void;
									onError(param0: javautilList, param1: javalangThrowable): void;
								});
								public onSuccess(): void;
								public onError(param0: javautilList, param1: javalangThrowable): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Set.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module managers {
				export class PreferenceManager {
					public static APP_LEVEL_PREFERENCES: string;
					public static KILL_SWITCH_PHOTO_SHARING_ENABLED_PREFERENCE_KEY: string;
					public static SITE_SETTINGS_PHOTO_SHARING_ENABLED_PREFERENCE_KEY: string;
					public static SITE_SETTINGS_VOICE_SHARING_ENABLED_PREFERENCE_KEY: string;
					public static CONFIGURATION_DATA_PUBLISH_DATE_PREFERENCE_KEY: string;
					public getLongValue(param0: string, param1: string, param2: number): number;
					public static getInstance(): com.liveperson.infra.managers.PreferenceManager;
					public contains(param0: string, param1: string): boolean;
					public getLongValue(param0: string, param1: string, param2: boolean): boolean;
					public setStringsSet(param0: string, param1: string, param2: javautilSet): void;
					public getStringSet(param0: string, param1: string, param2: javautilSet): javautilSet;
					public setBooleanValue(param0: string, param1: string, param2: boolean): void;
					public getBooleanValue(param0: string, param1: string, param2: boolean): boolean;
					public setIntValue(param0: string, param1: string, param2: number): void;
					public getStringValue(param0: string, param1: string, param2: string): string;
					public setStringValue(param0: string, param1: string, param2: string): void;
					public remove(param0: string, param1: string): void;
					public clearAll(): boolean;
					public setLongValue(param0: string, param1: string, param2: number): void;
					public getIntValue(param0: string, param1: string, param2: number): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export class LptagData {
					public getMaxRetries(): number;
					public setMaxRetries(param0: number): void;
					public constructor();
					public isAutoMessagesFeatureEnabled(): boolean;
					public setRetryTimeout(param0: number): void;
					public setAutoMessagesFeatureEnabled(param0: boolean): void;
					public getRetryTimeout(): number;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.utils.EncryptionVersion.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export class Message {
					public static EXTRA_MESSAGE_TEXT: string;
					public setServerSequence(param0: number): void;
					public getLocalId(): number;
					public setDialogId(param0: string): void;
					public getServerSequence(): number;
					public getContentType(): string;
					public getEventId(): string;
					public setMessageId(param0: number): void;
					public getTimeStamp(): number;
					public toString(): string;
					public getFullTimeString(): string;
					public constructor(param0: string, param1: string, param2: number, param3: string, param4: string, param5: com.liveperson.infra.utils.EncryptionVersion);
					public getDialogId(): string;
					public getMessage(): string;
					public getOriginatorId(): string;
					public setContentType(param0: string): void;
					public setEventId(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export class PushMessage {
					public setCollapseKey(param0: string): void;
					public setConversationId(param0: string): void;
					public getFrom(): string;
					public setCurrentUnreadMessgesCounter(param0: number): void;
					public getConversationId(): string;
					public setBackendService(param0: string): void;
					public toString(): string;
					public getBrandId(): string;
					public getCollapseKey(): string;
					public getMessage(): string;
					public getBackendService(): string;
					public getCurrentUnreadMessgesCounter(): number;
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export class SocketConnectionParams {
					public constructor(param0: string, param1: number, param2: javautilList);
					public constructor(param0: string);
					public getUrl(): string;
					public getTimeout(): number;
					public constructor(param0: string, param1: number);
					public getHeaders(): javautilHashMap;
					public addHeader(param0: string, param1: string): void;
					public getCertificatePinningKeys(): javautilList;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export module types {
					export class ChatState {
						public static ACTIVE: com.liveperson.infra.model.types.ChatState;
						public static COMPOSING: com.liveperson.infra.model.types.ChatState;
						public static GONE: com.liveperson.infra.model.types.ChatState;
						public static INACTIVE: com.liveperson.infra.model.types.ChatState;
						public static PAUSE: com.liveperson.infra.model.types.ChatState;
						public static BACKGROUND: com.liveperson.infra.model.types.ChatState;
						public static values(): native.Array<com.liveperson.infra.model.types.ChatState>;
						public static valueOf(param0: string): com.liveperson.infra.model.types.ChatState;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export class BackOff {
					/**
					 * Constructs a new instance of the com.liveperson.infra.network.BackOff interface with the provided implementation.
					 */
					public constructor(implementation: {
						reset(): void;
						getNextBackOffMillis(): number;
						calculateNextBackOffMillis(): void;
						getRetryNumber(): number;
						<clinit>(): void;
					});
					public static ZERO_BACKOFF: com.liveperson.infra.network.BackOff;
					public static ZERO: number;
					public static STOP: number;
					public static STOP_BACKOFF: com.liveperson.infra.network.BackOff;
					public reset(): void;
					public getRetryNumber(): number;
					public getNextBackOffMillis(): number;
					public calculateNextBackOffMillis(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.ExponentialBackOff.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export class ExponentialBackOff {
					public static DEFAULT_INITIAL_INTERVAL_MILLIS: number;
					public static DEFAULT_RANDOMIZATION_FACTOR: number;
					public static DEFAULT_MULTIPLIER: number;
					public static DEFAULT_MAX_INTERVAL_MILLIS: number;
					public static DEFAULT_MAX_ELAPSED_TIME_MILLIS: number;
					public reset(): void;
					public getRetryNumber(): number;
					public getNextBackOffMillis(): number;
					public calculateNextBackOffMillis(): void;
				}
				export module ExponentialBackOff {
					export class Builder {
						public constructor();
						public build(): com.liveperson.infra.network.ExponentialBackOff;
						public setInitialIntervalMillis(param0: number): com.liveperson.infra.network.ExponentialBackOff.Builder;
						public setMaxIntervalMillis(param0: number): com.liveperson.infra.network.ExponentialBackOff.Builder;
						public setMaxElapsedTimeMillis(param0: number): com.liveperson.infra.network.ExponentialBackOff.Builder;
						public setRandomizationFactor(param0: number): com.liveperson.infra.network.ExponentialBackOff.Builder;
						public setMultiplier(param0: number): com.liveperson.infra.network.ExponentialBackOff.Builder;
					}
				}
			}
		}
	}
}

import okhttp3Request = okhttp3.Request;
/// <reference path="./com.liveperson.infra.network.http.request.HttpRequest.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Request.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export class HttpHandler {
						public constructor();
						public static executeDelayed(param0: com.liveperson.infra.network.http.request.HttpRequest, param1: number): void;
						public static clearInterceptors(): void;
						public static addInterceptors(param0: javautilList): void;
						public static execute(param0: com.liveperson.infra.network.http.request.HttpRequest): void;
					}
					export module HttpHandler {
						export class HttpRequestBuilder {
							public static build(param0: com.liveperson.infra.network.http.request.HttpRequest): okhttp3Request;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module body {
						export abstract class HttpImageRequestBody {
							public constructor();
							public isString(): boolean;
							public get(): javalangObject;
							public get(): native.Array<number>;
							public getContentType(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module body {
						export class HttpRequestBody {
							/**
							 * Constructs a new instance of the com.liveperson.infra.network.http.body.HttpRequestBody interface with the provided implementation.
							 */
							public constructor(implementation: {
								get(): javalangObject;
								isString(): boolean;
								getContentType(): string;
							});
							public get(): javalangObject;
							public isString(): boolean;
							public getContentType(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module body {
						export abstract class HttpStringRequestBody {
							public constructor();
							public get(): string;
							public isString(): boolean;
							public get(): javalangObject;
							public getContentType(): string;
						}
					}
				}
			}
		}
	}
}

import orgjsonJSONArray = org.json.JSONArray;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module body {
						export class LPJSONArrayBody extends com.liveperson.infra.network.http.body.HttpStringRequestBody {
							public constructor();
							public get(): string;
							public constructor(param0: orgjsonJSONArray);
							public get(): javalangObject;
							public isString(): boolean;
							public getContentType(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module body {
						export class LPJSONObjectBody extends com.liveperson.infra.network.http.body.HttpStringRequestBody {
							public constructor();
							public get(): string;
							public constructor(param0: orgjsonJSONObject);
							public get(): javalangObject;
							public isString(): boolean;
							public getContentType(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module body {
						export class LPStringBody extends com.liveperson.infra.network.http.body.HttpStringRequestBody {
							public constructor();
							public get(): string;
							public constructor(param0: string);
							public get(): javalangObject;
							public isString(): boolean;
							public getContentType(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.http.body.HttpRequestBody.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export class HttpGetRequest extends com.liveperson.infra.network.http.request.HttpRequest {
							public static METHOD: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
							public constructor(param0: string, param1: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod);
							public setBody(param0: com.liveperson.infra.network.http.body.HttpRequestBody): void;
							public constructor(param0: string);
							public getRequestBody(): com.liveperson.infra.network.http.body.HttpRequestBody;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.http.body.HttpRequestBody.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export class HttpHeadRequest extends com.liveperson.infra.network.http.request.HttpRequest {
							public static METHOD: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
							public constructor(param0: string, param1: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod);
							public setBody(param0: com.liveperson.infra.network.http.body.HttpRequestBody): void;
							public constructor(param0: string);
							public getRequestBody(): com.liveperson.infra.network.http.body.HttpRequestBody;
						}
					}
				}
			}
		}
	}
}

import okhttp3Response = okhttp3.Response;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export class HttpOpenStreamRequest extends com.liveperson.infra.network.http.request.HttpGetRequest {
							public constructor(param0: string, param1: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod);
							public constructor(param0: string);
							public reportSuccess(param0: okhttp3Response): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.http.body.HttpRequestBody.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export class HttpPostRequest extends com.liveperson.infra.network.http.request.HttpRequest {
							public static METHOD: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
							public constructor(param0: string, param1: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod);
							public setBody(param0: com.liveperson.infra.network.http.body.HttpRequestBody): void;
							public constructor(param0: string);
							public getRequestBody(): com.liveperson.infra.network.http.body.HttpRequestBody;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.http.body.HttpRequestBody.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export class HttpPutRequest extends com.liveperson.infra.network.http.request.HttpRequest {
							public static METHOD: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
							public constructor(param0: string, param1: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod);
							public setBody(param0: com.liveperson.infra.network.http.body.HttpRequestBody): void;
							public constructor(param0: string);
							public getRequestBody(): com.liveperson.infra.network.http.body.HttpRequestBody;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.network.http.body.HttpRequestBody.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export abstract class HttpRequest {
							public mRequestBody: com.liveperson.infra.network.http.body.HttpRequestBody;
							public mCallback: com.liveperson.infra.ICallback;
							public processErrorResponse(param0: javalangException): void;
							public getTimeout(): number;
							public constructor(param0: string, param1: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod);
							public addHeader(param0: string, param1: string): void;
							public getRequestBody(): com.liveperson.infra.network.http.body.HttpRequestBody;
							public setFollowRedirect(param0: boolean): void;
							public getHeaders(): javautilList;
							public getCertificatePinningKeys(): javautilList;
							public getCallback(): com.liveperson.infra.ICallback;
							public getMethod(): com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
							public setBody(param0: com.liveperson.infra.network.http.body.HttpRequestBody): void;
							public processResponse(param0: okhttp3Response): void;
							public getUrl(): string;
							public setCallback(param0: com.liveperson.infra.ICallback): void;
							public setTimeout(param0: number): void;
							public reportSuccess(param0: okhttp3Response): void;
							public setUrl(param0: string): void;
							public getFollowRedirect(): boolean;
							public setCertificatePinningKeys(param0: javautilList): void;
							public isResponseSuccessful(param0: okhttp3Response): boolean;
						}
						export module HttpRequest {
							export class HttpMethod {
								public static GET: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
								public static HEAD: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
								public static POST: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
								public static PUT: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
								public static values(): native.Array<com.liveperson.infra.network.http.request.HttpRequest.HttpMethod>;
								public static valueOf(param0: string): com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module requests {
						export class BadgeCounterRequest {
							public execute(): void;
							public constructor(param0: string, param1: javautilList, param2: com.liveperson.infra.ICallback);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module requests {
						export class CSDSRequest {
							public execute(): void;
							public constructor(param0: string, param1: string, param2: javautilList, param3: com.liveperson.infra.ICallback);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module requests {
						export class ConfigurationRequest {
							public static TAG: string;
							public execute(): void;
							public constructor(param0: string, param1: javautilList, param2: com.liveperson.infra.ICallback);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module requests {
						export class LptagRequest {
							public static JSON_KEY_FEATURES: string;
							public static JSON_KEY_RETRY: string;
							public static JSON_KEY_RETRY_TIMEOUT: string;
							public static JSON_KEY_MAX_RETRIES: string;
							public static JSON_KEY_MESSAGING_AUTO_MESSAGES: string;
							public execute(): void;
							public constructor(param0: string, param1: string, param2: javautilList, param3: com.liveperson.infra.ICallback);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module requests {
						export class PushRequest {
							public static TAG: string;
							public static KEY_APP_ID: string;
							public static KEY_USER_ID: string;
							public static KEY_PLATFORM: string;
							public static KEY_REGISTRATION_ID: string;
							public static KEY_DEVICE_ID: string;
							public static KEY_TOKEN_ID: string;
							public mDeviceId: string;
							public mGcmRegistrationId: string;
							public mAppId: string;
							public mTokenId: string;
							public mUserId: string;
							public mPlatform: string;
							public mPusherURL: string;
							public mCertificates: javautilList;
							public mCallback: com.liveperson.infra.ICallback;
							public setCallback(param0: com.liveperson.infra.ICallback): com.liveperson.infra.network.http.requests.PushRequest;
							public handleError(param0: javalangException): void;
							public handleResponse(param0: string): void;
							public execute(): void;
							public getBody(): orgjsonJSONObject;
							public setAppId(param0: string): com.liveperson.infra.network.http.requests.PushRequest;
							public setPlatform(param0: string): com.liveperson.infra.network.http.requests.PushRequest;
							public setDeviceId(param0: string): com.liveperson.infra.network.http.requests.PushRequest;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: javautilList);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module requests {
						export class SiteSettingsRequest {
							public static TAG: string;
							public execute(): void;
							public constructor(param0: string, param1: string, param2: javautilList, param3: com.liveperson.infra.ICallback);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module requests {
						export class UnregisterPushRequest extends com.liveperson.infra.network.http.requests.PushRequest {
							public static TAG: string;
							public constructor(param0: string, param1: string, param2: string, param3: javautilList);
							public handleError(param0: javalangException): void;
							public handleResponse(param0: string): void;
							public getBody(): orgjsonJSONObject;
							public execute(): void;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: javautilList);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseSocketRequest.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export abstract class BaseResponseHandler {
						public handle(param0: javalangObject): boolean;
						public constructor();
						public getAPIResponseType(): string;
						public getSupportedResponseHandler(param0: string): com.liveperson.infra.network.socket.BaseResponseHandler;
						public giveUp(): void;
						public parse(param0: orgjsonJSONObject): javalangObject;
						public onParsingError(): void;
						public getResponseByExpectedType(param0: string): com.liveperson.infra.network.socket.BaseResponseHandler;
						public getRequest(): com.liveperson.infra.network.socket.BaseSocketRequest;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.ResponseCallback.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export abstract class BaseSocketRequest {
						public constructor();
						public setRequestId(param0: number): com.liveperson.infra.network.socket.BaseSocketRequest;
						public addCallback(param0: com.liveperson.infra.network.socket.ResponseCallback): com.liveperson.infra.network.socket.BaseSocketRequest;
						public getSocketUrl(): string;
						public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
						public removeCallback(param0: com.liveperson.infra.network.socket.ResponseCallback): com.liveperson.infra.network.socket.BaseSocketRequest;
						public constructor(param0: number);
						public getRequestName(): string;
						public static createRequestId(): number;
						public getRequestId(): number;
						public getData(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export abstract class GeneralResponseHandler {
						public createInstance(param0: string): com.liveperson.infra.network.socket.BaseResponseHandler;
						public constructor();
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.SocketState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class ISocketCallbacks {
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.ISocketCallbacks interface with the provided implementation.
						 */
						public constructor(implementation: {
							onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
							onMessage(param0: string): void;
							onDisconnected(param0: string, param1: number): void;
						});
						public onMessage(param0: string): void;
						public onDisconnected(param0: string, param1: number): void;
						public onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.model.SocketConnectionParams.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class ISocketWrapper {
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.ISocketWrapper interface with the provided implementation.
						 */
						public constructor(implementation: {
							connect(param0: com.liveperson.infra.model.SocketConnectionParams): void;
							disconnect(): void;
							send(param0: string): void;
						});
						public disconnect(): void;
						public connect(param0: com.liveperson.infra.model.SocketConnectionParams): void;
						public send(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class IdleQueueHandler {
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.IdleQueueHandler interface with the provided implementation.
						 */
						public constructor(implementation: {
							queueIdle(): void;
						});
						public queueIdle(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class ResponseCallback {
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.ResponseCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSuccess(param0: javalangObject): void;
							onError(): void;
						});
						public onError(): void;
						public onSuccess(param0: javalangObject): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.GeneralResponseHandler.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class ResponseMap {
						public static RESPONSE_TAG: string;
						public putGeneralHandler(param0: string, param1: javalangClass): void;
						public constructor();
						public onSocketClosed(): void;
						public onRequestHandled(param0: number): void;
						public putGeneralHandler(param0: com.liveperson.infra.network.socket.GeneralResponseHandler): void;
						public shutDown(): void;
						public putRequestIdHandler(param0: number, param1: com.liveperson.infra.network.socket.BaseResponseHandler): void;
						public getRequestIdHandler(param0: string, param1: number): com.liveperson.infra.network.socket.BaseResponseHandler;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class SocketErrorCallback {
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.SocketErrorCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onFatalError(): void;
							onParsingError(): void;
						});
						public onFatalError(): void;
						public onParsingError(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.ResponseMap.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.SocketHandler.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.SocketState.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class SocketHandler {
						public static PERIODIC_PING_TIME: number;
						public static CERTIFICATE_ERROR: number;
						public onMessage(param0: string): void;
						public constructor(param0: com.liveperson.infra.network.socket.ResponseMap);
						public sendDelayed(param0: string, param1: number): javalangRunnable;
						public onDisconnected(param0: string, param1: number): void;
						public onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
						public send(param0: string): void;
						public dispose(): void;
					}
					export module SocketHandler {
						export class SendMessageRunnable {
							public constructor(param0: com.liveperson.infra.network.socket.SocketHandler, param1: string);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.model.SocketConnectionParams.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseSocketRequest.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.GeneralResponseHandler.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.SocketState.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.state.SocketStateListener.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class SocketManager {
						public static getInstance(): com.liveperson.infra.network.socket.SocketManager;
						public cancelDelayedRequest(param0: com.liveperson.infra.network.socket.BaseSocketRequest, param1: javalangRunnable): void;
						public getSocketState(param0: string): com.liveperson.infra.network.socket.SocketState;
						public send(param0: com.liveperson.infra.network.socket.BaseSocketRequest, param1: number): javalangRunnable;
						public send(param0: com.liveperson.infra.network.socket.BaseSocketRequest): void;
						public connect(param0: string, param1: number): void;
						public putGeneralHandlerMap(param0: com.liveperson.infra.network.socket.GeneralResponseHandler): void;
						public connect(param0: com.liveperson.infra.model.SocketConnectionParams): void;
						public shutDown(): void;
						public killSocket(param0: string): void;
						public unregisterFromSocketState(param0: string, param1: com.liveperson.infra.network.socket.state.SocketStateListener): void;
						public registerToSocketState(param0: string, param1: com.liveperson.infra.network.socket.state.SocketStateListener): void;
						public disconnect(param0: string): void;
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
			export module network {
				export module socket {
					export class SocketState {
						public static INIT: com.liveperson.infra.network.socket.SocketState;
						public static CONNECTING: com.liveperson.infra.network.socket.SocketState;
						public static OPEN: com.liveperson.infra.network.socket.SocketState;
						public static CLOSING: com.liveperson.infra.network.socket.SocketState;
						public static CLOSED: com.liveperson.infra.network.socket.SocketState;
						public static ERROR: com.liveperson.infra.network.socket.SocketState;
						public static valueOf(param0: string): com.liveperson.infra.network.socket.SocketState;
						public static values(): native.Array<com.liveperson.infra.network.socket.SocketState>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.SocketState.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.state.SocketStateListener.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class SocketStateManager {
						public constructor();
						public register(param0: com.liveperson.infra.network.socket.state.SocketStateListener): void;
						public getState(): com.liveperson.infra.network.socket.SocketState;
						public unregister(param0: com.liveperson.infra.network.socket.state.SocketStateListener): void;
						public dispose(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseSocketRequest.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class SocketToRestCommand {
						public constructor();
						public getData(param0: com.liveperson.infra.network.socket.BaseSocketRequest): string;
					}
				}
			}
		}
	}
}

import okhttp3WebSocket = okhttp3.WebSocket;
import okioByteString = okio.ByteString;
/// <reference path="./com.liveperson.infra.model.SocketConnectionParams.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.ISocketCallbacks.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
/// <reference path="./okhttp3.Response.d.ts" />
/// <reference path="./okhttp3.WebSocket.d.ts" />
/// <reference path="./okio.ByteString.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class SocketWrapperOK {
						public disconnect(): void;
						public connect(param0: com.liveperson.infra.model.SocketConnectionParams): void;
						public constructor(param0: com.liveperson.infra.network.socket.ISocketCallbacks);
						public send(param0: string): void;
					}
					export module SocketWrapperOK {
						export class WebSocketCallbacks {
							public onClosing(param0: okhttp3WebSocket, param1: number, param2: string): void;
							public onFailure(param0: okhttp3WebSocket, param1: javalangThrowable, param2: okhttp3Response): void;
							public onMessage(param0: okhttp3WebSocket, param1: okioByteString): void;
							public onClosed(param0: okhttp3WebSocket, param1: number, param2: string): void;
							public onMessage(param0: okhttp3WebSocket, param1: string): void;
							public onOpen(param0: okhttp3WebSocket, param1: okhttp3Response): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.SocketState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export module state {
						export class SocketStateAdapter {
							public constructor();
							public onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
							public onDisconnected(param0: string, param1: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.SocketState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export module state {
						export class SocketStateListener {
							/**
							 * Constructs a new instance of the com.liveperson.infra.network.socket.state.SocketStateListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
								onDisconnected(param0: string, param1: number): void;
							});
							public onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
							public onDisconnected(param0: string, param1: number): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.sdkstatemachine.events.InitEvent.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.LogoutEvent.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.ShutDownEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export abstract class BaseInfraState {
					public TAG: string;
					public name: string;
					public constructor(param0: string, param1: string);
					public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownEvent): void;
					public toString(): string;
					public actionOnEntry(): void;
					public visit(param0: com.liveperson.infra.sdkstatemachine.events.InitEvent): void;
					public visit(param0: com.liveperson.infra.sdkstatemachine.events.LogoutEvent): void;
					public visit(param0: com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent): void;
					public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent): void;
					public actionOnExit(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.sdkstatemachine.InfraStateMachine.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.InitEvent.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.LogoutEvent.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.events.ShutDownEvent.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.InitProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.LogoutProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.ShutDownProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IEvent.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export class InfraStateMachine extends com.liveperson.infra.statemachine.BaseStateMachine {
					public setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
					public constructor(param0: string);
					public changeStateAndPassEvent(param0: com.liveperson.infra.statemachine.interfaces.IState, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public changeState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					public shutDownSDK(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
					public isSDKInitialized(): boolean;
					public getTag(): string;
					public apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public activeState(): com.liveperson.infra.statemachine.interfaces.IState;
					public shutDown(): void;
					public constructor();
					public initActiveState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					public initSDK(param0: com.liveperson.infra.statemachine.InitProcess): void;
					public logoutSDK(param0: com.liveperson.infra.statemachine.LogoutProcess): void;
					public postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): javalangRunnable;
				}
				export module InfraStateMachine {
					export class Idle extends com.liveperson.infra.sdkstatemachine.BaseInfraState {
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent): void;
						public actionOnExit(): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.InitEvent): void;
						public actionOnEntry(): void;
						public constructor(param0: com.liveperson.infra.sdkstatemachine.InfraStateMachine, param1: string, param2: string);
						public constructor(param0: string, param1: string);
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.LogoutEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownEvent): void;
					}
					export abstract class InProgressState extends com.liveperson.infra.sdkstatemachine.BaseInfraState {
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent): void;
						public actionOnExit(): void;
						public actionOnEntry(): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.InitEvent): void;
						public constructor(param0: com.liveperson.infra.sdkstatemachine.InfraStateMachine, param1: string, param2: string);
						public constructor(param0: string, param1: string);
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.LogoutEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownEvent): void;
					}
					export class Initialized extends com.liveperson.infra.sdkstatemachine.BaseInfraState {
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent): void;
						public actionOnExit(): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.InitEvent): void;
						public actionOnEntry(): void;
						public constructor(param0: com.liveperson.infra.sdkstatemachine.InfraStateMachine, param1: string, param2: string);
						public constructor(param0: string, param1: string);
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.LogoutEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownEvent): void;
					}
					export class Initializing extends com.liveperson.infra.sdkstatemachine.InfraStateMachine.InProgressState {
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent): void;
						public actionOnExit(): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.InitEvent): void;
						public actionOnEntry(): void;
						public constructor(param0: com.liveperson.infra.sdkstatemachine.InfraStateMachine, param1: string, param2: string);
						public constructor(param0: string, param1: string);
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.LogoutEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownEvent): void;
					}
					export class Logout extends com.liveperson.infra.sdkstatemachine.BaseInfraState {
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent): void;
						public actionOnExit(): void;
						public actionOnEntry(): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.InitEvent): void;
						public constructor(param0: com.liveperson.infra.sdkstatemachine.InfraStateMachine, param1: string, param2: string);
						public constructor(param0: string, param1: string);
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.LogoutEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownEvent): void;
					}
					export class ShuttingDown extends com.liveperson.infra.sdkstatemachine.InfraStateMachine.InProgressState {
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent): void;
						public actionOnExit(): void;
						public actionOnEntry(): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.InitEvent): void;
						public constructor(param0: com.liveperson.infra.sdkstatemachine.InfraStateMachine, param1: string, param2: string);
						public constructor(param0: string, param1: string);
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.LogoutEvent): void;
						public visit(param0: com.liveperson.infra.sdkstatemachine.events.ShutDownEvent): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.InitProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module events {
					export class InitEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public getInitProcess(): com.liveperson.infra.statemachine.InitProcess;
						public constructor(param0: string);
						public constructor(param0: com.liveperson.infra.statemachine.InitProcess);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.sdkstatemachine.events.InitEvent.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.LogoutProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module events {
					export class LogoutEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public constructor(param0: com.liveperson.infra.statemachine.LogoutProcess);
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public getInitEvent(): com.liveperson.infra.sdkstatemachine.events.InitEvent;
						public getLogoutProcess(): com.liveperson.infra.statemachine.LogoutProcess;
						public setSkipInit(param0: boolean): void;
						public skipInit(): boolean;
						public constructor(param0: string);
						public setInitAfterLogout(param0: com.liveperson.infra.sdkstatemachine.events.InitEvent): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module events {
					export class PreLogoutCompletedEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public constructor();
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module events {
					export class ShutDownCompletedEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public constructor();
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.ShutDownProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module events {
					export class ShutDownEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public getInitProcess(): com.liveperson.infra.statemachine.ShutDownProcess;
						public constructor(param0: com.liveperson.infra.statemachine.ShutDownProcess);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.Interceptors.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module init {
					export class InfraInitData {
						public constructor(param0: string, param1: com.liveperson.infra.Interceptors);
						public getSdkVersion(): string;
						public getInterceptors(): com.liveperson.infra.Interceptors;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.InitLivePersonProperties.d.ts" />
/// <reference path="./com.liveperson.infra.MonitoringInitParams.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.InitLivePersonCallBack.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module init {
					export class InitData extends com.liveperson.infra.InitLivePersonProperties {
						public getSdkVersion(): string;
						public constructor(param0: com.liveperson.infra.InitLivePersonProperties, param1: string);
						public constructor(param0: string, param1: string, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack);
						public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.infra.callbacks.InitLivePersonCallBack);
						public constructor(param0: string, param1: string, param2: com.liveperson.infra.MonitoringInitParams, param3: com.liveperson.infra.callbacks.InitLivePersonCallBack);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module logout {
					export class LogoutCompletionListener {
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.logout.LogoutCompletionListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							logoutCompleted(): void;
						});
						public logoutCompleted(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module logout {
					export class PreLogoutCompletionListener {
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.logout.PreLogoutCompletionListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							preLogoutCompleted(): void;
							preLogoutFailed(param0: javalangException): void;
						});
						public preLogoutFailed(param0: javalangException): void;
						public preLogoutCompleted(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module shutdown {
					export class ShutDown {
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.shutdown.ShutDown interface with the provided implementation.
						 */
						public constructor(implementation: {
							shutDown(): void;
						});
						public shutDown(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module shutdown {
					export class ShutDownAsync {
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.shutdown.ShutDownAsync interface with the provided implementation.
						 */
						public constructor(implementation: {
							shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
						});
						public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module shutdown {
					export class ShutDownCompletionListener {
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							shutDownCompleted(): void;
							shutDownFailed(): void;
						});
						public shutDownFailed(): void;
						public shutDownCompleted(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class BaseEvent {
					public toString(): string;
					public constructor(param0: string);
					public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class BaseState {
					public name: string;
					public parent: com.liveperson.infra.statemachine.BaseState;
					public toString(): string;
					public actionOnEntry(): void;
					public constructor(param0: com.liveperson.infra.statemachine.BaseState, param1: string, param2: string);
					public handleDefaultEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public actionOnExit(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IEvent.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class BaseStateMachine {
					public setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
					public constructor(param0: string);
					public changeStateAndPassEvent(param0: com.liveperson.infra.statemachine.interfaces.IState, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public changeState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					public cancelDelayedEvent(param0: javalangRunnable): void;
					public isInitialized(): boolean;
					public getTag(): string;
					public apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public activeState(): com.liveperson.infra.statemachine.interfaces.IState;
					public shutDown(): void;
					public initActiveState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					public postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): javalangRunnable;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.callbacks.InitLivePersonCallBack.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class InitProcess {
					public getInitCallback(): com.liveperson.infra.callbacks.InitLivePersonCallBack;
					public constructor();
					public init(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.callbacks.LogoutLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.logout.PreLogoutCompletionListener.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class LogoutProcess {
					public preLogout(param0: com.liveperson.infra.sdkstatemachine.logout.PreLogoutCompletionListener): void;
					public shutDownForLogout(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
					public constructor();
					public logout(): void;
					public initForLogout(): void;
					public getLogoutCallback(): com.liveperson.infra.callbacks.LogoutLivePersonCallBack;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.callbacks.ShutDownLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class ShutDownProcess {
					public getShutDownCallback(): com.liveperson.infra.callbacks.ShutDownLivePersonCallBack;
					public constructor();
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IEvent.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IStateMachine.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export class StateMachineExecutor {
					public cancel(param0: javalangRunnable): void;
					public shutdown(): void;
					public post(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public schedule(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): javalangRunnable;
					public isInitialized(): boolean;
					public constructor(param0: string, param1: com.liveperson.infra.statemachine.interfaces.IStateMachine);
				}
				export module StateMachineExecutor {
					export class RunnableWrapper {
						public run(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export module interfaces {
					export class IEvent {
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IEvent interface with the provided implementation.
						 */
						public constructor(implementation: {
							accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						});
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IEvent.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export module interfaces {
					export class IEventScheduler {
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IEventScheduler interface with the provided implementation.
						 */
						public constructor(implementation: {
							schedule(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): com.liveperson.infra.statemachine.interfaces.IEventScheduler.Cancelable;
							shutdown(): void;
						});
						public shutdown(): void;
						public schedule(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): com.liveperson.infra.statemachine.interfaces.IEventScheduler.Cancelable;
					}
					export module IEventScheduler {
						export class Cancelable {
							/**
							 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IEventScheduler$Cancelable interface with the provided implementation.
							 */
							public constructor(implementation: {
								cancel(): void;
							});
							public cancel(): void;
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
			export module statemachine {
				export module interfaces {
					export class IState {
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IState interface with the provided implementation.
						 */
						public constructor(implementation: {
							actionOnEntry(): void;
							actionOnExit(): void;
						});
						public actionOnExit(): void;
						public actionOnEntry(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IEvent.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export module interfaces {
					export class IStateMachine {
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IStateMachine interface with the provided implementation.
						 */
						public constructor(implementation: {
							activeState(): com.liveperson.infra.statemachine.interfaces.IState;
							apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
							postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
							postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): javalangRunnable;
							changeState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							changeStateAndPassEvent(param0: com.liveperson.infra.statemachine.interfaces.IState, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
							getTag(): string;
							initActiveState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
						});
						public setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
						public changeState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public changeStateAndPassEvent(param0: com.liveperson.infra.statemachine.interfaces.IState, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public getTag(): string;
						public postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): javalangRunnable;
						public initActiveState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public activeState(): com.liveperson.infra.statemachine.interfaces.IState;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export module interfaces {
					export class IStateMachineExecutor {
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor interface with the provided implementation.
						 */
						public constructor(implementation: {
							post(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
							schedule(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): javalangRunnable;
							cancel(param0: javalangRunnable): void;
							shutdown(): void;
							isInitialized(): boolean;
						});
						public shutdown(): void;
						public schedule(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): javalangRunnable;
						public cancel(param0: javalangRunnable): void;
						public post(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public isInitialized(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class AccessibilityChecker {
					public static exploreByTouchEnabled(param0: androidcontentContext): boolean;
					public constructor();
				}
			}
		}
	}
}

import androidgraphicsBitmap = android.graphics.Bitmap;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class BitmapLruCache {
					public static TAG: string;
					public getBitmapFromCache(param0: string): androidgraphicsBitmap;
					public constructor(param0: number);
					public addBitmapToCache(param0: string, param1: androidgraphicsBitmap): void;
				}
			}
		}
	}
}

import javautilCollection = java.util.Collection;
import javautilArrayList = java.util.ArrayList;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class CollectionsUtil {
					public constructor();
					public static filter(param0: javautilCollection, param1: com.liveperson.infra.utils.CollectionsUtil.Predicate): javautilArrayList;
				}
				export module CollectionsUtil {
					export class Predicate {
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.CollectionsUtil$Predicate interface with the provided implementation.
						 */
						public constructor(implementation: {
							test(param0: javalangObject): boolean;
						});
						public test(param0: javalangObject): boolean;
					}
				}
			}
		}
	}
}

import javatextDateFormat = java.text.DateFormat;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.text.DateFormat.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class DateUtils {
					public static getDateFormat(param0: string, param1: number, param2: number): javatextDateFormat;
					public static getFormattedDateAndTime(param0: string, param1: number, param2: number, param3: number, param4: string): string;
					public static isTomorrow(param0: number): boolean;
					public static isInTheLast24hours(param0: number): boolean;
					public static getBeginningOfDayTime(param0: number): number;
					public static getFormattedDateAndTime(param0: string, param1: number, param2: number, param3: number): string;
					public static getEndOfToday(): number;
					public static getFormattedTime(param0: string, param1: number, param2: number): string;
					public static getFormattedDate(param0: string, param1: number, param2: number): string;
					public constructor();
					public static isYesterday(param0: number): boolean;
					public static getFormattedTime(param0: string, param1: number, param2: number, param3: string): string;
					public static isToday(param0: number): boolean;
					public static getDurationString(param0: number): string;
					public static getDayOfTheWeek(param0: number): string;
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
			export module utils {
				export abstract class DetectHeadsetUnpluggedBroadcastReceiver {
					public static TAG: string;
					public onUnpluggedHeadset(): void;
					public onReceive(param0: androidcontentContext, param1: androidcontentIntent): void;
					public constructor();
				}
			}
		}
	}
}

import androidosMessage = android.os.Message;
import androidosLooper = android.os.Looper;
/// <reference path="./android.os.Looper.d.ts" />
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.IdleQueueHandler.d.ts" />
/// <reference path="./com.liveperson.infra.utils.DispatchQueue.d.ts" />
/// <reference path="./com.liveperson.infra.utils.HandleMessageCallback.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class DispatchQueue {
					public unregisterQueueIdleCallbacks(): void;
					public sendMessage(param0: androidosMessage): void;
					public constructor(param0: string);
					public removeMessage(param0: number): boolean;
					public cleanupQueue(): void;
					public dispose(): void;
					public postRunnable(param0: javalangRunnable, param1: number): void;
					public isCurrentThread(): boolean;
					public sendMessage(param0: androidosMessage, param1: number): void;
					public constructor(param0: string, param1: com.liveperson.infra.network.socket.IdleQueueHandler);
					public postRunnable(param0: javalangRunnable): void;
					public onLooperPrepared(): void;
					public setHandleMessageCallback(param0: com.liveperson.infra.utils.HandleMessageCallback): void;
					public constructor(param0: string, param1: number, param2: com.liveperson.infra.network.socket.IdleQueueHandler);
					public removeRunnable(param0: javalangRunnable): void;
					public constructor(param0: string, param1: number);
					public queueIdle(): boolean;
				}
				export module DispatchQueue {
					export class DispatchQueueHandler {
						public constructor(param0: androidosLooper, param1: com.liveperson.infra.utils.DispatchQueue);
						public handleMessage(param0: androidosMessage): void;
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
			export module utils {
				export class EncryptionVersion {
					public static NONE: com.liveperson.infra.utils.EncryptionVersion;
					public static VERSION_1: com.liveperson.infra.utils.EncryptionVersion;
					public static values(): native.Array<com.liveperson.infra.utils.EncryptionVersion>;
					public static fromInt(param0: number): com.liveperson.infra.utils.EncryptionVersion;
					public static valueOf(param0: string): com.liveperson.infra.utils.EncryptionVersion;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class FeaturesWrapperUtil {
					public static getInstance(): com.liveperson.infra.utils.FeaturesWrapperUtil;
					public constructor();
					public static putFeature(param0: string, param1: boolean): void;
					public static getAllFeatures(): javautilHashMap;
					public static getFeature(param0: string): boolean;
				}
			}
		}
	}
}

/// <reference path="./android.os.Message.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class HandleMessageCallback {
					/**
					 * Constructs a new instance of the com.liveperson.infra.utils.HandleMessageCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onHandleMessage(param0: androidosMessage): void;
					});
					public onHandleMessage(param0: androidosMessage): void;
				}
				export module HandleMessageCallback {
					export class NullHandleMessageCallback {
						public constructor();
						public onHandleMessage(param0: androidosMessage): void;
					}
				}
			}
		}
	}
}

import androidnetUri = android.net.Uri;
import javaioFile = java.io.File;
import androidviewWindowManager = android.view.WindowManager;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./android.view.WindowManager.d.ts" />
/// <reference path="./java.io.File.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class ImageUtils {
					public static TAG: string;
					public static PNG: string;
					public static JPG: string;
					public static SAMSUNG: string;
					public static IMAGES_FOLDER: string;
					public static FULL_IMAGE_FOLDER: string;
					public static PREVIEW_IMAGE_FOLDER: string;
					public static getOutputStreamFromBitmap(param0: androidgraphicsBitmap, param1: number, param2: string): native.Array<number>;
					public static blur(param0: androidcontentContext, param1: androidgraphicsBitmap, param2: number): androidgraphicsBitmap;
					public static createResizedBitmap(param0: androidnetUri, param1: number, param2: number, param3: boolean): androidgraphicsBitmap;
					public static bitmapToBase64(param0: native.Array<number>): string;
					public static getImagePath(param0: androidcontentContext, param1: androidnetUri, param2: string): string;
					public static createBitmap(param0: androidnetUri): androidgraphicsBitmap;
					public static saveBitmapToDisk(param0: androidcontentContext, param1: native.Array<number>, param2: string, param3: string, param4: com.liveperson.infra.utils.ImageUtils.ImageFolderType): string;
					public static getFilePath(param0: androidcontentContext, param1: string, param2: string): javaioFile;
					public static getImageRotation(param0: string, param1: boolean): number;
					public static base64ToByteArray(param0: string): native.Array<number>;
					public static saveBase64ToDisk(param0: androidcontentContext, param1: string, param2: string): string;
					public static saveBitmapToDisk(param0: androidcontentContext, param1: native.Array<number>, param2: string, param3: com.liveperson.infra.utils.ImageUtils.ImageFolderType, param4: string): string;
					public static bitmapToBase64(param0: androidgraphicsBitmap): string;
					public constructor();
					public static saveBitmapToDisk(param0: native.Array<number>, param1: javaioFile): string;
					public static createImageFileForCamera(param0: androidcontentContext, param1: string): androidnetUri;
					public static deleteImageFolder(): void;
					public static createBitmapFromURL(param0: androidcontentContext, param1: string, param2: number, param3: number): androidgraphicsBitmap;
					public static base64ToBitmap(param0: string): androidgraphicsBitmap;
					public static createResizedExactBitmap(param0: androidnetUri, param1: number, param2: number): androidgraphicsBitmap;
					public static getBitmap(param0: string): androidgraphicsBitmap;
					public static decodeExifOrientation(param0: number, param1: boolean): number;
					public static createImageOnCanvas(param0: androidcontentContext, param1: androidviewWindowManager, param2: androidgraphicsBitmap): androidgraphicsdrawableDrawable;
				}
				export module ImageUtils {
					export class ImageFolderType {
						public static PREVIEW: com.liveperson.infra.utils.ImageUtils.ImageFolderType;
						public static FULL: com.liveperson.infra.utils.ImageUtils.ImageFolderType;
						public static valueOf(param0: string): com.liveperson.infra.utils.ImageUtils.ImageFolderType;
						public static values(): native.Array<com.liveperson.infra.utils.ImageUtils.ImageFolderType>;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.controller.PlayingAudioManager.d.ts" />
/// <reference path="./com.liveperson.infra.utils.LPAudioUtils.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LPAudioUtils {
					public static TAG: string;
					public static VOICE_FOLDER: string;
					public static generateVoiceFileName(): string;
					public cancelAndDeleteRecording(param0: com.liveperson.infra.ICallback): void;
					public static getDuration(param0: string, param1: com.liveperson.infra.ICallback): void;
					public bindPlayingAudio(param0: string, param1: com.liveperson.infra.utils.LPAudioUtils.PlaybackCallback): void;
					public stopRecording(param0: com.liveperson.infra.ICallback): void;
					public stopPlayback(): void;
					public deleteVoiceFolder(): void;
					public startRecording(param0: string, param1: number, param2: com.liveperson.infra.utils.LPAudioUtils.MaxRecordingDurationReachedListener): com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
					public getVoiceFolder(): string;
					public saveByteArrayToDisk(param0: native.Array<number>): string;
					public getCurrentPlayingLocation(): number;
					public playAudio(param0: string, param1: string, param2: com.liveperson.infra.utils.LPAudioUtils.PlaybackCallback): void;
					public playSound(param0: number): void;
					public constructor();
					public pause(): void;
					public isPlaying(param0: string): boolean;
					public getPlayingAudioManager(): com.liveperson.infra.controller.PlayingAudioManager;
					public getCurrentPlayingDuration(): number;
					public isRecording(): boolean;
				}
				export module LPAudioUtils {
					export class LPMediaPlayer {
						public isPlaying(param0: string): boolean;
						public constructor(param0: com.liveperson.infra.utils.LPAudioUtils, param1: string, param2: string);
						public getLocalFileUrl(): string;
						public isCurrentlyPlaying(): boolean;
						public getCallbackId(): string;
					}
					export class LPRecorderStatus {
						public static PermissionDenied: com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static Failed: com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static Started: com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static Finished: com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static valueOf(param0: string): com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static values(): native.Array<com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus>;
					}
					export class MaxRecordingDurationReachedListener {
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.LPAudioUtils$MaxRecordingDurationReachedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onMaxRecordingDurationReached(param0: string): void;
						});
						public onMaxRecordingDurationReached(param0: string): void;
					}
					export class PlaybackCallback {
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.LPAudioUtils$PlaybackCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onPlaybackStarted(param0: string, param1: number): void;
							onPlaybackCompleted(param0: boolean, param1: string): void;
						});
						public onPlaybackStarted(param0: string, param1: number): void;
						public onPlaybackCompleted(param0: boolean, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LPDeprecated {
					/**
					 * Constructs a new instance of the com.liveperson.infra.utils.LPDeprecated interface with the provided implementation.
					 */
					public constructor(implementation: {
						since(): number;
					});
					public since(): number;
				}
			}
		}
	}
}

/// <reference path="./android.content.ContentValues.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LPInitProvider {
					public delete(param0: androidnetUri, param1: string, param2: native.Array<string>): number;
					public constructor();
					public onCreate(): boolean;
					public update(param0: androidnetUri, param1: androidcontentContentValues, param2: string, param3: native.Array<string>): number;
					public getType(param0: androidnetUri): string;
					public insert(param0: androidnetUri, param1: androidcontentContentValues): androidnetUri;
					public query(param0: androidnetUri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): androiddatabaseCursor;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LanguageUtils {
					public static TAG: string;
					public static getLocale(param0: string, param1: string): string;
					public constructor();
					public static getLanguageCode(param0: string): string;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.utils.SourceContent.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LinkPreviewCallback {
					/**
					 * Constructs a new instance of the com.liveperson.infra.utils.LinkPreviewCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onPre(): void;
						onPos(param0: com.liveperson.infra.utils.SourceContent, param1: boolean): void;
						clean(): void;
					});
					public clean(): void;
					public onPos(param0: com.liveperson.infra.utils.SourceContent, param1: boolean): void;
					public onPre(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.utils.SourceContent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LinkPreviewLruCache {
					public static TAG: string;
					public static DEFAULT_NUM_OF_OBJECTS: number;
					public getSourceContentFromCache(param0: string): com.liveperson.infra.utils.SourceContent;
					public static getInstance(): com.liveperson.infra.utils.LinkPreviewLruCache;
					public addSourceContentToCache(param0: string, param1: com.liveperson.infra.utils.SourceContent): void;
				}
			}
		}
	}
}

import androidosBundle = android.os.Bundle;
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LocalBroadcast {
					public constructor();
					public static sendBroadcast(param0: string, param1: androidosBundle): void;
					public static sendBroadcast(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class MaskedMessage {
					public setServerMessage(param0: string): void;
					public constructor(param0: string, param1: string, param2: boolean, param3: string);
					public getMaskedSystemMessage(): string;
					public getDbMessage(): string;
					public getServerMessage(): string;
					public isMasked(): boolean;
					public setDbMessage(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class MessageValidator {
					public constructor(param0: androidcontentContext, param1: boolean);
					public maskMessage(param0: string): com.liveperson.infra.utils.MaskedMessage;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class Queue {
					public add(param0: javalangObject): void;
					public toString(): string;
					public constructor();
					public poll(): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class RegexUtil {
					public static IMAGE_PATTERN: string;
					public static IMAGE_TAG_PATTERN: string;
					public static ICON_TAG_PATTERN: string;
					public static ICON_REV_TAG_PATTERN: string;
					public static ITEMPROP_IMAGE_TAG_PATTERN: string;
					public static ITEMPROP_IMAGE_REV_TAG_PATTERN: string;
					public static TITLE_PATTERN: string;
					public static SCRIPT_PATTERN: string;
					public static METATAG_PATTERN: string;
					public static METATAG_CONTENT_PATTERN: string;
					public static URL_PATTERN: string;
					public static pregMatchAll(param0: string, param1: string, param2: number): javautilList;
					public static pregMatchAllExtraImages(param0: string, param1: string): javautilList;
					public constructor();
					public static pregMatch(param0: string, param1: string, param2: number): string;
					public static pregMatchAllImages(param0: string, param1: string): javautilList;
				}
			}
		}
	}
}

import javalangThreadUncaughtExceptionHandler = java.lang.Thread.UncaughtExceptionHandler;
import javalangThread = java.lang.Thread;
/// <reference path="./java.lang.Thread.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class SDKUncaughtExceptionHandler {
					public static getInstance(param0: javalangThreadUncaughtExceptionHandler): com.liveperson.infra.utils.SDKUncaughtExceptionHandler;
					public uncaughtException(param0: javalangThread, param1: javalangThrowable): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class SourceContent {
					public getTitle(): string;
					public getMetaTags(): javautilHashMap;
					public setDescription(param0: string): void;
					public getSiteName(): string;
					public setTitle(param0: string): void;
					public getUrlData(): native.Array<string>;
					public setHtmlCode(param0: string): void;
					public setImages(param0: string): void;
					public getImages(): string;
					public getUrl(): string;
					public constructor();
					public setUrl(param0: string): void;
					public getFinalUrl(): string;
					public isSuccess(): boolean;
					public getRaw(): string;
					public setRaw(param0: string): void;
					public getCannonicalUrl(): string;
					public setMetaTags(param0: javautilHashMap): void;
					public getHtmlCode(): string;
					public setSiteName(param0: string): void;
					public setFinalUrl(param0: string): void;
					public setCannonicalUrl(param0: string): void;
					public getDescription(): string;
					public setUrlData(param0: native.Array<string>): void;
					public setSuccess(param0: boolean): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class Synchronizer {
					public isWaiting(): boolean;
					public isHasBeenCanceled(): boolean;
					public constructor(param0: com.liveperson.infra.utils.Synchronizer.SynchronizerCallback);
					public createHolder(): com.liveperson.infra.utils.Synchronizer.Holder;
					public done(): void;
					public cancel(): void;
					public didAllDone(): boolean;
					public getAllHoldersResults(): javautilArrayList;
				}
				export module Synchronizer {
					export class Holder {
						public release(param0: javalangObject): void;
						public release(): void;
					}
					export class SynchronizerCallback {
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.Synchronizer$SynchronizerCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							done(param0: javautilArrayList): void;
						});
						public done(param0: javautilArrayList): void;
					}
				}
			}
		}
	}
}

import javalangVoid = java.lang.Void;
/// <reference path="./com.liveperson.infra.utils.LinkPreviewCallback.d.ts" />
/// <reference path="./com.liveperson.infra.utils.SourceContent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Void.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class TextCrawler {
					public static TIMEOUT_IN_MILLI: number;
					public getSourceContent(): com.liveperson.infra.utils.SourceContent;
					public constructor();
					public makePreview(param0: com.liveperson.infra.utils.LinkPreviewCallback, param1: string): void;
					public parseHtml(param0: native.Array<string>): void;
				}
				export module TextCrawler {
					export class GetCode {
						public isNull(): boolean;
						public onPostExecute(param0: javalangVoid): void;
						public onPreExecute(): void;
						public doInBackground(param0: native.Array<string>): javalangVoid;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class ThreadPoolExecutor {
					public static execute(param0: javalangRunnable): void;
					public constructor();
					public static killAll(): void;
					public static executeDelayed(param0: javalangRunnable, param1: number): void;
				}
			}
		}
	}
}

import androidappActivity = android.app.Activity;
/// <reference path="./android.app.Activity.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class UIUtils {
					public constructor();
					public static hideKeyboard(param0: androidappActivity): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class UniqueID {
					public constructor();
					public static createUniqueMessageEventId(): string;
					public static getUniqueID(): number;
				}
			}
		}
	}
}

import androidcontentresResources = android.content.res.Resources;
/// <reference path="./android.content.res.Resources.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class Utils {
					public static SHA256: string;
					public static SHA1: string;
					public static getResources(): androidcontentresResources;
					public constructor();
					public static isValidCertificateKey(param0: string): boolean;
					public static hexStringToByteArray(param0: string): native.Array<number>;
					public static tryParse(param0: javalangObject, param1: number): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class VersionUtils {
					public static TAG: string;
					public constructor();
					public static isValidSdkVersion(param0: string): boolean;
					public static isVersionsEqual(param0: string, param1: string): boolean;
				}
			}
		}
	}
}

