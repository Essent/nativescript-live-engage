/// <reference path="./_helpers.d.ts" />
declare module com {
	export module liveperson {
		export module lp_monitoring_sdk {
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

declare module com {
	export module liveperson {
		export module monitoring {
			export class Command {
				/**
				 * Constructs a new instance of the com.liveperson.monitoring.Command interface with the provided implementation.
				 */
				public constructor(implementation: {
					execute(): void;
				});
				public execute(): void;
			}
		}
	}
}

import androidcontentContext = android.content.Context;
import javautilList = java.util.List;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.monitoring.sdk.callbacks.SdeCallback.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringParams.d.ts" />
/// <reference path="./com.liveperson.sdk.callbacks.EngagementCallback.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export class IMonitoring {
				/**
				 * Constructs a new instance of the com.liveperson.monitoring.IMonitoring interface with the provided implementation.
				 */
				public constructor(implementation: {
					getEngagement(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.sdk.callbacks.EngagementCallback): void;
					sendSde(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
					logout(param0: androidcontentContext): boolean;
					isInitialized(): boolean;
				});
				public logout(param0: androidcontentContext): boolean;
				public getEngagement(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.sdk.callbacks.EngagementCallback): void;
				public sendSde(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
				public isInitialized(): boolean;
			}
		}
	}
}

import javalangRunnable = java.lang.Runnable;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.monitoring.cache.MonitoringParamsCache.d.ts" />
/// <reference path="./com.liveperson.monitoring.sdk.callbacks.SdeCallback.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringInternalInitParams.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringParams.d.ts" />
/// <reference path="./com.liveperson.sdk.callbacks.EngagementCallback.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export class Monitoring {
				public setBrandId(param0: string): void;
				public getBrandId(): string;
				public getEngagement(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.sdk.callbacks.EngagementCallback): void;
				public getInitialized(): boolean;
				public getParamsCache(): com.liveperson.monitoring.cache.MonitoringParamsCache;
				public setApplicationContext(param0: androidcontentContext): void;
				public init(param0: com.liveperson.sdk.MonitoringInternalInitParams): boolean;
				public constructor();
				public logout(param0: androidcontentContext): boolean;
				public setInitialized(param0: boolean): void;
				public sendSde(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
				public getApplicationContext(): androidcontentContext;
				public isInitialized(): boolean;
				public postOnMainThread(param0: javalangRunnable): void;
				public setParamsCache(param0: com.liveperson.monitoring.cache.MonitoringParamsCache): void;
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.monitoring.Monitoring.d.ts" />
/// <reference path="./com.liveperson.monitoring.sdk.callbacks.SdeCallback.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringInternalInitParams.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringParams.d.ts" />
/// <reference path="./com.liveperson.sdk.callbacks.EngagementCallback.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export class MonitoringFactory {
				public static INSTANCE: com.liveperson.monitoring.MonitoringFactory;
				public logout(param0: androidcontentContext): boolean;
				public getMonitoring(): com.liveperson.monitoring.Monitoring;
				public getEngagement(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.sdk.callbacks.EngagementCallback): void;
				public sendSde(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback): void;
				public isInitialized(): boolean;
				public initMonitoring(param0: com.liveperson.sdk.MonitoringInternalInitParams): boolean;
			}
		}
	}
}

import javautilHashMap = java.util.HashMap;
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module cache {
				export class MonitoringParamsCache {
					public getSDK_INFO_SEND_KEY(): string;
					public setIdpDomain(param0: string): void;
					public constructor(param0: string);
					public isCsdsFilled(): boolean;
					public setSdkInfoSent(param0: boolean): void;
					public getSessionId(): string;
					public clear(): void;
					public getCSDS_LOGGOS_DOMAIN_KEY(): string;
					public getSdkInfoSent(): boolean;
					public setSharkDomain(param0: string): void;
					public setCsdsMainDomain(param0: string): void;
					public setSessionId(param0: string): void;
					public setVisitorId(param0: string): void;
					public getServiceDomain(param0: string): string;
					public getCSDS_SHARK_DOMAIN_KEY(): string;
					public getSESSION_ID_KEY(): string;
					public getSharkDomain(): string;
					public getLoggosDomain(): string;
					public getBrandId(): string;
					public getLAST_CSDS_UPDATE_TIMESTAMP_KEY(): string;
					public updateCsdsDomains(param0: javautilHashMap): boolean;
					public getLastCsdsUpdateTimestamp(): number;
					public getVisitorId(): string;
					public getCSDS_IDP_DOMAIN_KEY(): string;
					public getAppInstallId(): string;
					public getCsdsMainDomain(): string;
					public setLoggosDomain(param0: string): void;
					public setLastCsdsUpdateTimestamp(param0: number): void;
					public getVISITOR_ID_KEY(): string;
					public getAPP_INSTALL_ID_KEY(): string;
					public getIdpDomain(): string;
					public setAppInstallId(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module cache {
				export class ParamsCache {
					/**
					 * Constructs a new instance of the com.liveperson.monitoring.cache.ParamsCache interface with the provided implementation.
					 */
					public constructor(implementation: {
						updateCsdsDomains(param0: javautilHashMap): boolean;
						getServiceDomain(param0: string): string;
						isCsdsFilled(): boolean;
					});
					public updateCsdsDomains(param0: javautilHashMap): boolean;
					public isCsdsFilled(): boolean;
					public getServiceDomain(param0: string): string;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.monitoring.Command.d.ts" />
/// <reference path="./com.liveperson.monitoring.cache.MonitoringParamsCache.d.ts" />
/// <reference path="./com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module managers {
				export class MonitoringRequestManager {
					public getBrandId(): string;
					public csdsDependantRequest(param0: androidcontentContext, param1: com.liveperson.monitoring.Command, param2: com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback): void;
					public constructor(param0: string, param1: com.liveperson.monitoring.cache.MonitoringParamsCache);
					public getTwentyFourHoursInMillis(): number;
					public getParamsCache(): com.liveperson.monitoring.cache.MonitoringParamsCache;
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./com.liveperson.monitoring.model.EngagementDetails.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module model {
				export class EngagementDetails {
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
						public invoke(param0: orgjsonJSONObject): com.liveperson.monitoring.model.EngagementDetails;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.monitoring.model.EngagementWithSession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module model {
				export class EngagementWithSession {
					public static Companion: com.liveperson.monitoring.model.EngagementWithSession.Companion;
					public setEngagementDetailsList(param0: javautilList): void;
					public getSessionId(): string;
					public getVisitorId(): string;
					public constructor(param0: string, param1: string, param2: string, param3: javautilList);
					public getPageId(): string;
					public getEngagementDetailsList(): javautilList;
				}
				export module EngagementWithSession {
					export class Companion {
						public invoke(param0: string): com.liveperson.monitoring.model.EngagementWithSession;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module model {
				export class LPMonitoringIdentity {
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
					public constructor();
				}
			}
		}
	}
}

import javalangException = java.lang.Exception;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.infra.network.http.request.HttpRequest.d.ts" />
/// <reference path="./com.liveperson.monitoring.cache.MonitoringParamsCache.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringParams.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module requests {
				export abstract class BaseMonitoringRequest {
					public getACR(): string;
					public getISSUER(): string;
					public getSUB(): string;
					public getRequestUrl(): string;
					public buildRequestBody(param0: javautilList, param1: com.liveperson.sdk.MonitoringParams): orgjsonJSONObject;
					public execute(): void;
					public handleResponse(param0: string): void;
					public getDEFAULT_UNAUTH_ACR(): string;
					public getRequest(): com.liveperson.infra.network.http.request.HttpRequest;
					public constructor(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams);
					public getRetryCounter(): number;
					public getMonitoringParams(): com.liveperson.sdk.MonitoringParams;
					public getNUM_OF_RETRIES(): number;
					public handleError(param0: javalangException, param1: com.liveperson.infra.network.http.request.HttpRequest): void;
					public getIdentities(): javautilList;
					public getDEFAULT_AUTH_ACR(): string;
					public buildRequestUrl(): string;
					public callErrorCallback(param0: javalangException): void;
					public setRetryCounter(param0: number): void;
					public getContext(): androidcontentContext;
					public getParamsCache(): com.liveperson.monitoring.cache.MonitoringParamsCache;
					public getKEY_CONSUMER_ID_ENC(): string;
					public extractAndSetVid(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module requests {
				export class CSDSRequest {
					public execute(): void;
					public constructor(param0: string, param1: string, param2: com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback);
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.infra.network.http.request.HttpRequest.d.ts" />
/// <reference path="./com.liveperson.monitoring.sdk.callbacks.SdeCallback.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringParams.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module requests {
				export class SendSdeRequest extends com.liveperson.monitoring.requests.BaseMonitoringRequest {
					public getCallback(): com.liveperson.monitoring.sdk.callbacks.SdeCallback;
					public getRequestUrl(): string;
					public buildRequestBody(param0: javautilList, param1: com.liveperson.sdk.MonitoringParams): orgjsonJSONObject;
					public execute(): void;
					public handleResponse(param0: string): void;
					public callErrorCallback(param0: javalangException): void;
					public constructor(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.monitoring.sdk.callbacks.SdeCallback);
					public getRequest(): com.liveperson.infra.network.http.request.HttpRequest;
					public constructor(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams);
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
import javalangThrowable = java.lang.Throwable;
/// <reference path="./com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module sdk {
				export module callbacks {
					export class IMonitoringCallback {
						/**
						 * Constructs a new instance of the com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSuccess(param0: javalangObject): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangThrowable): void;
						});
						public onSuccess(param0: javalangObject): void;
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangThrowable): void;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module sdk {
				export module callbacks {
					export class MonitoringErrorType {
						public static NOT_INITIALIZED: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static INITIALIZATION_ERROR: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static LOGOUT_ERROR: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static PARAMETER_MISSING: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static NO_NETWORK: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static REQUEST_ERROR: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public static CSDS_ERROR: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
						public constructor(param0: string, param1: number);
						public static values(): native.Array<com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType>;
						public static valueOf(param0: string): com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType.d.ts" />
/// <reference path="./com.liveperson.monitoring.sdk.responses.LPSdeResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module sdk {
				export module callbacks {
					export class SdeCallback {
						/**
						 * Constructs a new instance of the com.liveperson.monitoring.sdk.callbacks.SdeCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSuccess(param0: com.liveperson.monitoring.sdk.responses.LPSdeResponse): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangException): void;
							onSuccess(param0: javalangObject): void;
							onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangThrowable): void;
						});
						public onSuccess(param0: com.liveperson.monitoring.sdk.responses.LPSdeResponse): void;
						public onSuccess(param0: javalangObject): void;
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangThrowable): void;
						public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangException): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.monitoring.model.EngagementWithSession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module sdk {
				export module responses {
					export class LPEngagementResponse extends com.liveperson.monitoring.sdk.responses.LPSdeResponse {
						public setEngagementDetailsList(param0: javautilList): void;
						public constructor(param0: string, param1: string, param2: string);
						public getEngagementDetailsList(): javautilList;
						public constructor(param0: com.liveperson.monitoring.model.EngagementWithSession);
						public constructor(param0: string, param1: string, param2: string, param3: javautilList);
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.monitoring.model.EngagementWithSession.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module sdk {
				export module responses {
					export class LPSdeResponse {
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
					/**
					 * Constructs a new instance of the com.liveperson.monitoring.utils.Clearable interface with the provided implementation.
					 */
					public constructor(implementation: {
						clear(): void;
					});
					public clear(): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module utils {
				export class DomainBuilder {
					public static TAG: string;
					public constructor();
					public static getCsdsDomain(param0: androidcontentContext, param1: string): string;
				}
			}
		}
	}
}

import androidosBundle = android.os.Bundle;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module utils {
				export class LocalBroadcast {
					public constructor();
					public static sendBroadcast(param0: androidcontentContext, param1: string, param2: androidosBundle): void;
					public static sendBroadcast(param0: androidcontentContext, param1: string): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
			export module utils {
				export class ShutDown {
					/**
					 * Constructs a new instance of the com.liveperson.monitoring.utils.ShutDown interface with the provided implementation.
					 */
					public constructor(implementation: {
						shutDown(param0: androidcontentContext): void;
					});
					public shutDown(param0: androidcontentContext): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module liveperson {
		export module monitoring {
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

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.infra.network.http.request.HttpRequest.d.ts" />
/// <reference path="./com.liveperson.sdk.MonitoringParams.d.ts" />
/// <reference path="./com.liveperson.sdk.callbacks.EngagementCallback.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module network {
			export module http {
				export module requests {
					export class GetEngagementRequest extends com.liveperson.monitoring.requests.BaseMonitoringRequest {
						public getRequestUrl(): string;
						public getRequest(): com.liveperson.infra.network.http.request.HttpRequest;
						public callErrorCallback(param0: javalangException): void;
						public buildRequestBody(param0: javautilList, param1: com.liveperson.sdk.MonitoringParams): orgjsonJSONObject;
						public handleResponse(param0: string): void;
						public constructor(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams, param3: com.liveperson.sdk.callbacks.EngagementCallback);
						public constructor(param0: androidcontentContext, param1: javautilList, param2: com.liveperson.sdk.MonitoringParams);
						public execute(): void;
						public getCallback(): com.liveperson.sdk.callbacks.EngagementCallback;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module sdk {
			export class MonitoringInternalInitParams {
				public component1(): androidcontentContext;
				public equals(param0: javalangObject): boolean;
				public constructor(param0: androidcontentContext, param1: string, param2: string);
				public component3(): string;
				public hashCode(): number;
				public getApplicationContext(): androidcontentContext;
				public getAppInstallId(): string;
				public component2(): string;
				public getAccountId(): string;
				public toString(): string;
				public copy(param0: androidcontentContext, param1: string, param2: string): com.liveperson.sdk.MonitoringInternalInitParams;
			}
		}
	}
}

import orgjsonJSONArray = org.json.JSONArray;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
declare module com {
	export module liveperson {
		export module sdk {
			export class MonitoringParams {
				public getEntryPoints(): orgjsonJSONArray;
				public constructor(param0: string, param1: orgjsonJSONArray, param2: orgjsonJSONArray);
				public component2(): orgjsonJSONArray;
				public getPageId(): string;
				public component1(): string;
				public equals(param0: javalangObject): boolean;
				public hashCode(): number;
				public getEngagementAttributes(): orgjsonJSONArray;
				public copy(param0: string, param1: orgjsonJSONArray, param2: orgjsonJSONArray): com.liveperson.sdk.MonitoringParams;
				public component3(): orgjsonJSONArray;
				public toString(): string;
				public constructor();
			}
		}
	}
}

/// <reference path="./com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType.d.ts" />
/// <reference path="./com.liveperson.monitoring.sdk.responses.LPEngagementResponse.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module sdk {
			export module callbacks {
				export class EngagementCallback {
					/**
					 * Constructs a new instance of the com.liveperson.sdk.callbacks.EngagementCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onSuccess(param0: com.liveperson.monitoring.sdk.responses.LPEngagementResponse): void;
						onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangException): void;
						onSuccess(param0: javalangObject): void;
						onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangThrowable): void;
					});
					public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangException): void;
					public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangThrowable): void;
					public onSuccess(param0: javalangObject): void;
					public onSuccess(param0: com.liveperson.monitoring.sdk.responses.LPEngagementResponse): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
declare module com {
	export module liveperson {
		export module sdk {
			export module callbacks {
				export class MonitoringCallback {
					/**
					 * Constructs a new instance of the com.liveperson.sdk.callbacks.MonitoringCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onSuccess(): void;
						onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangException): void;
					});
					public onError(param0: com.liveperson.monitoring.sdk.callbacks.MonitoringErrorType, param1: javalangException): void;
					public onSuccess(): void;
				}
			}
		}
	}
}

