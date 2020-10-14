
declare var AMSVersionNumber: number;

declare var AMSVersionString: interop.Reference<number>;

declare class ConnectionStateManager extends NSObject implements GeneralManagerProtocol {

	static alloc(): ConnectionStateManager; // inherited from NSObject

	static new(): ConnectionStateManager; // inherited from NSObject

	static readonly instance: ConnectionStateManager;

	clearManager(): void;
}

declare class EngagementHistoryManager extends NSObject {

	static alloc(): EngagementHistoryManager; // inherited from NSObject

	static generateFileSharingDownloadURLForFileCompletionFailure(file: LPFileEntity, completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static getConsumerMessagesForConversationWithRequestCompletionFailure(request: EngagementHistoryRequest, completion: (p1: NSArray<LPMessageEntity>) => void, failure: (p1: NSError) => void): void;

	static handleConsumerMessagesResponse(response: EngagementHistoryConsumerMessagesResponse): NSArray<LPMessageEntity>;

	static new(): EngagementHistoryManager; // inherited from NSObject
}

declare class LPAMSFacade extends NSObject {

	static acceptRingAgentTokenCompletionFailure(ring: Ring, agentToken: string, completion: (p1: LPConversationEntity) => void, failure: (p1: NSError) => void): void;

	static agentNameUIRepresentation(dialog: LPDialogEntity): string;

	static agentRequestConversationContextTtrDefNameChannelTypeConsumerIdCompletionFailure(conversationQuery: ConversationParamProtocol, context: NSDictionary<string, string>, ttrDefName: string, channelType: string, consumerId: string, completion: () => void, failure: (p1: NSError) => void): void;

	static alloc(): LPAMSFacade; // inherited from NSObject

	static backToQueueConversationCompletionFailure(userID: string, conversation: LPConversationEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static changeUrgentStateIsUrgent(conversationQuery: ConversationParamProtocol, isUrgent: boolean): void;

	static checkActiveConversation(conversationQuery: ConversationParamProtocol): boolean;

	static clearHistoryIsClearOpenConversation(conversationQuery: ConversationParamProtocol, isClearOpenConversation: boolean): boolean;

	static clearLastSavedQuickReplyItem(): void;

	static clearManagers(): void;

	static clearSubscriptionsManager(): void;

	static clientPropertiesString(): string;

	static closeDialog(dialog: LPDialogEntity): void;

	static connectToSocketReadyCompletion(conversationQuery: ConversationParamProtocol, readyCompletion: () => void): void;

	static createConversation(brand: LPBrandEntity): LPConversationEntity;

	static createMessageMaskedLocalMessageIsRealTimeMasking(dialog: LPDialogEntity, isRealTimeMasking: boolean): LPMessageEntity;

	static createResolveLocalMessageEndTime(dialog: LPDialogEntity, endTime: Date): LPMessageEntity;

	static createWelcomeLocalMessageOverrideTime(dialog: LPDialogEntity, overrideTime: Date): LPMessageEntity;

	static createWelcomeLocalMessageWelcomeMessageOverrideTime(dialog: LPDialogEntity, welcomeMessage: LPWelcomeMessage, overrideTime: Date): LPMessageEntity;

	static deleteOldConversations(): void;

	static didFetchHistoryMessagingEventNotifications(): boolean;

	static disconnectSocket(conversationQuery: ConversationParamProtocol): void;

	static downloadFileWithDialogFileCompletionFailure(dialog: LPDialogEntity, file: LPFileEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static getAllConsumersID(): NSArray<string>;

	static getAssignedAgent(conversationQuery: ConversationParamProtocol): LPUser;

	static getLatestUnreadMessages(): NSArray<LPMessageEntity>;

	static getLoadingStructuredContentCustomItems(): NSArray<LPLinkPreviewEntity>;

	static getLoadingStructuredContentMessages(): NSArray<LPMessageEntity>;

	static getPreparedSecureFormWebViewWithForm(form: LPFormEntity): WKWebView;

	static getUnreadMessagesCountWithBrandAuthenticationParamsCompletionFailure(brand: LPBrandEntity, authenticationParams: LPAuthenticationParams, completion: (p1: number) => void, failure: (p1: NSError) => void): void;

	static hasActiveController(brandID: string): boolean;

	static hasSecureFormAlreadyLoadedInWebViewWithForm(form: LPFormEntity): boolean;

	static initializeAMS(): boolean;

	static isBrandReady(brandID: string): boolean;

	static isFetchingHistoryMessages(): boolean;

	static isRegisteredForPushNotificationsAuthenticationParamsCompletionFailure(conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams, completion: (p1: boolean) => void, failure: (p1: NSError) => void): void;

	static isUrgent(conversationQuery: ConversationParamProtocol): boolean;

	static linkPreviewUrlFrom(messageContent: string): NSURL;

	static loadLastSavedQuickReplyItem(): QuickReplyItem;

	static new(): LPAMSFacade; // inherited from NSObject

	static prepareSecureFormWithFormCompletionFailure(form: LPFormEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static reconnectToSocketAuthenticationParamsReadyCompletion(conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams, readyCompletion: () => void): void;

	static registerPusherWithLoginFlowWithBrandAuthenticationParams(brand: LPBrandEntity, authenticationParams: LPAuthenticationParams): void;

	static removeDelegate(delegate: LPAMSFacadeDelegate): void;

	static requestDownloadURLWithDialogFileCompletionFailure(dialog: LPDialogEntity, file: LPFileEntity, completion: (p1: any) => void, failure: (p1: NSError) => void): void;

	static requestUploadURLWithDialogFileSizeFileExtentionCompletionFailure(dialog: LPDialogEntity, fileSize: number, fileExtention: string, completion: (p1: RequestSwiftURL) => void, failure: (p1: NSError) => void): void;

	static requestUrgentResponseUrgent(conversation: LPConversationEntity, urgent: boolean): boolean;

	static resolveConversation(conversation: LPConversationEntity): void;

	static resolveConversationCompletion(conversation: LPConversationEntity, completion: () => void): void;

	static resolveConversationForConversationQuery(conversationQuery: ConversationParamProtocol): void;

	static resolveConversationForConversationQueryCompletion(conversationQuery: ConversationParamProtocol, completion: () => void): void;

	static retrieveNewMessagesForConversationCompletionFailure(conversation: LPConversationEntity, completion: (p1: NSArray<LPMessageEntity>) => void, failure: (p1: NSError) => void): void;

	static saveQuickReplyItemWithQuickReplyItem(quickReplyItem: QuickReplyItem): void;

	static sendCSATCsat(conversation: LPConversationEntity, csat: CSATModel): void;

	static sendMessageInDialogMessageCompletionFailure(dialog: LPDialogEntity, message: LPMessageEntity, completion: (p1: LPMessageEntity) => void, failure: (p1: NSError) => void): void;

	static sendMessageInDialogTextMetadataCompletionFailure(dialog: LPDialogEntity, text: string, metadata: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], completion: (p1: LPMessageEntity) => void, failure: (p1: NSError) => void): void;

	static setAgentStateAgentIDChannelsAvailabilityDescriptionCompletionFailure(conversationQuery: ConversationParamProtocol, agentID: string, channels: NSArray<string> | string[], availability: string, description: string, completion: (p1: any) => void, failure: (p1: NSError) => void): void;

	static setDelegate(delegate: LPAMSFacadeDelegate): void;

	static subscribeAgentStateAgentIDCompletionFailure(conversationQuery: ConversationParamProtocol, agentID: string, completion: (p1: any) => void, failure: (p1: NSError) => void): void;

	static subscribeConversationNotificationsUserIDSocketTypeCompletionFailure(brandID: string, userID: string, socketType: SocketType, completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static subscribeRoutingTasksAgentIDCompletionFailure(brandID: string, agentID: string, completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static unsubscribeConversationNotificationsSubscriptionID(brandID: string, subscriptionID: string): void;

	static updateAMSStateState(conversationQuery: ConversationParamProtocol, state: AMSState): void;

	static uploadFileFromDiskWithMessageDialogCompletionFailure(message: LPMessageEntity, dialog: LPDialogEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static uploadFileFromInfoWithUploadInfoDialogCompletionFailure(uploadInfo: UploadInfo, dialog: LPDialogEntity, completion: () => void, failure: (p1: NSError) => void): void;
}

interface LPAMSFacadeDelegate {

	brandAccountID?(): string;

	chatStateDidChangeStateUserID?(dialog: LPDialogEntity, state: string, userID: string): void;

	conversationDidResolveIsAgentSideEndTime?(conversation: LPConversationEntity, isAgentSide: boolean, endTime: Date): void;

	conversationInitializedOnAMS?(conversation: LPConversationEntity): void;

	conversationWasDeleted?(conversation: LPConversationEntity): void;

	conversationWasSentToQueueRemotely?(conversation: LPConversationEntity): void;

	csatScoreSubmissionDidFailError?(conversation: LPConversationEntity, error: NSError): void;

	csatScoreSubmissionDidFinishCsat?(conversation: LPConversationEntity, csat: CSATModel): void;

	didAcceptRingWithConversationConnection?(conversation: LPConversationEntity, connection: LPConnection): void;

	didReceiveMessagesMessages?(dialog: LPDialogEntity, messages: NSArray<LPMessageEntity> | LPMessageEntity[]): void;

	didReceiveMessagingEvent?(): void;

	didReceiveNoPendingRingsNotification?(): void;

	didReceiveRingUpdateRing?(conversationID: string, ring: Ring): void;

	didReceiveTTRUpdateTtr?(conversation: LPConversationEntity, ttr: TTRModel): void;

	didSendMessagesMessagesIsFromConversationHandler?(dialog: LPDialogEntity, messages: NSArray<LPMessageEntity> | LPMessageEntity[], isFromConversationHandler: boolean): void;

	didUpdateUserProfileUserID?(conversation: LPConversationEntity, userID: string): void;

	getCurrentConversationQuery?(): ConversationParamProtocol;

	historyCleared?(): void;

	isConversationViewControllerPresentedWithForceTopConversation?(forceTopConversation: boolean): boolean;

	messagesStatusDidChangeMessages?(dialog: LPDialogEntity, messages: NSArray<LPMessageEntity> | LPMessageEntity[]): void;

	newConversationCreated?(conversation: LPConversationEntity): void;

	resolveConvesationDidFailError?(conversation: LPConversationEntity, error: NSError): void;

	resolveConvesationRequestDidFinish?(conversation: LPConversationEntity): void;

	retrieveHistoryEngagementHistoryDidProgressWithConversationQueryCompletedTotal?(conversationQuery: ConversationParamProtocol, completed: number, total: number): void;

	retrieveHistoryMessagingEventNotificationStateDidChangeWithConversationQueryIsFinishedFetchedConversationCountFetchedMessagesIncreaseNumberOfPresentedConversationsBy?(conversationQuery: ConversationParamProtocol, isFinished: boolean, fetchedConversationCount: number, fetchedMessages: NSArray<LPMessageEntity> | LPMessageEntity[], increaseNumberOfPresentedConversationsBy: number): void;

	retrieveHistoryMessagingEventNotificationsDidProgressWithConversationQueryCompletedTotal?(conversationQuery: ConversationParamProtocol, completed: number, total: number): void;

	sdkFeatureToggledWithFeatureToggle?(feature: LPMessagingSDKFeature, toggle: boolean): void;

	urgentRequestDidFailError?(conversation: LPConversationEntity, error: NSError): void;

	urgentRequestDidFinish?(conversation: LPConversationEntity): void;

	willReceiveMessages?(): void;
}
declare var LPAMSFacadeDelegate: {

	prototype: LPAMSFacadeDelegate;
};

declare const enum SocketType {

	Consumer = 0,

	Agent = 1
}
