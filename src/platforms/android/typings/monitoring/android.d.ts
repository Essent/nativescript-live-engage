/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module liveperson {
		export module lp_monitoring_sdk {
			export class BuildConfig {
				public static class: java.lang.Class<com.liveperson.lp_monitoring_sdk.BuildConfig>;
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
		export module monitoring {
			export class Command {
				public static class: java.lang.Class<com.liveperson.monitoring.Command>;
				/**
				 * Constructs a new instance of the com.liveperson.monitoring.Command interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
		export module monitoring {
			export class IMonitoring {
				public static class: java.lang.Class<com.liveperson.monitoring.IMonitoring>;
				/**
				 * Constructs a new instance of the com.liveperson.monitoring.IMonitoring interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getEngagement(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.EngagementCallback): void;
					sendSde(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
					logout(param0: globalAndroid.content.Context): boolean;
					isInitialized(): boolean;
				});
				public constructor();
				public logout(param0: globalAndroid.content.Context): boolean;
				public getEngagement(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.EngagementCallback): void;
				public sendSde(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
				public isInitialized(): boolean;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export class Monitoring extends com.liveperson.monitoring.IMonitoring {
				public static class: java.lang.Class<com.liveperson.monitoring.Monitoring>;
				public static Companion: com.liveperson.monitoring.Monitoring.Companion;
				public setBrandId(param0: string): void;
				public getApplicationContext(): globalAndroid.content.Context;
				public getBrandId(): string;
				public init(param0: com.liveperson.monitoring.sdk.MonitoringInternalInitParams): boolean;
				public getInitialized(): boolean;
				public getParamsCache(): com.liveperson.monitoring.cache.MonitoringParamsCache;
				public sendSde(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
				public setApplicationContext(param0: globalAndroid.content.Context): void;
				public constructor();
				public setInitialized(param0: boolean): void;
				public logout(param0: globalAndroid.content.Context): boolean;
				public postOnMainThread(param0: java.lang.Runnable): void;
				public getEngagement(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.EngagementCallback): void;
				public isInitialized(): boolean;
				public setParamsCache(param0: com.liveperson.monitoring.cache.MonitoringParamsCache): void;
			}
			export module Monitoring {
				export class Companion {
					public static class: java.lang.Class<com.liveperson.monitoring.Monitoring.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export class MonitoringFactory extends com.liveperson.monitoring.IMonitoring {
				public static class: java.lang.Class<com.liveperson.monitoring.MonitoringFactory>;
				public static INSTANCE: com.liveperson.monitoring.MonitoringFactory;
				public logout(param0: globalAndroid.content.Context): boolean;
				public getMonitoring(): com.liveperson.monitoring.Monitoring;
				public getEngagement(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.EngagementCallback): void;
				public sendSde(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
				public isInitialized(): boolean;
				public initMonitoring(param0: com.liveperson.monitoring.sdk.MonitoringInternalInitParams): boolean;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module cache {
				export class MonitoringParamsCache implements com.liveperson.monitoring.cache.ParamsCache, com.liveperson.monitoring.utils.Clearable {
					public static class: java.lang.Class<com.liveperson.monitoring.cache.MonitoringParamsCache>;
					public static CSDS_SHARK_DOMAIN_KEY: string;
					public static CSDS_LOGGOS_DOMAIN_KEY: string;
					public static CSDS_IDP_DOMAIN_KEY: string;
					public static CSDS_ACCDN_DOMAIN_KEY: string;
					public static LAST_CSDS_UPDATE_TIMESTAMP_KEY: string;
					public static SESSION_ID_KEY: string;
					public static VISITOR_ID_KEY: string;
					public static CONNECTOR_ID_KEY: string;
					public static APP_INSTALL_ID_KEY: string;
					public static SDK_INFO_SEND_KEY: string;
					public static Companion: com.liveperson.monitoring.cache.MonitoringParamsCache.Companion;
					public setIdpDomain(param0: string): void;
					public constructor(param0: string);
					public getAcCdnDomain(): string;
					public isCsdsFilled(): boolean;
					public setSdkInfoSent(param0: boolean): void;
					public getConnectorId(): string;
					public getSessionId(): string;
					public clear(): void;
					public updateCsdsDomains(param0: java.util.HashMap<string,string>): boolean;
					public getSdkInfoSent(): boolean;
					public setSharkDomain(param0: string): void;
					public setCsdsMainDomain(param0: string): void;
					public setSessionId(param0: string): void;
					public setConnectorId(param0: string): void;
					public setVisitorId(param0: string): void;
					public getServiceDomain(param0: string): string;
					public getSharkDomain(): string;
					public getLoggosDomain(): string;
					public getBrandId(): string;
					public setAcCdnDomain(param0: string): void;
					public getLastCsdsUpdateTimestamp(): number;
					public getVisitorId(): string;
					public getAppInstallId(): string;
					public getCsdsMainDomain(): string;
					public setLoggosDomain(param0: string): void;
					public setLastCsdsUpdateTimestamp(param0: number): void;
					public getIdpDomain(): string;
					public setAppInstallId(param0: string): void;
				}
				export module MonitoringParamsCache {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.monitoring.cache.MonitoringParamsCache.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module cache {
				export class ParamsCache {
					public static class: java.lang.Class<com.liveperson.monitoring.cache.ParamsCache>;
					/**
					 * Constructs a new instance of the com.liveperson.monitoring.cache.ParamsCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						updateCsdsDomains(param0: java.util.HashMap<string,string>): boolean;
						getServiceDomain(param0: string): string;
						isCsdsFilled(): boolean;
					});
					public constructor();
					public isCsdsFilled(): boolean;
					public updateCsdsDomains(param0: java.util.HashMap<string,string>): boolean;
					public getServiceDomain(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module managers {
				export class MonitoringRequestManager {
					public static class: java.lang.Class<com.liveperson.monitoring.managers.MonitoringRequestManager>;
					public static TIME_24H_IN_MILLIS: number;
					public static Companion: com.liveperson.monitoring.managers.MonitoringRequestManager.Companion;
					public getBrandId(): string;
					public constructor(param0: string, param1: com.liveperson.monitoring.cache.MonitoringParamsCache);
					public getParamsCache(): com.liveperson.monitoring.cache.MonitoringParamsCache;
					public csdsDependantRequest(param0: globalAndroid.content.Context, param1: com.liveperson.monitoring.Command, param2: com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback<any,java.lang.Exception>): void;
				}
				export module MonitoringRequestManager {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.monitoring.managers.MonitoringRequestManager.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module model {
				export class EngagementDetails {
					public static class: java.lang.Class<com.liveperson.monitoring.model.EngagementDetails>;
					public static Companion: com.liveperson.monitoring.model.EngagementDetails.Companion;
					public getConnectorId(): string;
					public getConversationId(): string;
					public toString(): string;
					public setConversationId(param0: string): void;
					public setStatus(param0: string): void;
					public setConnectorId(param0: string): void;
					public getStatus(): string;
					public getEngagementId(): string;
					public getContextId(): string;
					public getEngagementRevision(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
					public getCampaignId(): string;
				}
				export module EngagementDetails {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.monitoring.model.EngagementDetails.Companion>;
						public invoke(param0: org.json.JSONObject): com.liveperson.monitoring.model.EngagementDetails;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module model {
				export class EngagementWithSession {
					public static class: java.lang.Class<com.liveperson.monitoring.model.EngagementWithSession>;
					public static Companion: com.liveperson.monitoring.model.EngagementWithSession.Companion;
					public getEngagementDetailsList(): java.util.List<com.liveperson.monitoring.model.EngagementDetails>;
					public constructor(param0: string, param1: string, param2: string, param3: java.util.List<com.liveperson.monitoring.model.EngagementDetails>);
					public setEngagementDetailsList(param0: java.util.List<com.liveperson.monitoring.model.EngagementDetails>): void;
					public getSessionId(): string;
					public getVisitorId(): string;
					public getPageId(): string;
				}
				export module EngagementWithSession {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.monitoring.model.EngagementWithSession.Companion>;
						public invoke(param0: string): com.liveperson.monitoring.model.EngagementWithSession;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module model {
				export class LPMonitoringIdentity {
					public static class: java.lang.Class<com.liveperson.monitoring.model.LPMonitoringIdentity>;
					public constructor(param0: string, param1: string);
					public toString(): string;
					public constructor();
					public getIssuer(): string;
					public getConsumerId(): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module model {
				export class ModelKeyNames {
					public static class: java.lang.Class<com.liveperson.monitoring.model.ModelKeyNames>;
					public static SESSION_ID: string;
					public static VISITOR_ID: string;
					public static PAGE_ID: string;
					public static ENGAGEMENT_DETAILS: string;
					public static CAMPAIGN_ID: string;
					public static ENGAGEMENT_ID: string;
					public static ENGAGEMENT_REVISION: string;
					public static CONTEXT_ID: string;
					public static CONVERSATION_ID: string;
					public static STATUS: string;
					public static CONNECTOR_ID: string;
					public static LANGUAGE: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module requests {
				export class AcCdnRequest extends com.liveperson.monitoring.Command {
					public static class: java.lang.Class<com.liveperson.monitoring.requests.AcCdnRequest>;
					public static Companion: com.liveperson.monitoring.requests.AcCdnRequest.Companion;
					public setParamsCache(param0: com.liveperson.monitoring.cache.MonitoringParamsCache): void;
					public getRequestUrl(): string;
					public execute(): void;
					public parseAcCdnResponse(param0: string): void;
					public getEngagementId(): string;
					public getEngagementRevision(): string;
					public constructor(param0: string, param1: string, param2: string);
					public getCampaignId(): string;
				}
				export module AcCdnRequest {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.monitoring.requests.AcCdnRequest.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module requests {
				export abstract class BaseMonitoringRequest extends com.liveperson.monitoring.Command {
					public static class: java.lang.Class<com.liveperson.monitoring.requests.BaseMonitoringRequest>;
					public static NUM_OF_RETRIES: number;
					public static DEFAULT_AUTH_ACR: string;
					public static DEFAULT_UNAUTH_ACR: string;
					public static ISSUER: string;
					public static ACR: string;
					public static SUB: string;
					public static KEY_CONSUMER_ID_ENC: string;
					public static Companion: com.liveperson.monitoring.requests.BaseMonitoringRequest.Companion;
					public buildRequestUrl(): string;
					public callErrorCallback(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
					public getRequestUrl(): string;
					public execute(): void;
					public handleResponse(param0: string): void;
					public handleError(param0: java.lang.Exception, param1: com.liveperson.infra.network.http.request.HttpRequest): void;
					public getContext(): globalAndroid.content.Context;
					public buildRequestBody(param0: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param1: com.liveperson.monitoring.sdk.MonitoringParams): org.json.JSONObject;
					public getParamsCache(): com.liveperson.monitoring.cache.MonitoringParamsCache;
					public getRequest(): com.liveperson.infra.network.http.request.HttpRequest;
					public extractAndSetVid(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams);
				}
				export module BaseMonitoringRequest {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.monitoring.requests.BaseMonitoringRequest.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module requests {
				export class CSDSRequest extends com.liveperson.monitoring.Command {
					public static class: java.lang.Class<com.liveperson.monitoring.requests.CSDSRequest>;
					public execute(): void;
					public constructor(param0: string, param1: string, param2: com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback<any,any>);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module requests {
				export class GetEngagementRequest extends com.liveperson.monitoring.requests.BaseMonitoringRequest {
					public static class: java.lang.Class<com.liveperson.monitoring.requests.GetEngagementRequest>;
					public static Companion: com.liveperson.monitoring.requests.GetEngagementRequest.Companion;
					public getRequestUrl(): string;
					public callErrorCallback(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.EngagementCallback);
					public execute(): void;
					public handleResponse(param0: string): void;
					public buildRequestBody(param0: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param1: com.liveperson.monitoring.sdk.MonitoringParams): org.json.JSONObject;
					public getRequest(): com.liveperson.infra.network.http.request.HttpRequest;
					public getCallback(): com.liveperson.monitoring.sdk.callbacks.EngagementCallback;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams);
				}
				export module GetEngagementRequest {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.monitoring.requests.GetEngagementRequest.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module requests {
				export class SendSdeRequest extends com.liveperson.monitoring.requests.BaseMonitoringRequest {
					public static class: java.lang.Class<com.liveperson.monitoring.requests.SendSdeRequest>;
					public static Companion: com.liveperson.monitoring.requests.SendSdeRequest.Companion;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback);
					public getCallback(): com.liveperson.monitoring.sdk.callbacks.SdeCallback;
					public getRequestUrl(): string;
					public callErrorCallback(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
					public execute(): void;
					public handleResponse(param0: string): void;
					public buildRequestBody(param0: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param1: com.liveperson.monitoring.sdk.MonitoringParams): org.json.JSONObject;
					public getRequest(): com.liveperson.infra.network.http.request.HttpRequest;
					public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.liveperson.monitoring.model.LPMonitoringIdentity>, param2: com.liveperson.monitoring.sdk.MonitoringParams);
				}
				export module SendSdeRequest {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.monitoring.requests.SendSdeRequest.Companion>;
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
				export class MonitoringInternalInitParams {
					public static class: java.lang.Class<com.liveperson.monitoring.sdk.MonitoringInternalInitParams>;
					public copy(param0: globalAndroid.content.Context, param1: string, param2: string): com.liveperson.monitoring.sdk.MonitoringInternalInitParams;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
					public component2(): string;
					public getApplicationContext(): globalAndroid.content.Context;
					public getAppInstallId(): string;
					public component3(): string;
					public getAccountId(): string;
					public component1(): globalAndroid.content.Context;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module sdk {
				export class MonitoringParams {
					public static class: java.lang.Class<com.liveperson.monitoring.sdk.MonitoringParams>;
					public getEntryPoints(): org.json.JSONArray;
					public equals(param0: any): boolean;
					public component3(): org.json.JSONArray;
					public toString(): string;
					public component1(): string;
					public component2(): org.json.JSONArray;
					public constructor();
					public copy(param0: string, param1: org.json.JSONArray, param2: org.json.JSONArray): com.liveperson.monitoring.sdk.MonitoringParams;
					public constructor(param0: string, param1: org.json.JSONArray, param2: org.json.JSONArray);
					public getPageId(): string;
					public hashCode(): number;
					public getEngagementAttributes(): org.json.JSONArray;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module sdk {
				export module callbacks {
					export class EngagementCallback extends com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback<com.liveperson.monitoring.sdk.responses.LPEngagementResponse,java.lang.Exception> {
						public static class: java.lang.Class<com.liveperson.monitoring.sdk.callbacks.EngagementCallback>;
						/**
						 * Constructs a new instance of the com.liveperson.monitoring.sdk.callbacks.EngagementCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.liveperson.monitoring.sdk.responses.LPEngagementResponse): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
							onSuccess(param0: any): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: any): void;
						});
						public constructor();
						public onSuccess(param0: any): void;
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
						public onSuccess(param0: com.liveperson.monitoring.sdk.responses.LPEngagementResponse): void;
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: any): void;
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
				export module callbacks {
					export class IMonitoringCallback<T, E>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback<any,any>>;
						/**
						 * Constructs a new instance of the com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: T): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: E): void;
						});
						public constructor();
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: E): void;
						public onSuccess(param0: T): void;
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
				export module callbacks {
					export class MonitoringCallback {
						public static class: java.lang.Class<com.liveperson.monitoring.sdk.callbacks.MonitoringCallback>;
						/**
						 * Constructs a new instance of the com.liveperson.monitoring.sdk.callbacks.MonitoringCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
						});
						public constructor();
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
						public onSuccess(): void;
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
				export module callbacks {
					export class MonitoringErrorType {
						public static class: java.lang.Class<com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType>;
						public static NOT_INITIALIZED: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static INITIALIZATION_ERROR: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static LOGOUT_ERROR: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static PARAMETER_MISSING: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static NO_NETWORK: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static REQUEST_ERROR: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static CSDS_ERROR: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static values(): native.Array<com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType>;
						public static valueOf(param0: string): com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
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
				export module callbacks {
					export class SdeCallback extends com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback<com.liveperson.monitoring.sdk.responses.LPSdeResponse,java.lang.Exception> {
						public static class: java.lang.Class<com.liveperson.monitoring.sdk.callbacks.SdeCallback>;
						/**
						 * Constructs a new instance of the com.liveperson.monitoring.sdk.callbacks.SdeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.liveperson.monitoring.sdk.responses.LPSdeResponse): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
							onSuccess(param0: any): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: any): void;
						});
						public constructor();
						public onSuccess(param0: any): void;
						public onSuccess(param0: com.liveperson.monitoring.sdk.responses.LPSdeResponse): void;
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: java.lang.Exception): void;
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: any): void;
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
				export module responses {
					export class LPEngagementResponse extends com.liveperson.monitoring.sdk.responses.LPSdeResponse {
						public static class: java.lang.Class<com.liveperson.monitoring.sdk.responses.LPEngagementResponse>;
						public constructor(param0: string, param1: string, param2: string);
						public setEngagementDetailsList(param0: java.util.List<com.liveperson.monitoring.model.EngagementDetails>): void;
						public getEngagementDetailsList(): java.util.List<com.liveperson.monitoring.model.EngagementDetails>;
						public constructor(param0: com.liveperson.monitoring.model.EngagementWithSession);
						public toString(): string;
						public constructor(param0: string, param1: string, param2: string, param3: java.util.List<com.liveperson.monitoring.model.EngagementDetails>);
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
				export module responses {
					export class LPSdeResponse {
						public static class: java.lang.Class<com.liveperson.monitoring.sdk.responses.LPSdeResponse>;
						public constructor(param0: string, param1: string, param2: string);
						public getPageId(): string;
						public getSessionId(): string;
						public getVisitorId(): string;
						public constructor(param0: com.liveperson.monitoring.model.EngagementWithSession);
						public toString(): string;
						public setPageId(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module utils {
				export class Clearable {
					public static class: java.lang.Class<com.liveperson.monitoring.utils.Clearable>;
					/**
					 * Constructs a new instance of the com.liveperson.monitoring.utils.Clearable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module utils {
				export class DomainBuilder {
					public static class: java.lang.Class<com.liveperson.monitoring.utils.DomainBuilder>;
					public static TAG: string;
					public static getCsdsDomain(param0: globalAndroid.content.Context, param1: string): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module utils {
				export class LocalBroadcast {
					public static class: java.lang.Class<com.liveperson.monitoring.utils.LocalBroadcast>;
					public static sendBroadcast(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle): void;
					public static sendBroadcast(param0: globalAndroid.content.Context, param1: string): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module monitoring {
			export module utils {
				export class ShutDown {
					public static class: java.lang.Class<com.liveperson.monitoring.utils.ShutDown>;
					/**
					 * Constructs a new instance of the com.liveperson.monitoring.utils.ShutDown interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shutDown(param0: globalAndroid.content.Context): void;
					});
					public constructor();
					public shutDown(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

//Generics information:
//com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback:2

