/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module liveperson {
		export module api {
			export class LivePersonCallback {
				public static class: java.lang.Class<com.liveperson.api.LivePersonCallback>;
				/**
				 * Constructs a new instance of the com.liveperson.api.LivePersonCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
					onConversationStarted(): void;
					onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
					onConversationResolved(): void;
					onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
					onConversationFragmentClosed(): void;
					onConversationMarkedAsUrgent(): void;
					onConversationMarkedAsNormal(): void;
					onAgentTyping(param0: boolean): void;
					onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
					onOfflineHoursChanges(param0: boolean): void;
					onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
					onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
					onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
					onStructuredContentLinkClicked(param0: string): void;
					onCsatLaunched(): void;
					onCsatDismissed(): void;
					onCsatSubmitted(param0: string): void;
					onCsatSubmitted(param0: string, param1: number): void;
					onCsatSkipped(): void;
					onTokenExpired(): void;
					onUnauthenticatedUserExpired(): void;
					onConnectionChanged(param0: boolean): void;
					onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
				});
				public constructor();
				public onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
				public onConnectionChanged(param0: boolean): void;
				public onConversationMarkedAsNormal(): void;
				public onOfflineHoursChanges(param0: boolean): void;
				/** @deprecated */
				public onConversationStarted(): void;
				public onAgentTyping(param0: boolean): void;
				public onCsatLaunched(): void;
				public onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
				public onCsatDismissed(): void;
				/** @deprecated */
				public onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
				public onConversationMarkedAsUrgent(): void;
				/** @deprecated */
				public onCsatSubmitted(param0: string, param1: number): void;
				public onCsatSkipped(): void;
				public onStructuredContentLinkClicked(param0: string): void;
				public onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onUnauthenticatedUserExpired(): void;
				public onConversationFragmentClosed(): void;
				/** @deprecated */
				public onConversationResolved(): void;
				public onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
				public onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
				public onTokenExpired(): void;
				public onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
				/** @deprecated */
				public onCsatSubmitted(param0: string): void;
				public onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
			}
			export module LivePersonCallback {
				export class NullLivePersonCallback extends com.liveperson.api.LivePersonCallback {
					public static class: java.lang.Class<com.liveperson.api.LivePersonCallback.NullLivePersonCallback>;
					public onConversationMarkedAsUrgent(): void;
					public onCsatLaunched(): void;
					public onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
					public onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
					public constructor();
					/** @deprecated */
					public onConversationResolved(): void;
					public onConversationMarkedAsNormal(): void;
					public onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
					public onCsatSkipped(): void;
					/** @deprecated */
					public onConversationStarted(): void;
					public onUnauthenticatedUserExpired(): void;
					/** @deprecated */
					public onCsatSubmitted(param0: string, param1: number): void;
					public onCsatSubmitted(param0: string, param1: number): void;
					public onConnectionChanged(param0: boolean): void;
					public onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
					public onTokenExpired(): void;
					public onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
					public onAgentTyping(param0: boolean): void;
					/** @deprecated */
					public onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
					public onStructuredContentLinkClicked(param0: string): void;
					public onOfflineHoursChanges(param0: boolean): void;
					public onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
					public onCsatDismissed(): void;
					/** @deprecated */
					public onCsatSubmitted(param0: string): void;
					public onConversationFragmentClosed(): void;
					public onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export class LivePersonCallbackImpl extends com.liveperson.api.LivePersonCallback {
				public static class: java.lang.Class<com.liveperson.api.LivePersonCallbackImpl>;
				public onConnectionChanged(param0: boolean): void;
				public onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
				public onConversationMarkedAsNormal(): void;
				/** @deprecated */
				public onConversationStarted(): void;
				public onAgentTyping(param0: boolean): void;
				public onCsatDismissed(): void;
				public onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
				/** @deprecated */
				public onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
				public constructor();
				public onCsatSkipped(): void;
				/** @deprecated */
				public onCsatSubmitted(param0: string, param1: number): void;
				public onStructuredContentLinkClicked(param0: string): void;
				public onConversationFragmentClosed(): void;
				public onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
				public onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
				public onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onCsatSubmitted(param0: string, param1: number): void;
				public onOfflineHoursChanges(param0: boolean): void;
				public onCsatLaunched(): void;
				public onConversationMarkedAsUrgent(): void;
				public onUnauthenticatedUserExpired(): void;
				public onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onTokenExpired(): void;
				/** @deprecated */
				public onConversationResolved(): void;
				/** @deprecated */
				public onCsatSubmitted(param0: string): void;
				public onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export class LivePersonIntents {
				public static class: java.lang.Class<com.liveperson.api.LivePersonIntents>;
				public static sendOnConversationResolved(param0: globalAndroid.content.Context, param1: com.liveperson.api.sdk.LPConversationData): void;
				public static sendOnCsatDismissed(param0: globalAndroid.content.Context): void;
				public static sendOnConversationFragmentClosed(param0: globalAndroid.content.Context): void;
				public static sendOnConversationMarkedAsNormal(param0: globalAndroid.content.Context): void;
				public static sendOnStructuredContentLinkClicked(param0: globalAndroid.content.Context, param1: string): void;
				public constructor();
				public static sendOnAgentAvatarTapped(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.model.AgentData): void;
				public static sendOnCsatSkipped(param0: globalAndroid.content.Context): void;
				public static sendOnConnectionChanged(param0: globalAndroid.content.Context, param1: boolean): void;
				public static getLPConversationData(param0: globalAndroid.content.Intent): com.liveperson.api.sdk.LPConversationData;
				public static getOnErrorTaskType(param0: globalAndroid.content.Intent): com.liveperson.messaging.TaskType;
				public static sendOnTokenExpired(param0: globalAndroid.content.Context): void;
				public static getOnErrorMessage(param0: globalAndroid.content.Intent): string;
				public static getPermissionDoNotShowAgainMarked(param0: globalAndroid.content.Intent): boolean;
				public static sendOnErrorIntent(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.TaskType, param2: string): void;
				public static sendOnOfflineHoursChanges(param0: globalAndroid.content.Context, param1: boolean): void;
				public static sendOnUserDeniedPermission(param0: globalAndroid.content.Context, param1: com.liveperson.api.sdk.PermissionType, param2: boolean): void;
				public static getAgentTypingValue(param0: globalAndroid.content.Intent): boolean;
				public static sendOnCsatSubmitted(param0: globalAndroid.content.Context, param1: string, param2: java.lang.Integer): void;
				public static getOfflineHoursOn(param0: globalAndroid.content.Intent): boolean;
				public static getIntentFilterForAllEvents(): globalAndroid.content.IntentFilter;
				public static sendOnAgentTyping(param0: globalAndroid.content.Context, param1: boolean): void;
				public static getLinkUri(param0: globalAndroid.content.Intent): string;
				public static getConversationID(param0: globalAndroid.content.Intent): string;
				public static getAgentData(param0: globalAndroid.content.Intent): com.liveperson.messaging.model.AgentData;
				public static sendOnCsatLaunched(param0: globalAndroid.content.Context): void;
				public static getPermissionType(param0: globalAndroid.content.Intent): com.liveperson.api.sdk.PermissionType;
				public static sendOnConversationMarkedAsUrgent(param0: globalAndroid.content.Context): void;
				public static sendOnUserExpired(param0: globalAndroid.content.Context): void;
				public static getConnectedValue(param0: globalAndroid.content.Intent): boolean;
				public static sendOnConversationStarted(param0: globalAndroid.content.Context, param1: com.liveperson.api.sdk.LPConversationData): void;
				public static sendOnAgentDetailsChanged(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.model.AgentData): void;
				public static sendOnUserActionOnPreventedPermission(param0: globalAndroid.content.Context, param1: com.liveperson.api.sdk.PermissionType): void;
				public static getCsatStarRating(param0: globalAndroid.content.Intent): number;
			}
			export module LivePersonIntents {
				export class ILivePersonIntentAction {
					public static class: java.lang.Class<com.liveperson.api.LivePersonIntents.ILivePersonIntentAction>;
					/**
					 * Constructs a new instance of the com.liveperson.api.LivePersonIntents$ILivePersonIntentAction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static LP_ON_STRUCTURED_CONTENT_LINK_CLICKED: string;
					public static LP_ON_CONVERSATION_RESOLVED_INTENT_ACTION: string;
					public static LP_ON_CONVERSATION_FRAGMENT_CLOSED_INTENT_ACTION: string;
					public static LP_ON_CONVERSATION_MARKED_AS_NORMAL_INTENT_ACTION: string;
					public static LP_ON_USER_DENIED_PERMISSION: string;
					public static LP_ON_OFFLINE_HOURS_CHANGES_INTENT_ACTION: string;
					public static LP_ON_USER_ACTION_ON_PREVENTED_PERMISSION: string;
					public static LP_ON_AGENT_TYPING_INTENT_ACTION: string;
					public static LP_ON_CONVERSATION_STARTED_INTENT_ACTION: string;
					public static LP_ON_CSAT_SUBMITTED_INTENT_ACTION: string;
					public static LP_ON_CSAT_LAUNCHED_INTENT_ACTION: string;
					public static LP_ON_AGENT_DETAILS_CHANGED_INTENT_ACTION: string;
					public static LP_ON_CSAT_SKIPPED_INTENT_ACTION: string;
					public static LP_ON_TOKEN_EXPIRED_INTENT_ACTION: string;
					public static LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION: string;
					public static LP_ON_ERROR_INTENT_ACTION: string;
					public static LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION: string;
					public static LP_ON_UNAUTHENTICATED_USER_EXPIRED_INTENT_ACTION: string;
					public static LP_ON_CSAT_DISMISSED_INTENT_ACTION: string;
					public static LP_ON_CONNECTION_CHANGED_INTENT_ACTION: string;
				}
				export class ILivePersonIntentExtras {
					public static class: java.lang.Class<com.liveperson.api.LivePersonIntents.ILivePersonIntentExtras>;
					/**
					 * Constructs a new instance of the com.liveperson.api.LivePersonIntents$ILivePersonIntentExtras interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static LP_AGENT_DATA_INTENT_PARCELABLE_EXTRA: string;
					public static LP_IS_OFFLINE_HOURS_ON_INTENT_BOOLEAN_EXTRA: string;
					public static LP_PERMISSION_TYPE_EXTRA: string;
					public static LP_CSAT_STAR_RATING_INTENT_INT_EXTRA: string;
					public static LP_CONVERSATION_ID_INTENT_STRING_EXTRA: string;
					public static LP_ON_ERROR_MESSAGE_INTENT_STRING_EXTRA: string;
					public static LP_ON_ERROR_TASK_TYPE_INTENT_INT_EXTRA: string;
					public static LP_LINK_URI_EXTRA: string;
					public static LP_AGENT_IS_TYPING_INTENT_BOOLEAN_EXTRA: string;
					public static LP_PERMISSION_DO_NOT_SHOW_AGAIN_EXTRA: string;
					public static LP_IS_CONNECTED_INTENT_BOOLEAN_EXTRA: string;
					public static LP_CONVERSATION_DATA_INTENT_PARCELABLE_EXTRA: string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module exception {
				export class BadConversationException {
					public static class: java.lang.Class<com.liveperson.api.exception.BadConversationException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module exception {
				export class BadMessageException {
					public static class: java.lang.Class<com.liveperson.api.exception.BadMessageException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export abstract class AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.AbstractRequest>;
					public static JSON_KEY_TYPE: string;
					public static JSON_KEY_BODY: string;
					public body: org.json.JSONObject;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public toJsonString(param0: number): string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export abstract class BaseAMSSocketRequest<DATA, REQUEST>  extends com.liveperson.infra.network.socket.BaseSocketRequest<any,any> {
					public static class: java.lang.Class<com.liveperson.api.request.BaseAMSSocketRequest<any,any>>;
					public constructor(param0: string);
					public constructor();
					public getSocketUrl(): string;
					public constructor(param0: string, param1: number);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export abstract class BaseGenerateURL extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.BaseGenerateURL>;
					public static BASE_GENERATE_URL_TYPE: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
				}
				export module BaseGenerateURL {
					export class Response extends com.liveperson.api.response.AbstractResponse<com.liveperson.api.response.BaseGenerateURLResponse> {
						public static class: java.lang.Class<com.liveperson.api.request.BaseGenerateURL.Response>;
						public static BASE_GENERATE_URL_RESPONSE_TYPE: string;
						public getBody(): any;
						public getBody(): com.liveperson.api.response.BaseGenerateURLResponse;
						public constructor(param0: org.json.JSONObject);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class ConsumerRequestConversation extends com.liveperson.api.request.RequestConversation {
					public static class: java.lang.Class<com.liveperson.api.request.ConsumerRequestConversation>;
					public static INTERACTION_CONTEXT_ID: string;
					public appId: string;
					public ttrType: com.liveperson.api.response.types.TTRType;
					public brandId: string;
					public skillId: string;
					public mCampaignInfo: com.liveperson.infra.CampaignInfo;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: com.liveperson.api.response.types.TTRType, param2: string, param3: string, param4: com.liveperson.infra.CampaignInfo);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GenerateURLForDownloadFile extends com.liveperson.api.request.BaseGenerateURL {
					public static class: java.lang.Class<com.liveperson.api.request.GenerateURLForDownloadFile>;
					public static RELATIVE_PATH: string;
					public static GENERATE_URL_FOR_DOWNLOAD_FILE_TYPE: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GenerateURLForUploadFile extends com.liveperson.api.request.BaseGenerateURL {
					public static class: java.lang.Class<com.liveperson.api.request.GenerateURLForUploadFile>;
					public static GENERATE_URL_FOR_UPLOAD_FILE_TYPE: string;
					public static FILE_SIZE: string;
					public static FILE_TYPE: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GenerateUploadTokenRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.GeneratedUploadTokenField.Response,com.liveperson.api.request.GenerateUploadTokenRequest> {
					public static class: java.lang.Class<com.liveperson.api.request.GenerateUploadTokenRequest>;
					public getData(): string;
					public setResponseCallBack(param0: com.liveperson.infra.ICallback<any,any>): void;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public constructor(param0: string);
					public constructor();
					public getRequestName(): string;
					public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
					public constructor(param0: string, param1: number);
					public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.GeneratedUploadTokenField.Response,com.liveperson.api.request.GenerateUploadTokenRequest>;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GeneratedUploadTokenField extends com.liveperson.api.request.BaseGenerateURL {
					public static class: java.lang.Class<com.liveperson.api.request.GeneratedUploadTokenField>;
					public static READ_OTK: string;
					public static WRITE_OTK: string;
					public static GENERATE_UPLOAD_TOKEN_TYPE: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: string);
				}
				export module GeneratedUploadTokenField {
					export class Response extends com.liveperson.api.response.AbstractResponse<com.liveperson.api.request.GeneratedUploadTokenField.Response.Body> {
						public static class: java.lang.Class<com.liveperson.api.request.GeneratedUploadTokenField.Response>;
						public static GENERATE_UPLOAD_RESPONSE_TYPE: string;
						public body: com.liveperson.api.request.GeneratedUploadTokenField.Response.Body;
						public getBody(): any;
						public getBody(): com.liveperson.api.request.GeneratedUploadTokenField.Response.Body;
						public constructor(param0: org.json.JSONObject);
					}
					export module Response {
						export class Body {
							public static class: java.lang.Class<com.liveperson.api.request.GeneratedUploadTokenField.Response.Body>;
							public type: string;
							public readOtk: string;
							public writeOtk: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GetClock extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.GetClock>;
					public static CURRENT_TIME: string;
					public static GET_CLOCK_TYPE: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
				}
				export module GetClock {
					export class Response extends com.liveperson.api.response.AbstractResponse<com.liveperson.api.request.GetClock.Response.Body> {
						public static class: java.lang.Class<com.liveperson.api.request.GetClock.Response>;
						public static GET_CLOCK_RESPONSE_TYPE: string;
						public body: com.liveperson.api.request.GetClock.Response.Body;
						public getBody(): any;
						public getBody(): com.liveperson.api.request.GetClock.Response.Body;
						public constructor(param0: org.json.JSONObject);
					}
					export module Response {
						export class Body {
							public static class: java.lang.Class<com.liveperson.api.request.GetClock.Response.Body>;
							public currentTime: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GetUserProfile extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.GetUserProfile>;
					public static BODY: string;
					public static GET_USER_PROFILE_TYPE: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor(param0: string);
					public constructor();
				}
				export module GetUserProfile {
					export class Response extends com.liveperson.api.response.AbstractResponse<com.liveperson.api.response.model.UserProfile> {
						public static class: java.lang.Class<com.liveperson.api.request.GetUserProfile.Response>;
						public static GET_USER_PROFILE_RESPONSE_TYPE: string;
						public getBody(): any;
						public constructor(param0: org.json.JSONObject);
						public getBody(): com.liveperson.api.response.model.UserProfile;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class PublishEvent extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.PublishEvent>;
					public static CHAT_TYPE: string;
					public static MESSAGE: string;
					public static DIALOG_ID: string;
					public static CONVERSATION_ID: string;
					public static TYPE: string;
					public static EVENT: string;
					public static SUBSCRIPTION_ID: string;
					public static STATUS: string;
					public static SEQUENCE_LIST: string;
					public static SEQUENCE: string;
					public static PUBLISH_EVENT_TYPE: string;
					public static METADATA: string;
					public toJson(param0: org.json.JSONObject): void;
					public constructor(param0: string, param1: string, param2: com.liveperson.api.request.message.PublishMessage, param3: com.liveperson.api.request.PublishEvent.Type, param4: com.liveperson.api.response.model.ContentType, param5: string, param6: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: com.liveperson.api.request.PublishEvent.Type, param3: com.liveperson.infra.model.types.ChatState);
					public constructor(param0: string, param1: string, param2: com.liveperson.api.request.PublishEvent.Type, param3: string, param4: native.Array<number>, param5: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
				}
				export module PublishEvent {
					export class Response extends com.liveperson.api.response.AbstractResponse<com.liveperson.api.request.PublishEvent.Response.Body> {
						public static class: java.lang.Class<com.liveperson.api.request.PublishEvent.Response>;
						public static PUBLISH_EVENT_RESPONSE_TYPE: string;
						public getBody(): any;
						public getBody(): com.liveperson.api.request.PublishEvent.Response.Body;
						public constructor(param0: org.json.JSONObject);
					}
					export module Response {
						export class Body {
							public static class: java.lang.Class<com.liveperson.api.request.PublishEvent.Response.Body>;
							public sequence: number;
							public constructor();
						}
					}
					export class Type {
						public static class: java.lang.Class<com.liveperson.api.request.PublishEvent.Type>;
						public static ContentEvent: com.liveperson.api.request.PublishEvent.Type;
						public static ChatStateEvent: com.liveperson.api.request.PublishEvent.Type;
						public static AcceptStatusEvent: com.liveperson.api.request.PublishEvent.Type;
						public static values(): native.Array<com.liveperson.api.request.PublishEvent.Type>;
						public static valueOf(param0: string): com.liveperson.api.request.PublishEvent.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class QueryMessages extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.QueryMessages>;
					public static DIALOG_ID: string;
					public static MAX_QUANTITY: string;
					public static OLDER_THAN_SEQUENCE: string;
					public static NEWER_THAN_SEQUENCE: string;
					public static SEQUENCE: string;
					public static ORIGINATOR_ID: string;
					public static SERVER_TIMESTAMP: string;
					public static EVENT: string;
					public static SEQUENCE1: string;
					public static BODY: string;
					public dialogId: string;
					public maxQuantity: number;
					public olderThanSequence: number;
					public newerThanSequence: number;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: number, param2: number, param3: number);
				}
				export module QueryMessages {
					export class Response extends com.liveperson.api.response.AbstractResponse<any> {
						public static class: java.lang.Class<com.liveperson.api.request.QueryMessages.Response>;
						public static QUERY_MESSAGES_RESPONSE_TYPE: string;
						public getBody(): any;
						public getBody(): java.util.ArrayList<com.liveperson.api.response.events.ContentEventNotification>;
						public constructor(param0: org.json.JSONObject);
						public constructor(param0: org.json.JSONArray);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class ReqBody extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.ReqBody>;
					public static REQ_BODY_TYPE: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
				}
				export module ReqBody {
					export class StringResp extends com.liveperson.api.response.AbstractResponse<string> {
						public static class: java.lang.Class<com.liveperson.api.request.ReqBody.StringResp>;
						public static REQ_BODY_RESPONSE_TYPE: string;
						public getBody(): string;
						public getBody(): any;
						public constructor(param0: org.json.JSONObject);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class RequestConversation extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.RequestConversation>;
					public static CONVERSATION_ID: string;
					public static REQUEST_CONVERSATION_TYPE: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
				}
				export module RequestConversation {
					export class Response extends com.liveperson.api.response.AbstractResponse<com.liveperson.api.request.RequestConversation.Response.Body> {
						public static class: java.lang.Class<com.liveperson.api.request.RequestConversation.Response>;
						public static REQUEST_CONVERSATION_RESPONSE_TYPE: string;
						public getBody(): any;
						public getBody(): com.liveperson.api.request.RequestConversation.Response.Body;
						public constructor(param0: org.json.JSONObject);
						public toString(): string;
					}
					export module Response {
						export class Body {
							public static class: java.lang.Class<com.liveperson.api.request.RequestConversation.Response.Body>;
							public conversationId: string;
							public constructor();
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class SetUserProfile extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.SetUserProfile>;
					public currentProfile: com.liveperson.api.response.model.UserProfile;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: com.liveperson.api.response.model.UserProfile);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class SubscribeExConversations extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.SubscribeExConversations>;
					public consumerId: string;
					public maxLastUpdatedTime: number;
					public minLastUpdatedTime: number;
					public agentIds: native.Array<string>;
					public brandId: string;
					public maxETTR: number;
					public convStage: native.Array<string>;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: number, param2: number, param3: native.Array<string>, param4: string, param5: number, param6: native.Array<string>);
				}
				export module SubscribeExConversations {
					export class Response extends com.liveperson.api.response.AbstractResponse<any> {
						public static class: java.lang.Class<com.liveperson.api.request.SubscribeExConversations.Response>;
						public static SUBSCRIPTION_ID: string;
						public static SUBSCRIBE_EX_CONVERSATIONS_RESPONSE_TYPE: string;
						public getBody(): any;
						public constructor(param0: org.json.JSONObject);
					}
					export module Response {
						export class Body {
							public static class: java.lang.Class<com.liveperson.api.request.SubscribeExConversations.Response.Body>;
							public subscriptionId: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class SubscribeMessagingEvents extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.SubscribeMessagingEvents>;
					public toJson(param0: org.json.JSONObject): void;
					public getConversationId(): string;
					public getMessageType(): string;
					public constructor();
					public getDialogId(): string;
					public constructor(param0: string, param1: string, param2: java.lang.Integer);
				}
				export module SubscribeMessagingEvents {
					export class Response extends com.liveperson.api.response.AbstractResponse<kotlin.Unit> {
						public static class: java.lang.Class<com.liveperson.api.request.SubscribeMessagingEvents.Response>;
						public getBody(): any;
						public getBody(): void;
						public getObj(): org.json.JSONObject;
						public setObj(param0: org.json.JSONObject): void;
						public constructor(param0: org.json.JSONObject);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class UnsubscribeExConversations extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.UnsubscribeExConversations>;
					public static TAG: string;
					public toJson(param0: org.json.JSONObject): void;
					public getMessageType(): string;
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class UpdateConversationField extends com.liveperson.api.request.AbstractRequest {
					public static class: java.lang.Class<com.liveperson.api.request.UpdateConversationField>;
					public static CONVERSATION_STAGE_FIELD: string;
					public static CONVERSATION_CSAT_RATE: string;
					public static TTR_FIELD: string;
					public static UPDATE_CONVERSATION_FIELD_TYPE: string;
					public static CONVERSATION_ID: string;
					public static FIELD: string;
					public static CONVERSATION_STATE: string;
					public static CONVERSATION_STAGE: string;
					public static CONVERSATION_CSAT: string;
					public static CONVERSATION_CSAT_YESNO_VALUE: string;
					public static CONVERSATION_CSAT_STATUS: string;
					public static CONVERSATION_FIELD: string;
					public static PARTICIPANTS_CHANGE_FIELD: string;
					public static DIALOG_CHANGE_FIELD: string;
					public static TTR: string;
					public conversationId: string;
					public dialogId: string;
					public field: string;
					public conversationState: com.liveperson.api.response.types.ConversationState;
					public dialogState: com.liveperson.api.response.types.DialogState;
					public ttrType: com.liveperson.api.response.types.TTRType;
					public ttrValue: number;
					public csatNumberOfStars: number;
					public csatYesNoValue: number;
					public csatStatus: com.liveperson.api.response.types.CsatStatus;
					public type: string;
					public static CONVERSATION_STATE_FIELD(): string;
					public constructor(param0: string, param1: string, param2: com.liveperson.api.response.types.TTRType, param3: number);
					public toJson(param0: org.json.JSONObject): void;
					public constructor(param0: string, param1: string, param2: number, param3: number, param4: com.liveperson.api.response.types.CsatStatus);
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.liveperson.api.response.types.DialogState);
					public constructor(param0: string, param1: string, param2: com.liveperson.api.response.types.ConversationState);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export abstract class BasePublishMessage extends com.liveperson.api.request.message.PublishMessage {
						public static class: java.lang.Class<com.liveperson.api.request.message.BasePublishMessage>;
						public constructor();
						public getMessageText(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getMessage(): any;
						public getMessageTextWithoutSpecialChars(param0: string): string;
					}
					export module BasePublishMessage {
						export class PublishMessageType {
							public static class: java.lang.Class<com.liveperson.api.request.message.BasePublishMessage.PublishMessageType>;
							public static TEXT: com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
							public static FILE: com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
							public static JSON: com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
							public static FORM_INVITATION: com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
							public static FORM_SUBMISSION: com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
							public static STRUCTURED_CONTENT: com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
							public static valueOf(param0: string): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
							public static values(): native.Array<com.liveperson.api.request.message.BasePublishMessage.PublishMessageType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class FilePublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public static class: java.lang.Class<com.liveperson.api.request.message.FilePublishMessage>;
						public static CAPTION: string;
						public static RELATIVE_PATH: string;
						public static FILE_TYPE: string;
						public static PREVIEW: string;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public constructor();
						public getMessageText(): string;
						public getFileType(): string;
						public getPreview(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getCaption(): string;
						public getRelativePath(): string;
						public getMessage(): any;
						public constructor(param0: org.json.JSONObject);
						public getMessage(): org.json.JSONObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class FormPublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public static class: java.lang.Class<com.liveperson.api.request.message.FormPublishMessage>;
						public static FORM_ID: string;
						public static INVITATION_ID: string;
						public static TITLE: string;
						public constructor();
						public getMessageText(): string;
						public getInvitationId(): string;
						public getFormTitle(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getFormId(): string;
						public getMessage(): any;
						public constructor(param0: org.json.JSONObject);
						public getMessage(): org.json.JSONObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class FormSubmissionPublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public static class: java.lang.Class<com.liveperson.api.request.message.FormSubmissionPublishMessage>;
						public constructor();
						public getMessageText(): string;
						public getInvitationId(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getMessage(): any;
						public getSubmissionId(): string;
						public constructor(param0: org.json.JSONObject);
						public constructor(param0: string, param1: string);
						public getMessage(): org.json.JSONObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class JsonPublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public static class: java.lang.Class<com.liveperson.api.request.message.JsonPublishMessage>;
						public getMessage(): string;
						public constructor();
						public getMessageText(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getCaption(): string;
						public getMessage(): any;
						public constructor(param0: org.json.JSONObject);
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class PublishMessage {
						public static class: java.lang.Class<com.liveperson.api.request.message.PublishMessage>;
						/**
						 * Constructs a new instance of the com.liveperson.api.request.message.PublishMessage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getMessage(): any;
						});
						public constructor();
						public getMessage(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class StructuredContentPublishMessage extends com.liveperson.api.request.message.TextPublishMessage {
						public static class: java.lang.Class<com.liveperson.api.request.message.StructuredContentPublishMessage>;
						public getMessage(): string;
						public constructor();
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getMessage(): any;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class TextPublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public static class: java.lang.Class<com.liveperson.api.request.message.TextPublishMessage>;
						public getMessage(): string;
						public constructor();
						public getMessageText(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getMessage(): any;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export abstract class AbstractResponse<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.liveperson.api.response.AbstractResponse<any>>;
					public static GENERAL_INNER_RESPONSE: string;
					public reqId: number;
					public code: number;
					public getBody(): T;
					public constructor(param0: org.json.JSONObject);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export class BaseGenerateURLResponse {
					public static class: java.lang.Class<com.liveperson.api.response.BaseGenerateURLResponse>;
					public static RELATIVE_PATH: string;
					public static QUERY_PARAMS: string;
					public relativePath: string;
					public queryParams: com.liveperson.api.response.model.QueryParams;
					public constructor(param0: org.json.JSONObject);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export class IOnUrlReady {
					public static class: java.lang.Class<com.liveperson.api.response.IOnUrlReady>;
					/**
					 * Constructs a new instance of the com.liveperson.api.response.IOnUrlReady interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUrlReady(param0: com.liveperson.api.response.BaseGenerateURLResponse): void;
						onUrlError(param0: string): void;
					});
					public constructor();
					public onUrlReady(param0: com.liveperson.api.response.BaseGenerateURLResponse): void;
					public onUrlError(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module events {
					export class ContentEventNotification {
						public static class: java.lang.Class<com.liveperson.api.response.events.ContentEventNotification>;
						public sequence: number;
						public originatorId: string;
						public serverTimestamp: number;
						public event: com.liveperson.api.response.model.Event;
						public dialogId: string;
						public eventId: string;
						public originatorMetadata: com.liveperson.api.response.model.OriginatorMetadata;
						public constructor(param0: org.json.JSONObject);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module events {
					export class ExConversationChangeNotification extends com.liveperson.api.response.AbstractResponse<com.liveperson.api.response.events.ExConversationChangeNotification.Body> {
						public static class: java.lang.Class<com.liveperson.api.response.events.ExConversationChangeNotification>;
						public static CONVERSATION_CHANGE_NOTIFICATION_TYPE: string;
						public notificationBody: com.liveperson.api.response.events.ExConversationChangeNotification.Body;
						public static getResponseHandler(param0: com.liveperson.messaging.Messaging): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
						public getBody(): any;
						public getBody(): com.liveperson.api.response.events.ExConversationChangeNotification.Body;
						public static getType(): string;
						public constructor(param0: org.json.JSONObject);
					}
					export module ExConversationChangeNotification {
						export class Body {
							public static class: java.lang.Class<com.liveperson.api.response.events.ExConversationChangeNotification.Body>;
							public getChanges(): native.Array<com.liveperson.api.response.model.Change>;
							public constructor(param0: org.json.JSONObject);
							public getSubscriptionId(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module events {
					export class MessagingEventNotification extends com.liveperson.api.response.AbstractResponse<java.util.ArrayList<com.liveperson.api.response.events.ContentEventNotification>> {
						public static class: java.lang.Class<com.liveperson.api.response.events.MessagingEventNotification>;
						public static Companion: com.liveperson.api.response.events.MessagingEventNotification.Companion;
						public getBody(): any;
						public static getResponseHandler(param0: com.liveperson.messaging.Messaging): com.liveperson.messaging.network.socket.MessagingEventNotificationHandler;
						public getBody(): java.util.ArrayList<com.liveperson.api.response.events.ContentEventNotification>;
						public static getType(): string;
						public constructor(param0: org.json.JSONObject);
					}
					export module MessagingEventNotification {
						export class Companion {
							public static class: java.lang.Class<com.liveperson.api.response.events.MessagingEventNotification.Companion>;
							public getResponseHandler(param0: com.liveperson.messaging.Messaging): com.liveperson.messaging.network.socket.MessagingEventNotificationHandler;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Change {
						public static class: java.lang.Class<com.liveperson.api.response.model.Change>;
						public type: string;
						public result: com.liveperson.api.response.model.Result;
						public constructor(param0: org.json.JSONObject);
					}
					export module Change {
						export class KEYS {
							public static class: java.lang.Class<com.liveperson.api.response.model.Change.KEYS>;
							public static UPSERT: string;
							public static DELETE: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class CobrowseDialogData extends com.liveperson.api.response.model.DialogData {
						public static class: java.lang.Class<com.liveperson.api.response.model.CobrowseDialogData>;
						public metaData: string;
						public constructor();
						public constructor(param0: com.liveperson.messaging.model.Dialog);
						public constructor(param0: org.json.JSONObject);
						public constructor(param0: org.json.JSONObject, param1: string);
						/** @deprecated */
						public constructor(param0: com.liveperson.messaging.model.ConversationData);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class ContentType {
						public static class: java.lang.Class<com.liveperson.api.response.model.ContentType>;
						public static text_html: com.liveperson.api.response.model.ContentType;
						public static text_plain: com.liveperson.api.response.model.ContentType;
						public static text_structured_content: com.liveperson.api.response.model.ContentType;
						public static hosted_file: com.liveperson.api.response.model.ContentType;
						public static application_json: com.liveperson.api.response.model.ContentType;
						public static forms_secure_invitation: com.liveperson.api.response.model.ContentType;
						public static forms_secure_submission: com.liveperson.api.response.model.ContentType;
						public isHtml(): boolean;
						public isFile(): boolean;
						public isFormInvitation(): boolean;
						public isSimpleText(): boolean;
						public static values(): native.Array<com.liveperson.api.response.model.ContentType>;
						public static fromString(param0: string): com.liveperson.api.response.model.ContentType;
						public static valueOf(param0: string): com.liveperson.api.response.model.ContentType;
						public getText(): string;
						public isFormSubmission(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export abstract class ConversationHistoryDetails {
						public static class: java.lang.Class<com.liveperson.api.response.model.ConversationHistoryDetails>;
						public participants: com.liveperson.api.response.model.Participants;
						public stage: com.liveperson.api.response.types.ConversationState;
						public startTs: number;
						public endTs: number;
						public csat: com.liveperson.api.response.types.CSAT;
						public closeReason: com.liveperson.api.response.types.CloseReason;
						public dialogs: native.Array<com.liveperson.api.response.model.DialogData>;
						public conversationId: string;
						public getState(): com.liveperson.api.response.types.ConversationState;
						public constructor(param0: org.json.JSONObject, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class ConversationINCADetails extends com.liveperson.api.response.model.ConversationHistoryDetails {
						public static class: java.lang.Class<com.liveperson.api.response.model.ConversationINCADetails>;
						public constructor(param0: org.json.JSONObject);
						public constructor(param0: org.json.JSONObject, param1: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class ConversationUMSDetails extends com.liveperson.api.response.model.ConversationHistoryDetails {
						public static class: java.lang.Class<com.liveperson.api.response.model.ConversationUMSDetails>;
						public skillId: string;
						public metaDataLastUpdateTs: number;
						public ttr: com.liveperson.api.response.model.Ttr;
						public delay: com.liveperson.api.response.model.Delay;
						public manualETTR: number;
						public getCalculatedTTR(): number;
						public constructor(param0: org.json.JSONObject, param1: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Delay {
						public static class: java.lang.Class<com.liveperson.api.response.model.Delay>;
						public type: string;
						public tillWhen: number;
						public constructor(param0: org.json.JSONObject);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class DeliveryStatusUpdateInfo {
						public static class: java.lang.Class<com.liveperson.api.response.model.DeliveryStatusUpdateInfo>;
						public getMetadata(): org.json.JSONArray;
						public constructor(param0: org.json.JSONArray);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class DialogData extends com.liveperson.api.response.model.MultiDialog {
						public static class: java.lang.Class<com.liveperson.api.response.model.DialogData>;
						public state: com.liveperson.api.response.types.DialogState;
						public assignedAgentId: string;
						public dialogId: string;
						public conversationId: string;
						public participantsDetails: com.liveperson.api.response.model.Participants;
						public dialogType: com.liveperson.api.response.types.DialogType;
						public closedCause: string;
						public creationTs: number;
						public endTs: number;
						public isOpen: boolean;
						public closeReason: com.liveperson.api.response.types.CloseReason;
						public constructor();
						public setState(param0: com.liveperson.api.response.types.DialogState): void;
						public constructor(param0: com.liveperson.messaging.model.Dialog);
						public static extractDialogId(param0: com.liveperson.messaging.model.ConversationData): string;
						public constructor(param0: org.json.JSONObject);
						public static extractDialogsData(param0: com.liveperson.messaging.model.ConversationData): native.Array<com.liveperson.api.response.model.DialogData>;
						public constructor(param0: org.json.JSONObject, param1: string);
						/** @deprecated */
						public constructor(param0: com.liveperson.messaging.model.ConversationData);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Event {
						public static class: java.lang.Class<com.liveperson.api.response.model.Event>;
						public static CONTENT: string;
						public type: com.liveperson.api.response.model.Event.Types;
						public contentType: string;
						public message: com.liveperson.api.request.message.BasePublishMessage;
						public chatState: com.liveperson.infra.model.types.ChatState;
						public status: com.liveperson.api.response.types.DeliveryStatus;
						public sequenceList: native.Array<number>;
						public quickRepliesJsonString: string;
						public constructor(param0: org.json.JSONObject);
						public extractLinks(param0: string): native.Array<string>;
					}
					export module Event {
						export class Types {
							public static class: java.lang.Class<com.liveperson.api.response.model.Event.Types>;
							public static AcceptStatusEvent: com.liveperson.api.response.model.Event.Types;
							public static ChatStateEvent: com.liveperson.api.response.model.Event.Types;
							public static ContentEvent: com.liveperson.api.response.model.Event.Types;
							public static RichContentEvent: com.liveperson.api.response.model.Event.Types;
							public static values(): native.Array<com.liveperson.api.response.model.Event.Types>;
							public static valueOf(param0: string): com.liveperson.api.response.model.Event.Types;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export abstract class MultiDialog {
						public static class: java.lang.Class<com.liveperson.api.response.model.MultiDialog>;
						public channelType: com.liveperson.api.response.model.MultiDialog.ChannelType;
						public static create(param0: org.json.JSONObject, param1: string): com.liveperson.api.response.model.DialogData;
						public constructor();
						public getType(): com.liveperson.api.response.model.MultiDialog.ChannelType;
						public static create(param0: org.json.JSONObject): com.liveperson.api.response.model.DialogData;
						public constructor(param0: org.json.JSONObject);
					}
					export module MultiDialog {
						export class ChannelType {
							public static class: java.lang.Class<com.liveperson.api.response.model.MultiDialog.ChannelType>;
							public static MESSAGING: com.liveperson.api.response.model.MultiDialog.ChannelType;
							public static COBROWSE: com.liveperson.api.response.model.MultiDialog.ChannelType;
							public static values(): native.Array<com.liveperson.api.response.model.MultiDialog.ChannelType>;
							public static parse(param0: string): com.liveperson.api.response.model.MultiDialog.ChannelType;
							public static valueOf(param0: string): com.liveperson.api.response.model.MultiDialog.ChannelType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class OriginatorMetadata {
						public static class: java.lang.Class<com.liveperson.api.response.model.OriginatorMetadata>;
						public static TAG: string;
						public mId: string;
						public mRole: com.liveperson.api.response.model.Participants.ParticipantRole;
						public constructor();
						public static fromJson(param0: org.json.JSONObject): com.liveperson.api.response.model.OriginatorMetadata;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Participants {
						public static class: java.lang.Class<com.liveperson.api.response.model.Participants>;
						public CONSUMER: native.Array<string>;
						public ASSIGNED_AGENT: native.Array<string>;
						public MANAGER: native.Array<string>;
						public READER: native.Array<string>;
						public CONTROLLER: native.Array<string>;
						public AGENTS: native.Array<string>;
						public ALL_AGENTS: native.Array<string>;
						public add(param0: java.util.ArrayList<string>, param1: com.liveperson.api.response.model.Participants.ParticipantRole): void;
						public add(param0: native.Array<string>, param1: com.liveperson.api.response.model.Participants.ParticipantRole): void;
						public constructor();
						public extractAllParticipantsIds(): native.Array<string>;
					}
					export module Participants {
						export class ParticipantRole {
							public static class: java.lang.Class<com.liveperson.api.response.model.Participants.ParticipantRole>;
							public static CONSUMER: com.liveperson.api.response.model.Participants.ParticipantRole;
							public static ASSIGNED_AGENT: com.liveperson.api.response.model.Participants.ParticipantRole;
							public static AGENT: com.liveperson.api.response.model.Participants.ParticipantRole;
							public static MANAGER: com.liveperson.api.response.model.Participants.ParticipantRole;
							public static READER: com.liveperson.api.response.model.Participants.ParticipantRole;
							public static CONTROLLER: com.liveperson.api.response.model.Participants.ParticipantRole;
							public static getParticipantRole(param0: string): com.liveperson.api.response.model.Participants.ParticipantRole;
							public static values(): native.Array<com.liveperson.api.response.model.Participants.ParticipantRole>;
							public static valueOf(param0: string): com.liveperson.api.response.model.Participants.ParticipantRole;
							public static parse(param0: string): com.liveperson.api.response.model.Participants.ParticipantRole;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class QueryParams {
						public static class: java.lang.Class<com.liveperson.api.response.model.QueryParams>;
						public static TEMP_URL: string;
						public static EXPIRE_TIME: string;
						public tempURL: string;
						public expireTime: string;
						public constructor(param0: org.json.JSONObject);
						public appendQueryParameter(param0: globalAndroid.net.Uri.Builder): void;
						public constructor(param0: globalAndroid.net.Uri);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Result {
						public static class: java.lang.Class<com.liveperson.api.response.model.Result>;
						public conversationId: string;
						public effectiveTTR: number;
						public conversationDetails: com.liveperson.api.response.model.ConversationUMSDetails;
						public constructor(param0: org.json.JSONObject);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Ttr {
						public static class: java.lang.Class<com.liveperson.api.response.model.Ttr>;
						public ttrType: string;
						public value: number;
						public constructor(param0: org.json.JSONObject);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class UserProfile {
						public static class: java.lang.Class<com.liveperson.api.response.model.UserProfile>;
						public static FIRST_NAME: string;
						public static LAST_NAME: string;
						public static NICKNAME: string;
						public static USER_ID: string;
						public static AVATAR_URL: string;
						public static ROLE: string;
						public static BACKGND_IMG_URI: string;
						public static DESCRIPTION: string;
						public static PRIVATE_DATA: string;
						public static SERVICE_NAME: string;
						public static CERT_NAME: string;
						public static TOKEN: string;
						public static MAIL: string;
						public static PUSH_NOTIFICATION_DATA: string;
						public static MOBILE_NUM: string;
						public setFirstName(param0: string): void;
						public getFullName(): string;
						public setOriginatorID(param0: string): void;
						public setRequestId(param0: number): void;
						public getAvatarUrl(): string;
						public setPrivateData(param0: com.liveperson.api.response.model.UserProfile.PrivateData): void;
						public setEmail(param0: string): void;
						public getFirstName(): string;
						public getPrivateData(): com.liveperson.api.response.model.UserProfile.PrivateData;
						public setAvatarUrl(param0: string): void;
						public getUserType(): com.liveperson.api.response.model.UserProfile.UserType;
						public getLocalId(): number;
						public getEmail(): string;
						public constructor(param0: string, param1: string, param2: com.liveperson.api.response.model.UserProfile.UserType);
						public constructor(param0: org.json.JSONObject);
						public getOriginatorId(): string;
						public getBackgndImgUri(): string;
						public getRole(): string;
						public setRole(param0: string): void;
						public setBackgndImgUri(param0: string): void;
						public setDescription(param0: string): void;
						public setUserType(param0: com.liveperson.api.response.model.UserProfile.UserType): void;
						public getLastName(): string;
						public setLastName(param0: string): void;
						public getRequestId(): number;
						public addToJson(param0: org.json.JSONObject): void;
						public setNickname(param0: string): void;
						public setMobileNumber(param0: string): void;
						public getDescription(): string;
						public setLocalId(param0: number): void;
						public getNickname(): string;
					}
					export module UserProfile {
						export class PrivateData {
							public static class: java.lang.Class<com.liveperson.api.response.model.UserProfile.PrivateData>;
							public mobileNum: string;
							public mail: string;
							public addToJson(param0: org.json.JSONObject): void;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string, param1: string);
						}
						export class PushNotificationData {
							public static class: java.lang.Class<com.liveperson.api.response.model.UserProfile.PushNotificationData>;
							public serviceName: string;
							public certName: string;
							public token: string;
							public addToJson(param0: org.json.JSONObject): void;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string, param1: string, param2: string);
						}
						export class UserType {
							public static class: java.lang.Class<com.liveperson.api.response.model.UserProfile.UserType>;
							public static CONSUMER: com.liveperson.api.response.model.UserProfile.UserType;
							public static AGENT: com.liveperson.api.response.model.UserProfile.UserType;
							public static CONTROLLER: com.liveperson.api.response.model.UserProfile.UserType;
							public static values(): native.Array<com.liveperson.api.response.model.UserProfile.UserType>;
							public static valueOf(param0: string): com.liveperson.api.response.model.UserProfile.UserType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class CSAT {
						public static class: java.lang.Class<com.liveperson.api.response.types.CSAT>;
						public csatRate: number;
						public csatResolutionConfirmation: string;
						public csatStatus: com.liveperson.api.response.types.CsatStatus;
						public isShowedCsat(): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
						public constructor(param0: org.json.JSONObject);
					}
					export module CSAT {
						export class CSAT_SHOW_STATUS {
							public static class: java.lang.Class<com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS>;
							public static NO_VALUE: com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
							public static NOT_SHOWN: com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
							public static SHOWN: com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
							public static NO_NEED_TO_SHOW: com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
							public static values(): native.Array<com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS>;
							public static parse(param0: number): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
							public static valueOf(param0: string): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
							public getValue(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class CloseReason {
						public static class: java.lang.Class<com.liveperson.api.response.types.CloseReason>;
						public static CONSUMER: com.liveperson.api.response.types.CloseReason;
						public static AGENT: com.liveperson.api.response.types.CloseReason;
						public static SYSTEM: com.liveperson.api.response.types.CloseReason;
						public static TIMEOUT: com.liveperson.api.response.types.CloseReason;
						public static parse(param0: number): com.liveperson.api.response.types.CloseReason;
						public static parse(param0: string): com.liveperson.api.response.types.CloseReason;
						public static values(): native.Array<com.liveperson.api.response.types.CloseReason>;
						public static valueOf(param0: string): com.liveperson.api.response.types.CloseReason;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class ConversationState {
						public static class: java.lang.Class<com.liveperson.api.response.types.ConversationState>;
						public static CLOSE: com.liveperson.api.response.types.ConversationState;
						public static LOCKED: com.liveperson.api.response.types.ConversationState;
						public static OPEN: com.liveperson.api.response.types.ConversationState;
						public static PENDING: com.liveperson.api.response.types.ConversationState;
						public static QUEUED: com.liveperson.api.response.types.ConversationState;
						public static values(): native.Array<com.liveperson.api.response.types.ConversationState>;
						public static parse(param0: string): com.liveperson.api.response.types.ConversationState;
						public static valueOf(param0: string): com.liveperson.api.response.types.ConversationState;
						public static parse(param0: number): com.liveperson.api.response.types.ConversationState;
						public static parse(param0: com.liveperson.api.response.types.DialogState): com.liveperson.api.response.types.ConversationState;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class CsatStatus {
						public static class: java.lang.Class<com.liveperson.api.response.types.CsatStatus>;
						public static FILLED: com.liveperson.api.response.types.CsatStatus;
						public static PARTIALLY_FILLED: com.liveperson.api.response.types.CsatStatus;
						public static SKIPPED: com.liveperson.api.response.types.CsatStatus;
						public static EMPTY: com.liveperson.api.response.types.CsatStatus;
						public static valueOf(param0: string): com.liveperson.api.response.types.CsatStatus;
						public static get(param0: string): com.liveperson.api.response.types.CsatStatus;
						public static values(): native.Array<com.liveperson.api.response.types.CsatStatus>;
						public getValue(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class DeliveryStatus {
						public static class: java.lang.Class<com.liveperson.api.response.types.DeliveryStatus>;
						public static ACCEPT: com.liveperson.api.response.types.DeliveryStatus;
						public static READ: com.liveperson.api.response.types.DeliveryStatus;
						public static VIEWED: com.liveperson.api.response.types.DeliveryStatus;
						public static ERROR: com.liveperson.api.response.types.DeliveryStatus;
						public static ABORTED: com.liveperson.api.response.types.DeliveryStatus;
						public static SUBMITTED: com.liveperson.api.response.types.DeliveryStatus;
						public static ACTION: com.liveperson.api.response.types.DeliveryStatus;
						public static valueOf(param0: string): com.liveperson.api.response.types.DeliveryStatus;
						public static values(): native.Array<com.liveperson.api.response.types.DeliveryStatus>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class DialogState {
						public static class: java.lang.Class<com.liveperson.api.response.types.DialogState>;
						public static CLOSE: com.liveperson.api.response.types.DialogState;
						public static LOCKED: com.liveperson.api.response.types.DialogState;
						public static OPEN: com.liveperson.api.response.types.DialogState;
						public static PENDING: com.liveperson.api.response.types.DialogState;
						public static QUEUED: com.liveperson.api.response.types.DialogState;
						public static parse(param0: number): com.liveperson.api.response.types.DialogState;
						public static parse(param0: com.liveperson.api.response.types.ConversationState): com.liveperson.api.response.types.DialogState;
						public static parse(param0: string): com.liveperson.api.response.types.DialogState;
						public static values(): native.Array<com.liveperson.api.response.types.DialogState>;
						public static valueOf(param0: string): com.liveperson.api.response.types.DialogState;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class DialogType {
						public static class: java.lang.Class<com.liveperson.api.response.types.DialogType>;
						public static MAIN: com.liveperson.api.response.types.DialogType;
						public static POST_SURVEY: com.liveperson.api.response.types.DialogType;
						public static AGENT: com.liveperson.api.response.types.DialogType;
						public static OTHER: com.liveperson.api.response.types.DialogType;
						public static parse(param0: string): com.liveperson.api.response.types.DialogType;
						public static values(): native.Array<com.liveperson.api.response.types.DialogType>;
						public static valueOf(param0: string): com.liveperson.api.response.types.DialogType;
						public static parse(param0: number): com.liveperson.api.response.types.DialogType;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class TTRType {
						public static class: java.lang.Class<com.liveperson.api.response.types.TTRType>;
						public static CUSTOM: com.liveperson.api.response.types.TTRType;
						public static NORMAL: com.liveperson.api.response.types.TTRType;
						public static PRIORITIZED: com.liveperson.api.response.types.TTRType;
						public static URGENT: com.liveperson.api.response.types.TTRType;
						public static NIGHT: com.liveperson.api.response.types.TTRType;
						public static values(): native.Array<com.liveperson.api.response.types.TTRType>;
						public static valueOf(param0: string): com.liveperson.api.response.types.TTRType;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module sdk {
				export class LPConversationData {
					public static class: java.lang.Class<com.liveperson.api.sdk.LPConversationData>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.liveperson.api.sdk.LPConversationData>;
					public constructor(param0: globalAndroid.os.Parcel);
					public getId(): string;
					public constructor(param0: string);
					public getCloseReason(): com.liveperson.api.response.types.CloseReason;
					public setCloseReason(param0: com.liveperson.api.response.types.CloseReason): void;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module api {
			export module sdk {
				export class PermissionType {
					public static class: java.lang.Class<com.liveperson.api.sdk.PermissionType>;
					public static PHOTO_SHARING: com.liveperson.api.sdk.PermissionType;
					public static DOCUMENT_SHARING: com.liveperson.api.sdk.PermissionType;
					public static VOICE_RECORDING: com.liveperson.api.sdk.PermissionType;
					public static values(): native.Array<com.liveperson.api.sdk.PermissionType>;
					public static valueOf(param0: string): com.liveperson.api.sdk.PermissionType;
				}
			}
		}
	}
}

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
				public static LIBRARY_PACKAGE_NAME: string;
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
			export module auth {
				export class LPAuthenticationParams {
					public static class: java.lang.Class<com.liveperson.infra.auth.LPAuthenticationParams>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.liveperson.infra.auth.LPAuthenticationParams>;
					public getAuthKey(): string;
					public describeContents(): number;
					public static printSignupDeprecationNotice(): void;
					public setHostAppRedirectUri(param0: string): com.liveperson.infra.auth.LPAuthenticationParams;
					public addCertificatePinningKey(param0: string): com.liveperson.infra.auth.LPAuthenticationParams;
					public getHostAppRedirectUri(): string;
					public isAuthenticated(): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor();
					public setAuthKey(param0: string): com.liveperson.infra.auth.LPAuthenticationParams;
					public setHostAppJWT(param0: string): com.liveperson.infra.auth.LPAuthenticationParams;
					public getAuthType(): com.liveperson.infra.auth.LPAuthenticationType;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: com.liveperson.infra.auth.LPAuthenticationType);
					public getCertificatePinningKeys(): java.util.List<string>;
					public getHostAppJWT(): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module infra {
			export module auth {
				export class LPAuthenticationType {
					public static class: java.lang.Class<com.liveperson.infra.auth.LPAuthenticationType>;
					public static SIGN_UP: com.liveperson.infra.auth.LPAuthenticationType;
					public static UN_AUTH: com.liveperson.infra.auth.LPAuthenticationType;
					public static AUTH: com.liveperson.infra.auth.LPAuthenticationType;
					public static Companion: com.liveperson.infra.auth.LPAuthenticationType.Companion;
					public static valueOf(param0: string): com.liveperson.infra.auth.LPAuthenticationType;
					public static values(): native.Array<com.liveperson.infra.auth.LPAuthenticationType>;
					public getStorageVal(): number;
				}
				export module LPAuthenticationType {
					export class Companion {
						public static class: java.lang.Class<com.liveperson.infra.auth.LPAuthenticationType.Companion>;
						public fromStorageVal(param0: number): com.liveperson.infra.auth.LPAuthenticationType;
					}
				}
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
						public static KEY_METADATA: string;
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
				export class AndroidLogger extends com.liveperson.infra.log.Logger {
					public static class: java.lang.Class<com.liveperson.infra.log.AndroidLogger>;
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public wtf(param0: string, param1: string): void;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public constructor();
					public i(param0: string, param1: string): void;
					public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
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
					public static w(param0: string, param1: string, param2: string): void;
					public static i(param0: string, param1: string): void;
					public static d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static d(param0: string, param1: string, param2: string): void;
					public static e(param0: string, param1: string): void;
					public static i(param0: string, param1: string, param2: string, param3: java.lang.Throwable): void;
					public static e(param0: string, param1: string, param2: string, param3: java.lang.Throwable): void;
					public static sendUsageStatistics(param0: string, param1: string): void;
					public constructor();
					public static v(param0: string, param1: string, param2: string, param3: java.lang.Throwable): void;
					public static d(param0: string, param1: string): void;
					public static i(param0: string, param1: string, param2: string): void;
					public static v(param0: string, param1: string): void;
					public static w(param0: string, param1: string): void;
					public static d(param0: string, param1: string, param2: string, param3: java.lang.Throwable): void;
					public static setLoggosEnabled(param0: boolean): void;
					public static v(param0: string, param1: string, param2: string): void;
					public static v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static e(param0: string, param1: string, param2: string): void;
					public static setDebugMode(param0: boolean): void;
					public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static w(param0: string, param1: string, param2: string, param3: java.lang.Throwable): void;
					public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
					public static setLogger(param0: com.liveperson.infra.log.Logger): void;
					public static i(param0: string, param1: string, param2: java.lang.Throwable): void;
				}
				export module LPMobileLog {
					export class FlowTags {
						public static class: java.lang.Class<com.liveperson.infra.log.LPMobileLog.FlowTags>;
						public static DIALOGS: string;
						public static LOGIN: string;
						public static DECRYPTION: string;
						public static QUICK_REPLIES: string;
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
				export class Logger {
					public static class: java.lang.Class<com.liveperson.infra.log.Logger>;
					/**
					 * Constructs a new instance of the com.liveperson.infra.log.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						v(param0: string, param1: string): void;
						v(param0: string, param1: string, param2: java.lang.Throwable): void;
						d(param0: string, param1: string): void;
						d(param0: string, param1: string, param2: java.lang.Throwable): void;
						i(param0: string, param1: string): void;
						i(param0: string, param1: string, param2: java.lang.Throwable): void;
						w(param0: string, param1: string): void;
						w(param0: string, param1: string, param2: java.lang.Throwable): void;
						e(param0: string, param1: string): void;
						e(param0: string, param1: string, param2: java.lang.Throwable): void;
						wtf(param0: string, param1: string): void;
						wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					});
					public constructor();
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public i(param0: string, param1: string): void;
					public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public d(param0: string, param1: string, param2: java.lang.Throwable): void;
					public wtf(param0: string, param1: string): void;
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
				export class TestLogger extends com.liveperson.infra.log.Logger {
					public static class: java.lang.Class<com.liveperson.infra.log.TestLogger>;
					public i(param0: string, param1: string, param2: java.lang.Throwable): void;
					public v(param0: string, param1: string, param2: java.lang.Throwable): void;
					public e(param0: string, param1: string, param2: java.lang.Throwable): void;
					public wtf(param0: string, param1: string): void;
					public d(param0: string, param1: string): void;
					public e(param0: string, param1: string): void;
					public constructor();
					public i(param0: string, param1: string): void;
					public wtf(param0: string, param1: string, param2: java.lang.Throwable): void;
					public w(param0: string, param1: string): void;
					public v(param0: string, param1: string): void;
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
							public static SDK_VERSION: string;
							public static DATE_FORMAT: string;
							public setAccountId(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setTime(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setTime(param0: number): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setIsFeatureStatistics(param0: boolean): void;
							public getLevel(): string;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
							public setUrl(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setLogContext(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setLevel(param0: string): com.liveperson.infra.log.logreporter.loggos.LoggosMessage;
							public setSdkVersion(param0: string): void;
							public getIsFeatureStatistics(): boolean;
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
			export module messaging {
				export class BuildConfig {
					public static class: java.lang.Class<com.liveperson.infra.messaging.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
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
				export class BuildConfig {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
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
				export class ConversationActivity implements com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks, com.liveperson.infra.ui.view.uicomponents.IConnectionChangedCustomView {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.ConversationActivity>;
					public static INTENT_ACTION: string;
					public static TYPE_CLOSE_CHAT: number;
					public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
					public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
					public onSurveySubmitted(param0: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public onPrepareOptionsMenu(param0: globalAndroid.view.Menu): boolean;
					public setCaptionPreviewMode(param0: boolean, param1: string): void;
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
						getConversationFragment(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
						showConversation(param0: globalAndroid.app.Activity, param1: string, param2: com.liveperson.infra.auth.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
						hideConversation(param0: globalAndroid.app.Activity): void;
						onAgentAvatarTapped(param0: string): void;
					});
					public constructor();
					public logout(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public showConversation(param0: globalAndroid.app.Activity, param1: string, param2: com.liveperson.infra.auth.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
					public onAgentAvatarTapped(param0: string): void;
					public hideConversation(param0: globalAndroid.app.Activity): void;
					public init(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData): void;
					public isInitialized(): boolean;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
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
				export class MessagingUIFactory implements com.liveperson.infra.messaging_ui.IMessagingUi, com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.MessagingUIFactory>;
					public static instance: com.liveperson.infra.messaging_ui.MessagingUIFactory;
					public mMessagingUi: com.liveperson.infra.messaging_ui.MessagingUi;
					public showConversation(param0: globalAndroid.app.Activity, param1: string, param2: com.liveperson.infra.auth.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
					public logout(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public setPushNotificationReceived(): void;
					public init(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData): void;
					public isInitialized(): boolean;
					public restart(): void;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
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
				export class MessagingUi implements com.liveperson.infra.messaging_ui.IMessagingUi, com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.MessagingUi>;
					public static TAG: string;
					public showConversation(param0: globalAndroid.app.Activity, param1: string, param2: com.liveperson.infra.auth.LPAuthenticationParams, param3: com.liveperson.infra.ConversationViewParams): boolean;
					public logout(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					public onAgentAvatarTapped(param0: string): void;
					public constructor();
					public hideConversation(param0: globalAndroid.app.Activity): void;
					public clear(): void;
					public init(param0: globalAndroid.content.Context, param1: com.liveperson.infra.messaging_ui.MessagingUiInitData): void;
					public restart(): void;
					public isInitialized(): boolean;
					public getInitBrandId(): string;
					public getConversationFragment(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
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
				export class MessagingUiInitData extends com.liveperson.messaging.MessagingInitData {
					public static class: java.lang.Class<com.liveperson.infra.messaging_ui.MessagingUiInitData>;
					public constructor(param0: com.liveperson.infra.callbacks.InitLivePersonCallBack, param1: string, param2: com.liveperson.infra.Interceptors);
					public getInitCallBack(): com.liveperson.infra.callbacks.InitLivePersonCallBack;
					public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.infra.Interceptors);
					public constructor(param0: string, param1: com.liveperson.infra.Interceptors);
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
					export class CaptionPreviewFragment {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.fragment.CaptionPreviewFragment>;
						public static TAG: string;
						public static BRAND_ID: string;
						public static TARGET_ID: string;
						public static IMAGE_URI: string;
						public static IMAGE_ORIENTATION: string;
						public static IMAGE_FROM_CAMERA: string;
						public constructor();
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
						public onDestroy(): void;
						public onResume(): void;
						public onCreate(param0: globalAndroid.os.Bundle): void;
						public onAttach(param0: globalAndroid.content.Context): void;
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
					export class ConnectionStatusController extends com.liveperson.infra.ui.view.ui.CustomTextView {
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
						public static IS_PUSH_NOTIFICATION_CLICKED: string;
						public static BUNDLE_CONVERSATION_ID: string;
						public static PICK_PHOTO_FOR_MESSAGE: number;
						public static REQUEST_TAKE_PHOTO: number;
						public static PICK_DOCUMENT_FOR_MESSAGE: number;
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
						public mFileUploadStatusReceiver: com.liveperson.infra.LocalBroadcastReceiver;
						public mFragmentContainer: com.liveperson.infra.messaging_ui.fragment.ConversationFragmentCallbacks;
						public mFullImageFragment: com.liveperson.infra.messaging_ui.fragment.FullImageFragment;
						public mInlineMessagesController: com.liveperson.infra.messaging_ui.uicomponents.inlinemessages.InlineMessagesController;
						public mBrandId: string;
						public mLPAuthenticationParams: com.liveperson.infra.auth.LPAuthenticationParams;
						public mConversationViewParams: com.liveperson.infra.ConversationViewParams;
						public mIConversationProvider: com.liveperson.infra.ui.view.uicomponents.IConversationProvider;
						public conversationId: string;
						public mContextualActionBehavior: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior;
						public sendCSAT(param0: number, param1: number): void;
						public setCaptionPreviewMode(param0: boolean, param1: string): void;
						public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
						public static newInstance(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams, param3: boolean): com.liveperson.infra.messaging_ui.fragment.ConversationFragment;
						public onPause(): void;
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
						public openDocumentProvider(): void;
						public registerFormStateChangeReceiver(): void;
						public registerDialogStateChangedReceiver(): void;
						public onConversationFragmentClosed(): void;
						public registerConversationStateChangedReceiver(): void;
						public registerFileUploadStatusReceiver(): void;
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
						public performOpenLink(param0: string, param1: boolean, param2: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType): void;
						public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						public initRecyclerView(): void;
						public unregisterFragment(): void;
						public initRelevantToolbar(): void;
						public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
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
							setCaptionPreviewMode(param0: boolean, param1: string): void;
						});
						public constructor();
						public setFeedBackMode(param0: boolean, param1: com.liveperson.infra.messaging_ui.fragment.IFeedbackActions): void;
						public setCaptionPreviewMode(param0: boolean, param1: string): void;
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
							public setCaptionPreviewMode(param0: boolean, param1: string): void;
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
					export class FeedbackFragment implements com.liveperson.infra.messaging_ui.fragment.IFeedbackActions, com.liveperson.infra.ui.view.uicomponents.IConnectionChangedCustomView {
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
							setCaptionPreviewMode(param0: boolean, param1: string): void;
						});
						public constructor();
						public sendCSAT(param0: number, param1: number): void;
						public onSurveySubmitted(param0: string, param1: number): void;
						public setCaptionPreviewMode(param0: boolean, param1: string): void;
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
							public setCaptionPreviewMode(param0: boolean, param1: string): void;
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
				export module toolbar {
					export class CaptionPreviewToolBar extends com.liveperson.infra.messaging_ui.toolbar.LPToolBar {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.toolbar.CaptionPreviewToolBar>;
						public setTitle(param0: string): void;
						public constructor(param0: globalAndroid.content.Context);
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
					export class AmsEnterMessage extends com.liveperson.infra.ui.view.uicomponents.BaseEnterMessage implements com.liveperson.infra.controller.AudioRecordable {
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
						public sendMessage(): void;
						public sendMessage(param0: string): void;
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
						public onUpdate(param0: boolean): void;
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
					export class AttachmentMenu implements com.liveperson.infra.ui.view.uicomponents.IOverflowMenu {
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
								onDocumentButtonPressed(): void;
							});
							public constructor();
							public onDocumentButtonPressed(): void;
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
						export class ChatMessageListRecyclerView implements com.liveperson.infra.ui.view.uicomponents.IConnectionChangedCustomView, com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageBgFgListener {
							public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.list.ChatMessageListRecyclerView>;
							public static TAG: string;
							public focusLastItem(): void;
							public removeQuickRepliesMessageOfConversation(param0: string): void;
							public removeQuickRepliesMessageOfDialog(param0: string): void;
							public onBackground(): void;
							public setAgentIsTyping(param0: boolean, param1: string): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onFinishInflate(): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public initData(param0: com.liveperson.messaging.Messaging, param1: string, param2: globalAndroid.view.View, param3: com.liveperson.infra.messaging_ui.uicomponents.IScrollDownIndicator, param4: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior, param5: globalAndroid.os.Parcelable, param6: com.liveperson.infra.messaging_ui.view.adapter.MessagingAdapterListener): void;
							public onConnectionChanged(param0: boolean): void;
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
							public onClearAllMessages(param0: number, param1: number): void;
							public getItemViewType(param0: number): number;
							public notifyUnreadMessagesChanged(param0: number, param1: string, param2: number): void;
							public onNewSystemMessageAdded(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
							public onItemRemoved(param0: number): void;
							public onItemMoved(param0: number, param1: number): void;
							public onMessageUpdated(param0: number, param1: globalAndroid.os.Bundle): void;
							public onCreateHeaderViewHolder(param0: globalAndroid.view.ViewGroup): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder;
							public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder;
							public onForeground(): void;
							public onBindViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number): void;
							public onHistoryLoaded(param0: number, param1: number, param2: boolean): void;
							public getHeaderId(param0: number): number;
							public onNewUserMessageAdded(param0: number): void;
							public onBindViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number, param2: java.util.List<any>): void;
							public onBindHeaderViewHolder(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder, param1: number): void;
							public onBackground(): void;
							public onBindHeaderViewHolder(param0: any, param1: number): void;
							public onNewUnreadMessages(param0: number, param1: number): void;
							public getLastVisibleItemPosition(): number;
							public onNewAgentMessageReceived(param0: number, param1: com.liveperson.messaging.model.FullMessageRow): void;
							public onNewMessagesLoaded(param0: number, param1: number, param2: number): void;
							public getItemCount(): number;
							public getFirstVisibleItemPosition(): number;
							public onViewRecycled(param0: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder): void;
							public onCreateHeaderViewHolder(param0: globalAndroid.view.ViewGroup): any;
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
							export abstract class BaseViewBuilderVisitor extends com.liveperson.messaging.structuredcontent.visitor.ElementVisitor {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.BaseViewBuilderVisitor>;
								public mContext: globalAndroid.content.Context;
								public mGlobalListener: com.liveperson.infra.messaging_ui.uicomponents.list.OnSCActionClickListener;
								public mBrandId: string;
								public mContentDescriptionStringBuilder: java.lang.StringBuilder;
								public mStructuredContentContainerOperations: com.liveperson.infra.messaging_ui.uicomponents.structuredcontent.visitor.ViewBuilderVisitor.StructuredContentContainerOperations;
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
								public createElementContentDescription(param0: globalAndroid.view.View, param1: string, param2: string, param3: string): string;
								public convertDip2Pixels(param0: globalAndroid.content.Context, param1: number): number;
								public setStyle(param0: globalAndroid.widget.TextView, param1: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle): void;
								public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement): void;
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
								public createElementContentDescription(param0: globalAndroid.view.View, param1: string, param2: string, param3: string): string;
								public setStyle(param0: globalAndroid.widget.TextView, param1: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle): void;
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
					export class ConversationInBackgroundService {
						public static class: java.lang.Class<com.liveperson.infra.messaging_ui.utils.ConversationInBackgroundService>;
						public static BUNDLE_BRAND_ID: string;
						public constructor();
						public onDestroy(): void;
						public onTaskRemoved(param0: globalAndroid.content.Intent): void;
						public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
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
									performOpenLink(param0: string, param1: boolean, param2: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType): void;
									PerformCopyTextToClipboard(param0: string): void;
									performSaveFile(param0: string): void;
									performFileAction(param0: string, param1: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action): void;
								});
								public constructor();
								public performFileAction(param0: string, param1: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualItemAction.Action): void;
								public PerformCopyTextToClipboard(param0: string): void;
								public performSaveFile(param0: string): void;
								public performOpenLink(param0: string, param1: boolean, param2: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType): void;
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
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public getAmsDownloadableFileViewProcessor(): com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewProcessor;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public setMessageImage(param0: string, param1: string, param2: com.liveperson.infra.database.tables.FilesTable.LoadStatus, param3: string): void;
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
								public updateContentDescription(): void;
								public recycle(): void;
								public constructor(param0: globalAndroid.view.View);
								public onLinkClick(): void;
							}
							export module AmsAgentURLViewHolder {
								export class MyLinkPreviewCallback extends com.liveperson.infra.utils.LinkPreviewCallback {
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
							export class AmsAgentViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.StartViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsAgentViewHolder>;
								public mAgentAvatar: globalAndroid.widget.ImageView;
								public mAgentNickName: string;
								public mContextualActionBehavior: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior;
								public setContextualActionBehavior(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior): void;
								public applyColors(): void;
								public onLinkLongClick(): boolean;
								public onBind(): void;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public updateContentDescription(): void;
								public setMessageText(param0: string, param1: boolean): void;
								public setOnAgentAvatarClicked(param0: globalAndroid.view.View.OnClickListener): void;
								public setAgentAvatar(param0: string): void;
								public setAgentNickName(param0: string): void;
								public constructor(param0: globalAndroid.view.View);
								public setMessageTextListeners(): void;
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
							export class AmsBrandMsgViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.StartViewHolder {
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
							export class AmsConsumerFileViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerFileViewHolder>;
								public static TAG: string;
								public mFileStatusView: globalAndroid.widget.ImageView;
								public mDownloadableFileViewProcessor: com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewProcessor;
								public mMessageType: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public getAmsDownloadableFileViewProcessor(): com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsDownloadableFileViewProcessor;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public setMessageImage(param0: string, param1: string, param2: com.liveperson.infra.database.tables.FilesTable.LoadStatus, param3: string): void;
								public setImageLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
								public recycle(): void;
								public setImageClickListener(param0: globalAndroid.view.View.OnClickListener): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
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
							export class AmsConsumerURLViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerURLViewHolder>;
								public getTextToCopy(): string;
								public applyColors(): void;
								public setTimestamp(param0: number): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public setMessageText(param0: string, param1: boolean): void;
								public updateContentDescription(): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior);
								public recycle(): void;
								public constructor(param0: globalAndroid.view.View);
								public onLinkClick(): void;
							}
							export module AmsConsumerURLViewHolder {
								export class MyLinkPreviewCallback extends com.liveperson.infra.utils.LinkPreviewCallback {
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
							export class AmsConsumerViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.EndViewHolder {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder>;
								public mMessageStateText: globalAndroid.widget.TextView;
								public mMessageStateIcon: globalAndroid.widget.ImageView;
								public mMessageErrorView: globalAndroid.widget.ImageView;
								public static mSdkMessageState: number;
								public static mMessageStateTextArray: native.Array<string>;
								public mViewHolderType: com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder.ViewHolderType;
								public mMessageType: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
								public mContextualActionBehavior: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior;
								public onLinkLongClick(): boolean;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public setStateVisibility(param0: number): void;
								public updateContentDescription(): void;
								public constructor(param0: globalAndroid.view.View);
								public getErrorView(): globalAndroid.widget.ImageView;
								public setContextualActionBehavior(param0: com.liveperson.infra.messaging_ui.view.adapter.copybehavior.ContextualActionBehavior): void;
								public applyColors(): void;
								public onBind(): void;
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public setMessageText(param0: string, param1: boolean): void;
								public setViewAppearanceByState(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: com.liveperson.infra.model.Message): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
								public setMessageTextListeners(): void;
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
							export class AmsConsumerVoiceViewHolder extends com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerViewHolder implements com.liveperson.infra.controller.AudioPlayable {
								public static class: java.lang.Class<com.liveperson.infra.messaging_ui.view.adapter.viewholder.AmsConsumerVoiceViewHolder>;
								public static TAG: string;
								public stopPlaying(): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
								public applyChanges(param0: globalAndroid.os.Bundle, param1: com.liveperson.infra.model.Message): void;
								public updateContentDescription(): void;
								public setVoiceProperties(param0: string, param1: com.liveperson.infra.database.tables.FilesTable.LoadStatus, param2: com.liveperson.messaging.model.FullMessageRow): void;
								public playVoiceMessage(param0: string): void;
								public recycle(): void;
								public constructor(param0: globalAndroid.view.View, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param2: string);
								public setCurrentPlaying(param0: string, param1: number, param2: number): void;
								public resend(param0: com.liveperson.infra.model.Message, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
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
							export class AmsControllerSystemViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder {
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
							export class AmsLoadMoreViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder {
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
							export class AmsSystemDialogResolvedViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder {
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
							export class AmsSystemMaskedViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder {
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
							export class AmsSystemResolvedViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder {
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
							export class UiUnreadIndicatorViewHolder extends com.liveperson.infra.ui.view.adapter.viewholder.MiddleViewHolder {
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
					public getMetadata(): string;
					public setDialogId(param0: string): void;
					public getServerSequence(): number;
					public getContentType(): string;
					public setMessage(param0: string): void;
					public getEventId(): string;
					public setMetadata(param0: string): void;
					public setMessageId(param0: number): void;
					public getTimeStamp(): number;
					public toString(): string;
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
			export module ui {
				export class BuildConfig {
					public static class: java.lang.Class<com.liveperson.infra.ui.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
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
								public mTimeStamp: number;
								public setContentDescription(param0: string): void;
								public getTimeFormat(param0: number): string;
								public setOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
								public setContextualBehaviorOnLongClick(param0: globalAndroid.view.View.OnLongClickListener): boolean;
								public linkifyText(param0: globalAndroid.widget.TextView): boolean;
								public updateContentDescription(): void;
								public setTimestampTextView(param0: number): void;
								public setMessageTextOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
								public recycle(): void;
								public getContext(): globalAndroid.content.Context;
								public setContextualBehaviorOnClick(param0: globalAndroid.view.View.OnClickListener): void;
								public getLinkType(): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType;
								public setMessageTextOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
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
							export module BaseViewHolder {
								export class LinkType {
									public static class: java.lang.Class<com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType>;
									public static URL: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType;
									public static PHONE: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType;
									public static EMAIL: com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType;
									public static values(): native.Array<com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType>;
									public static valueOf(param0: string): com.liveperson.infra.ui.view.adapter.viewholder.BaseViewHolder.LinkType;
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
							public hasStickyHeader(param0: globalAndroid.view.View, param1: number, param2: number): boolean;
							public constructor(param0: com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter<any>, param1: com.liveperson.infra.ui.view.header.caching.HeaderProvider, param2: com.liveperson.infra.ui.view.header.util.OrientationProvider, param3: com.liveperson.infra.ui.view.header.calculation.DimensionCalculator);
							public hasNewHeader(param0: number, param1: boolean): boolean;
							public initHeaderBounds(param0: globalAndroid.graphics.Rect, param1: androidx.recyclerview.widget.RecyclerView, param2: globalAndroid.view.View, param3: globalAndroid.view.View, param4: boolean): void;
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
							public getHeaderView(param0: androidx.recyclerview.widget.RecyclerView, param1: number): globalAndroid.view.View;
							public findHeaderPositionUnder(param0: number, param1: number): number;
							public constructor(param0: com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter<any>);
							public getItemOffsets(param0: globalAndroid.graphics.Rect, param1: globalAndroid.view.View, param2: androidx.recyclerview.widget.RecyclerView, param3: androidx.recyclerview.widget.RecyclerView.State): void;
							public onDrawOver(param0: globalAndroid.graphics.Canvas, param1: androidx.recyclerview.widget.RecyclerView, param2: androidx.recyclerview.widget.RecyclerView.State): void;
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
									getHeader(param0: androidx.recyclerview.widget.RecyclerView, param1: number): globalAndroid.view.View;
									invalidate(): void;
								});
								public constructor();
								public invalidate(): void;
								public getHeader(param0: androidx.recyclerview.widget.RecyclerView, param1: number): globalAndroid.view.View;
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
								public invalidate(): void;
								public getHeader(param0: androidx.recyclerview.widget.RecyclerView, param1: number): globalAndroid.view.View;
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
								public drawHeader(param0: androidx.recyclerview.widget.RecyclerView, param1: globalAndroid.graphics.Canvas, param2: globalAndroid.view.View, param3: globalAndroid.graphics.Rect): void;
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
								public isReverseLayout(param0: androidx.recyclerview.widget.RecyclerView): boolean;
								public constructor();
								public getOrientation(param0: androidx.recyclerview.widget.RecyclerView): number;
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
									getOrientation(param0: androidx.recyclerview.widget.RecyclerView): number;
									isReverseLayout(param0: androidx.recyclerview.widget.RecyclerView): boolean;
								});
								public constructor();
								public isReverseLayout(param0: androidx.recyclerview.widget.RecyclerView): boolean;
								public getOrientation(param0: androidx.recyclerview.widget.RecyclerView): number;
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
							export class CircleTransform extends com.liveperson.infra.utils.picasso.Transformation {
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
				export class DocumentUtils {
					public static class: java.lang.Class<com.liveperson.infra.utils.DocumentUtils>;
					public static getDocumentName(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context): string;
					public constructor();
					public static getDocumentSize(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context): number;
					public static saveOriginalDocument(param0: globalAndroid.net.Uri, param1: globalAndroid.content.Context, param2: string, param3: native.Array<number>): string;
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
					public static deleteAllSharedFiles(param0: globalAndroid.content.Context): void;
					public constructor();
					public static getFilePath(param0: globalAndroid.content.Context, param1: string, param2: string): java.io.File;
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

declare module com {
	export module liveperson {
		export module lp_monitoring_sdk {
			export class BuildConfig {
				public static class: java.lang.Class<com.liveperson.lp_monitoring_sdk.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
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
		export module messaging {
			export class ActionFailureReason {
				public static class: java.lang.Class<com.liveperson.messaging.ActionFailureReason>;
				public static NO_NETWORK: com.liveperson.messaging.ActionFailureReason;
				public static NOT_ACTIVE: com.liveperson.messaging.ActionFailureReason;
				public static POST_SURVEY_IN_PROGRESS: com.liveperson.messaging.ActionFailureReason;
				public static values(): native.Array<com.liveperson.messaging.ActionFailureReason>;
				public static valueOf(param0: string): com.liveperson.messaging.ActionFailureReason;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export class GeneralMessagingResponseHandler extends com.liveperson.infra.network.socket.GeneralResponseHandler {
				public static class: java.lang.Class<com.liveperson.messaging.GeneralMessagingResponseHandler>;
				public createInstance(param0: string): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export class IMessaging {
				public static class: java.lang.Class<com.liveperson.messaging.IMessaging>;
				/**
				 * Constructs a new instance of the com.liveperson.messaging.IMessaging interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					init(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack): void;
					init(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
					clearAllConversationData(param0: string): void;
					shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
					logout(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					logout(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
					isInitialized(): boolean;
					sendMessage(param0: string, param1: string, param2: string, param3: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
					sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
					sendFormSubmissionMessageCommand(param0: string): void;
					resendMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
					resendMessage(param0: string, param1: string, param2: number, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
					updateMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					registerPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.auth.LPAuthenticationParams, param4: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
					unregisterPusher(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>, param3: boolean): void;
					updateTokenInBackground(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams): void;
					changeChatState(param0: string, param1: string, param2: com.liveperson.infra.model.types.ChatState): com.liveperson.messaging.ActionFailureReason;
					resolveConversation(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
					closeDialog(param0: string): com.liveperson.messaging.ActionFailureReason;
					markConversationAsUrgent(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
					markConversationAsNormal(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
					sendCSAT(param0: string, param1: string, param2: number, param3: number): void;
					sendUserProfile(param0: string, param1: com.liveperson.messaging.model.UserProfile): void;
					setCallback(param0: com.liveperson.api.LivePersonCallback): void;
					removeCallback(): void;
					checkActiveConversation(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Boolean,java.lang.Exception>): void;
					checkConversationIsMarkedAsUrgent(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Boolean,java.lang.Exception>): void;
					checkAgentID(param0: string, param1: com.liveperson.infra.ICallback<com.liveperson.messaging.model.AgentData,java.lang.Exception>): void;
					clearHistory(param0: string): boolean;
					getMaskedMessage(param0: string, param1: string): com.liveperson.infra.utils.MaskedMessage;
					generateUploadToken(param0: string, param1: string, param2: string): void;
					sendFileMessage(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: boolean): void;
					downloadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string): void;
					removeMultipleOlderImages(param0: globalAndroid.content.Context, param1: string, param2: string): void;
					isSocketOpen(param0: string): boolean;
					connect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams, param3: boolean, param4: boolean): void;
					connect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
					reconnect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams): void;
					disconnect(param0: string): void;
					moveToBackground(param0: string, param1: number): void;
					moveToForeground(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
					serviceStarted(param0: string): void;
					serviceStopped(param0: string): void;
					getUnreadMessagesCount(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
					getNumUnreadMessages(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
				});
				public constructor();
				public init(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack): void;
				public closeDialog(param0: string): com.liveperson.messaging.ActionFailureReason;
				public moveToBackground(param0: string, param1: number): void;
				public sendFormSubmissionMessageCommand(param0: string): void;
				public resolveConversation(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public registerPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.auth.LPAuthenticationParams, param4: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
				public isSocketOpen(param0: string): boolean;
				public serviceStarted(param0: string): void;
				public updateMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
				public sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
				public getMaskedMessage(param0: string, param1: string): com.liveperson.infra.utils.MaskedMessage;
				public sendCSAT(param0: string, param1: string, param2: number, param3: number): void;
				public checkAgentID(param0: string, param1: com.liveperson.infra.ICallback<com.liveperson.messaging.model.AgentData,java.lang.Exception>): void;
				public clearAllConversationData(param0: string): void;
				public moveToForeground(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
				public checkActiveConversation(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Boolean,java.lang.Exception>): void;
				public resendMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
				public init(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
				public unregisterPusher(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>, param3: boolean): void;
				public disconnect(param0: string): void;
				public isInitialized(): boolean;
				public reconnect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams): void;
				public updateTokenInBackground(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams): void;
				public getNumUnreadMessages(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
				public clearHistory(param0: string): boolean;
				public markConversationAsNormal(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public removeCallback(): void;
				public downloadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string): void;
				public connect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public logout(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
				public getUnreadMessagesCount(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
				public connect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams, param3: boolean, param4: boolean): void;
				public generateUploadToken(param0: string, param1: string, param2: string): void;
				public serviceStopped(param0: string): void;
				public sendFileMessage(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: boolean): void;
				public sendUserProfile(param0: string, param1: com.liveperson.messaging.model.UserProfile): void;
				public changeChatState(param0: string, param1: string, param2: com.liveperson.infra.model.types.ChatState): com.liveperson.messaging.ActionFailureReason;
				public markConversationAsUrgent(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public setCallback(param0: com.liveperson.api.LivePersonCallback): void;
				public sendMessage(param0: string, param1: string, param2: string, param3: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
				public logout(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
				public removeMultipleOlderImages(param0: globalAndroid.content.Context, param1: string, param2: string): void;
				public resendMessage(param0: string, param1: string, param2: number, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
				public checkConversationIsMarkedAsUrgent(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Boolean,java.lang.Exception>): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export class LivePersonEventsProxy extends com.liveperson.api.LivePersonCallback {
				public static class: java.lang.Class<com.liveperson.messaging.LivePersonEventsProxy>;
				public onConnectionChanged(param0: boolean): void;
				public onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
				public onConversationMarkedAsNormal(): void;
				/** @deprecated */
				public onConversationStarted(): void;
				public onAgentTyping(param0: boolean): void;
				public onCsatDismissed(): void;
				public onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
				/** @deprecated */
				public onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
				public onCsatSkipped(): void;
				/** @deprecated */
				public onCsatSubmitted(param0: string, param1: number): void;
				public onStructuredContentLinkClicked(param0: string): void;
				public onConversationFragmentClosed(): void;
				public onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
				public onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
				public onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onCsatSubmitted(param0: string, param1: number): void;
				public onOfflineHoursChanges(param0: boolean): void;
				public onCsatLaunched(): void;
				public removeCallback(): void;
				public onConversationMarkedAsUrgent(): void;
				public setCallback(param0: com.liveperson.api.LivePersonCallback): void;
				public onUnauthenticatedUserExpired(): void;
				public onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onTokenExpired(): void;
				/** @deprecated */
				public onConversationResolved(): void;
				/** @deprecated */
				public onCsatSubmitted(param0: string): void;
				public onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export class Messaging implements com.liveperson.messaging.IMessaging, com.liveperson.infra.sdkstatemachine.shutdown.ShutDownAsync, com.liveperson.infra.Clearable {
				public static class: java.lang.Class<com.liveperson.messaging.Messaging>;
				public static NO_FILE_ROW_ID: number;
				public static SUBMISSION_ID: string;
				public static INVITATION_ID: string;
				public static FORM_TITLE: string;
				public mConnectionController: com.liveperson.messaging.controller.ConnectionsController;
				public mAccountsController: com.liveperson.messaging.controller.AccountsController;
				public amsMessages: com.liveperson.messaging.model.AmsMessages;
				public amsConversations: com.liveperson.messaging.model.AmsConversations;
				public amsDialogs: com.liveperson.messaging.model.AmsDialogs;
				public amsUsers: com.liveperson.messaging.model.AmsUsers;
				public amsFiles: com.liveperson.messaging.model.AmsFiles;
				public amsReadController: com.liveperson.messaging.controller.AmsReadController;
				public mEventsProxy: com.liveperson.messaging.LivePersonEventsProxy;
				public init(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack): void;
				public moveToBackground(param0: string, param1: number): void;
				public closeDialog(param0: string): com.liveperson.messaging.ActionFailureReason;
				public sendFormSubmissionMessageCommand(param0: string): void;
				public serviceStarted(param0: string): void;
				public registerPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.auth.LPAuthenticationParams, param4: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
				public updateMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
				public sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
				public getAudioUtils(): com.liveperson.infra.utils.LPAudioUtils;
				public getMaskedMessage(param0: string, param1: string): com.liveperson.infra.utils.MaskedMessage;
				public getMessagingEventSubscriptionManager(): com.liveperson.messaging.commands.tasks.MessagingEventSubscriptionManager;
				public onAgentDetailsChanged(param0: com.liveperson.messaging.model.MessagingUserProfile, param1: boolean): void;
				public constructor();
				public moveToForeground(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public checkActiveConversation(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Boolean,java.lang.Exception>): void;
				public onMessageTimeout(param0: string): void;
				public setStillBusyFetching(param0: boolean): void;
				public resendMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
				public unregisterPusher(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>, param3: boolean): void;
				public isEnableStructuredContent(): boolean;
				public reconnect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams): void;
				public updateTokenInBackground(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams): void;
				public isStillBusyFetching(): boolean;
				public clearHistory(param0: string): boolean;
				public setImageForegroundServiceDownloadNotificationBuilder(param0: globalAndroid.app.Notification.Builder): void;
				public queryActiveDialog(param0: string, param1: com.liveperson.infra.ICallback<com.liveperson.messaging.model.Dialog,java.lang.Exception>): void;
				public bootstrapRegistration(): void;
				public removeCallback(): void;
				public isDialogClosed(param0: string): boolean;
				public downloadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string): void;
				public connect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public logout(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
				public getFileSharingManager(): com.liveperson.messaging.background.FileSharingManager;
				public connect(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams, param3: boolean, param4: boolean): void;
				public serviceStopped(param0: string): void;
				public sendFileMessage(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: boolean): void;
				public sendDeliveryStatusUpdateCommand(param0: string, param1: string, param2: string, param3: number, param4: com.liveperson.api.response.types.DeliveryStatus, param5: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
				public isConversationEmptyOrClose(param0: string): boolean;
				public initBrand(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public markConversationAsUrgent(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public setCallback(param0: com.liveperson.api.LivePersonCallback): void;
				public getImageForegroundServiceUploadNotificationBuilder(): globalAndroid.app.Notification.Builder;
				public logout(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
				public getConversationViewParams(): com.liveperson.infra.ConversationViewParams;
				public resendMessage(param0: string, param1: string, param2: number, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
				public getOriginatorId(param0: string): string;
				public setConversationViewParams(param0: com.liveperson.infra.ConversationViewParams): void;
				public resolveConversation(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public isSocketOpen(param0: string): boolean;
				public getInProgressUploadMessageRowIdsString(): string;
				public setContext(param0: globalAndroid.content.Context): void;
				public sendCSAT(param0: string, param1: string, param2: number, param3: number): void;
				public checkAgentID(param0: string, param1: com.liveperson.infra.ICallback<com.liveperson.messaging.model.AgentData,java.lang.Exception>): void;
				public updateWelcomeMessage(param0: string): void;
				public clearAllConversationData(param0: string): void;
				public shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
				public closeCurrentDialog(): com.liveperson.messaging.ActionFailureReason;
				public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				public init(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
				public disconnect(param0: string): void;
				public clear(): void;
				public isInitialized(): boolean;
				public getImageServicePendingIntent(): globalAndroid.app.PendingIntent;
				public getNumUnreadMessages(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
				public getImageForegroundServiceDownloadNotificationBuilder(): globalAndroid.app.Notification.Builder;
				public markConversationAsNormal(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public canActiveDialogChangeTTR(): boolean;
				public getUnreadMessagesCount(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
				public generateUploadToken(param0: string, param1: string, param2: string): void;
				public setImageServicePendingIntent(param0: globalAndroid.app.PendingIntent): void;
				public sendUserProfile(param0: string, param1: com.liveperson.messaging.model.UserProfile): void;
				public changeChatState(param0: string, param1: string, param2: com.liveperson.infra.model.types.ChatState): com.liveperson.messaging.ActionFailureReason;
				public sendMessage(param0: string, param1: string, param2: string, param3: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
				public setImageForegroundServiceUploadNotificationBuilder(param0: globalAndroid.app.Notification.Builder): void;
				public removeMultipleOlderImages(param0: globalAndroid.content.Context, param1: string, param2: string): void;
				public checkConversationIsMarkedAsUrgent(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Boolean,java.lang.Exception>): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export class MessagingFactory {
				public static class: java.lang.Class<com.liveperson.messaging.MessagingFactory>;
				public static instance: com.liveperson.messaging.MessagingFactory;
				public messagingController: com.liveperson.messaging.Messaging;
				public getController(): com.liveperson.messaging.Messaging;
				public shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
				public init(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
				public bootstrapRegistration(): void;
				public isInitialized(): boolean;
				public static getInstance(): com.liveperson.messaging.MessagingFactory;
				public constructor();
				public logout(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export class MessagingInitData extends com.liveperson.infra.sdkstatemachine.init.InfraInitData {
				public static class: java.lang.Class<com.liveperson.messaging.MessagingInitData>;
				public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.infra.Interceptors);
				public getBrandId(): string;
				public getAppId(): string;
				public constructor(param0: string, param1: com.liveperson.infra.Interceptors);
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export class SocketTaskType {
				public static class: java.lang.Class<com.liveperson.messaging.SocketTaskType>;
				public static GET_CLOCK: com.liveperson.messaging.SocketTaskType;
				public static QUERY_MESSAGES: com.liveperson.messaging.SocketTaskType;
				public static SUBSCRIBE: com.liveperson.messaging.SocketTaskType;
				public static UN_SUBSCRIBE: com.liveperson.messaging.SocketTaskType;
				public static GET_USER: com.liveperson.messaging.SocketTaskType;
				public static values(): native.Array<com.liveperson.messaging.SocketTaskType>;
				public static valueOf(param0: string): com.liveperson.messaging.SocketTaskType;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export class TaskType {
				public static class: java.lang.Class<com.liveperson.messaging.TaskType>;
				public static CSDS: com.liveperson.messaging.TaskType;
				public static IDP: com.liveperson.messaging.TaskType;
				public static VERSION: com.liveperson.messaging.TaskType;
				public static OPEN_SOCKET: com.liveperson.messaging.TaskType;
				public static INVALID_CERTIFICATE: com.liveperson.messaging.TaskType;
				public static USER_EXPIRED: com.liveperson.messaging.TaskType;
				public static CLOSING_SOCKET: com.liveperson.messaging.TaskType;
				public static valueOf(param0: string): com.liveperson.messaging.TaskType;
				public static values(): native.Array<com.liveperson.messaging.TaskType>;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class BackgroundActionsService {
					public static class: java.lang.Class<com.liveperson.messaging.background.BackgroundActionsService>;
					public static EXTRA_ACTION_TYPE: string;
					public static EXTRA_FILE_TYPE: string;
					public static EXTRA_ACTION_TYPE_UPLOAD: number;
					public static EXTRA_TYPE_ACTION_DOWNLOAD: number;
					public static EXTRA_TYPE_ACTION_REUPLOAD: number;
					public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
					public constructor();
					public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
				}
				export module BackgroundActionsService {
					export class ServiceActionCallbackListener {
						public static class: java.lang.Class<com.liveperson.messaging.background.BackgroundActionsService.ServiceActionCallbackListener>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.background.BackgroundActionsService$ServiceActionCallbackListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: string): void;
							onFail(param0: string): void;
						});
						public constructor();
						public onFail(param0: string): void;
						public onSuccess(param0: string): void;
					}
					export class ServiceActioner {
						public static class: java.lang.Class<com.liveperson.messaging.background.BackgroundActionsService.ServiceActioner>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.background.BackgroundActionsService$ServiceActioner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							actionFromService(param0: globalAndroid.content.Intent, param1: com.liveperson.messaging.background.BackgroundActionsService.ServiceActionCallbackListener): void;
							isPendingActions(): boolean;
						});
						public constructor();
						public actionFromService(param0: globalAndroid.content.Intent, param1: com.liveperson.messaging.background.BackgroundActionsService.ServiceActionCallbackListener): void;
						public isPendingActions(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export abstract class DownloadFileTask {
					public static class: java.lang.Class<com.liveperson.messaging.background.DownloadFileTask>;
					public mDownloadFileTaskParams: com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
					public setCallBack(param0: com.liveperson.messaging.background.DownloadFileTaskCallback): void;
					public isDownloadFailed(): boolean;
					public onConnectionAvailable(): void;
					public constructor(param0: com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle);
					public isDownloadCompleted(): boolean;
					public saveFileToDisk(param0: native.Array<number>): string;
					public onConnectionUnavailable(): void;
					public setStatus(param0: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
					public startDownload(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class DownloadFileTaskCallback {
					public static class: java.lang.Class<com.liveperson.messaging.background.DownloadFileTaskCallback>;
					/**
					 * Constructs a new instance of the com.liveperson.messaging.background.DownloadFileTaskCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDownloadFinishedSuccessfully(param0: string): void;
						onDownloadFailed(param0: com.liveperson.messaging.background.DownloadFileTask, param1: java.lang.Throwable): void;
						onReadyToGetUrl(): void;
					});
					public constructor();
					public onReadyToGetUrl(): void;
					public onDownloadFinishedSuccessfully(param0: string): void;
					public onDownloadFailed(param0: com.liveperson.messaging.background.DownloadFileTask, param1: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class FileSharingManager extends com.liveperson.infra.utils.DispatchQueue implements com.liveperson.messaging.background.BackgroundActionsService.ServiceActioner {
					public static class: java.lang.Class<com.liveperson.messaging.background.FileSharingManager>;
					public static SERVICE_EXTRA_BRAND_ID: string;
					public static SERVICE_EXTRA_TARGET_ID: string;
					public static SERVICE_EXTRA_FILE_URI: string;
					public static SERVICE_EXTRA_FILE_CAPTION: string;
					public static SERVICE_EXTRA_FILE_ROW_ID: string;
					public static SERVICE_EXTRA_MESSAGE_ROW_ID: string;
					public static SERVICE_EXTRA_IMAGE_FROM_CAMERA: string;
					public static SERVICE_EXTRA_MESSAGE: string;
					public static SERVICE_EXTRA_EVENT_ID: string;
					public static SERVICE_EXTRA_ORIGINAL_MESSAGE_TIME: string;
					public static SERVICE_EXTRA_CONVERSATION_ID: string;
					public static BROADCAST_FILE_UPLOAD_FAILED: string;
					public static KEY_FILE_UPLOAD_ERROR: string;
					public constructor(param0: string);
					public actionFromService(param0: globalAndroid.content.Intent, param1: com.liveperson.messaging.background.BackgroundActionsService.ServiceActionCallbackListener): void;
					public uploadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: boolean, param6: com.liveperson.messaging.background.FileSharingManager.FileUploadProgressListener): void;
					public removeMultipleOlderFiles(param0: string, param1: number, param2: string): void;
					public dispose(): void;
					public downloadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: com.liveperson.messaging.background.FileSharingManager.FileDownloadProgressListener): void;
					public reUploadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: number, param6: number, param7: com.liveperson.messaging.background.FileSharingManager.FileUploadProgressListener): void;
					public constructor(param0: string, param1: com.liveperson.infra.network.socket.IdleQueueHandler);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: globalAndroid.content.Context);
					public isPendingActions(): boolean;
					public getInProgressUploadMessageRowIdsString(): string;
					public constructor(param0: string, param1: number, param2: com.liveperson.infra.network.socket.IdleQueueHandler);
					public constructor(param0: string, param1: number);
				}
				export module FileSharingManager {
					export class FileDownloadProgressListener {
						public static class: java.lang.Class<com.liveperson.messaging.background.FileSharingManager.FileDownloadProgressListener>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.background.FileSharingManager$FileDownloadProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDoneDownload(): void;
							onFailedDownload(param0: java.lang.Throwable): void;
						});
						public constructor();
						public onDoneDownload(): void;
						public onFailedDownload(param0: java.lang.Throwable): void;
					}
					export class FileUploadProgressListener {
						public static class: java.lang.Class<com.liveperson.messaging.background.FileSharingManager.FileUploadProgressListener>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.background.FileSharingManager$FileUploadProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDoneUpload(): void;
							onFailedUpload(param0: java.lang.Throwable): void;
						});
						public constructor();
						public onDoneUpload(): void;
						public onFailedUpload(param0: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class ReUploadImageTask extends com.liveperson.messaging.background.UploadImageTask {
					public static class: java.lang.Class<com.liveperson.messaging.background.ReUploadImageTask>;
					public processThumbnailImage(param0: number, param1: boolean): globalAndroid.graphics.Bitmap;
					public constructor(param0: java.lang.Integer);
					public constructor(param0: com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle, param1: java.lang.Integer);
					public createSendMessageCommand(param0: string, param1: string): void;
					public saveThumbnailImage(param0: globalAndroid.graphics.Bitmap): string;
					public constructor(param0: com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle, param1: java.lang.Integer);
					public saveOriginalImage(param0: globalAndroid.graphics.Bitmap): string;
					public processOriginalImage(param0: number, param1: boolean): globalAndroid.graphics.Bitmap;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class UploadFileTaskCallback {
					public static class: java.lang.Class<com.liveperson.messaging.background.UploadFileTaskCallback>;
					/**
					 * Constructs a new instance of the com.liveperson.messaging.background.UploadFileTaskCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFileAddedToDB(): void;
						onUploadFinishedSuccessfully(param0: com.liveperson.messaging.background.filesharing.BaseUploadTask): void;
						onUploadFailed(param0: com.liveperson.messaging.background.filesharing.BaseUploadTask, param1: java.lang.Throwable): void;
					});
					public constructor();
					public onFileAddedToDB(): void;
					public onUploadFailed(param0: com.liveperson.messaging.background.filesharing.BaseUploadTask, param1: java.lang.Throwable): void;
					public onUploadFinishedSuccessfully(param0: com.liveperson.messaging.background.filesharing.BaseUploadTask): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class UploadImageTask extends com.liveperson.messaging.background.filesharing.BaseUploadTask {
					public static class: java.lang.Class<com.liveperson.messaging.background.UploadImageTask>;
					public mBase64: string;
					public uploadImageTaskParams: com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
					public processThumbnailImage(param0: number, param1: boolean): globalAndroid.graphics.Bitmap;
					public getFileByteArray(): native.Array<number>;
					public getUploadImageTaskParams(): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
					public constructor(param0: java.lang.Integer);
					public createSendMessageCommand(param0: string, param1: string): void;
					public createOriginalImageByteArray(param0: globalAndroid.graphics.Bitmap, param1: string): void;
					public saveThumbnailImage(param0: globalAndroid.graphics.Bitmap): string;
					public constructor(param0: com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle, param1: java.lang.Integer);
					public saveOriginalImage(param0: globalAndroid.graphics.Bitmap): string;
					public getTaskId(): number;
					public processOriginalImage(param0: number, param1: boolean): globalAndroid.graphics.Bitmap;
					public getThumbnailBase64(): string;
					public getUploadTaskBundle(): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class BaseTaskBundle {
						public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.BaseTaskBundle>;
						public mBrandId: string;
						public mTargetId: string;
						public mSwiftDomain: string;
						public mRestRequestParams: com.liveperson.messaging.network.http.RestRequestParams;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public constructor();
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public getBrandId(): string;
						public getSwiftDomain(): string;
						public getRestRequestParams(): com.liveperson.messaging.network.http.RestRequestParams;
						public getTargetId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export abstract class BaseUploadTask {
						public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.BaseUploadTask>;
						public static TAG: string;
						public sendMessageCommand: com.liveperson.messaging.commands.SendFileCommand;
						public mFileRowId: number;
						public mMessageRowId: number;
						public mStatus: com.liveperson.infra.database.tables.FilesTable.LoadStatus;
						public mRelativePath: string;
						public mOriginalFileByteArray: native.Array<number>;
						public mUploadTimeout: number;
						public getUploadTaskBundle(): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public getMessageRowId(): number;
						public getTaskId(): number;
						public onUploadFailed(param0: java.lang.Throwable): void;
						public isUploadCompleted(): boolean;
						public setStatus(param0: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
						public getFileByteArray(): native.Array<number>;
						public isUploadFailed(): boolean;
						public onConnectionUnavailable(): void;
						public startUpload(): void;
						public getEventId(): string;
						public onConnectionAvailable(): void;
						public sendPublishFile(param0: boolean): void;
						public setCallBack(param0: com.liveperson.messaging.background.UploadFileTaskCallback): void;
						public getThumbnailBase64(): string;
						public constructor(param0: java.lang.Integer);
						public setSendMessageCommandCallback(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class DownloadFileTaskBundle extends com.liveperson.messaging.background.filesharing.BaseTaskBundle {
						public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle>;
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public constructor();
						public getMessageRowId(): number;
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public getContext(): globalAndroid.content.Context;
						public getSwiftDomain(): string;
						public getConversationId(): string;
						public addFileRowId(param0: number): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addMessageRowId(param0: number): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public getRestParams(): com.liveperson.messaging.network.http.RestRequestParams;
						public getRelativePath(): string;
						public addRelativePath(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public getBrandId(): string;
						public addConversationId(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public getTargetId(): string;
						public getFileRowId(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class FileExtensionTypes {
						public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.FileExtensionTypes>;
						public static getDocumentExtensions(): java.util.List<string>;
						public constructor();
						public static getVoiceExtensionsAsSqlString(): string;
						public static getImageExtensions(): java.util.List<string>;
						public static getDocumentExtensionsAsSqlString(): string;
						public static getImageExtensionsAsSqlString(): string;
						public static getVoiceExtensions(): java.util.List<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class FileSharingType {
						public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.FileSharingType>;
						public static PDF: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static DOCX: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static PPTX: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static XLSX: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static JPEG: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static JPG: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static PNG: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static GIF: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static VOICE: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static UNKNOWN: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static values(): native.Array<com.liveperson.messaging.background.filesharing.FileSharingType>;
						public getCommonFileType(): com.liveperson.messaging.background.filesharing.FileSharingType.CommonFileType;
						public static getFileTypeFromExtension(param0: string): com.liveperson.messaging.background.filesharing.FileSharingType;
						public static valueOf(param0: string): com.liveperson.messaging.background.filesharing.FileSharingType;
					}
					export module FileSharingType {
						export class CommonFileType {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.FileSharingType.CommonFileType>;
							public static IMAGE: com.liveperson.messaging.background.filesharing.FileSharingType.CommonFileType;
							public static DOCUMENT: com.liveperson.messaging.background.filesharing.FileSharingType.CommonFileType;
							public static AUDIO: com.liveperson.messaging.background.filesharing.FileSharingType.CommonFileType;
							public static NOT_SUPPORTED: com.liveperson.messaging.background.filesharing.FileSharingType.CommonFileType;
							public static values(): native.Array<com.liveperson.messaging.background.filesharing.FileSharingType.CommonFileType>;
							public static valueOf(param0: string): com.liveperson.messaging.background.filesharing.FileSharingType.CommonFileType;
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
			export module background {
				export module filesharing {
					export class ReUploadFileTaskBundle extends com.liveperson.messaging.background.filesharing.UploadFileTaskBundle {
						public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.ReUploadFileTaskBundle>;
						public constructor();
						public addOriginalMessageTime(param0: number): com.liveperson.messaging.background.filesharing.ReUploadFileTaskBundle;
						public addOriginalLocalPath(param0: string): com.liveperson.messaging.background.filesharing.ReUploadFileTaskBundle;
						public getEventId(): string;
						public getOriginalMessageTime(): number;
						public addEventID(param0: string): com.liveperson.messaging.background.filesharing.ReUploadFileTaskBundle;
						public getFileRowId(): number;
						public addFileRowId(param0: number): com.liveperson.messaging.background.filesharing.ReUploadFileTaskBundle;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class UploadFileTaskBundle extends com.liveperson.messaging.background.filesharing.BaseTaskBundle {
						public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.UploadFileTaskBundle>;
						public static TAG: string;
						public mFileUri: globalAndroid.net.Uri;
						public mFilePath: string;
						public mFileContentType: string;
						public mFileTypeExtension: string;
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public constructor();
						public getTaskId(): number;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public getFileTypeExtension(): string;
						public addMessage(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public getMessage(): com.liveperson.infra.utils.MaskedMessage;
						public getSwiftDomain(): string;
						public addFileUri(param0: globalAndroid.net.Uri): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public getFileContentType(): string;
						public setFileTypeExtension(param0: string): void;
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public getFilePath(): string;
						public getRestParams(): com.liveperson.messaging.network.http.RestRequestParams;
						public getFileUri(): globalAndroid.net.Uri;
						public setTaskID(param0: number): void;
						public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export module document {
						export class DownloadDocumentTask extends com.liveperson.messaging.background.DownloadFileTask {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.document.DownloadDocumentTask>;
							public static TAG: string;
							public saveFileToDisk(param0: native.Array<number>): string;
							public constructor(param0: com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle);
							public constructor(param0: com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle, param1: com.liveperson.messaging.background.filesharing.FileSharingType);
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
			export module background {
				export module filesharing {
					export module document {
						export class UploadDocumentTask extends com.liveperson.messaging.background.filesharing.BaseUploadTask {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.document.UploadDocumentTask>;
							public static TAG: string;
							public uploadDocumentTaskBundle: com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public previewContentType: string;
							public createSendMessageCommand(param0: string, param1: string): void;
							public getUploadTaskBundle(): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public constructor(param0: java.lang.Integer);
							public getFileByteArray(): native.Array<number>;
							public getThumbnailBase64(): string;
							public constructor(param0: globalAndroid.content.Context, param1: com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle, param2: java.lang.Integer, param3: boolean);
							public createReSendMessageCommand(param0: string, param1: string): void;
							public getTaskId(): number;
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
			export module background {
				export module filesharing {
					export module document {
						export class UploadDocumentTaskBundle extends com.liveperson.messaging.background.filesharing.UploadFileTaskBundle {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle>;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public getEventId(): string;
							public addFileUri(param0: globalAndroid.net.Uri): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public constructor();
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addFileRowId(param0: number): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public addOriginalMessageTime(param0: number): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public getFileRowId(): number;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addMessage(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public addFileUri(param0: globalAndroid.net.Uri): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addEventID(param0: string): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public addMessage(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.document.UploadDocumentTaskBundle;
							public getOriginalMessageTime(): number;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
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
			export module background {
				export module filesharing {
					export module image {
						export class DownloadImageTask extends com.liveperson.messaging.background.DownloadFileTask {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.image.DownloadImageTask>;
							public saveFileToDisk(param0: native.Array<number>): string;
							public constructor(param0: com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle);
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
			export module background {
				export module filesharing {
					export module image {
						export class ReUploadImageTaskBundle extends com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle>;
							public constructor();
							public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public addOriginalMessageTime(param0: number): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public getFileRowId(): number;
							public getThumbnailLocalPath(): string;
							public getEventId(): string;
							public addOriginalLocalPath(param0: string): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public addEventID(param0: string): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addThumbnailLocalPath(param0: string): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public getOriginalMessageTime(): number;
							public addFileRowId(param0: number): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
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
			export module background {
				export module filesharing {
					export module image {
						export class UploadImageTaskBundle extends com.liveperson.messaging.background.filesharing.UploadFileTaskBundle {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle>;
							public constructor();
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addFileUri(param0: globalAndroid.net.Uri): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public isImageFromCamera(): boolean;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public addMessage(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addFileUri(param0: globalAndroid.net.Uri): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addImageFromCamera(param0: boolean): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public build(param0: number, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public addMessage(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
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
			export module background {
				export module filesharing {
					export module voice {
						export class DownloadVoiceTask extends com.liveperson.messaging.background.DownloadFileTask {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.voice.DownloadVoiceTask>;
							public saveFileToDisk(param0: native.Array<number>): string;
							public constructor(param0: com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle);
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
			export module background {
				export module filesharing {
					export module voice {
						export class ReUploadVoiceTask extends com.liveperson.messaging.background.filesharing.voice.UploadVoiceTask {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.voice.ReUploadVoiceTask>;
							public static TAG: string;
							public createSendMessageCommand(param0: string, param1: string): void;
							public constructor(param0: java.lang.Integer);
							public constructor(param0: com.liveperson.messaging.background.filesharing.UploadFileTaskBundle, param1: java.lang.Integer);
							public constructor(param0: com.liveperson.messaging.background.filesharing.ReUploadFileTaskBundle, param1: java.lang.Integer);
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
			export module background {
				export module filesharing {
					export module voice {
						export class UploadVoiceTask extends com.liveperson.messaging.background.filesharing.BaseUploadTask {
							public static class: java.lang.Class<com.liveperson.messaging.background.filesharing.voice.UploadVoiceTask>;
							public static TAG: string;
							public uploadFileTaskBundle: com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public previewContentType: string;
							public createSendMessageCommand(param0: string, param1: string): void;
							public getUploadTaskBundle(): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public constructor(param0: java.lang.Integer);
							public getFileByteArray(): native.Array<number>;
							public getThumbnailBase64(): string;
							public constructor(param0: com.liveperson.messaging.background.filesharing.UploadFileTaskBundle, param1: java.lang.Integer);
							public getTaskId(): number;
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
			export module commands {
				export abstract class BasicQueryMessagesCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.BasicQueryMessagesCommand>;
					public brandID: string;
					public targetId: string;
					public conversationId: string;
					public dialogId: string;
					public controller: com.liveperson.messaging.Messaging;
					public mUpdateUI: boolean;
					public mResponseCallBack: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback<any>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: boolean);
					public execute(): void;
					public setResponseCallBack(param0: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ChangeChatStateCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.ChangeChatStateCommand>;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.model.AmsDialogs, param1: string, param2: string, param3: com.liveperson.infra.model.types.ChatState);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ChangeConversationTTRCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.ChangeConversationTTRCommand>;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.model.AmsConversations, param1: string, param2: string, param3: com.liveperson.api.response.types.TTRType);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class CloseDialogCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.CloseDialogCommand>;
					public setCallback(param0: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): com.liveperson.messaging.commands.CloseDialogCommand;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.model.AmsDialogs, param1: string, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class DeliveryStatusUpdateCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.DeliveryStatusUpdateCommand>;
					public static TAG: string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: com.liveperson.api.response.types.DeliveryStatus);
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.util.List<java.lang.Integer>);
					public execute(): void;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: com.liveperson.api.response.types.DeliveryStatus, param6: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class GetCombinedUnreadMessagesCountCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.GetCombinedUnreadMessagesCountCommand>;
					public static TAG: string;
					public execute(): void;
					public static setIsRegisteredToPusher(param0: boolean): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class GetUnreadMessagesCountCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.GetUnreadMessagesCountCommand>;
					public static TAG: string;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class GetUnreadMessagesCountFromUMSCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.GetUnreadMessagesCountFromUMSCommand>;
					public static TAG: string;
					public static AUTHORIZATION: string;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>);
					public execute(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class InitAmsSessionCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.InitAmsSessionCommand>;
					public mController: com.liveperson.messaging.Messaging;
					public mTasks: java.util.LinkedList<com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask>;
					public mBrandId: string;
					public mCallback: com.liveperson.infra.ICallback<any,any>;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.infra.ICallback<any,any>);
					public initTasks(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class QueryMessagesUMSCommand extends com.liveperson.messaging.commands.BasicQueryMessagesCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.QueryMessagesUMSCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: boolean);
					public execute(): void;
					public setResponseCallBack(param0: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback<any>): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: number, param6: boolean);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ReSendDocumentCommand extends com.liveperson.messaging.commands.SendDocumentCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.ReSendDocumentCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public getMessageTime(): number;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage, param8: string, param9: string, param10: number, param11: number);
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage, param8: string);
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ReSendImageCommand extends com.liveperson.messaging.commands.SendImageCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.ReSendImageCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public getMessageTime(): number;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: com.liveperson.infra.utils.MaskedMessage, param9: number, param10: number);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ReSendVoiceCommand extends com.liveperson.messaging.commands.SendVoiceCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.ReSendVoiceCommand>;
					public static TAG: string;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public getMessageTime(): number;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage, param8: number, param9: number, param10: string, param11: string);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage, param8: string);
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class RegisterPusherCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.RegisterPusherCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.auth.LPAuthenticationParams, param5: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>);
					public execute(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ResendMessageCommand extends com.liveperson.messaging.commands.SendMessageCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.ResendMessageCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.utils.MaskedMessage, param5: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.utils.MaskedMessage);
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ResendURLMessageCommand extends com.liveperson.messaging.commands.ResendMessageCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.ResendURLMessageCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.utils.MaskedMessage, param5: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.utils.MaskedMessage);
					public execute(): void;
					public createMessageRequest(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ResolveConversationCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.ResolveConversationCommand>;
					public setOfflineMode(param0: boolean): void;
					public execute(): void;
					public setCallback(param0: com.liveperson.infra.ICallback<string,java.lang.Throwable>): void;
					public constructor(param0: com.liveperson.messaging.model.AmsConversations, param1: string, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendCsatCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendCsatCommand>;
					public constructor(param0: string, param1: string, param2: number, param3: number);
					public execute(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendDocumentCommand extends com.liveperson.messaging.commands.SendFileCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendDocumentCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public setFileDetails(param0: string, param1: string, param2: string): void;
					public execute(): void;
					public getMessageType(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage, param8: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export abstract class SendFileCommand extends com.liveperson.messaging.commands.SendMessageCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendFileCommand>;
					public mCaption: string;
					public mPreview: string;
					public mCallback: com.liveperson.messaging.commands.SendFileCommand.SendFileCommandListener;
					public mMessageRowId: number;
					public getMessageTime(): number;
					public execute(): void;
					public getMessageType(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public addMessageToDB(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
					public sendMessage(param0: string, param1: com.liveperson.messaging.network.socket.requests.SendMessageRequest): void;
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public setFileDetails(param0: string, param1: string, param2: string): void;
					public sendMessage(param0: string, param1: string, param2: string): void;
					public failMessage(): void;
					public createMessageRequest(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
					public createNewChatMessage(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public updateMessageConversationId(): void;
					public setSendViaRest(param0: boolean, param1: com.liveperson.messaging.network.http.RestRequestParams): void;
					public setCallback(param0: com.liveperson.messaging.commands.SendFileCommand.SendFileCommandListener): void;
				}
				export module SendFileCommand {
					export class SendFileCommandListener {
						public static class: java.lang.Class<com.liveperson.messaging.commands.SendFileCommand.SendFileCommandListener>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.commands.SendFileCommand$SendFileCommandListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onFileAddedToDB(param0: number, param1: number): void;
							onMessageUpdatedInDB(): void;
						});
						public constructor();
						public onMessageUpdatedInDB(): void;
						public onFileAddedToDB(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendFormSubmissionMessageCommand extends com.liveperson.messaging.commands.SendMessageCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendFormSubmissionMessageCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public execute(): void;
					public createMessageRequest(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
					public createMessageRequest(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string): com.liveperson.messaging.network.socket.requests.SendFormSubmissionMessageRequest;
					public createNewChatMessage(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.model.Form, param1: com.liveperson.infra.utils.MaskedMessage, param2: com.liveperson.messaging.Messaging);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendGenerateUploadTokenCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendGenerateUploadTokenCommand>;
					public execute(): void;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.liveperson.infra.ICallback<any,any>);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendImageCommand extends com.liveperson.messaging.commands.SendFileCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendImageCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public execute(): void;
					public getMessageType(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendMessageCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendMessageCommand>;
					public mController: com.liveperson.messaging.Messaging;
					public mBrandId: string;
					public mTargetId: string;
					public mMessage: com.liveperson.infra.utils.MaskedMessage;
					public mConsumerId: string;
					public mEventId: string;
					public mInfo: com.liveperson.api.response.model.DeliveryStatusUpdateInfo;
					public sendMessageIfDialogIsOpen(): void;
					public execute(): void;
					public createNewConversationRequest(param0: string, param1: string): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
					public sendMessage(param0: string, param1: com.liveperson.messaging.network.socket.requests.SendMessageRequest): void;
					public getEventId(): string;
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public sendMessage(param0: string, param1: string, param2: string): void;
					public createNewConversationRequest(param0: string, param1: string, param2: java.lang.Long): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
					public createMessageRequest(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
					public createNewChatMessage(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage;
					public sendCreateConversationRequest(param0: com.liveperson.api.request.BaseAMSSocketRequest<any,any>): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public createPendingConversationAndDialog(param0: string, param1: string): com.liveperson.api.request.BaseAMSSocketRequest<any,any>;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendMessageWithURLCommand extends com.liveperson.messaging.commands.SendMessageCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendMessageWithURLCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: string, param5: string, param6: string, param7: string, param8: string);
					public sendMessageIfDialogIsOpen(): void;
					public execute(): void;
					public createNewChatMessage(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendSetUserProfileCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendSetUserProfileCommand>;
					public static TAG: string;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.messaging.model.UserProfile);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendVoiceCommand extends com.liveperson.messaging.commands.SendFileCommand {
					public static class: java.lang.Class<com.liveperson.messaging.commands.SendVoiceCommand>;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public setFileDetails(param0: string, param1: string, param2: string): void;
					public execute(): void;
					public setDurationAsCaption(param0: number): void;
					public getMessageType(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage, param8: string);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class UnregisterPusherCommand extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.commands.UnregisterPusherCommand>;
					public static TAG: string;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.controller.AccountsController, param1: com.liveperson.messaging.model.AmsUsers, param2: string, param3: string, param4: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>, param5: boolean);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class BaseAmsAccountConnectionCallback<E>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback<any>>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTaskSuccess(): void;
							onTaskError(param0: com.liveperson.messaging.TaskType, param1: E): void;
							setSecondaryTask(param0: boolean): void;
						});
						public constructor();
						public onTaskSuccess(): void;
						public onTaskError(param0: com.liveperson.messaging.TaskType, param1: E): void;
						public setSecondaryTask(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export abstract class BaseAmsAccountConnectionTask extends com.liveperson.messaging.commands.tasks.BaseConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>;
						public mCallback: com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback<any>;
						public constructor();
						public getCallback(): com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback<any>;
						public setIsSecondaryTask(param0: boolean): void;
						public execute(): void;
						public setCallback(param0: com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback<any>): com.liveperson.messaging.commands.tasks.BaseConnectionTask;
						public requireSDKinForeground(): boolean;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class BaseAmsSocketConnectionCallback<E>  extends java.lang.Object {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback<any>>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onTaskSuccess(): void;
							onTaskError(param0: com.liveperson.messaging.SocketTaskType, param1: E): void;
						});
						public constructor();
						public onTaskSuccess(): void;
						public onTaskError(param0: com.liveperson.messaging.SocketTaskType, param1: E): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export abstract class BaseAmsSocketConnectionTask extends com.liveperson.messaging.commands.tasks.BaseConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask>;
						public mCallback: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback<any>;
						public constructor();
						public execute(): void;
						public setCallback(param0: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback<any>): com.liveperson.messaging.commands.tasks.BaseConnectionTask;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export abstract class BaseConnectionTask extends com.liveperson.infra.Command {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.BaseConnectionTask>;
						public mBrandId: string;
						public execute(): void;
						public setBrandId(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class CloseConnectionTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.CloseConnectionTask>;
						public static TAG: string;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.controller.AccountsController);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class CollectSDKConfigurationDataTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.CollectSDKConfigurationDataTask>;
						public static TAG: string;
						public constructor();
						public constructor(param0: globalAndroid.content.Context);
						public execute(): void;
						public getName(): string;
						public isShouldExecute(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class ConfigurationFetcherTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.ConfigurationFetcherTask>;
						public static TAG: string;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.controller.AccountsController);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class CsdsTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.CsdsTask>;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.controller.AccountsController);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class DataBaseTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.DataBaseTask>;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.model.AmsUsers, param1: com.liveperson.messaging.model.AmsConversations, param2: com.liveperson.messaging.model.AmsDialogs, param3: com.liveperson.messaging.model.AmsMessages);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class FetchConversationManager {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.FetchConversationManager>;
						public mController: com.liveperson.messaging.Messaging;
						public mConversationUtils: com.liveperson.messaging.model.ConversationUtils;
						public mDialogUtils: com.liveperson.messaging.model.DialogUtils;
						public usersUpdating: java.util.HashSet;
						public numConversationToUpdateUI: number;
						public fetchConversation(param0: com.liveperson.messaging.model.Conversation, param1: java.util.ArrayList<com.liveperson.messaging.model.Dialog>): void;
						public fetchConversationsFirstTime(param0: string, param1: java.util.List<com.liveperson.messaging.model.ConversationData>, param2: java.util.List<com.liveperson.messaging.model.ConversationData>): void;
						public constructor(param0: com.liveperson.messaging.Messaging);
						public init(): void;
						public refreshConversation(param0: com.liveperson.messaging.model.Conversation): void;
					}
					export module FetchConversationManager {
						export class DATA_SOURCE {
							public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE>;
							public static UMS: com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE;
							public static INCA: com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE;
							public static valueOf(param0: string): com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE;
							public static values(): native.Array<com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE>;
						}
						export class QueryRequestMessage {
							public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.FetchConversationManager.QueryRequestMessage>;
							public constructor(param0: com.liveperson.messaging.commands.tasks.FetchConversationManager, param1: number, param2: number, param3: com.liveperson.messaging.model.ConversationData, param4: boolean);
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
			export module commands {
				export module tasks {
					export class GetAgentUserTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.GetAgentUserTask>;
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class GetClockTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.GetClockTask>;
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class GetConsumerUserTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.GetConsumerUserTask>;
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class HandlePendingMessagesTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.HandlePendingMessagesTask>;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.model.AmsMessages, param1: com.liveperson.messaging.model.AmsConversations, param2: com.liveperson.messaging.model.AmsDialogs, param3: com.liveperson.messaging.controller.ConnectionsController);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class IdpTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.IdpTask>;
						public static TAG: string;
						public constructor();
						public constructor(param0: com.liveperson.messaging.controller.AccountsController, param1: com.liveperson.messaging.model.AmsUsers, param2: string);
						public execute(): void;
						public getName(): string;
					}
					export module IdpTask {
						export class IDPExceptionICallback extends com.liveperson.infra.ICallback<string,java.lang.Exception> {
							public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.IdpTask.IDPExceptionICallback>;
							public onError(param0: com.liveperson.messaging.TaskType, param1: java.lang.Exception): void;
							public onSuccess(param0: any): void;
							public onSuccess(param0: string): void;
							public constructor(param0: com.liveperson.messaging.commands.tasks.IdpTask);
							public onError(param0: java.lang.Exception): void;
							public onError(param0: any): void;
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
			export module commands {
				export module tasks {
					export class LptagTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.LptagTask>;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.controller.AccountsController);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class MessagingEventSubscriptionManager {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.MessagingEventSubscriptionManager>;
						public static Companion: com.liveperson.messaging.commands.tasks.MessagingEventSubscriptionManager.Companion;
						public constructor();
						public clearAllSubscriptions(): void;
						public static getSUCCESS(): string;
						public onReceivedEvent(param0: string): boolean;
						public static getMESSAGE_EVENT_COMPLETED(): string;
						public shouldUpdateUI(param0: string): boolean;
						public addSubscription(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: number, param5: boolean): void;
						public static getERROR_MESSAGE(): string;
					}
					export module MessagingEventSubscriptionManager {
						export class Companion {
							public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.MessagingEventSubscriptionManager.Companion>;
							public getSUCCESS(): string;
							public getMESSAGE_EVENT_COMPLETED(): string;
							public onError(param0: string): void;
							public getERROR_MESSAGE(): string;
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
			export module commands {
				export module tasks {
					export class MessagingEventSubscriptionManagerKt {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.MessagingEventSubscriptionManagerKt>;
						public static guard(param0: any, param1: kotlin.jvm.functions.Function1): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class OpenSocketTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.OpenSocketTask>;
						public static AUTHORIZATION: string;
						public static CLIENT_PROPERTIES: string;
						public static JWT: string;
						public constructor();
						public constructor(param0: com.liveperson.messaging.controller.AccountsController, param1: com.liveperson.messaging.controller.ConnectionsController);
						public execute(): void;
						public requireSDKinForeground(): boolean;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class RefreshNotUpdatedConversationsTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.RefreshNotUpdatedConversationsTask>;
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class RemoveOlderImagesTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.RemoveOlderImagesTask>;
						public static TAG: string;
						public constructor();
						public execute(): void;
						public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class SiteSettingsFetcherTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.SiteSettingsFetcherTask>;
						public static TAG: string;
						public static SITE_SETTINGS_PROPERTY_NAME_ID: string;
						public static SITE_SETTINGS_PROPERTY_NAME_PROPERTY_VALUE: string;
						public static SITE_SETTINGS_PROPERTY_NAME_VALUE: string;
						public static SITE_SETTINGS_PHOTO_SHARING_ID_VALUE: string;
						public static SITE_SETTINGS_AUDIO_SHARING_ID_VALUE: string;
						public static SITE_SETTINGS_MIN_VERSION_ID_VALUE: string;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.controller.AccountsController);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class SubscribeExConversationsTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.SubscribeExConversationsTask>;
						public mController: com.liveperson.messaging.Messaging;
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class UnAuthGetEngagementTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.UnAuthGetEngagementTask>;
						public static TAG: string;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.controller.AccountsController);
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class UnsubscribeExConversationTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.UnsubscribeExConversationTask>;
						public static TAG: string;
						public mController: com.liveperson.messaging.Messaging;
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class UpdateEmptyDialogCommand extends com.liveperson.messaging.commands.BasicQueryMessagesCommand {
						public static class: java.lang.Class<com.liveperson.messaging.commands.tasks.UpdateEmptyDialogCommand>;
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export class AccountsController extends com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.messaging.controller.AccountsController>;
					public static QA_CSDS_DOMAIN: string;
					public static ALPHA_CSDS_DOMAIN: string;
					public static KEY_TOKEN: string;
					public static SOCKET_URL: string;
					public static DOMAIN_VERSION_QUERY: string;
					public static DOMAIN_VERSION_VALUE: number;
					public mAccounts: java.util.Map<string,com.liveperson.messaging.model.AmsAccount>;
					public getClientProperties(): com.liveperson.messaging.controller.ClientProperties;
					public getConnectionParamsCache(param0: string): com.liveperson.messaging.controller.connection.IConnectionParamsCache;
					public getServiceUrl(param0: string, param1: string): string;
					public constructor(param0: com.liveperson.messaging.controller.ClientProperties);
					public getCertificatePinningKeys(param0: string): java.util.List<string>;
					public isCsdsDataMissing(param0: string): boolean;
					public getConnectionUrl(param0: string): string;
					public getAccount(param0: string): com.liveperson.messaging.model.AmsAccount;
					public addNewAccount(param0: string): void;
					public getTokenizerUrl(param0: string): string;
					public getLPAuthenticationParams(param0: string): com.liveperson.infra.auth.LPAuthenticationParams;
					public isInUnAuthMode(param0: string): boolean;
					public setCSDSMap(param0: string, param1: java.util.HashMap<string,string>): boolean;
					public clear(): void;
					public getDomain(param0: string): string;
					public getConnectionUrlForLogs(param0: string): string;
					public getToken(param0: string): string;
					public setLPAuthenticationParams(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams): void;
					public setAppId(param0: string, param1: string): void;
					public isTokenExpired(param0: string): boolean;
					public isAutoMessagesEnabled(param0: string): boolean;
					public setToken(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export class AmsReadController extends com.liveperson.infra.sdkstatemachine.shutdown.ShutDown {
					public static class: java.lang.Class<com.liveperson.messaging.controller.AmsReadController>;
					public static TAG: string;
					public shutDown(): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public registerForegroundConnectionReceiver(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export class ClientProperties extends com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.messaging.controller.ClientProperties>;
					public constructor(param0: string, param1: string);
					public addToUriBuilder(param0: globalAndroid.net.Uri.Builder): void;
					public static getLoggablePropertyDump(param0: globalAndroid.content.Context, param1: string, param2: string): string;
					public saveSDKVersion(param0: string): void;
					public constructor();
					public clear(): void;
					public getJsonString(): string;
					public saveAppId(param0: string): void;
				}
				export module ClientProperties {
					export class AndroidVersion {
						public static class: java.lang.Class<com.liveperson.messaging.controller.ClientProperties.AndroidVersion>;
						public static BASE: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static BASE_1_1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static CUPCAKE: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static DONUT: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static ECLAIR: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static ECLAIR_0_1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static ECLAIR_MR1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static FROYO: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static GINGERBREAD: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static GINGERBREAD_MR1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static HONEYCOMB: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static HONEYCOMB_MR1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static HONEYCOMB_MR2: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static ICE_CREAM_SANDWICH: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static ICE_CREAM_SANDWICH_MR1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static JELLY_BEAN: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static JELLY_BEAN_MR1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static JELLY_BEAN_MR2: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static KITKAT: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static KITKAT_WATCH: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static LOLLIPOP: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static LOLLIPOP_MR1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static MARSHMALLOW: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static NOUGAT: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static NOUGAT_MR1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static OREO: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static OREO_MR1: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static PIE: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static Q: com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public verCode: number;
						public logName: string;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.AndroidVersion>;
						public static fromSdkVersionCode(param0: number): com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.AndroidVersion;
					}
					export class Browser {
						public static class: java.lang.Class<com.liveperson.messaging.controller.ClientProperties.Browser>;
						public static CHROME: com.liveperson.messaging.controller.ClientProperties.Browser;
						public static FIREFOX: com.liveperson.messaging.controller.ClientProperties.Browser;
						public static IE: com.liveperson.messaging.controller.ClientProperties.Browser;
						public static OPERA: com.liveperson.messaging.controller.ClientProperties.Browser;
						public static SAFARI: com.liveperson.messaging.controller.ClientProperties.Browser;
						public static OTHER: com.liveperson.messaging.controller.ClientProperties.Browser;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.Browser;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.Browser>;
					}
					export class DeviceFamily {
						public static class: java.lang.Class<com.liveperson.messaging.controller.ClientProperties.DeviceFamily>;
						public static MOBILE: com.liveperson.messaging.controller.ClientProperties.DeviceFamily;
						public static TABLET: com.liveperson.messaging.controller.ClientProperties.DeviceFamily;
						public static PERSONAL_COMPUTER: com.liveperson.messaging.controller.ClientProperties.DeviceFamily;
						public static PDA: com.liveperson.messaging.controller.ClientProperties.DeviceFamily;
						public static OTHER: com.liveperson.messaging.controller.ClientProperties.DeviceFamily;
						public static UNKNOWN: com.liveperson.messaging.controller.ClientProperties.DeviceFamily;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.DeviceFamily;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.DeviceFamily>;
					}
					export class Features {
						public static class: java.lang.Class<com.liveperson.messaging.controller.ClientProperties.Features>;
						public static CO_BROWSE: com.liveperson.messaging.controller.ClientProperties.Features;
						public static CO_APP: com.liveperson.messaging.controller.ClientProperties.Features;
						public static PHOTO_SHARING: com.liveperson.messaging.controller.ClientProperties.Features;
						public static SECURE_FORMS: com.liveperson.messaging.controller.ClientProperties.Features;
						public static RICH_CONTENT: com.liveperson.messaging.controller.ClientProperties.Features;
						public static AUTO_MESSAGES: com.liveperson.messaging.controller.ClientProperties.Features;
						public static QUICK_REPLIES: com.liveperson.messaging.controller.ClientProperties.Features;
						public static MULTI_DIALOG: com.liveperson.messaging.controller.ClientProperties.Features;
						public static FILE_SHARING: com.liveperson.messaging.controller.ClientProperties.Features;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.Features;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.Features>;
					}
					export class Integration {
						public static class: java.lang.Class<com.liveperson.messaging.controller.ClientProperties.Integration>;
						public static WEB_SDK: com.liveperson.messaging.controller.ClientProperties.Integration;
						public static MOBILE_SDK: com.liveperson.messaging.controller.ClientProperties.Integration;
						public static BRAND_SDK: com.liveperson.messaging.controller.ClientProperties.Integration;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.Integration;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.Integration>;
					}
					export class OperatingSystem {
						public static class: java.lang.Class<com.liveperson.messaging.controller.ClientProperties.OperatingSystem>;
						public static WINDOWS: com.liveperson.messaging.controller.ClientProperties.OperatingSystem;
						public static LINUX: com.liveperson.messaging.controller.ClientProperties.OperatingSystem;
						public static OSX: com.liveperson.messaging.controller.ClientProperties.OperatingSystem;
						public static ANDROID: com.liveperson.messaging.controller.ClientProperties.OperatingSystem;
						public static IOS: com.liveperson.messaging.controller.ClientProperties.OperatingSystem;
						public static OTHER: com.liveperson.messaging.controller.ClientProperties.OperatingSystem;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.OperatingSystem>;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.OperatingSystem;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export class ConnectionsController implements com.liveperson.infra.sdkstatemachine.shutdown.ShutDownAsync, com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.messaging.controller.ConnectionsController>;
					public static KEY_PREF_LAST_UPDATE_TIME: string;
					public mBrandConnection: java.util.Map<string,com.liveperson.messaging.model.AmsConnection>;
					public mSubscriptionBrand: java.util.Map<string,string>;
					public mController: com.liveperson.messaging.Messaging;
					public mConnectionReceiver: com.liveperson.infra.LocalBroadcastReceiver;
					public connect(param0: string): void;
					public networkAvailable(param0: string): void;
					public initConnectionReceiver(): void;
					public setSubscription(param0: string, param1: string): void;
					public moveToBackground(param0: string, param1: number): void;
					public serviceStarted(param0: string): void;
					public clearLastUpdateTime(param0: string): void;
					public moveToForeground(param0: string): void;
					public registerSocket(param0: string): com.liveperson.messaging.model.AmsConnection.AmsSocketState;
					public isFirstNotificationAfterSubscribe(param0: string): boolean;
					public disconnect(param0: string): void;
					public getSubscriptionId(param0: string): string;
					public getLastUpdateTime(param0: string): number;
					public clear(): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public serviceStopped(param0: string): void;
					public setClockDiff(param0: string, param1: number): void;
					public networkLost(param0: string): void;
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
					public unregisterConnectionReceiver(): void;
					public addNewConnection(param0: string): void;
					public getClockDiff(param0: string): number;
					public isLastUpdateTimeExists(param0: string): boolean;
					public isSocketOpen(param0: string): boolean;
					public setFirstNotificationAfterSubscribe(param0: string, param1: boolean): void;
					public isConnecting(param0: string): boolean;
					public connect(param0: string, param1: boolean, param2: boolean): void;
					public isUpdated(param0: string): boolean;
					public getConnection(param0: string): com.liveperson.messaging.model.AmsConnection;
					public getBrandIDForSubscription(param0: string): string;
					public isSocketReady(param0: string): boolean;
					public onResumeConnection(): void;
					public setLastUpdateTime(param0: string, param1: number): void;
				}
				export module ConnectionsController {
					export class AmsConnectionShutDownCompletionListener extends com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener {
						public static class: java.lang.Class<com.liveperson.messaging.controller.ConnectionsController.AmsConnectionShutDownCompletionListener>;
						public constructor(param0: number, param1: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener);
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
		export module messaging {
			export module controller {
				export module connection {
					export class BaseConnectionState extends com.liveperson.infra.statemachine.interfaces.IState {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.BaseConnectionState>;
						public TAG: string;
						public name: string;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
						public isConnected(): boolean;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
						public isConnecting(): boolean;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
						public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
						public actionOnExit(): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
						public constructor(param0: string, param1: string);
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
						public toString(): string;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						public actionOnEntry(): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
						public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class ConnectionParamsCache extends com.liveperson.messaging.controller.connection.IConnectionParamsCache {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionParamsCache>;
						public static TAG: string;
						public static CSDS_UMS_DOMAIN_KEY: string;
						public static CSDS_AMS_TOKENIZER_DOMAIN_KEY: string;
						public static CSDS_IDP_DOMAIN_KEY: string;
						public static CSDS_PUSHER_DOMAIN_KEY: string;
						public static CSDS_AC_CDN_DOMAIN_KEY: string;
						public static CSDS_LE_CDN_DOMAIN_KEY: string;
						public static CSDS_LOGGOS_DOMAIN_KEY: string;
						public static CSDS_SWIFT_DOMAIN_KEY: string;
						public static CSDS_INCA_KEY: string;
						public static AC_CDN_VERSION_KEY: string;
						public static LE_CDN_VERSION_KEY: string;
						public static FULL_CONNECTION_FLOW_REQUIRED_KEY: string;
						public static AUTO_MESSAGES_ENABLED_KEY: string;
						public isVersionsCompatible(): boolean;
						public isFullConnectionFlowRequired(): boolean;
						public updateCsdsDomains(param0: java.util.HashMap<string,string>): boolean;
						public setAutoMessagesFeatureEnabled(param0: boolean): void;
						public updateAcCdnVersion(param0: string): boolean;
						public getAcCdnSdkMinVersion(): string;
						public isAutoMessagesFeatureEnabled(): boolean;
						public getServiceDomain(param0: string): string;
						public getLeCdnSdkMinVersion(): string;
						public updateLeCdnVersion(param0: string): boolean;
						public isCsdsFilled(): boolean;
						public constructor(param0: string);
						public setFullConnectionFlowRequired(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class ConnectionStateMachine extends com.liveperson.infra.statemachine.BaseStateMachine implements com.liveperson.infra.sdkstatemachine.shutdown.ShutDownAsync {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine>;
						public changeState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public moveToBackground(param0: number): void;
						public isConnected(): boolean;
						public changeState(param0: any): void;
						public isConnecting(): boolean;
						public startConnecting(param0: boolean): void;
						public initActiveState(param0: any): void;
						public changeStateAndPassEvent(param0: any, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public setStateMachineExecutor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachineExecutor): void;
						public shutDown(): void;
						public networkLost(): void;
						public changeStateAndPassEvent(param0: com.liveperson.infra.statemachine.interfaces.IState, param1: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public setConnectingTasks(param0: java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>): void;
						public constructor(param0: com.liveperson.messaging.controller.connection.MessagingStateMachineInterface, param1: com.liveperson.messaging.controller.connection.InternetInformationProvider, param2: com.liveperson.infra.ForegroundServiceInterface, param3: string, param4: com.liveperson.messaging.controller.connection.IConnectionListener);
						public activeState(): any;
						public postDelayEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent, param1: number): java.lang.Runnable;
						public apply(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public serviceStopped(): void;
						public networkAvailable(): void;
						public onSocketProblem(): void;
						public activeState(): com.liveperson.infra.statemachine.interfaces.IState;
						public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
						public startDisconnecting(): void;
						public postEvent(param0: com.liveperson.infra.statemachine.interfaces.IEvent): void;
						public getTag(): string;
						public moveToForeground(): void;
						public setDisconnectingTasks(param0: java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>): void;
						public initActiveState(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						public serviceStarted(): void;
						public constructor(param0: string);
					}
					export module ConnectionStateMachine {
						export abstract class AbstractBackgroundParentState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.AbstractBackgroundParentState>;
							public mBackgroundConnectionTimeoutEvent: java.lang.Runnable;
							public actionOnExit(): void;
							public constructor(param0: string, param1: string);
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public getBackgroundConnectionTimeoutEvent(): java.lang.Runnable;
							public actionOnEntry(): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: string, param2: string);
						}
						export class BackgroundParentState extends com.liveperson.messaging.controller.connection.ConnectionStateMachine.AbstractBackgroundParentState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.BackgroundParentState>;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: string, param2: string);
						}
						export class ConnectedBackgroundServiceState extends com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBaseState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBackgroundServiceState>;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: com.liveperson.messaging.controller.connection.ConnectionStateMachine.AbstractBackgroundParentState, param2: string, param3: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: com.liveperson.messaging.controller.connection.BaseConnectionState, param2: string, param3: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						}
						export class ConnectedBackgroundState extends com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBaseState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBackgroundState>;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: com.liveperson.messaging.controller.connection.BaseConnectionState, param2: string, param3: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						}
						export abstract class ConnectedBaseState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBaseState>;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public isConnected(): boolean;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: com.liveperson.messaging.controller.connection.BaseConnectionState, param2: string, param3: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						}
						export class ConnectedForegroundServiceState extends com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBaseState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedForegroundServiceState>;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: com.liveperson.messaging.controller.connection.BaseConnectionState, param2: string, param3: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						}
						export class ConnectedForegroundState extends com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBaseState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedForegroundState>;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: com.liveperson.messaging.controller.connection.BaseConnectionState, param2: string, param3: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						}
						export class ConnectingState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectingState>;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public isConnecting(): boolean;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: string, param2: string);
						}
						export class DisconnectedState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.DisconnectedState>;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: string, param2: string);
						}
						export class DisconnectingState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.DisconnectingState>;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: string, param2: string);
						}
						export class ForegroundParentState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionStateMachine.ForegroundParentState>;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
							public actionOnExit(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent): void;
							public constructor(param0: string, param1: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public actionOnEntry(): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: string, param2: string);
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
			export module controller {
				export module connection {
					export class ConnectionTasksHolder {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.ConnectionTasksHolder>;
						public constructSecondaryConnectionTasks(): java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>;
						public getPrimaryFullConnectionTasks(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine<any>): java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>;
						public constructor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine<any>, param1: com.liveperson.messaging.controller.connection.MessagingStateMachineInterface, param2: string);
						public constructPrimaryShortConnectionTasks(): java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>;
						public getDisconnectionTasks(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine<any>): java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>;
						public constructPrimaryFullConnectionTasks(): java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>;
						public getPrimaryShortConnectionTasks(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine<any>): java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>;
						public getSecondaryConnectionTasks(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine<any>): java.util.List<com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class DefaultTaskCallbackAmsAccount extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback<java.lang.Exception> {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.DefaultTaskCallbackAmsAccount>;
						public mTaskName: string;
						public onTaskSuccess(): void;
						public onTaskError(param0: com.liveperson.messaging.TaskType, param1: any): void;
						public setSecondaryTask(param0: boolean): void;
						public constructor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine<any>, param1: string);
						public onTaskError(param0: com.liveperson.messaging.TaskType, param1: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class IConnectionListener {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.IConnectionListener>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.controller.connection.IConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							notifyError(param0: com.liveperson.messaging.TaskType, param1: string): void;
							notifyStartConnecting(): void;
							notifyStartDisconnecting(): void;
							notifyDisconnected(): void;
							notifyConnected(): void;
							notifyTokenExpired(): void;
							notifyUserExpired(): void;
						});
						public constructor();
						public notifyDisconnected(): void;
						public notifyError(param0: com.liveperson.messaging.TaskType, param1: string): void;
						public notifyTokenExpired(): void;
						public notifyConnected(): void;
						public notifyStartConnecting(): void;
						public notifyStartDisconnecting(): void;
						public notifyUserExpired(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class IConnectionParamsCache {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.IConnectionParamsCache>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.controller.connection.IConnectionParamsCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							updateCsdsDomains(param0: java.util.HashMap<string,string>): boolean;
							updateAcCdnVersion(param0: string): boolean;
							updateLeCdnVersion(param0: string): boolean;
							isCsdsFilled(): boolean;
							isFullConnectionFlowRequired(): boolean;
							setFullConnectionFlowRequired(param0: boolean): void;
							getServiceDomain(param0: string): string;
							isVersionsCompatible(): boolean;
							isAutoMessagesFeatureEnabled(): boolean;
							setAutoMessagesFeatureEnabled(param0: boolean): void;
						});
						public constructor();
						public isVersionsCompatible(): boolean;
						public isAutoMessagesFeatureEnabled(): boolean;
						public getServiceDomain(param0: string): string;
						public isFullConnectionFlowRequired(): boolean;
						public updateLeCdnVersion(param0: string): boolean;
						public updateCsdsDomains(param0: java.util.HashMap<string,string>): boolean;
						public isCsdsFilled(): boolean;
						public setAutoMessagesFeatureEnabled(param0: boolean): void;
						public updateAcCdnVersion(param0: string): boolean;
						public setFullConnectionFlowRequired(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class InternetInformationProvider {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.InternetInformationProvider>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.controller.connection.InternetInformationProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isNetworkAvailable(): boolean;
							unregisterToNetworkChanges(): void;
							registerToNetworkChanges(): void;
						});
						public constructor();
						public unregisterToNetworkChanges(): void;
						public registerToNetworkChanges(): void;
						public isNetworkAvailable(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class MessagingStateMachineInterface {
						public static class: java.lang.Class<com.liveperson.messaging.controller.connection.MessagingStateMachineInterface>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.controller.connection.MessagingStateMachineInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getAccountsController(): com.liveperson.messaging.controller.AccountsController;
							getConnectionController(): com.liveperson.messaging.controller.ConnectionsController;
							getAmsMessages(): com.liveperson.messaging.model.AmsMessages;
							getAmsConversations(): com.liveperson.messaging.model.AmsConversations;
							getAmsDialogs(): com.liveperson.messaging.model.AmsDialogs;
							getAmsUsers(): com.liveperson.messaging.model.AmsUsers;
							getMessagingController(): com.liveperson.messaging.IMessaging;
						});
						public constructor();
						public getAmsMessages(): com.liveperson.messaging.model.AmsMessages;
						public getAmsConversations(): com.liveperson.messaging.model.AmsConversations;
						public getAccountsController(): com.liveperson.messaging.controller.AccountsController;
						public getAmsDialogs(): com.liveperson.messaging.model.AmsDialogs;
						public getConnectionController(): com.liveperson.messaging.controller.ConnectionsController;
						public getAmsUsers(): com.liveperson.messaging.model.AmsUsers;
						public getMessagingController(): com.liveperson.messaging.IMessaging;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class BackgroundEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class BackgroundTimeOutEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class ConnectEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent>;
							public constructor();
							public connectInBG(): boolean;
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
							public constructor(param0: boolean);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class DisconnectEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class ForegroundEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class NetworkAvailableEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class NetworkLostEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class RunTaskEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent>;
							public constructor();
							public constructor(param0: number, param1: number);
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
							public toString(): string;
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class SecondaryConnectEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class SecondaryTaskSuccessEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent>;
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
							public getTaskName(): string;
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class SendStateEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class ServiceOffEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class ServiceOnEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class ShutDownEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent>;
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
							public getListener(): com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener;
							public constructor(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class SocketProblemEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent>;
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class TaskFailedEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent>;
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
							public getType(): com.liveperson.messaging.TaskType;
							public constructor(param0: string, param1: com.liveperson.messaging.TaskType, param2: java.lang.Exception);
							public getTaskName(): string;
							public getException(): java.lang.Exception;
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class TaskSuccessEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent>;
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
							public getTaskName(): string;
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
			export module controller {
				export module connection {
					export module connectionevents {
						export class TaskTimeOutEvent extends com.liveperson.infra.statemachine.BaseEvent {
							public static class: java.lang.Class<com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent>;
							public constructor(param0: com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask);
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: string);
							public failTask(): void;
							public getTaskName(): string;
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
			export module exception {
				export class FileSharingException {
					public static class: java.lang.Class<com.liveperson.messaging.exception.FileSharingException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AcUserData {
					public static class: java.lang.Class<com.liveperson.messaging.model.AcUserData>;
					public getNickName(): string;
					public constructor(param0: string);
					public getFirstName(): string;
					public getEmployeeId(): string;
					public getPictureUrl(): string;
					public getFullName(): string;
					public getLastName(): string;
					public getEmail(): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AgentData {
					public static class: java.lang.Class<com.liveperson.messaging.model.AgentData>;
					public mFirstName: string;
					public mLastName: string;
					public mAvatarURL: string;
					public mEmployeeId: string;
					public mNickName: string;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.liveperson.messaging.model.AgentData>;
					public constructor(param0: globalAndroid.os.Parcel);
					public toString(): string;
					public constructor();
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsAccount {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsAccount>;
					public static KEY_ACCOUNT_TOKEN: string;
					public static KEY_ACCOUNT_TOKEN_ENC: string;
					public static KEY_ACCOUNT_NON_AUTH_ENC: string;
					public static KEY_CONSUMER_ID_ENC: string;
					public static KEY_CONNECTOR_ID_ENC: string;
					public static BROADCAST_KEY_AUTH_COMPLETED_ACTION: string;
					public constructor(param0: string);
					public getToken(): string;
					public getNonAuthCode(): string;
					public getLPAuthenticationParams(): com.liveperson.infra.auth.LPAuthenticationParams;
					public isAuthenticated(): boolean;
					public setCSDSMap(param0: java.util.HashMap<string,string>): boolean;
					public setAppId(param0: string): void;
					public getConnectorId(): string;
					public setNonAuthCode(param0: string): void;
					public sendAuthenticationCompletedStatus(): void;
					public isTokenExpired(): boolean;
					public setToken(param0: string): void;
					public setOriginalConsumerId(param0: string): void;
					public isAutoMessagesEnabled(): boolean;
					public getOriginalConsumerId(): string;
					public getAppId(): string;
					public getConnectionParamsCache(): com.liveperson.messaging.controller.connection.IConnectionParamsCache;
					public setConnectorId(param0: string): void;
					public getServiceUrl(param0: string): string;
					public isHostAppJWTExpired(): boolean;
					public isCsdsDataMissing(): boolean;
					public setLPAuthenticationParams(param0: com.liveperson.infra.auth.LPAuthenticationParams): void;
					public isInUnAuthMode(): boolean;
					public getDomain(): string;
					public getCertificatePinningKeys(): java.util.List<string>;
					public isAuthenticatedCompleted(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsConnection extends com.liveperson.infra.sdkstatemachine.shutdown.ShutDownAsync {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsConnection>;
					public static TAG: string;
					public static BROADCAST_CONNECTING_TO_SERVER_ERROR: string;
					public static BROADCAST_START_CONNECTING: string;
					public static BROADCAST_SOCKET_OPEN_ACTION: string;
					public static BROADCAST_KEY_SOCKET_READY_ACTION: string;
					public static BROADCAST_KEY_SOCKET_READY_EXTRA: string;
					public static BROADCAST_KEY_BRAND_ID: string;
					public static BROADCAST_AMS_CONNECTION_UPDATE_ACTION: string;
					public static BROADCAST_AMS_CONNECTION_UPDATE_EXTRA: string;
					public mBrandId: string;
					public mClockDiff: number;
					public mLastUpdateTime: number;
					public mPreferenceManager: com.liveperson.infra.managers.PreferenceManager;
					public mSocketState: com.liveperson.messaging.model.AmsConnection.AmsSocketState;
					public mController: com.liveperson.messaging.Messaging;
					public mStateMachine: com.liveperson.messaging.controller.connection.ConnectionStateMachine;
					public setLastUpdateTime(param0: number): boolean;
					public networkLost(): void;
					public isFirstNotificationAfterSubscribe(): boolean;
					public serviceStopped(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string);
					public registerSocket(): com.liveperson.messaging.model.AmsConnection.AmsSocketState;
					public networkAvailable(): void;
					public getClockDiff(): number;
					public moveToBackground(param0: number): void;
					public setAgentDetailsUpdated(param0: boolean): void;
					public isLastUpdateTimeExists(): boolean;
					public setClock(param0: number): void;
					public isUpdated(): boolean;
					public isAgentDetailsUpdated(): boolean;
					public startConnecting(param0: boolean, param1: boolean): void;
					public unregisterSocketListener(): void;
					public startDisconnecting(): void;
					public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
					public setFirstNotificationAfterSubscribe(param0: boolean): void;
					public getLastUpdateTime(): number;
					public setIsUpdated(param0: boolean): void;
					public init(): void;
					public serviceStarted(): void;
					public isSocketReady(): boolean;
					public isSocketOpen(): boolean;
					public moveToForeground(): void;
					public getUpdates(): void;
					public isConnecting(): boolean;
					public setSocketReady(param0: boolean): void;
					public onSocketProblem(): void;
				}
				export module AmsConnection {
					export class AmsSocketState extends com.liveperson.infra.network.socket.state.SocketStateListener {
						public static class: java.lang.Class<com.liveperson.messaging.model.AmsConnection.AmsSocketState>;
						public constructor(param0: com.liveperson.messaging.model.AmsConnection);
						public onDisconnected(param0: string, param1: number): void;
						public setCallback(param0: com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback<any>): void;
						public onStateChanged(param0: com.liveperson.infra.network.socket.SocketState): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsConnectionAnalytics {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsConnectionAnalytics>;
					public static TAG: string;
					public static databaseTaskStart(): void;
					public static databaseTaskEnd(): void;
					public static lptagTaskStart(): void;
					public static idpTaskEnd(): void;
					public static connected(): void;
					public static closeConnectionTaskStart(): void;
					public static csdsTaskStart(): void;
					public static csdsTaskEnd(): void;
					public static configurationFetcherTaskStart(): void;
					public static openSocketTaskEnd(): void;
					public constructor();
					public static startDisconnecting(): void;
					public static closeConnectionTaskEnd(): void;
					public static lptagTaskEnd(): void;
					public static idpTaskStart(): void;
					public static siteSettingsFetcherTaskStart(): void;
					public static removeOlderImagesTaskStart(): void;
					public static collectSDKConfigurationDataTaskStart(): void;
					public static startConnecting(): void;
					public static configurationFetcherTaskEnd(): void;
					public static removeOlderImagesTaskEnd(): void;
					public static openSocketTaskStart(): void;
					public static socketReady(): void;
					public static siteSettingsFetcherTaskEnd(): void;
					public static collectSDKConfigurationDataTaskEnd(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsConversations extends com.liveperson.infra.database.BaseDBRepository implements com.liveperson.infra.sdkstatemachine.shutdown.ShutDown, com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsConversations>;
					public static BROADCAST_UPDATE_CONVERSATION: string;
					public static BROADCAST_UPDATE_CSAT_CONVERSATION: string;
					public static BROADCAST_UPDATE_CONVERSATION_CLOSED: string;
					public static BROADCAST_UPDATE_CONVERSATIONS_LIST: string;
					public static BROADCAST_UPDATE_NEW_CONVERSATION_MSG: string;
					public static BROADCAST_UPDATE_UNREAD_MSG: string;
					public static BROADCAST_UPDATE_CONVERSATION_TTR: string;
					public static BROADCAST_UPDATE_FORM_URL: string;
					public static BROADCAST_CONVERSATION_FRAGMENT_CLOSED: string;
					public static DELAY_TILL_WHEN: string;
					public static DELAY_TILL_WHEN_CHANGED: string;
					public static BROADCAST_UPDATE_CONVERSATION_OFF_HOURS: string;
					public static KEY_CONVERSATION_ID: string;
					public static KEY_CONVERSATION_TTR_TIME: string;
					public static KEY_CONVERSATION_TARGET_ID: string;
					public static KEY_CONVERSATION_STATE: string;
					public static KEY_CONVERSATION_SHOWED_CSAT: string;
					public static KEY_CONVERSATION_ASSIGNED_AGENT: string;
					public static KEY_WELCOME_CONVERSATION_ID: string;
					public mController: com.liveperson.messaging.Messaging;
					public mConversationsByAccountId: java.util.Map<string,com.liveperson.messaging.model.Conversation>;
					public mConversationsByServerId: java.util.Map<string,com.liveperson.messaging.model.Conversation>;
					public acceptedSequenceEvents: java.util.HashSet<java.lang.Integer>;
					public markAllPendingConversationsAsFailed(param0: string): void;
					public constructor(param0: string);
					public enqueuePendingConversationRequestId(param0: java.lang.Long): void;
					public createDummyConversationForWelcomeMessage(param0: string, param1: string, param2: number): void;
					public static sendUpdateCSATConversationIntent(param0: com.liveperson.messaging.model.Conversation, param1: string): void;
					public notifyClosedConversationFromDB(param0: string, param1: string): void;
					public shutDown(): void;
					public getConversationById(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Conversation>;
					public createQueuedConversation(param0: string, param1: string, param2: string, param3: number): void;
					public static sendUpdateStateIntent(param0: com.liveperson.messaging.model.Conversation): void;
					public removeUpdateRequestInProgress(param0: string): void;
					public getConversationFromBrandIdMap(param0: string): com.liveperson.messaging.model.Conversation;
					public getConversation(param0: string): com.liveperson.messaging.model.Conversation;
					public dequeuePendingConversationRequestId(): java.lang.Long;
					public static sendUpdateNewConversationIntent(param0: com.liveperson.messaging.model.Conversation): void;
					public addUpdateRequestInProgress(param0: string): void;
					public static sendUpdateUnreadMsgIntent(param0: com.liveperson.messaging.model.Conversation): void;
					public getConversationFromTargetIdMap(param0: string): com.liveperson.messaging.model.Conversation;
					public updateTTRType(param0: string, param1: com.liveperson.api.response.types.TTRType, param2: number, param3: number, param4: number): void;
					public getConversationFromServerIdMap(param0: string): com.liveperson.messaging.model.Conversation;
					public calculateEffectiveTTR(param0: string, param1: com.liveperson.api.response.types.TTRType, param2: number, param3: number, param4: number, param5: number): number;
					public setUpdateRequestInProgress(param0: string, param1: number): void;
					public updateClosedConversation(param0: com.liveperson.messaging.model.ConversationData, param1: boolean): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Conversation>;
					public notifyOffHoursStatus(param0: string): void;
					public clearClosedConversations(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Integer>;
					public getTempConversationId(): string;
					public resetEffectiveTTR(param0: string): void;
					public static calculateShowedCsat(param0: com.liveperson.messaging.model.ConversationData, param1: boolean): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
					public createNewCurrentConversation(param0: com.liveperson.messaging.model.ConversationData): com.liveperson.messaging.model.Conversation;
					public clear(): void;
					public createPendingConversation(param0: string, param1: string, param2: string, param3: number): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public updateCurrentConversation(param0: com.liveperson.messaging.model.ConversationData): void;
					public clearAllConversations(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Integer>;
					public getNewestClosedConversation(param0: string): com.liveperson.messaging.model.Conversation;
					public getActiveConversation(param0: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Conversation>;
					public showTTR(param0: string): void;
					public queryConversationById(param0: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Conversation>;
					public static sendConversationClosedIntent(param0: com.liveperson.messaging.model.Conversation, param1: string): void;
					public updateCSAT(param0: string, param1: string): void;
					public addConversationToMaps(param0: string, param1: com.liveperson.messaging.model.Conversation): void;
					public updateCurrentConversationServerID(param0: string, param1: com.liveperson.messaging.model.ConversationData): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Conversation>;
					public getNotUpdatedConversations(param0: string): com.liveperson.infra.database.DataBaseCommand<java.util.List<com.liveperson.messaging.model.Conversation>>;
					public isConversationActive(param0: string): boolean;
					public updateConversationState(param0: string, param1: string, param2: com.liveperson.api.response.types.ConversationState): void;
					public getFetchConversationManager(): com.liveperson.messaging.commands.tasks.FetchConversationManager;
					public loadOpenConversationForBrand(param0: string): void;
					public notifyConversationFragmentClosedEvent(): void;
					public deleteTempConversationServerID(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsDialogs extends com.liveperson.infra.database.BaseDBRepository implements com.liveperson.infra.sdkstatemachine.shutdown.ShutDown, com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsDialogs>;
					public static KEY_DIALOG_TTR_TIME: string;
					public static DELAY_TILL_WHEN: string;
					public static DELAY_TILL_WHEN_CHANGED: string;
					public static KEY_DIALOG_ID: string;
					public static KEY_DIALOG_TARGET_ID: string;
					public static KEY_DIALOG_STATE: string;
					public static KEY_DIALOG_SHOWED_CSAT: string;
					public static KEY_DIALOG_ASSIGNED_AGENT: string;
					public static KEY_WELCOME_DIALOG_ID: string;
					public mController: com.liveperson.messaging.Messaging;
					public updateDialogState(param0: string, param1: string, param2: com.liveperson.api.response.types.DialogState): void;
					public constructor(param0: string);
					public static sendUpdateNewDialogIntent(param0: com.liveperson.messaging.model.Dialog): void;
					public loadOpenDialogsForBrand(param0: string): void;
					public setActiveDialog(param0: com.liveperson.messaging.model.Dialog): void;
					public updateLastServerSequenceByDialogId(param0: string, param1: number): void;
					public createNewCurrentDialog(param0: com.liveperson.messaging.model.Dialog): void;
					public shutDown(): void;
					public getDialogByIdAsync(param0: string, param1: com.liveperson.infra.ICallback<com.liveperson.messaging.model.Dialog,java.lang.Exception>): void;
					public static extractDialogs(param0: com.liveperson.messaging.model.ConversationData): java.util.ArrayList<com.liveperson.messaging.model.Dialog>;
					public deleteDialogById(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public static sendUpdateCSATDialogIntent(param0: com.liveperson.messaging.model.Dialog): void;
					public removeUpdateRequestInProgress(param0: string): void;
					public updateDialogDatabase(param0: com.liveperson.messaging.model.Dialog, param1: com.liveperson.messaging.model.ConversationData): void;
					public clearAllDialogs(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Integer>;
					public static getOpenDialog(param0: java.util.ArrayList<com.liveperson.messaging.model.Dialog>): com.liveperson.messaging.model.Dialog;
					public addDialogToMaps(param0: com.liveperson.messaging.model.Dialog): void;
					public createPendingDialog(param0: string, param1: string, param2: string, param3: string, param4: number): void;
					public static sendUpdateUnreadMsgIntent(param0: com.liveperson.messaging.model.Dialog): void;
					public getDialogsByConversationId(param0: string): java.util.ArrayList<com.liveperson.messaging.model.Dialog>;
					public queryActiveDialog(param0: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Dialog>;
					public createQueuedDialog(param0: string, param1: string, param2: string, param3: string, param4: number): void;
					public addUpdateRequestInProgress(param0: string): void;
					public updateDialogs(param0: com.liveperson.messaging.model.ConversationData): void;
					public static isUmsSupportingDialogs(): boolean;
					public updateLastServerSequenceByDialogId(param0: string, param1: number, param2: number, param3: boolean): com.liveperson.infra.database.DataBaseCommand<java.lang.Boolean>;
					public static setIsUmsSupportingDialogs(param0: boolean): void;
					public static sendDialogClosedIntent(param0: com.liveperson.messaging.model.Dialog, param1: string): void;
					public queryOpenDialogsOfConversation(param0: string): com.liveperson.infra.database.DataBaseCommand<java.util.ArrayList<com.liveperson.messaging.model.Dialog>>;
					public setUpdateRequestInProgress(param0: string, param1: number): void;
					public getTempDialogId(): string;
					public updateCurrentDialogServerId(param0: string, param1: com.liveperson.messaging.model.ConversationData): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Dialog>;
					public clearClosedDialogs(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Integer>;
					public resetEffectiveTTR(param0: string): void;
					public fetchPreviousDialog(param0: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Dialog>;
					public areMoreMessagesAvailableToFetch(param0: string): boolean;
					public createDummyDialogForWelcomeMessage(param0: string, param1: string, param2: string, param3: number, param4: number): void;
					public closeActiveDialog(): void;
					public clear(): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public static extractDialogsToMap(param0: com.liveperson.messaging.model.ConversationData): java.util.HashMap<string,com.liveperson.messaging.model.Dialog>;
					public queryDialogsByConversationId(param0: string): com.liveperson.infra.database.DataBaseCommand<java.util.ArrayList<com.liveperson.messaging.model.Dialog>>;
					public isDialogActive(): boolean;
					public queryDialogById(param0: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Dialog>;
					public getActiveDialog(): com.liveperson.messaging.model.Dialog;
					public queryDialogByIds(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Dialog>;
					public updateClosedDialog(param0: com.liveperson.messaging.model.ConversationData, param1: boolean): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Dialog>;
					public getDialogById(param0: string): com.liveperson.messaging.model.Dialog;
					public markPendingDialogsAsFailed(param0: string): void;
					public updateClosedDialog(param0: com.liveperson.messaging.model.ConversationData, param1: com.liveperson.messaging.model.Dialog, param2: boolean): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.Dialog>;
					public saveMessagesResult(param0: string, param1: java.util.ArrayList<com.liveperson.api.response.events.ContentEventNotification>, param2: boolean, param3: boolean, param4: com.liveperson.infra.ICallback<com.liveperson.messaging.model.Dialog,java.lang.Exception>): void;
				}
				export module AmsDialogs {
					export class BROADCASTS {
						public static class: java.lang.Class<com.liveperson.messaging.model.AmsDialogs.BROADCASTS>;
						public static UPDATE_DIALOG: string;
						public static UPDATE_CSAT_DIALOG: string;
						public static UPDATE_DIALOGS_LIST: string;
						public static UPDATE_DIALOG_CLOSED: string;
						public static UPDATE_NEW_DIALOG_MSG: string;
						public static UPDATE_UNREAD_MSG: string;
						public static UPDATE_DIALOG_TTR: string;
						public static UPDATE_FORM_URL: string;
						public static UPDATE_DIALOG_OFF_HOURS: string;
						public constructor(param0: com.liveperson.messaging.model.AmsDialogs);
					}
					export class UmsCompatibilityManager {
						public static class: java.lang.Class<com.liveperson.messaging.model.AmsDialogs.UmsCompatibilityManager>;
						public static setIsSupportingDialogs(param0: java.lang.Boolean): void;
					}
					export module UmsCompatibilityManager {
						export class FileNames {
							public static class: java.lang.Class<com.liveperson.messaging.model.AmsDialogs.UmsCompatibilityManager.FileNames>;
							public static TEMP_COMPATIBILITY_PERSISTENCE: string;
						}
						export class Keys {
							public static class: java.lang.Class<com.liveperson.messaging.model.AmsDialogs.UmsCompatibilityManager.Keys>;
							public static IS_SUPPORTING_DIALOGS: string;
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
			export module model {
				export class AmsFiles extends com.liveperson.infra.database.BaseDBRepository {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsFiles>;
					public getMultipleOldestLocalPathFromDB(param0: string, param1: number, param2: string): com.liveperson.infra.database.DataBaseCommand<java.util.ArrayList<string>>;
					public constructor(param0: string);
					public constructor();
					public getFileByMessageRowId(param0: number): com.liveperson.messaging.model.FileMessage;
					public updateRelativePath(param0: java.lang.Long, param1: string): void;
					public updateLocalPath(param0: number, param1: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public getNumOfLocalPathFromDB(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Integer>;
					public getFileByFileRowIdOnDbThread(param0: number): com.liveperson.messaging.model.FileMessage;
					public removeLocalPathFromDB(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Integer>;
					public updateStatus(param0: number, param1: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
					public getFileByFileRowId(param0: number): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.FileMessage>;
					public addFile(param0: number, param1: com.liveperson.messaging.model.FileMessage): com.liveperson.infra.database.DataBaseCommand<java.lang.Long>;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsMessages extends com.liveperson.infra.database.BaseDBRepository implements com.liveperson.infra.sdkstatemachine.shutdown.ShutDown, com.liveperson.infra.Clearable, com.liveperson.messaging.model.AmsMessagesLoaderProvider {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsMessages>;
					public static PENDING_MSG_SEQUENCE_NUMBER: number;
					public static RESOLVE_MSG_SEQUENCE_NUMBER: number;
					public static MASKED_CC_MSG_SEQUENCE_NUMBER: number;
					public static WELCOME_MSG_SEQUENCE_NUMBER: number;
					public static STRUCTURED_CONTENT_PREFIX: string;
					public mFormsManager: com.liveperson.messaging.model.FormsManager;
					public mMessageTimeoutQueue: com.liveperson.messaging.network.MessageTimeoutQueue;
					public clearAllMessages(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Integer>;
					public addFileFromPublishMessageToDB(param0: number, param1: string, param2: com.liveperson.api.request.message.FilePublishMessage, param3: string): void;
					public constructor(param0: string);
					public getMessageByEventId(param0: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.MessagingChatMessage>;
					public updateFetchHistoryEnded(param0: string): void;
					public updateOnCommand(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public updateFileMessageByRowId(param0: number, param1: number): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public loadExistingWelcomeMessage(param0: com.liveperson.messaging.model.MessagingChatMessage): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public removeOnUpdateListener(): void;
					public getQuickRepliesMessageHolder(param0: string): com.liveperson.messaging.model.QuickRepliesMessageHolder;
					public updateMessageDialogServerIdAndTime(param0: number, param1: string, param2: number): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public updateHandledExConversation(param0: string, param1: boolean): void;
					public getMessages(): globalAndroid.database.Cursor;
					public resetQuickRepliesMessageHolder(): void;
					public updateAgentDetailsUpdated(param0: string, param1: string): void;
					public shutDown(): void;
					public addMessage(param0: com.liveperson.messaging.model.MessagingChatMessage, param1: boolean): com.liveperson.infra.database.DataBaseCommand<java.lang.Long>;
					public updateMessagesState(param0: java.util.ArrayList<string>, param1: string, param2: string, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					public getRowIdByEventId(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Long>;
					public getMyUserId(param0: string): string;
					public clear(): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public updateOnMessageAck(param0: string, param1: string, param2: string, param3: number): void;
					public updateMessageState(param0: number, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					public addMultipleMessages(param0: java.util.ArrayList<com.liveperson.api.response.events.ContentEventNotification>, param1: string, param2: string, param3: string, param4: string, param5: string, param6: number, param7: boolean, param8: boolean): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public updateAllMessagesStateByDialogId(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					public removeLastWelcomeMessage(): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public loadMessagingUserProfile(param0: string): com.liveperson.messaging.model.MessagingUserProfile;
					public updateFetchHistoryEnded(param0: string, param1: boolean): void;
					public updateMessageFileChanged(param0: string, param1: number): void;
					public getMessagesByDialogId(param0: string): com.liveperson.infra.database.DataBaseCommand<java.util.ArrayList<com.liveperson.messaging.model.MessagingChatMessage>>;
					public addOnUpdateListener(param0: com.liveperson.messaging.model.AmsMessages.MessagesListener, param1: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param2: string): void;
					public updateMessagesDialogServerID(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public updateMessageReceivedState(param0: string, param1: string, param2: native.Array<number>, param3: com.liveperson.api.response.types.DeliveryStatus): void;
					public updateLastWelcomeMessage(param0: com.liveperson.messaging.model.MessagingChatMessage): com.liveperson.infra.database.DataBaseCommand<java.lang.Void>;
					public searchMessages(param0: string): com.liveperson.infra.database.DataBaseCommand<java.util.List<com.liveperson.messaging.model.MessagingSearchedMessage>>;
					public loadMessages(param0: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param1: string, param2: number, param3: number, param4: number): com.liveperson.infra.database.DataBaseCommand<java.util.ArrayList<com.liveperson.messaging.model.FullMessageRow>>;
					public getSequencesForDialog(param0: string): com.liveperson.infra.database.DataBaseCommand<native.Array<number>>;
					public isLastMessageWelcomeMessage(): com.liveperson.infra.database.DataBaseCommand<java.lang.Boolean>;
					public updateMessageState(param0: string, param1: string, param2: string, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					public sendReadAckOnMessages(param0: string, param1: string, param2: string): void;
					public setDeliveryStatusUpdateCommand(param0: com.liveperson.messaging.model.Form, param1: com.liveperson.api.response.types.DeliveryStatus): void;
					public resendAllPendingMessages(param0: string): void;
					public clearMessagesOfClosedConversations(param0: string): com.liveperson.infra.database.DataBaseCommand<java.lang.Integer>;
					public hasListener(): boolean;
				}
				export module AmsMessages {
					export class MessagesListener {
						public static class: java.lang.Class<com.liveperson.messaging.model.AmsMessages.MessagesListener>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.model.AmsMessages$MessagesListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initMessages(param0: java.util.ArrayList<com.liveperson.messaging.model.FullMessageRow>): void;
							onQueryMessagesResult(param0: number, param1: number): void;
							onUpdateMessages(param0: number, param1: number): void;
							onNewMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
							onUpdateMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
							removeAllClosedConversations(param0: string): void;
							clearAllMessages(param0: string): void;
							onHistoryFetched(): void;
							onExConversationHandled(param0: boolean): void;
							onHistoryFetchedFailed(): void;
						});
						public constructor();
						public onExConversationHandled(param0: boolean): void;
						public onHistoryFetchedFailed(): void;
						public onUpdateMessages(param0: number, param1: number): void;
						public onUpdateMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
						public onQueryMessagesResult(param0: number, param1: number): void;
						public onNewMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
						public onHistoryFetched(): void;
						public removeAllClosedConversations(param0: string): void;
						public initMessages(param0: java.util.ArrayList<com.liveperson.messaging.model.FullMessageRow>): void;
						public clearAllMessages(param0: string): void;
					}
					export class MessagesSortedBy {
						public static class: java.lang.Class<com.liveperson.messaging.model.AmsMessages.MessagesSortedBy>;
						public static TargetId: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy;
						public static ConversationId: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy;
						public static values(): native.Array<com.liveperson.messaging.model.AmsMessages.MessagesSortedBy>;
						public static valueOf(param0: string): com.liveperson.messaging.model.AmsMessages.MessagesSortedBy;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsMessagesLoaderProvider {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsMessagesLoaderProvider>;
					/**
					 * Constructs a new instance of the com.liveperson.messaging.model.AmsMessagesLoaderProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addOnUpdateListener(param0: com.liveperson.messaging.model.AmsMessages.MessagesListener, param1: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param2: string): void;
						removeOnUpdateListener(): void;
						hasListener(): boolean;
						loadMessages(param0: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param1: string, param2: number, param3: number, param4: number): com.liveperson.infra.database.DataBaseCommand<java.util.ArrayList<com.liveperson.messaging.model.FullMessageRow>>;
						loadMessagingUserProfile(param0: string): com.liveperson.messaging.model.MessagingUserProfile;
						getMyUserId(param0: string): string;
						getQuickRepliesMessageHolder(param0: string): com.liveperson.messaging.model.QuickRepliesMessageHolder;
						resetQuickRepliesMessageHolder(): void;
					});
					public constructor();
					public loadMessages(param0: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param1: string, param2: number, param3: number, param4: number): com.liveperson.infra.database.DataBaseCommand<java.util.ArrayList<com.liveperson.messaging.model.FullMessageRow>>;
					public resetQuickRepliesMessageHolder(): void;
					public getMyUserId(param0: string): string;
					public loadMessagingUserProfile(param0: string): com.liveperson.messaging.model.MessagingUserProfile;
					public addOnUpdateListener(param0: com.liveperson.messaging.model.AmsMessages.MessagesListener, param1: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param2: string): void;
					public removeOnUpdateListener(): void;
					public getQuickRepliesMessageHolder(param0: string): com.liveperson.messaging.model.QuickRepliesMessageHolder;
					public hasListener(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsUsers extends com.liveperson.infra.database.BaseDBRepository implements com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.messaging.model.AmsUsers>;
					public static BROADCAST_CONSUMER_ID_ACTION: string;
					public static BRAND_ID_EXTRA: string;
					public static BROADCAST_AGENT_CHANGED: string;
					public static EXTRA_KEY_AGENT_SERVER_ID: string;
					public static EXTRA_KEY_AGENT_FULL_NAME: string;
					public static EXTRA_KEY_AGENT_NICKNAME: string;
					public static BROADCAST_CONSUMER_CHANGED: string;
					public static EXTRA_KEY_ID: string;
					public static EXTRA_KEY_FULL_NAME: string;
					public getUserByBrandIDFromDB(param0: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.MessagingUserProfile>;
					public clearConsumerFromDB(param0: string): void;
					public getConsumerByBrandIDFromDB(param0: string): com.liveperson.infra.database.DataBaseCommand<string>;
					public getProjection(): native.Array<string>;
					public constructor(param0: string);
					public loadConsumerForBrand(param0: string): void;
					public getConsumerId(param0: string): string;
					public updateConsumerId(param0: string, param1: string): void;
					public updateUserProfile(param0: com.liveperson.messaging.model.MessagingUserProfile): void;
					public constructor();
					public loadProfile(param0: string): void;
					public clear(): void;
					public getUserById(param0: string): com.liveperson.infra.database.DataBaseCommand<com.liveperson.messaging.model.MessagingUserProfile>;
					public getProfileFromCursor(param0: globalAndroid.database.Cursor): com.liveperson.messaging.model.MessagingUserProfile;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class Conversation {
					public static class: java.lang.Class<com.liveperson.messaging.model.Conversation>;
					public constructor(param0: com.liveperson.messaging.model.ConversationData);
					public getState(): com.liveperson.api.response.types.ConversationState;
					public setRequestId(param0: number): void;
					public getDialogIds(): java.util.List<string>;
					public isShowedCSAT(): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
					public constructor(param0: globalAndroid.database.Cursor);
					public setUnreadMessages(param0: number): void;
					public constructor(param0: string, param1: string);
					public getConversationId(): string;
					public getStartTimestamp(): number;
					public setLastServerSequence(param0: number): void;
					public getCloseReason(): com.liveperson.api.response.types.CloseReason;
					public setCloseReason(param0: com.liveperson.api.response.types.CloseReason): void;
					public setEndTimestamp(param0: number): void;
					public getConversationTTRType(): com.liveperson.api.response.types.TTRType;
					public getEndTimestamp(): number;
					public getUnreadMessages(): number;
					public setConversationId(param0: string): void;
					public setBrandId(param0: string): void;
					public isConversationOpen(): boolean;
					public getLastServerSequence(): number;
					public getRequestId(): number;
					public getTargetId(): string;
					public setConversationTTRType(param0: com.liveperson.api.response.types.TTRType): void;
					public getTTRManager(): com.liveperson.messaging.model.TTRManager;
					public getBrandId(): string;
					public static createTempConversationId(): string;
					public getUpdateInProgress(): number;
					public setShowedCSAT(param0: com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS): void;
					public setState(param0: com.liveperson.api.response.types.ConversationState): void;
					public setStartTimestamp(param0: number): void;
					public setUpdateInProgress(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class ConversationData extends java.lang.Comparable<com.liveperson.messaging.model.ConversationData> {
					public static class: java.lang.Class<com.liveperson.messaging.model.ConversationData>;
					public conversationId: string;
					public brandId: string;
					public targetId: string;
					public consumerId: string;
					public state: com.liveperson.api.response.types.ConversationState;
					public requestId: number;
					public allAgents: native.Array<string>;
					public participants: com.liveperson.api.response.model.Participants;
					public dialogs: native.Array<com.liveperson.api.response.model.DialogData>;
					public csat: com.liveperson.api.response.types.CSAT;
					public closeReason: com.liveperson.api.response.types.CloseReason;
					public endTs: number;
					public startTs: number;
					public ttrValue: number;
					public manualTTR: number;
					public unreadMessages: number;
					public conversationTTRType: com.liveperson.api.response.types.TTRType;
					public delayType: com.liveperson.api.response.types.TTRType;
					public delayTillWhen: number;
					public source: com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE;
					public setDialogs(param0: java.util.ArrayList<com.liveperson.messaging.model.Dialog>): void;
					public toString(): string;
					public constructor();
					public constructor(param0: com.liveperson.api.response.types.ConversationState, param1: com.liveperson.api.response.model.Result, param2: string);
					public constructor(param0: string, param1: com.liveperson.messaging.model.Conversation);
					public getAllAgentParticipants(param0: com.liveperson.api.response.model.Participants): native.Array<string>;
					public compareTo(param0: com.liveperson.messaging.model.ConversationData): number;
					public constructor(param0: com.liveperson.api.response.model.ConversationINCADetails, param1: string);
					public constructor(param0: string, param1: com.liveperson.messaging.model.Conversation, param2: java.util.ArrayList<com.liveperson.messaging.model.Dialog>);
					public getAssignedAgentId(): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class ConversationUtils {
					public static class: java.lang.Class<com.liveperson.messaging.model.ConversationUtils>;
					public mController: com.liveperson.messaging.Messaging;
					public updateParticipants(param0: string, param1: string, param2: native.Array<string>, param3: com.liveperson.api.response.model.UserProfile.UserType, param4: string, param5: boolean, param6: boolean): void;
					public updateParticipants(param0: string, param1: string, param2: native.Array<string>, param3: com.liveperson.api.response.model.UserProfile.UserType, param4: string, param5: boolean, param6: boolean, param7: com.liveperson.infra.ICallback<com.liveperson.messaging.model.MessagingUserProfile,java.lang.Exception>): void;
					public calculateEffectiveTTR(param0: string, param1: com.liveperson.api.response.types.TTRType, param2: number, param3: number, param4: number): number;
					public addWelcomeMessage(param0: string, param1: string): void;
					public updateTTR(param0: com.liveperson.api.response.types.TTRType, param1: number, param2: number, param3: string): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public updateWelcomeMessage(param0: string, param1: com.liveperson.infra.model.LPWelcomeMessage): void;
					public static showTTR(param0: com.liveperson.messaging.Messaging, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class Dialog {
					public static class: java.lang.Class<com.liveperson.messaging.model.Dialog>;
					public setDialogType(param0: com.liveperson.api.response.types.DialogType): void;
					public setRequestId(param0: number): void;
					public isShowedCSAT(): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
					public constructor(param0: globalAndroid.database.Cursor);
					public getAssignedAgentId(): string;
					public setUnreadMessages(param0: number): void;
					public constructor(param0: string, param1: string);
					public setState(param0: com.liveperson.api.response.types.DialogState): void;
					public getConversationId(): string;
					public toString(): string;
					public getStartTimestamp(): number;
					public isOpen(): boolean;
					public setLastServerSequence(param0: number): void;
					public getCloseReason(): com.liveperson.api.response.types.CloseReason;
					public setCloseReason(param0: com.liveperson.api.response.types.CloseReason): void;
					public setEndTimestamp(param0: number): void;
					public getDialogId(): string;
					public getConversationTTRType(): com.liveperson.api.response.types.TTRType;
					public getEndTimestamp(): number;
					public getParticipants(): com.liveperson.api.response.model.Participants;
					public getPendingData(): com.liveperson.messaging.model.PendingDialogData;
					/** @deprecated */
					public constructor(param0: com.liveperson.messaging.model.ConversationData);
					public getUnreadMessages(): number;
					public setConversationId(param0: string): void;
					public getDialogType(): com.liveperson.api.response.types.DialogType;
					public setBrandId(param0: string): void;
					public getLastServerSequence(): number;
					public setDialogId(param0: string): void;
					public static createTempDialogId(): string;
					public getRequestId(): number;
					public getTargetId(): string;
					public setConversationTTRType(param0: com.liveperson.api.response.types.TTRType): void;
					public getState(): com.liveperson.api.response.types.DialogState;
					public setChannelType(param0: com.liveperson.api.response.model.MultiDialog.ChannelType): void;
					public constructor(param0: com.liveperson.api.response.model.DialogData, param1: com.liveperson.messaging.model.ConversationData);
					public getTTRManager(): com.liveperson.messaging.model.TTRManager;
					public isOpenOrPending(): boolean;
					public getChannelType(): com.liveperson.api.response.model.MultiDialog.ChannelType;
					public equals(param0: any): boolean;
					public getBrandId(): string;
					public getUpdateInProgress(): number;
					public setShowedCSAT(param0: com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS): void;
					public setAssignedAgentId(param0: string): void;
					public setStartTimestamp(param0: number): void;
					public setUpdateInProgress(param0: number): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class DialogUtils {
					public static class: java.lang.Class<com.liveperson.messaging.model.DialogUtils>;
					public mController: com.liveperson.messaging.Messaging;
					public updateParticipants(param0: string, param1: string, param2: native.Array<string>, param3: com.liveperson.api.response.model.UserProfile.UserType, param4: string, param5: boolean, param6: boolean): void;
					public updateParticipants(param0: string, param1: string, param2: native.Array<string>, param3: com.liveperson.api.response.model.UserProfile.UserType, param4: string, param5: boolean, param6: boolean, param7: com.liveperson.infra.ICallback<com.liveperson.messaging.model.MessagingUserProfile,java.lang.Exception>): void;
					public addClosedDialogDivider(param0: string, param1: com.liveperson.messaging.model.Dialog, param2: string, param3: com.liveperson.api.response.types.CloseReason, param4: boolean, param5: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class FileMessage {
					public static class: java.lang.Class<com.liveperson.messaging.model.FileMessage>;
					public static EXTRA_LOCAL_URL: string;
					public static EXTRA_PREVIEW: string;
					public static EXTRA_LOAD_STATUS: string;
					public static EXTRA_FULL_IMAGE_EXISTS: string;
					public static EXTRA_PREVIEW_IMAGE_EXISTS: string;
					public static EXTRA_FILE_ROW_ID: string;
					public static EXTRA_FILE_TYPE: string;
					public getRelatedMessageRowID(): number;
					public getAllFileChanges(): globalAndroid.os.Bundle;
					public static fromCursor(param0: globalAndroid.database.Cursor): com.liveperson.messaging.model.FileMessage;
					public getPreview(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number);
					public getFileType(): string;
					public getLocalUrl(): string;
					public update(param0: com.liveperson.messaging.model.FileMessage): globalAndroid.os.Bundle;
					public getLoadStatus(): com.liveperson.infra.database.tables.FilesTable.LoadStatus;
					public getSwiftPath(): string;
					public getFileRowId(): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class Form {
					public static class: java.lang.Class<com.liveperson.messaging.model.Form>;
					public getFormId(): string;
					public getSiteId(): string;
					public setSubmissionId(param0: string): void;
					public getReadOTK(): string;
					public getSubmissionId(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: number, param8: string);
					public getWriteOTK(): string;
					public setReadOTK(param0: string): void;
					public getOpenFormURL(): string;
					public getInvitationId(): string;
					public getEventId(): string;
					public getFormStatus(): com.liveperson.messaging.model.Form.FormStatus;
					public getConversationId(): string;
					public toString(): string;
					public getSeqId(): number;
					public setFormStatus(param0: com.liveperson.messaging.model.Form.FormStatus): void;
					public getFormTitle(): string;
					public getDialogId(): string;
					public setWriteOTK(param0: string): void;
					public getLanguage(): string;
				}
				export module Form {
					export class FormStatus {
						public static class: java.lang.Class<com.liveperson.messaging.model.Form.FormStatus>;
						public static READY: com.liveperson.messaging.model.Form.FormStatus;
						public static VIEWED: com.liveperson.messaging.model.Form.FormStatus;
						public static SUBMITTED: com.liveperson.messaging.model.Form.FormStatus;
						public static ERROR: com.liveperson.messaging.model.Form.FormStatus;
						public static ABORTED: com.liveperson.messaging.model.Form.FormStatus;
						public static EXPIRED: com.liveperson.messaging.model.Form.FormStatus;
						public static COMPLETED: com.liveperson.messaging.model.Form.FormStatus;
						public static valueOf(param0: string): com.liveperson.messaging.model.Form.FormStatus;
						public static values(): native.Array<com.liveperson.messaging.model.Form.FormStatus>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class FormsManager {
					public static class: java.lang.Class<com.liveperson.messaging.model.FormsManager>;
					public static FORM_ID: string;
					public static INVITATION_ID: string;
					public static TITLE: string;
					public removeForm(param0: string): void;
					public constructor();
					public updateForm(param0: string, param1: string, param2: string): void;
					public getForm(param0: string): com.liveperson.messaging.model.Form;
					public addForm(param0: string, param1: com.liveperson.messaging.model.Form): void;
					public updateForm(param0: string, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class FullMessageRow {
					public static class: java.lang.Class<com.liveperson.messaging.model.FullMessageRow>;
					public static TAG: string;
					public static EXTRA_AGENT_AVATAR: string;
					public static getLoadingIndicatorMessageDiff(param0: globalAndroid.content.Context): globalAndroid.os.Bundle;
					public getAgentAvatar(): string;
					public setRootElement(param0: com.liveperson.messaging.structuredcontent.model.elements.SimpleElement): void;
					public update(param0: com.liveperson.messaging.model.FullMessageRow): globalAndroid.os.Bundle;
					public static getUnreadIndicatorMessageDiff(param0: com.liveperson.messaging.model.FullMessageRow): globalAndroid.os.Bundle;
					public getRootElement(): com.liveperson.messaging.structuredcontent.model.elements.SimpleElement;
					public setStructuredContentEmpty(param0: boolean): void;
					public isStructuredContentEmpty(): boolean;
					public getFileMessage(): com.liveperson.messaging.model.FileMessage;
					public constructor(param0: globalAndroid.database.Cursor);
					public static generateUnreadIndicatorMessage(param0: globalAndroid.content.Context, param1: number, param2: number): com.liveperson.messaging.model.FullMessageRow;
					public getMessagingChatMessage(): com.liveperson.messaging.model.MessagingChatMessage;
					public setAgentNickName(param0: string): void;
					public newerThan(param0: com.liveperson.messaging.model.FullMessageRow): number;
					public constructor(param0: com.liveperson.messaging.model.MessagingChatMessage, param1: string, param2: com.liveperson.messaging.model.FileMessage);
					public static generateAgentQuickReplyMessage(param0: string, param1: number, param2: string): com.liveperson.messaging.model.FullMessageRow;
					public static getLoadingIndicatorMessage(param0: globalAndroid.content.Context, param1: number, param2: boolean): com.liveperson.messaging.model.FullMessageRow;
					public getAgentNickName(): string;
					public static getLoadingHistoryIndicatorMessage(param0: number, param1: string): com.liveperson.messaging.model.FullMessageRow;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class IncaGetConversationsListResponse {
					public static class: java.lang.Class<com.liveperson.messaging.model.IncaGetConversationsListResponse>;
					public mNextUrl: string;
					public getNumOfResults(): number;
					public getUrlRef(): string;
					public constructor(param0: string);
					public getListOfConversations(): java.util.ArrayList<com.liveperson.api.response.model.ConversationINCADetails>;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagingChatMessage extends com.liveperson.infra.model.Message {
					public static class: java.lang.Class<com.liveperson.messaging.model.MessagingChatMessage>;
					public static TAG: string;
					public static EXTRA_MESSAGE_STATE: string;
					public static EXTRA_SERVER_SEQUENCE: string;
					public static EXTRA_DIALOG_ID: string;
					public getMessageType(): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public setMessageType(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): void;
					public getAccessibilityMessage(param0: string): string;
					public constructor(param0: string, param1: string, param2: number, param3: string, param4: string, param5: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param6: com.liveperson.messaging.model.MessagingChatMessage.MessageState, param7: com.liveperson.infra.utils.EncryptionVersion);
					public constructor(param0: string, param1: string, param2: number, param3: string, param4: string, param5: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param6: com.liveperson.messaging.model.MessagingChatMessage.MessageState, param7: number, param8: string, param9: com.liveperson.infra.utils.EncryptionVersion);
					public update(param0: com.liveperson.messaging.model.MessagingChatMessage): globalAndroid.os.Bundle;
					public toString(): string;
					public getFormalMessage(): string;
					public constructor(param0: string, param1: string, param2: number, param3: string, param4: string, param5: com.liveperson.infra.utils.EncryptionVersion);
					public isSystemMessageFromAgent(param0: string): boolean;
					public getMessageState(): com.liveperson.messaging.model.MessagingChatMessage.MessageState;
					public setMessageState(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
				}
				export module MessagingChatMessage {
					export class MessageState {
						public static class: java.lang.Class<com.liveperson.messaging.model.MessagingChatMessage.MessageState>;
						public static PENDING: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static SENT: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static RECEIVED: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static READ: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static ERROR: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static QUEUED: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static VIEWED: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static SUBMITTED: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static EXPIRED: com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public static validChange(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageState): boolean;
						public static valueOf(param0: string): com.liveperson.messaging.model.MessagingChatMessage.MessageState;
						public isReceivedMessageNotRead(): boolean;
						public static values(): native.Array<com.liveperson.messaging.model.MessagingChatMessage.MessageState>;
					}
					export class MessageType {
						public static class: java.lang.Class<com.liveperson.messaging.model.MessagingChatMessage.MessageType>;
						public static SYSTEM_RESOLVED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static SYSTEM_DIALOG_RESOLVED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static SYSTEM_MASKED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static LOADING: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static UNREAD_INDICATOR: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONTROLLER_SYSTEM: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static BRAND: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_URL: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_FORM: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_MASKED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_IMAGE: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_DOCUMENT: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_IMAGE_MASKED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_URL_MASKED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_VOICE: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_URL: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_IMAGE: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_DOCUMENT: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_FORM: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_STRUCTURED_CONTENT: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_IS_TYPING_INDICATOR: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_QUICK_REPLIES: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static isImage(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static isConsumer(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static isAgent(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static getMessageContentTypeForAgent(param0: com.liveperson.api.response.events.ContentEventNotification, param1: com.liveperson.api.response.model.ContentType): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static isSystem(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static getMessageContentTypeForConsumer(param0: com.liveperson.api.response.events.ContentEventNotification, param1: com.liveperson.api.response.model.ContentType): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static isConsumerMaskedMessage(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static isSystemResolved(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static values(): native.Array<com.liveperson.messaging.model.MessagingChatMessage.MessageType>;
						public static valueOf(param0: string): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagingSearchedMessage {
					public static class: java.lang.Class<com.liveperson.messaging.model.MessagingSearchedMessage>;
					public getMessageType(): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public setMessageType(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): void;
					public static fromCursor(param0: globalAndroid.database.Cursor): com.liveperson.messaging.model.MessagingSearchedMessage;
					public getBrandId(): string;
					public setBrandId(param0: string): void;
					public getFirstName(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
					public getMessage(): string;
					public setFirstName(param0: string): void;
					public setMessage(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagingUserProfile extends com.liveperson.api.response.model.UserProfile {
					public static class: java.lang.Class<com.liveperson.messaging.model.MessagingUserProfile>;
					public getBrandId(): string;
					public constructor(param0: org.json.JSONObject);
					public setUserEncryptionVersion(param0: com.liveperson.infra.utils.EncryptionVersion): void;
					public constructor(param0: com.liveperson.api.response.model.UserProfile);
					public constructor(param0: string, param1: string, param2: com.liveperson.api.response.model.UserProfile.UserType);
					public setBrandID(param0: string): void;
					public isEmptyUser(): boolean;
					public getUserEncryptionVersion(): com.liveperson.infra.utils.EncryptionVersion;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class NullMessagesListener extends com.liveperson.messaging.model.AmsMessages.MessagesListener {
					public static class: java.lang.Class<com.liveperson.messaging.model.NullMessagesListener>;
					public onNewMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
					public clearAllMessages(param0: string): void;
					public onExConversationHandled(param0: boolean): void;
					public constructor();
					public initMessages(param0: java.util.ArrayList<com.liveperson.messaging.model.FullMessageRow>): void;
					public onUpdateMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
					public onQueryMessagesResult(param0: number, param1: number): void;
					public onUpdateMessages(param0: number, param1: number): void;
					public onHistoryFetched(): void;
					public removeAllClosedConversations(param0: string): void;
					public onHistoryFetchedFailed(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class PendingDialogData {
					public static class: java.lang.Class<com.liveperson.messaging.model.PendingDialogData>;
					public toString(): string;
					public constructor();
					public getPendingMessages(): java.util.ArrayList<com.liveperson.messaging.network.socket.requests.SendMessageRequest>;
					public addToPendingRequests(param0: com.liveperson.messaging.network.socket.requests.SendMessageRequest): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class QuickRepliesMessageHolder {
					public static class: java.lang.Class<com.liveperson.messaging.model.QuickRepliesMessageHolder>;
					public static TAG: string;
					public static QUICK_REPLIES_SHARED_PREFERENCES_KEY: string;
					public setShow(param0: boolean): void;
					public static updateQuickReplies(param0: string, param1: string): void;
					public constructor(param0: string, param1: string, param2: number, param3: string, param4: number, param5: boolean);
					public isShow(): boolean;
					public getSequence(): number;
					public static loadFromSharedPreferences(param0: string): com.liveperson.messaging.model.QuickRepliesMessageHolder;
					public deleteFromSharedPreferences(): void;
					public newerOrEqualThan(param0: com.liveperson.messaging.model.QuickRepliesMessageHolder): boolean;
					public toString(): string;
					public writeToSharedPreferences(): void;
					public getQuickRepliesString(): string;
					public static fromJsonString(param0: string, param1: string): com.liveperson.messaging.model.QuickRepliesMessageHolder;
					public getTimestamp(): number;
					public isValid(): boolean;
					public getJsonString(): string;
					public static fromContentEventNotification(param0: string, param1: com.liveperson.api.response.events.ContentEventNotification): com.liveperson.messaging.model.QuickRepliesMessageHolder;
					public newerThan(param0: com.liveperson.messaging.model.QuickRepliesMessageHolder): boolean;
					public getOriginatorId(): string;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class SynchronizedAmsConnectionCallback extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.model.SynchronizedAmsConnectionCallback>;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.controller.ConnectionsController, param1: string, param2: java.lang.Runnable);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class SynchronizedAmsConnectionUpdateCallback extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.model.SynchronizedAmsConnectionUpdateCallback>;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.controller.ConnectionsController, param1: string, param2: java.lang.Runnable);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class SynchronizedAuthenticationCompletedCallback extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.model.SynchronizedAuthenticationCompletedCallback>;
					public constructor(param0: com.liveperson.messaging.controller.AccountsController, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>);
					public execute(): void;
					public executeWithReturnValue(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class SynchronizedInternetConnectionCallback extends com.liveperson.infra.Command {
					public static class: java.lang.Class<com.liveperson.messaging.model.SynchronizedInternetConnectionCallback>;
					public static TAG: string;
					public handled: boolean;
					public mLocalBroadcastReceiver: com.liveperson.infra.LocalBroadcastReceiver;
					public mCallback: java.lang.Runnable;
					public constructor(param0: java.lang.Runnable);
					public execute(): void;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class TTRManager implements com.liveperson.infra.sdkstatemachine.shutdown.ShutDown, com.liveperson.infra.Clearable {
					public static class: java.lang.Class<com.liveperson.messaging.model.TTRManager>;
					public cancelAll(): void;
					public resetEffectiveTTR(): void;
					public shutDown(): void;
					public updateIfOffHours(param0: string): void;
					public constructor(param0: string);
					public clear(): void;
					public updateTTR(param0: string, param1: number, param2: number, param3: number): void;
					public calculateEffectiveTTR(param0: string, param1: number, param2: number, param3: number, param4: number): number;
					public showTTR(param0: string): void;
				}
				export module TTRManager {
					export class UpdateTTRRunnable {
						public static class: java.lang.Class<com.liveperson.messaging.model.TTRManager.UpdateTTRRunnable>;
						public constructor(param0: com.liveperson.messaging.model.TTRManager, param1: number, param2: number, param3: string);
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class TimeBundle {
					public static class: java.lang.Class<com.liveperson.messaging.model.TimeBundle>;
					public diffDays: number;
					public diffHours: number;
					public diffMinutes: number;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.liveperson.messaging.model.TimeBundle>;
					public equals(param0: any): boolean;
					public constructor(param0: globalAndroid.os.Parcel);
					public toString(): string;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class UserProfile {
					public static class: java.lang.Class<com.liveperson.messaging.model.UserProfile>;
					public static Companion: com.liveperson.messaging.model.UserProfile.Companion;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
					public getNickname(): string;
					public component2(): string;
					public component5(): string;
					public component3(): string;
					public getLastName(): string;
					public copy(param0: string, param1: string, param2: string, param3: string, param4: string): com.liveperson.messaging.model.UserProfile;
					public equals(param0: any): boolean;
					public toString(): string;
					public component1(): string;
					public getFirstName(): string;
					public getPhoneNumber(): string;
					public component4(): string;
					public hashCode(): number;
					public getAvatarUrl(): string;
				}
				export module UserProfile {
					export class Builder {
						public static class: java.lang.Class<com.liveperson.messaging.model.UserProfile.Builder>;
						public nickname(param0: string): com.liveperson.messaging.model.UserProfile.Builder;
						public constructor();
						public build(): com.liveperson.messaging.model.UserProfile;
						public avatarUrl(param0: string): com.liveperson.messaging.model.UserProfile.Builder;
						public phoneNumber(param0: string): com.liveperson.messaging.model.UserProfile.Builder;
						public firstName(param0: string): com.liveperson.messaging.model.UserProfile.Builder;
						public lastName(param0: string): com.liveperson.messaging.model.UserProfile.Builder;
					}
					export class Companion {
						public static class: java.lang.Class<com.liveperson.messaging.model.UserProfile.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export class MessageTimeoutQueue extends com.liveperson.infra.utils.HandleMessageCallback {
					public static class: java.lang.Class<com.liveperson.messaging.network.MessageTimeoutQueue>;
					public add(param0: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param1: number, param2: string, param3: string, param4: string, param5: number): void;
					public constructor(param0: com.liveperson.messaging.network.http.MessageTimeoutListener);
					public removeAll(): void;
					public add(param0: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param1: number, param2: string, param3: string, param4: number): void;
					public remove(param0: number): boolean;
					public handleMsgImmediately(param0: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param1: number, param2: string, param3: string, param4: string): void;
					public add(param0: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param1: number, param2: string, param3: string, param4: string): void;
					public onHandleMessage(param0: globalAndroid.os.Message): void;
				}
				export module MessageTimeoutQueue {
					export class BrandConversationObj {
						public static class: java.lang.Class<com.liveperson.messaging.network.MessageTimeoutQueue.BrandConversationObj>;
						public constructor(param0: string, param1: string, param2: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param3: string);
					}
					export class MessageType {
						public static class: java.lang.Class<com.liveperson.messaging.network.MessageTimeoutQueue.MessageType>;
						public static KEEP_ALIVE: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType;
						public static PUBLISH: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType;
						public static values(): native.Array<com.liveperson.messaging.network.MessageTimeoutQueue.MessageType>;
						public static valueOf(param0: string): com.liveperson.messaging.network.MessageTimeoutQueue.MessageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class AgentProfileRequest extends com.liveperson.infra.Command {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.AgentProfileRequest>;
						public mController: com.liveperson.messaging.Messaging;
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: boolean);
						public getCallback(): com.liveperson.infra.ICallback<com.liveperson.messaging.model.MessagingUserProfile,java.lang.Exception>;
						public setCallback(param0: com.liveperson.infra.ICallback<com.liveperson.messaging.model.MessagingUserProfile,java.lang.Exception>): com.liveperson.messaging.network.http.AgentProfileRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class DownloadFileRequest extends com.liveperson.infra.Command {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.DownloadFileRequest>;
						public constructor(param0: string, param1: string, param2: com.liveperson.api.response.model.QueryParams, param3: java.util.List<string>, param4: com.liveperson.infra.ICallback<native.Array<number>,java.lang.Exception>);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class IdpRequest extends com.liveperson.infra.Command {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.IdpRequest>;
						public static TAG: string;
						public static IDP_REQUEST_TIMEOUT: number;
						public static SIGNUP: string;
						public static AUTHENTICATE: string;
						public static DEFAULT_REDIRECT_URI: string;
						public static USER_EXPIRED_ERROR: string;
						public mAccount: com.liveperson.messaging.model.AmsAccount;
						public mIdpDomain: string;
						public mBrandId: string;
						public mCallback: com.liveperson.messaging.commands.tasks.IdpTask.IDPExceptionICallback;
						public mLPAuthenticationParams: com.liveperson.infra.auth.LPAuthenticationParams;
						public mHostVersion: string;
						public mCertificates: java.util.List<string>;
						public constructor(param0: com.liveperson.messaging.model.AmsAccount, param1: string, param2: string, param3: com.liveperson.infra.auth.LPAuthenticationParams, param4: string, param5: com.liveperson.messaging.commands.tasks.IdpTask.IDPExceptionICallback, param6: java.util.List<string>);
						public sendGeneralRequest(param0: com.liveperson.infra.network.http.request.HttpPostRequest): void;
						public execute(): void;
						public addHeaders(param0: com.liveperson.infra.network.http.request.HttpPostRequest): void;
						public sendErrorCallback(param0: java.lang.Exception): void;
						public getBodyForIDPJwtFlow(param0: string): org.json.JSONObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class IncaGetConversationsListRequest extends com.liveperson.infra.Command {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.IncaGetConversationsListRequest>;
						public static MAX_LIMIT: number;
						public static MAX_TIME_LIMIT: number;
						public mController: com.liveperson.messaging.Messaging;
						public getOffset(): number;
						public setOffset(param0: number): void;
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: number, param3: number, param4: number, param5: com.liveperson.infra.ICallback<java.util.ArrayList<com.liveperson.api.response.model.ConversationINCADetails>,java.lang.Exception>);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class IncaGetFileUrlRequest extends com.liveperson.infra.Command {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.IncaGetFileUrlRequest>;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.ICallback<globalAndroid.net.Uri,java.lang.Exception>);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class MessageTimeoutListener {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.MessageTimeoutListener>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.network.http.MessageTimeoutListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMessageTimeout(param0: string): void;
							onPublishMessageTimeout(param0: string, param1: string, param2: string): void;
						});
						public constructor();
						public onPublishMessageTimeout(param0: string, param1: string, param2: string): void;
						public onMessageTimeout(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class QueryMessagesINCACommand extends com.liveperson.messaging.commands.BasicQueryMessagesCommand {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.QueryMessagesINCACommand>;
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class RestRequestParams {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.RestRequestParams>;
						public mCertificates: java.util.List<string>;
						public constructor();
						public isNotValid(): boolean;
						public setParams(param0: string, param1: string, param2: string, param3: java.util.List<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class SendFileRequestRest extends com.liveperson.infra.network.socket.SocketToRestCommand implements com.liveperson.infra.Command {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.SendFileRequestRest>;
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.network.http.RestRequestParams, param1: com.liveperson.messaging.network.socket.requests.SendMessageRequest);
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class UnAuthRequest extends com.liveperson.messaging.network.http.IdpRequest {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.UnAuthRequest>;
						public static TAG: string;
						public static IDP_ANONYMOUS_URL: string;
						public mConnectorId: string;
						public constructor(param0: com.liveperson.messaging.model.AmsAccount, param1: string, param2: string, param3: com.liveperson.infra.auth.LPAuthenticationParams, param4: string, param5: com.liveperson.messaging.commands.tasks.IdpTask.IDPExceptionICallback, param6: java.util.List<string>, param7: string);
						public getHttpPostRequestForIDPV3(param0: string): com.liveperson.infra.network.http.request.HttpPostRequest;
						public constructor(param0: com.liveperson.messaging.model.AmsAccount, param1: string, param2: string, param3: com.liveperson.infra.auth.LPAuthenticationParams, param4: string, param5: com.liveperson.messaging.commands.tasks.IdpTask.IDPExceptionICallback, param6: java.util.List<string>);
						public execute(): void;
						public sendUnAuthRequest(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class UploadFileRequest extends com.liveperson.infra.Command {
						public static class: java.lang.Class<com.liveperson.messaging.network.http.UploadFileRequest>;
						public constructor(param0: string, param1: string, param2: com.liveperson.api.response.model.QueryParams, param3: java.util.List<string>, param4: com.liveperson.infra.ICallback<any,any>, param5: native.Array<number>, param6: java.lang.Integer);
						public execute(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export class ExConversationChangeNotificationResponseHandler extends com.liveperson.infra.network.socket.BaseResponseHandler<java.util.List<com.liveperson.messaging.model.ConversationData>,com.liveperson.infra.network.socket.BaseSocketRequest<any,any>> {
						public static class: java.lang.Class<com.liveperson.messaging.network.socket.ExConversationChangeNotificationResponseHandler>;
						public static PREF_HIDE_CLOSED_CONVERSATIONS: string;
						public mController: com.liveperson.messaging.Messaging;
						public mConversationUtils: com.liveperson.messaging.model.ConversationUtils;
						public mDialogUtils: com.liveperson.messaging.model.DialogUtils;
						public getFetchConversationManager(): com.liveperson.messaging.commands.tasks.FetchConversationManager;
						public constructor();
						public updateConversationAndDialogs(param0: com.liveperson.messaging.model.ConversationData): void;
						public handle(param0: java.util.List<com.liveperson.messaging.model.ConversationData>): boolean;
						public constructor(param0: com.liveperson.messaging.Messaging);
						public queryMessages(param0: com.liveperson.messaging.model.Dialog, param1: com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE): void;
						public init(): void;
						public getAPIResponseType(): string;
						public parse(param0: org.json.JSONObject): any;
						public updateClosedConversation(param0: com.liveperson.messaging.model.ConversationData, param1: boolean): void;
						public isValidResponse(param0: com.liveperson.api.response.model.Result): boolean;
						public createNewConversation(param0: com.liveperson.messaging.model.ConversationData): void;
						public parse(param0: org.json.JSONObject): java.util.List<com.liveperson.messaging.model.ConversationData>;
						public updateClosedDialog(param0: com.liveperson.messaging.model.ConversationData, param1: com.liveperson.messaging.model.Dialog, param2: boolean): void;
						public handle(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export class MessagingEventNotificationHandler extends com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.response.events.MessagingEventNotification,com.liveperson.infra.network.socket.BaseSocketRequest<any,any>> {
						public static class: java.lang.Class<com.liveperson.messaging.network.socket.MessagingEventNotificationHandler>;
						public static AGENT_TYPING_ACTION: string;
						public static AGENT_TYPING_ACTION_IS_TYPING_EXTRA: string;
						public static ORIGINATOR_ID_EXTRA: string;
						public static Companion: com.liveperson.messaging.network.socket.MessagingEventNotificationHandler.Companion;
						public setMController$messaging_release(param0: com.liveperson.messaging.Messaging): void;
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public handle(param0: com.liveperson.api.response.events.MessagingEventNotification): boolean;
						public getAPIResponseType(): string;
						public parse(param0: org.json.JSONObject): any;
						public getMController$messaging_release(): com.liveperson.messaging.Messaging;
						public parse(param0: org.json.JSONObject): com.liveperson.api.response.events.MessagingEventNotification;
						public extractLinks(param0: string): native.Array<string>;
						public handle(param0: any): boolean;
					}
					export module MessagingEventNotificationHandler {
						export class Companion {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.MessagingEventNotificationHandler.Companion>;
						}
						export class WhenMappings {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.MessagingEventNotificationHandler.WhenMappings>;
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
			export module network {
				export module socket {
					export module general_requests {
						export class ClockRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.GetClock.Response,com.liveperson.messaging.network.socket.general_requests.ClockRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.general_requests.ClockRequest>;
							public constructor();
							public constructor(param0: com.liveperson.messaging.controller.ConnectionsController, param1: string, param2: string);
							public getData(): string;
							public constructor(param0: string);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.GetClock.Response,com.liveperson.messaging.network.socket.general_requests.ClockRequest>;
							public getRequestName(): string;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
						}
						export module ClockRequest {
							export class ClockResponseHandler extends com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.GetClock.Response,com.liveperson.messaging.network.socket.general_requests.ClockRequest> {
								public static class: java.lang.Class<com.liveperson.messaging.network.socket.general_requests.ClockRequest.ClockResponseHandler>;
								public constructor(param0: com.liveperson.messaging.network.socket.general_requests.ClockRequest);
								public getAPIResponseType(): string;
								public parse(param0: org.json.JSONObject): any;
								public handle(param0: com.liveperson.api.request.GetClock.Response): boolean;
								public constructor();
								public handle(param0: any): boolean;
								public parse(param0: org.json.JSONObject): com.liveperson.api.request.GetClock.Response;
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
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export abstract class BaseGetUrlRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.BaseGenerateURL.Response,com.liveperson.messaging.network.socket.requests.BaseGetUrlRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.BaseGetUrlRequest>;
							public constructor();
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.BaseGenerateURL.Response,com.liveperson.messaging.network.socket.requests.BaseGetUrlRequest>;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.api.response.IOnUrlReady);
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class ChangeConversationTTRRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.ReqBody.StringResp,com.liveperson.messaging.network.socket.requests.ChangeConversationTTRRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.ChangeConversationTTRRequest>;
							public constructor();
							public getData(): string;
							public constructor(param0: string, param1: string, param2: com.liveperson.api.response.types.TTRType, param3: number);
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class ChatStateChangeRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.PublishEvent.Response,com.liveperson.messaging.network.socket.requests.ChatStateChangeRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.ChatStateChangeRequest>;
							public constructor();
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.infra.model.types.ChatState);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.PublishEvent.Response,com.liveperson.messaging.network.socket.requests.ChatStateChangeRequest>;
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
			export module network {
				export module socket {
					export module requests {
						export class CloseDialogRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.ReqBody.StringResp,com.liveperson.messaging.network.socket.requests.CloseDialogRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.CloseDialogRequest>;
							public constructor();
							public constructor(param0: string, param1: string, param2: string, param3: string);
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
							public setCallback(param0: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): com.liveperson.messaging.network.socket.requests.CloseDialogRequest;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class CsatRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.ReqBody.StringResp,com.liveperson.messaging.network.socket.requests.CsatRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.CsatRequest>;
							public constructor();
							public constructor(param0: string, param1: string, param2: number, param3: number);
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class DeliveryStatusUpdateRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.PublishEvent.Response,com.liveperson.messaging.network.socket.requests.DeliveryStatusUpdateRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.DeliveryStatusUpdateRequest>;
							public constructor();
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public setInfo(param0: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
							public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.api.response.types.DeliveryStatus, param4: java.util.List<java.lang.Integer>);
							public constructor(param0: string, param1: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.PublishEvent.Response,com.liveperson.messaging.network.socket.requests.DeliveryStatusUpdateRequest>;
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class GetUrlForDownloadRequest extends com.liveperson.messaging.network.socket.requests.BaseGetUrlRequest {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.GetUrlForDownloadRequest>;
							public constructor();
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.api.response.IOnUrlReady);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.api.response.IOnUrlReady);
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
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
			export module network {
				export module socket {
					export module requests {
						export class GetUrlForUploadRequest extends com.liveperson.messaging.network.socket.requests.BaseGetUrlRequest {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.GetUrlForUploadRequest>;
							public constructor();
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.api.response.IOnUrlReady);
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: number, param3: string, param4: com.liveperson.api.response.IOnUrlReady);
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
			export module network {
				export module socket {
					export module requests {
						export class GetUserProfileRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.GetUserProfile.Response,com.liveperson.messaging.network.socket.requests.GetUserProfileRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.GetUserProfileRequest>;
							public constructor();
							public setShouldUpdateUI(param0: boolean): com.liveperson.messaging.network.socket.requests.GetUserProfileRequest;
							public setServerConversationId(param0: string): com.liveperson.messaging.network.socket.requests.GetUserProfileRequest;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public setUserId(param0: string): com.liveperson.messaging.network.socket.requests.GetUserProfileRequest;
							public getData(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.GetUserProfile.Response,com.liveperson.messaging.network.socket.requests.GetUserProfileRequest>;
							public constructor(param0: string);
							public getRequestName(): string;
							public setDialogId(param0: string): com.liveperson.messaging.network.socket.requests.GetUserProfileRequest;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.api.response.model.UserProfile.UserType);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class NewConversationRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.RequestConversation.Response,com.liveperson.messaging.network.socket.requests.NewConversationRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.NewConversationRequest>;
							public constructor();
							public getData(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string);
							public constructor(param0: string);
							public setAppId(param0: string): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
							public getRequestName(): string;
							public setSkill(param0: string): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
							public setTtrType(param0: com.liveperson.api.response.types.TTRType): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
							public constructor(param0: string, param1: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.RequestConversation.Response,com.liveperson.messaging.network.socket.requests.NewConversationRequest>;
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class QueryMessagesRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.QueryMessages.Response,com.liveperson.messaging.network.socket.requests.QueryMessagesRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.QueryMessagesRequest>;
							public constructor();
							public setResponseCallBack(param0: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback<any>): void;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public setMaxSize(param0: number): com.liveperson.messaging.network.socket.requests.QueryMessagesRequest;
							public setShouldUpdateUI(param0: boolean): void;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: number);
							public getData(): string;
							public setOlderThanSequenceId(param0: number): com.liveperson.messaging.network.socket.requests.QueryMessagesRequest;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.QueryMessages.Response,com.liveperson.messaging.network.socket.requests.QueryMessagesRequest>;
							public constructor(param0: string);
							public getRequestName(): string;
							public getDialogId(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class ResolveConversationRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.ReqBody.StringResp,com.liveperson.messaging.network.socket.requests.ResolveConversationRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.ResolveConversationRequest>;
							public constructor();
							public getData(): string;
							public setResponseCallBack(param0: com.liveperson.infra.ICallback<string,java.lang.Throwable>): void;
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class SendFileRequest extends com.liveperson.messaging.network.socket.requests.SendMessageRequest {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SendFileRequest>;
							public constructor();
							public setFileContent(param0: string, param1: string, param2: string, param3: string): void;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.api.response.model.ContentType);
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
							public constructor(param0: number);
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
			export module network {
				export module socket {
					export module requests {
						export class SendFormSubmissionMessageRequest extends com.liveperson.messaging.network.socket.requests.SendMessageRequest {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SendFormSubmissionMessageRequest>;
							public mMessage: com.liveperson.api.request.message.PublishMessage;
							public constructor();
							public getData(): string;
							public setMessageContent(param0: string): void;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.api.response.model.ContentType);
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
							public constructor(param0: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string);
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
			export module network {
				export module socket {
					export module requests {
						export class SendMessageRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.PublishEvent.Response,com.liveperson.messaging.network.socket.requests.SendMessageRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SendMessageRequest>;
							public mMessage: com.liveperson.api.request.message.PublishMessage;
							public constructor();
							public setDialogId(param0: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.api.response.model.ContentType);
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string);
							public constructor(param0: number);
							public getEventId(): string;
							public setConversationId(param0: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
							public getData(): string;
							public setMessageContent(param0: string): void;
							public constructor(param0: string);
							public getRequestName(): string;
							public setInfo(param0: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
							public setContentType(param0: com.liveperson.api.response.model.ContentType): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.PublishEvent.Response,com.liveperson.messaging.network.socket.requests.SendMessageRequest>;
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
			export module network {
				export module socket {
					export module requests {
						export class SetUsersProfileRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.ReqBody.StringResp,com.liveperson.messaging.network.socket.requests.SetUsersProfileRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SetUsersProfileRequest>;
							public static TAG: string;
							public constructor();
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.model.AmsUsers, param1: string, param2: string, param3: com.liveperson.messaging.model.MessagingUserProfile);
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.ReqBody.StringResp,com.liveperson.messaging.network.socket.requests.SetUsersProfileRequest>;
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
			export module network {
				export module socket {
					export module requests {
						export class SubscribeExConversationsRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.SubscribeExConversations.Response,com.liveperson.messaging.network.socket.requests.SubscribeExConversationsRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SubscribeExConversationsRequest>;
							public static TAG: string;
							public constructor();
							public getData(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.SubscribeExConversations.Response,com.liveperson.messaging.network.socket.requests.SubscribeExConversationsRequest>;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public constructor(param0: com.liveperson.messaging.controller.ConnectionsController, param1: number, param2: string, param3: string, param4: string);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
			export module network {
				export module socket {
					export module requests {
						export class SubscribeMessagingEventsRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.SubscribeMessagingEvents.Response,com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsRequest>;
							public static Companion: com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsRequest.Companion;
							public getConversationId(): string;
							public constructor();
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: string, param1: string, param2: string, param3: java.lang.Integer);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.SubscribeMessagingEvents.Response,com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsRequest>;
							public constructor(param0: string, param1: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
							public getDialogId(): string;
							public constructor(param0: number);
						}
						export module SubscribeMessagingEventsRequest {
							export class Companion {
								public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsRequest.Companion>;
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
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class SubscribeMessagingEventsResponseHandler extends com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.SubscribeMessagingEvents.Response,com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsResponseHandler>;
							public static Companion: com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsResponseHandler.Companion;
							public constructor();
							public handle(param0: any): boolean;
							public constructor(param0: string);
							public parse(param0: org.json.JSONObject): any;
							public parse(param0: org.json.JSONObject): com.liveperson.api.request.SubscribeMessagingEvents.Response;
							public getAPIResponseType(): string;
							public handle(param0: com.liveperson.api.request.SubscribeMessagingEvents.Response): boolean;
						}
						export module SubscribeMessagingEventsResponseHandler {
							export class Companion {
								public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsResponseHandler.Companion>;
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
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class UnSubscribeExConversationsRequest extends com.liveperson.api.request.BaseAMSSocketRequest<com.liveperson.api.request.ReqBody.StringResp,com.liveperson.messaging.network.socket.requests.UnSubscribeExConversationsRequest> {
							public static class: java.lang.Class<com.liveperson.messaging.network.socket.requests.UnSubscribeExConversationsRequest>;
							public constructor();
							public getData(): string;
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<com.liveperson.api.request.ReqBody.StringResp,com.liveperson.messaging.network.socket.requests.UnSubscribeExConversationsRequest>;
							public constructor(param0: string, param1: number);
							public constructor(param0: number);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler<any,any>;
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
				export class BuildConfig {
					public static class: java.lang.Class<com.liveperson.messaging.sdk.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
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
						public static showConversation(param0: globalAndroid.app.Activity, param1: com.liveperson.infra.auth.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): boolean;
						public static hideConversation(param0: globalAndroid.app.Activity): void;
						public static initialize(param0: globalAndroid.content.Context, param1: com.liveperson.infra.InitLivePersonProperties): void;
						public static updateTokenInBackground(param0: string, param1: com.liveperson.infra.auth.LPAuthenticationParams): void;
						public static getSDKVersion(): string;
						public static checkAgentID(param0: com.liveperson.infra.ICallback<com.liveperson.messaging.model.AgentData,java.lang.Exception>): void;
						public static removeCallBack(): void;
						/** @deprecated */
						public static registerLPPusher(param0: string, param1: string, param2: string): void;
						/** @deprecated */
						public static shutDown(): void;
						public static getNumUnreadMessages(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
						public static setPushNotificationTapped(): void;
						public static setIsDebuggable(param0: boolean): void;
						/** @deprecated */
						public static unregisterLPPusher(param0: string, param1: string): void;
						public static setImageServicePendingIntent(param0: globalAndroid.app.PendingIntent): void;
						public static setUserProfile(param0: com.liveperson.messaging.sdk.api.model.ConsumerProfile): void;
						public static resolveConversation(): void;
						public static reconnect(param0: com.liveperson.infra.auth.LPAuthenticationParams): void;
						public static setCallback(param0: com.liveperson.api.LivePersonCallback): void;
						public static setImageServiceDownloadNotificationBuilder(param0: globalAndroid.app.Notification.Builder): void;
						public static getConversationFragment(param0: com.liveperson.infra.auth.LPAuthenticationParams, param1: com.liveperson.infra.ConversationViewParams): androidx.fragment.app.Fragment;
						/** @deprecated */
						public static getNumUnreadMessages(param0: string): number;
						public static handlePushMessage(param0: globalAndroid.content.Context, param1: java.util.Map<string,string>, param2: string, param3: boolean): com.liveperson.infra.model.PushMessage;
						public static unregisterLPPusher(param0: string, param1: string, param2: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
						public static registerLPPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.auth.LPAuthenticationParams, param4: com.liveperson.infra.ICallback<java.lang.Void,java.lang.Exception>): void;
						public static getUnreadMessagesCount(param0: string, param1: com.liveperson.infra.ICallback<java.lang.Integer,java.lang.Exception>): void;
						public static clearHistory(): boolean;
						public static setImageServiceUploadNotificationBuilder(param0: globalAndroid.app.Notification.Builder): void;
						public static markConversationAsNormal(): void;
						public static shutDown(param0: com.liveperson.messaging.sdk.api.callbacks.ShutDownLivePersonCallback): void;
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
					export module exceptions {
						export class SdkNotInitializedException {
							public static class: java.lang.Class<com.liveperson.messaging.sdk.api.exceptions.SdkNotInitializedException>;
							public static DEFAULT_MESSAGE: string;
							public static Companion: com.liveperson.messaging.sdk.api.exceptions.SdkNotInitializedException.Companion;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
						export module SdkNotInitializedException {
							export class Companion {
								public static class: java.lang.Class<com.liveperson.messaging.sdk.api.exceptions.SdkNotInitializedException.Companion>;
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
		export module messaging {
			export module sdk {
				export module api {
					export module model {
						export class ConsumerProfile {
							public static class: java.lang.Class<com.liveperson.messaging.sdk.api.model.ConsumerProfile>;
							public static Companion: com.liveperson.messaging.sdk.api.model.ConsumerProfile.Companion;
							public component2(): string;
							public hashCode(): number;
							public getPhoneNumber(): string;
							public constructor(param0: string, param1: string, param2: string, param3: string, param4: string);
							public toString(): string;
							public component5(): string;
							public getNickname(): string;
							public component3(): string;
							public component1(): string;
							public getAvatarUrl(): string;
							public getFirstName(): string;
							public getLastName(): string;
							public toUserProfile(): com.liveperson.messaging.model.UserProfile;
							public component4(): string;
							public copy(param0: string, param1: string, param2: string, param3: string, param4: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile;
							public equals(param0: any): boolean;
						}
						export module ConsumerProfile {
							export class Builder {
								public static class: java.lang.Class<com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder>;
								public setPhoneNumber(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public avatarUrl(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public setAvatarUrl(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public firstName(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public setNickname(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public setLastName(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public nickname(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public constructor();
								public build(): com.liveperson.messaging.sdk.api.model.ConsumerProfile;
								public lastName(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public phoneNumber(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
								public setFirstName(param0: string): com.liveperson.messaging.sdk.api.model.ConsumerProfile.Builder;
							}
							export class Companion {
								public static class: java.lang.Class<com.liveperson.messaging.sdk.api.model.ConsumerProfile.Companion>;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module actions {
						export abstract class BaseAction extends com.liveperson.messaging.structuredcontent.model.elements.BaseElement {
							public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.actions.BaseAction>;
							public mName: string;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public constructor(param0: string, param1: string);
							public getOnClickListener(param0: globalAndroid.content.Context, param1: string): com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener;
							public getName(): string;
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
			export module structuredcontent {
				export module model {
					export module actions {
						export class LinkAction extends com.liveperson.messaging.structuredcontent.model.actions.BaseAction {
							public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.actions.LinkAction>;
							public static TAG: string;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public constructor(param0: string, param1: string);
							public getOnClickListener(param0: globalAndroid.content.Context, param1: string): com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener;
							public constructor(param0: string, param1: string, param2: string);
							public toString(): string;
							public getUri(): string;
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
			export module structuredcontent {
				export module model {
					export module actions {
						export class NavigateAction extends com.liveperson.messaging.structuredcontent.model.actions.BaseAction {
							public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.actions.NavigateAction>;
							public static TAG: string;
							public constructor(param0: string, param1: string, param2: string, param3: string);
							public getLatitude(): string;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public constructor(param0: string, param1: string);
							public getOnClickListener(param0: globalAndroid.content.Context, param1: string): com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener;
							public getLongitude(): string;
							public toString(): string;
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
			export module structuredcontent {
				export module model {
					export module actions {
						export class OnActionClickListener {
							public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener>;
							/**
							 * Constructs a new instance of the com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module actions {
						export class PublishTextAction extends com.liveperson.messaging.structuredcontent.model.actions.BaseAction {
							public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.actions.PublishTextAction>;
							public static TAG: string;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public constructor(param0: string, param1: string);
							public getOnClickListener(param0: globalAndroid.content.Context, param1: string): com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener;
							public toString(): string;
							public constructor(param0: org.json.JSONObject, param1: org.json.JSONArray);
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
			export module structuredcontent {
				export module model {
					export module elements {
						export abstract class ActionableElement extends com.liveperson.messaging.structuredcontent.model.elements.SimpleElement {
							public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.ActionableElement>;
							public static TAG: string;
							public mMetadata: org.json.JSONArray;
							public mActionList: java.util.List<com.liveperson.messaging.structuredcontent.model.actions.BaseAction>;
							public getActions(): java.util.List<com.liveperson.messaging.structuredcontent.model.actions.BaseAction>;
							public parseClick(param0: org.json.JSONObject): void;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public parseActions(param0: org.json.JSONObject): void;
							public getAccessibilityActionString(): string;
							public getMetadata(): org.json.JSONArray;
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
			export module structuredcontent {
				export module model {
					export module elements {
						export abstract class BaseElement extends com.liveperson.messaging.structuredcontent.visitor.Visitable {
							public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.BaseElement>;
							public mType: string;
							public mAllowBorderBottom: boolean;
							public mAllowBorderLeft: boolean;
							public mAllowBorderTop: boolean;
							public mAllowBorderRight: boolean;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public setAllowedBorders(param0: boolean, param1: boolean, param2: boolean, param3: boolean): void;
							public toString(): string;
							public getType(): string;
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
			export module structuredcontent {
				export module model {
					export module elements {
						export abstract class SimpleElement extends com.liveperson.messaging.structuredcontent.model.elements.BaseElement {
							public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.SimpleElement>;
							public mTooltip: string;
							public mRtl: boolean;
							public setTooltip(param0: string): void;
							public constructor(param0: org.json.JSONObject);
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public getTooltip(): string;
							public isRtl(): boolean;
							public setRtl(param0: boolean): void;
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
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class ButtonElement extends com.liveperson.messaging.structuredcontent.model.elements.ActionableElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement>;
								public static TAG: string;
								public toString(): string;
								public getStyle(): com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle;
								public getTitle(): string;
								public setTitle(param0: string): void;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class ElementStyle {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle>;
								public getBackgroundColor(): java.lang.Integer;
								public getSize(): com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.ElementSize;
								public isBold(): boolean;
								public getTextColor(): java.lang.Integer;
								public getBorderRadius(): java.lang.Integer;
								public constructor(param0: org.json.JSONObject);
								public isItalic(): boolean;
								public setDefaultValues(): void;
								public getBorderColor(): java.lang.Integer;
							}
							export module ElementStyle {
								export class ElementSize {
									public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.ElementSize>;
									public static small: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.ElementSize;
									public static medium: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.ElementSize;
									public static large: com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.ElementSize;
									public static values(): native.Array<com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.ElementSize>;
									public static valueOf(param0: string): com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.ElementSize;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class ImageElement extends com.liveperson.messaging.structuredcontent.model.elements.ActionableElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement>;
								public toString(): string;
								public getUrl(): string;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public getCaption(): string;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class LinkElement extends com.liveperson.messaging.structuredcontent.model.elements.SimpleElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement>;
								public getUri(): string;
								public toString(): string;
								public getTitle(): string;
								public setTitle(param0: string): void;
								public setUri(param0: string): void;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class MapElement extends com.liveperson.messaging.structuredcontent.model.elements.ActionableElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement>;
								public getLatitude(): number;
								public toString(): string;
								public getLongitude(): number;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class TextElement extends com.liveperson.messaging.structuredcontent.model.elements.SimpleElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement>;
								public toString(): string;
								public getStyle(): com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle;
								public getText(): string;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public setText(param0: string): void;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class WebViewElement extends com.liveperson.messaging.structuredcontent.model.elements.ActionableElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement>;
								public toString(): string;
								public getUrl(): string;
								public constructor();
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module complex {
							export class CarouselElement extends com.liveperson.messaging.structuredcontent.model.elements.complex.ComplexElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement>;
								public toString(): string;
								public getPadding(): number;
								public constructor(param0: org.json.JSONObject, param1: string);
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public setPadding(param0: number): void;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module complex {
							export abstract class ComplexElement extends com.liveperson.messaging.structuredcontent.model.elements.SimpleElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.complex.ComplexElement>;
								public mElementList: java.util.List<com.liveperson.messaging.structuredcontent.model.elements.BaseElement>;
								public addElement(param0: com.liveperson.messaging.structuredcontent.model.elements.SimpleElement): void;
								public constructor(param0: org.json.JSONObject, param1: string);
								public getElementList(): java.util.List<com.liveperson.messaging.structuredcontent.model.elements.BaseElement>;
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module complex {
							export class LayoutElement extends com.liveperson.messaging.structuredcontent.model.elements.complex.ComplexElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement>;
								public toString(): string;
								public constructor(param0: org.json.JSONObject, param1: string);
								public constructor(param0: string, param1: boolean);
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public isVerticalOrientation(): boolean;
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
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module complex {
							export class QuickRepliesElement extends com.liveperson.messaging.structuredcontent.model.elements.complex.ComplexElement {
								public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement>;
								public toString(): string;
								public getItemsPerRow(): number;
								public constructor(param0: org.json.JSONObject, param1: string);
								public constructor(param0: string);
								public constructor(param0: org.json.JSONObject);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
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
		export module messaging {
			export module structuredcontent {
				export module parsers {
					export class ActionParser {
						public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.parsers.ActionParser>;
						public static TAG: string;
						public static parse(param0: org.json.JSONArray, param1: org.json.JSONArray): java.util.List<com.liveperson.messaging.structuredcontent.model.actions.BaseAction>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module parsers {
					export class ElementParser {
						public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.parsers.ElementParser>;
						public static TAG: string;
						public static parse(param0: org.json.JSONObject): com.liveperson.messaging.structuredcontent.model.elements.SimpleElement;
						public constructor();
						public static isStructuredContentEmpty(param0: org.json.JSONObject): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module parsers {
					export class ElementType {
						public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.parsers.ElementType>;
						public static ID: string;
						public static VERTICAL: string;
						public static HORIZONTAL: string;
						public static ELEMENTS: string;
						public static LAYOUT: string;
						public static TEXT: string;
						public static TITLE: string;
						public static STYLE: string;
						public static BOLD: string;
						public static ITALIC: string;
						public static COLOR: string;
						public static SIZE: string;
						public static NAME: string;
						public static ACTIONS: string;
						public static CLICK: string;
						public static URI: string;
						public static URL: string;
						public static LO: string;
						public static LA: string;
						public static TYPE: string;
						public static BUTTON: string;
						public static LINK: string;
						public static IMAGE: string;
						public static NAVIGATE: string;
						public static PUBLISH_TEXT: string;
						public static CAPTION: string;
						public static TOOLTIP: string;
						public static RTL: string;
						public static MAP: string;
						public static CAROUSEL: string;
						public static ANDROID: string;
						public static WEBVIEW: string;
						public static METADATA: string;
						public static PADDING: string;
						public static QUICK_REPLY: string;
						public static ITEMS_PER_ROW: string;
						public static REPLIES: string;
						public static BACKGROUND_COLOR: string;
						public static BORDER_COLOR: string;
						public static BORDER_RADIUS: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module visitor {
					export class ElementVisitor {
						public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.visitor.ElementVisitor>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.structuredcontent.visitor.ElementVisitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement): void;
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement): void;
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement): void;
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement): void;
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement): void;
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement): void;
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement): void;
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement): void;
							visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement): void;
						});
						public constructor();
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement): void;
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement): void;
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement): void;
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement): void;
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement): void;
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement): void;
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement): void;
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement): void;
						public visit(param0: com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module visitor {
					export class Visitable {
						public static class: java.lang.Class<com.liveperson.messaging.structuredcontent.visitor.Visitable>;
						/**
						 * Constructs a new instance of the com.liveperson.messaging.structuredcontent.visitor.Visitable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
						});
						public constructor();
						public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module utils {
				export class ClockUtils {
					public static class: java.lang.Class<com.liveperson.messaging.utils.ClockUtils>;
					public static addDiffToTimestamp(param0: number): number;
					public constructor();
					public static setClockDiff(param0: number): void;
					public static getSyncedTimestamp(): number;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module utils {
				export class FileSharingUtils {
					public static class: java.lang.Class<com.liveperson.messaging.utils.FileSharingUtils>;
					public static getFileSharingTypeFromUri(param0: string, param1: globalAndroid.content.Context): com.liveperson.messaging.background.filesharing.FileSharingType;
					public constructor();
					public static isDocumentType(param0: com.liveperson.messaging.background.filesharing.FileSharingType): boolean;
				}
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module utils {
				export class TokenUtils {
					public static class: java.lang.Class<com.liveperson.messaging.utils.TokenUtils>;
					public static TAG: string;
					public constructor();
					public static getOriginalConsumerIdFromJWT(param0: string): string;
					public static isJwtExpired(param0: string): boolean;
					public static getConsumerUserId(param0: string): string;
				}
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
//com.liveperson.api.request.BaseAMSSocketRequest:2
//com.liveperson.api.response.AbstractResponse:1
//com.liveperson.infra.ICallback:2
//com.liveperson.infra.database.DataBaseCommand:1
//com.liveperson.infra.database.DataBaseCommand.QueryCallback:1
//com.liveperson.infra.database.DataBaseCommand.QueryCommand:1
//com.liveperson.infra.log.logreporter.loggos.logsender.LogSenderCallback:1
//com.liveperson.infra.network.socket.BaseResponseHandler:2
//com.liveperson.infra.network.socket.BaseSocketRequest:2
//com.liveperson.infra.network.socket.ResponseCallback:1
//com.liveperson.infra.statemachine.interfaces.IStateMachine:1
//com.liveperson.infra.ui.view.header.StickyRecyclerHeadersAdapter:1
//com.liveperson.infra.utils.CollectionsUtil.Predicate:1
//com.liveperson.infra.utils.Queue:1
//com.liveperson.infra.utils.Synchronizer:1
//com.liveperson.infra.utils.Synchronizer.SynchronizerCallback:1
//com.liveperson.infra.utils.picasso.Action:1
//com.liveperson.infra.utils.picasso.Action.RequestWeakReference:1
//com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback:1
//com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback:1
//com.liveperson.monitoring.sdk.callbacks.IMonitoringCallback:2

