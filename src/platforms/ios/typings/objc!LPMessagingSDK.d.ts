
interface ConversationViewControllerAgentDelegate {

	agentDidChangeUserInputText?(text: string): void;
}
declare var ConversationViewControllerAgentDelegate: {

	prototype: ConversationViewControllerAgentDelegate;
};

declare class LPMessagingAPI extends NSObject {

	static acceptRingAgentTokenCompletionFailure(ring: Ring, agentToken: string, completion: (p1: LPConversationEntity) => void, failure: (p1: NSError) => void): void;

	static addContentToMessageWithText(text: string): void;

	static agentNameUIRepresentation(conversation: LPConversationEntity): string;

	static agentRequestConversationContextTtrDefNameChannelTypeConsumerIdCompletionFailure(conversationQuery: ConversationParamProtocol, context: NSDictionary<string, string>, ttrDefName: string, channelType: string, consumerId: string, completion: () => void, failure: (p1: NSError) => void): void;

	static alloc(): LPMessagingAPI; // inherited from NSObject

	static attachMyUserCompletion(completion: (p1: string) => void): void;

	static backToQueueConversationCompletionFailure(userID: string, conversation: LPConversationEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static changeUrgentStateIsUrgent(conversationQuery: ConversationParamProtocol, isUrgent: boolean): void;

	static checkActiveConversation(conversationQuery: ConversationParamProtocol): boolean;

	static clearConversationFromDB(conversation: LPConversationEntity): boolean;

	static clearHistory(conversationQuery: ConversationParamProtocol): boolean;

	static clearManagers(): void;

	static closeAllSockets(): void;

	static connectToSocketReadyCompletion(conversationQuery: ConversationParamProtocol, readyCompletion: () => void): void;

	static createConversation(brand: LPBrandEntity): LPConversationEntity;

	static createMessageMaskedLocalMessageIsRealTimeMasking(conversation: LPConversationEntity, isRealTimeMasking: boolean): LPMessageEntity;

	static createResolveLocalMessageEndTime(dialog: LPDialogEntity, endTime: Date): LPMessageEntity;

	static createWelcomeLocalMessageOverrideTime(dialog: LPDialogEntity, overrideTime: Date): LPMessageEntity;

	static createWelcomeLocalMessageWelcomeMessageOverrideTime(dialog: LPDialogEntity, welcomeMessage: LPWelcomeMessage, overrideTime: Date): LPMessageEntity;

	static deleteAllFilesFromDiskWithCompletionFailure(completion: () => void, failure: (p1: NSError) => void): void;

	static deleteFileFromDiskWithFile(file: LPFileEntity): void;

	static deleteOldConversations(): void;

	static didFetchHistoryMessagingEventNotifications(): boolean;

	static disconnectSocket(conversationQuery: ConversationParamProtocol): void;

	static downloadFileWithDialogFileCompletionFailure(dialog: LPDialogEntity, file: LPFileEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static getAllCSDSDomainsCompletionFailure(accountID: string, completion: (p1: NSArray<NSDictionary<string, any>>) => void, failure: (p1: NSError) => void): void;

	static getAllClosedConversations(olderThanDate: Date): NSArray<LPConversationEntity>;

	static getAllConsumersID(): NSArray<string>;

	static getAssignedAgent(conversationQuery: ConversationParamProtocol): LPUser;

	static getBase64BlankThumbnailStringWithCompletionFailure(completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static getBase64ThumbnailStringWithFileCompletionFailure(file: LPFileEntity, completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static getCSDSDomainServiceNameCompletionFailure(accountID: string, serviceName: string, completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static getConsumerIdsRelatedToMessagesThatContains(text: string): NSArray<string>;

	static getConversationBrandQueryCampaignInfo(brandID: string, campaignInfo: LPCampaignInfo): ConversationParamProtocol;

	static getConversationConsumerQueryBrandIDAgentToken(consumerID: string, brandID: string, agentToken: string): ConversationParamProtocol;

	static getConversationsSortedByDateConversationHistoryControlParam(query: ConversationParamProtocol, conversationHistoryControlParam: LPConversationHistoryControlParam): NSArray<LPConversationEntity>;

	static getFileFromFileEntityWithFileEntityCompletionFailure(fileEntity: LPFileEntity, completion: (p1: LPFileEntity) => void, failure: (p1: NSError) => void): void;

	static getImageByURL(url: string): UIImage;

	static getInactiveUserInteractionTimeInterval(conversationQuery: ConversationParamProtocol): number;

	static getLoadingStructuredContentCustomItems(): NSArray<LPLinkPreviewEntity>;

	static getLoadingStructuredContentMessages(): NSArray<LPMessageEntity>;

	static getOpenConversation(): LPConversationEntity;

	static getOrCreateBrandByAccountID(accountID: string): LPBrandEntity;

	static getPhotoFromFileWithFileCompletionFailure(file: LPFileEntity, completion: (p1: UIImage) => void, failure: (p1: NSError) => void): void;

	static getSDKVersion(): string;

	static getSocket(brandID: string): LPWebSocket;

	static getThumbnailFromFileWithFileCompletionFailure(file: LPFileEntity, completion: (p1: UIImage) => void, failure: (p1: NSError) => void): void;

	static getUnreadMessagesCountCompletionFailure(conversationQuery: ConversationParamProtocol, completion: (p1: number) => void, failure: (p1: NSError) => void): void;

	static getUnreadMessagesCountWithBrandIDCompletionFailure(brandID: string, completion: (p1: number) => void, failure: (p1: NSError) => void): void;

	static getUserFromDatabaseWithUserID(userID: string): LPUserEntity;

	static handleMaxNumberOfSavedFilesOnDisk(): void;

	static hasActiveController(brandID: string): boolean;

	static initializeAPI(): boolean;

	static isBrandReady(brandID: string): boolean;

	static isFetchingHistoryMessages(): boolean;

	static isUrgent(conversationQuery: ConversationParamProtocol): boolean;

	static new(): LPMessagingAPI; // inherited from NSObject

	static openAllSockets(): void;

	static openSocket(webSocket: LPWebSocket): void;

	static prepareFileWithUploadInfoFileReadyCompletionFailure(uploadInfo: UploadInfo, fileReadyCompletion: (p1: LPFileEntity) => void, failure: (p1: NSError) => void): void;

	static prepareSecureFormWithFormCompletionFailure(form: LPFormEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static reconnectToSocketAuthenticationParamsReadyCompletion(conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams, readyCompletion: () => void): void;

	static refreshUserProfileWithBrandIDUser(brandID: string, user: LPUserEntity): void;

	static registerPushNotificationsWithTokenNotificationDelegateAlternateBundleID(token: NSData, notificationDelegate: LPMessagingSDKNotificationDelegate, alternateBundleID: string): void;

	static registerPusher(brand: LPBrandEntity): void;

	static removeDelegate(delegate: LPMessagingAPIDelegate): void;

	static requestDownloadURLWithDialogFileCompletionFailure(dialog: LPDialogEntity, file: LPFileEntity, completion: (p1: any) => void, failure: (p1: NSError) => void): void;

	static requestUploadURLWithDialogFileSizeFileExtentionCompletionFailure(dialog: LPDialogEntity, fileSize: number, fileExtention: string, completion: (p1: RequestSwiftURL) => void, failure: (p1: NSError) => void): void;

	static requestUrgentResponseUrgent(conversation: LPConversationEntity, urgent: boolean): boolean;

	static resetConversationScreenSavedScrollPosition(): void;

	static resolveConversation(conversation: LPConversationEntity): void;

	static resolveConversationForConversationQuery(conversationQuery: ConversationParamProtocol): void;

	static retrieveNewMessagesForConversationCompletionFailure(conversation: LPConversationEntity, completion: (p1: NSArray<LPMessageEntity>) => void, failure: (p1: NSError) => void): void;

	static sendCSATCsat(conversation: LPConversationEntity, csat: CSATModel): void;

	static sendMessageInDialogMessageCompletionFailure(dialog: LPDialogEntity, message: LPMessageEntity, completion: (p1: LPMessageEntity) => void, failure: (p1: NSError) => void): void;

	static sendMessageInDialogTextCompletionFailure(dialog: LPDialogEntity, text: string, completion: (p1: LPMessageEntity) => void, failure: (p1: NSError) => void): void;

	static setAgentStateAgentIDChannelsAvailabilityDescriptionCompletionFailure(conversationQuery: ConversationParamProtocol, agentID: string, channels: NSArray<string> | string[], availability: string, description: string, completion: (p1: any) => void, failure: (p1: NSError) => void): void;

	static setDelegate(delegate: LPMessagingAPIDelegate): void;

	static setImageByURLUrl(image: UIImage, url: string): void;

	static setPusherTokenWithTokenAlternateBundleID(token: NSData, alternateBundleID: string): void;

	static setPusherVoipTokenWithTokenAlternateBundleID(token: NSData, alternateBundleID: string): void;

	static setUserProfileWithDetailsBrandID(lpuser: LPUser, brandID: string): void;

	static subscribeAgentStateAgentIDCompletionFailure(conversationQuery: ConversationParamProtocol, agentID: string, completion: (p1: any) => void, failure: (p1: NSError) => void): void;

	static subscribeConversationNotificationsUserIDSocketTypeCompletionFailure(brandID: string, userID: string, socketType: SocketType, completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static subscribeRoutingTasksAgentIDCompletionFailure(brandID: string, agentID: string, completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static unregisterPusherCompletionFailure(brand: LPBrandEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static unsubscribeConversationNotificationsSubscriptionID(brandID: string, subscriptionID: string): void;

	static updateAMSStateState(conversationQuery: ConversationParamProtocol, state: AMSState): void;

	static uploadFileFromDiskWithMessageDialogCompletionFailure(message: LPMessageEntity, dialog: LPDialogEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static uploadFileFromInfoWithUploadInfoDialogCompletionFailure(uploadInfo: UploadInfo, dialog: LPDialogEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static uploadFileWithFileUploadRelativePathTempURLSigTempURLExpiryCompletionFailure(file: LPFileEntity, uploadRelativePath: string, tempURLSig: string, tempURLExpiry: string, completion: (p1: LPFileEntity) => void, failure: (p1: NSError) => void): void;

	static readonly isNetworkReachable: boolean;

	getThumbnailForFileTypeWithFile(file: LPFileEntity): UIImage;
}

interface LPMessagingAPIDelegate extends LPAMSFacadeDelegate {
}
declare var LPMessagingAPIDelegate: {

	prototype: LPMessagingAPIDelegate;
};

declare class LPMessagingSDK extends NSObject {

	static alloc(): LPMessagingSDK; // inherited from NSObject

	static getUnreadMessagesCountCompletionFailure(conversationQuery: ConversationParamProtocol, completion: (p1: number) => void, failure: (p1: NSError) => void): void;

	static getUnreadMessagesCountWithBrandIDCompletionFailure(brandID: string, completion: (p1: number) => void, failure: (p1: NSError) => void): void;

	static new(): LPMessagingSDK; // inherited from NSObject

	static setPusherTokenWithTokenAlternateBundleID(token: NSData, alternateBundleID: string): void;

	static setPusherVoipTokenWithTokenAlternateBundleID(token: NSData, alternateBundleID: string): void;

	delegate: LPMessagingSDKdelegate;

	notificationDelegate: LPMessagingSDKNotificationDelegate;

	static readonly instance: LPMessagingSDK;

	checkActiveConversation(conversationQuery: ConversationParamProtocol): boolean;

	clearHistoryError(conversationQuery: ConversationParamProtocol): boolean;

	destruct(): void;

	dismissUrgent(conversationQuery: ConversationParamProtocol): void;

	getAllSupportedLanguages(): NSDictionary<string, string>;

	getAssignedAgent(conversationQuery: ConversationParamProtocol): LPUser;

	getConversationBrandQueryCampaignInfo(brandID: string, campaignInfo: LPCampaignInfo): ConversationParamProtocol;

	getConversationConsumerQueryBrandIDAgentToken(consumerID: string, brandID: string, agentToken: string): ConversationParamProtocol;

	getInactiveUserInteractionTimeInterval(conversationQuery: ConversationParamProtocol): number;

	getSDKVersion(): string;

	getUnreadMessagesCountAuthenticationParamsCompletionFailure(conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams, completion: (p1: number) => void, failure: (p1: NSError) => void): void;

	handlePush(userInfo: NSDictionary<any, any>): void;

	initSocketForBrandIDAgentTokenReadyCompletion(brandID: string, agentToken: string, readyCompletion: () => void): void;

	initializeMonitoringInitParamsError(brandID: string, monitoringInitParams: LPMonitoringInitParams): boolean;

	isBrandReady(brandID: string): boolean;

	isRegisteredForPushNotificationsAuthenticationParamsTokenAlternateBundleIDCompletionFailure(conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams, token: NSData, alternateBundleID: string, completion: (p1: boolean) => void, failure: (p1: NSError) => void): void;

	isUrgent(conversationQuery: ConversationParamProtocol): boolean;

	logout(): void;

	logoutWithCompletionFailure(completion: () => void, failure: (p1: NSError) => void): void;

	markAsUrgent(conversationQuery: ConversationParamProtocol): void;

	printAllLocalizedKeys(): void;

	printSupportedLanguages(): void;

	reconnectAuthenticationCode(conversationQuery: ConversationParamProtocol, authenticationCode: string): void;

	reconnectAuthenticationParams(conversationQuery: ConversationParamProtocol, authenticationParams: LPAuthenticationParams): void;

	registerPushNotificationsWithTokenNotificationDelegateAlternateBundleIDAuthenticationParams(token: NSData, notificationDelegate: LPMessagingSDKNotificationDelegate, alternateBundleID: string, authenticationParams: LPAuthenticationParams): void;

	registerVoipPushNotificationsWithTokenAlternateBundleID(token: NSData, alternateBundleID: string): void;

	removeConversation(conversationQuery: ConversationParamProtocol): void;

	resolveConversation(conversationQuery: ConversationParamProtocol): void;

	setCustomButton(image: UIImage): void;

	setPushNotificationTapped(): void;

	setUserProfileBrandID(lpuser: LPUser, brandID: string): void;

	showAgentConversationWithConversationViewParams(conversationViewParams: LPConversationViewParams): ConversationViewControllerAgentDelegate;

	showConversationAuthenticationCodeContainerViewController(conversationQuery: ConversationParamProtocol, authenticationCode: string, containerViewController: UIViewController): void;

	showConversationAuthenticationParams(conversationViewParams: LPConversationViewParams, authenticationParams: LPAuthenticationParams): void;

	toggleChatActionsSender(accountID: string, sender: UIBarButtonItem): void;

	unregisterPusherWithBrandIdCompletionFailure(brandId: string, completion: () => void, failure: (p1: NSError) => void): void;
}

interface LPMessagingSDKNotificationDelegate {

	LPMessagingSDKNotificationWithCustomLocalPushNotificationView?(notification: LPNotification): UIView;

	LPMessagingSDKNotificationWithDidReceivePushNotification?(notification: LPNotification): void;

	LPMessagingSDKNotificationWithNotificationTapped?(notification: LPNotification): void;

	LPMessagingSDKNotificationWithShouldShowPushNotification?(notification: LPNotification): boolean;
}
declare var LPMessagingSDKNotificationDelegate: {

	prototype: LPMessagingSDKNotificationDelegate;
};

declare var LPMessagingSDKVersionNumber: number;

declare var LPMessagingSDKVersionString: interop.Reference<number>;

interface LPMessagingSDKdelegate {

	LPMessagingSDKActionsMenuToggled?(toggled: boolean): void;

	LPMessagingSDKAgentAvatarTapped?(agent: LPUser): void;

	LPMessagingSDKAgentDetails?(agent: LPUser): void;

	LPMessagingSDKAgentIsTypingStateChanged?(isTyping: boolean): void;

	LPMessagingSDKAuthenticationFailed(error: NSError): void;

	LPMessagingSDKCSATCustomTitleView?(brandID: string): UIView;

	LPMessagingSDKCSATScoreSubmissionDidFinishRating?(brandID: string, rating: number): void;

	LPMessagingSDKCertPinningFailed?(error: NSError): void;

	LPMessagingSDKConnectionRetriesFailed?(error: NSError): void;

	LPMessagingSDKConnectionStateChangedBrandID?(isReady: boolean, brandID: string): void;

	LPMessagingSDKConversationCSATDidLoad?(conversationID: string): void;

	LPMessagingSDKConversationCSATDismissedOnSubmittion?(conversationID: string): void;

	LPMessagingSDKConversationCSATSkipped?(conversationID: string): void;

	LPMessagingSDKConversationEnded?(conversationID: string): void;

	LPMessagingSDKConversationEndedCloseReason?(conversationID: string, closeReason: LPConversationCloseReason): void;

	LPMessagingSDKConversationStarted?(conversationID: string): void;

	LPMessagingSDKConversationViewControllerDidDismiss?(): void;

	LPMessagingSDKCustomButtonTapped?(): void;

	LPMessagingSDKError(error: NSError): void;

	LPMessagingSDKHasConnectionError?(error: string): void;

	LPMessagingSDKObseleteVersion(error: NSError): void;

	LPMessagingSDKOffHoursStateChangedBrandID?(isOffHours: boolean, brandID: string): void;

	LPMessagingSDKPushRegistrationDidFail?(error: NSError): void;

	LPMessagingSDKPushRegistrationDidFinish?(): void;

	LPMessagingSDKTokenExpired(brandID: string): void;

	LPMessagingSDKUnauthenticatedUserExpired?(): void;

	LPMessagingSDKUserDeniedPermission?(permissionType: LPPermissionTypes): void;
}
declare var LPMessagingSDKdelegate: {

	prototype: LPMessagingSDKdelegate;
};

declare class LPNotification extends NSObject {

	static alloc(): LPNotification; // inherited from NSObject

	static new(): LPNotification; // inherited from NSObject

	accountID: string;

	isRemote: boolean;

	text: string;

	readonly toString: string;

	user: LPUser;

	constructor(o: { message: LPMessageEntity; isRemote: boolean; });

	constructor(o: { text: string; firstName: string; lastName: string; uid: string; accountID: string; isRemote: boolean; });

	constructor(o: { text: string; user: LPUser; accountID: string; isRemote: boolean; });

	initWithMessageIsRemote(message: LPMessageEntity, isRemote: boolean): this;

	initWithTextFirstNameLastNameUidAccountIDIsRemote(text: string, firstName: string, lastName: string, uid: string, accountID: string, isRemote: boolean): this;

	initWithTextUserAccountIDIsRemote(text: string, user: LPUser, accountID: string, isRemote: boolean): this;
}

declare class LPRadialProgressBar extends UIView {

	static alloc(): LPRadialProgressBar; // inherited from NSObject

	static appearance(): LPRadialProgressBar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): LPRadialProgressBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): LPRadialProgressBar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LPRadialProgressBar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): LPRadialProgressBar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): LPRadialProgressBar; // inherited from UIAppearance

	static new(): LPRadialProgressBar; // inherited from NSObject
}

declare class NSBouncyView extends UIView {

	static alloc(): NSBouncyView; // inherited from NSObject

	static appearance(): NSBouncyView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): NSBouncyView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): NSBouncyView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NSBouncyView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): NSBouncyView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): NSBouncyView; // inherited from UIAppearance

	static new(): NSBouncyView; // inherited from NSObject

	setColorWithColor(color: UIColor): void;

	setView(view: UIView): void;

	toggleVisibilityWithShowWillStartDidCompleteDidFail(show: boolean, willStart: () => void, didComplete: () => void, didFail: () => void): void;
}

declare class RemoteUserIsTypingView extends UIView {

	static alloc(): RemoteUserIsTypingView; // inherited from NSObject

	static appearance(): RemoteUserIsTypingView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): RemoteUserIsTypingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): RemoteUserIsTypingView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RemoteUserIsTypingView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): RemoteUserIsTypingView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): RemoteUserIsTypingView; // inherited from UIAppearance

	static new(): RemoteUserIsTypingView; // inherited from NSObject
}

declare class Toast extends UIView {

	static alloc(): Toast; // inherited from NSObject

	static appearance(): Toast; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): Toast; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): Toast; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Toast; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): Toast; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Toast; // inherited from UIAppearance

	static new(): Toast; // inherited from NSObject

	didDismiss: () => void;

	didShow: () => void;

	didTap: () => void;

	name: string;

	showAboveStatusBar: boolean;

	changeTextWithText(text: string): void;
}

declare class Toaster extends UIView {

	static alloc(): Toaster; // inherited from NSObject

	static appearance(): Toaster; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): Toaster; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): Toaster; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Toaster; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): Toaster; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): Toaster; // inherited from UIAppearance

	static new(): Toaster; // inherited from NSObject

	containerViewController: UIViewController;

	readonly current: Toast;

	constructor(o: { containerView: UIView; });

	constructor(o: { containerViewController: UIViewController; });

	addWithToast(toast: Toast): void;

	dismissAll(): void;

	dismissToastByName(name: string): void;

	dismissWithToast(toast: Toast): void;

	initWithContainerView(containerView: UIView): this;

	initWithContainerViewController(containerViewController: UIViewController): this;
}

interface UIAdapterDelegate {

	executeActionAtIndexIndexConversationCompletion?(viewController: UIViewController, index: number, conversation: LPConversationEntity, completion: () => void): void;

	getDefaultRecepientAvatarImage?(conversationQuery: ConversationParamProtocol): UIImage;

	getTableViewBackgroundColor?(conversationQuery: ConversationParamProtocol): UIColor;

	getTableViewCustomGestureRecognizer?(): UIGestureRecognizer;

	sendClickedWithMessageInConversationMetadata?(message: string, inConversation: LPConversationEntity, metadata: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]): boolean;

	shouldSetUIReadOnly?(conversation: LPConversationEntity): boolean;

	textViewDidBeginEditingWithConversation?(dialog: LPDialogEntity): void;

	textViewDidEndEditingWithConversation?(dialog: LPDialogEntity): void;

	textViewShouldChangeTextInRangeReplacementTextDialog?(textView: UITextView, range: NSRange, text: string, dialog: LPDialogEntity): boolean;
}
declare var UIAdapterDelegate: {

	prototype: UIAdapterDelegate;
};
