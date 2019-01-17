/// <reference path="./_helpers.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.api.sdk.LPConversationData.d.ts" />
/// <reference path="./com.liveperson.api.sdk.PermissionType.d.ts" />
/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AgentData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export class LivePersonCallback {
				/**
				 * Constructs a new instance of the com.liveperson.api.LivePersonCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
					onTokenExpired(): void;
					onUnauthenticatedUserExpired(): void;
					onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
					onConversationStarted(): void;
					onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
					onConversationResolved(): void;
					onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
					onConversationFragmentClosed(): void;
					onConnectionChanged(param0: boolean): void;
					onAgentTyping(param0: boolean): void;
					onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
					onCsatLaunched(): void;
					onCsatDismissed(): void;
					onCsatSubmitted(param0: string): void;
					onCsatSkipped(): void;
					onConversationMarkedAsUrgent(): void;
					onConversationMarkedAsNormal(): void;
					onOfflineHoursChanges(param0: boolean): void;
					onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
					onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
					onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
					onStructuredContentLinkClicked(param0: string): void;
				});
				public onConnectionChanged(param0: boolean): void;
				public onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
				public onConversationMarkedAsNormal(): void;
				public onOfflineHoursChanges(param0: boolean): void;
				public onAgentTyping(param0: boolean): void;
				public onCsatLaunched(): void;
				public onCsatDismissed(): void;
				public onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
				public onConversationResolved(): void;
				public onCsatSkipped(): void;
				public onConversationMarkedAsUrgent(): void;
				public onStructuredContentLinkClicked(param0: string): void;
				public onConversationStarted(): void;
				public onCsatSubmitted(param0: string): void;
				public onUnauthenticatedUserExpired(): void;
				public onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onConversationFragmentClosed(): void;
				public onTokenExpired(): void;
				public onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
				public onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
				public onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
				public onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
			}
			export module LivePersonCallback {
				export class NullLivePersonCallback {
					public onConversationMarkedAsUrgent(): void;
					public onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
					public onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
					public onTokenExpired(): void;
					public onCsatLaunched(): void;
					public onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
					public onCsatSubmitted(param0: string): void;
					public onAgentTyping(param0: boolean): void;
					public onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
					public onStructuredContentLinkClicked(param0: string): void;
					public onOfflineHoursChanges(param0: boolean): void;
					public onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
					public onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
					public onConversationStarted(): void;
					public onConversationResolved(): void;
					public onCsatDismissed(): void;
					public constructor();
					public onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
					public onConversationMarkedAsNormal(): void;
					public onCsatSkipped(): void;
					public onUnauthenticatedUserExpired(): void;
					public onConversationFragmentClosed(): void;
					public onConnectionChanged(param0: boolean): void;
					public onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.api.sdk.LPConversationData.d.ts" />
/// <reference path="./com.liveperson.api.sdk.PermissionType.d.ts" />
/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AgentData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export class LivePersonCallbackImpl {
				public onConnectionChanged(param0: boolean): void;
				public onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
				public onConversationMarkedAsNormal(): void;
				public onOfflineHoursChanges(param0: boolean): void;
				public onAgentTyping(param0: boolean): void;
				public onCsatLaunched(): void;
				public onCsatDismissed(): void;
				public onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
				public constructor();
				public onConversationResolved(): void;
				public onCsatSkipped(): void;
				public onConversationMarkedAsUrgent(): void;
				public onStructuredContentLinkClicked(param0: string): void;
				public onConversationStarted(): void;
				public onCsatSubmitted(param0: string): void;
				public onUnauthenticatedUserExpired(): void;
				public onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onConversationFragmentClosed(): void;
				public onTokenExpired(): void;
				public onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
				public onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
				public onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
				public onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
			}
		}
	}
}

import androidcontentContext = android.content.Context;
import androidcontentIntent = android.content.Intent;
import androidcontentIntentFilter = android.content.IntentFilter;
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.content.IntentFilter.d.ts" />
/// <reference path="./com.liveperson.api.sdk.LPConversationData.d.ts" />
/// <reference path="./com.liveperson.api.sdk.PermissionType.d.ts" />
/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AgentData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export class LivePersonIntents {
				public static getConversationID(param0: androidcontentIntent): string;
				public static sendOnAgentDetailsChanged(param0: androidcontentContext, param1: com.liveperson.messaging.model.AgentData): void;
				public static sendOnAgentAvatarTapped(param0: androidcontentContext, param1: com.liveperson.messaging.model.AgentData): void;
				public constructor();
				public static sendOnUserDeniedPermission(param0: androidcontentContext, param1: com.liveperson.api.sdk.PermissionType, param2: boolean): void;
				public static getPermissionType(param0: androidcontentIntent): com.liveperson.api.sdk.PermissionType;
				public static sendOnTokenExpired(param0: androidcontentContext): void;
				public static sendOnConnectionChanged(param0: androidcontentContext, param1: boolean): void;
				public static sendOnErrorIntent(param0: androidcontentContext, param1: com.liveperson.messaging.TaskType, param2: string): void;
				public static getAgentTypingValue(param0: androidcontentIntent): boolean;
				public static getLinkUri(param0: androidcontentIntent): string;
				public static sendOnOfflineHoursChanges(param0: androidcontentContext, param1: boolean): void;
				public static sendOnCsatDismissed(param0: androidcontentContext): void;
				public static sendOnConversationStarted(param0: androidcontentContext, param1: com.liveperson.api.sdk.LPConversationData): void;
				public static sendOnCsatSubmitted(param0: androidcontentContext, param1: string): void;
				public static sendOnAgentTyping(param0: androidcontentContext, param1: boolean): void;
				public static sendOnConversationMarkedAsUrgent(param0: androidcontentContext): void;
				public static getOnErrorMessage(param0: androidcontentIntent): string;
				public static sendOnCsatSkipped(param0: androidcontentContext): void;
				public static getPermissionDoNotShowAgainMarked(param0: androidcontentIntent): boolean;
				public static getIntentFilterForAllEvents(): androidcontentIntentFilter;
				public static sendOnConversationFragmentClosed(param0: androidcontentContext): void;
				public static getOfflineHoursOn(param0: androidcontentIntent): boolean;
				public static sendOnConversationResolved(param0: androidcontentContext, param1: com.liveperson.api.sdk.LPConversationData): void;
				public static getOnErrorTaskType(param0: androidcontentIntent): com.liveperson.messaging.TaskType;
				public static sendOnCsatLaunched(param0: androidcontentContext): void;
				public static getConnectedValue(param0: androidcontentIntent): boolean;
				public static sendOnUserExpired(param0: androidcontentContext): void;
				public static sendOnConversationMarkedAsNormal(param0: androidcontentContext): void;
				public static getLPConversationData(param0: androidcontentIntent): com.liveperson.api.sdk.LPConversationData;
				public static getAgentData(param0: androidcontentIntent): com.liveperson.messaging.model.AgentData;
				public static sendOnUserActionOnPreventedPermission(param0: androidcontentContext, param1: com.liveperson.api.sdk.PermissionType): void;
				public static sendOnStructuredContentLinkClicked(param0: androidcontentContext, param1: string): void;
			}
			export module LivePersonIntents {
				export class ILivePersonIntentAction {
					/**
					 * Constructs a new instance of the com.liveperson.api.LivePersonIntents$ILivePersonIntentAction interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
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
					public static LP_ON_TOKEN_EXPIRED_INTENT_ACTION: string;
					public static LP_ON_CSAT_SKIPPED_INTENT_ACTION: string;
					public static LP_ON_ERROR_INTENT_ACTION: string;
					public static LP_ON_AGENT_AVATAR_TAPPED_INTENT_ACTION: string;
					public static LP_ON_CONVERSATION_MARKED_AS_URGENT_INTENT_ACTION: string;
					public static LP_ON_UNAUTHENTICATED_USER_EXPIRED_INTENT_ACTION: string;
					public static LP_ON_CSAT_DISMISSED_INTENT_ACTION: string;
					public static LP_ON_CONNECTION_CHANGED_INTENT_ACTION: string;
				}
				export class ILivePersonIntentExtras {
					/**
					 * Constructs a new instance of the com.liveperson.api.LivePersonIntents$ILivePersonIntentExtras interface with the provided implementation.
					 */
					public constructor(implementation: {
					});
					public static LP_AGENT_DATA_INTENT_PARCELABLE_EXTRA: string;
					public static LP_IS_OFFLINE_HOURS_ON_INTENT_BOOLEAN_EXTRA: string;
					public static LP_PERMISSION_TYPE_EXTRA: string;
					public static LP_CONVERSATION_ID_INTENT_STRING_EXTRA: string;
					public static LP_ON_ERROR_MESSAGE_INTENT_STRING_EXTRA: string;
					public static LP_ON_ERROR_TASK_TYPE_INTENT_INT_EXTRA: string;
					public static LP_LINK_URI_EXTRA: string;
					public static LP_AGENT_IS_TYPING_INTENT_BOOLEAN_EXTRA: string;
					public static LP_IS_CONNECTED_INTENT_BOOLEAN_EXTRA: string;
					public static LP_PERMISSION_DO_NOT_SHOW_AGAIN_EXTRA: string;
					public static LP_CONVERSATION_DATA_INTENT_PARCELABLE_EXTRA: string;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module exception {
				export class BadConversationException {
					public constructor(param0: string);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module exception {
				export class BadMessageException {
					public constructor(param0: string);
				}
			}
		}
	}
}

import orgjsonJSONObject = org.json.JSONObject;
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export abstract class AbstractRequest {
					public static JSON_KEY_TYPE: string;
					public static JSON_KEY_BODY: string;
					public body: orgjsonJSONObject;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public toJsonString(param0: number): string;
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export abstract class BaseAMSSocketRequest {
					public constructor(param0: string);
					public getSocketUrl(): string;
					public constructor(param0: string, param1: number);
				}
			}
		}
	}
}

import javalangObject = java.lang.Object;
/// <reference path="./com.liveperson.api.response.BaseGenerateURLResponse.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export abstract class BaseGenerateURL extends com.liveperson.api.request.AbstractRequest {
					public static BASE_GENERATE_URL_TYPE: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
				}
				export module BaseGenerateURL {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public static BASE_GENERATE_URL_RESPONSE_TYPE: string;
						public constructor(param0: orgjsonJSONObject);
						public getBody(): javalangObject;
						public getBody(): com.liveperson.api.response.BaseGenerateURLResponse;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.infra.CampaignInfo.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class ConsumerRequestConversation extends com.liveperson.api.request.RequestConversation {
					public static INTERACTION_CONTEXT_ID: string;
					public appId: string;
					public ttrType: com.liveperson.api.response.types.TTRType;
					public brandId: string;
					public skillId: string;
					public mCampaignInfo: com.liveperson.infra.CampaignInfo;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: com.liveperson.api.response.types.TTRType, param2: string, param3: string, param4: com.liveperson.infra.CampaignInfo);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GenerateURLForDownloadFile extends com.liveperson.api.request.BaseGenerateURL {
					public static RELATIVE_PATH: string;
					public static GENERATE_URL_FOR_DOWNLOAD_FILE_TYPE: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GenerateURLForUploadFile extends com.liveperson.api.request.BaseGenerateURL {
					public static GENERATE_URL_FOR_UPLOAD_FILE_TYPE: string;
					public static FILE_SIZE: string;
					public static FILE_TYPE: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: number);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GenerateUploadTokenRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
					public getData(): string;
					public setResponseCallBack(param0: com.liveperson.infra.ICallback): void;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public constructor(param0: string);
					public getRequestName(): string;
					public constructor(param0: string, param1: number);
					public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GeneratedUploadTokenField extends com.liveperson.api.request.BaseGenerateURL {
					public static READ_OTK: string;
					public static WRITE_OTK: string;
					public static GENERATE_UPLOAD_TOKEN_TYPE: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: string);
				}
				export module GeneratedUploadTokenField {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public static GENERATE_UPLOAD_RESPONSE_TYPE: string;
						public body: com.liveperson.api.request.GeneratedUploadTokenField.Response.Body;
						public constructor(param0: orgjsonJSONObject);
						public getBody(): com.liveperson.api.request.GeneratedUploadTokenField.Response.Body;
						public getBody(): javalangObject;
					}
					export module Response {
						export class Body {
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

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GetClock extends com.liveperson.api.request.AbstractRequest {
					public static CURRENT_TIME: string;
					public static GET_CLOCK_TYPE: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
				}
				export module GetClock {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public static GET_CLOCK_RESPONSE_TYPE: string;
						public body: com.liveperson.api.request.GetClock.Response.Body;
						public getBody(): com.liveperson.api.request.GetClock.Response.Body;
						public constructor(param0: orgjsonJSONObject);
						public getBody(): javalangObject;
					}
					export module Response {
						export class Body {
							public currentTime: number;
							public constructor();
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.UserProfile.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class GetUserProfile extends com.liveperson.api.request.AbstractRequest {
					public static BODY: string;
					public static GET_USER_PROFILE_TYPE: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor(param0: string);
					public constructor();
				}
				export module GetUserProfile {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public static GET_USER_PROFILE_RESPONSE_TYPE: string;
						public constructor(param0: orgjsonJSONObject);
						public getBody(): javalangObject;
						public getBody(): com.liveperson.api.response.model.UserProfile;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.request.message.PublishMessage.d.ts" />
/// <reference path="./com.liveperson.api.response.model.ContentType.d.ts" />
/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.model.types.ChatState.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class PublishEvent extends com.liveperson.api.request.AbstractRequest {
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
					public toJson(param0: orgjsonJSONObject): void;
					public constructor(param0: string, param1: string, param2: com.liveperson.api.request.message.PublishMessage, param3: com.liveperson.api.request.PublishEvent.Type, param4: com.liveperson.api.response.model.ContentType, param5: string, param6: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: com.liveperson.api.request.PublishEvent.Type, param3: com.liveperson.infra.model.types.ChatState);
					public constructor(param0: string, param1: string, param2: com.liveperson.api.request.PublishEvent.Type, param3: string, param4: native.Array<number>, param5: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
				}
				export module PublishEvent {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public static PUBLISH_EVENT_RESPONSE_TYPE: string;
						public constructor(param0: orgjsonJSONObject);
						public getBody(): com.liveperson.api.request.PublishEvent.Response.Body;
						public getBody(): javalangObject;
					}
					export module Response {
						export class Body {
							public sequence: number;
							public constructor();
						}
					}
					export class Type {
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

import orgjsonJSONArray = org.json.JSONArray;
import javautilArrayList = java.util.ArrayList;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class QueryMessages extends com.liveperson.api.request.AbstractRequest {
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
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: number, param2: number, param3: number);
				}
				export module QueryMessages {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public static QUERY_MESSAGES_RESPONSE_TYPE: string;
						public constructor(param0: orgjsonJSONObject);
						public constructor(param0: orgjsonJSONArray);
						public getBody(): javalangObject;
						public getBody(): javautilArrayList;
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
		export module api {
			export module request {
				export class ReqBody extends com.liveperson.api.request.AbstractRequest {
					public static REQ_BODY_TYPE: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
				}
				export module ReqBody {
					export class StringResp extends com.liveperson.api.response.AbstractResponse {
						public static REQ_BODY_RESPONSE_TYPE: string;
						public getBody(): string;
						public constructor(param0: orgjsonJSONObject);
						public getBody(): javalangObject;
						public toString(): string;
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
		export module api {
			export module request {
				export class RequestConversation extends com.liveperson.api.request.AbstractRequest {
					public static CONVERSATION_ID: string;
					public static REQUEST_CONVERSATION_TYPE: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
				}
				export module RequestConversation {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public static REQUEST_CONVERSATION_RESPONSE_TYPE: string;
						public constructor(param0: orgjsonJSONObject);
						public getBody(): javalangObject;
						public getBody(): com.liveperson.api.request.RequestConversation.Response.Body;
						public toString(): string;
					}
					export module Response {
						export class Body {
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

/// <reference path="./com.liveperson.api.response.model.UserProfile.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class SetUserProfile extends com.liveperson.api.request.AbstractRequest {
					public currentProfile: com.liveperson.api.response.model.UserProfile;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: com.liveperson.api.response.model.UserProfile);
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class SubscribeExConversations extends com.liveperson.api.request.AbstractRequest {
					public consumerId: string;
					public maxLastUpdatedTime: number;
					public minLastUpdatedTime: number;
					public agentIds: native.Array<string>;
					public brandId: string;
					public maxETTR: number;
					public convStage: native.Array<string>;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor();
					public constructor(param0: string, param1: number, param2: number, param3: native.Array<string>, param4: string, param5: number, param6: native.Array<string>);
				}
				export module SubscribeExConversations {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public static SUBSCRIPTION_ID: string;
						public static SUBSCRIBE_EX_CONVERSATIONS_RESPONSE_TYPE: string;
						public constructor(param0: orgjsonJSONObject);
						public getBody(): javalangObject;
					}
					export module Response {
						export class Body {
							public subscriptionId: string;
							public constructor();
						}
					}
				}
			}
		}
	}
}

import javalangInteger = java.lang.Integer;
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class SubscribeMessagingEvents extends com.liveperson.api.request.AbstractRequest {
					public toJson(param0: orgjsonJSONObject): void;
					public getConversationId(): string;
					public getMessageType(): string;
					public constructor();
					public getDialogId(): string;
					public getFromSeq(): javalangInteger;
					public constructor(param0: string, param1: string, param2: javalangInteger);
				}
				export module SubscribeMessagingEvents {
					export class Response extends com.liveperson.api.response.AbstractResponse {
						public constructor(param0: orgjsonJSONObject);
						public getObj(): orgjsonJSONObject;
						public getBody(): void;
						public setObj(param0: orgjsonJSONObject): void;
						public getBody(): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class UnsubscribeExConversations extends com.liveperson.api.request.AbstractRequest {
					public static TAG: string;
					public toJson(param0: orgjsonJSONObject): void;
					public getMessageType(): string;
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.types.ConversationState.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CsatStatus.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DialogState.d.ts" />
/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export class UpdateConversationField extends com.liveperson.api.request.AbstractRequest {
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
					public toJson(param0: orgjsonJSONObject): void;
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

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export abstract class BasePublishMessage {
						public constructor();
						public getMessageText(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getMessage(): javalangObject;
						public getMessageTextWithoutSpecialChars(param0: string): string;
					}
					export module BasePublishMessage {
						export class PublishMessageType {
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

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class FilePublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public static CAPTION: string;
						public static RELATIVE_PATH: string;
						public static FILE_TYPE: string;
						public static PREVIEW: string;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public constructor();
						public getMessageText(): string;
						public getFileType(): string;
						public getPreview(): string;
						public constructor(param0: orgjsonJSONObject);
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getCaption(): string;
						public getRelativePath(): string;
						public getMessage(): javalangObject;
						public getMessage(): orgjsonJSONObject;
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
		export module api {
			export module request {
				export module message {
					export class FormPublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public static FORM_ID: string;
						public static INVITATION_ID: string;
						public static TITLE: string;
						public constructor();
						public getMessageText(): string;
						public getInvitationId(): string;
						public constructor(param0: orgjsonJSONObject);
						public getFormTitle(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getFormId(): string;
						public getMessage(): javalangObject;
						public getMessage(): orgjsonJSONObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class FormSubmissionPublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public static INVITATION_ID: string;
						public static SUBMISSION_ID: string;
						public constructor();
						public getmSubmissionId(): string;
						public getMessageText(): string;
						public getInvitationId(): string;
						public constructor(param0: orgjsonJSONObject);
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getMessage(): javalangObject;
						public constructor(param0: string, param1: string);
						public getMessage(): orgjsonJSONObject;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class JsonPublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public getMessage(): string;
						public constructor();
						public getMessageText(): string;
						public constructor(param0: orgjsonJSONObject);
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getCaption(): string;
						public getMessage(): javalangObject;
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module request {
				export module message {
					export class PublishMessage {
						/**
						 * Constructs a new instance of the com.liveperson.api.request.message.PublishMessage interface with the provided implementation.
						 */
						public constructor(implementation: {
							getMessage(): javalangObject;
						});
						public getMessage(): javalangObject;
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
		export module api {
			export module request {
				export module message {
					export class StructuredContentPublishMessage extends com.liveperson.api.request.message.TextPublishMessage {
						public getMessage(): string;
						public constructor();
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getMessage(): javalangObject;
						public constructor(param0: string);
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
		export module api {
			export module request {
				export module message {
					export class TextPublishMessage extends com.liveperson.api.request.message.BasePublishMessage {
						public getMessage(): string;
						public constructor();
						public getMessageText(): string;
						public getType(): com.liveperson.api.request.message.BasePublishMessage.PublishMessageType;
						public getMessage(): javalangObject;
						public constructor(param0: string);
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
		export module api {
			export module response {
				export abstract class AbstractResponse {
					public static GENERAL_INNER_RESPONSE: string;
					public reqId: number;
					public code: number;
					public constructor(param0: orgjsonJSONObject);
					public getBody(): javalangObject;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.QueryParams.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export class BaseGenerateURLResponse {
					public static RELATIVE_PATH: string;
					public static QUERY_PARAMS: string;
					public relativePath: string;
					public queryParams: com.liveperson.api.response.model.QueryParams;
					public constructor(param0: orgjsonJSONObject);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.BaseGenerateURLResponse.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export class IOnUrlReady {
					/**
					 * Constructs a new instance of the com.liveperson.api.response.IOnUrlReady interface with the provided implementation.
					 */
					public constructor(implementation: {
						onUrlReady(param0: com.liveperson.api.response.BaseGenerateURLResponse): void;
						onUrlError(param0: string): void;
					});
					public onUrlReady(param0: com.liveperson.api.response.BaseGenerateURLResponse): void;
					public onUrlError(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.Event.d.ts" />
/// <reference path="./com.liveperson.api.response.model.OriginatorMetadata.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module events {
					export class ContentEventNotification {
						public sequence: number;
						public originatorId: string;
						public serverTimestamp: number;
						public event: com.liveperson.api.response.model.Event;
						public dialogId: string;
						public eventId: string;
						public originatorMetadata: com.liveperson.api.response.model.OriginatorMetadata;
						public constructor(param0: orgjsonJSONObject);
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.Change.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module events {
					export class ExConversationChangeNotification extends com.liveperson.api.response.AbstractResponse {
						public static CONVERSATION_CHANGE_NOTIFICATION_TYPE: string;
						public notificationBody: com.liveperson.api.response.events.ExConversationChangeNotification.Body;
						public static getResponseHandler(param0: com.liveperson.messaging.Messaging): com.liveperson.infra.network.socket.BaseResponseHandler;
						public getBody(): com.liveperson.api.response.events.ExConversationChangeNotification.Body;
						public constructor(param0: orgjsonJSONObject);
						public static getType(): string;
						public getBody(): javalangObject;
					}
					export module ExConversationChangeNotification {
						export class Body {
							public constructor(param0: orgjsonJSONObject);
							public getChanges(): native.Array<com.liveperson.api.response.model.Change>;
							public getSubscriptionId(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.MessagingEventNotificationHandler.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module events {
					export class MessagingEventNotification extends com.liveperson.api.response.AbstractResponse {
						public static Companion: com.liveperson.api.response.events.MessagingEventNotification.Companion;
						public getTAG(): string;
						public static getResponseHandler(param0: com.liveperson.messaging.Messaging): com.liveperson.messaging.network.socket.MessagingEventNotificationHandler;
						public constructor(param0: orgjsonJSONObject);
						public static getType(): string;
						public getBody(): javalangObject;
						public getBody(): javautilArrayList;
					}
					export module MessagingEventNotification {
						export class Companion {
							public getMESSAGING_EVENT_NOTIFICATION_TYPE(): string;
							public getResponseHandler(param0: com.liveperson.messaging.Messaging): com.liveperson.messaging.network.socket.MessagingEventNotificationHandler;
							public getType(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.Result.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Change {
						public type: string;
						public result: com.liveperson.api.response.model.Result;
						public constructor(param0: orgjsonJSONObject);
					}
					export module Change {
						export class KEYS {
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

/// <reference path="./com.liveperson.messaging.model.ConversationData.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Dialog.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class CobrowseDialogData extends com.liveperson.api.response.model.DialogData {
						public metaData: string;
						public constructor();
						public constructor(param0: orgjsonJSONObject);
						public constructor(param0: orgjsonJSONObject, param1: string);
						public constructor(param0: com.liveperson.messaging.model.ConversationData);
						public constructor(param0: com.liveperson.messaging.model.Dialog);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class ContentType {
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

/// <reference path="./com.liveperson.api.response.model.DialogData.d.ts" />
/// <reference path="./com.liveperson.api.response.model.Participants.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CSAT.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.api.response.types.ConversationState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export abstract class ConversationHistoryDetails {
						public participants: com.liveperson.api.response.model.Participants;
						public stage: com.liveperson.api.response.types.ConversationState;
						public startTs: number;
						public endTs: number;
						public csat: com.liveperson.api.response.types.CSAT;
						public closeReason: com.liveperson.api.response.types.CloseReason;
						public dialogs: native.Array<com.liveperson.api.response.model.DialogData>;
						public conversationId: string;
						public constructor(param0: orgjsonJSONObject, param1: string);
						public getState(): com.liveperson.api.response.types.ConversationState;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class ConversationINCADetails extends com.liveperson.api.response.model.ConversationHistoryDetails {
						public constructor(param0: orgjsonJSONObject, param1: string);
						public constructor(param0: orgjsonJSONObject);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.Delay.d.ts" />
/// <reference path="./com.liveperson.api.response.model.Ttr.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class ConversationUMSDetails extends com.liveperson.api.response.model.ConversationHistoryDetails {
						public skillId: string;
						public metaDataLastUpdateTs: number;
						public ttr: com.liveperson.api.response.model.Ttr;
						public delay: com.liveperson.api.response.model.Delay;
						public manualETTR: number;
						public constructor(param0: orgjsonJSONObject, param1: string);
						public getCalculatedTTR(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Delay {
						public type: string;
						public tillWhen: number;
						public constructor(param0: orgjsonJSONObject);
					}
				}
			}
		}
	}
}

/// <reference path="./org.json.JSONArray.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class DeliveryStatusUpdateInfo {
						public constructor(param0: orgjsonJSONArray);
						public getMetadata(): orgjsonJSONArray;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.Participants.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DialogState.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DialogType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationData.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Dialog.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class DialogData extends com.liveperson.api.response.model.MultiDialog {
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
						public constructor(param0: orgjsonJSONObject);
						public constructor(param0: orgjsonJSONObject, param1: string);
						public constructor(param0: com.liveperson.messaging.model.ConversationData);
						public constructor(param0: com.liveperson.messaging.model.Dialog);
						public static extractDialogId(param0: com.liveperson.messaging.model.ConversationData): string;
						public static extractDialogsData(param0: com.liveperson.messaging.model.ConversationData): native.Array<com.liveperson.api.response.model.DialogData>;
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.request.message.BasePublishMessage.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DeliveryStatus.d.ts" />
/// <reference path="./com.liveperson.infra.model.types.ChatState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Event {
						public static CONTENT: string;
						public type: com.liveperson.api.response.model.Event.Types;
						public contentType: string;
						public message: com.liveperson.api.request.message.BasePublishMessage;
						public chatState: com.liveperson.infra.model.types.ChatState;
						public status: com.liveperson.api.response.types.DeliveryStatus;
						public sequenceList: native.Array<number>;
						public quickRepliesJsonString: string;
						public constructor(param0: orgjsonJSONObject);
						public extractLinks(param0: string): native.Array<string>;
					}
					export module Event {
						export class Types {
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

/// <reference path="./com.liveperson.api.response.model.DialogData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export abstract class MultiDialog {
						public channelType: com.liveperson.api.response.model.MultiDialog.ChannelType;
						public constructor();
						public getType(): com.liveperson.api.response.model.MultiDialog.ChannelType;
						public constructor(param0: orgjsonJSONObject);
						public static create(param0: orgjsonJSONObject): com.liveperson.api.response.model.DialogData;
						public static create(param0: orgjsonJSONObject, param1: string): com.liveperson.api.response.model.DialogData;
					}
					export module MultiDialog {
						export class ChannelType {
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

/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class OriginatorMetadata {
						public static TAG: string;
						public mId: string;
						public mRole: com.liveperson.api.response.model.Participants.ParticipantRole;
						public constructor();
						public static fromJson(param0: orgjsonJSONObject): com.liveperson.api.response.model.OriginatorMetadata;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Participants {
						public CONSUMER: native.Array<string>;
						public ASSIGNED_AGENT: native.Array<string>;
						public MANAGER: native.Array<string>;
						public READER: native.Array<string>;
						public CONTROLLER: native.Array<string>;
						public AGENTS: native.Array<string>;
						public ALL_AGENTS: native.Array<string>;
						public add(param0: native.Array<string>, param1: com.liveperson.api.response.model.Participants.ParticipantRole): void;
						public constructor();
						public extractAllParticipantsIds(): native.Array<string>;
						public add(param0: javautilArrayList, param1: com.liveperson.api.response.model.Participants.ParticipantRole): void;
					}
					export module Participants {
						export class ParticipantRole {
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

import androidnetUri = android.net.Uri;
import androidnetUriBuilder = android.net.Uri.Builder;
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class QueryParams {
						public static TEMP_URL: string;
						public static EXPIRE_TIME: string;
						public tempURL: string;
						public expireTime: string;
						public constructor(param0: orgjsonJSONObject);
						public constructor(param0: androidnetUri);
						public appendQueryParameter(param0: androidnetUriBuilder): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.ConversationUMSDetails.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Result {
						public conversationId: string;
						public effectiveTTR: number;
						public conversationDetails: com.liveperson.api.response.model.ConversationUMSDetails;
						public constructor(param0: orgjsonJSONObject);
						public toString(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class Ttr {
						public ttrType: string;
						public value: number;
						public constructor(param0: orgjsonJSONObject);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module model {
					export class UserProfile {
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
						public addToJson(param0: orgjsonJSONObject): void;
						public setPrivateData(param0: com.liveperson.api.response.model.UserProfile.PrivateData): void;
						public setEmail(param0: string): void;
						public getFirstName(): string;
						public getPrivateData(): com.liveperson.api.response.model.UserProfile.PrivateData;
						public setAvatarUrl(param0: string): void;
						public getUserType(): com.liveperson.api.response.model.UserProfile.UserType;
						public getLocalId(): number;
						public constructor(param0: orgjsonJSONObject);
						public getEmail(): string;
						public constructor(param0: string, param1: string, param2: com.liveperson.api.response.model.UserProfile.UserType);
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
						public setNickname(param0: string): void;
						public setMobileNumber(param0: string): void;
						public getDescription(): string;
						public setLocalId(param0: number): void;
						public getNickname(): string;
					}
					export module UserProfile {
						export class PrivateData {
							public mobileNum: string;
							public mail: string;
							public constructor(param0: orgjsonJSONObject);
							public constructor(param0: string, param1: string);
							public addToJson(param0: orgjsonJSONObject): void;
						}
						export class PushNotificationData {
							public serviceName: string;
							public certName: string;
							public token: string;
							public constructor(param0: orgjsonJSONObject);
							public constructor(param0: string, param1: string, param2: string);
							public addToJson(param0: orgjsonJSONObject): void;
						}
						export class UserType {
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

/// <reference path="./com.liveperson.api.response.types.CsatStatus.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class CSAT {
						public csatRate: number;
						public csatResolutionConfirmation: string;
						public csatStatus: com.liveperson.api.response.types.CsatStatus;
						public constructor(param0: orgjsonJSONObject);
						public isShowedCsat(): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
					}
					export module CSAT {
						export class CSAT_SHOW_STATUS {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class CloseReason {
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

/// <reference path="./com.liveperson.api.response.types.DialogState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class ConversationState {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class CsatStatus {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class DeliveryStatus {
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

/// <reference path="./com.liveperson.api.response.types.ConversationState.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class DialogState {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class DialogType {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module response {
				export module types {
					export class TTRType {
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

import androidosParcel = android.os.Parcel;
import androidosParcelableCreator = android.os.Parcelable.Creator;
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module sdk {
				export class LPConversationData {
					public static CREATOR: androidosParcelableCreator;
					public getId(): string;
					public constructor(param0: string);
					public constructor(param0: androidosParcel);
					public getCloseReason(): com.liveperson.api.response.types.CloseReason;
					public setCloseReason(param0: com.liveperson.api.response.types.CloseReason): void;
					public describeContents(): number;
					public writeToParcel(param0: androidosParcel, param1: number): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module api {
			export module sdk {
				export class PermissionType {
					public static PHOTO_SHARING: com.liveperson.api.sdk.PermissionType;
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
			export module messaging {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class ActionFailureReason {
				public static NO_NETWORK: com.liveperson.messaging.ActionFailureReason;
				public static NOT_ACTIVE: com.liveperson.messaging.ActionFailureReason;
				public static POST_SURVEY_IN_PROGRESS: com.liveperson.messaging.ActionFailureReason;
				public static values(): native.Array<com.liveperson.messaging.ActionFailureReason>;
				public static valueOf(param0: string): com.liveperson.messaging.ActionFailureReason;
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class GeneralMessagingResponseHandler {
				public createInstance(param0: string): com.liveperson.infra.network.socket.BaseResponseHandler;
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.api.LivePersonCallback.d.ts" />
/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.ConversationViewParams.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.InitLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.LogoutLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.model.types.ChatState.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.InitProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.LogoutProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.ShutDownProcess.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.ActionFailureReason.d.ts" />
/// <reference path="./com.liveperson.messaging.MessagingInitData.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.FileSharingType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.UserProfileBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class IMessaging {
				/**
				 * Constructs a new instance of the com.liveperson.messaging.IMessaging interface with the provided implementation.
				 */
				public constructor(implementation: {
					init(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack): void;
					init(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
					clearAllConversationData(param0: string): void;
					shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
					logout(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
					logout(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
					isInitialized(): boolean;
					sendMessage(param0: string, param1: string, param2: string, param3: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
					sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
					sendFormSubmissionMessageCommand(param0: string): void;
					resendMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
					resendMessage(param0: string, param1: string, param2: number, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
					updateMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					registerPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.LPAuthenticationParams, param4: com.liveperson.infra.ICallback): void;
					unregisterPusher(param0: string, param1: string, param2: com.liveperson.infra.ICallback, param3: boolean): void;
					updateTokenInBackground(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
					changeChatState(param0: string, param1: string, param2: com.liveperson.infra.model.types.ChatState): com.liveperson.messaging.ActionFailureReason;
					resolveConversation(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
					closeDialog(param0: string): com.liveperson.messaging.ActionFailureReason;
					markConversationAsUrgent(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
					markConversationAsNormal(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
					sendCSAT(param0: string, param1: string, param2: number, param3: number): void;
					sendUserProfile(param0: string, param1: com.liveperson.messaging.model.UserProfileBundle): void;
					setCallback(param0: com.liveperson.api.LivePersonCallback): void;
					removeCallback(): void;
					checkActiveConversation(param0: string, param1: com.liveperson.infra.ICallback): void;
					checkConversationIsMarkedAsUrgent(param0: string, param1: com.liveperson.infra.ICallback): void;
					checkAgentID(param0: string, param1: com.liveperson.infra.ICallback): void;
					clearHistory(param0: string): boolean;
					getMaskedMessage(param0: string, param1: string): com.liveperson.infra.utils.MaskedMessage;
					generateUploadToken(param0: string, param1: string, param2: string): void;
					sendFileMessage(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: boolean): void;
					downloadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string): void;
					removeMultipleOlderImages(param0: androidcontentContext, param1: string, param2: string): void;
					isSocketOpen(param0: string): boolean;
					connect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams, param3: boolean): void;
					connect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
					reconnect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
					disconnect(param0: string): void;
					moveToBackground(param0: string, param1: number): void;
					moveToForeground(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
					serviceStarted(param0: string): void;
					serviceStopped(param0: string): void;
					getUnreadMessagesCount(param0: string, param1: string, param2: com.liveperson.infra.ICallback): void;
				});
				public closeDialog(param0: string): com.liveperson.messaging.ActionFailureReason;
				public moveToBackground(param0: string, param1: number): void;
				public sendFormSubmissionMessageCommand(param0: string): void;
				public resolveConversation(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public isSocketOpen(param0: string): boolean;
				public serviceStarted(param0: string): void;
				public updateMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
				public sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
				public connect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public getMaskedMessage(param0: string, param1: string): com.liveperson.infra.utils.MaskedMessage;
				public removeMultipleOlderImages(param0: androidcontentContext, param1: string, param2: string): void;
				public sendCSAT(param0: string, param1: string, param2: number, param3: number): void;
				public init(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack): void;
				public clearAllConversationData(param0: string): void;
				public moveToForeground(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
				public resendMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
				public checkConversationIsMarkedAsUrgent(param0: string, param1: com.liveperson.infra.ICallback): void;
				public disconnect(param0: string): void;
				public isInitialized(): boolean;
				public checkAgentID(param0: string, param1: com.liveperson.infra.ICallback): void;
				public clearHistory(param0: string): boolean;
				public logout(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
				public updateTokenInBackground(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
				public getUnreadMessagesCount(param0: string, param1: string, param2: com.liveperson.infra.ICallback): void;
				public markConversationAsNormal(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public removeCallback(): void;
				public reconnect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
				public downloadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string): void;
				public sendUserProfile(param0: string, param1: com.liveperson.messaging.model.UserProfileBundle): void;
				public unregisterPusher(param0: string, param1: string, param2: com.liveperson.infra.ICallback, param3: boolean): void;
				public generateUploadToken(param0: string, param1: string, param2: string): void;
				public serviceStopped(param0: string): void;
				public sendFileMessage(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: boolean): void;
				public init(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
				public changeChatState(param0: string, param1: string, param2: com.liveperson.infra.model.types.ChatState): com.liveperson.messaging.ActionFailureReason;
				public markConversationAsUrgent(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public setCallback(param0: com.liveperson.api.LivePersonCallback): void;
				public connect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams, param3: boolean): void;
				public checkActiveConversation(param0: string, param1: com.liveperson.infra.ICallback): void;
				public logout(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
				public sendMessage(param0: string, param1: string, param2: string, param3: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
				public registerPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.LPAuthenticationParams, param4: com.liveperson.infra.ICallback): void;
				public resendMessage(param0: string, param1: string, param2: number, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
			}
		}
	}
}

/// <reference path="./com.liveperson.api.LivePersonCallback.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.api.sdk.LPConversationData.d.ts" />
/// <reference path="./com.liveperson.api.sdk.PermissionType.d.ts" />
/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AgentData.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class LivePersonEventsProxy {
				public onConnectionChanged(param0: boolean): void;
				public onUserActionOnPreventedPermission(param0: com.liveperson.api.sdk.PermissionType): void;
				public onConversationMarkedAsNormal(): void;
				public onAgentTyping(param0: boolean): void;
				public onCsatDismissed(): void;
				public onAgentAvatarTapped(param0: com.liveperson.messaging.model.AgentData): void;
				public onConversationResolved(): void;
				public onCsatSkipped(): void;
				public onStructuredContentLinkClicked(param0: string): void;
				public onConversationStarted(): void;
				public onConversationFragmentClosed(): void;
				public onAgentDetailsChanged(param0: com.liveperson.messaging.model.AgentData): void;
				public onUserDeniedPermission(param0: com.liveperson.api.sdk.PermissionType, param1: boolean): void;
				public onConversationResolved(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onOfflineHoursChanges(param0: boolean): void;
				public onCsatLaunched(): void;
				public removeCallback(): void;
				public onConversationMarkedAsUrgent(): void;
				public setCallback(param0: com.liveperson.api.LivePersonCallback): void;
				public onCsatSubmitted(param0: string): void;
				public onUnauthenticatedUserExpired(): void;
				public onConversationStarted(param0: com.liveperson.api.sdk.LPConversationData): void;
				public onTokenExpired(): void;
				public onConversationResolved(param0: com.liveperson.api.response.types.CloseReason): void;
				public onError(param0: com.liveperson.messaging.TaskType, param1: string): void;
			}
		}
	}
}

import androidappPendingIntent = android.app.PendingIntent;
import androidappNotificationBuilder = android.app.Notification.Builder;
/// <reference path="./android.app.PendingIntent.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.api.LivePersonCallback.d.ts" />
/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DeliveryStatus.d.ts" />
/// <reference path="./com.liveperson.infra.ConversationViewParams.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.InitLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.callbacks.LogoutLivePersonCallBack.d.ts" />
/// <reference path="./com.liveperson.infra.model.types.ChatState.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.InitProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.LogoutProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.ShutDownProcess.d.ts" />
/// <reference path="./com.liveperson.infra.utils.LPAudioUtils.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.ActionFailureReason.d.ts" />
/// <reference path="./com.liveperson.messaging.LivePersonEventsProxy.d.ts" />
/// <reference path="./com.liveperson.messaging.MessagingInitData.d.ts" />
/// <reference path="./com.liveperson.messaging.background.FileSharingManager.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.FileSharingType.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.MessagingEventSubscriptionManager.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.AmsReadController.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.ConnectionsController.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsConversations.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsDialogs.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsFiles.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsMessages.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsUsers.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingUserProfile.d.ts" />
/// <reference path="./com.liveperson.messaging.model.UserProfileBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class Messaging {
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
				public moveToBackground(param0: string, param1: number): void;
				public closeDialog(param0: string): com.liveperson.messaging.ActionFailureReason;
				public sendFormSubmissionMessageCommand(param0: string): void;
				public serviceStarted(param0: string): void;
				public updateMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
				public sendMessageWithURL(param0: string, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string): void;
				public getAudioUtils(): com.liveperson.infra.utils.LPAudioUtils;
				public getMaskedMessage(param0: string, param1: string): com.liveperson.infra.utils.MaskedMessage;
				public removeMultipleOlderImages(param0: androidcontentContext, param1: string, param2: string): void;
				public getMessagingEventSubscriptionManager(): com.liveperson.messaging.commands.tasks.MessagingEventSubscriptionManager;
				public onAgentDetailsChanged(param0: com.liveperson.messaging.model.MessagingUserProfile, param1: boolean): void;
				public constructor();
				public moveToForeground(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public onMessageTimeout(param0: string): void;
				public setStillBusyFetching(param0: boolean): void;
				public resendMessage(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
				public isEnableStructuredContent(): boolean;
				public setImageForegroundServiceUploadNotificationBuilder(param0: androidappNotificationBuilder): void;
				public isStillBusyFetching(): boolean;
				public clearHistory(param0: string): boolean;
				public updateTokenInBackground(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
				public bootstrapRegistration(): void;
				public removeCallback(): void;
				public isDialogClosed(param0: string): boolean;
				public downloadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string): void;
				public sendUserProfile(param0: string, param1: com.liveperson.messaging.model.UserProfileBundle): void;
				public unregisterPusher(param0: string, param1: string, param2: com.liveperson.infra.ICallback, param3: boolean): void;
				public getFileSharingManager(): com.liveperson.messaging.background.FileSharingManager;
				public serviceStopped(param0: string): void;
				public queryActiveDialog(param0: string, param1: com.liveperson.infra.ICallback): void;
				public sendFileMessage(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: boolean): void;
				public sendDeliveryStatusUpdateCommand(param0: string, param1: string, param2: string, param3: number, param4: com.liveperson.api.response.types.DeliveryStatus, param5: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
				public markConversationAsUrgent(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public connect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams, param3: boolean): void;
				public setCallback(param0: com.liveperson.api.LivePersonCallback): void;
				public checkActiveConversation(param0: string, param1: com.liveperson.infra.ICallback): void;
				public logout(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
				public getConversationViewParams(): com.liveperson.infra.ConversationViewParams;
				public resendMessage(param0: string, param1: string, param2: number, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageType): number;
				public getOriginatorId(param0: string): string;
				public setConversationViewParams(param0: com.liveperson.infra.ConversationViewParams): void;
				public resolveConversation(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public isSocketOpen(param0: string): boolean;
				public getInProgressUploadMessageRowIdsString(): string;
				public connect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public sendCSAT(param0: string, param1: string, param2: number, param3: number): void;
				public setImageServicePendingIntent(param0: androidappPendingIntent): void;
				public init(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.InitLivePersonCallBack): void;
				public clearAllConversationData(param0: string): void;
				public getImageForegroundServiceUploadNotificationBuilder(): androidappNotificationBuilder;
				public shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
				public closeCurrentDialog(): com.liveperson.messaging.ActionFailureReason;
				public getImageServicePendingIntent(): androidappPendingIntent;
				public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
				public checkConversationIsMarkedAsUrgent(param0: string, param1: com.liveperson.infra.ICallback): void;
				public disconnect(param0: string): void;
				public clear(): void;
				public checkAgentID(param0: string, param1: com.liveperson.infra.ICallback): void;
				public isInitialized(): boolean;
				public logout(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.callbacks.LogoutLivePersonCallBack): void;
				public initBrand(param0: string, param1: com.liveperson.infra.LPAuthenticationParams, param2: com.liveperson.infra.ConversationViewParams): void;
				public setImageForegroundServiceDownloadNotificationBuilder(param0: androidappNotificationBuilder): void;
				public getUnreadMessagesCount(param0: string, param1: string, param2: com.liveperson.infra.ICallback): void;
				public reconnect(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
				public markConversationAsNormal(param0: string, param1: string): com.liveperson.messaging.ActionFailureReason;
				public canActiveDialogChangeTTR(): boolean;
				public generateUploadToken(param0: string, param1: string, param2: string): void;
				public init(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
				public getImageForegroundServiceDownloadNotificationBuilder(): androidappNotificationBuilder;
				public changeChatState(param0: string, param1: string, param2: com.liveperson.infra.model.types.ChatState): com.liveperson.messaging.ActionFailureReason;
				public sendMessage(param0: string, param1: string, param2: string, param3: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
				public registerPusher(param0: string, param1: string, param2: string, param3: com.liveperson.infra.LPAuthenticationParams, param4: com.liveperson.infra.ICallback): void;
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.InitProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.LogoutProcess.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.ShutDownProcess.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.MessagingInitData.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class MessagingFactory {
				public static instance: com.liveperson.messaging.MessagingFactory;
				public messagingController: com.liveperson.messaging.Messaging;
				public getController(): com.liveperson.messaging.Messaging;
				public shutDown(param0: com.liveperson.infra.statemachine.ShutDownProcess): void;
				public init(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.InitProcess): void;
				public bootstrapRegistration(): void;
				public logout(param0: androidcontentContext, param1: com.liveperson.messaging.MessagingInitData, param2: com.liveperson.infra.statemachine.LogoutProcess): void;
				public isInitialized(): boolean;
				public static getInstance(): com.liveperson.messaging.MessagingFactory;
				public constructor();
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.Interceptors.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class MessagingInitData {
				public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.infra.Interceptors);
				public getBrandId(): string;
				public getAppId(): string;
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class SocketTaskType {
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

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export class TaskType {
				public static CSDS: com.liveperson.messaging.TaskType;
				public static IDP: com.liveperson.messaging.TaskType;
				public static VERSION: com.liveperson.messaging.TaskType;
				public static OPEN_SOCKET: com.liveperson.messaging.TaskType;
				public static INVALID_CERTIFICATE: com.liveperson.messaging.TaskType;
				public static USER_EXPIRED: com.liveperson.messaging.TaskType;
				public static valueOf(param0: string): com.liveperson.messaging.TaskType;
				public static values(): native.Array<com.liveperson.messaging.TaskType>;
			}
		}
	}
}

declare module com {
	export module liveperson {
		export module messaging {
			export module Utils {
				export class ClockUtils {
					public static addDiffToTimestamp(param0: number): number;
					public constructor();
					public static setClockDiff(param0: number): void;
					public static getSyncedTimestamp(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module Utils {
				export class TokenUtils {
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

import androidosIBinder = android.os.IBinder;
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./android.os.IBinder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class BackgroundActionsService {
					public static EXTRA_ACTION_TYPE: string;
					public static EXTRA_FILE_TYPE: string;
					public static EXTRA_ACTION_TYPE_UPLOAD: number;
					public static EXTRA_TYPE_ACTION_DOWNLOAD: number;
					public static EXTRA_TYPE_ACTION_REUPLOAD: number;
					public constructor();
					public onStartCommand(param0: androidcontentIntent, param1: number, param2: number): number;
					public onBind(param0: androidcontentIntent): androidosIBinder;
				}
				export module BackgroundActionsService {
					export class ServiceActionCallbackListener {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.background.BackgroundActionsService$ServiceActionCallbackListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSuccess(param0: string): void;
							onFail(param0: string): void;
						});
						public onFail(param0: string): void;
						public onSuccess(param0: string): void;
					}
					export class ServiceActioner {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.background.BackgroundActionsService$ServiceActioner interface with the provided implementation.
						 */
						public constructor(implementation: {
							actionFromService(param0: androidcontentIntent, param1: com.liveperson.messaging.background.BackgroundActionsService.ServiceActionCallbackListener): void;
							isPendingActions(): boolean;
						});
						public actionFromService(param0: androidcontentIntent, param1: com.liveperson.messaging.background.BackgroundActionsService.ServiceActionCallbackListener): void;
						public isPendingActions(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.background.DownloadFileTaskCallback.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export abstract class DownloadFileTask {
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

import javalangThrowable = java.lang.Throwable;
/// <reference path="./com.liveperson.messaging.background.DownloadFileTask.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class DownloadFileTaskCallback {
					/**
					 * Constructs a new instance of the com.liveperson.messaging.background.DownloadFileTaskCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onDownloadFinishedSuccessfully(param0: string): void;
						onDownloadFailed(param0: com.liveperson.messaging.background.DownloadFileTask, param1: javalangThrowable): void;
						onReadyToGetUrl(): void;
					});
					public onReadyToGetUrl(): void;
					public onDownloadFinishedSuccessfully(param0: string): void;
					public onDownloadFailed(param0: com.liveperson.messaging.background.DownloadFileTask, param1: javalangThrowable): void;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.Intent.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.FileSharingType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class FileSharingManager {
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
					public static SERVICE_EXTRA_FILE_SHARING_TYPE: string;
					public isPendingActions(): boolean;
					public getInProgressUploadMessageRowIdsString(): string;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: androidcontentContext);
					public uploadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: boolean, param6: com.liveperson.messaging.background.FileSharingManager.FileUploadProgressListener): void;
					public removeMultipleOlderFiles(param0: string, param1: number, param2: string): void;
					public downloadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: number, param5: number, param6: string, param7: com.liveperson.messaging.background.FileSharingManager.FileDownloadProgressListener): void;
					public reUploadFile(param0: com.liveperson.messaging.background.filesharing.FileSharingType, param1: string, param2: string, param3: string, param4: string, param5: number, param6: number, param7: com.liveperson.messaging.background.FileSharingManager.FileUploadProgressListener): void;
					public actionFromService(param0: androidcontentIntent, param1: com.liveperson.messaging.background.BackgroundActionsService.ServiceActionCallbackListener): void;
				}
				export module FileSharingManager {
					export class FileDownloadProgressListener {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.background.FileSharingManager$FileDownloadProgressListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onDoneDownload(): void;
							onFailedDownload(param0: javalangThrowable): void;
						});
						public onDoneDownload(): void;
						public onFailedDownload(param0: javalangThrowable): void;
					}
					export class FileUploadProgressListener {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.background.FileSharingManager$FileUploadProgressListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onDoneUpload(): void;
							onFailedUpload(param0: javalangThrowable): void;
						});
						public onDoneUpload(): void;
						public onFailedUpload(param0: javalangThrowable): void;
					}
				}
			}
		}
	}
}

import androidgraphicsBitmap = android.graphics.Bitmap;
/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class ReUploadImageTask extends com.liveperson.messaging.background.UploadImageTask {
					public constructor(param0: com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle, param1: javalangInteger);
					public createSendMessageCommand(param0: string, param1: string): void;
					public processOriginalImage(param0: number, param1: boolean): androidgraphicsBitmap;
					public constructor(param0: com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle, param1: javalangInteger);
					public processThumbnailImage(param0: number, param1: boolean): androidgraphicsBitmap;
					public constructor(param0: javalangInteger);
					public saveOriginalImage(param0: androidgraphicsBitmap): string;
					public saveThumbnailImage(param0: androidgraphicsBitmap): string;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.background.filesharing.BaseUploadTask.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class UploadFileTaskCallback {
					/**
					 * Constructs a new instance of the com.liveperson.messaging.background.UploadFileTaskCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onFileAddedToDB(): void;
						onUploadFinishedSuccessfully(param0: com.liveperson.messaging.background.filesharing.BaseUploadTask): void;
						onUploadFailed(param0: com.liveperson.messaging.background.filesharing.BaseUploadTask, param1: javalangThrowable): void;
					});
					public onFileAddedToDB(): void;
					public onUploadFinishedSuccessfully(param0: com.liveperson.messaging.background.filesharing.BaseUploadTask): void;
					public onUploadFailed(param0: com.liveperson.messaging.background.filesharing.BaseUploadTask, param1: javalangThrowable): void;
				}
			}
		}
	}
}

/// <reference path="./android.graphics.Bitmap.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.UploadFileTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export class UploadImageTask extends com.liveperson.messaging.background.filesharing.BaseUploadTask {
					public mBase64: string;
					public uploadImageTaskParams: com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
					public getFileByteArray(): native.Array<number>;
					public getUploadImageTaskParams(): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
					public constructor(param0: com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle, param1: javalangInteger);
					public createSendMessageCommand(param0: string, param1: string): void;
					public processOriginalImage(param0: number, param1: boolean): androidgraphicsBitmap;
					public processThumbnailImage(param0: number, param1: boolean): androidgraphicsBitmap;
					public createOriginalImageByteArray(param0: androidgraphicsBitmap, param1: string): void;
					public saveOriginalImage(param0: androidgraphicsBitmap): string;
					public saveThumbnailImage(param0: androidgraphicsBitmap): string;
					public getTaskId(): number;
					public getThumbnailBase64(): string;
					public constructor(param0: javalangInteger);
					public getUploadTaskBundle(): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.network.http.RestRequestParams.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class BaseTaskBundle {
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

/// <reference path="./com.liveperson.messaging.background.UploadFileTaskCallback.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.UploadFileTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.SendFileCommand.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export abstract class BaseUploadTask {
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
						public isUploadCompleted(): boolean;
						public setStatus(param0: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
						public getFileByteArray(): native.Array<number>;
						public onUploadFailed(param0: javalangThrowable): void;
						public isUploadFailed(): boolean;
						public onConnectionUnavailable(): void;
						public constructor(param0: javalangInteger);
						public startUpload(): void;
						public getEventId(): string;
						public onConnectionAvailable(): void;
						public sendPublishFile(param0: boolean): void;
						public setCallBack(param0: com.liveperson.messaging.background.UploadFileTaskCallback): void;
						public getThumbnailBase64(): string;
						public setSendMessageCommandCallback(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.BaseTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.network.http.RestRequestParams.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class DownloadFileTaskBundle extends com.liveperson.messaging.background.filesharing.BaseTaskBundle {
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public constructor();
						public getMessageRowId(): number;
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public getSwiftDomain(): string;
						public getConversationId(): string;
						public addFileRowId(param0: number): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addMessageRowId(param0: number): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public build(param0: number, param1: androidcontentContext): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public getRestParams(): com.liveperson.messaging.network.http.RestRequestParams;
						public getRelativePath(): string;
						public addRelativePath(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public getBrandId(): string;
						public addConversationId(param0: string): com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle;
						public getContext(): androidcontentContext;
						public getTargetId(): string;
						public getFileRowId(): number;
					}
				}
			}
		}
	}
}

import javautilList = java.util.List;
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class FileExtensionTypes {
						public static getImageExtensions(): javautilList;
						public constructor();
						public static getVoiceExtensionsAsSqlString(): string;
						public static getImageExtensionsAsSqlString(): string;
						public static getVoiceExtensions(): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class FileSharingType {
						public static IMAGE: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static VOICE: com.liveperson.messaging.background.filesharing.FileSharingType;
						public static values(): native.Array<com.liveperson.messaging.background.filesharing.FileSharingType>;
						public static valueOf(param0: string): com.liveperson.messaging.background.filesharing.FileSharingType;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class ReUploadFileTaskBundle extends com.liveperson.messaging.background.filesharing.UploadFileTaskBundle {
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

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.BaseTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.network.http.RestRequestParams.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export class UploadFileTaskBundle extends com.liveperson.messaging.background.filesharing.BaseTaskBundle {
						public static TAG: string;
						public mFileUri: androidnetUri;
						public mFilePath: string;
						public mFileContentType: string;
						public mFileTypeExtension: string;
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public constructor();
						public getTaskId(): number;
						public getFileUri(): androidnetUri;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public getFileTypeExtension(): string;
						public addMessage(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public getMessage(): com.liveperson.infra.utils.MaskedMessage;
						public getSwiftDomain(): string;
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public addFileUri(param0: androidnetUri): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public build(param0: number, param1: androidcontentContext): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
						public getFileContentType(): string;
						public setFileTypeExtension(param0: string): void;
						public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
						public getFilePath(): string;
						public getRestParams(): com.liveperson.messaging.network.http.RestRequestParams;
						public setTaskID(param0: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export module image {
						export class DownloadImageTask extends com.liveperson.messaging.background.DownloadFileTask {
							public saveFileToDisk(param0: native.Array<number>): string;
							public constructor(param0: com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.UploadFileTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export module image {
						export class ReUploadImageTaskBundle extends com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle {
							public constructor();
							public addOriginalMessageTime(param0: number): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public getFileRowId(): number;
							public getThumbnailLocalPath(): string;
							public getEventId(): string;
							public addOriginalLocalPath(param0: string): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public addEventID(param0: string): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public addThumbnailLocalPath(param0: string): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public build(param0: number, param1: androidcontentContext): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public build(param0: number, param1: androidcontentContext): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public getOriginalMessageTime(): number;
							public addFileRowId(param0: number): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
							public build(param0: number, param1: androidcontentContext): com.liveperson.messaging.background.filesharing.image.ReUploadImageTaskBundle;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.net.Uri.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.BaseTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.UploadFileTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.network.http.RestRequestParams.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export module image {
						export class UploadImageTaskBundle extends com.liveperson.messaging.background.filesharing.UploadFileTaskBundle {
							public constructor();
							public addFileUri(param0: androidnetUri): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public isImageFromCamera(): boolean;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addBrandId(param0: string): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addTargetId(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public addFileUri(param0: androidnetUri): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addMessage(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addImageFromCamera(param0: boolean): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public build(param0: number, param1: androidcontentContext): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public addSwiftDomain(param0: string): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public build(param0: number, param1: androidcontentContext): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
							public addRestDomain(param0: com.liveperson.messaging.network.http.RestRequestParams): com.liveperson.messaging.background.filesharing.BaseTaskBundle;
							public addMessage(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.background.filesharing.image.UploadImageTaskBundle;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export module voice {
						export class DownloadVoiceTask extends com.liveperson.messaging.background.DownloadFileTask {
							public saveFileToDisk(param0: native.Array<number>): string;
							public constructor(param0: com.liveperson.messaging.background.filesharing.DownloadFileTaskBundle);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.background.filesharing.ReUploadFileTaskBundle.d.ts" />
/// <reference path="./com.liveperson.messaging.background.filesharing.UploadFileTaskBundle.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export module voice {
						export class ReUploadVoiceTask extends com.liveperson.messaging.background.filesharing.voice.UploadVoiceTask {
							public static TAG: string;
							public createSendMessageCommand(param0: string, param1: string): void;
							public constructor(param0: com.liveperson.messaging.background.filesharing.UploadFileTaskBundle, param1: javalangInteger);
							public constructor(param0: javalangInteger);
							public constructor(param0: com.liveperson.messaging.background.filesharing.ReUploadFileTaskBundle, param1: javalangInteger);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.background.filesharing.UploadFileTaskBundle.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module background {
				export module filesharing {
					export module voice {
						export class UploadVoiceTask extends com.liveperson.messaging.background.filesharing.BaseUploadTask {
							public static TAG: string;
							public mUploadFileTaskBundle: com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public mPreviewContentType: string;
							public createSendMessageCommand(param0: string, param1: string): void;
							public getUploadTaskBundle(): com.liveperson.messaging.background.filesharing.UploadFileTaskBundle;
							public getFileByteArray(): native.Array<number>;
							public constructor(param0: com.liveperson.messaging.background.filesharing.UploadFileTaskBundle, param1: javalangInteger);
							public getThumbnailBase64(): string;
							public constructor(param0: javalangInteger);
							public getTaskId(): number;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export abstract class BasicQueryMessagesCommand {
					public brandID: string;
					public targetId: string;
					public conversationId: string;
					public dialogId: string;
					public controller: com.liveperson.messaging.Messaging;
					public mUpdateUI: boolean;
					public mResponseCallBack: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: boolean);
					public setResponseCallBack(param0: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.model.types.ChatState.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsDialogs.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ChangeChatStateCommand {
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.model.AmsDialogs, param1: string, param2: string, param3: com.liveperson.infra.model.types.ChatState);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsConversations.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ChangeConversationTTRCommand {
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.model.AmsConversations, param1: string, param2: string, param3: com.liveperson.api.response.types.TTRType);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsDialogs.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class CloseDialogCommand {
					public setCallback(param0: com.liveperson.infra.ICallback): com.liveperson.messaging.commands.CloseDialogCommand;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.model.AmsDialogs, param1: string, param2: string);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DeliveryStatus.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class DeliveryStatusUpdateCommand {
					public static TAG: string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: com.liveperson.api.response.types.DeliveryStatus);
					public execute(): void;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: com.liveperson.api.response.types.DeliveryStatus, param6: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: javautilList);
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class GetUnreadMessagesCountCommand {
					public static TAG: string;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.ICallback);
					public execute(): void;
				}
			}
		}
	}
}

import javautilLinkedList = java.util.LinkedList;
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.LinkedList.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class InitAmsSessionCommand {
					public mController: com.liveperson.messaging.Messaging;
					public mTasks: javautilLinkedList;
					public mBrandId: string;
					public mCallback: com.liveperson.infra.ICallback;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.infra.ICallback);
					public initTasks(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class QueryMessagesUMSCommand extends com.liveperson.messaging.commands.BasicQueryMessagesCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: boolean);
					public execute(): void;
					public setResponseCallBack(param0: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: number, param6: boolean);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ReSendImageCommand extends com.liveperson.messaging.commands.SendImageCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public getMessageTime(): number;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: com.liveperson.infra.utils.MaskedMessage, param9: number, param10: number);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ReSendVoiceCommand extends com.liveperson.messaging.commands.SendVoiceCommand {
					public static TAG: string;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public getMessageTime(): number;
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

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class RegisterPusherCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.LPAuthenticationParams, param5: com.liveperson.infra.ICallback);
					public execute(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ResendMessageCommand extends com.liveperson.messaging.commands.SendMessageCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.requests.SendMessageRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ResendURLMessageCommand extends com.liveperson.messaging.commands.ResendMessageCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.utils.MaskedMessage);
					public createMessageRequest(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsConversations.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class ResolveConversationCommand {
					public setOfflineMode(param0: boolean): void;
					public execute(): void;
					public setCallback(param0: com.liveperson.infra.ICallback): void;
					public constructor(param0: com.liveperson.messaging.model.AmsConversations, param1: string, param2: string);
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendCsatCommand {
					public constructor(param0: string, param1: string, param2: number, param3: number);
					public execute(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingChatMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.network.http.RestRequestParams.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.requests.SendMessageRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export abstract class SendFileCommand extends com.liveperson.messaging.commands.SendMessageCommand {
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
						/**
						 * Constructs a new instance of the com.liveperson.messaging.commands.SendFileCommand$SendFileCommandListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onFileAddedToDB(param0: number, param1: number): void;
							onMessageUpdatedInDB(): void;
						});
						public onMessageUpdatedInDB(): void;
						public onFileAddedToDB(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Form.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingChatMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.requests.SendFormSubmissionMessageRequest.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.requests.SendMessageRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendFormSubmissionMessageCommand extends com.liveperson.messaging.commands.SendMessageCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
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

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendGenerateUploadTokenCommand {
					public execute(): void;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.liveperson.infra.ICallback);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendImageCommand extends com.liveperson.messaging.commands.SendFileCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public getMessageType(param0: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.infra.utils.MaskedMessage);
				}
			}
		}
	}
}

import javalangLong = java.lang.Long;
/// <reference path="./com.liveperson.api.request.BaseAMSSocketRequest.d.ts" />
/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingChatMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.requests.NewConversationRequest.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.requests.SendMessageRequest.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendMessageCommand {
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
					public createMessageRequest(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
					public createNewChatMessage(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage;
					public createNewConversationRequest(param0: string, param1: string, param2: javalangLong): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
					public sendCreateConversationRequest(param0: com.liveperson.api.request.BaseAMSSocketRequest): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public createPendingConversationAndDialog(param0: string, param1: string): com.liveperson.api.request.BaseAMSSocketRequest;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingChatMessage.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendMessageWithURLCommand extends com.liveperson.messaging.commands.SendMessageCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: string, param5: string, param6: string, param7: string, param8: string);
					public sendMessageIfDialogIsOpen(): void;
					public createNewChatMessage(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): com.liveperson.messaging.model.MessagingChatMessage;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage);
					public addMessageToDBAndSend(param0: string, param1: com.liveperson.infra.utils.MaskedMessage): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.UserProfileBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendSetUserProfileCommand {
					public static TAG: string;
					public execute(): void;
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.messaging.model.UserProfileBundle);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.utils.MaskedMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class SendVoiceCommand extends com.liveperson.messaging.commands.SendFileCommand {
					public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.infra.utils.MaskedMessage, param4: com.liveperson.api.response.model.DeliveryStatusUpdateInfo);
					public setFileDetails(param0: string, param1: string, param2: string): void;
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

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsUsers.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export class UnregisterPusherCommand {
					public static TAG: string;
					public constructor(param0: com.liveperson.messaging.controller.AccountsController, param1: com.liveperson.messaging.model.AmsUsers, param2: string, param3: string, param4: com.liveperson.infra.ICallback, param5: boolean);
					public execute(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class BaseAmsAccountConnectionCallback {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onTaskSuccess(): void;
							onTaskError(param0: com.liveperson.messaging.TaskType, param1: javalangThrowable): void;
							setSecondaryTask(param0: boolean): void;
						});
						public onTaskError(param0: com.liveperson.messaging.TaskType, param1: javalangThrowable): void;
						public onTaskSuccess(): void;
						public setSecondaryTask(param0: boolean): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.BaseConnectionTask.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export abstract class BaseAmsAccountConnectionTask extends com.liveperson.messaging.commands.tasks.BaseConnectionTask {
						public mCallback: com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback;
						public constructor();
						public setIsSecondaryTask(param0: boolean): void;
						public setCallback(param0: com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback): com.liveperson.messaging.commands.tasks.BaseConnectionTask;
						public requireSDKinForeground(): boolean;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.SocketTaskType.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class BaseAmsSocketConnectionCallback {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onTaskSuccess(): void;
							onTaskError(param0: com.liveperson.messaging.SocketTaskType, param1: javalangThrowable): void;
						});
						public onTaskSuccess(): void;
						public onTaskError(param0: com.liveperson.messaging.SocketTaskType, param1: javalangThrowable): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.BaseConnectionTask.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export abstract class BaseAmsSocketConnectionTask extends com.liveperson.messaging.commands.tasks.BaseConnectionTask {
						public mCallback: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback;
						public constructor();
						public setCallback(param0: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback): com.liveperson.messaging.commands.tasks.BaseConnectionTask;
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export abstract class BaseConnectionTask {
						public mBrandId: string;
						public setBrandId(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class CloseConnectionTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

/// <reference path="./android.content.Context.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class CollectSDKConfigurationDataTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static TAG: string;
						public constructor();
						public execute(): void;
						public constructor(param0: androidcontentContext);
						public getName(): string;
						public isShouldExecute(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class ConfigurationFetcherTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class CsdsTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

/// <reference path="./com.liveperson.messaging.model.AmsConversations.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsDialogs.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsMessages.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsUsers.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class DataBaseTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

import javautilHashSet = java.util.HashSet;
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.FetchConversationManager.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Conversation.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationData.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationUtils.d.ts" />
/// <reference path="./com.liveperson.messaging.model.DialogUtils.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashSet.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class FetchConversationManager {
						public mController: com.liveperson.messaging.Messaging;
						public mConversationUtils: com.liveperson.messaging.model.ConversationUtils;
						public mDialogUtils: com.liveperson.messaging.model.DialogUtils;
						public usersUpdating: javautilHashSet;
						public numConversationToUpdateUI: number;
						public constructor(param0: com.liveperson.messaging.Messaging);
						public init(): void;
						public fetchConversation(param0: com.liveperson.messaging.model.Conversation, param1: javautilArrayList): void;
						public refreshConversation(param0: com.liveperson.messaging.model.Conversation): void;
						public fetchConversationsFirstTime(param0: string, param1: javautilList, param2: javautilList): void;
					}
					export module FetchConversationManager {
						export class DATA_SOURCE {
							public static UMS: com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE;
							public static INCA: com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE;
							public static valueOf(param0: string): com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE;
							public static values(): native.Array<com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE>;
						}
						export class QueryRequestMessage {
							public constructor(param0: com.liveperson.messaging.commands.tasks.FetchConversationManager, param1: number, param2: number, param3: com.liveperson.messaging.model.ConversationData, param4: boolean);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class GetAgentUserTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class GetClockTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class GetConsumerUserTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.controller.ConnectionsController.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsConversations.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsDialogs.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsMessages.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class HandlePendingMessagesTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public constructor();
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.model.AmsMessages, param1: com.liveperson.messaging.model.AmsConversations, param2: com.liveperson.messaging.model.AmsDialogs, param3: com.liveperson.messaging.controller.ConnectionsController);
					}
				}
			}
		}
	}
}

import javalangException = java.lang.Exception;
/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.IdpTask.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsUsers.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class IdpTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static TAG: string;
						public constructor();
						public constructor(param0: com.liveperson.messaging.controller.AccountsController, param1: com.liveperson.messaging.model.AmsUsers, param2: string);
						public execute(): void;
						public getName(): string;
					}
					export module IdpTask {
						export class IDPExceptionICallback {
							public onError(param0: javalangException): void;
							public onError(param0: com.liveperson.messaging.TaskType, param1: javalangException): void;
							public onSuccess(param0: string): void;
							public constructor(param0: com.liveperson.messaging.commands.tasks.IdpTask);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class JWTExpirationTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class LptagTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class MessagingEventSubscriptionManager {
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

import kotlinjvmfunctionsFunction1 = kotlin.jvm.functions.Function1;
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./kotlin.jvm.functions.Function1.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class MessagingEventSubscriptionManagerKt {
						public static guard(param0: javalangObject, param1: kotlinjvmfunctionsFunction1): javalangObject;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.ConnectionsController.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class OpenSocketTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class RefreshNotUpdatedConversationsTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
						public constructor();
						public constructor(param0: com.liveperson.messaging.Messaging);
						public execute(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class RemoveOlderImagesTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
						public static TAG: string;
						public constructor();
						public constructor(param0: androidcontentContext, param1: string, param2: string);
						public execute(): void;
						public getName(): string;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class SiteSettingsFetcherTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class SubscribeExConversationsTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
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

/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class UnAuthGetEngagementTask extends com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask {
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

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class UnsubscribeExConversationTask extends com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionTask {
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

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module commands {
				export module tasks {
					export class UpdateEmptyDialogCommand extends com.liveperson.messaging.commands.BasicQueryMessagesCommand {
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: boolean);
					}
				}
			}
		}
	}
}

import javautilHashMap = java.util.HashMap;
import javautilMap = java.util.Map;
/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.ClientProperties.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.IConnectionParamsCache.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsAccount.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export class AccountsController {
					public static QA_CSDS_DOMAIN: string;
					public static ALPHA_CSDS_DOMAIN: string;
					public static KEY_TOKEN: string;
					public static SOCKET_URL: string;
					public static DOMAIN_VERSION_QUERY: string;
					public static DOMAIN_VERSION_VALUE: number;
					public mAccounts: javautilMap;
					public getLPAuthenticationParams(param0: string): com.liveperson.infra.LPAuthenticationParams;
					public getCertificatePinningKeys(param0: string): javautilList;
					public setCSDSMap(param0: string, param1: javautilHashMap): boolean;
					public getClientProperties(): com.liveperson.messaging.controller.ClientProperties;
					public getConnectionParamsCache(param0: string): com.liveperson.messaging.controller.connection.IConnectionParamsCache;
					public getServiceUrl(param0: string, param1: string): string;
					public constructor(param0: com.liveperson.messaging.controller.ClientProperties);
					public setLPAuthenticationParams(param0: string, param1: com.liveperson.infra.LPAuthenticationParams): void;
					public isCsdsDataMissing(param0: string): boolean;
					public getConnectionUrl(param0: string): string;
					public getAccount(param0: string): com.liveperson.messaging.model.AmsAccount;
					public addNewAccount(param0: string): void;
					public getTokenizerUrl(param0: string): string;
					public isInUnAuthMode(param0: string): boolean;
					public clear(): void;
					public getDomain(param0: string): string;
					public getConnectionUrlForLogs(param0: string): string;
					public getToken(param0: string): string;
					public setAppId(param0: string, param1: string): void;
					public isTokenExpired(param0: string): boolean;
					public isAutoMessagesEnabled(param0: string): boolean;
					public setToken(param0: string, param1: string): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export class AmsReadController {
					public static TAG: string;
					public shutDown(): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public registerForegroundConnectionReceiver(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export class ClientProperties {
					public constructor(param0: string, param1: string);
					public saveSDKVersion(param0: string): void;
					public constructor();
					public clear(): void;
					public getJsonString(): string;
					public addToUriBuilder(param0: androidnetUriBuilder): void;
					public saveAppId(param0: string): void;
				}
				export module ClientProperties {
					export class Browser {
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
						public static CO_BROWSE: com.liveperson.messaging.controller.ClientProperties.Features;
						public static CO_APP: com.liveperson.messaging.controller.ClientProperties.Features;
						public static PHOTO_SHARING: com.liveperson.messaging.controller.ClientProperties.Features;
						public static SECURE_FORMS: com.liveperson.messaging.controller.ClientProperties.Features;
						public static RICH_CONTENT: com.liveperson.messaging.controller.ClientProperties.Features;
						public static AUTO_MESSAGES: com.liveperson.messaging.controller.ClientProperties.Features;
						public static QUICK_REPLIES: com.liveperson.messaging.controller.ClientProperties.Features;
						public static MULTI_DIALOG: com.liveperson.messaging.controller.ClientProperties.Features;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.Features;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.Features>;
					}
					export class Integration {
						public static WEB_SDK: com.liveperson.messaging.controller.ClientProperties.Integration;
						public static MOBILE_SDK: com.liveperson.messaging.controller.ClientProperties.Integration;
						public static BRAND_SDK: com.liveperson.messaging.controller.ClientProperties.Integration;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.Integration;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.Integration>;
					}
					export class OS {
						public static WINDOWS: com.liveperson.messaging.controller.ClientProperties.OS;
						public static LINUX: com.liveperson.messaging.controller.ClientProperties.OS;
						public static OSX: com.liveperson.messaging.controller.ClientProperties.OS;
						public static ANDROID: com.liveperson.messaging.controller.ClientProperties.OS;
						public static IOS: com.liveperson.messaging.controller.ClientProperties.OS;
						public static OTHER: com.liveperson.messaging.controller.ClientProperties.OS;
						public static values(): native.Array<com.liveperson.messaging.controller.ClientProperties.OS>;
						public static valueOf(param0: string): com.liveperson.messaging.controller.ClientProperties.OS;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.LocalBroadcastReceiver.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsConnection.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export class ConnectionsController {
					public static KEY_PREF_LAST_UPDATE_TIME: string;
					public mBrandConnection: javautilMap;
					public mSubscriptionBrand: javautilMap;
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
					public isUpdated(param0: string): boolean;
					public connect(param0: string, param1: boolean): void;
					public getConnection(param0: string): com.liveperson.messaging.model.AmsConnection;
					public getBrandIDForSubscription(param0: string): string;
					public isSocketReady(param0: string): boolean;
					public onResumeConnection(): void;
					public setLastUpdateTime(param0: string, param1: number): void;
				}
				export module ConnectionsController {
					export class AmsConnectionShutDownCompletionListener {
						public constructor(param0: number, param1: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener);
						public shutDownFailed(): void;
						public shutDownCompleted(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class BaseConnectionState {
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

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class ConnectionParamsCache {
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
						public setAutoMessagesFeatureEnabled(param0: boolean): void;
						public updateAcCdnVersion(param0: string): boolean;
						public getAcCdnSdkMinVersion(): string;
						public isAutoMessagesFeatureEnabled(): boolean;
						public getServiceDomain(param0: string): string;
						public getLeCdnSdkMinVersion(): string;
						public updateCsdsDomains(param0: javautilHashMap): boolean;
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

import javalangRunnable = java.lang.Runnable;
/// <reference path="./com.liveperson.infra.ForegroundServiceInterface.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.BaseConnectionState.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.ConnectionStateMachine.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.IConnectionListener.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.InternetInformationProvider.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.MessagingStateMachineInterface.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class ConnectionStateMachine {
						public moveToBackground(param0: number): void;
						public serviceStopped(): void;
						public isConnected(): boolean;
						public networkAvailable(): void;
						public isConnecting(): boolean;
						public startConnecting(param0: boolean): void;
						public setConnectingTasks(param0: javautilList): void;
						public onSocketProblem(): void;
						public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
						public networkLost(): void;
						public startDisconnecting(): void;
						public moveToForeground(): void;
						public serviceStarted(): void;
						public setDisconnectingTasks(param0: javautilList): void;
						public constructor(param0: com.liveperson.messaging.controller.connection.MessagingStateMachineInterface, param1: com.liveperson.messaging.controller.connection.InternetInformationProvider, param2: com.liveperson.infra.ForegroundServiceInterface, param3: string, param4: com.liveperson.messaging.controller.connection.IConnectionListener);
					}
					export module ConnectionStateMachine {
						export abstract class AbstractBackgroundParentState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
							public mBackgroundConnectionTimeoutEvent: javalangRunnable;
							public constructor(param0: string, param1: string);
							public getBackgroundConnectionTimeoutEvent(): javalangRunnable;
							public constructor(param0: com.liveperson.messaging.controller.connection.BaseConnectionState, param1: string, param2: string);
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: string, param2: string);
						}
						export class BackgroundParentState extends com.liveperson.messaging.controller.connection.ConnectionStateMachine.AbstractBackgroundParentState {
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
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachine, param1: com.liveperson.messaging.controller.connection.ConnectionStateMachine.AbstractBackgroundParentState, param2: string, param3: string);
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
						export class ConnectedBackgroundState extends com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBaseState {
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
						export abstract class ConnectedBaseState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent): void;
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
						export class ConnectedForegroundState extends com.liveperson.messaging.controller.connection.ConnectionStateMachine.ConnectedBaseState {
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
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.BaseConnectionState.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.ConnectionStateMachineOld.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.IConnectionListener.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.InternetInformationProvider.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.BackgroundEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.BackgroundTimeOutEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ForegroundEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.NetworkAvailableEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.NetworkLostEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ServiceOnEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.SocketProblemEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskSuccessEvent.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class ConnectionStateMachineOld {
						public mConnectingTasks: javautilList;
						public mDisconnectingTasks: javautilList;
						public mController: com.liveperson.messaging.Messaging;
						public shutDown(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener): void;
						public startConnecting(): void;
						public startDisconnecting(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: com.liveperson.messaging.controller.connection.InternetInformationProvider, param2: string, param3: com.liveperson.messaging.controller.connection.IConnectionListener);
						public setDisconnectingTasks(param0: javautilList): void;
						public setConnectingTasks(param0: javautilList): void;
						public setBrandId(param0: string): void;
					}
					export module ConnectionStateMachineOld {
						export class ConnectingState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
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
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachineOld, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						}
						export class DisconnectingState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
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
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachineOld, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						}
						export class IdleState extends com.liveperson.messaging.controller.connection.BaseConnectionState {
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
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryTaskSuccessEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SendStateEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.DisconnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.SecondaryConnectEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskFailedEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ServiceOffEvent): void;
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.RunTaskEvent): void;
							public constructor(param0: com.liveperson.messaging.controller.connection.ConnectionStateMachineOld, param1: string, param2: string);
							public visit(param0: com.liveperson.messaging.controller.connection.connectionevents.ShutDownEvent): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IStateMachine.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.MessagingStateMachineInterface.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class ConnectionTasksHolder {
						public constructPrimaryShortConnectionTasks(): javautilList;
						public getSecondaryConnectionTasks(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine): javautilList;
						public constructor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine, param1: com.liveperson.messaging.controller.connection.MessagingStateMachineInterface, param2: string);
						public getPrimaryFullConnectionTasks(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine): javautilList;
						public getDisconnectionTasks(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine): javautilList;
						public constructSecondaryConnectionTasks(): javautilList;
						public constructPrimaryFullConnectionTasks(): javautilList;
						public getPrimaryShortConnectionTasks(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IStateMachine.d.ts" />
/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class DefaultTaskCallbackAmsAccount {
						public mTaskName: string;
						public onTaskError(param0: com.liveperson.messaging.TaskType, param1: javalangThrowable): void;
						public onTaskSuccess(): void;
						public setSecondaryTask(param0: boolean): void;
						public constructor(param0: com.liveperson.infra.statemachine.interfaces.IStateMachine, param1: string);
						public onTaskError(param0: com.liveperson.messaging.TaskType, param1: javalangException): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class IConnectionListener {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.controller.connection.IConnectionListener interface with the provided implementation.
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

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class IConnectionParamsCache {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.controller.connection.IConnectionParamsCache interface with the provided implementation.
						 */
						public constructor(implementation: {
							updateCsdsDomains(param0: javautilHashMap): boolean;
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
						public isVersionsCompatible(): boolean;
						public isAutoMessagesFeatureEnabled(): boolean;
						public getServiceDomain(param0: string): string;
						public isFullConnectionFlowRequired(): boolean;
						public updateCsdsDomains(param0: javautilHashMap): boolean;
						public updateLeCdnVersion(param0: string): boolean;
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
						/**
						 * Constructs a new instance of the com.liveperson.messaging.controller.connection.InternetInformationProvider interface with the provided implementation.
						 */
						public constructor(implementation: {
							isNetworkAvailable(): boolean;
							unregisterToNetworkChanges(): void;
							registerToNetworkChanges(): void;
						});
						public unregisterToNetworkChanges(): void;
						public registerToNetworkChanges(): void;
						public isNetworkAvailable(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.IMessaging.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.ConnectionsController.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsConversations.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsDialogs.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsMessages.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsUsers.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export class MessagingStateMachineInterface {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.controller.connection.MessagingStateMachineInterface interface with the provided implementation.
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

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class BackgroundEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class BackgroundTimeOutEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class ConnectEvent {
							public constructor();
							public connectInBG(): boolean;
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public constructor(param0: boolean);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class DisconnectEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class ForegroundEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class NetworkAvailableEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class NetworkLostEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class RunTaskEvent {
							public constructor();
							public constructor(param0: number, param1: number);
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class SecondaryConnectEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
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
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class SecondaryTaskSuccessEvent {
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

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class SendStateEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class ServiceOffEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class ServiceOnEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class ShutDownEvent {
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public getListener(): com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener;
							public constructor(param0: com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class SocketProblemEvent {
							public constructor();
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class TaskFailedEvent {
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public getType(): com.liveperson.messaging.TaskType;
							public constructor(param0: string, param1: com.liveperson.messaging.TaskType, param2: javalangException);
							public getException(): javalangException;
							public getTaskName(): string;
						}
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
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class TaskSuccessEvent {
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

/// <reference path="./com.liveperson.infra.statemachine.interfaces.IState.d.ts" />
/// <reference path="./com.liveperson.messaging.TaskType.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module controller {
				export module connection {
					export module connectionevents {
						export class TaskTimeOutEvent {
							public constructor(param0: com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionTask);
							public accept(param0: com.liveperson.infra.statemachine.interfaces.IState): void;
							public failTask(): void;
							public getTaskName(): string;
						}
						export module TaskTimeOutEvent {
							export class NullTaskCallbackAmsAccount {
								public onTaskSuccess(): void;
								public constructor(param0: com.liveperson.messaging.controller.connection.connectionevents.TaskTimeOutEvent);
								public onTaskError(param0: com.liveperson.messaging.TaskType, param1: javalangException): void;
								public setSecondaryTask(param0: boolean): void;
								public onTaskError(param0: com.liveperson.messaging.TaskType, param1: javalangThrowable): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module exception {
				export class FileSharingException {
					public constructor(param0: string, param1: javalangThrowable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AcUserData {
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

/// <reference path="./android.os.Parcel.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AgentData {
					public mFirstName: string;
					public mLastName: string;
					public mAvatarURL: string;
					public mEmployeeId: string;
					public mNickName: string;
					public static CREATOR: androidosParcelableCreator;
					public toString(): string;
					public constructor();
					public constructor(param0: androidosParcel);
					public describeContents(): number;
					public writeToParcel(param0: androidosParcel, param1: number): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.IConnectionParamsCache.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsAccount {
					public static KEY_ACCOUNT_TOKEN: string;
					public static KEY_ACCOUNT_TOKEN_ENC: string;
					public static KEY_ACCOUNT_NON_AUTH_ENC: string;
					public static KEY_CONSUMER_ID_ENC: string;
					public static KEY_CONNECTOR_ID_ENC: string;
					public static BROADCAST_KEY_AUTH_COMPLETED_ACTION: string;
					public constructor(param0: string);
					public getToken(): string;
					public setLPAuthenticationParams(param0: com.liveperson.infra.LPAuthenticationParams): void;
					public getNonAuthCode(): string;
					public isAuthenticated(): boolean;
					public setAppId(param0: string): void;
					public getConnectorId(): string;
					public setNonAuthCode(param0: string): void;
					public getLPAuthenticationParams(): com.liveperson.infra.LPAuthenticationParams;
					public sendAuthenticationCompletedStatus(): void;
					public isTokenExpired(): boolean;
					public setToken(param0: string): void;
					public setCSDSMap(param0: javautilHashMap): boolean;
					public setOriginalConsumerId(param0: string): void;
					public isAutoMessagesEnabled(): boolean;
					public getOriginalConsumerId(): string;
					public getAppId(): string;
					public getConnectionParamsCache(): com.liveperson.messaging.controller.connection.IConnectionParamsCache;
					public setConnectorId(param0: string): void;
					public getServiceUrl(param0: string): string;
					public getCertificatePinningKeys(): javautilList;
					public isHostAppJWTExpired(): boolean;
					public isCsdsDataMissing(): boolean;
					public isInUnAuthMode(): boolean;
					public getDomain(): string;
					public isAuthenticatedCompleted(): boolean;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.managers.PreferenceManager.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.SocketState.d.ts" />
/// <reference path="./com.liveperson.infra.sdkstatemachine.shutdown.ShutDownCompletionListener.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.connection.ConnectionStateMachine.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsConnection.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsConnection {
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
					public startConnecting(param0: boolean): void;
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
					export class AmsSocketState {
						public constructor(param0: com.liveperson.messaging.model.AmsConnection);
						public onDisconnected(param0: string, param1: number): void;
						public setCallback(param0: com.liveperson.messaging.commands.tasks.BaseAmsAccountConnectionCallback): void;
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

/// <reference path="./com.liveperson.api.response.types.ConversationState.d.ts" />
/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.infra.database.DataBaseCommand.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.FetchConversationManager.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Conversation.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationData.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.HashSet.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsConversations {
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
					public mConversationsByAccountId: javautilMap;
					public mConversationsByServerId: javautilMap;
					public acceptedSequenceEvents: javautilHashSet;
					public updateTTRType(param0: string, param1: com.liveperson.api.response.types.TTRType, param2: number, param3: number, param4: number): void;
					public markAllPendingConversationsAsFailed(param0: string): void;
					public createDummyConversationForFirstMessage(param0: string, param1: string, param2: string, param3: number, param4: number): void;
					public updateCurrentConversationServerID(param0: string, param1: com.liveperson.messaging.model.ConversationData): com.liveperson.infra.database.DataBaseCommand;
					public getConversationFromServerIdMap(param0: string): com.liveperson.messaging.model.Conversation;
					public enqueuePendingConversationRequestId(param0: javalangLong): void;
					public updateClosedConversation(param0: com.liveperson.messaging.model.ConversationData, param1: boolean): com.liveperson.infra.database.DataBaseCommand;
					public calculateEffectiveTTR(param0: string, param1: com.liveperson.api.response.types.TTRType, param2: number, param3: number, param4: number, param5: number): number;
					public setUpdateRequestInProgress(param0: string, param1: number): void;
					public static sendUpdateCSATConversationIntent(param0: com.liveperson.messaging.model.Conversation, param1: string): void;
					public notifyOffHoursStatus(param0: string): void;
					public getTempConversationId(): string;
					public resetEffectiveTTR(param0: string): void;
					public notifyClosedConversationFromDB(param0: string, param1: string): void;
					public shutDown(): void;
					public static calculateShowedCsat(param0: com.liveperson.messaging.model.ConversationData, param1: boolean): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
					public createNewCurrentConversation(param0: com.liveperson.messaging.model.ConversationData): com.liveperson.messaging.model.Conversation;
					public clear(): void;
					public createPendingConversation(param0: string, param1: string, param2: string, param3: number): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public updateCurrentConversation(param0: com.liveperson.messaging.model.ConversationData): void;
					public createQueuedConversation(param0: string, param1: string, param2: string, param3: number): void;
					public static sendUpdateStateIntent(param0: com.liveperson.messaging.model.Conversation): void;
					public getNotUpdatedConversations(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public removeUpdateRequestInProgress(param0: string): void;
					public getNewestClosedConversation(param0: string): com.liveperson.messaging.model.Conversation;
					public showTTR(param0: string): void;
					public getConversationFromBrandIdMap(param0: string): com.liveperson.messaging.model.Conversation;
					public getConversation(param0: string): com.liveperson.messaging.model.Conversation;
					public static sendConversationClosedIntent(param0: com.liveperson.messaging.model.Conversation, param1: string): void;
					public queryConversationById(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public updateCSAT(param0: string, param1: string): void;
					public addConversationToMaps(param0: string, param1: com.liveperson.messaging.model.Conversation): void;
					public getActiveConversation(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public deleteTempConversationServerID(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public static sendUpdateNewConversationIntent(param0: com.liveperson.messaging.model.Conversation): void;
					public isConversationActive(param0: string): boolean;
					public updateConversationState(param0: string, param1: string, param2: com.liveperson.api.response.types.ConversationState): void;
					public clearAllConversations(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public addUpdateRequestInProgress(param0: string): void;
					public static sendUpdateUnreadMsgIntent(param0: com.liveperson.messaging.model.Conversation): void;
					public dequeuePendingConversationRequestId(): javalangLong;
					public getConversationById(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand;
					public clearClosedConversations(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public getFetchConversationManager(): com.liveperson.messaging.commands.tasks.FetchConversationManager;
					public loadOpenConversationForBrand(param0: string): void;
					public getConversationFromTargetIdMap(param0: string): com.liveperson.messaging.model.Conversation;
					public notifyConversationFragmentClosedEvent(): void;
				}
			}
		}
	}
}

import javalangBoolean = java.lang.Boolean;
/// <reference path="./com.liveperson.api.response.types.DialogState.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.database.DataBaseCommand.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsDialogs.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationData.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Dialog.d.ts" />
/// <reference path="./java.lang.Boolean.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.HashMap.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsDialogs {
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
					public updateClosedDialog(param0: com.liveperson.messaging.model.ConversationData, param1: com.liveperson.messaging.model.Dialog, param2: boolean): com.liveperson.infra.database.DataBaseCommand;
					public updateDialogState(param0: string, param1: string, param2: com.liveperson.api.response.types.DialogState): void;
					public queryActiveDialog(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public createDummyDialogForFirstMessage(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number): void;
					public queryDialogByIds(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand;
					public static sendUpdateNewDialogIntent(param0: com.liveperson.messaging.model.Dialog): void;
					public loadOpenDialogsForBrand(param0: string): void;
					public setActiveDialog(param0: com.liveperson.messaging.model.Dialog): void;
					public updateLastServerSequenceByDialogId(param0: string, param1: number): void;
					public updateClosedDialog(param0: com.liveperson.messaging.model.ConversationData, param1: boolean): com.liveperson.infra.database.DataBaseCommand;
					public createNewCurrentDialog(param0: com.liveperson.messaging.model.Dialog): void;
					public shutDown(): void;
					public deleteDialogById(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public static sendUpdateCSATDialogIntent(param0: com.liveperson.messaging.model.Dialog): void;
					public removeUpdateRequestInProgress(param0: string): void;
					public updateDialogDatabase(param0: com.liveperson.messaging.model.Dialog, param1: com.liveperson.messaging.model.ConversationData): void;
					public queryDialogsByConversationId(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public addDialogToMaps(param0: com.liveperson.messaging.model.Dialog): void;
					public getDialogsByConversationId(param0: string): javautilArrayList;
					public static extractDialogs(param0: com.liveperson.messaging.model.ConversationData): javautilArrayList;
					public createPendingDialog(param0: string, param1: string, param2: string, param3: string, param4: number): void;
					public static sendUpdateUnreadMsgIntent(param0: com.liveperson.messaging.model.Dialog): void;
					public saveMessagesResult(param0: string, param1: javautilArrayList, param2: boolean, param3: boolean, param4: com.liveperson.infra.ICallback): void;
					public getDialogByIdAsync(param0: string, param1: com.liveperson.infra.ICallback): void;
					public createQueuedDialog(param0: string, param1: string, param2: string, param3: string, param4: number): void;
					public addUpdateRequestInProgress(param0: string): void;
					public updateDialogs(param0: com.liveperson.messaging.model.ConversationData): void;
					public queryOpenDialogsOfConversation(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public static isUmsSupportingDialogs(): boolean;
					public static setIsUmsSupportingDialogs(param0: boolean): void;
					public updateLastServerSequenceByDialogId(param0: string, param1: number, param2: number, param3: boolean): com.liveperson.infra.database.DataBaseCommand;
					public fetchPreviousDialog(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public clearClosedDialogs(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public static sendDialogClosedIntent(param0: com.liveperson.messaging.model.Dialog, param1: string): void;
					public setUpdateRequestInProgress(param0: string, param1: number): void;
					public getTempDialogId(): string;
					public resetEffectiveTTR(param0: string): void;
					public areMoreMessagesAvailableToFetch(param0: string): boolean;
					public closeActiveDialog(): void;
					public clear(): void;
					public static extractDialogsToMap(param0: com.liveperson.messaging.model.ConversationData): javautilHashMap;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public static getOpenDialog(param0: javautilArrayList): com.liveperson.messaging.model.Dialog;
					public isDialogActive(): boolean;
					public getActiveDialog(): com.liveperson.messaging.model.Dialog;
					public queryDialogById(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public updateCurrentDialogServerId(param0: string, param1: com.liveperson.messaging.model.ConversationData): com.liveperson.infra.database.DataBaseCommand;
					public clearAllDialogs(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public getDialogById(param0: string): com.liveperson.messaging.model.Dialog;
					public markPendingDialogsAsFailed(param0: string): void;
				}
				export module AmsDialogs {
					export class BROADCASTS {
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
						public static setIsSupportingDialogs(param0: javalangBoolean): void;
					}
					export module UmsCompatibilityManager {
						export class FileNames {
							public static TEMP_COMPATIBILITY_PERSISTENCE: string;
						}
						export class Keys {
							public static IS_SUPPORTING_DIALOGS: string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.database.DataBaseCommand.d.ts" />
/// <reference path="./com.liveperson.messaging.model.FileMessage.d.ts" />
/// <reference path="./java.lang.Long.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsFiles {
					public getFileByFileRowId(param0: number): com.liveperson.infra.database.DataBaseCommand;
					public removeLocalPathFromDB(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand;
					public getMultipleOldestLocalPathFromDB(param0: string, param1: number, param2: string): com.liveperson.infra.database.DataBaseCommand;
					public updateRelativePath(param0: javalangLong, param1: string): void;
					public getNumOfLocalPathFromDB(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand;
					public constructor();
					public updateLocalPath(param0: number, param1: string): com.liveperson.infra.database.DataBaseCommand;
					public getFileByMessageRowId(param0: number): com.liveperson.messaging.model.FileMessage;
					public addFile(param0: number, param1: com.liveperson.messaging.model.FileMessage): com.liveperson.infra.database.DataBaseCommand;
					public getFileByFileRowIdOnDbThread(param0: number): com.liveperson.messaging.model.FileMessage;
					public updateStatus(param0: number, param1: com.liveperson.infra.database.tables.FilesTable.LoadStatus): void;
				}
			}
		}
	}
}

import androiddatabaseCursor = android.database.Cursor;
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./com.liveperson.api.request.message.FilePublishMessage.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DeliveryStatus.d.ts" />
/// <reference path="./com.liveperson.infra.database.DataBaseCommand.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Form.d.ts" />
/// <reference path="./com.liveperson.messaging.model.FormsManager.d.ts" />
/// <reference path="./com.liveperson.messaging.model.FullMessageRow.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingChatMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingUserProfile.d.ts" />
/// <reference path="./com.liveperson.messaging.model.QuickRepliesMessageHolder.d.ts" />
/// <reference path="./com.liveperson.messaging.network.MessageTimeoutQueue.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsMessages {
					public static PENDING_MSG_SEQUENCE_NUMBER: number;
					public static RESOLVE_MSG_SEQUENCE_NUMBER: number;
					public static MASKED_CC_MSG_SEQUENCE_NUMBER: number;
					public static WELCOME_MSG_SEQUENCE_NUMBER: number;
					public static STRUCTURED_CONTENT_PREFIX: string;
					public mFormsManager: com.liveperson.messaging.model.FormsManager;
					public mMessageTimeoutQueue: com.liveperson.messaging.network.MessageTimeoutQueue;
					public addMessage(param0: string, param1: com.liveperson.messaging.model.MessagingChatMessage, param2: boolean): com.liveperson.infra.database.DataBaseCommand;
					public updateFetchHistoryEnded(param0: string): void;
					public addFileFromPublishMessageToDB(param0: number, param1: string, param2: com.liveperson.api.request.message.FilePublishMessage, param3: string, param4: boolean): void;
					public removeOnUpdateListener(): void;
					public getQuickRepliesMessageHolder(param0: string): com.liveperson.messaging.model.QuickRepliesMessageHolder;
					public updateHandledExConversation(param0: string, param1: boolean): void;
					public resetQuickRepliesMessageHolder(): void;
					public updateAgentDetailsUpdated(param0: string, param1: string): void;
					public shutDown(): void;
					public updateMessagesState(param0: javautilArrayList, param1: string, param2: string, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					public getMyUserId(param0: string): string;
					public clear(): void;
					public getMessagesByDialogId(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public isFirstMessageExists(): com.liveperson.infra.database.DataBaseCommand;
					public updateOnMessageAck(param0: string, param1: string, param2: string, param3: number): void;
					public updateMessageState(param0: number, param1: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					public clearMessagesOfClosedConversations(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public getMessages(): androiddatabaseCursor;
					public updateAllMessagesStateByDialogId(param0: string, param1: string, param2: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					public getSequencesForDialog(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public refreshCursor(param0: string): void;
					public loadMessagingUserProfile(param0: string): com.liveperson.messaging.model.MessagingUserProfile;
					public updateFetchHistoryEnded(param0: string, param1: boolean): void;
					public updateMessageFileChanged(param0: string, param1: number): void;
					public updateOnCommand(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand;
					public addOnUpdateListener(param0: com.liveperson.messaging.model.AmsMessages.MessagesListener, param1: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param2: string): void;
					public updateMessageReceivedState(param0: string, param1: string, param2: native.Array<number>, param3: com.liveperson.api.response.types.DeliveryStatus): void;
					public searchMessages(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public updateMessagesDialogServerID(param0: string, param1: string): com.liveperson.infra.database.DataBaseCommand;
					public addMultipleMessages(param0: javautilArrayList, param1: string, param2: string, param3: string, param4: string, param5: string, param6: number, param7: boolean, param8: boolean): com.liveperson.infra.database.DataBaseCommand;
					public clearAllMessages(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public updateFileMessageByRowId(param0: number, param1: number): com.liveperson.infra.database.DataBaseCommand;
					public updateMessageOnRetry(param0: string, param1: com.liveperson.messaging.model.MessagingChatMessage): com.liveperson.infra.database.DataBaseCommand;
					public updateMessageState(param0: string, param1: string, param2: string, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
					public sendReadAckOnMessages(param0: string, param1: string, param2: string): void;
					public updateMessageDialogServerIdAndTime(param0: number, param1: string, param2: number): com.liveperson.infra.database.DataBaseCommand;
					public getRowIdByEventId(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public getMessageByEventId(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public setDeliveryStatusUpdateCommand(param0: com.liveperson.messaging.model.Form, param1: com.liveperson.api.response.types.DeliveryStatus): void;
					public getTimeOfFirstMessage(): com.liveperson.infra.database.DataBaseCommand;
					public resendAllPendingMessages(param0: string): void;
					public hasListener(): boolean;
					public loadMessages(param0: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param1: string, param2: number, param3: number, param4: number): com.liveperson.infra.database.DataBaseCommand;
				}
				export module AmsMessages {
					export class MessagesListener {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.model.AmsMessages$MessagesListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							initMessages(param0: javautilArrayList): void;
							onQueryMessagesResult(param0: number, param1: number): void;
							onUpdateMessages(param0: number, param1: number): void;
							onNewMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
							onUpdateMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
							removeAll(param0: string): void;
							onHistoryFetched(): void;
							onExConversationHandled(param0: boolean): void;
							onHistoryFetchedFailed(): void;
						});
						public initMessages(param0: javautilArrayList): void;
						public onExConversationHandled(param0: boolean): void;
						public onHistoryFetchedFailed(): void;
						public onUpdateMessages(param0: number, param1: number): void;
						public onUpdateMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
						public onQueryMessagesResult(param0: number, param1: number): void;
						public onNewMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
						public onHistoryFetched(): void;
						public removeAll(param0: string): void;
					}
					export class MessagesSortedBy {
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

/// <reference path="./com.liveperson.infra.database.DataBaseCommand.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingUserProfile.d.ts" />
/// <reference path="./com.liveperson.messaging.model.QuickRepliesMessageHolder.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsMessagesLoaderProvider {
					/**
					 * Constructs a new instance of the com.liveperson.messaging.model.AmsMessagesLoaderProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						addOnUpdateListener(param0: com.liveperson.messaging.model.AmsMessages.MessagesListener, param1: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param2: string): void;
						removeOnUpdateListener(): void;
						hasListener(): boolean;
						loadMessages(param0: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param1: string, param2: number, param3: number, param4: number): com.liveperson.infra.database.DataBaseCommand;
						loadMessagingUserProfile(param0: string): com.liveperson.messaging.model.MessagingUserProfile;
						getMyUserId(param0: string): string;
						getQuickRepliesMessageHolder(param0: string): com.liveperson.messaging.model.QuickRepliesMessageHolder;
						resetQuickRepliesMessageHolder(): void;
					});
					public resetQuickRepliesMessageHolder(): void;
					public getMyUserId(param0: string): string;
					public loadMessagingUserProfile(param0: string): com.liveperson.messaging.model.MessagingUserProfile;
					public addOnUpdateListener(param0: com.liveperson.messaging.model.AmsMessages.MessagesListener, param1: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param2: string): void;
					public removeOnUpdateListener(): void;
					public getQuickRepliesMessageHolder(param0: string): com.liveperson.messaging.model.QuickRepliesMessageHolder;
					public hasListener(): boolean;
					public loadMessages(param0: com.liveperson.messaging.model.AmsMessages.MessagesSortedBy, param1: string, param2: number, param3: number, param4: number): com.liveperson.infra.database.DataBaseCommand;
				}
			}
		}
	}
}

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./com.liveperson.infra.database.DataBaseCommand.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingUserProfile.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class AmsUsers {
					public static BROADCAST_CONSUMER_ID_ACTION: string;
					public static BRAND_ID_EXTRA: string;
					public static BROADCAST_AGENT_CHANGED: string;
					public static EXTRA_KEY_AGENT_SERVER_ID: string;
					public static EXTRA_KEY_AGENT_FULL_NAME: string;
					public static EXTRA_KEY_AGENT_NICKNAME: string;
					public static BROADCAST_CONSUMER_CHANGED: string;
					public static EXTRA_KEY_ID: string;
					public static EXTRA_KEY_FULL_NAME: string;
					public clearConsumerFromDB(param0: string): void;
					public getProjection(): native.Array<string>;
					public getUserById(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public getUserByBrandIDFromDB(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public getProfileFromCursor(param0: androiddatabaseCursor): com.liveperson.messaging.model.MessagingUserProfile;
					public loadConsumerForBrand(param0: string): void;
					public getConsumerId(param0: string): string;
					public updateConsumerId(param0: string, param1: string): void;
					public updateUserProfile(param0: com.liveperson.messaging.model.MessagingUserProfile): void;
					public getConsumerByBrandIDFromDB(param0: string): com.liveperson.infra.database.DataBaseCommand;
					public constructor();
					public loadProfile(param0: string): void;
					public clear(): void;
				}
			}
		}
	}
}

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.api.response.types.ConversationState.d.ts" />
/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationData.d.ts" />
/// <reference path="./com.liveperson.messaging.model.TTRManager.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class Conversation {
					public constructor(param0: com.liveperson.messaging.model.ConversationData);
					public getState(): com.liveperson.api.response.types.ConversationState;
					public setRequestId(param0: number): void;
					public isShowedCSAT(): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
					public getDialogIds(): javautilList;
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
					public constructor(param0: androiddatabaseCursor);
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

/// <reference path="./com.liveperson.api.response.model.ConversationINCADetails.d.ts" />
/// <reference path="./com.liveperson.api.response.model.DialogData.d.ts" />
/// <reference path="./com.liveperson.api.response.model.Participants.d.ts" />
/// <reference path="./com.liveperson.api.response.model.Result.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CSAT.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.api.response.types.ConversationState.d.ts" />
/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Conversation.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class ConversationData {
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
					public toString(): string;
					public constructor();
					public setDialogs(param0: javautilArrayList): void;
					public constructor(param0: com.liveperson.api.response.types.ConversationState, param1: com.liveperson.api.response.model.Result, param2: string);
					public constructor(param0: string, param1: com.liveperson.messaging.model.Conversation);
					public getAllAgentParticipants(param0: com.liveperson.api.response.model.Participants): native.Array<string>;
					public compareTo(param0: com.liveperson.messaging.model.ConversationData): number;
					public constructor(param0: com.liveperson.api.response.model.ConversationINCADetails, param1: string);
					public constructor(param0: string, param1: com.liveperson.messaging.model.Conversation, param2: javautilArrayList);
					public getAssignedAgentId(): string;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class ConversationUtils {
					public mController: com.liveperson.messaging.Messaging;
					public updateParticipants(param0: string, param1: string, param2: native.Array<string>, param3: com.liveperson.api.response.model.UserProfile.UserType, param4: string, param5: boolean, param6: boolean): void;
					public updateParticipants(param0: string, param1: string, param2: native.Array<string>, param3: com.liveperson.api.response.model.UserProfile.UserType, param4: string, param5: boolean, param6: boolean, param7: com.liveperson.infra.ICallback): void;
					public calculateEffectiveTTR(param0: string, param1: com.liveperson.api.response.types.TTRType, param2: number, param3: number, param4: number): number;
					public addFirstMessage(param0: string, param1: string): void;
					public updateTTR(param0: com.liveperson.api.response.types.TTRType, param1: number, param2: number, param3: string): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public static showTTR(param0: com.liveperson.messaging.Messaging, param1: string): void;
				}
			}
		}
	}
}

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./com.liveperson.api.response.model.DialogData.d.ts" />
/// <reference path="./com.liveperson.api.response.model.Participants.d.ts" />
/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DialogState.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DialogType.d.ts" />
/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationData.d.ts" />
/// <reference path="./com.liveperson.messaging.model.PendingDialogData.d.ts" />
/// <reference path="./com.liveperson.messaging.model.TTRManager.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class Dialog {
					public constructor(param0: com.liveperson.messaging.model.ConversationData);
					public setDialogType(param0: com.liveperson.api.response.types.DialogType): void;
					public setRequestId(param0: number): void;
					public isShowedCSAT(): com.liveperson.api.response.types.CSAT.CSAT_SHOW_STATUS;
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
					public getUnreadMessages(): number;
					public setConversationId(param0: string): void;
					public getDialogType(): com.liveperson.api.response.types.DialogType;
					public setBrandId(param0: string): void;
					public getLastServerSequence(): number;
					public equals(param0: javalangObject): boolean;
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
					public constructor(param0: androiddatabaseCursor);
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

/// <reference path="./com.liveperson.api.response.types.CloseReason.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Dialog.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class DialogUtils {
					public mController: com.liveperson.messaging.Messaging;
					public updateParticipants(param0: string, param1: string, param2: native.Array<string>, param3: com.liveperson.api.response.model.UserProfile.UserType, param4: string, param5: boolean, param6: boolean): void;
					public updateParticipants(param0: string, param1: string, param2: native.Array<string>, param3: com.liveperson.api.response.model.UserProfile.UserType, param4: string, param5: boolean, param6: boolean, param7: com.liveperson.infra.ICallback): void;
					public addFirstMessage(param0: string, param1: string): void;
					public constructor(param0: com.liveperson.messaging.Messaging);
					public addClosedDialogDivider(param0: string, param1: com.liveperson.messaging.model.Dialog, param2: string, param3: com.liveperson.api.response.types.CloseReason, param4: boolean, param5: com.liveperson.infra.ICallback): void;
					public getResolveTextMessage(param0: string, param1: number, param2: string): string;
				}
			}
		}
	}
}

import androidosBundle = android.os.Bundle;
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class FileMessage {
					public static EXTRA_LOCAL_URL: string;
					public static EXTRA_PREVIEW: string;
					public static EXTRA_LOAD_STATUS: string;
					public static EXTRA_FULL_IMAGE_EXISTS: string;
					public static EXTRA_PREVIEW_IMAGE_EXISTS: string;
					public static EXTRA_FILE_ROW_ID: string;
					public getRelatedMessageRowID(): number;
					public static fromCursor(param0: androiddatabaseCursor): com.liveperson.messaging.model.FileMessage;
					public getPreview(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: number);
					public update(param0: com.liveperson.messaging.model.FileMessage): androidosBundle;
					public getAllFileChanges(): androidosBundle;
					public getFileType(): string;
					public getLocalUrl(): string;
					public getLoadStatus(): com.liveperson.infra.database.tables.FilesTable.LoadStatus;
					public getSwiftPath(): string;
					public getFileRowId(): number;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class Form {
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

/// <reference path="./com.liveperson.messaging.model.Form.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class FormsManager {
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

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.liveperson.messaging.model.FileMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingChatMessage.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.SimpleElement.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class FullMessageRow {
					public static TAG: string;
					public static EXTRA_AGENT_AVATAR: string;
					public static getDummyMessage(param0: androidcontentContext, param1: number): com.liveperson.messaging.model.FullMessageRow;
					public getAgentAvatar(): string;
					public setRootElement(param0: com.liveperson.messaging.structuredcontent.model.elements.SimpleElement): void;
					public static getLoadingIndicatorMessageDiff(param0: androidcontentContext): androidosBundle;
					public static getLoadingHistoryIndicatorMessage(param0: number): com.liveperson.messaging.model.FullMessageRow;
					public getRootElement(): com.liveperson.messaging.structuredcontent.model.elements.SimpleElement;
					public static getUnreadIndicatorMessageDiff(param0: com.liveperson.messaging.model.FullMessageRow): androidosBundle;
					public getFileMessage(): com.liveperson.messaging.model.FileMessage;
					public getMessagingChatMessage(): com.liveperson.messaging.model.MessagingChatMessage;
					public constructor(param0: androiddatabaseCursor);
					public static generateAgentQuickReplyMessage(param0: string, param1: number): com.liveperson.messaging.model.FullMessageRow;
					public static generateAgentTypingIndicatorMessage(param0: string): com.liveperson.messaging.model.FullMessageRow;
					public newerThan(param0: com.liveperson.messaging.model.FullMessageRow): number;
					public constructor(param0: com.liveperson.messaging.model.MessagingChatMessage, param1: string, param2: com.liveperson.messaging.model.FileMessage);
					public getAgentNickName(): string;
					public static getLoadingIndicatorMessage(param0: androidcontentContext, param1: number, param2: boolean): com.liveperson.messaging.model.FullMessageRow;
					public update(param0: com.liveperson.messaging.model.FullMessageRow): androidosBundle;
					public static generateUnreadIndicatorMessage(param0: androidcontentContext, param1: number, param2: number): com.liveperson.messaging.model.FullMessageRow;
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class IncaGetConversationsListResponse {
					public mNextUrl: string;
					public getNumOfResults(): number;
					public getUrlRef(): string;
					public getListOfConversations(): javautilArrayList;
					public constructor(param0: string);
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagesByBrandIDCursorLoader {
					public static URI: string;
					public loadInBackground(): androiddatabaseCursor;
					public constructor(param0: androidcontentContext, param1: string, param2: string);
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagesByConversationIDCursorLoader {
					public static URI: string;
					public constructor(param0: androidcontentContext, param1: string);
					public loadInBackground(): androiddatabaseCursor;
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagesByUserIDCursorLoader {
					public static URI: string;
					public constructor(param0: androidcontentContext, param1: string);
					public loadInBackground(): androiddatabaseCursor;
				}
			}
		}
	}
}

/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./com.liveperson.api.response.model.ContentType.d.ts" />
/// <reference path="./com.liveperson.api.response.model.Event.d.ts" />
/// <reference path="./com.liveperson.infra.utils.EncryptionVersion.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagingChatMessage {
					public static TAG: string;
					public static EXTRA_MESSAGE_STATE: string;
					public static EXTRA_SERVER_SEQUENCE: string;
					public static EXTRA_DIALOG_ID: string;
					public getMessageType(): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public setMessageType(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): void;
					public getAccessibilityMessage(): string;
					public constructor(param0: string, param1: string, param2: number, param3: string, param4: string, param5: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param6: com.liveperson.messaging.model.MessagingChatMessage.MessageState, param7: com.liveperson.infra.utils.EncryptionVersion);
					public constructor(param0: string, param1: string, param2: number, param3: string, param4: string, param5: com.liveperson.messaging.model.MessagingChatMessage.MessageType, param6: com.liveperson.messaging.model.MessagingChatMessage.MessageState, param7: number, param8: string, param9: com.liveperson.infra.utils.EncryptionVersion);
					public toString(): string;
					public getFormalMessage(): string;
					public update(param0: com.liveperson.messaging.model.MessagingChatMessage): androidosBundle;
					public isSystemMessageFromAgent(param0: string): boolean;
					public getMessageState(): com.liveperson.messaging.model.MessagingChatMessage.MessageState;
					public setMessageState(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageState): void;
				}
				export module MessagingChatMessage {
					export class MessageState {
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
						public static SYSTEM_RESOLVED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_MASKED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static LOADING: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static BRAND: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_IMAGE: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_IMAGE_MASKED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_URL: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_URL_MASKED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_URL: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static SYSTEM_MASKED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static UNREAD_INDICATOR: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_FORM: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_FORM: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_STRUCTURED_CONTENT: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONTROLLER_SYSTEM: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_IS_TYPING_INDICATOR: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static AGENT_QUICK_REPLIES: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static CONSUMER_VOICE: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static SYSTEM_DIALOG_RESOLVED: com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static isImage(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static getMessageTypeForConsumer(param0: com.liveperson.api.response.model.Event, param1: com.liveperson.api.response.model.ContentType): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static isAgent(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static getMessageTypeForAgent(param0: com.liveperson.api.response.model.ContentType): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
						public static isSystem(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static isConsumerMaskedMessage(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): boolean;
						public static values(): native.Array<com.liveperson.messaging.model.MessagingChatMessage.MessageType>;
						public static valueOf(param0: string): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					}
				}
			}
		}
	}
}

/// <reference path="./android.database.Cursor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagingSearchedMessage {
					public getMessageType(): com.liveperson.messaging.model.MessagingChatMessage.MessageType;
					public setMessageType(param0: com.liveperson.messaging.model.MessagingChatMessage.MessageType): void;
					public getBrandId(): string;
					public setBrandId(param0: string): void;
					public getFirstName(): string;
					public constructor();
					public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.messaging.model.MessagingChatMessage.MessageType);
					public getMessage(): string;
					public setFirstName(param0: string): void;
					public static fromCursor(param0: androiddatabaseCursor): com.liveperson.messaging.model.MessagingSearchedMessage;
					public setMessage(param0: string): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.UserProfile.d.ts" />
/// <reference path="./com.liveperson.infra.utils.EncryptionVersion.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class MessagingUserProfile extends com.liveperson.api.response.model.UserProfile {
					public getBrandId(): string;
					public constructor(param0: orgjsonJSONObject);
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

/// <reference path="./com.liveperson.messaging.model.FullMessageRow.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class NullMessagesListener {
					public onNewMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
					public onExConversationHandled(param0: boolean): void;
					public constructor();
					public onUpdateMessage(param0: com.liveperson.messaging.model.FullMessageRow): void;
					public onQueryMessagesResult(param0: number, param1: number): void;
					public removeAll(param0: string): void;
					public onUpdateMessages(param0: number, param1: number): void;
					public initMessages(param0: javautilArrayList): void;
					public onHistoryFetched(): void;
					public onHistoryFetchedFailed(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.network.socket.requests.SendMessageRequest.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class PendingDialogData {
					public toString(): string;
					public constructor();
					public addToPendingRequests(param0: com.liveperson.messaging.network.socket.requests.SendMessageRequest): void;
					public getPendingMessages(): javautilArrayList;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.events.ContentEventNotification.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class QuickRepliesMessageHolder {
					public static TAG: string;
					public setShow(param0: boolean): void;
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

/// <reference path="./com.liveperson.messaging.controller.ConnectionsController.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class SynchronizedAmsConnectionCallback {
					public constructor(param0: com.liveperson.messaging.controller.ConnectionsController, param1: string, param2: javalangRunnable);
					public execute(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.controller.ConnectionsController.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class SynchronizedAmsConnectionUpdateCallback {
					public constructor(param0: com.liveperson.messaging.controller.ConnectionsController, param1: string, param2: javalangRunnable);
					public execute(): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.AccountsController.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class SynchronizedAuthenticationCompletedCallback {
					public execute(): void;
					public executeWithReturnValue(): boolean;
					public constructor(param0: com.liveperson.messaging.controller.AccountsController, param1: string, param2: com.liveperson.infra.ICallback);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.LocalBroadcastReceiver.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class SynchronizedInternetConnectionCallback {
					public static TAG: string;
					public handled: boolean;
					public mLocalBroadcastReceiver: com.liveperson.infra.LocalBroadcastReceiver;
					public mCallback: javalangRunnable;
					public execute(): void;
					public constructor(param0: javalangRunnable);
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.model.TTRManager.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class TTRManager {
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
						public constructor(param0: com.liveperson.messaging.model.TTRManager, param1: number, param2: number, param3: string);
						public run(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class TimeBundle {
					public diffDays: number;
					public diffHours: number;
					public diffMinutes: number;
					public static CREATOR: androidosParcelableCreator;
					public toString(): string;
					public constructor(param0: androidosParcel);
					public equals(param0: javalangObject): boolean;
					public describeContents(): number;
					public constructor(param0: number);
					public writeToParcel(param0: androidosParcel, param1: number): void;
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.model.UserProfileBundle.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module model {
				export class UserProfileBundle {
					public getFirstName(): string;
					public getNickname(): string;
					public getPhoneNumber(): string;
					public getLastName(): string;
					public getAvatarUrl(): string;
				}
				export module UserProfileBundle {
					export class Builder {
						public setPhoneNumber(param0: string): com.liveperson.messaging.model.UserProfileBundle.Builder;
						public constructor();
						public setLastName(param0: string): com.liveperson.messaging.model.UserProfileBundle.Builder;
						public setFirstName(param0: string): com.liveperson.messaging.model.UserProfileBundle.Builder;
						public build(): com.liveperson.messaging.model.UserProfileBundle;
						public setAvatarUrl(param0: string): com.liveperson.messaging.model.UserProfileBundle.Builder;
						public setNickname(param0: string): com.liveperson.messaging.model.UserProfileBundle.Builder;
					}
				}
			}
		}
	}
}

import androidosMessage = android.os.Message;
/// <reference path="./android.os.Message.d.ts" />
/// <reference path="./com.liveperson.messaging.network.http.MessageTimeoutListener.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export class MessageTimeoutQueue {
					public add(param0: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param1: number, param2: string, param3: string, param4: string, param5: number): void;
					public constructor(param0: com.liveperson.messaging.network.http.MessageTimeoutListener);
					public removeAll(): void;
					public onHandleMessage(param0: androidosMessage): void;
					public add(param0: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param1: number, param2: string, param3: string, param4: number): void;
					public remove(param0: number): boolean;
					public handleMsgImmediately(param0: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param1: number, param2: string, param3: string, param4: string): void;
					public add(param0: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param1: number, param2: string, param3: string, param4: string): void;
				}
				export module MessageTimeoutQueue {
					export class BrandConversationObj {
						public constructor(param0: string, param1: string, param2: com.liveperson.messaging.network.MessageTimeoutQueue.MessageType, param3: string);
					}
					export class MessageType {
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

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class AgentProfileRequest {
						public mController: com.liveperson.messaging.Messaging;
						public getCallback(): com.liveperson.infra.ICallback;
						public setCallback(param0: com.liveperson.infra.ICallback): com.liveperson.messaging.network.http.AgentProfileRequest;
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: boolean);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.QueryParams.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class DownloadFileRequest {
						public constructor(param0: string, param1: string, param2: com.liveperson.api.response.model.QueryParams, param3: javautilList, param4: com.liveperson.infra.ICallback);
						public execute(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.network.http.request.HttpPostRequest.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsAccount.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class IdpRequest {
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
						public mLPAuthenticationParams: com.liveperson.infra.LPAuthenticationParams;
						public mHostVersion: string;
						public mCertificates: javautilList;
						public constructor(param0: com.liveperson.messaging.model.AmsAccount, param1: string, param2: string, param3: com.liveperson.infra.LPAuthenticationParams, param4: string, param5: com.liveperson.messaging.commands.tasks.IdpTask.IDPExceptionICallback, param6: javautilList);
						public sendErrorCallback(param0: javalangException): void;
						public sendGeneralRequest(param0: com.liveperson.infra.network.http.request.HttpPostRequest): void;
						public execute(): void;
						public getBodyForIDPJwtFlow(param0: string): orgjsonJSONObject;
						public addHeaders(param0: com.liveperson.infra.network.http.request.HttpPostRequest): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class IncaGetConversationsListRequest {
						public static MAX_LIMIT: number;
						public static MAX_TIME_LIMIT: number;
						public mController: com.liveperson.messaging.Messaging;
						public getOffset(): number;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: number, param3: number, param4: number, param5: com.liveperson.infra.ICallback);
						public setOffset(param0: number): void;
						public execute(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class IncaGetFileUrlRequest {
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: com.liveperson.infra.ICallback);
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class MessageTimeoutListener {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.network.http.MessageTimeoutListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onMessageTimeout(param0: string): void;
							onPublishMessageTimeout(param0: string, param1: string, param2: string): void;
						});
						public onPublishMessageTimeout(param0: string, param1: string, param2: string): void;
						public onMessageTimeout(param0: string): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class QueryMessagesINCACommand extends com.liveperson.messaging.commands.BasicQueryMessagesCommand {
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: boolean);
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
		export module messaging {
			export module network {
				export module http {
					export class RestRequestParams {
						public mCertificates: javautilList;
						public setParams(param0: string, param1: string, param2: string, param3: javautilList): void;
						public constructor();
						public isNotValid(): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.network.http.RestRequestParams.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.requests.SendMessageRequest.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class SendFileRequestRest {
						public execute(): void;
						public constructor(param0: com.liveperson.messaging.network.http.RestRequestParams, param1: com.liveperson.messaging.network.socket.requests.SendMessageRequest);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.LPAuthenticationParams.d.ts" />
/// <reference path="./com.liveperson.infra.network.http.request.HttpPostRequest.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsAccount.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class UnAuthRequest extends com.liveperson.messaging.network.http.IdpRequest {
						public static TAG: string;
						public static IDP_ANONYMOUS_URL: string;
						public mConnectorId: string;
						public constructor(param0: com.liveperson.messaging.model.AmsAccount, param1: string, param2: string, param3: com.liveperson.infra.LPAuthenticationParams, param4: string, param5: com.liveperson.messaging.commands.tasks.IdpTask.IDPExceptionICallback, param6: javautilList);
						public getHttpPostRequestForIDPV3(param0: string): com.liveperson.infra.network.http.request.HttpPostRequest;
						public constructor(param0: com.liveperson.messaging.model.AmsAccount, param1: string, param2: string, param3: com.liveperson.infra.LPAuthenticationParams, param4: string, param5: com.liveperson.messaging.commands.tasks.IdpTask.IDPExceptionICallback, param6: javautilList, param7: string);
						public execute(): void;
						public sendUnAuthRequest(): void;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.QueryParams.d.ts" />
/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module http {
					export class UploadFileRequest {
						public execute(): void;
						public constructor(param0: string, param1: string, param2: com.liveperson.api.response.model.QueryParams, param3: javautilList, param4: com.liveperson.infra.ICallback, param5: native.Array<number>, param6: javalangInteger);
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.Result.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.FetchConversationManager.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationData.d.ts" />
/// <reference path="./com.liveperson.messaging.model.ConversationUtils.d.ts" />
/// <reference path="./com.liveperson.messaging.model.Dialog.d.ts" />
/// <reference path="./com.liveperson.messaging.model.DialogUtils.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export class ExConversationChangeNotificationResponseHandler {
						public static PREF_HIDE_CLOSED_CONVERSATIONS: string;
						public mController: com.liveperson.messaging.Messaging;
						public mConversationUtils: com.liveperson.messaging.model.ConversationUtils;
						public mDialogUtils: com.liveperson.messaging.model.DialogUtils;
						public getFetchConversationManager(): com.liveperson.messaging.commands.tasks.FetchConversationManager;
						public parse(param0: orgjsonJSONObject): javautilList;
						public constructor(param0: com.liveperson.messaging.Messaging);
						public queryMessages(param0: com.liveperson.messaging.model.Dialog, param1: com.liveperson.messaging.commands.tasks.FetchConversationManager.DATA_SOURCE): void;
						public init(): void;
						public getAPIResponseType(): string;
						public updateClosedConversation(param0: com.liveperson.messaging.model.ConversationData, param1: boolean): void;
						public isValidResponse(param0: com.liveperson.api.response.model.Result): boolean;
						public createNewConversation(param0: com.liveperson.messaging.model.ConversationData): void;
						public updateClosedDialog(param0: com.liveperson.messaging.model.ConversationData, param1: com.liveperson.messaging.model.Dialog, param2: boolean): void;
						public updateConversationAndDialogs(param0: com.liveperson.messaging.model.ConversationData): void;
						public handle(param0: javautilList): boolean;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.events.MessagingEventNotification.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export class MessagingEventNotificationHandler {
						public static Companion: com.liveperson.messaging.network.socket.MessagingEventNotificationHandler.Companion;
						public getTAG(): string;
						public constructor(param0: com.liveperson.messaging.Messaging);
						public handle(param0: com.liveperson.api.response.events.MessagingEventNotification): boolean;
						public getAPIResponseType(): string;
						public parse(param0: orgjsonJSONObject): com.liveperson.api.response.events.MessagingEventNotification;
						public setMController$messaging_debug(param0: com.liveperson.messaging.Messaging): void;
						public getMController$messaging_debug(): com.liveperson.messaging.Messaging;
						public extractLinks(param0: string): native.Array<string>;
					}
					export module MessagingEventNotificationHandler {
						export class Companion {
							public getORIGINATOR_ID_EXTRA(): string;
							public getAGENT_TYPING_ACTION(): string;
							public getAGENT_TYPING_ACTION_IS_TYPING_EXTRA(): string;
						}
						export class WhenMappings {
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.ConnectionsController.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.general_requests.ClockRequest.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module general_requests {
						export class ClockRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public constructor(param0: com.liveperson.messaging.controller.ConnectionsController, param1: string, param2: string);
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
						}
						export module ClockRequest {
							export class ClockResponseHandler {
								public constructor(param0: com.liveperson.messaging.network.socket.general_requests.ClockRequest);
								public getAPIResponseType(): string;
								public parse(param0: orgjsonJSONObject): com.liveperson.api.request.GetClock.Response;
								public handle(param0: com.liveperson.api.request.GetClock.Response): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.IOnUrlReady.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export abstract class BaseGetUrlRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.api.response.IOnUrlReady);
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class ChangeConversationTTRRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public getData(): string;
							public constructor(param0: string, param1: string, param2: com.liveperson.api.response.types.TTRType, param3: number);
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.model.types.ChatState.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class ChatStateChangeRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
							public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.infra.model.types.ChatState);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class CloseDialogRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public constructor(param0: string, param1: string, param2: string, param3: string);
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public setCallback(param0: com.liveperson.infra.ICallback): com.liveperson.messaging.network.socket.requests.CloseDialogRequest;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
						}
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
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class CsatRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public constructor(param0: string, param1: string, param2: number, param3: number);
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.api.response.types.DeliveryStatus.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class DeliveryStatusUpdateRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public setInfo(param0: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
							public constructor(param0: string, param1: number);
							public constructor(param0: string, param1: string, param2: string, param3: com.liveperson.api.response.types.DeliveryStatus, param4: javautilList);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.IOnUrlReady.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class GetUrlForDownloadRequest extends com.liveperson.messaging.network.socket.requests.BaseGetUrlRequest {
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.api.response.IOnUrlReady);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.api.response.IOnUrlReady);
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.IOnUrlReady.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class GetUrlForUploadRequest extends com.liveperson.messaging.network.socket.requests.BaseGetUrlRequest {
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: com.liveperson.api.response.IOnUrlReady);
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: number, param3: string, param4: com.liveperson.api.response.IOnUrlReady);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class GetUserProfileRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public setShouldUpdateUI(param0: boolean): com.liveperson.messaging.network.socket.requests.GetUserProfileRequest;
							public setUserId(param0: string): com.liveperson.messaging.network.socket.requests.GetUserProfileRequest;
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public setDialogId(param0: string): com.liveperson.messaging.network.socket.requests.GetUserProfileRequest;
							public setServerConversationId(param0: string): com.liveperson.messaging.network.socket.requests.GetUserProfileRequest;
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: com.liveperson.api.response.model.UserProfile.UserType);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.types.TTRType.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class NewConversationRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public getData(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string);
							public constructor(param0: string);
							public setAppId(param0: string): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
							public getRequestName(): string;
							public setSkill(param0: string): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public setTtrType(param0: com.liveperson.api.response.types.TTRType): com.liveperson.messaging.network.socket.requests.NewConversationRequest;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class QueryMessagesRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public setResponseCallBack(param0: com.liveperson.messaging.commands.tasks.BaseAmsSocketConnectionCallback): void;
							public setShouldUpdateUI(param0: boolean): void;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: number);
							public getData(): string;
							public setOlderThanSequenceId(param0: number): com.liveperson.messaging.network.socket.requests.QueryMessagesRequest;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
							public getDialogId(): string;
							public setMaxSize(param0: number): com.liveperson.messaging.network.socket.requests.QueryMessagesRequest;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.ICallback.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class ResolveConversationRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public getData(): string;
							public setResponseCallBack(param0: com.liveperson.infra.ICallback): void;
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.response.model.ContentType.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class SendFileRequest extends com.liveperson.messaging.network.socket.requests.SendMessageRequest {
							public setFileContent(param0: string, param1: string, param2: string, param3: string): void;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.api.response.model.ContentType);
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.request.message.PublishMessage.d.ts" />
/// <reference path="./com.liveperson.api.response.model.ContentType.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class SendFormSubmissionMessageRequest extends com.liveperson.messaging.network.socket.requests.SendMessageRequest {
							public mMessage: com.liveperson.api.request.message.PublishMessage;
							public getData(): string;
							public setMessageContent(param0: string): void;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.api.response.model.ContentType);
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.api.request.message.PublishMessage.d.ts" />
/// <reference path="./com.liveperson.api.response.model.ContentType.d.ts" />
/// <reference path="./com.liveperson.api.response.model.DeliveryStatusUpdateInfo.d.ts" />
/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.Messaging.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class SendMessageRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public mMessage: com.liveperson.api.request.message.PublishMessage;
							public setDialogId(param0: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string, param7: com.liveperson.api.response.model.ContentType);
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string);
							public getEventId(): string;
							public setConversationId(param0: string): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
							public getData(): string;
							public setMessageContent(param0: string): void;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public setInfo(param0: com.liveperson.api.response.model.DeliveryStatusUpdateInfo): void;
							public setContentType(param0: com.liveperson.api.response.model.ContentType): com.liveperson.messaging.network.socket.requests.SendMessageRequest;
							public constructor(param0: com.liveperson.messaging.Messaging, param1: string, param2: string, param3: string, param4: string, param5: string, param6: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.model.AmsUsers.d.ts" />
/// <reference path="./com.liveperson.messaging.model.MessagingUserProfile.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class SetUsersProfileRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public static TAG: string;
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public constructor(param0: com.liveperson.messaging.model.AmsUsers, param1: string, param2: string, param3: com.liveperson.messaging.model.MessagingUserProfile);
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.controller.ConnectionsController.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class SubscribeExConversationsRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public static TAG: string;
							public getData(): string;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
							public constructor(param0: com.liveperson.messaging.controller.ConnectionsController, param1: number, param2: string, param3: string, param4: string);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.infra.network.socket.BaseResponseHandler.d.ts" />
/// <reference path="./com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsRequest.d.ts" />
/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class SubscribeMessagingEventsRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public getConversationId(): string;
							public constructor(param0: string, param1: string, param2: string, param3: javalangInteger);
							public getData(): string;
							public getFromSeq(): javalangInteger;
							public constructor(param0: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
							public getDialogId(): string;
						}
						export module SubscribeMessagingEventsRequest {
							export class SubscribeMessagingEventsResponseHandler {
								public handle(param0: com.liveperson.api.request.SubscribeMessagingEvents.Response): boolean;
								public getAPIResponseType(): string;
								public parse(param0: orgjsonJSONObject): com.liveperson.api.request.SubscribeMessagingEvents.Response;
								public constructor(param0: com.liveperson.messaging.network.socket.requests.SubscribeMessagingEventsRequest);
							}
						}
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
		export module messaging {
			export module network {
				export module socket {
					export module requests {
						export class UnSubscribeExConversationsRequest extends com.liveperson.api.request.BaseAMSSocketRequest {
							public getData(): string;
							public constructor(param0: string);
							public constructor(param0: string, param1: string);
							public getRequestName(): string;
							public getResponseHandler(): com.liveperson.infra.network.socket.BaseResponseHandler;
							public constructor(param0: string, param1: number);
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module actions {
						export abstract class BaseAction extends com.liveperson.messaging.structuredcontent.model.elements.BaseElement {
							public mName: string;
							public constructor(param0: orgjsonJSONObject);
							public getOnClickListener(param0: androidcontentContext, param1: string): com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener;
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public constructor(param0: string, param1: string);
							public getName(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module actions {
						export class LinkAction extends com.liveperson.messaging.structuredcontent.model.actions.BaseAction {
							public static TAG: string;
							public constructor(param0: orgjsonJSONObject);
							public getOnClickListener(param0: androidcontentContext, param1: string): com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener;
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public constructor(param0: string, param1: string);
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

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module actions {
						export class NavigateAction extends com.liveperson.messaging.structuredcontent.model.actions.BaseAction {
							public static TAG: string;
							public constructor(param0: string, param1: string, param2: string, param3: string);
							public getLatitude(): string;
							public constructor(param0: orgjsonJSONObject);
							public getOnClickListener(param0: androidcontentContext, param1: string): com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener;
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public constructor(param0: string, param1: string);
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
							/**
							 * Constructs a new instance of the com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener interface with the provided implementation.
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

/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module actions {
						export class PublishTextAction extends com.liveperson.messaging.structuredcontent.model.actions.BaseAction {
							public static TAG: string;
							public constructor(param0: orgjsonJSONObject);
							public getOnClickListener(param0: androidcontentContext, param1: string): com.liveperson.messaging.structuredcontent.model.actions.OnActionClickListener;
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public constructor(param0: string, param1: string);
							public constructor(param0: orgjsonJSONObject, param1: orgjsonJSONArray);
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export abstract class ActionableElement extends com.liveperson.messaging.structuredcontent.model.elements.SimpleElement {
							public static TAG: string;
							public mMetadata: orgjsonJSONArray;
							public mActionList: javautilList;
							public constructor(param0: orgjsonJSONObject);
							public parseClick(param0: orgjsonJSONObject): void;
							public constructor(param0: string);
							public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
							public getMetadata(): orgjsonJSONArray;
							public getActions(): javautilList;
							public parseActions(param0: orgjsonJSONObject): void;
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export abstract class BaseElement {
							public mType: string;
							public mAllowBorderBottom: boolean;
							public mAllowBorderLeft: boolean;
							public mAllowBorderTop: boolean;
							public mAllowBorderRight: boolean;
							public constructor(param0: orgjsonJSONObject);
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

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export abstract class SimpleElement extends com.liveperson.messaging.structuredcontent.model.elements.BaseElement {
							public mTooltip: string;
							public mRtl: boolean;
							public setTooltip(param0: string): void;
							public constructor(param0: orgjsonJSONObject);
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

/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class ButtonElement extends com.liveperson.messaging.structuredcontent.model.elements.ActionableElement {
								public static TAG: string;
								public toString(): string;
								public getStyle(): com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle;
								public getTitle(): string;
								public setTitle(param0: string): void;
								public constructor();
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.lang.Integer.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class ElementStyle {
								public getTextColor(): javalangInteger;
								public getSize(): com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.ElementSize;
								public isBold(): boolean;
								public getBackgroundColor(): number;
								public getBorderColor(): javalangInteger;
								public isItalic(): boolean;
								public constructor(param0: orgjsonJSONObject);
								public setDefaultValues(): void;
								public getBorderRadius(): javalangInteger;
							}
							export module ElementStyle {
								export class ElementSize {
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

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class ImageElement extends com.liveperson.messaging.structuredcontent.model.elements.ActionableElement {
								public toString(): string;
								public getUrl(): string;
								public constructor();
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
								public getCaption(): string;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class LinkElement extends com.liveperson.messaging.structuredcontent.model.elements.SimpleElement {
								public getUri(): string;
								public toString(): string;
								public getTitle(): string;
								public setTitle(param0: string): void;
								public setUri(param0: string): void;
								public constructor();
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class MapElement extends com.liveperson.messaging.structuredcontent.model.elements.ActionableElement {
								public getLatitude(): number;
								public toString(): string;
								public getLongitude(): number;
								public constructor();
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class TextElement extends com.liveperson.messaging.structuredcontent.model.elements.SimpleElement {
								public toString(): string;
								public getStyle(): com.liveperson.messaging.structuredcontent.model.elements.basic.ElementStyle;
								public getText(): string;
								public constructor();
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public setText(param0: string): void;
								public constructor(param0: orgjsonJSONObject);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module basic {
							export class WebViewElement extends com.liveperson.messaging.structuredcontent.model.elements.ActionableElement {
								public toString(): string;
								public getUrl(): string;
								public constructor();
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module complex {
							export class CarouselElement extends com.liveperson.messaging.structuredcontent.model.elements.complex.ComplexElement {
								public toString(): string;
								public getPadding(): number;
								public constructor(param0: orgjsonJSONObject, param1: string);
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
								public setPadding(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.SimpleElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module complex {
							export abstract class ComplexElement extends com.liveperson.messaging.structuredcontent.model.elements.SimpleElement {
								public mElementList: javautilList;
								public addElement(param0: com.liveperson.messaging.structuredcontent.model.elements.SimpleElement): void;
								public constructor(param0: orgjsonJSONObject, param1: string);
								public getElementList(): javautilList;
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module complex {
							export class LayoutElement extends com.liveperson.messaging.structuredcontent.model.elements.complex.ComplexElement {
								public toString(): string;
								public constructor(param0: orgjsonJSONObject, param1: string);
								public constructor(param0: string, param1: boolean);
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
								public isVerticalOrientation(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module model {
					export module elements {
						export module complex {
							export class QuickRepliesElement extends com.liveperson.messaging.structuredcontent.model.elements.complex.ComplexElement {
								public toString(): string;
								public getItemsPerRow(): number;
								public constructor(param0: orgjsonJSONObject, param1: string);
								public constructor(param0: string);
								public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
								public constructor(param0: orgjsonJSONObject);
							}
						}
					}
				}
			}
		}
	}
}

/// <reference path="./java.util.List.d.ts" />
/// <reference path="./org.json.JSONArray.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module parsers {
					export class ActionParser {
						public static TAG: string;
						public constructor();
						public static parse(param0: orgjsonJSONArray, param1: orgjsonJSONArray): javautilList;
					}
				}
			}
		}
	}
}

/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.SimpleElement.d.ts" />
/// <reference path="./org.json.JSONObject.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module parsers {
					export class ElementParser {
						public static TAG: string;
						public constructor();
						public static parse(param0: orgjsonJSONObject): com.liveperson.messaging.structuredcontent.model.elements.SimpleElement;
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

/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ButtonElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.ImageElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.LinkElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.MapElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.TextElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.basic.WebViewElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.CarouselElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.LayoutElement.d.ts" />
/// <reference path="./com.liveperson.messaging.structuredcontent.model.elements.complex.QuickRepliesElement.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module visitor {
					export class ElementVisitor {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.structuredcontent.visitor.ElementVisitor interface with the provided implementation.
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

/// <reference path="./com.liveperson.messaging.structuredcontent.visitor.ElementVisitor.d.ts" />
declare module com {
	export module liveperson {
		export module messaging {
			export module structuredcontent {
				export module visitor {
					export class Visitable {
						/**
						 * Constructs a new instance of the com.liveperson.messaging.structuredcontent.visitor.Visitable interface with the provided implementation.
						 */
						public constructor(implementation: {
							accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
						});
						public accept(param0: com.liveperson.messaging.structuredcontent.visitor.ElementVisitor): void;
					}
				}
			}
		}
	}
}

