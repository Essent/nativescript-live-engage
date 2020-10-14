
declare const enum AMSState {

	IN_PROCESS = 0,

	NETWORK_REACHABLE = 1,

	CSDS_REACHABLE = 2,

	VALID_TOKEN = 3,

	OPENING_SOCKET = 4,

	VALID_SOCKET = 5,

	VALID_USERID = 6,

	READY = 7,

	READY_WITH_DATA = 8,

	SDK_ERROR = -1,

	GENERAL_ERROR = -2,

	NETWORK_UNREACHABLE = -3,

	CSDS_UNREACHABLE = -4,

	NO_TOKEN = -5,

	CLOSING_SOCKET = -6,

	SOCKET_UNREACHABLE = -7,

	NO_USERID = -8,

	NO_SUBSCRIPTION = -9,

	CERT_PINNING_FAILED = -10
}

declare class AgentStateNotification extends GeneralResponse {

	static alloc(): AgentStateNotification; // inherited from NSObject

	static new(): AgentStateNotification; // inherited from NSObject
}

declare class BrandQuery extends NSObject implements ConversationParamProtocol {

	static alloc(): BrandQuery; // inherited from NSObject

	static new(): BrandQuery; // inherited from NSObject

	constructor(o: { brandID: string; campaignInfo: LPCampaignInfo; });

	createNewConversation(): LPConversationEntity;

	getActiveConversation(): LPConversationEntity;

	getBrandID(): string;

	getCampaignInfo(): LPCampaignInfo;

	getClosedConversations(): NSArray<LPConversationEntity>;

	getConversations(): NSArray<LPConversationEntity>;

	getLatestClosedConversations(conversationsCount: number): NSArray<LPConversationEntity>;

	getOpenConversation(): LPConversationEntity;

	getOpenDialog(): LPDialogEntity;

	getQueryProperties(): NSDictionary<string, any>;

	getQueryType(): string;

	getQueryUID(): string;

	initWithBrandIDCampaignInfo(brandID: string, campaignInfo: LPCampaignInfo): this;

	isConversationRelatedToQuery(conversation: LPConversationEntity): boolean;
}

declare function CCCalibratePBKDF(algorithm: number, passwordLen: number, saltLen: number, prf: number, derivedKeyLen: number, msec: number): number;

declare function CCCrypt(op: number, alg: number, options: number, key: interop.Pointer | interop.Reference<any>, keyLength: number, iv: interop.Pointer | interop.Reference<any>, dataIn: interop.Pointer | interop.Reference<any>, dataInLength: number, dataOut: interop.Pointer | interop.Reference<any>, dataOutAvailable: number, dataOutMoved: interop.Pointer | interop.Reference<number>): number;

declare function CCCryptorCreate(op: number, alg: number, options: number, key: interop.Pointer | interop.Reference<any>, keyLength: number, iv: interop.Pointer | interop.Reference<any>, cryptorRef: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>): number;

declare function CCCryptorCreateFromData(op: number, alg: number, options: number, key: interop.Pointer | interop.Reference<any>, keyLength: number, iv: interop.Pointer | interop.Reference<any>, data: interop.Pointer | interop.Reference<any>, dataLength: number, cryptorRef: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>, dataUsed: interop.Pointer | interop.Reference<number>): number;

declare function CCCryptorCreateWithMode(op: number, mode: number, alg: number, padding: number, iv: interop.Pointer | interop.Reference<any>, key: interop.Pointer | interop.Reference<any>, keyLength: number, tweak: interop.Pointer | interop.Reference<any>, tweakLength: number, numRounds: number, options: number, cryptorRef: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>): number;

declare function CCCryptorFinal(cryptorRef: interop.Pointer | interop.Reference<any>, dataOut: interop.Pointer | interop.Reference<any>, dataOutAvailable: number, dataOutMoved: interop.Pointer | interop.Reference<number>): number;

declare function CCCryptorGetOutputLength(cryptorRef: interop.Pointer | interop.Reference<any>, inputLength: number, final: boolean): number;

declare function CCCryptorRelease(cryptorRef: interop.Pointer | interop.Reference<any>): number;

declare function CCCryptorReset(cryptorRef: interop.Pointer | interop.Reference<any>, iv: interop.Pointer | interop.Reference<any>): number;

declare function CCCryptorUpdate(cryptorRef: interop.Pointer | interop.Reference<any>, dataIn: interop.Pointer | interop.Reference<any>, dataInLength: number, dataOut: interop.Pointer | interop.Reference<any>, dataOutAvailable: number, dataOutMoved: interop.Pointer | interop.Reference<number>): number;

declare function CCHmac(algorithm: number, key: interop.Pointer | interop.Reference<any>, keyLength: number, data: interop.Pointer | interop.Reference<any>, dataLength: number, macOut: interop.Pointer | interop.Reference<any>): void;

interface CCHmacContext {
	ctx: interop.Reference<number>;
}
declare var CCHmacContext: interop.StructType<CCHmacContext>;

declare function CCHmacFinal(ctx: interop.Pointer | interop.Reference<CCHmacContext>, macOut: interop.Pointer | interop.Reference<any>): void;

declare function CCHmacInit(ctx: interop.Pointer | interop.Reference<CCHmacContext>, algorithm: number, key: interop.Pointer | interop.Reference<any>, keyLength: number): void;

declare function CCHmacUpdate(ctx: interop.Pointer | interop.Reference<CCHmacContext>, data: interop.Pointer | interop.Reference<any>, dataLength: number): void;

declare function CCKeyDerivationPBKDF(algorithm: number, password: string | interop.Pointer | interop.Reference<any>, passwordLen: number, salt: string | interop.Pointer | interop.Reference<any>, saltLen: number, prf: number, rounds: number, derivedKey: string | interop.Pointer | interop.Reference<any>, derivedKeyLen: number): number;

declare function CCRandomGenerateBytes(bytes: interop.Pointer | interop.Reference<any>, count: number): number;

declare function CC_MD2(data: interop.Pointer | interop.Reference<any>, len: number, md: string | interop.Pointer | interop.Reference<any>): string;

interface CC_MD2_CTX {
	num: number;
	data: interop.Reference<number>;
	cksm: interop.Reference<number>;
	state: interop.Reference<number>;
}
declare var CC_MD2_CTX: interop.StructType<CC_MD2_CTX>;

declare function CC_MD2_Final(md: string | interop.Pointer | interop.Reference<any>, c: interop.Pointer | interop.Reference<CC_MD2_CTX>): number;

declare function CC_MD2_Init(c: interop.Pointer | interop.Reference<CC_MD2_CTX>): number;

declare function CC_MD2_Update(c: interop.Pointer | interop.Reference<CC_MD2_CTX>, data: interop.Pointer | interop.Reference<any>, len: number): number;

declare function CC_MD4(data: interop.Pointer | interop.Reference<any>, len: number, md: string | interop.Pointer | interop.Reference<any>): string;

interface CC_MD4_CTX {
	A: number;
	B: number;
	C: number;
	D: number;
	Nl: number;
	Nh: number;
	data: interop.Reference<number>;
	num: number;
}
declare var CC_MD4_CTX: interop.StructType<CC_MD4_CTX>;

declare function CC_MD4_Final(md: string | interop.Pointer | interop.Reference<any>, c: interop.Pointer | interop.Reference<CC_MD4_CTX>): number;

declare function CC_MD4_Init(c: interop.Pointer | interop.Reference<CC_MD4_CTX>): number;

declare function CC_MD4_Update(c: interop.Pointer | interop.Reference<CC_MD4_CTX>, data: interop.Pointer | interop.Reference<any>, len: number): number;

declare function CC_MD5(data: interop.Pointer | interop.Reference<any>, len: number, md: string | interop.Pointer | interop.Reference<any>): string;

interface CC_MD5_CTX {
	A: number;
	B: number;
	C: number;
	D: number;
	Nl: number;
	Nh: number;
	data: interop.Reference<number>;
	num: number;
}
declare var CC_MD5_CTX: interop.StructType<CC_MD5_CTX>;

declare function CC_MD5_Final(md: string | interop.Pointer | interop.Reference<any>, c: interop.Pointer | interop.Reference<CC_MD5_CTX>): number;

declare function CC_MD5_Init(c: interop.Pointer | interop.Reference<CC_MD5_CTX>): number;

declare function CC_MD5_Update(c: interop.Pointer | interop.Reference<CC_MD5_CTX>, data: interop.Pointer | interop.Reference<any>, len: number): number;

declare function CC_SHA1(data: interop.Pointer | interop.Reference<any>, len: number, md: string | interop.Pointer | interop.Reference<any>): string;

interface CC_SHA1_CTX {
	h0: number;
	h1: number;
	h2: number;
	h3: number;
	h4: number;
	Nl: number;
	Nh: number;
	data: interop.Reference<number>;
	num: number;
}
declare var CC_SHA1_CTX: interop.StructType<CC_SHA1_CTX>;

declare function CC_SHA1_Final(md: string | interop.Pointer | interop.Reference<any>, c: interop.Pointer | interop.Reference<CC_SHA1_CTX>): number;

declare function CC_SHA1_Init(c: interop.Pointer | interop.Reference<CC_SHA1_CTX>): number;

declare function CC_SHA1_Update(c: interop.Pointer | interop.Reference<CC_SHA1_CTX>, data: interop.Pointer | interop.Reference<any>, len: number): number;

declare function CC_SHA224(data: interop.Pointer | interop.Reference<any>, len: number, md: string | interop.Pointer | interop.Reference<any>): string;

declare function CC_SHA224_Final(md: string | interop.Pointer | interop.Reference<any>, c: interop.Pointer | interop.Reference<CC_SHA256_CTX>): number;

declare function CC_SHA224_Init(c: interop.Pointer | interop.Reference<CC_SHA256_CTX>): number;

declare function CC_SHA224_Update(c: interop.Pointer | interop.Reference<CC_SHA256_CTX>, data: interop.Pointer | interop.Reference<any>, len: number): number;

declare function CC_SHA256(data: interop.Pointer | interop.Reference<any>, len: number, md: string | interop.Pointer | interop.Reference<any>): string;

interface CC_SHA256_CTX {
	count: interop.Reference<number>;
	hash: interop.Reference<number>;
	wbuf: interop.Reference<number>;
}
declare var CC_SHA256_CTX: interop.StructType<CC_SHA256_CTX>;

declare function CC_SHA256_Final(md: string | interop.Pointer | interop.Reference<any>, c: interop.Pointer | interop.Reference<CC_SHA256_CTX>): number;

declare function CC_SHA256_Init(c: interop.Pointer | interop.Reference<CC_SHA256_CTX>): number;

declare function CC_SHA256_Update(c: interop.Pointer | interop.Reference<CC_SHA256_CTX>, data: interop.Pointer | interop.Reference<any>, len: number): number;

declare function CC_SHA384(data: interop.Pointer | interop.Reference<any>, len: number, md: string | interop.Pointer | interop.Reference<any>): string;

declare function CC_SHA384_Final(md: string | interop.Pointer | interop.Reference<any>, c: interop.Pointer | interop.Reference<CC_SHA512_CTX>): number;

declare function CC_SHA384_Init(c: interop.Pointer | interop.Reference<CC_SHA512_CTX>): number;

declare function CC_SHA384_Update(c: interop.Pointer | interop.Reference<CC_SHA512_CTX>, data: interop.Pointer | interop.Reference<any>, len: number): number;

declare function CC_SHA512(data: interop.Pointer | interop.Reference<any>, len: number, md: string | interop.Pointer | interop.Reference<any>): string;

interface CC_SHA512_CTX {
	count: interop.Reference<number>;
	hash: interop.Reference<number>;
	wbuf: interop.Reference<number>;
}
declare var CC_SHA512_CTX: interop.StructType<CC_SHA512_CTX>;

declare function CC_SHA512_Final(md: string | interop.Pointer | interop.Reference<any>, c: interop.Pointer | interop.Reference<CC_SHA512_CTX>): number;

declare function CC_SHA512_Init(c: interop.Pointer | interop.Reference<CC_SHA512_CTX>): number;

declare function CC_SHA512_Update(c: interop.Pointer | interop.Reference<CC_SHA512_CTX>, data: interop.Pointer | interop.Reference<any>, len: number): number;

declare class CSATModel extends NSObject {

	static alloc(): CSATModel; // inherited from NSObject

	static new(): CSATModel; // inherited from NSObject

	skipped: boolean;
}

declare const enum CheckmarksState {

	SentOnly = 1,

	SentAndAccepted = 2,

	All = 3
}

declare class ConsumerQuery extends BrandQuery {

	static alloc(): ConsumerQuery; // inherited from NSObject

	static new(): ConsumerQuery; // inherited from NSObject

	constructor(o: { consumerID: string; brandID: string; agentToken: string; });

	initWithConsumerIDBrandIDAgentToken(consumerID: string, brandID: string, agentToken: string): this;
}

declare class ConversationChangeNotification extends GeneralResponse {

	static alloc(): ConversationChangeNotification; // inherited from NSObject

	static new(): ConversationChangeNotification; // inherited from NSObject
}

interface ConversationParamProtocol {

	createNewConversation(): LPConversationEntity;

	getActiveConversation(): LPConversationEntity;

	getBrandID(): string;

	getClosedConversations(): NSArray<LPConversationEntity>;

	getConversations(): NSArray<LPConversationEntity>;

	getConversations(predicate: NSPredicate): NSArray<LPConversationEntity>;

	getLatestClosedConversations(conversationsCount: number): NSArray<LPConversationEntity>;

	getOpenConversation(): LPConversationEntity;

	getOpenDialog(): LPDialogEntity;

	getQueryProperties(): NSDictionary<string, any>;

	getQueryType(): string;

	getQueryUID(): string;

	isConversationRelatedToQuery(conversation: LPConversationEntity): boolean;
}
declare var ConversationParamProtocol: {

	prototype: ConversationParamProtocol;
};

declare class EngagementHistoryConsumerMessagesResponse extends GeneralResponse {

	static alloc(): EngagementHistoryConsumerMessagesResponse; // inherited from NSObject

	static new(): EngagementHistoryConsumerMessagesResponse; // inherited from NSObject

	brandID: string;

	ownerConversationID: string;
}

declare class EngagementHistoryRequest extends NSObject {

	static alloc(): EngagementHistoryRequest; // inherited from NSObject

	static new(): EngagementHistoryRequest; // inherited from NSObject

	agentBearer: string;

	brandID: string;

	consumerID: string;

	conversation: LPConversationEntity;

	conversationsStatus: NSArray<string>;

	jwt: string;

	searchKeyword: string;

	sortKeyword: string;

	url: string;
}

declare class ErrorResponse extends GeneralResponse {

	static alloc(): ErrorResponse; // inherited from NSObject

	static new(): ErrorResponse; // inherited from NSObject
}

declare class ExConversationChangeNotification extends GeneralResponse {

	static alloc(): ExConversationChangeNotification; // inherited from NSObject

	static new(): ExConversationChangeNotification; // inherited from NSObject
}

interface GeneralManagerProtocol {

	clearManager(): void;
}
declare var GeneralManagerProtocol: {

	prototype: GeneralManagerProtocol;
};

declare class GeneralResponse extends NSObject {

	static alloc(): GeneralResponse; // inherited from NSObject

	static new(): GeneralResponse; // inherited from NSObject

	kind: string;

	reqId: string;

	readonly responseDescription: string;

	type: string;

	constructor(o: { jsonDict: NSDictionary<string, any>; });

	initWithJsonDict(jsonDict: NSDictionary<string, any>): this;
}

declare class GenericSubscribeResponse extends SubscribeExConversations {

	static alloc(): GenericSubscribeResponse; // inherited from NSObject

	static new(): GenericSubscribeResponse; // inherited from NSObject
}

declare class GetBrandProfile extends GeneralResponse {

	static alloc(): GetBrandProfile; // inherited from NSObject

	static new(): GetBrandProfile; // inherited from NSObject
}

declare class GetClock extends GeneralResponse {

	static alloc(): GetClock; // inherited from NSObject

	static new(): GetClock; // inherited from NSObject
}

declare class GetUserProfile extends GeneralResponse {

	static alloc(): GetUserProfile; // inherited from NSObject

	static new(): GetUserProfile; // inherited from NSObject

	constructor(o: { acCdnDictionary: NSDictionary<string, any>; });

	initWithAcCdnDictionary(acCdnDictionary: NSDictionary<string, any>): this;
}

declare var InfraVersionNumber: number;

declare var InfraVersionString: interop.Reference<number>;

declare class LPAccountEntity extends NSManagedObject {

	static alloc(): LPAccountEntity; // inherited from NSObject

	static new(): LPAccountEntity; // inherited from NSObject

	accountId: string;

	brand: LPBrandEntity;
}

declare const enum LPAccountEnviroment {

	Production = 0,

	Alpha = 1,

	Qa = 2
}

declare class LPAudioFileMetaDataContainer extends LPFileMetaDataContainer {

	static alloc(): LPAudioFileMetaDataContainer; // inherited from NSObject

	static new(): LPAudioFileMetaDataContainer; // inherited from NSObject

	audioPlayerDidFail: (p1: string, p2: NSError) => void;

	audioPlayerDidStart: (p1: string) => void;

	audioPlayerProgress: (p1: string, p2: number, p3: number) => void;

	isPlaying: boolean;

	constructor(o: { fileDuration: number; });

	initWithFileDuration(fileDuration: number): this;

	updateFrom(container: LPAudioFileMetaDataContainer): void;
}

declare class LPAuthenticationParams extends NSObject {

	static alloc(): LPAuthenticationParams; // inherited from NSObject

	static new(): LPAuthenticationParams; // inherited from NSObject

	authenticationCode: string;

	certPinningPublicKeys: NSArray<string>;

	jwt: string;

	redirectURI: string;

	type: LPAuthenticationType;

	constructor(o: { authenticationCode: string; jwt: string; redirectURI: string; certPinningPublicKeys: NSArray<string> | string[]; authenticationType: LPAuthenticationType; });

	initWithAuthenticationCodeJwtRedirectURICertPinningPublicKeysAuthenticationType(authenticationCode: string, jwt: string, redirectURI: string, certPinningPublicKeys: NSArray<string> | string[], authenticationType: LPAuthenticationType): this;
}

declare const enum LPAuthenticationType {

	Signup = 0,

	Unauthenticated = 1,

	Authenticated = 2
}

declare class LPBrandEntity extends NSManagedObject {

	static alloc(): LPBrandEntity; // inherited from NSObject

	static new(): LPBrandEntity; // inherited from NSObject

	accounts: NSSet<any>;

	brandCampaigns: NSSet<any>;

	brandConversations: NSSet<any>;

	dateJoined: Date;

	details: string;

	hidden: boolean;

	iconURL: string;

	imageURL: string;

	logoURL: string;

	name: string;

	uid: string;

	getConversations(): NSArray<LPConversationEntity>;

	getCreatedConversation(): LPConversationEntity;

	getLastMessageTimeStamp(): Date;

	isAuthenticated(): boolean;
}

declare class LPCampaignEntity extends NSManagedObject {

	static alloc(): LPCampaignEntity; // inherited from NSObject

	static new(): LPCampaignEntity; // inherited from NSObject

	image: string;

	name: string;

	ownerBrand: LPBrandEntity;

	uid: string;
}

declare class LPCampaignInfo extends NSObject {

	static alloc(): LPCampaignInfo; // inherited from NSObject

	static new(): LPCampaignInfo; // inherited from NSObject

	campaignId: number;

	contextId: string;

	engagementId: number;

	sessionId: string;

	visitorId: string;

	constructor(o: { campaignId: number; engagementId: number; contextId: string; sessionId: string; visitorId: string; });

	initWithCampaignIdEngagementIdContextIdSessionIdVisitorId(campaignId: number, engagementId: number, contextId: string, sessionId: string, visitorId: string): this;
}

declare class LPConfig extends NSObject {

	static alloc(): LPConfig; // inherited from NSObject

	static new(): LPConfig; // inherited from NSObject

	static printAllConfigurations(): void;

	static setDefaultConfiguration(value: LPConfig): void;

	accountEnvironment: LPAccountEnviroment;

	allowURLProtocolSniffing: boolean;

	announceAgentTyping: boolean;

	brandAvatarImage: UIImage;

	brandAvatarImageContentMode: UIViewContentMode;

	brandName: string;

	bubbleBottomPadding: number;

	bubbleEmailLinksRegex: string;

	bubbleLeadingPadding: number;

	bubblePhoneLinksRegex: string;

	bubbleTimestampBottomPadding: number;

	bubbleTimestampTopPadding: number;

	bubbleTopPadding: number;

	bubbleTrailingPadding: number;

	bubbleUrlLinksRegex: string;

	cameraButtonDisabledColor: UIColor;

	cameraButtonEnabledColor: UIColor;

	checkmarkColor: UIColor;

	checkmarkDistributedColor: UIColor;

	checkmarkReadColor: UIColor;

	checkmarkSentColor: UIColor;

	checkmarkVisibility: CheckmarksState;

	clientOnlyMaskingRegex: string;

	connectionStatusConnectingBackgroundColor: UIColor;

	connectionStatusConnectingTextColor: UIColor;

	connectionStatusFailedToConnectBackgroundColor: UIColor;

	connectionStatusFailedToConnectTextColor: UIColor;

	controllerBubbleTextColor: UIColor;

	conversationBackgroundColor: UIColor;

	conversationBackgroundImageContentMode: UIViewContentMode;

	conversationBackgroundLandscapeImage: UIImage;

	conversationBackgroundPortraitImage: UIImage;

	conversationEmptyStateTextColor: UIColor;

	conversationNavigationBackgroundColor: UIColor;

	conversationNavigationTitleColor: UIColor;

	conversationScrollConfiguration: LPConversationScrollConfiguration;

	conversationSeparatorBottomPadding: number;

	conversationSeparatorFontName: string;

	conversationSeparatorFontSize: string;

	conversationSeparatorTextColor: UIColor;

	conversationSeparatorTopPadding: number;

	conversationSeparatorViewBottomPadding: number;

	conversationStatusBarStyle: UIStatusBarStyle;

	country: string;

	csatAgentAvatarBackgroundColor: UIColor;

	csatAgentAvatarIconColor: UIColor;

	csatAgentViewHidden: boolean;

	csatAllTitlesTextColor: UIColor;

	csatNavigationBackgroundColor: UIColor;

	csatNavigationTitleColor: UIColor;

	csatRatingButtonSelectedColor: UIColor;

	csatResolutionButtonSelectedColor: UIColor;

	csatResolutionHidden: boolean;

	csatShowSurveyView: boolean;

	csatSkipButtonColor: UIColor;

	csatSubmitButtonBackgroundColor: UIColor;

	csatSubmitButtonCornerRadius: number;

	csatSubmitButtonTextColor: UIColor;

	csatSurveyExpirationInMinutes: number;

	csatThankYouScreenHidden: boolean;

	csatUIStatusBarStyle: UIStatusBarStyle;

	csatUIStatusBarStyleLightContent: boolean;

	csatYesNoButtonsCornerRadius: number;

	csdsDomain: string;

	customButtonDescription: string;

	customButtonIconName: string;

	customButtonImage: UIImage;

	customFontNameConversationFeed: string;

	customFontNameDateSeparator: string;

	customFontNameNonConversationFeed: string;

	customRefreshControllerAnimationSpeed: number;

	customRefreshControllerImagesArray: NSArray<UIImage>;

	dateSeparatorBackgroundColor: UIColor;

	dateSeparatorBottomPadding: number;

	dateSeparatorFontSize: string;

	dateSeparatorLineBackgroundColor: UIColor;

	dateSeparatorTextColor: UIColor;

	dateSeparatorTitleBackgroundColor: UIColor;

	dateSeparatorTopPadding: number;

	deleteClosedConversationOlderThanMonths: number;

	editTextUnderlineColor: UIColor;

	enableAudioSharing: boolean;

	enableBubblesOverlayOnLongPress: boolean;

	enableClientOnlyMasking: boolean;

	enableConversationSeparatorLine: boolean;

	enableConversationSeparatorTextMessage: boolean;

	enableEnlargeEmojies: boolean;

	enableFileSharing: boolean;

	enableLinkPreview: boolean;

	enableLpPusherService: boolean;

	enablePhotoSharing: boolean;

	enableRealTimeLinkPreview: boolean;

	enableRealTimeMasking: boolean;

	enableStructuredContent: boolean;

	enableStrucutredContent: boolean;

	enableVibrationOnMessageFromRemoteUser: boolean;

	fileCellLoaderFillColor: UIColor;

	fileCellLoaderRingBackgroundColor: UIColor;

	fileCellLoaderRingProgressColor: UIColor;

	fileSharingDOCXFileThumbnailimage: UIImage;

	fileSharingFromAgent: boolean;

	fileSharingFromConsumer: boolean;

	fileSharingMenuFileImage: UIImage;

	fileSharingPDFFileThumbnailimage: UIImage;

	fileSharingPPTXFileThumbnailimage: UIImage;

	fileSharingUniversalFileThumbnailimage: UIImage;

	fileSharingXLSXFileThumbnailimage: UIImage;

	inputTextViewContainerBackgroundColor: UIColor;

	inputTextViewCornerRadius: number;

	inputTextViewMaxHeight: number;

	inputTextViewTopBorderColor: UIColor;

	isReadReceiptTextMode: boolean;

	isSendMessageButtonInTextMode: boolean;

	language: LPLanguage;

	linkPreviewBackgroundColor: UIColor;

	linkPreviewBorderColor: UIColor;

	linkPreviewBorderWidth: number;

	linkPreviewDescriptionTextColor: UIColor;

	linkPreviewSiteNameTextColor: UIColor;

	linkPreviewTitleTextColor: UIColor;

	loadingViewBackgroundColor: UIColor;

	loadingViewBlurEffect: UIBlurEffect;

	loadingViewProgressBackgroundColor: UIColor;

	loadingViewProgressTintColor: UIColor;

	loadingViewTextColor: UIColor;

	lpDateFormat: string;

	lpDateTimeFormat: string;

	lpNavigationBarLeftItemImageButton: UIImage;

	lpNavigationBarRightItemImageButton: UIImage;

	lpTagDomain: string;

	lpTimeFormat: string;

	maxNumberOfSavedAudioFilesOnDisk: number;

	maxNumberOfSavedDocumentsOnDisk: number;

	maxNumberOfSavedFilesOnDisk: number;

	maxPreviousConversationToPresent: number;

	messageStatusNumericTimestampOnly: boolean;

	modalPresentationStyle: UIModalPresentationStyle;

	notificationShowDurationInSeconds: number;

	offHoursTimeZoneName: string;

	photoSharingCloseMenuImageButton: UIImage;

	photoSharingMenuCameraImage: UIImage;

	photoSharingMenuLibraryImage: UIImage;

	photoSharingOpenMenuImageButton: UIImage;

	photosharingMenuBackgroundColor: UIColor;

	photosharingMenuButtonsBackgroundColor: UIColor;

	photosharingMenuButtonsTextColor: UIColor;

	photosharingMenuButtonsTintColor: UIColor;

	quickReplyButtonBorderWidth: number;

	quickReplyButtonHorizontalPadding: number;

	quickReplyButtonVerticalPadding: number;

	quickReplyHorizontalMargin: number;

	quickReplyVerticalMargin: number;

	readReceiptTextDistributed: string;

	readReceiptTextRead: string;

	readReceiptTextSent: string;

	realTimeMaskingRegex: string;

	recordingDurationLimit: number;

	region: LPRegionCode;

	remoteFileStateTint: UIColor;

	remoteUserAvatarBackgroundColor: UIColor;

	remoteUserAvatarIconBorderColor: UIColor;

	remoteUserAvatarIconBorderWidth: number;

	remoteUserAvatarIconColor: UIColor;

	remoteUserAvatarLeadingPadding: number;

	remoteUserAvatarTrailingPadding: number;

	remoteUserBubbleBackgroundColor: UIColor;

	remoteUserBubbleBorderColor: UIColor;

	remoteUserBubbleBorderWidth: number;

	remoteUserBubbleBottomLeftCornerRadius: number;

	remoteUserBubbleBottomRightCornerRadius: number;

	remoteUserBubbleLinkColor: UIColor;

	remoteUserBubbleLongPressOverlayAlpha: number;

	remoteUserBubbleLongPressOverlayColor: UIColor;

	remoteUserBubbleTextColor: UIColor;

	remoteUserBubbleTimestampColor: UIColor;

	remoteUserBubbleTopLeftCornerRadius: number;

	remoteUserBubbleTopRightCornerRadius: number;

	remoteUserDefaultAvatarImage: UIImage;

	remoteUserTypingTintColor: UIColor;

	retrieveAssignedAgentFromLastClosedConversation: boolean;

	scrollToBottomButtonArrowColor: UIColor;

	scrollToBottomButtonBackgroundColor: UIColor;

	scrollToBottomButtonBadgeBackgroundColor: UIColor;

	scrollToBottomButtonBadgeCornerRadius: number;

	scrollToBottomButtonBadgeTextColor: UIColor;

	scrollToBottomButtonCornerRadius: number;

	scrollToBottomButtonEnabled: boolean;

	scrollToBottomButtonMessagePreviewEnabled: boolean;

	scrollToBottomButtonMessagePreviewTextColor: UIColor;

	secureFormBackButtonColor: UIColor;

	secureFormBubbleBackgroundColor: UIColor;

	secureFormBubbleBorderColor: UIColor;

	secureFormBubbleBorderWidth: number;

	secureFormBubbleDescriptionColor: UIColor;

	secureFormBubbleFillFormButtonBackgroundColor: UIColor;

	secureFormBubbleFillFormButtonTextColor: UIColor;

	secureFormBubbleFormImageTintColor: UIColor;

	secureFormBubbleLoadingIndicatorColor: UIColor;

	secureFormBubbleTitleColor: UIColor;

	secureFormCustomFontName: string;

	secureFormHideLogo: boolean;

	secureFormNavigationBackgroundColor: UIColor;

	secureFormNavigationTitleColor: UIColor;

	secureFormUIStatusBarStyle: UIStatusBarStyle;

	secureFormUIStatusBarStyleLightContent: boolean;

	sendButtonDisabledColor: UIColor;

	sendButtonEnabledColor: UIColor;

	sendButtonImage: UIImage;

	sendingMessageTimeoutInMinutes: number;

	showAgentTypingInMessageBubble: boolean;

	showOffHoursBanner: boolean;

	showUrgentButtonInTTRNotification: boolean;

	structuredContentBubbleBorderColor: UIColor;

	structuredContentBubbleBorderWidth: number;

	structuredContentBubbleBottomLeftCornerRadius: number;

	structuredContentBubbleBottomRightCornerRadius: number;

	structuredContentBubbleTopLeftCornerRadius: number;

	structuredContentBubbleTopRightCornerRadius: number;

	structuredContentMapLatitudeDeltaDeltaSpan: number;

	structuredContentMapLongitudeDeltaSpan: number;

	systemBubbleTextColor: UIColor;

	toastNotificationsEnabled: boolean;

	ttrBannerBackgroundColor: UIColor;

	ttrBannerOpacityAlpha: number;

	ttrBannerTextColor: UIColor;

	ttrFirstTimeDelay: number;

	ttrShouldShow: boolean;

	ttrShouldShowTimestamp: boolean;

	ttrShowFrequencyInSeconds: number;

	ttrShowShiftBanner: boolean;

	unreadMessagesCornersRadius: number;

	unreadMessagesDividerBackgroundColor: UIColor;

	unreadMessagesDividerEnabled: boolean;

	unreadMessagesDividerTextColor: UIColor;

	urlPreviewStyle: LPUrlPreviewStyle;

	urlRealTimePreviewBackgroundColor: UIColor;

	urlRealTimePreviewBorderColor: UIColor;

	urlRealTimePreviewBorderWidth: number;

	urlRealTimePreviewDescriptionTextColor: UIColor;

	urlRealTimePreviewTitleTextColor: UIColor;

	useNonOGTagsForLinkPreview: boolean;

	userBubbleBackgroundColor: UIColor;

	userBubbleBorderColor: UIColor;

	userBubbleBorderWidth: number;

	userBubbleBottomLeftCornerRadius: number;

	userBubbleBottomRightCornerRadius: number;

	userBubbleErrorBorderColor: UIColor;

	userBubbleErrorTextColor: UIColor;

	userBubbleLinkColor: UIColor;

	userBubbleLongPressOverlayAlpha: number;

	userBubbleLongPressOverlayColor: UIColor;

	userBubbleSendStatusTextColor: UIColor;

	userBubbleTextColor: UIColor;

	userBubbleTimestampColor: UIColor;

	userBubbleTopLeftCornerRadius: number;

	userBubbleTopRightCornerRadius: number;

	userFileStateTint: UIColor;

	userPhotoStateTint: UIColor;

	static defaultConfiguration: LPConfig;

	resetToDefaultConfiguration(): void;
}

declare class LPConnection extends NSObject {

	static alloc(): LPConnection; // inherited from NSObject

	static new(): LPConnection; // inherited from NSObject

	consumer: LPUserEntity;

	conversations: NSArray<LPConversationEntity>;

	readonly effectiveTtr: Date;

	readonly lastConversation: LPConversationEntity;

	readonly numberOfUnreadMessages: number;

	readonly titleLabel: string;

	constructor(o: { consumer: LPUserEntity; conversations: NSArray<LPConversationEntity> | LPConversationEntity[]; });

	initWithConsumerConversations(consumer: LPUserEntity, conversations: NSArray<LPConversationEntity> | LPConversationEntity[]): this;
}

declare const enum LPConversationCloseReason {

	Agent = 0,

	Consumer = 1,

	System = 2
}

declare class LPConversationEntity extends NSManagedObject {

	static alloc(): LPConversationEntity; // inherited from NSObject

	static createNewConversation(brand: LPBrandEntity): LPConversationEntity;

	static new(): LPConversationEntity; // inherited from NSObject

	readonly canShowCSAT: boolean;

	closeDate: Date;

	closeReason: string;

	consumerId: string;

	conversationDialogs: NSSet<any>;

	readonly conversationMessages: NSOrderedSet<any>;

	creationDate: Date;

	currentlyAcceptedSequences: NSMutableSet<any>;

	handlerId: string;

	isHistoryFilterEnable: boolean;

	readonly isOpen: boolean;

	readonly isResolvedAutomatically: boolean;

	readonly lastMessageObj: LPMessageEntity;

	readonly lastMessageOriginator: LPUserEntity;

	lastUpdateDate: Date;

	readonly logDescription: string;

	ownerBrand: LPBrandEntity;

	participants: NSSet<any>;

	presented: boolean;

	readonly relatedSocketID: string;

	readonly resolved: boolean;

	readonly shouldQueryMessages: boolean;

	readonly sortedMessages: NSArray<LPMessageEntity>;

	stateRaw: string;

	ttrModel: TTRModel;

	ttrTypeRaw: string;

	type: string;

	uid: string;

	readonly unreadMessages: NSArray<LPMessageEntity>;

	addConversationDialogs(values: NSSet<any>): void;

	addConversationDialogsObject(value: LPDialogEntity): void;

	getLastClosedDialog(): LPDialogEntity;

	getLastKnownMessageTimestamp(): Date;

	getLatestDialog(): LPDialogEntity;

	getMessagesPagePageSize(from: number, pageSize: number): NSArray<LPMessageEntity>;

	getOpenDialog(): LPDialogEntity;

	getOpenDialogs(): NSArray<LPDialogEntity>;

	getPendingDialog(): LPDialogEntity;

	getResolveDateString(date: Date): string;

	isActivityInIdle(): boolean;

	isCurrentlyUrgent(): boolean;

	passPendingMessagesToNewConversationWithResolvingConversation(resolvingConversation: LPConversationEntity): void;

	removeConversationDialogs(values: NSSet<any>): void;

	removeConversationDialogsObject(value: LPDialogEntity): void;

	resolve(): void;

	resolveWithPassOverToNewConversation(): LPConversationEntity;

	updateTTRModelWithReset(reset: boolean): void;
}

declare class LPConversationHistoryControlParam extends NSObject {

	static alloc(): LPConversationHistoryControlParam; // inherited from NSObject

	static new(): LPConversationHistoryControlParam; // inherited from NSObject

	historyConversationMaxDaysType: LPConversationHistoryMaxDaysDateType;

	historyConversationsMaxDays: number;

	historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay;

	readonly isEnable: boolean;

	constructor(o: { historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay; historyConversationsMaxDays: number; historyMaxDaysType: LPConversationHistoryMaxDaysDateType; });

	initWithHistoryConversationsStateToDisplayHistoryConversationsMaxDaysHistoryMaxDaysType(historyConversationsStateToDisplay: LPConversationsHistoryStateToDisplay, historyConversationsMaxDays: number, historyMaxDaysType: LPConversationHistoryMaxDaysDateType): this;
}

declare const enum LPConversationHistoryMaxDaysDateType {

	StartConversationDate = 0,

	EndConversationDate = 1
}

declare class LPConversationScrollConfiguration extends NSObject {

	static alloc(): LPConversationScrollConfiguration; // inherited from NSObject

	static new(): LPConversationScrollConfiguration; // inherited from NSObject

	backgroundToForeground: ScrollPosition;

	pushNotificationTapped: ScrollPosition;

	scrollToBottomButtonPressed: ScrollPosition;

	showConversation: ScrollPosition;
}

declare class LPConversationViewParams extends NSObject {

	static alloc(): LPConversationViewParams; // inherited from NSObject

	static new(): LPConversationViewParams; // inherited from NSObject

	containerViewController: UIViewController;

	readonly conversationHistoryControlParam: LPConversationHistoryControlParam;

	conversationQuery: ConversationParamProtocol;

	readonly isViewOnly: boolean;

	welcomeMessage: LPWelcomeMessage;

	constructor(o: { conversationQuery: ConversationParamProtocol; containerViewController: UIViewController; isViewOnly: boolean; conversationHistoryControlParam: LPConversationHistoryControlParam; });

	constructor(o: { conversationQuery: ConversationParamProtocol; containerViewController: UIViewController; isViewOnly: boolean; conversationHistoryControlParam: LPConversationHistoryControlParam; welcomeMessage: LPWelcomeMessage; });

	initWithConversationQueryContainerViewControllerIsViewOnlyConversationHistoryControlParam(conversationQuery: ConversationParamProtocol, containerViewController: UIViewController, isViewOnly: boolean, conversationHistoryControlParam: LPConversationHistoryControlParam): this;

	initWithConversationQueryContainerViewControllerIsViewOnlyConversationHistoryControlParamWelcomeMessage(conversationQuery: ConversationParamProtocol, containerViewController: UIViewController, isViewOnly: boolean, conversationHistoryControlParam: LPConversationHistoryControlParam, welcomeMessage: LPWelcomeMessage): this;
}

declare const enum LPConversationsHistoryStateToDisplay {

	Open = 0,

	Close = 1,

	All = 2
}

declare class LPCustomBoardEntity extends NSManagedObject {

	static alloc(): LPCustomBoardEntity; // inherited from NSObject

	static new(): LPCustomBoardEntity; // inherited from NSObject

	linkPreviewItems: NSOrderedSet<any>;

	ownerMessage: LPMessageEntity;

	uid: string;
}

interface LPDataManagerSDKDelegate {

	LPMessagingSDKDataEncryptionFailed(error: NSError): void;
}
declare var LPDataManagerSDKDelegate: {

	prototype: LPDataManagerSDKDelegate;
};

declare class LPDialogEntity extends NSManagedObject {

	static alloc(): LPDialogEntity; // inherited from NSObject

	static createDialogFrom(conversation: LPConversationEntity): LPDialogEntity;

	static new(): LPDialogEntity; // inherited from NSObject

	assignedAgentId: string;

	channelType: string;

	closeDate: Date;

	closeReason: string;

	creationDate: Date;

	dialogMessages: NSOrderedSet<any>;

	dialogType: string;

	handlerId: string;

	readonly isClose: boolean;

	readonly isOpen: boolean;

	readonly lastMessageObj: LPMessageEntity;

	lastReceivedSequence: number;

	lastUpdateDate: Date;

	readonly logDescription: string;

	ownerConversation: LPConversationEntity;

	participants: NSSet<any>;

	resolved: boolean;

	readonly shouldQueryMessages: boolean;

	readonly sortedMessages: NSArray<LPMessageEntity>;

	stateRaw: string;

	uid: string;

	acceptSequence(seq: number): void;

	getResolveDateString(date: Date): string;

	resolve(closeReason: string): void;
}

declare class LPFileEntity extends NSManagedObject {

	static alloc(): LPFileEntity; // inherited from NSObject

	static new(): LPFileEntity; // inherited from NSObject

	completion: () => void;

	creationDate: Date;

	downloadPercentage: number;

	downloading: (p1: number) => void;

	failure: (p1: NSError) => void;

	fileExtension: string;

	fileName: string;

	fileSize: number;

	readonly isTransferring: boolean;

	metaDataContainer: LPFileMetaDataContainer;

	ownerMessage: LPMessageEntity;

	preDownload: () => void;

	preUpload: () => void;

	relativeFilePath: string;

	relativeThumbnailPath: string;

	state: string;

	swiftRelativePath: string;

	synced: () => void;

	thumbnailImage: UIImage;

	uid: string;

	uploadPercentage: number;

	uploading: (p1: number) => void;

	clearFileBlocks(): void;

	isAudioFile(): boolean;
}

declare class LPFileMetaDataContainer extends NSObject implements NSCoding {

	static alloc(): LPFileMetaDataContainer; // inherited from NSObject

	static new(): LPFileMetaDataContainer; // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class LPFormEntity extends NSManagedObject {

	static alloc(): LPFormEntity; // inherited from NSObject

	static createNewFormWithFormIDInvitationIDTitleOwnerMessage(formID: string, invitationID: string, title: string, ownerMessage: LPMessageEntity): LPFormEntity;

	static new(): LPFormEntity; // inherited from NSObject

	formID: string;

	invitationID: string;

	readonly ownerDialog: LPDialogEntity;

	ownerMessages: NSOrderedSet<any>;

	readOTK: string;

	state: string;

	submissionID: string;

	title: string;

	url: NSURL;

	writeOTK: string;
}

declare class LPInfraFacade extends NSObject {

	static agentDetailsDidFetchWithUser(user: LPUserEntity): void;

	static alloc(): LPInfraFacade; // inherited from NSObject

	static attachMyUserCompletion(completion: (p1: string) => void): void;

	static authenticationParamsForBrandWithBrandId(brandId: string): LPAuthenticationParams;

	static clearConversationFromDB(conversation: LPConversationEntity): boolean;

	static clearHistoryIsClearOpenConversation(conversationQuery: ConversationParamProtocol, isClearOpenConversation: boolean): boolean;

	static clearInitialCreatedConversation(conversation: LPConversationEntity): boolean;

	static clearManagers(): void;

	static closeAllSockets(): void;

	static createConversation(query: ConversationParamProtocol): LPConversationEntity;

	static deleteAllFilesFromDisk(): void;

	static deleteAllFilesFromDiskWithCompletionFailure(completion: () => void, failure: (p1: NSError) => void): void;

	static deleteAllPreviewImagesFromDiskWithCompletionFailure(completion: () => void, failure: (p1: NSError) => void): void;

	static deleteFileFromDiskWithFile(file: LPFileEntity): void;

	static deleteManagedObjectContext(object: NSManagedObject, givenContext: NSManagedObjectContext): boolean;

	static deleteOldConversations(): void;

	static getActiveConversation(query: ConversationParamProtocol): LPConversationEntity;

	static getAllCSDSDomainsCompletionFailure(accountID: string, completion: (p1: NSArray<NSDictionary<string, any>>) => void, failure: (p1: NSError) => void): void;

	static getAllClosedConversations(olderThanDate: Date): NSArray<LPConversationEntity>;

	static getAppIdentifier(): string;

	static getAssignedAgent(query: ConversationParamProtocol): LPUserEntity;

	static getBase64BlankThumbnailStringWithCompletionFailure(completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static getBase64ThumbnailStringWithFileCompletionFailure(file: LPFileEntity, completion: (p1: string) => void, failure: (p1: NSError) => void): void;

	static getCacheBrandByAccountIDs(): NSArray<string>;

	static getConsumerIdsRelatedToMessagesThatContainsWithText(text: string): NSArray<string>;

	static getContext(): NSManagedObjectContext;

	static getConversationBrandQueryCampaignInfo(brandID: string, campaignInfo: LPCampaignInfo): ConversationParamProtocol;

	static getConversationByHandlerID(handlerID: string): LPConversationEntity;

	static getConversationConsumerQueryBrandIDAgentToken(consumerID: string, brandID: string, agentToken: string): ConversationParamProtocol;

	static getConversationsPredicate(query: ConversationParamProtocol, predicate: NSPredicate): NSArray<LPConversationEntity>;

	static getConversationsSortedByDateConversationHistoryControlParam(query: ConversationParamProtocol, conversationHistoryControlParam: LPConversationHistoryControlParam): NSArray<LPConversationEntity>;

	static getExpirationDateFromJWT(jwtToken: string): Date;

	static getFilefromFileEntityWithFileEntityCompletionFailure(fileEntity: LPFileEntity, completion: (p1: LPFileEntity) => void, failure: (p1: NSError) => void): void;

	static getImageByURL(url: string): UIImage;

	static getLastMessageTimeStamp(query: ConversationParamProtocol): Date;

	static getLatestClosedConversationsConversationsCount(query: ConversationParamProtocol, conversationsCount: number): NSArray<LPConversationEntity>;

	static getLogSnapshotWithLevel(level: LPLoggingLevel): NSArray<string>;

	static getLogStringBlockWithLevel(level: LPLoggingLevel): string;

	static getMessageBoardsWithUrlCompletionFailure(url: NSURL, completion: (p1: NSArray<LPCustomBoardEntity>) => void, failure: (p1: NSError) => void): void;

	static getMessagesFromConversationWithConversation(conversation: LPConversationEntity): NSArray<LPMessageEntity>;

	static getMessagesOfLatestConversation(query: ConversationParamProtocol): NSArray<LPMessageEntity>;

	static getNextConversationForQueryMessagesIfExists(query: ConversationParamProtocol): LPConversationEntity;

	static getOpenConversation(): LPConversationEntity;

	static getOrCreateBrandByAccountID(accountID: string): LPBrandEntity;

	static getPhotoFromFileWithFileCompletionFailure(file: LPFileEntity, completion: (p1: UIImage) => void, failure: (p1: NSError) => void): void;

	static getSocket(brandID: string): LPWebSocket;

	static getThumbnailForFileTypeWithFile(file: LPFileEntity): UIImage;

	static getThumbnailFromFileWithFileCompletionFailure(file: LPFileEntity, completion: (p1: UIImage) => void, failure: (p1: NSError) => void): void;

	static getUnreadMessageCountWithBrandIDCompletionFailure(brandID: string, completion: (p1: number) => void, failure: (p1: NSError) => void): void;

	static getUnreadMessagesCountCompletionFailure(conversationQuery: ConversationParamProtocol, completion: (p1: number) => void, failure: (p1: NSError) => void): void;

	static getUserDetailsFromACCDNUserIDCompletionFailure(brandID: string, userID: string, completion: (p1: LPUserEntity) => void, failure: (p1: NSError) => void): void;

	static getUserFromDatabaseWithUserID(userID: string): LPUserEntity;

	static getUserIDFromJWT(jwtToken: string): string;

	static handleMaxNumberOfSavedFilesOnDisk(): void;

	static initializeInfra(): boolean;

	static isAudioExtension(text: string): boolean;

	static isFileExtension(text: string): boolean;

	static isImageExtension(text: string): boolean;

	static isJWTExpired(jwtToken: string): boolean;

	static isRegisteredForPushNotificationsCompletionFailure(conversationQuery: ConversationParamProtocol, completion: (p1: boolean) => void, failure: (p1: NSError) => void): void;

	static keychainStringForKey(keyName: string): string;

	static migrateKeychainFor(keychainItems: NSArray<string> | string[]): NSArray<string>;

	static new(): LPInfraFacade; // inherited from NSObject

	static openAllSockets(): void;

	static openSocket(webSocket: LPWebSocket): void;

	static prepareFileWithUploadInfoFileReadyCompletionFailure(uploadInfo: UploadInfo, fileReadyCompletion: (p1: LPFileEntity) => void, failure: (p1: NSError) => void): void;

	static readAcknowledmentPusherWithBrandIDConversationsCompletionFailure(brandID: string, conversations: NSArray<LPConversationEntity> | LPConversationEntity[], completion: () => void, failure: (p1: NSError) => void): void;

	static refreshUserProfileWithBrandIDUser(brandID: string, user: LPUserEntity): void;

	static registerPusher(brand: LPBrandEntity): void;

	static removeAllKeychainObjects(): boolean;

	static removeKeychainStringForKey(keyName: string): boolean;

	static removeSockets(): void;

	static resetDatabaseWithCompletion(completion: (p1: boolean) => void): void;

	static saveContext(): void;

	static saveData(givenContext: NSManagedObjectContext): void;

	static saveDataWithGetContextFrom(obj: NSManagedObject): void;

	static setAuthenticationParamsBrandId(params: LPAuthenticationParams, brandId: string): void;

	static setDataMaskingEnabledWithEnabled(enabled: boolean): void;

	static setImageByURLUrl(image: UIImage, url: string): void;

	static setKeychainStringForKey(value: string, keyName: string): boolean;

	static setLoggingLevelWithLevel(level: LPLoggingLevel): void;

	static setUserProfileWithDetailsBrandID(lpuser: LPUser, brandID: string): void;

	static unregisterPusherCompletionFailure(brand: LPBrandEntity, completion: () => void, failure: (p1: NSError) => void): void;

	static unregisterPusherForCompletionFailure(brandId: string, isLogout: boolean, completion: () => void, failure: (p1: NSError) => void): void;

	static uploadFileWithFileUploadRelativePathTempURLSigTempURLExpiryCompletionFailure(file: LPFileEntity, uploadRelativePath: string, tempURLSig: string, tempURLExpiry: string, completion: (p1: LPFileEntity) => void, failure: (p1: NSError) => void): void;

	static readonly filesDirectoryPath: string;

	static readonly filesTemporaryDirectoryPath: string;

	static readonly isNetworkReachable: boolean;

	static readonly myAgentVepUserID: string;

	static readonly myUserID: string;
}

declare const enum LPLanguage {

	Device = 0,

	En = 1,

	En_GB = 2,

	Pt = 3,

	Pt_PT = 4,

	Fr = 5,

	Bg = 6,

	Cs = 7,

	Da = 8,

	Sr = 9,

	De = 10,

	El = 11,

	He = 12,

	He_IL = 13,

	Es = 14,

	Et = 15,

	Fi = 16,

	Hi = 17,

	Hr = 18,

	Hu = 19,

	It = 20,

	Ja = 21,

	Ko = 22,

	Lt = 23,

	Lv = 24,

	Mk = 25,

	Nb = 26,

	Nl = 27,

	Pl = 28,

	Ro = 29,

	Ru = 30,

	Sl = 31,

	Sk = 32,

	Sv = 33,

	Th = 34,

	Tr = 35,

	Uk = 36,

	Vi = 37,

	Zh = 38,

	Zh_Hans = 39,

	Zh_Hant_hk = 40
}

declare class LPLinkPreviewEntity extends NSManagedObject {

	static alloc(): LPLinkPreviewEntity; // inherited from NSObject

	static new(): LPLinkPreviewEntity; // inherited from NSObject

	captionDescription: string;

	captionSiteName: string;

	captionTitle: string;

	imageDownloadCompleted: (p1: UIImage) => void;

	imageDownloadFailed: (p1: NSError) => void;

	imageState: string;

	imageURL: string;

	ownerCustomBoard: LPCustomBoardEntity;

	relativeImagePath: string;

	type: string;

	uid: string;

	url: string;

	getImageFromCache(): UIImage;

	getImageWithCompletionFailure(completion: (p1: UIImage) => void, failure: (p1: NSError) => void): void;

	setImageWithImageRelativePath(image: UIImage, relativePath: string): void;
}

declare const enum LPLoggingLevel {

	OFF = 0,

	ERROR = 1,

	WARNING = 2,

	INFO = 3,

	DEBUG = 4,

	TRACE = 5
}

declare class LPMessageEntity extends NSManagedObject {

	static alloc(): LPMessageEntity; // inherited from NSObject

	static buildUIDSequence(dialogUID: string, sequence: number): string;

	static byDate(date: Date): NSPredicate;

	static new(): LPMessageEntity; // inherited from NSObject

	boardsBuildCompleted: (p1: NSArray<LPCustomBoardEntity>) => void;

	boardsBuildFailed: (p1: NSError) => void;

	content: string;

	contentType: string;

	customBoards: NSOrderedSet<any>;

	eventId: string;

	file: LPFileEntity;

	form: LPFormEntity;

	readonly isControllerMessage: boolean;

	readonly isLinkPreview: boolean;

	readonly isRemoteMessage: boolean;

	readonly isStructuredContent: boolean;

	readonly isSystemMessage: boolean;

	readonly isUserMessage: boolean;

	lastSendingTimestamp: Date;

	linkPreviewState: string;

	maskedContent: string;

	messageMetadata: NSArray<NSDictionary<string, any>>;

	messageType: string;

	ownerDialog: LPDialogEntity;

	ownerUser: LPUserEntity;

	presented: boolean;

	requestedToShowSendingState: Date;

	statusRaw: string;

	structuredContentItemContainer: StructuredContentItemContainer;

	timestamp: Date;

	uid: string;

	getBoardsWithCompletionFailure(completion: (p1: NSArray<LPCustomBoardEntity>) => void, failure: (p1: NSError) => void): void;
}

declare const enum LPMessagingSDKFeature {

	UserFileSharing = 0,

	AudioSharing = 1,

	AgentFileSharing = 2
}

declare class LPOperation extends NSOperation {

	static alloc(): LPOperation; // inherited from NSObject

	static new(): LPOperation; // inherited from NSObject

	executing: boolean;

	finished: boolean;

	clearOperationOnCancel(): void;

	finishOperation(): void;
}

declare const enum LPPermissionTypes {

	Location = 0,

	Contacts = 1,

	Calendars = 2,

	Reminders = 3,

	Photos = 4,

	Bluetooth = 5,

	Microphone = 6,

	SpeechRecognition = 7,

	Camera = 8,

	Health = 9,

	Homekit = 10,

	MediaLibrary = 11,

	MotionAndFitness = 12
}

declare const enum LPRegionCode {

	Device = 0,

	US = 1,

	UK = 2,

	BR = 3,

	PT = 4,

	FR = 5,

	BG = 6,

	CZ = 7,

	DK = 8,

	SP = 9,

	DE = 10,

	GR = 11,

	IL = 12,

	ES419 = 13,

	EE = 14,

	FI = 15,

	IN = 16,

	HR = 17,

	HU = 18,

	IT = 19,

	JP = 20,

	KR = 21,

	LT = 22,

	LV = 23,

	MK = 24,

	NO = 25,

	NL = 26,

	PL = 27,

	RO = 28,

	RU = 29,

	SI = 30,

	SK = 31,

	SE = 32,

	TH = 33,

	TR = 34,

	UA = 35,

	VN = 36,

	TW = 37,

	CN = 38,

	HK = 39
}

declare class LPSDKManager extends NSObject implements GeneralManagerProtocol {

	static alloc(): LPSDKManager; // inherited from NSObject

	static getBundle(): NSBundle;

	static getSDKVersion(): string;

	static isFeatureEnabledWithFeatureBrandIDUseCacheIfExistsCompletion(feature: LPMessagingSDKFeature, brandID: string, useCacheIfExists: boolean, completion: (p1: boolean) => void): void;

	static isVersionApplicableWithBrandIDConfigurationKeyUseCacheIfExistsCompletionFailure(brandID: string, configurationKey: string, useCacheIfExists: boolean, completion: (p1: boolean, p2: boolean) => void, failure: (p1: NSError) => void): void;

	static new(): LPSDKManager; // inherited from NSObject

	conversationQuery: ConversationParamProtocol;

	isWindowMode: boolean;

	static readonly instance: LPSDKManager;

	clearManager(): void;
}

declare class LPTimer extends NSObject {

	static alloc(): LPTimer; // inherited from NSObject

	static new(): LPTimer; // inherited from NSObject

	constructor(o: { duration: number; handler: (p1: number) => void; });

	initWithDurationHandler(duration: number, handler: (p1: number) => void): this;

	start(): void;
}

declare const enum LPUrlPreviewStyle {

	Slim = 0,

	Large = 1
}

declare class LPUser extends NSObject {

	static alloc(): LPUser; // inherited from NSObject

	static new(): LPUser; // inherited from NSObject

	employeeID: string;

	firstName: string;

	lastName: string;

	nickName: string;

	phoneNumber: string;

	profileImageURL: string;

	uid: string;

	constructor(o: { firstName: string; lastName: string; nickName: string; uid: string; profileImageURL: string; phoneNumber: string; employeeID: string; });

	constructor(o: { user: LPUserEntity; });

	initWithFirstNameLastNameNickNameUidProfileImageURLPhoneNumberEmployeeID(firstName: string, lastName: string, nickName: string, uid: string, profileImageURL: string, phoneNumber: string, employeeID: string): this;

	initWithUser(user: LPUserEntity): this;
}

declare class LPUserEntity extends NSManagedObject {

	static alloc(): LPUserEntity; // inherited from NSObject

	static new(): LPUserEntity; // inherited from NSObject

	bio: string;

	coverImageURL: string;

	employeeID: string;

	firstName: string;

	readonly fullName: string;

	readonly isConsumer: boolean;

	readonly isController: boolean;

	readonly isMe: boolean;

	isSaved: boolean;

	lastName: string;

	lastUpdated: Date;

	nickName: string;

	phoneNumber: string;

	profileImageURL: string;

	typeRaw: string;

	uid: string;

	userMessages: NSSet<any>;
}

declare class LPUserProfileEntity extends LPUserEntity {

	static alloc(): LPUserProfileEntity; // inherited from NSObject

	static new(): LPUserProfileEntity; // inherited from NSObject
}

declare class LPWebSocket {

	headers: NSDictionary<string, string>;

	readonly isClosed: boolean;

	readonly isOpen: boolean;

	readonly isReadyToOpen: boolean;

	requestIndex: string;

	socketURL: NSURL;

	cancelRequest(requestIndex: string): void;

	close(): void;

	flushQueue(): void;

	open(): void;
}

declare class LPWelcomeMessage extends NSObject {

	static alloc(): LPWelcomeMessage; // inherited from NSObject

	static new(): LPWelcomeMessage; // inherited from NSObject

	frequency: MessageFrequency;

	message: string;

	readonly numberOfOptionsPerRow: number;

	readonly options: NSArray<LPWelcomeMessageOption>;

	readonly quickReply: QuickReplyItem;

	constructor(o: { message: string; frequency: MessageFrequency; });

	clearOptions(): void;

	initWithMessageFrequency(message: string, frequency: MessageFrequency): this;

	setWithNumberOfOptionsPerRow(NumberOfOptionsPerRow: number): void;

	setWithOptionsError(options: NSArray<LPWelcomeMessageOption> | LPWelcomeMessageOption[]): boolean;

	shouldDisplayDefaultMessage(): boolean;
}

declare const enum LPWelcomeMessageError {

	MaximumOptions = 0,

	MaximumOptionTitleCharacters = 1,

	MinimumOptionTitleCharacters = 2
}

declare class LPWelcomeMessageOption extends NSObject {

	static alloc(): LPWelcomeMessageOption; // inherited from NSObject

	static new(): LPWelcomeMessageOption; // inherited from NSObject

	readonly displayName: string;

	readonly value: string;

	constructor(o: { value: string; displayName: string; });

	initWithValueDisplayName(value: string, displayName: string): this;
}

declare class LanguagesManager extends NSObject implements GeneralManagerProtocol {

	static alloc(): LanguagesManager; // inherited from NSObject

	static getAllSupportedLanguages(): NSDictionary<string, string>;

	static getAllSupportedRegions(): NSDictionary<string, string>;

	static getFormattedLocale(): string;

	static getPreferredCBChineseLocale(locale: string): string;

	static isLocaleSupportedByCB(locale: string): boolean;

	static new(): LanguagesManager; // inherited from NSObject

	static printAllKeys(): void;

	static printSupportedLanguages(): void;

	static printSupportedRegions(): void;

	static sdkLanguageFromLocalePreferredLanguage(): string;

	c4mLanguage: string;

	static readonly instance: LanguagesManager;

	clearManager(): void;
}

declare const enum MessageFrequency {

	FirstTimeConversation = 0,

	EveryConversation = 1
}

declare class MessagingEventNotification extends GeneralResponse {

	static alloc(): MessagingEventNotification; // inherited from NSObject

	static new(): MessagingEventNotification; // inherited from NSObject

	conversationID: string;
}

declare class MessagingServiceEvent extends NSObject {

	static alloc(): MessagingServiceEvent; // inherited from NSObject

	static new(): MessagingServiceEvent; // inherited from NSObject

	readonly dialog: LPDialogEntity;

	readonly eventId: string;

	fileMessageCompletion: (p1: LPMessageEntity) => void;

	fileMessageFailure: (p1: NSError) => void;

	readonly sender: LPUserEntity;

	constructor(o: { failure: void; });

	initWithFailure(): this;
}

declare class PublishEvent extends GeneralResponse {

	static alloc(): PublishEvent; // inherited from NSObject

	static new(): PublishEvent; // inherited from NSObject
}

declare class QuickReplyAction extends NSObject implements NSCoding {

	static alloc(): QuickReplyAction; // inherited from NSObject

	static new(): QuickReplyAction; // inherited from NSObject

	ID: string;

	type: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class QuickReplyButton extends UIButton {

	static alloc(): QuickReplyButton; // inherited from NSObject

	static appearance(): QuickReplyButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): QuickReplyButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QuickReplyButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): QuickReplyButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QuickReplyButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): QuickReplyButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): QuickReplyButton; // inherited from UIButton

	static new(): QuickReplyButton; // inherited from NSObject

	static systemButtonWithImageTargetAction(image: UIImage, target: any, action: string): QuickReplyButton; // inherited from UIButton

	details: QuickReplyButtonDetails;

	constructor(o: { quickReplyButtonDetails: QuickReplyButtonDetails; });

	initWithQuickReplyButtonDetails(quickReplyButtonDetails: QuickReplyButtonDetails): this;
}

declare class QuickReplyButtonDetails extends NSObject implements NSCoding {

	static alloc(): QuickReplyButtonDetails; // inherited from NSObject

	static new(): QuickReplyButtonDetails; // inherited from NSObject

	ID: string;

	click: QuickReplyClick;

	style: QuickReplyStyle;

	text: string;

	tooltip: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class QuickReplyClick extends NSObject implements NSCoding {

	static alloc(): QuickReplyClick; // inherited from NSObject

	static new(): QuickReplyClick; // inherited from NSObject

	ID: string;

	actions: NSArray<QuickReplyAction>;

	metadata: NSArray<NSDictionary<string, any>>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class QuickReplyItem extends NSObject implements NSCoding {

	static alloc(): QuickReplyItem; // inherited from NSObject

	static new(): QuickReplyItem; // inherited from NSObject

	buttonsDetails: NSArray<QuickReplyButtonDetails>;

	ownerMessageUID: string;

	sequence: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { sequence: number; });

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithSequence(sequence: number): this;
}

declare class QuickReplyLinkAction extends QuickReplyAction {

	static alloc(): QuickReplyLinkAction; // inherited from NSObject

	static new(): QuickReplyLinkAction; // inherited from NSObject

	deepLinkUri: string;

	uri: string;
}

declare class QuickReplyNavigateAction extends QuickReplyAction {

	static alloc(): QuickReplyNavigateAction; // inherited from NSObject

	static new(): QuickReplyNavigateAction; // inherited from NSObject

	latitude: number;

	longitude: number;
}

declare class QuickReplyPublishTextAction extends QuickReplyAction {

	static alloc(): QuickReplyPublishTextAction; // inherited from NSObject

	static new(): QuickReplyPublishTextAction; // inherited from NSObject

	text: string;
}

declare class QuickReplyStyle extends NSObject implements NSCoding {

	static alloc(): QuickReplyStyle; // inherited from NSObject

	static new(): QuickReplyStyle; // inherited from NSObject

	backgroundColor: UIColor;

	borderColor: UIColor;

	color: UIColor;

	size: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class RequestConversation extends GeneralResponse {

	static alloc(): RequestConversation; // inherited from NSObject

	static new(): RequestConversation; // inherited from NSObject
}

declare class RequestSwiftURL extends GeneralResponse {

	static alloc(): RequestSwiftURL; // inherited from NSObject

	static new(): RequestSwiftURL; // inherited from NSObject
}

declare class Ring extends NSObject {

	static alloc(): Ring; // inherited from NSObject

	static new(): Ring; // inherited from NSObject

	brandId: string;

	consumerId: string;

	conversationID: string;

	ringExpiration: Date;

	ringID: string;

	skillId: string;
}

declare class RingUpdated extends GeneralResponse {

	static alloc(): RingUpdated; // inherited from NSObject

	static new(): RingUpdated; // inherited from NSObject
}

declare class RoutingTaskNotification extends GeneralResponse {

	static alloc(): RoutingTaskNotification; // inherited from NSObject

	static new(): RoutingTaskNotification; // inherited from NSObject
}

declare const enum ScrollPosition {

	Bottom = 0,

	LastPosition = 1,

	FirstUnreadMessage = 2
}

declare class SecureFormReadOTKResponse extends GeneralResponse {

	static alloc(): SecureFormReadOTKResponse; // inherited from NSObject

	static new(): SecureFormReadOTKResponse; // inherited from NSObject
}

declare class StructuredContentAction extends NSObject implements NSCoding {

	static alloc(): StructuredContentAction; // inherited from NSObject

	static new(): StructuredContentAction; // inherited from NSObject

	ID: string;

	type: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class StructuredContentButtonItem extends StructuredContentItem {

	static alloc(): StructuredContentButtonItem; // inherited from NSObject

	static new(): StructuredContentButtonItem; // inherited from NSObject

	title: string;
}

declare class StructuredContentClick extends NSObject implements NSCoding {

	static alloc(): StructuredContentClick; // inherited from NSObject

	static new(): StructuredContentClick; // inherited from NSObject

	ID: string;

	actions: NSArray<StructuredContentAction>;

	metadata: NSArray<NSDictionary<string, any>>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class StructuredContentImageItem extends StructuredContentItem {

	static alloc(): StructuredContentImageItem; // inherited from NSObject

	static new(): StructuredContentImageItem; // inherited from NSObject

	image: UIImage;

	imageCaption: string;

	imageLoadingCompleted: (p1: UIImage) => void;

	imageLoadingFailed: (p1: NSError) => void;

	imageState: string;

	imageURL: string;

	relativeImagePath: string;
}

declare class StructuredContentItem extends NSObject implements NSCoding {

	static alloc(): StructuredContentItem; // inherited from NSObject

	static new(): StructuredContentItem; // inherited from NSObject

	ID: string;

	click: StructuredContentClick;

	requiresBorder: boolean;

	readonly structuredContentAccessibilityLabel: string;

	style: StructuredContentStyle;

	tooltip: string;

	type: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	iterateThroughWithIterationStep(iterationStep: (p1: StructuredContentItem) => void): void;
}

declare class StructuredContentItemContainer extends NSObject implements NSCoding {

	static alloc(): StructuredContentItemContainer; // inherited from NSObject

	static new(): StructuredContentItemContainer; // inherited from NSObject

	ID: string;

	item: StructuredContentItem;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { structuredContentItem: StructuredContentItem; });

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithStructuredContentItem(structuredContentItem: StructuredContentItem): this;
}

declare class StructuredContentLayoutItem extends StructuredContentItem {

	static alloc(): StructuredContentLayoutItem; // inherited from NSObject

	static new(): StructuredContentLayoutItem; // inherited from NSObject

	itemsArray: NSArray<StructuredContentItem>;
}

declare class StructuredContentLinkAction extends StructuredContentAction {

	static alloc(): StructuredContentLinkAction; // inherited from NSObject

	static new(): StructuredContentLinkAction; // inherited from NSObject

	deepLinkUri: string;

	uri: string;
}

declare class StructuredContentLinkPreviewItem extends StructuredContentItem {

	static alloc(): StructuredContentLinkPreviewItem; // inherited from NSObject

	static new(): StructuredContentLinkPreviewItem; // inherited from NSObject

	title: string;

	url: string;
}

declare class StructuredContentMapItem extends StructuredContentItem {

	static alloc(): StructuredContentMapItem; // inherited from NSObject

	static new(): StructuredContentMapItem; // inherited from NSObject

	latitude: number;

	longitude: number;

	snapShotImage: UIImage;
}

declare class StructuredContentNavigateAction extends StructuredContentAction {

	static alloc(): StructuredContentNavigateAction; // inherited from NSObject

	static new(): StructuredContentNavigateAction; // inherited from NSObject

	latitude: number;

	longitude: number;
}

declare class StructuredContentPublishTextAction extends StructuredContentAction {

	static alloc(): StructuredContentPublishTextAction; // inherited from NSObject

	static new(): StructuredContentPublishTextAction; // inherited from NSObject

	text: string;
}

declare class StructuredContentStyle extends NSObject implements NSCoding {

	static alloc(): StructuredContentStyle; // inherited from NSObject

	static new(): StructuredContentStyle; // inherited from NSObject

	backgroundColor: UIColor;

	color: UIColor;

	size: string;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class StructuredContentTextItem extends StructuredContentItem {

	static alloc(): StructuredContentTextItem; // inherited from NSObject

	static new(): StructuredContentTextItem; // inherited from NSObject

	text: string;
}

declare class SubscribeConversations extends GeneralResponse {

	static alloc(): SubscribeConversations; // inherited from NSObject

	static new(): SubscribeConversations; // inherited from NSObject
}

declare class SubscribeExConversations extends GeneralResponse {

	static alloc(): SubscribeExConversations; // inherited from NSObject

	static new(): SubscribeExConversations; // inherited from NSObject
}

declare class TTRModel extends NSObject implements NSCoding {

	static alloc(): TTRModel; // inherited from NSObject

	static new(): TTRModel; // inherited from NSObject

	delay: Date;

	effectiveTTR: Date;

	manualETTR: Date;

	ttrValue: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { effectiveTTR: Date; manualETTR: Date; ttrValue: number; delay: Date; });

	compareWithOther(other: TTRModel): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithEffectiveTTRManualETTRTtrValueDelay(effectiveTTR: Date, manualETTR: Date, ttrValue: number, delay: Date): this;
}

declare class UploadInfo extends NSObject {

	static alloc(): UploadInfo; // inherited from NSObject

	static new(): UploadInfo; // inherited from NSObject

	brandID: string;

	fileInfo: NSDictionary<string, any>;

	setAudioFileInfoFromError(url: NSURL): boolean;

	setFileInfoFromCaptionError(url: NSURL, caption: string): boolean;
}

declare class Utils extends NSObject {

	static JSONDictionaryFromString(string: string): any;

	static JSONStringifyPrettyPrinted(value: NSDictionary<string, any>, prettyPrinted: boolean): string;

	static alloc(): Utils; // inherited from NSObject

	static backgroundThread(job: () => void): void;

	static delayClosure(delay: number, closure: () => void): void;

	static getResizedImageSizeWithImageMaxHeightMaxWidth(image: UIImage, maxHeight: number, maxWidth: number): CGSize;

	static isLandscape(): boolean;

	static isPortrait(): boolean;

	static mainThread(job: () => void): void;

	static minutesBetweenDatesEndDate(startDate: Date, endDate: Date): number;

	static new(): Utils; // inherited from NSObject

	static unwrapWithAny(any: any): any;

	static readonly backgroundQueue: NSObject;
}

declare const ccNoPadding: number;

declare const ccPKCS7Padding: number;

declare const kCCAlgorithm3DES: number;

declare const kCCAlgorithmAES: number;

declare const kCCAlgorithmAES128: number;

declare const kCCAlgorithmBlowfish: number;

declare const kCCAlgorithmCAST: number;

declare const kCCAlgorithmDES: number;

declare const kCCAlgorithmRC2: number;

declare const kCCAlgorithmRC4: number;

declare const kCCAlignmentError: number;

declare const kCCBlockSize3DES: number;

declare const kCCBlockSizeAES128: number;

declare const kCCBlockSizeBlowfish: number;

declare const kCCBlockSizeCAST: number;

declare const kCCBlockSizeDES: number;

declare const kCCBlockSizeRC2: number;

declare const kCCBufferTooSmall: number;

declare const kCCContextSize3DES: number;

declare const kCCContextSizeAES128: number;

declare const kCCContextSizeCAST: number;

declare const kCCContextSizeDES: number;

declare const kCCContextSizeRC4: number;

declare const kCCDecodeError: number;

declare const kCCDecrypt: number;

declare const kCCEncrypt: number;

declare const kCCHmacAlgMD5: number;

declare const kCCHmacAlgSHA1: number;

declare const kCCHmacAlgSHA224: number;

declare const kCCHmacAlgSHA256: number;

declare const kCCHmacAlgSHA384: number;

declare const kCCHmacAlgSHA512: number;

declare const kCCKeySize3DES: number;

declare const kCCKeySizeAES128: number;

declare const kCCKeySizeAES192: number;

declare const kCCKeySizeAES256: number;

declare const kCCKeySizeDES: number;

declare const kCCKeySizeMaxBlowfish: number;

declare const kCCKeySizeMaxCAST: number;

declare const kCCKeySizeMaxRC2: number;

declare const kCCKeySizeMaxRC4: number;

declare const kCCKeySizeMinBlowfish: number;

declare const kCCKeySizeMinCAST: number;

declare const kCCKeySizeMinRC2: number;

declare const kCCKeySizeMinRC4: number;

declare const kCCMemoryFailure: number;

declare const kCCModeCBC: number;

declare const kCCModeCFB: number;

declare const kCCModeCFB8: number;

declare const kCCModeCTR: number;

declare const kCCModeECB: number;

declare const kCCModeF8: number;

declare const kCCModeLRW: number;

declare const kCCModeOFB: number;

declare const kCCModeOptionCTR_BE: number;

declare const kCCModeOptionCTR_LE: number;

declare const kCCModeRC4: number;

declare const kCCModeXTS: number;

declare const kCCOptionECBMode: number;

declare const kCCOptionPKCS7Padding: number;

declare const kCCOverflow: number;

declare const kCCPBKDF2: number;

declare const kCCPRFHmacAlgSHA1: number;

declare const kCCPRFHmacAlgSHA224: number;

declare const kCCPRFHmacAlgSHA256: number;

declare const kCCPRFHmacAlgSHA384: number;

declare const kCCPRFHmacAlgSHA512: number;

declare const kCCParamError: number;

declare const kCCRNGFailure: number;

declare const kCCSuccess: number;

declare const kCCUnimplemented: number;
