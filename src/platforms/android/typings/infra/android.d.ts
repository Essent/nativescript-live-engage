/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module liveperson {
		export module infra {
			export class BadArgumentException {
				public static class: java.lang.Class<com.liveperson.infra.BadArgumentException>;
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
				public static class: java.lang.Class<com.liveperson.infra.BuildConfig>;
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

declare module com {
	export module liveperson {
		export module infra {
			export class CampaignInfo {
				public static class: java.lang.Class<com.liveperson.infra.CampaignInfo>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.liveperson.infra.CampaignInfo>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: string, param3: string, param4: string, param5: string);
				public toString(): string;
				public constructor(param0: globalAndroid.os.Parcel);
				public getVisitorId(): string;
				public setEngagementId(param0: java.lang.Long): void;
				public getContextId(): string;
				public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: string, param3: string, param4: string);
				public getConnectorId(): string;
				public setConnectorId(param0: string): void;
				public getCampaignId(): java.lang.Long;
				public getEngagementId(): java.lang.Long;
				public setVisitorId(param0: string): void;
				public describeContents(): number;
				public setSessionId(param0: string): void;
				public setContextId(param0: string): void;
				public setCampaignId(param0: java.lang.Long): void;
				public getSessionId(): string;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class Clearable {
				public static class: java.lang.Class<com.liveperson.infra.Clearable>;
				/**
				 * Constructs a new instance of the com.liveperson.infra.Clearable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					clear(): void;
				});
				public constructor();
				public clear(): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class Command {
				public static class: java.lang.Class<com.liveperson.infra.Command>;
				/**
				 * Constructs a new instance of the com.liveperson.infra.Command interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(): void;
				});
				public constructor();
				public execute(): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class ConversationViewParams {
				public static class: java.lang.Class<com.liveperson.infra.ConversationViewParams>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.liveperson.infra.ConversationViewParams>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public setCampaignInfo(param0: com.liveperson.infra.CampaignInfo): com.liveperson.infra.ConversationViewParams;
				public isFilterOn(): boolean;
				public setHistoryConversationsStateToDisplay(param0: com.liveperson.infra.LPConversationsHistoryStateToDisplay): com.liveperson.infra.ConversationViewParams;
				public getHistoryConversationMaxDaysType(): com.liveperson.infra.LPConversationHistoryMaxDaysDateType;
				public getHistoryConversationsMaxDays(): number;
				public isViewOnlyMode(): boolean;
				public constructor(param0: boolean);
				public setLpWelcomeMessage(param0: com.liveperson.infra.model.LPWelcomeMessage): void;
				public getHistoryConversationsStateToDisplay(): com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public toString(): string;
				public constructor(param0: globalAndroid.os.Parcel);
				public constructor();
				public clearCampaignInfo(): void;
				public getCampaignInfo(): com.liveperson.infra.CampaignInfo;
				public setHistoryConversationsMaxDays(param0: number): com.liveperson.infra.ConversationViewParams;
				public describeContents(): number;
				public getLpWelcomeMessage(): com.liveperson.infra.model.LPWelcomeMessage;
				public setReadOnlyMode(param0: boolean): com.liveperson.infra.ConversationViewParams;
				public setHistoryConversationMaxDaysType(param0: com.liveperson.infra.LPConversationHistoryMaxDaysDateType): com.liveperson.infra.ConversationViewParams;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class ForegroundService implements com.liveperson.infra.sdkstatemachine.shutdown.ShutDown, com.liveperson.infra.ForegroundServiceInterface {
				public static class: java.lang.Class<com.liveperson.infra.ForegroundService>;
				public static SCREEN_FOREGROUND_ACTION: string;
				public static SCREEN_FOREGROUND_EXTRA_BRAND_ID: string;
				public static SCREEN_FOREGROUND_EXTRA_TARGET_ID: string;
				public static SCREEN_FOREGROUND_EXTRA_IS_FOREGROUND: string;
				public restart(): void;
				public unregisterBrand(param0: string): void;
				public unregisterAll(): void;
				public getForegroundBrandId(): java.util.HashSet<string>;
				public isBrandForeground(param0: string): boolean;
				public isBrandForeground(): boolean;
				public unregisterTarget(param0: string): void;
				public isTargetForeground(param0: string): boolean;
				public register(param0: string, param1: string): void;
				public shutDown(): void;
				public static getInstance(): com.liveperson.infra.ForegroundService;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class ForegroundServiceInterface {
				public static class: java.lang.Class<com.liveperson.infra.ForegroundServiceInterface>;
				/**
				 * Constructs a new instance of the com.liveperson.infra.ForegroundServiceInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					register(param0: string, param1: string): void;
					unregisterBrand(param0: string): void;
					unregisterAll(): void;
					unregisterTarget(param0: string): void;
					isBrandForeground(): boolean;
					isBrandForeground(param0: string): boolean;
					isTargetForeground(param0: string): boolean;
					getForegroundBrandId(): java.util.HashSet<string>;
				});
				public constructor();
				public unregisterBrand(param0: string): void;
				public unregisterAll(): void;
				public getForegroundBrandId(): java.util.HashSet<string>;
				public isBrandForeground(param0: string): boolean;
				public isBrandForeground(): boolean;
				public unregisterTarget(param0: string): void;
				public isTargetForeground(param0: string): boolean;
				public register(param0: string, param1: string): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class ICallback<T, E>  extends java.lang.Object {
				public static class: java.lang.Class<com.liveperson.infra.ICallback<any,any>>;
				/**
				 * Constructs a new instance of the com.liveperson.infra.ICallback<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: T): void;
					onError(param0: E): void;
				});
				public constructor();
				public onError(param0: E): void;
				public onSuccess(param0: T): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class IDisposable {
				public static class: java.lang.Class<com.liveperson.infra.IDisposable>;
				/**
				 * Constructs a new instance of the com.liveperson.infra.IDisposable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					dispose(): void;
				});
				public constructor();
				public dispose(): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class IPermissionCallback {
				public static class: java.lang.Class<com.liveperson.infra.IPermissionCallback>;
				/**
				 * Constructs a new instance of the com.liveperson.infra.IPermissionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPermissionsGranted(): void;
					onPermissionsDenied(): void;
				});
				public constructor();
				public onPermissionsDenied(): void;
				public onPermissionsGranted(): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class Infra extends com.liveperson.infra.Clearable {
				public static class: java.lang.Class<com.liveperson.infra.Infra>;
				public static instance: com.liveperson.infra.Infra;
				public static KEY_BRAND_ID: string;
				public static KEY_AUTH_KEY: string;
				public static KEY_READ_ONLY: string;
				public static KEY_VIEW_PARAMS: string;
				public static KEY_TARGET_ID: string;
				public static SDK_VERSION: string;
				public init(param0: globalAndroid.content.Context, param1: com.liveperson.infra.sdkstatemachine.init.InfraInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
				public static valueOf(param0: string): com.liveperson.infra.Infra;
				public getApplicationContext(): globalAndroid.content.Context;
				public getHostVersion(): string;
				public setContext(param0: globalAndroid.content.Context): void;
				public getApplicationHandler(): globalAndroid.os.Handler;
				public getLptagEnvironment(): com.liveperson.infra.configuration.LptagEnvironment;
				public logout(param0: globalAndroid.content.Context, param1: com.liveperson.infra.sdkstatemachine.init.InfraInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
				public shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
				public restart(): void;
				public postOnMainThread(param0: java.lang.Runnable): void;
				public getDbEncryptionKeyHelper(): com.liveperson.infra.controller.DBEncryptionKeyHelper;
				public clear(): void;
				public static values(): native.Array<com.liveperson.infra.Infra>;
				public isInitialized(): boolean;
				public setApplicationHandler(param0: globalAndroid.os.Handler): void;
				public unregisterToNetworkChanges(): void;
				public registerToNetworkChanges(): void;
				public getLoggos(): com.liveperson.infra.log.logreporter.loggos.Loggos;
				public static getFileProviderAuthorityPrefix(): string;
			}
			export module Infra {
				export class InfraInitProcess extends com.liveperson.infra.statemachine.InitProcess {
					public static class: java.lang.Class<com.liveperson.infra.Infra.InfraInitProcess>;
					public getInitCallback(): com.liveperson.infra.callbacks.InitLivePersonCallBack;
					public constructor();
					public constructor(param0: com.liveperson.infra.Infra, param1: globalAndroid.content.Context, param2: com.liveperson.infra.sdkstatemachine.init.InfraInitData, param3: com.liveperson.infra.statemachine.InitProcess);
					public init(): void;
				}
				export class InfraLogoutProcess extends com.liveperson.infra.statemachine.LogoutProcess {
					public static class: java.lang.Class<com.liveperson.infra.Infra.InfraLogoutProcess>;
					public preLogout(param0: com.liveperson.infra.sdkstatemachine.logout.PreLogoutCompletionListener): void;
					public shutDownForLogout(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
					public constructor();
					public logout(): void;
					public initForLogout(): void;
					public getLogoutCallback(): com.liveperson.infra.callbacks.LogoutLivePersonCallBack;
					public constructor(param0: com.liveperson.infra.Infra, param1: globalAndroid.content.Context, param2: com.liveperson.infra.sdkstatemachine.init.InfraInitData, param3: com.liveperson.infra.statemachine.LogoutProcess);
				}
				export class InfraShutDownProcess extends com.liveperson.infra.statemachine.ShutDownProcess {
					public static class: java.lang.Class<com.liveperson.infra.Infra.InfraShutDownProcess>;
					public constructor();
					public constructor(param0: com.liveperson.infra.Infra, param1: com.liveperson.infra.statemachine.ShutDownProcess);
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class InitLivePersonProperties {
				public static class: java.lang.Class<com.liveperson.infra.InitLivePersonProperties>;
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

declare module com {
	export module liveperson {
		export module infra {
			export class Interceptors {
				public static class: java.lang.Class<com.liveperson.infra.Interceptors>;
				public static TAG: string;
				public getHttpInterceptorList(): java.util.List<okhttp3.Interceptor>;
				public constructor(param0: java.util.List<okhttp3.Interceptor>);
				public addInterceptor(param0: okhttp3.Interceptor): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class InternetConnectionService extends com.liveperson.infra.sdkstatemachine.shutdown.ShutDown {
				public static class: java.lang.Class<com.liveperson.infra.InternetConnectionService>;
				public static BROADCAST_INTERNET_CONNECTION_CONNECTED: string;
				public static BROADCAST_INTERNET_CONNECTION_DISCONNECTED: string;
				public registeredReceiver(): void;
				public shutDown(): void;
				public unRegisteredReceiver(): void;
				public static isNetworkAvailable(): boolean;
			}
			export module InternetConnectionService {
				export class ConnectionReceiver {
					public static class: java.lang.Class<com.liveperson.infra.InternetConnectionService.ConnectionReceiver>;
					public constructor(param0: com.liveperson.infra.InternetConnectionService);
					public register(param0: globalAndroid.content.Context): void;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class LPAuthenticationParams {
				public static class: java.lang.Class<com.liveperson.infra.LPAuthenticationParams>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.liveperson.infra.LPAuthenticationParams>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getCertificatePinningKeys(): java.util.List<string>;
				public getAuthType(): com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType;
				public setHostAppRedirectUri(param0: string): com.liveperson.infra.LPAuthenticationParams;
				public addCertificatePinningKey(param0: string): com.liveperson.infra.LPAuthenticationParams;
				public getHostAppJWT(): string;
				public constructor(param0: globalAndroid.os.Parcel);
				public constructor();
				public setAuthKey(param0: string): com.liveperson.infra.LPAuthenticationParams;
				public constructor(param0: com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType);
				public getAuthKey(): string;
				public getHostAppRedirectUri(): string;
				public setHostAppJWT(param0: string): com.liveperson.infra.LPAuthenticationParams;
				public describeContents(): number;
				public isAuthenticated(): boolean;
			}
			export module LPAuthenticationParams {
				export class LPAuthenticationType {
					public static class: java.lang.Class<com.liveperson.infra.LPAuthenticationParams.LPAuthenticationType>;
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

declare module com {
	export module liveperson {
		export module infra {
			export class LPConversationHistoryMaxDaysDateType {
				public static class: java.lang.Class<com.liveperson.infra.LPConversationHistoryMaxDaysDateType>;
				public static startConversationDate: com.liveperson.infra.LPConversationHistoryMaxDaysDateType;
				public static endConversationDate: com.liveperson.infra.LPConversationHistoryMaxDaysDateType;
				public static values(): native.Array<com.liveperson.infra.LPConversationHistoryMaxDaysDateType>;
				public static valueOf(param0: string): com.liveperson.infra.LPConversationHistoryMaxDaysDateType;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class LPConversationsHistoryStateToDisplay {
				public static class: java.lang.Class<com.liveperson.infra.LPConversationsHistoryStateToDisplay>;
				public static OPEN: com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public static CLOSE: com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public static ALL: com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public static valueOf(param0: string): com.liveperson.infra.LPConversationsHistoryStateToDisplay;
				public static values(): native.Array<com.liveperson.infra.LPConversationsHistoryStateToDisplay>;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class LocalBroadcastReceiver {
				public static class: java.lang.Class<com.liveperson.infra.LocalBroadcastReceiver>;
				public unregister(): void;
				public register(): void;
				public isRegistered(): boolean;
			}
			export module LocalBroadcastReceiver {
				export class Builder {
					public static class: java.lang.Class<com.liveperson.infra.LocalBroadcastReceiver.Builder>;
					public constructor();
					public addAction(param0: string): com.liveperson.infra.LocalBroadcastReceiver.Builder;
					public setSingleCallback(): com.liveperson.infra.LocalBroadcastReceiver.Builder;
					public build(param0: com.liveperson.infra.LocalBroadcastReceiver.IOnReceive): com.liveperson.infra.LocalBroadcastReceiver;
				}
				export class IOnReceive {
					public static class: java.lang.Class<com.liveperson.infra.LocalBroadcastReceiver.IOnReceive>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.LocalBroadcastReceiver$IOnReceive interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBroadcastReceived(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					});
					public constructor();
					public onBroadcastReceived(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
				export class LPBroadcastReceiver {
					public static class: java.lang.Class<com.liveperson.infra.LocalBroadcastReceiver.LPBroadcastReceiver>;
					public register(): void;
					public unregister(): void;
					public constructor(param0: com.liveperson.infra.LocalBroadcastReceiver);
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export class MonitoringInitParams {
				public static class: java.lang.Class<com.liveperson.infra.MonitoringInitParams>;
				public getAppInstallId(): string;
				public setAppInstallId(param0: string): void;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module callbacks {
				export class InitLivePersonCallBack {
					public static class: java.lang.Class<com.liveperson.infra.callbacks.InitLivePersonCallBack>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.callbacks.InitLivePersonCallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInitSucceed(): void;
						onInitFailed(param0: java.lang.Exception): void;
					});
					public constructor();
					public onInitFailed(param0: java.lang.Exception): void;
					public onInitSucceed(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module callbacks {
				export class LogoutLivePersonCallBack {
					public static class: java.lang.Class<com.liveperson.infra.callbacks.LogoutLivePersonCallBack>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.callbacks.LogoutLivePersonCallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLogoutSucceed(): void;
						onLogoutFailed(param0: java.lang.Exception): void;
					});
					public constructor();
					public onLogoutFailed(param0: java.lang.Exception): void;
					public onLogoutSucceed(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module callbacks {
				export class ShutDownLivePersonCallBack {
					public static class: java.lang.Class<com.liveperson.infra.callbacks.ShutDownLivePersonCallBack>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.callbacks.ShutDownLivePersonCallBack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onShutDownSucceed(): void;
						onShutDownFailed(param0: java.lang.Exception): void;
					});
					public constructor();
					public onShutDownFailed(param0: java.lang.Exception): void;
					public onShutDownSucceed(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module configuration {
				export class ConfigurableResource {
					public static class: java.lang.Class<com.liveperson.infra.configuration.ConfigurableResource>;
					public getResourceName(): string;
					public toString(): string;
					public getResourceType(): com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
					public getResourceId(): number;
					public constructor(param0: number, param1: string, param2: com.liveperson.infra.configuration.ConfigurableResource.ResourceType);
				}
				export module ConfigurableResource {
					export class ResourceType {
						public static class: java.lang.Class<com.liveperson.infra.configuration.ConfigurableResource.ResourceType>;
						public static Integer: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static Color: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static Boolean: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static Dimension: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static String: com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static valueOf(param0: string): com.liveperson.infra.configuration.ConfigurableResource.ResourceType;
						public static values(): native.Array<com.liveperson.infra.configuration.ConfigurableResource.ResourceType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module configuration {
				export class Configuration {
					public static class: java.lang.Class<com.liveperson.infra.configuration.Configuration>;
					public static scanXmlIdsAndNames(param0: java.lang.Class<any>): java.util.HashMap<java.lang.Integer,string>;
					public static getBoolean(param0: number): boolean;
					public static getString(param0: number): string;
					public static set(param0: number, param1: number): void;
					public static getDimension(param0: number): number;
					public constructor();
					public static getInteger(param0: number): number;
					public static set(param0: number, param1: string): void;
					public static set(param0: number, param1: boolean): void;
					public static getColor(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module configuration {
				export class LptagEnvironment {
					public static class: java.lang.Class<com.liveperson.infra.configuration.LptagEnvironment>;
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
						public static class: java.lang.Class<com.liveperson.infra.configuration.LptagEnvironment.Env>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module controller {
				export class AudioPlayable {
					public static class: java.lang.Class<com.liveperson.infra.controller.AudioPlayable>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.controller.AudioPlayable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						playVoiceMessage(param0: string): void;
						stopPlaying(): void;
					});
					public constructor();
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
					public static class: java.lang.Class<com.liveperson.infra.controller.AudioRecordable>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.controller.AudioRecordable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cancelRecording(): void;
					});
					public constructor();
					public cancelRecording(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module controller {
				export class DBEncryptionHelper {
					public static class: java.lang.Class<com.liveperson.infra.controller.DBEncryptionHelper>;
					public constructor();
					public static decrypt(param0: com.liveperson.infra.utils.EncryptionVersion, param1: string): string;
					public static encrypt(param0: com.liveperson.infra.utils.EncryptionVersion, param1: string): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module controller {
				export class DBEncryptionKeyHelper extends com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.infra.controller.DBEncryptionKeyHelper>;
					public static getAppEncryptionVersion(): com.liveperson.infra.utils.EncryptionVersion;
					public constructor(param0: string);
					public clear(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module controller {
				export class PlayingAudioManager {
					public static class: java.lang.Class<com.liveperson.infra.controller.PlayingAudioManager>;
					public static Companion: com.liveperson.infra.controller.PlayingAudioManager.Companion;
					public stopAllCurrentlyPlaying(): void;
					public toString(): string;
					public addPlayingAndStopOthers(param0: com.liveperson.infra.controller.AudioPlayable): void;
					public constructor();
					public stopPlaying(param0: com.liveperson.infra.controller.AudioPlayable): void;
					public removePlaying(param0: com.liveperson.infra.controller.AudioPlayable): void;
					public getMCurrentlyPlayingList(): java.util.Set<com.liveperson.infra.controller.AudioPlayable>;
				}
				export module PlayingAudioManager {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.infra.controller.PlayingAudioManager.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export abstract class BaseDBRepository {
					public static class: java.lang.Class<com.liveperson.infra.database.BaseDBRepository>;
					public getDB(): com.liveperson.infra.database.DBUtilities;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export class DBUtilities {
					public static class: java.lang.Class<com.liveperson.infra.database.DBUtilities>;
					public static ROW_UPDATED: number;
					public query(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string): globalAndroid.database.Cursor;
					public query(param0: native.Array<string>, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string): globalAndroid.database.Cursor;
					public removeAll(param0: string, param1: native.Array<string>): number;
					public runTransaction(param0: java.util.List<com.liveperson.infra.database.transaction_helper.SQLiteCommand>): void;
					public insertOrUpdate(param0: globalAndroid.content.ContentValues, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
					public rawQuery(param0: string, param1: native.Array<any>): globalAndroid.database.Cursor;
					public replace(param0: globalAndroid.content.ContentValues): number;
					public insert(param0: globalAndroid.content.ContentValues): number;
					public insertWithOnConflict(param0: globalAndroid.content.ContentValues): number;
					public update(param0: globalAndroid.content.ContentValues, param1: string, param2: native.Array<string>): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export class DataBaseCommand<DATA>  extends java.lang.Object {
					public static class: java.lang.Class<com.liveperson.infra.database.DataBaseCommand<any>>;
					public mPostQueryOnUI: com.liveperson.infra.database.DataBaseCommand.QueryCallback<DATA>;
					public mPreQueryOnBackground: java.lang.Runnable;
					public mPostQueryOnBackground: com.liveperson.infra.database.DataBaseCommand.QueryCallback<DATA>;
					public setPreQueryOnBackground(param0: java.lang.Runnable): com.liveperson.infra.database.DataBaseCommand<DATA>;
					public static create(param0: com.liveperson.infra.database.DataBaseCommand.QueryCommand<any>): com.liveperson.infra.database.DataBaseCommand<any>;
					public constructor(param0: com.liveperson.infra.database.DataBaseCommand.QueryCommand<DATA>);
					public execute(): void;
					public executeSynchronously(): DATA;
					public setPostQueryOnBackground(param0: com.liveperson.infra.database.DataBaseCommand.QueryCallback<DATA>): com.liveperson.infra.database.DataBaseCommand<DATA>;
					public setPostQueryOnUI(param0: com.liveperson.infra.database.DataBaseCommand.QueryCallback<DATA>): com.liveperson.infra.database.DataBaseCommand<DATA>;
				}
				export module DataBaseCommand {
					export class QueryCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.database.DataBaseCommand.QueryCallback<any>>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.database.DataBaseCommand$QueryCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onResult(param0: T): void;
						});
						public constructor();
						public onResult(param0: T): void;
					}
					export class QueryCommand<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.database.DataBaseCommand.QueryCommand<any>>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.database.DataBaseCommand$QueryCommand interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							query(): T;
						});
						public constructor();
						public query(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export class DataBaseExecutor {
					public static class: java.lang.Class<com.liveperson.infra.database.DataBaseExecutor>;
					public static killAll(param0: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
					public static execute(param0: java.lang.Runnable): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export class DatabaseManager implements com.liveperson.infra.sdkstatemachine.shutdown.ShutDown, com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.infra.database.DatabaseManager>;
					public static getInstance(): com.liveperson.infra.database.DatabaseManager;
					public shutDown(): void;
					public clear(): void;
					public registerTable(param0: com.liveperson.infra.database.tables.BaseTable): void;
				}
				export module DatabaseManager {
					export class DatabaseHelper {
						public static class: java.lang.Class<com.liveperson.infra.database.DatabaseManager.DatabaseHelper>;
						public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class BaseTable {
						public static class: java.lang.Class<com.liveperson.infra.database.tables.BaseTable>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.database.tables.BaseTable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCreateCommand(): string;
							onTableUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
							getName(): string;
						});
						public constructor();
						public static KEY_ID: string;
						public onTableUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public getCreateCommand(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class BrandProfileTable extends com.liveperson.infra.database.tables.BaseTable {
						public static class: java.lang.Class<com.liveperson.infra.database.tables.BrandProfileTable>;
						public static BRAND_TABLE: string;
						public static KEY_BIO: string;
						public static KEY_BRAND_ID: string;
						public static KEY_SKILL: string;
						public static KEY_COVER_IMAGE: string;
						public static KEY_NAME: string;
						public static KEY_LOGO_IMAGE: string;
						public static KEY_IS_SAVED: string;
						public onTableUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class ConversationsTable extends com.liveperson.infra.database.tables.BaseTable {
						public static class: java.lang.Class<com.liveperson.infra.database.tables.ConversationsTable>;
						public static TABLE_NAME: string;
						public onTableUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public getName(): string;
					}
					export module ConversationsTable {
						export class Key {
							public static class: java.lang.Class<com.liveperson.infra.database.tables.ConversationsTable.Key>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class DialogsTable extends com.liveperson.infra.database.tables.BaseTable {
						public static class: java.lang.Class<com.liveperson.infra.database.tables.DialogsTable>;
						public static TABLE_NAME: string;
						public onTableUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public getName(): string;
					}
					export module DialogsTable {
						export class Key {
							public static class: java.lang.Class<com.liveperson.infra.database.tables.DialogsTable.Key>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class FilesTable extends com.liveperson.infra.database.tables.BaseTable {
						public static class: java.lang.Class<com.liveperson.infra.database.tables.FilesTable>;
						public static FILES_TABLE: string;
						public static KEY_ID_AS_VALUE: string;
						public static KEY_PREVIEW: string;
						public static KEY_SWIFT_PATH: string;
						public static KEY_FILE_TYPE: string;
						public static KEY_LOCAL_URL: string;
						public static KEY_LOAD_STATUS: string;
						public static KEY_RELATED_MESSAGE_ROW_ID: string;
						public static KEY_LOCAL_URL_UPDATE_TIMESTAMP: string;
						public onTableUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public constructor();
						public getCreateCommand(): string;
						public static getProjection(): native.Array<string>;
						public getName(): string;
					}
					export module FilesTable {
						export class LoadStatus {
							public static class: java.lang.Class<com.liveperson.infra.database.tables.FilesTable.LoadStatus>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class MessagesTable extends com.liveperson.infra.database.tables.BaseTable {
						public static class: java.lang.Class<com.liveperson.infra.database.tables.MessagesTable>;
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
						public onTableUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
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

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module tables {
					export class UsersTable extends com.liveperson.infra.database.tables.BaseTable {
						public static class: java.lang.Class<com.liveperson.infra.database.tables.UsersTable>;
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
						public onTableUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
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

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module transaction_helper {
					export class InsertOrUpdateSQLCommand extends com.liveperson.infra.database.transaction_helper.UpdateSQLCommand {
						public static class: java.lang.Class<com.liveperson.infra.database.transaction_helper.InsertOrUpdateSQLCommand>;
						public getContentValuesForInsert(): globalAndroid.content.ContentValues;
						public constructor(param0: globalAndroid.content.ContentValues, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>);
						public constructor(param0: globalAndroid.content.ContentValues);
						public constructor(param0: globalAndroid.content.ContentValues, param1: string, param2: native.Array<string>);
						public getType(): number;
						public getContentValuesForUpdate(): globalAndroid.content.ContentValues;
						public onInserted(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module transaction_helper {
					export class InsertSQLCommand extends com.liveperson.infra.database.transaction_helper.SQLiteCommand {
						public static class: java.lang.Class<com.liveperson.infra.database.transaction_helper.InsertSQLCommand>;
						public constructor(param0: globalAndroid.content.ContentValues);
						public getType(): number;
						public onInserted(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module database {
				export module transaction_helper {
					export abstract class SQLiteCommand {
						public static class: java.lang.Class<com.liveperson.infra.database.transaction_helper.SQLiteCommand>;
						public mListener: com.liveperson.infra.database.transaction_helper.SQLiteCommand.SQLiteCommandListener;
						public setListener(param0: com.liveperson.infra.database.transaction_helper.SQLiteCommand.SQLiteCommandListener): void;
						public getContentValues(): globalAndroid.content.ContentValues;
						public constructor(param0: globalAndroid.content.ContentValues);
						public getType(): number;
						public onInserted(param0: number): void;
					}
					export module SQLiteCommand {
						export class CommandType {
							public static class: java.lang.Class<com.liveperson.infra.database.transaction_helper.SQLiteCommand.CommandType>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.database.transaction_helper.SQLiteCommand$CommandType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
							public static INSERT: number;
							public static UPDATE: number;
							public static INSERT_OR_UPDATE: number;
						}
						export class SQLiteCommandListener {
							public static class: java.lang.Class<com.liveperson.infra.database.transaction_helper.SQLiteCommand.SQLiteCommandListener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.database.transaction_helper.SQLiteCommand$SQLiteCommandListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onInsertComplete(param0: number): void;
							});
							public constructor();
							public onInsertComplete(param0: number): void;
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
			export module database {
				export module transaction_helper {
					export class UpdateSQLCommand extends com.liveperson.infra.database.transaction_helper.SQLiteCommand {
						public static class: java.lang.Class<com.liveperson.infra.database.transaction_helper.UpdateSQLCommand>;
						public constructor(param0: globalAndroid.content.ContentValues);
						public getUpdateWhereArgs(): native.Array<string>;
						public constructor(param0: globalAndroid.content.ContentValues, param1: string, param2: native.Array<string>);
						public getType(): number;
						public getUpdateWhereClause(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module handler {
				export class NotificationHandler {
					public static class: java.lang.Class<com.liveperson.infra.handler.NotificationHandler>;
					public setIconResourceId(param0: number): com.liveperson.infra.handler.NotificationHandler;
					public setNotificationDefaults(param0: number): com.liveperson.infra.handler.NotificationHandler;
					public setAutoCancel(param0: boolean): com.liveperson.infra.handler.NotificationHandler;
					public createForegroundServiceNotificationBuilder(): globalAndroid.app.Notification.Builder;
					public setPendingIntent(param0: globalAndroid.app.PendingIntent): com.liveperson.infra.handler.NotificationHandler;
					public showNotification(): void;
					public constructor(param0: string, param1: globalAndroid.content.Context, param2: java.lang.Class<any>, param3: string, param4: string);
					public static hideNotification(param0: globalAndroid.content.Context, param1: string): void;
					public constructor(param0: string, param1: globalAndroid.content.Context, param2: java.lang.Class<any>);
					public constructor(param0: globalAndroid.content.Context, param1: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export class DefaultAndroidLogger extends com.liveperson.infra.log.ILogger {
					public static class: java.lang.Class<com.liveperson.infra.log.DefaultAndroidLogger>;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public constructor();
					public i(param0: string, param1: string): void;
					public w(param0: string, param1: string): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export class ILogger {
					public static class: java.lang.Class<com.liveperson.infra.log.ILogger>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.log.ILogger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						d(param0: string, param1: string): void;
						d(param0: string, param1: string, param2: java.lang.Throwable): void;
						i(param0: string, param1: string): void;
						e(param0: string, param1: string): void;
						e(param0: string, param1: string, param2: java.lang.Throwable): void;
						w(param0: string, param1: string): void;
						w(param0: string, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public i(param0: string, param1: string): void;
					public w(param0: string, param1: string): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string, param2: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export class LPMobileLog {
					public static class: java.lang.Class<com.liveperson.infra.log.LPMobileLog>;
					public static e(param0: string, param1: java.lang.Throwable): void;
					public static setLoggosEnabled(param0: boolean): void;
					public static i(param0: string, param1: string): void;
					public static d(param0: string, param1: string, param2: string): void;
					public static e(param0: string, param1: string): void;
					public static e(param0: string, param1: string, param2: string): void;
					public static setDebugMode(param0: boolean): void;
					public static setLogger(param0: com.liveperson.infra.log.ILogger): void;
					public static w(param0: string, param1: java.lang.Throwable): void;
					public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public constructor();
					public static d(param0: string, param1: string): void;
					public static i(param0: string, param1: string, param2: string): void;
					public static w(param0: string, param1: string): void;
				}
				export module LPMobileLog {
					export class FlowTags {
						public static class: java.lang.Class<com.liveperson.infra.log.LPMobileLog.FlowTags>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export module logreporter {
					export module loggos {
						export class Loggos extends com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback<java.lang.Exception> {
							public static class: java.lang.Class<com.liveperson.infra.log.logreporter.loggos.Loggos>;
							public static TAG: string;
							public static PREFS_KEY_LOGGOS_DOMAIN: string;
							public static PREFS_KEY_LOGGOS_TARGET_ID: string;
							public static CERTIFICATE_ERROR_ACTION: string;
							public constructor();
							public sendMessageImmediately(param0: com.liveperson.infra.log.logreporter.loggos.LoggosMessage): void;
							public onError(param0: java.util.List<com.liveperson.infra.log.logreporter.loggos.LoggosMessage>, param1: java.lang.Exception): void;
							public onSuccess(): void;
							public shutdown(): void;
							public addMessage(param0: com.liveperson.infra.log.logreporter.loggos.LoggosMessage): void;
							public getTargetId(): string;
							public init(param0: string, param1: string, param2: java.util.List<string>): void;
							public setTargetId(param0: string): void;
							public isShouldSendError(): boolean;
							public getDomain(): string;
							public setDomain(param0: string): void;
							public onError(param0: java.util.List<com.liveperson.infra.log.logreporter.loggos.LoggosMessage>, param1: any): void;
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
			export module log {
				export module logreporter {
					export module loggos {
						export class LoggosMessage {
							public static class: java.lang.Class<com.liveperson.infra.log.logreporter.loggos.LoggosMessage>;
							public static TAG: string;
							public static LOG_LEVEL: string;
							public static CONTEXT: string;
							public static MESSAGE: string;
							public static NAMESPACE: string;
							public static ACCOUNT_ID: string;
							public static URL: string;
							public static TIME: string;
							public static DATE_FORMAT: string;
							public setAccountId(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setTime(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setTime(param0: number): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public getLevel(): string;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
							public setUrl(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setLogContext(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setLevel(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public constructor(param0: string, param1: string, param2: string, param3: string);
							public constructor(param0: org.json.JSONObject);
							public setMessage(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public getUrl(): string;
							public getTime(): string;
							public getLogContext(): string;
							public toJsonObject(): org.json.JSONObject;
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

declare module com {
	export module liveperson {
		export module infra {
			export module log {
				export module logreporter {
					export module loggos {
						export module logsender {
							export class HttpLogSender extends com.liveperson.infra.log.logreporter.loggos.logsender.LogSender {
								public static class: java.lang.Class<com.liveperson.infra.log.logreporter.loggos.logsender.HttpLogSender>;
								public static TAG: string;
								public sendBulk(param0: string, param1: java.util.List<com.liveperson.infra.log.logreporter.loggos.LoggosMessage>, param2: java.util.List<string>): void;
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
			export module log {
				export module logreporter {
					export module loggos {
						export module logsender {
							export abstract class LogSender {
								public static class: java.lang.Class<com.liveperson.infra.log.logreporter.loggos.logsender.LogSender>;
								public mCallback: com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback<any>;
								public sendBulk(param0: string, param1: java.util.List<com.liveperson.infra.log.logreporter.loggos.LoggosMessage>, param2: java.util.List<string>): void;
								public setCallback(param0: com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback<any>): void;
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
			export module log {
				export module logreporter {
					export module loggos {
						export module logsender {
							export class LogSenderCallback<E>  extends java.lang.Object {
								public static class: java.lang.Class<com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback<any>>;
								/**
								 * Constructs a new instance of the com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onSuccess(): void;
									onError(param0: java.util.List<com.liveperson.infra.log.logreporter.loggos.LoggosMessage>, param1: E): void;
								});
								public constructor();
								public onSuccess(): void;
								public onError(param0: java.util.List<com.liveperson.infra.log.logreporter.loggos.LoggosMessage>, param1: E): void;
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
			export module managers {
				export class PreferenceManager {
					public static class: java.lang.Class<com.liveperson.infra.managers.PreferenceManager>;
					public static APP_LEVEL_PREFERENCES: string;
					public static SDK_VERSION_CHANGED_CLEAR_DATABASE_KEY: string;
					public static KILL_SWITCH_PHOTO_SHARING_ENABLED_PREFERENCE_KEY: string;
					public static SITE_SETTINGS_PHOTO_SHARING_ENABLED_PREFERENCE_KEY: string;
					public static SITE_SETTINGS_VOICE_SHARING_ENABLED_PREFERENCE_KEY: string;
					public static CONFIGURATION_DATA_PUBLISH_DATE_PREFERENCE_KEY: string;
					public getLongValue(param0: string, param1: string, param2: number): number;
					public static getInstance(): com.liveperson.infra.managers.PreferenceManager;
					public contains(param0: string, param1: string): boolean;
					public getLongValue(param0: string, param1: string, param2: boolean): boolean;
					public getStringSet(param0: string, param1: string, param2: java.util.Set<string>): java.util.Set<string>;
					public setBooleanValue(param0: string, param1: string, param2: boolean): void;
					public getBooleanValue(param0: string, param1: string, param2: boolean): boolean;
					public setStringsSet(param0: string, param1: string, param2: java.util.Set<string>): void;
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
				export class LPWelcomeMessage {
					public static class: java.lang.Class<com.liveperson.infra.model.LPWelcomeMessage>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public getQuickReplies(param0: boolean): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: string);
					public getWelcomeMessage(): string;
					public shouldUseDefaultMessage(): boolean;
					public describeContents(): number;
					public getMessageFrequency(): com.liveperson.infra.model.LPWelcomeMessage.MessageFrequency;
					public setNumberOfItemsPerRow(param0: number): void;
					public setMessageOptions(param0: java.util.List<com.liveperson.infra.model.MessageOption>): void;
					public setMessageFrequency(param0: com.liveperson.infra.model.LPWelcomeMessage.MessageFrequency): void;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module LPWelcomeMessage {
					export class MessageFrequency {
						public static class: java.lang.Class<com.liveperson.infra.model.LPWelcomeMessage.MessageFrequency>;
						public static FIRST_TIME_CONVERSATION: com.liveperson.infra.model.LPWelcomeMessage.MessageFrequency;
						public static EVERY_CONVERSATION: com.liveperson.infra.model.LPWelcomeMessage.MessageFrequency;
						public static valueOf(param0: string): com.liveperson.infra.model.LPWelcomeMessage.MessageFrequency;
						public static values(): native.Array<com.liveperson.infra.model.LPWelcomeMessage.MessageFrequency>;
					}
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
					public static class: java.lang.Class<com.liveperson.infra.model.LptagData>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export class Message {
					public static class: java.lang.Class<com.liveperson.infra.model.Message>;
					public static EXTRA_MESSAGE_TEXT: string;
					public setServerSequence(param0: number): void;
					public getLocalId(): number;
					public setDialogId(param0: string): void;
					public getServerSequence(): number;
					public getContentType(): string;
					public setMessage(param0: string): void;
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

declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export class MessageOption {
					public static class: java.lang.Class<com.liveperson.infra.model.MessageOption>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator;
					public constructor(param0: string, param1: string);
					public constructor(param0: globalAndroid.os.Parcel);
					public getValue(): string;
					public getMetadata(): org.json.JSONArray;
					public describeContents(): number;
					public getDisplayText(): string;
					public constructor(param0: string, param1: string, param2: org.json.JSONArray);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export class PushMessage {
					public static class: java.lang.Class<com.liveperson.infra.model.PushMessage>;
					public setCollapseKey(param0: string): void;
					public setConversationId(param0: string): void;
					public getFrom(): string;
					public setCurrentUnreadMessagesCounter(param0: number): void;
					public getConversationId(): string;
					public setBackendService(param0: string): void;
					public toString(): string;
					public getBrandId(): string;
					public getCurrentUnreadMessagesCounter(): number;
					public getCollapseKey(): string;
					public getMessage(): string;
					public getBackendService(): string;
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export class SocketConnectionParams {
					public static class: java.lang.Class<com.liveperson.infra.model.SocketConnectionParams>;
					public constructor(param0: string);
					public getUrl(): string;
					public getTimeout(): number;
					public constructor(param0: string, param1: number, param2: java.util.List<string>);
					public constructor(param0: string, param1: number);
					public getHeaders(): java.util.HashMap<string,string>;
					public addHeader(param0: string, param1: string): void;
					public getCertificatePinningKeys(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module model {
				export module types {
					export class ChatState {
						public static class: java.lang.Class<com.liveperson.infra.model.types.ChatState>;
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
					public static class: java.lang.Class<com.liveperson.infra.network.BackOff>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.network.BackOff interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						reset(): void;
						getNextBackOffMillis(): number;
						calculateNextBackOffMillis(): void;
						getRetryNumber(): number;
						<clinit>(): void;
					});
					public constructor();
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export class ExponentialBackOff extends com.liveperson.infra.network.BackOff {
					public static class: java.lang.Class<com.liveperson.infra.network.ExponentialBackOff>;
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
						public static class: java.lang.Class<com.liveperson.infra.network.ExponentialBackOff.Builder>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export class Tls12SocketFactory {
					public static class: java.lang.Class<com.liveperson.infra.network.Tls12SocketFactory>;
					public getSupportedCipherSuites(): native.Array<string>;
					public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
					public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
					public constructor(param0: javax.net.ssl.SSLSocketFactory);
					public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
					public getDefaultCipherSuites(): native.Array<string>;
					public createSocket(param0: string, param1: number): java.net.Socket;
					public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export class HttpHandler {
						public static class: java.lang.Class<com.liveperson.infra.network.http.HttpHandler>;
						public constructor();
						public static executeDelayed(param0: com.liveperson.infra.network.http.request.HttpRequest, param1: number): void;
						public static clearInterceptors(): void;
						public static addInterceptors(param0: java.util.List<okhttp3.Interceptor>): void;
						public static execute(param0: com.liveperson.infra.network.http.request.HttpRequest): void;
					}
					export module HttpHandler {
						export class HttpRequestBuilder {
							public static class: java.lang.Class<com.liveperson.infra.network.http.HttpHandler.HttpRequestBuilder>;
							public static build(param0: com.liveperson.infra.network.http.request.HttpRequest): okhttp3.Request;
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
			export module network {
				export module http {
					export module body {
						export abstract class HttpImageRequestBody extends com.liveperson.infra.network.http.body.HttpRequestBody {
							public static class: java.lang.Class<com.liveperson.infra.network.http.body.HttpImageRequestBody>;
							public constructor();
							public get(): any;
							public isString(): boolean;
							public get(): native.Array<number>;
							public getContentType(): string;
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
			export module network {
				export module http {
					export module body {
						export class HttpRequestBody {
							public static class: java.lang.Class<com.liveperson.infra.network.http.body.HttpRequestBody>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.network.http.body.HttpRequestBody interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(): any;
								isString(): boolean;
								getContentType(): string;
							});
							public constructor();
							public get(): any;
							public isString(): boolean;
							public getContentType(): string;
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
			export module network {
				export module http {
					export module body {
						export abstract class HttpStringRequestBody extends com.liveperson.infra.network.http.body.HttpRequestBody {
							public static class: java.lang.Class<com.liveperson.infra.network.http.body.HttpStringRequestBody>;
							public constructor();
							public get(): string;
							public get(): any;
							public isString(): boolean;
							public getContentType(): string;
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
			export module network {
				export module http {
					export module body {
						export class LPJSONArrayBody extends com.liveperson.infra.network.http.body.HttpStringRequestBody {
							public static class: java.lang.Class<com.liveperson.infra.network.http.body.LPJSONArrayBody>;
							public constructor();
							public get(): string;
							public get(): any;
							public isString(): boolean;
							public getContentType(): string;
							public constructor(param0: org.json.JSONArray);
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
			export module network {
				export module http {
					export module body {
						export class LPJSONObjectBody extends com.liveperson.infra.network.http.body.HttpStringRequestBody {
							public static class: java.lang.Class<com.liveperson.infra.network.http.body.LPJSONObjectBody>;
							public constructor();
							public get(): string;
							public get(): any;
							public constructor(param0: org.json.JSONObject);
							public isString(): boolean;
							public getContentType(): string;
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
			export module network {
				export module http {
					export module request {
						export class HttpGetRequest extends com.liveperson.infra.network.http.request.HttpRequest {
							public static class: java.lang.Class<com.liveperson.infra.network.http.request.HttpGetRequest>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export class HttpOpenStreamRequest extends com.liveperson.infra.network.http.request.HttpGetRequest {
							public static class: java.lang.Class<com.liveperson.infra.network.http.request.HttpOpenStreamRequest>;
							public constructor(param0: string, param1: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod);
							public constructor(param0: string);
							public reportSuccess(param0: okhttp3.Response): void;
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
			export module network {
				export module http {
					export module request {
						export class HttpPostRequest extends com.liveperson.infra.network.http.request.HttpRequest {
							public static class: java.lang.Class<com.liveperson.infra.network.http.request.HttpPostRequest>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export class HttpPutRequest extends com.liveperson.infra.network.http.request.HttpRequest {
							public static class: java.lang.Class<com.liveperson.infra.network.http.request.HttpPutRequest>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module request {
						export abstract class HttpRequest {
							public static class: java.lang.Class<com.liveperson.infra.network.http.request.HttpRequest>;
							public mRequestBody: com.liveperson.infra.network.http.body.HttpRequestBody;
							public mCallback: com.liveperson.infra.ICallback<any,any>;
							public getTimeout(): number;
							public constructor(param0: string, param1: com.liveperson.infra.network.http.request.HttpRequest.HttpMethod);
							public addHeader(param0: string, param1: string): void;
							public getHeaders(): java.util.List<globalAndroid.util.Pair<string,string>>;
							public getRequestBody(): com.liveperson.infra.network.http.body.HttpRequestBody;
							public getCertificatePinningKeys(): java.util.List<string>;
							public setFollowRedirect(param0: boolean): void;
							public reportSuccess(param0: okhttp3.Response): void;
							public processResponse(param0: okhttp3.Response): void;
							public getCallback(): com.liveperson.infra.ICallback<any,any>;
							public getMethod(): com.liveperson.infra.network.http.request.HttpRequest.HttpMethod;
							public setBody(param0: com.liveperson.infra.network.http.body.HttpRequestBody): void;
							public isResponseSuccessful(param0: okhttp3.Response): boolean;
							public getUrl(): string;
							public setCallback(param0: com.liveperson.infra.ICallback<any,any>): void;
							public setTimeout(param0: number): void;
							public processErrorResponse(param0: java.lang.Exception): void;
							public setUrl(param0: string): void;
							public getFollowRedirect(): boolean;
							public setCertificatePinningKeys(param0: java.util.List<string>): void;
						}
						export module HttpRequest {
							export class HttpMethod {
								public static class: java.lang.Class<com.liveperson.infra.network.http.request.HttpRequest.HttpMethod>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module http {
					export module requests {
						export class BadgeCounterRequest extends com.liveperson.infra.Command {
							public static class: java.lang.Class<com.liveperson.infra.network.http.requests.BadgeCounterRequest>;
							public execute(): void;
							public constructor(param0: string, param1: string, param2: java.util.List<string>, param3: com.liveperson.infra.ICallback<string,java.lang.Exception>);
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
			export module network {
				export module http {
					export module requests {
						export class CSDSRequest extends com.liveperson.infra.Command {
							public static class: java.lang.Class<com.liveperson.infra.network.http.requests.CSDSRequest>;
							public execute(): void;
							public constructor(param0: string, param1: string, param2: java.util.List<string>, param3: com.liveperson.infra.ICallback<any,any>);
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
			export module network {
				export module http {
					export module requests {
						export class ConfigurationRequest extends com.liveperson.infra.Command {
							public static class: java.lang.Class<com.liveperson.infra.network.http.requests.ConfigurationRequest>;
							public static TAG: string;
							public constructor(param0: string, param1: java.util.List<string>, param2: com.liveperson.infra.ICallback<any,any>);
							public execute(): void;
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
			export module network {
				export module http {
					export module requests {
						export class LptagRequest extends com.liveperson.infra.Command {
							public static class: java.lang.Class<com.liveperson.infra.network.http.requests.LptagRequest>;
							public static JSON_KEY_FEATURES: string;
							public static JSON_KEY_RETRY: string;
							public static JSON_KEY_RETRY_TIMEOUT: string;
							public static JSON_KEY_MAX_RETRIES: string;
							public static JSON_KEY_MESSAGING_AUTO_MESSAGES: string;
							public execute(): void;
							public constructor(param0: string, param1: string, param2: java.util.List<string>, param3: com.liveperson.infra.ICallback<any,any>);
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
			export module network {
				export module http {
					export module requests {
						export class PushRequest extends com.liveperson.infra.Command {
							public static class: java.lang.Class<com.liveperson.infra.network.http.requests.PushRequest>;
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
							public mCertificates: java.util.List<string>;
							public mCallback: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.List<string>);
							public getBody(): org.json.JSONObject;
							public handleResponse(param0: string): void;
							public setCallback(param0: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): com.liveperson.infra.network.http.requests.PushRequest;
							public execute(): void;
							public handleError(param0: java.lang.Exception): void;
							public setAppId(param0: string): com.liveperson.infra.network.http.requests.PushRequest;
							public setPlatform(param0: string): com.liveperson.infra.network.http.requests.PushRequest;
							public setDeviceId(param0: string): com.liveperson.infra.network.http.requests.PushRequest;
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
			export module network {
				export module http {
					export module requests {
						export class SiteSettingsRequest extends com.liveperson.infra.Command {
							public static class: java.lang.Class<com.liveperson.infra.network.http.requests.SiteSettingsRequest>;
							public static TAG: string;
							public execute(): void;
							public constructor(param0: string, param1: string, param2: java.util.List<string>, param3: com.liveperson.infra.ICallback<any,any>);
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
			export module network {
				export module http {
					export module requests {
						export class UnregisterPushRequest extends com.liveperson.infra.network.http.requests.PushRequest {
							public static class: java.lang.Class<com.liveperson.infra.network.http.requests.UnregisterPushRequest>;
							public static TAG: string;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.List<string>);
							public getBody(): org.json.JSONObject;
							public handleResponse(param0: string): void;
							public execute(): void;
							public handleError(param0: java.lang.Exception): void;
							public constructor(param0: string, param1: string, param2: string, param3: java.util.List<string>);
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
			export module network {
				export module socket {
					export abstract class BaseResponseHandler<DATA, REQUEST>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.BaseResponseHandler<any,any>>;
						public constructor();
						public parse(param0: org.json.JSONObject): DATA;
						public getAPIResponseType(): string;
						public getSupportedResponseHandler(param0: string): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
						public giveUp(): void;
						public getRequest(): REQUEST;
						public handle(param0: DATA): boolean;
						public onParsingError(): void;
						public getResponseByExpectedType(param0: string): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
					export abstract class BaseSocketRequest<T, REQUEST>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.BaseSocketRequest<any,any>>;
						public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<T,REQUEST>;
						public constructor();
						public setRequestId(param0: number): com.liveperson.infra.network.socket.BaseSocketRequest<any,any>;
						public getSocketUrl(): string;
						public constructor(param0: number);
						public getRequestName(): string;
						public static createRequestId(): number;
						public getRequestId(): number;
						public getData(): string;
						public addCallback(param0: com.liveperson.infra.network.socket.ResponseCallback<T>): REQUEST;
						public removeCallback(param0: com.liveperson.infra.network.socket.ResponseCallback<T>): REQUEST;
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
					export abstract class GeneralResponseHandler {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.GeneralResponseHandler>;
						public createInstance(param0: string): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export class ISocketCallbacks {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.ISocketCallbacks>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.ISocketCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
							onMessage(param0: string): void;
							onDisconnected(param0: string, param1: number): void;
						});
						public constructor();
						public onMessage(param0: string): void;
						public onDisconnected(param0: string, param1: number): void;
						public onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
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
					export class ISocketWrapper {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.ISocketWrapper>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.ISocketWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							connect(param0: com.liveperson.infra.model.SocketConnectionParams): void;
							disconnect(): void;
							send(param0: string): void;
						});
						public constructor();
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
						public static class: java.lang.Class<com.liveperson.infra.network.socket.IdleQueueHandler>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.IdleQueueHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							queueIdle(): void;
						});
						public constructor();
						public queueIdle(): void;
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
					export class ResponseCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.ResponseCallback<any>>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.network.socket.ResponseCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: T): void;
							onError(): void;
						});
						public constructor();
						public onError(): void;
						public onSuccess(param0: T): void;
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
					export class ResponseMap extends com.liveperson.infra.sdkstatemachine.shutdown.ShutDown {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.ResponseMap>;
						public static RESPONSE_TAG: string;
						public constructor();
						public onSocketClosed(): void;
						public onRequestHandled(param0: number): void;
						public putGeneralHandler(param0: com.liveperson.infra.network.socket.GeneralResponseHandler): void;
						public shutDown(): void;
						public putRequestIdHandler(param0: number, param1: com.liveperson.infra.network.socket.BaseResponseHandler<any,any>): void;
						public putGeneralHandler(param0: string, param1: java.lang.Class<any>): void;
						public getRequestIdHandler(param0: string, param1: number): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
					export class SocketHandler implements com.liveperson.infra.network.socket.ISocketCallbacks, com.liveperson.infra.IDisposable {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.SocketHandler>;
						public static PERIODIC_PING_TIME: number;
						public static CERTIFICATE_ERROR: number;
						public sendDelayed(param0: string, param1: number): java.lang.Runnable;
						public onMessage(param0: string): void;
						public constructor(param0: com.liveperson.infra.network.socket.ResponseMap);
						public onDisconnected(param0: string, param1: number): void;
						public onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
						public send(param0: string): void;
						public dispose(): void;
					}
					export module SocketHandler {
						export class SendMessageRunnable {
							public static class: java.lang.Class<com.liveperson.infra.network.socket.SocketHandler.SendMessageRunnable>;
							public constructor(param0: com.liveperson.infra.network.socket.SocketHandler, param1: string);
							public run(): void;
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
			export module network {
				export module socket {
					export class SocketManager extends com.liveperson.infra.sdkstatemachine.shutdown.ShutDown {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.SocketManager>;
						public static getInstance(): com.liveperson.infra.network.socket.SocketManager;
						public getSocketState(param0: string): com.liveperson.infra.network.socket.SocketState;
						public send(param0: com.liveperson.infra.network.socket.BaseSocketRequest<any,any>): void;
						public putGeneralHandlerMap(param0: com.liveperson.infra.network.socket.GeneralResponseHandler): void;
						public connect(param0: com.liveperson.infra.model.SocketConnectionParams): void;
						public shutDown(): void;
						public killSocket(param0: string): void;
						public cancelDelayedRequest(param0: com.liveperson.infra.network.socket.BaseSocketRequest<any,any>, param1: java.lang.Runnable): void;
						public unregisterFromSocketState(param0: string, param1: com.liveperson.infra.network.socket.state.SocketStateListener): void;
						public registerToSocketState(param0: string, param1: com.liveperson.infra.network.socket.state.SocketStateListener): void;
						public send(param0: com.liveperson.infra.network.socket.BaseSocketRequest<any,any>, param1: number): java.lang.Runnable;
						/** @deprecated */
						public connect(param0: string, param1: number): void;
						public disconnect(param0: string): void;
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
					export class SocketState {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.SocketState>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class SocketStateManager extends com.liveperson.infra.IDisposable {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.SocketStateManager>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export class SocketToRestCommand {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.SocketToRestCommand>;
						public constructor();
						public getData(param0: com.liveperson.infra.network.socket.BaseSocketRequest<any,any>): string;
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
					export class SocketWrapperOK extends com.liveperson.infra.network.socket.ISocketWrapper {
						public static class: java.lang.Class<com.liveperson.infra.network.socket.SocketWrapperOK>;
						public disconnect(): void;
						public connect(param0: com.liveperson.infra.model.SocketConnectionParams): void;
						public constructor(param0: com.liveperson.infra.network.socket.ISocketCallbacks);
						public send(param0: string): void;
					}
					export module SocketWrapperOK {
						export class WebSocketCallbacks {
							public static class: java.lang.Class<com.liveperson.infra.network.socket.SocketWrapperOK.WebSocketCallbacks>;
							public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
							public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
							public onMessage(param0: okhttp3.WebSocket, param1: string): void;
							public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
							public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
							public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
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
			export module network {
				export module socket {
					export module state {
						export class SocketStateAdapter extends com.liveperson.infra.network.socket.state.SocketStateListener {
							public static class: java.lang.Class<com.liveperson.infra.network.socket.state.SocketStateAdapter>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module network {
				export module socket {
					export module state {
						export class SocketStateListener {
							public static class: java.lang.Class<com.liveperson.infra.network.socket.state.SocketStateListener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.network.socket.state.SocketStateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
								onDisconnected(param0: string, param1: number): void;
							});
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

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export abstract class BaseInfraState extends com.liveperson.infra.statemachine.interfaces.IState {
					public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.BaseInfraState>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export class InfraStateMachine extends com.liveperson.infra.statemachine.BaseStateMachine {
					public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.InfraStateMachine>;
					public changeState(param0: any): void;
					public setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
					public constructor(param0: string);
					public changeStateAndPassEvent(param0: com.liveperson.infra.statemachine.interfaces.IState, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public activeState(): any;
					public postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public changeState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					public shutDownSDK(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
					public isSDKInitialized(): boolean;
					public postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): java.lang.Runnable;
					public getTag(): string;
					public apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public activeState(): com.liveperson.infra.statemachine.interfaces.IState;
					public shutDown(): void;
					public constructor();
					public initActiveState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					public initSDK(param0: com.liveperson.infra.statemachine.InitProcess): void;
					public logoutSDK(param0: com.liveperson.infra.statemachine.LogoutProcess): void;
					public changeStateAndPassEvent(param0: any, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public initActiveState(param0: any): void;
				}
				export module InfraStateMachine {
					export class Idle extends com.liveperson.infra.sdkstatemachine.BaseInfraState {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.InfraStateMachine.Idle>;
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
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.InfraStateMachine.InProgressState>;
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
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.InfraStateMachine.Initialized>;
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
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.InfraStateMachine.Initializing>;
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
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.InfraStateMachine.Logout>;
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
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.InfraStateMachine.ShuttingDown>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module events {
					export class InitEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.events.InitEvent>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module events {
					export class LogoutEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.events.LogoutEvent>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module events {
					export class PreLogoutCompletedEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.events.PreLogoutCompletedEvent>;
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public constructor();
						public constructor(param0: string);
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
				export module events {
					export class ShutDownCompletedEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.events.ShutDownCompletedEvent>;
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public constructor();
						public constructor(param0: string);
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
				export module events {
					export class ShutDownEvent extends com.liveperson.infra.statemachine.BaseEvent {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.events.ShutDownEvent>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module sdkstatemachine {
				export module init {
					export class InfraInitData {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.init.InfraInitData>;
						public constructor(param0: string, param1: com.liveperson.infra.Interceptors);
						public getSdkVersion(): string;
						public getInterceptors(): com.liveperson.infra.Interceptors;
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
					export class PreLogoutCompletionListener {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.logout.PreLogoutCompletionListener>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.logout.PreLogoutCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							preLogoutCompleted(): void;
							preLogoutFailed(param0: java.lang.Exception): void;
						});
						public constructor();
						public preLogoutFailed(param0: java.lang.Exception): void;
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
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.shutdown.ShutDown>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.shutdown.ShutDown interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							shutDown(): void;
						});
						public constructor();
						public shutDown(): void;
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
					export class ShutDownAsync {
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.shutdown.ShutDownAsync>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.shutdown.ShutDownAsync interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
						});
						public constructor();
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
						public static class: java.lang.Class<com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							shutDownCompleted(): void;
							shutDownFailed(): void;
						});
						public constructor();
						public shutDownFailed(): void;
						public shutDownCompleted(): void;
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
				export abstract class BaseEvent extends com.liveperson.infra.statemachine.interfaces.IEvent {
					public static class: java.lang.Class<com.liveperson.infra.statemachine.BaseEvent>;
					public toString(): string;
					public constructor(param0: string);
					public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class BaseStateMachine implements com.liveperson.infra.statemachine.interfaces.IStateMachine<any>, com.liveperson.infra.sdkstatemachine.shutdown.ShutDown {
					public static class: java.lang.Class<com.liveperson.infra.statemachine.BaseStateMachine>;
					public changeState(param0: any): void;
					public setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
					public constructor(param0: string);
					public changeStateAndPassEvent(param0: com.liveperson.infra.statemachine.interfaces.IState, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public activeState(): any;
					public postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public changeState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					public isInitialized(): boolean;
					public postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): java.lang.Runnable;
					public getTag(): string;
					public apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public activeState(): com.liveperson.infra.statemachine.interfaces.IState;
					public shutDown(): void;
					public cancelDelayedEvent(param0: java.lang.Runnable): void;
					public initActiveState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
					public changeStateAndPassEvent(param0: any, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public initActiveState(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class InitProcess {
					public static class: java.lang.Class<com.liveperson.infra.statemachine.InitProcess>;
					public getInitCallback(): com.liveperson.infra.callbacks.InitLivePersonCallBack;
					public constructor();
					public init(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class LogoutProcess {
					public static class: java.lang.Class<com.liveperson.infra.statemachine.LogoutProcess>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export abstract class ShutDownProcess {
					public static class: java.lang.Class<com.liveperson.infra.statemachine.ShutDownProcess>;
					public getShutDownCallback(): com.liveperson.infra.callbacks.ShutDownLivePersonCallBack;
					public constructor();
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module statemachine {
				export class StateMachineExecutor extends com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor {
					public static class: java.lang.Class<com.liveperson.infra.statemachine.StateMachineExecutor>;
					public shutdown(): void;
					public schedule(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): java.lang.Runnable;
					public post(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
					public cancel(param0: java.lang.Runnable): void;
					public isInitialized(): boolean;
					public constructor(param0: string, param1: com.liveperson.infra.statemachine.interfaces.IStateMachine<any>);
				}
				export module StateMachineExecutor {
					export class RunnableWrapper {
						public static class: java.lang.Class<com.liveperson.infra.statemachine.StateMachineExecutor.RunnableWrapper>;
						public run(): void;
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
					export class IEvent {
						public static class: java.lang.Class<com.liveperson.infra.statemachine.interfaces.IEvent>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IEvent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						});
						public constructor();
						public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
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
						public static class: java.lang.Class<com.liveperson.infra.statemachine.interfaces.IState>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							actionOnEntry(): void;
							actionOnExit(): void;
						});
						public constructor();
						public actionOnExit(): void;
						public actionOnEntry(): void;
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
					export class IStateMachine<STATE>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.statemachine.interfaces.IStateMachine<any>>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IStateMachine<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							activeState(): STATE;
							apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
							postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
							postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): java.lang.Runnable;
							changeState(param0: STATE): void;
							changeStateAndPassEvent(param0: STATE, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
							getTag(): string;
							initActiveState(param0: STATE): void;
							setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
						});
						public constructor();
						public setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
						public postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): java.lang.Runnable;
						public apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public changeState(param0: STATE): void;
						public initActiveState(param0: STATE): void;
						public postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public getTag(): string;
						public activeState(): STATE;
						public changeStateAndPassEvent(param0: STATE, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
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
					export class IStateMachineExecutor {
						public static class: java.lang.Class<com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							post(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
							schedule(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): java.lang.Runnable;
							cancel(param0: java.lang.Runnable): void;
							shutdown(): void;
							isInitialized(): boolean;
						});
						public constructor();
						public shutdown(): void;
						public cancel(param0: java.lang.Runnable): void;
						public schedule(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): java.lang.Runnable;
						public post(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public isInitialized(): boolean;
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
				export class AccessibilityChecker {
					public static class: java.lang.Class<com.liveperson.infra.utils.AccessibilityChecker>;
					public constructor();
					public static exploreByTouchEnabled(param0: globalAndroid.content.Context): boolean;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class CollectionsUtil {
					public static class: java.lang.Class<com.liveperson.infra.utils.CollectionsUtil>;
					public constructor();
					public static filter(param0: java.util.Collection, param1: com.liveperson.infra.utils.CollectionsUtil.Predicate<any>): java.util.ArrayList;
				}
				export module CollectionsUtil {
					export class Predicate<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.utils.CollectionsUtil.Predicate<any>>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.CollectionsUtil$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							test(param0: T): boolean;
						});
						public constructor();
						public test(param0: T): boolean;
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
				export class DateUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.DateUtils>;
					public static isTomorrow(param0: number): boolean;
					public static isInTheLast24hours(param0: number): boolean;
					public static getBeginningOfDayTime(param0: number): number;
					public static getFormattedDateAndTime(param0: string, param1: number, param2: number, param3: number): string;
					public static getDateFormat(param0: string, param1: number, param2: number): java.text.DateFormat;
					public static getEndOfToday(): number;
					public static getFormattedTime(param0: string, param1: number, param2: number): string;
					public static getFormattedDate(param0: string, param1: number, param2: number): string;
					public constructor();
					public static isYesterday(param0: number): boolean;
					public static getFormattedTime(param0: string, param1: number, param2: number, param3: string): string;
					public static isToday(param0: number): boolean;
					public static getDurationString(param0: number): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export abstract class DetectHeadsetUnpluggedBroadcastReceiver {
					public static class: java.lang.Class<com.liveperson.infra.utils.DetectHeadsetUnpluggedBroadcastReceiver>;
					public static TAG: string;
					public onUnpluggedHeadset(): void;
					public constructor();
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class DispatchQueue implements com.liveperson.infra.IDisposable {
					public static class: java.lang.Class<com.liveperson.infra.utils.DispatchQueue>;
					public unregisterQueueIdleCallbacks(): void;
					public postRunnable(param0: java.lang.Runnable, param1: number): void;
					public constructor(param0: string);
					public postRunnable(param0: java.lang.Runnable): void;
					public removeMessage(param0: number): boolean;
					public cleanupQueue(): void;
					public dispose(): void;
					public isCurrentThread(): boolean;
					public constructor(param0: string, param1: com.liveperson.infra.network.socket.IdleQueueHandler);
					public onLooperPrepared(): void;
					public sendMessage(param0: globalAndroid.os.Message): void;
					public setHandleMessageCallback(param0: com.liveperson.infra.utils.HandleMessageCallback): void;
					public constructor(param0: string, param1: number, param2: com.liveperson.infra.network.socket.IdleQueueHandler);
					public constructor(param0: string, param1: number);
					public removeRunnable(param0: java.lang.Runnable): void;
					public sendMessage(param0: globalAndroid.os.Message, param1: number): void;
					public queueIdle(): boolean;
				}
				export module DispatchQueue {
					export class DispatchQueueHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.DispatchQueue.DispatchQueueHandler>;
						public handleMessage(param0: globalAndroid.os.Message): void;
						public constructor(param0: globalAndroid.os.Looper, param1: com.liveperson.infra.utils.DispatchQueue);
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
				export class EncryptionVersion {
					public static class: java.lang.Class<com.liveperson.infra.utils.EncryptionVersion>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class FileUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.FileUtils>;
					public static copyFile(param0: java.io.File, param1: java.io.File): boolean;
					public static deleteAllSharedFiles(): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class HandleMessageCallback {
					public static class: java.lang.Class<com.liveperson.infra.utils.HandleMessageCallback>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.utils.HandleMessageCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHandleMessage(param0: globalAndroid.os.Message): void;
					});
					public constructor();
					public onHandleMessage(param0: globalAndroid.os.Message): void;
				}
				export module HandleMessageCallback {
					export class NullHandleMessageCallback extends com.liveperson.infra.utils.HandleMessageCallback {
						public static class: java.lang.Class<com.liveperson.infra.utils.HandleMessageCallback.NullHandleMessageCallback>;
						public constructor();
						public onHandleMessage(param0: globalAndroid.os.Message): void;
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
				export class ImageUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.ImageUtils>;
					public static TAG: string;
					public static PNG: string;
					public static JPG: string;
					public static SAMSUNG: string;
					public static IMAGES_FOLDER: string;
					public static FULL_IMAGE_FOLDER: string;
					public static PREVIEW_IMAGE_FOLDER: string;
					public static saveBitmapToDisk(param0: native.Array<number>, param1: java.io.File): string;
					public static saveBitmapToDisk(param0: globalAndroid.content.Context, param1: native.Array<number>, param2: string, param3: com.liveperson.infra.utils.ImageUtils.ImageFolderType, param4: string): string;
					public static bitmapToBase64(param0: native.Array<number>): string;
					public static getBitmap(param0: string): globalAndroid.graphics.Bitmap;
					public static getFilePath(param0: globalAndroid.content.Context, param1: string, param2: string): java.io.File;
					public static bitmapToBase64(param0: globalAndroid.graphics.Bitmap): string;
					public static saveBitmapToDisk(param0: globalAndroid.content.Context, param1: native.Array<number>, param2: string, param3: string, param4: com.liveperson.infra.utils.ImageUtils.ImageFolderType): string;
					public static createImageOnCanvas(param0: globalAndroid.content.Context, param1: globalAndroid.view.WindowManager, param2: globalAndroid.graphics.Bitmap): globalAndroid.graphics.drawable.Drawable;
					public static createResizedBitmap(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: boolean): globalAndroid.graphics.Bitmap;
					public static createBitmapFromURL(param0: globalAndroid.content.Context, param1: string, param2: number, param3: number): globalAndroid.graphics.Bitmap;
					public static getImageRotation(param0: string, param1: boolean): number;
					public static getOutputStreamFromBitmap(param0: globalAndroid.graphics.Bitmap, param1: number, param2: string): native.Array<number>;
					public static base64ToByteArray(param0: string): native.Array<number>;
					public constructor();
					public static getImagePath(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri, param2: string): string;
					public static saveBase64ToDisk(param0: globalAndroid.content.Context, param1: string, param2: string): string;
					public static createImageFileForCamera(param0: globalAndroid.content.Context, param1: string): globalAndroid.net.Uri;
					public static decodeExifOrientation(param0: number, param1: boolean): number;
				}
				export module ImageUtils {
					export class ImageFolderType {
						public static class: java.lang.Class<com.liveperson.infra.utils.ImageUtils.ImageFolderType>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LPAudioUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.LPAudioUtils>;
					public static TAG: string;
					public static VOICE_FOLDER: string;
					public static generateVoiceFileName(): string;
					public bindPlayingAudio(param0: string, param1: com.liveperson.infra.utils.LPAudioUtils.PlaybackCallback): void;
					public static getDuration(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
					public stopPlayback(): void;
					public getVoiceFolder(): string;
					public saveByteArrayToDisk(param0: native.Array<number>): string;
					public getCurrentPlayingLocation(): number;
					public startRecording(param0: string, param1: number, param2: com.liveperson.infra.utils.LPAudioUtils.RecordingResultCallback): com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
					public playAudio(param0: string, param1: string, param2: com.liveperson.infra.utils.LPAudioUtils.PlaybackCallback): void;
					public playSound(param0: number): void;
					public constructor();
					public stopRecording(param0: com.liveperson.infra.ICallback<string,java.lang.Exception>): void;
					public pause(): void;
					public isPlaying(param0: string): boolean;
					public getPlayingAudioManager(): com.liveperson.infra.controller.PlayingAudioManager;
					public getCurrentPlayingDuration(): number;
					public isRecording(): boolean;
				}
				export module LPAudioUtils {
					export class LPMediaPlayer {
						public static class: java.lang.Class<com.liveperson.infra.utils.LPAudioUtils.LPMediaPlayer>;
						public isPlaying(param0: string): boolean;
						public constructor(param0: com.liveperson.infra.utils.LPAudioUtils, param1: string, param2: string);
						public getLocalFileUrl(): string;
						public isCurrentlyPlaying(): boolean;
						public getCallbackId(): string;
					}
					export class LPRecorderStatus {
						public static class: java.lang.Class<com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus>;
						public static PermissionDenied: com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static Failed: com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static Started: com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static Finished: com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static valueOf(param0: string): com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus;
						public static values(): native.Array<com.liveperson.infra.utils.LPAudioUtils.LPRecorderStatus>;
					}
					export class PlaybackCallback {
						public static class: java.lang.Class<com.liveperson.infra.utils.LPAudioUtils.PlaybackCallback>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.LPAudioUtils$PlaybackCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onPlaybackStarted(param0: string, param1: number): void;
							onPlaybackCompleted(param0: boolean, param1: string): void;
						});
						public constructor();
						public onPlaybackStarted(param0: string, param1: number): void;
						public onPlaybackCompleted(param0: boolean, param1: string): void;
					}
					export class RecordingResultCallback {
						public static class: java.lang.Class<com.liveperson.infra.utils.LPAudioUtils.RecordingResultCallback>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.LPAudioUtils$RecordingResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMaxRecordingDurationReached(param0: string): void;
							onRecordingInterrupted(param0: string): void;
						});
						public constructor();
						public onRecordingInterrupted(param0: string): void;
						public onMaxRecordingDurationReached(param0: string): void;
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
					public static class: java.lang.Class<com.liveperson.infra.utils.LPDeprecated>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.utils.LPDeprecated interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						since(): number;
					});
					public constructor();
					public since(): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LPInitProvider {
					public static class: java.lang.Class<com.liveperson.infra.utils.LPInitProvider>;
					public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
					public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
					public constructor();
					public onCreate(): boolean;
					public getType(param0: globalAndroid.net.Uri): string;
					public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
					public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LinkPreviewCallback {
					public static class: java.lang.Class<com.liveperson.infra.utils.LinkPreviewCallback>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.utils.LinkPreviewCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPre(): void;
						onPos(param0: com.liveperson.infra.utils.SourceContent, param1: boolean): void;
						clean(): void;
					});
					public constructor();
					public clean(): void;
					public onPos(param0: com.liveperson.infra.utils.SourceContent, param1: boolean): void;
					public onPre(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LinkPreviewLruCache {
					public static class: java.lang.Class<com.liveperson.infra.utils.LinkPreviewLruCache>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LocalBroadcast {
					public static class: java.lang.Class<com.liveperson.infra.utils.LocalBroadcast>;
					public constructor();
					public static sendBroadcast(param0: string): void;
					public static sendBroadcast(param0: string, param1: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class LocaleUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.LocaleUtils>;
					public static getInstance(): com.liveperson.infra.utils.LocaleUtils;
					public clearEngagementLanguageCode(): void;
					public getLocaleCode(): string;
					public init(param0: globalAndroid.content.Context): void;
					public setEngagementLanguageCode(param0: string): void;
					public getLocale(): java.util.Locale;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class MaskedMessage {
					public static class: java.lang.Class<com.liveperson.infra.utils.MaskedMessage>;
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

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class MessageValidator {
					public static class: java.lang.Class<com.liveperson.infra.utils.MessageValidator>;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public maskMessage(param0: string, param1: boolean): com.liveperson.infra.utils.MaskedMessage;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class PicassoUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.PicassoUtils>;
					public constructor();
					public static get(param0: globalAndroid.content.Context): com.liveperson.infra.utils.picasso.Picasso;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class Queue<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.liveperson.infra.utils.Queue<any>>;
					public toString(): string;
					public constructor();
					public poll(): T;
					public add(param0: T): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class RegexUtil {
					public static class: java.lang.Class<com.liveperson.infra.utils.RegexUtil>;
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
					public constructor();
					public static pregMatchAllImages(param0: string, param1: string): java.util.List<string>;
					public static pregMatchAllExtraImages(param0: string, param1: string): java.util.List<string>;
					public static pregMatchAll(param0: string, param1: string, param2: number): java.util.List<string>;
					public static pregMatch(param0: string, param1: string, param2: number): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class SDKUncaughtExceptionHandler {
					public static class: java.lang.Class<com.liveperson.infra.utils.SDKUncaughtExceptionHandler>;
					public static getInstance(param0: java.lang.Thread.UncaughtExceptionHandler): com.liveperson.infra.utils.SDKUncaughtExceptionHandler;
					public uncaughtException(param0: java.lang.Thread, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class SourceContent {
					public static class: java.lang.Class<com.liveperson.infra.utils.SourceContent>;
					public getTitle(): string;
					public setMetaTags(param0: java.util.HashMap<string,string>): void;
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
					public setCanonicalUrl(param0: string): void;
					public getFinalUrl(): string;
					public isSuccess(): boolean;
					public getRaw(): string;
					public getMetaTags(): java.util.HashMap<string,string>;
					public setRaw(param0: string): void;
					public getCanonicalUrl(): string;
					public getHtmlCode(): string;
					public setSiteName(param0: string): void;
					public setFinalUrl(param0: string): void;
					public getDescription(): string;
					public setUrlData(param0: native.Array<string>): void;
					public setSuccess(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class Synchronizer<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.liveperson.infra.utils.Synchronizer<any>>;
					public isWaiting(): boolean;
					public getAllHoldersResults(): java.util.ArrayList<T>;
					public isHasBeenCanceled(): boolean;
					public constructor(param0: com.liveperson.infra.utils.Synchronizer.SynchronizerCallback<T>);
					public createHolder(): com.liveperson.infra.utils.Synchronizer.Holder;
					public done(): void;
					public cancel(): void;
					public didAllDone(): boolean;
				}
				export module Synchronizer {
					export class Holder {
						public static class: java.lang.Class<com.liveperson.infra.utils.Synchronizer.Holder>;
						public release(): void;
						public release(param0: any): void;
					}
					export class SynchronizerCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.utils.Synchronizer.SynchronizerCallback<any>>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.Synchronizer$SynchronizerCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							done(param0: java.util.ArrayList<T>): void;
						});
						public constructor();
						public done(param0: java.util.ArrayList<T>): void;
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
				export class TextCrawler {
					public static class: java.lang.Class<com.liveperson.infra.utils.TextCrawler>;
					public static TIMEOUT_IN_MILLI: number;
					public getSourceContent(): com.liveperson.infra.utils.SourceContent;
					public constructor();
					public makePreview(param0: com.liveperson.infra.utils.LinkPreviewCallback, param1: string): void;
					public parseHtml(param0: native.Array<string>): void;
				}
				export module TextCrawler {
					export class GetCode extends globalAndroid.os.AsyncTask<string,java.lang.Void,java.lang.Void> {
						public static class: java.lang.Class<com.liveperson.infra.utils.TextCrawler.GetCode>;
						public isNull(): boolean;
						public doInBackground(param0: native.Array<string>): java.lang.Void;
						public onPreExecute(): void;
						public onPostExecute(param0: java.lang.Void): void;
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
				export class ThreadPoolExecutor {
					public static class: java.lang.Class<com.liveperson.infra.utils.ThreadPoolExecutor>;
					public static execute(param0: java.lang.Runnable): void;
					public static executeDelayed(param0: java.lang.Runnable, param1: number): void;
					public constructor();
					public static killAll(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class TlsUtil {
					public static class: java.lang.Class<com.liveperson.infra.utils.TlsUtil>;
					public constructor();
					public static enableTls12ForKitKat(param0: okhttp3.OkHttpClient.Builder): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class UIUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.UIUtils>;
					public static hideKeyboard(param0: globalAndroid.app.Activity): void;
					public constructor();
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
					public static class: java.lang.Class<com.liveperson.infra.utils.UniqueID>;
					public constructor();
					public static createUniqueMessageEventId(): string;
					public static getUniqueID(): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class Utils {
					public static class: java.lang.Class<com.liveperson.infra.utils.Utils>;
					public static SHA256: string;
					public static SHA1: string;
					public static getResources(): globalAndroid.content.res.Resources;
					public constructor();
					public static isValidCertificateKey(param0: string): boolean;
					public static hexStringToByteArray(param0: string): native.Array<number>;
					public static tryParse(param0: any, param1: number): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export class VersionUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.VersionUtils>;
					public static TAG: string;
					public constructor();
					public static isValidSdkVersion(param0: string): boolean;
					public static isVersionsEqual(param0: string, param1: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module utils {
				export module picasso {
					export abstract class Action<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Action<any>>;
					}
					export module Action {
						export class RequestWeakReference<M>  extends java.lang.ref.WeakReference<any> {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Action.RequestWeakReference<any>>;
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
			export module utils {
				export module picasso {
					export class AssetRequestHandler extends com.liveperson.infra.utils.picasso.RequestHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.AssetRequestHandler>;
						public static ANDROID_ASSET: string;
						public load(param0: com.liveperson.infra.utils.picasso.Request, param1: number): com.liveperson.infra.utils.picasso.RequestHandler.Result;
						public canHandleRequest(param0: com.liveperson.infra.utils.picasso.Request): boolean;
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
				export module picasso {
					export class BitmapHunter {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.BitmapHunter>;
						public run(): void;
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
				export module picasso {
					export class Cache {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Cache>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.picasso.Cache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(param0: string): globalAndroid.graphics.Bitmap;
							set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
							size(): number;
							maxSize(): number;
							clear(): void;
							clearKeyUri(param0: string): void;
							<clinit>(): void;
						});
						public constructor();
						public static NONE: com.liveperson.infra.utils.picasso.Cache;
						public set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
						public maxSize(): number;
						public clear(): void;
						public size(): number;
						public get(param0: string): globalAndroid.graphics.Bitmap;
						public clearKeyUri(param0: string): void;
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
				export module picasso {
					export class Callback {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Callback>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.picasso.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(): void;
							onError(param0: java.lang.Exception): void;
						});
						public constructor();
						public onError(param0: java.lang.Exception): void;
						public onSuccess(): void;
					}
					export module Callback {
						export class EmptyCallback extends com.liveperson.infra.utils.picasso.Callback {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Callback.EmptyCallback>;
							public constructor();
							public onSuccess(): void;
							public onError(param0: java.lang.Exception): void;
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
			export module utils {
				export module picasso {
					export class ContactsPhotoRequestHandler extends com.liveperson.infra.utils.picasso.RequestHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.ContactsPhotoRequestHandler>;
						public load(param0: com.liveperson.infra.utils.picasso.Request, param1: number): com.liveperson.infra.utils.picasso.RequestHandler.Result;
						public canHandleRequest(param0: com.liveperson.infra.utils.picasso.Request): boolean;
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
				export module picasso {
					export class ContentStreamRequestHandler extends com.liveperson.infra.utils.picasso.RequestHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.ContentStreamRequestHandler>;
						public load(param0: com.liveperson.infra.utils.picasso.Request, param1: number): com.liveperson.infra.utils.picasso.RequestHandler.Result;
						public canHandleRequest(param0: com.liveperson.infra.utils.picasso.Request): boolean;
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
				export module picasso {
					export class DeferredRequestCreator {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.DeferredRequestCreator>;
						public onViewAttachedToWindow(param0: globalAndroid.view.View): void;
						public onPreDraw(): boolean;
						public onViewDetachedFromWindow(param0: globalAndroid.view.View): void;
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
				export module picasso {
					export class Dispatcher {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Dispatcher>;
					}
					export module Dispatcher {
						export class DispatcherHandler {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Dispatcher.DispatcherHandler>;
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
						export class DispatcherThread {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Dispatcher.DispatcherThread>;
						}
						export class NetworkBroadcastReceiver {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Dispatcher.NetworkBroadcastReceiver>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
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
			export module utils {
				export module picasso {
					export class Downloader {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Downloader>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.picasso.Downloader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							load(param0: okhttp3.Request): okhttp3.Response;
							shutdown(): void;
						});
						public constructor();
						public shutdown(): void;
						public load(param0: okhttp3.Request): okhttp3.Response;
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
				export module picasso {
					export class FetchAction extends com.liveperson.infra.utils.picasso.Action<any> {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.FetchAction>;
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
				export module picasso {
					export class FileRequestHandler extends com.liveperson.infra.utils.picasso.ContentStreamRequestHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.FileRequestHandler>;
						public load(param0: com.liveperson.infra.utils.picasso.Request, param1: number): com.liveperson.infra.utils.picasso.RequestHandler.Result;
						public canHandleRequest(param0: com.liveperson.infra.utils.picasso.Request): boolean;
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
				export module picasso {
					export class GetAction extends com.liveperson.infra.utils.picasso.Action<java.lang.Void> {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.GetAction>;
						public error(param0: java.lang.Exception): void;
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
				export module picasso {
					export class ImageViewAction extends com.liveperson.infra.utils.picasso.Action<globalAndroid.widget.ImageView> {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.ImageViewAction>;
						public error(param0: java.lang.Exception): void;
						public complete(param0: globalAndroid.graphics.Bitmap, param1: com.liveperson.infra.utils.picasso.Picasso.LoadedFrom): void;
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
				export module picasso {
					export class LruCache extends com.liveperson.infra.utils.picasso.Cache {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.LruCache>;
						public set(param0: string, param1: globalAndroid.graphics.Bitmap): void;
						public evictionCount(): number;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: number);
						public maxSize(): number;
						public clear(): void;
						public putCount(): number;
						public size(): number;
						public hitCount(): number;
						public missCount(): number;
						public get(param0: string): globalAndroid.graphics.Bitmap;
						public clearKeyUri(param0: string): void;
					}
					export module LruCache {
						export class BitmapAndSize {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.LruCache.BitmapAndSize>;
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
			export module utils {
				export module picasso {
					export class MarkableInputStream {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.MarkableInputStream>;
						public reset(param0: number): void;
						public savePosition(param0: number): number;
						public read(): number;
						public skip(param0: number): number;
						public read(param0: native.Array<number>): number;
						public close(): void;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public allowMarksToExpire(param0: boolean): void;
						public reset(): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public available(): number;
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
				export module picasso {
					export class MediaStoreRequestHandler extends com.liveperson.infra.utils.picasso.ContentStreamRequestHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.MediaStoreRequestHandler>;
						public load(param0: com.liveperson.infra.utils.picasso.Request, param1: number): com.liveperson.infra.utils.picasso.RequestHandler.Result;
						public canHandleRequest(param0: com.liveperson.infra.utils.picasso.Request): boolean;
					}
					export module MediaStoreRequestHandler {
						export class PicassoKind {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.MediaStoreRequestHandler.PicassoKind>;
							public static MICRO: com.liveperson.infra.utils.picasso.MediaStoreRequestHandler.PicassoKind;
							public static MINI: com.liveperson.infra.utils.picasso.MediaStoreRequestHandler.PicassoKind;
							public static FULL: com.liveperson.infra.utils.picasso.MediaStoreRequestHandler.PicassoKind;
							public static valueOf(param0: string): com.liveperson.infra.utils.picasso.MediaStoreRequestHandler.PicassoKind;
							public static values(): native.Array<com.liveperson.infra.utils.picasso.MediaStoreRequestHandler.PicassoKind>;
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
			export module utils {
				export module picasso {
					export class MemoryPolicy {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.MemoryPolicy>;
						public static NO_CACHE: com.liveperson.infra.utils.picasso.MemoryPolicy;
						public static NO_STORE: com.liveperson.infra.utils.picasso.MemoryPolicy;
						public static values(): native.Array<com.liveperson.infra.utils.picasso.MemoryPolicy>;
						public static valueOf(param0: string): com.liveperson.infra.utils.picasso.MemoryPolicy;
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
				export module picasso {
					export class NetworkPolicy {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.NetworkPolicy>;
						public static NO_CACHE: com.liveperson.infra.utils.picasso.NetworkPolicy;
						public static NO_STORE: com.liveperson.infra.utils.picasso.NetworkPolicy;
						public static OFFLINE: com.liveperson.infra.utils.picasso.NetworkPolicy;
						public static isOfflineOnly(param0: number): boolean;
						public static values(): native.Array<com.liveperson.infra.utils.picasso.NetworkPolicy>;
						public static shouldWriteToDiskCache(param0: number): boolean;
						public static shouldReadFromDiskCache(param0: number): boolean;
						public static valueOf(param0: string): com.liveperson.infra.utils.picasso.NetworkPolicy;
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
				export module picasso {
					export class NetworkRequestHandler extends com.liveperson.infra.utils.picasso.RequestHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.NetworkRequestHandler>;
						public load(param0: com.liveperson.infra.utils.picasso.Request, param1: number): com.liveperson.infra.utils.picasso.RequestHandler.Result;
						public canHandleRequest(param0: com.liveperson.infra.utils.picasso.Request): boolean;
					}
					export module NetworkRequestHandler {
						export class ContentLengthException {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.NetworkRequestHandler.ContentLengthException>;
						}
						export class ResponseException {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.NetworkRequestHandler.ResponseException>;
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
			export module utils {
				export module picasso {
					export class OkHttp3Downloader extends com.liveperson.infra.utils.picasso.Downloader {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.OkHttp3Downloader>;
						public constructor(param0: okhttp3.OkHttpClient);
						public constructor(param0: java.io.File, param1: number);
						public shutdown(): void;
						public constructor(param0: globalAndroid.content.Context);
						public load(param0: okhttp3.Request): okhttp3.Response;
						public constructor(param0: java.io.File);
						public constructor(param0: okhttp3.Call.Factory);
						public constructor(param0: globalAndroid.content.Context, param1: number);
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
				export module picasso {
					export class Picasso {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Picasso>;
						public isLoggingEnabled(): boolean;
						public static setSingletonInstance(param0: com.liveperson.infra.utils.picasso.Picasso): void;
						public load(param0: number): com.liveperson.infra.utils.picasso.RequestCreator;
						public areIndicatorsEnabled(): boolean;
						public invalidate(param0: string): void;
						public cancelRequest(param0: globalAndroid.widget.RemoteViews, param1: number): void;
						public setLoggingEnabled(param0: boolean): void;
						public load(param0: java.io.File): com.liveperson.infra.utils.picasso.RequestCreator;
						public cancelTag(param0: any): void;
						public cancelRequest(param0: com.liveperson.infra.utils.picasso.Target): void;
						public load(param0: string): com.liveperson.infra.utils.picasso.RequestCreator;
						public shutdown(): void;
						public static get(): com.liveperson.infra.utils.picasso.Picasso;
						public setIndicatorsEnabled(param0: boolean): void;
						public invalidate(param0: java.io.File): void;
						public load(param0: globalAndroid.net.Uri): com.liveperson.infra.utils.picasso.RequestCreator;
						public resumeTag(param0: any): void;
						public getSnapshot(): com.liveperson.infra.utils.picasso.StatsSnapshot;
						public invalidate(param0: globalAndroid.net.Uri): void;
						public cancelRequest(param0: globalAndroid.widget.ImageView): void;
						public pauseTag(param0: any): void;
					}
					export module Picasso {
						export class Builder {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Picasso.Builder>;
							public memoryCache(param0: com.liveperson.infra.utils.picasso.Cache): com.liveperson.infra.utils.picasso.Picasso.Builder;
							public executor(param0: java.util.concurrent.ExecutorService): com.liveperson.infra.utils.picasso.Picasso.Builder;
							public loggingEnabled(param0: boolean): com.liveperson.infra.utils.picasso.Picasso.Builder;
							public addRequestHandler(param0: com.liveperson.infra.utils.picasso.RequestHandler): com.liveperson.infra.utils.picasso.Picasso.Builder;
							public requestTransformer(param0: com.liveperson.infra.utils.picasso.Picasso.RequestTransformer): com.liveperson.infra.utils.picasso.Picasso.Builder;
							public indicatorsEnabled(param0: boolean): com.liveperson.infra.utils.picasso.Picasso.Builder;
							public listener(param0: com.liveperson.infra.utils.picasso.Picasso.Listener): com.liveperson.infra.utils.picasso.Picasso.Builder;
							public defaultBitmapConfig(param0: globalAndroid.graphics.Bitmap.Config): com.liveperson.infra.utils.picasso.Picasso.Builder;
							public build(): com.liveperson.infra.utils.picasso.Picasso;
							public constructor(param0: globalAndroid.content.Context);
							public downloader(param0: com.liveperson.infra.utils.picasso.Downloader): com.liveperson.infra.utils.picasso.Picasso.Builder;
						}
						export class CleanupThread {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Picasso.CleanupThread>;
							public run(): void;
						}
						export class Listener {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Picasso.Listener>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.utils.picasso.Picasso$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onImageLoadFailed(param0: com.liveperson.infra.utils.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
							});
							public constructor();
							public onImageLoadFailed(param0: com.liveperson.infra.utils.picasso.Picasso, param1: globalAndroid.net.Uri, param2: java.lang.Exception): void;
						}
						export class LoadedFrom {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Picasso.LoadedFrom>;
							public static MEMORY: com.liveperson.infra.utils.picasso.Picasso.LoadedFrom;
							public static DISK: com.liveperson.infra.utils.picasso.Picasso.LoadedFrom;
							public static NETWORK: com.liveperson.infra.utils.picasso.Picasso.LoadedFrom;
							public static valueOf(param0: string): com.liveperson.infra.utils.picasso.Picasso.LoadedFrom;
							public static values(): native.Array<com.liveperson.infra.utils.picasso.Picasso.LoadedFrom>;
						}
						export class Priority {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Picasso.Priority>;
							public static LOW: com.liveperson.infra.utils.picasso.Picasso.Priority;
							public static NORMAL: com.liveperson.infra.utils.picasso.Picasso.Priority;
							public static HIGH: com.liveperson.infra.utils.picasso.Picasso.Priority;
							public static values(): native.Array<com.liveperson.infra.utils.picasso.Picasso.Priority>;
							public static valueOf(param0: string): com.liveperson.infra.utils.picasso.Picasso.Priority;
						}
						export class RequestTransformer {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Picasso.RequestTransformer>;
							/**
							 * Constructs a new instance of the com.liveperson.infra.utils.picasso.Picasso$RequestTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								transformRequest(param0: com.liveperson.infra.utils.picasso.Request): com.liveperson.infra.utils.picasso.Request;
								<clinit>(): void;
							});
							public constructor();
							public static IDENTITY: com.liveperson.infra.utils.picasso.Picasso.RequestTransformer;
							public transformRequest(param0: com.liveperson.infra.utils.picasso.Request): com.liveperson.infra.utils.picasso.Request;
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
			export module utils {
				export module picasso {
					export class PicassoDrawable {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.PicassoDrawable>;
						public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public setAlpha(param0: number): void;
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
				export module picasso {
					export class PicassoExecutorService {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.PicassoExecutorService>;
						public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
					}
					export module PicassoExecutorService {
						export class PicassoFutureTask extends java.util.concurrent.FutureTask<com.liveperson.infra.utils.picasso.BitmapHunter> implements java.lang.Comparable<com.liveperson.infra.utils.picasso.PicassoExecutorService.PicassoFutureTask>  {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.PicassoExecutorService.PicassoFutureTask>;
							public compareTo(param0: com.liveperson.infra.utils.picasso.PicassoExecutorService.PicassoFutureTask): number;
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
			export module utils {
				export module picasso {
					export class PicassoProvider {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.PicassoProvider>;
						public constructor();
						public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
						public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
						public onCreate(): boolean;
						public getType(param0: globalAndroid.net.Uri): string;
						public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
						public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
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
				export module picasso {
					export abstract class RemoteViewsAction extends com.liveperson.infra.utils.picasso.Action<com.liveperson.infra.utils.picasso.RemoteViewsAction.RemoteViewsTarget> {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.RemoteViewsAction>;
						public error(param0: java.lang.Exception): void;
					}
					export module RemoteViewsAction {
						export class AppWidgetAction extends com.liveperson.infra.utils.picasso.RemoteViewsAction {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.RemoteViewsAction.AppWidgetAction>;
						}
						export class NotificationAction extends com.liveperson.infra.utils.picasso.RemoteViewsAction {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.RemoteViewsAction.NotificationAction>;
						}
						export class RemoteViewsTarget {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.RemoteViewsAction.RemoteViewsTarget>;
							public hashCode(): number;
							public equals(param0: any): boolean;
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
			export module utils {
				export module picasso {
					export class Request {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Request>;
						public uri: globalAndroid.net.Uri;
						public resourceId: number;
						public stableKey: string;
						public transformations: java.util.List<com.liveperson.infra.utils.picasso.Transformation>;
						public targetWidth: number;
						public targetHeight: number;
						public centerCrop: boolean;
						public centerCropGravity: number;
						public centerInside: boolean;
						public onlyScaleDown: boolean;
						public rotationDegrees: number;
						public rotationPivotX: number;
						public rotationPivotY: number;
						public hasRotationPivot: boolean;
						public purgeable: boolean;
						public config: globalAndroid.graphics.Bitmap.Config;
						public priority: com.liveperson.infra.utils.picasso.Picasso.Priority;
						public buildUpon(): com.liveperson.infra.utils.picasso.Request.Builder;
						public hasSize(): boolean;
						public toString(): string;
					}
					export module Request {
						export class Builder {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Request.Builder>;
							public constructor(param0: globalAndroid.net.Uri);
							public clearCenterInside(): com.liveperson.infra.utils.picasso.Request.Builder;
							public clearRotation(): com.liveperson.infra.utils.picasso.Request.Builder;
							public clearCenterCrop(): com.liveperson.infra.utils.picasso.Request.Builder;
							public purgeable(): com.liveperson.infra.utils.picasso.Request.Builder;
							public priority(param0: com.liveperson.infra.utils.picasso.Picasso.Priority): com.liveperson.infra.utils.picasso.Request.Builder;
							public centerCrop(): com.liveperson.infra.utils.picasso.Request.Builder;
							public onlyScaleDown(): com.liveperson.infra.utils.picasso.Request.Builder;
							public resize(param0: number, param1: number): com.liveperson.infra.utils.picasso.Request.Builder;
							public transform(param0: java.util.List<any>): com.liveperson.infra.utils.picasso.Request.Builder;
							public config(param0: globalAndroid.graphics.Bitmap.Config): com.liveperson.infra.utils.picasso.Request.Builder;
							public stableKey(param0: string): com.liveperson.infra.utils.picasso.Request.Builder;
							public constructor(param0: number);
							public centerCrop(param0: number): com.liveperson.infra.utils.picasso.Request.Builder;
							public clearResize(): com.liveperson.infra.utils.picasso.Request.Builder;
							public transform(param0: com.liveperson.infra.utils.picasso.Transformation): com.liveperson.infra.utils.picasso.Request.Builder;
							public build(): com.liveperson.infra.utils.picasso.Request;
							public centerInside(): com.liveperson.infra.utils.picasso.Request.Builder;
							public clearOnlyScaleDown(): com.liveperson.infra.utils.picasso.Request.Builder;
							public setUri(param0: globalAndroid.net.Uri): com.liveperson.infra.utils.picasso.Request.Builder;
							public rotate(param0: number): com.liveperson.infra.utils.picasso.Request.Builder;
							public rotate(param0: number, param1: number, param2: number): com.liveperson.infra.utils.picasso.Request.Builder;
							public setResourceId(param0: number): com.liveperson.infra.utils.picasso.Request.Builder;
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
			export module utils {
				export module picasso {
					export class RequestCreator {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.RequestCreator>;
						public fit(): com.liveperson.infra.utils.picasso.RequestCreator;
						public into(param0: com.liveperson.infra.utils.picasso.Target): void;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification, param4: string, param5: com.liveperson.infra.utils.picasso.Callback): void;
						public error(param0: globalAndroid.graphics.drawable.Drawable): com.liveperson.infra.utils.picasso.RequestCreator;
						public rotate(param0: number, param1: number, param2: number): com.liveperson.infra.utils.picasso.RequestCreator;
						public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.liveperson.infra.utils.picasso.RequestCreator;
						public transform(param0: com.liveperson.infra.utils.picasso.Transformation): com.liveperson.infra.utils.picasso.RequestCreator;
						public tag(param0: any): com.liveperson.infra.utils.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification, param4: string): void;
						public into(param0: globalAndroid.widget.ImageView, param1: com.liveperson.infra.utils.picasso.Callback): void;
						public centerCrop(): com.liveperson.infra.utils.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: number, param3: globalAndroid.app.Notification): void;
						public memoryPolicy(param0: com.liveperson.infra.utils.picasso.MemoryPolicy, param1: native.Array<com.liveperson.infra.utils.picasso.MemoryPolicy>): com.liveperson.infra.utils.picasso.RequestCreator;
						public placeholder(param0: number): com.liveperson.infra.utils.picasso.RequestCreator;
						public resizeDimen(param0: number, param1: number): com.liveperson.infra.utils.picasso.RequestCreator;
						public networkPolicy(param0: com.liveperson.infra.utils.picasso.NetworkPolicy, param1: native.Array<com.liveperson.infra.utils.picasso.NetworkPolicy>): com.liveperson.infra.utils.picasso.RequestCreator;
						public get(): globalAndroid.graphics.Bitmap;
						public centerCrop(param0: number): com.liveperson.infra.utils.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>, param3: com.liveperson.infra.utils.picasso.Callback): void;
						public noPlaceholder(): com.liveperson.infra.utils.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.RemoteViews, param1: number, param2: native.Array<number>): void;
						public purgeable(): com.liveperson.infra.utils.picasso.RequestCreator;
						public onlyScaleDown(): com.liveperson.infra.utils.picasso.RequestCreator;
						public config(param0: globalAndroid.graphics.Bitmap.Config): com.liveperson.infra.utils.picasso.RequestCreator;
						public fetch(param0: com.liveperson.infra.utils.picasso.Callback): void;
						public centerInside(): com.liveperson.infra.utils.picasso.RequestCreator;
						public error(param0: number): com.liveperson.infra.utils.picasso.RequestCreator;
						public stableKey(param0: string): com.liveperson.infra.utils.picasso.RequestCreator;
						public rotate(param0: number): com.liveperson.infra.utils.picasso.RequestCreator;
						public fetch(): void;
						public priority(param0: com.liveperson.infra.utils.picasso.Picasso.Priority): com.liveperson.infra.utils.picasso.RequestCreator;
						public noFade(): com.liveperson.infra.utils.picasso.RequestCreator;
						public into(param0: globalAndroid.widget.ImageView): void;
						public resize(param0: number, param1: number): com.liveperson.infra.utils.picasso.RequestCreator;
						public transform(param0: java.util.List<any>): com.liveperson.infra.utils.picasso.RequestCreator;
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
				export module picasso {
					export abstract class RequestHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.RequestHandler>;
						public constructor();
						public load(param0: com.liveperson.infra.utils.picasso.Request, param1: number): com.liveperson.infra.utils.picasso.RequestHandler.Result;
						public canHandleRequest(param0: com.liveperson.infra.utils.picasso.Request): boolean;
					}
					export module RequestHandler {
						export class Result {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.RequestHandler.Result>;
							public getSource(): okio.Source;
							public getLoadedFrom(): com.liveperson.infra.utils.picasso.Picasso.LoadedFrom;
							public constructor(param0: okio.Source, param1: com.liveperson.infra.utils.picasso.Picasso.LoadedFrom);
							public getBitmap(): globalAndroid.graphics.Bitmap;
							public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.liveperson.infra.utils.picasso.Picasso.LoadedFrom);
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
			export module utils {
				export module picasso {
					export class ResourceRequestHandler extends com.liveperson.infra.utils.picasso.RequestHandler {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.ResourceRequestHandler>;
						public load(param0: com.liveperson.infra.utils.picasso.Request, param1: number): com.liveperson.infra.utils.picasso.RequestHandler.Result;
						public canHandleRequest(param0: com.liveperson.infra.utils.picasso.Request): boolean;
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
				export module picasso {
					export class Stats {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Stats>;
					}
					export module Stats {
						export class StatsHandler {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Stats.StatsHandler>;
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
			export module utils {
				export module picasso {
					export class StatsSnapshot {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.StatsSnapshot>;
						public maxSize: number;
						public size: number;
						public cacheHits: number;
						public cacheMisses: number;
						public totalDownloadSize: number;
						public totalOriginalBitmapSize: number;
						public totalTransformedBitmapSize: number;
						public averageDownloadSize: number;
						public averageOriginalBitmapSize: number;
						public averageTransformedBitmapSize: number;
						public downloadCount: number;
						public originalBitmapCount: number;
						public transformedBitmapCount: number;
						public timeStamp: number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
						public dump(): void;
						public dump(param0: java.io.PrintWriter): void;
						public toString(): string;
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
				export module picasso {
					export class Target {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Target>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.picasso.Target interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.liveperson.infra.utils.picasso.Picasso.LoadedFrom): void;
							onBitmapFailed(param0: java.lang.Exception, param1: globalAndroid.graphics.drawable.Drawable): void;
							onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
						});
						public constructor();
						public onBitmapLoaded(param0: globalAndroid.graphics.Bitmap, param1: com.liveperson.infra.utils.picasso.Picasso.LoadedFrom): void;
						public onBitmapFailed(param0: java.lang.Exception, param1: globalAndroid.graphics.drawable.Drawable): void;
						public onPrepareLoad(param0: globalAndroid.graphics.drawable.Drawable): void;
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
				export module picasso {
					export class TargetAction extends com.liveperson.infra.utils.picasso.Action<com.liveperson.infra.utils.picasso.Target> {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.TargetAction>;
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
				export module picasso {
					export class Transformation {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Transformation>;
						/**
						 * Constructs a new instance of the com.liveperson.infra.utils.picasso.Transformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
							key(): string;
						});
						public constructor();
						public transform(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
						public key(): string;
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
				export module picasso {
					export class Utils {
						public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Utils>;
					}
					export module Utils {
						export class PicassoThread {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Utils.PicassoThread>;
							public run(): void;
						}
						export class PicassoThreadFactory {
							public static class: java.lang.Class<com.liveperson.infra.utils.picasso.Utils.PicassoThreadFactory>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.liveperson.infra.ICallback:2
//com.liveperson.infra.database.DataBaseCommand:1
//com.liveperson.infra.database.DataBaseCommand.QueryCallback:1
//com.liveperson.infra.database.DataBaseCommand.QueryCommand:1
//com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback:1
//com.liveperson.infra.network.socket.BaseResponseHandler:2
//com.liveperson.infra.network.socket.BaseSocketRequest:2
//com.liveperson.infra.network.socket.ResponseCallback:1
//com.liveperson.infra.statemachine.interfaces.IStateMachine:1
//com.liveperson.infra.utils.CollectionsUtil.Predicate:1
//com.liveperson.infra.utils.Queue:1
//com.liveperson.infra.utils.Synchronizer:1
//com.liveperson.infra.utils.Synchronizer.SynchronizerCallback:1
//com.liveperson.infra.utils.picasso.Action:1
//com.liveperson.infra.utils.picasso.Action.RequestWeakReference:1

