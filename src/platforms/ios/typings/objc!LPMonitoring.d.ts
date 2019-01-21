
declare class LPEngagementDetails extends NSObject {

	static alloc(): LPEngagementDetails; // inherited from NSObject

	static new(): LPEngagementDetails; // inherited from NSObject

	readonly campaignId: number;

	readonly connectorId: number;

	contextId: string;

	conversationId: string;

	readonly engagementId: number;

	readonly engagementRevision: number;

	status: string;
}

declare class LPGetEngagementResponse extends NSObject {

	static alloc(): LPGetEngagementResponse; // inherited from NSObject

	static new(): LPGetEngagementResponse; // inherited from NSObject

	engagementDetails: NSArray<LPEngagementDetails>;

	pageId: string;

	sessionId: string;

	visitorId: string;
}

declare class LPMonitoringAPI extends NSObject {

	static alloc(): LPMonitoringAPI; // inherited from NSObject

	static new(): LPMonitoringAPI; // inherited from NSObject

	static readonly instance: LPMonitoringAPI;

	getEngagementWithConsumerIDMonitoringParamsCompletionFailure(consumerID: string, monitoringParams: LPMonitoringParams, completion: (p1: LPGetEngagementResponse) => void, failure: (p1: NSError) => void): void;

	getEngagementWithIdentitiesMonitoringParamsCompletionFailure(identities: NSArray<LPMonitoringIdentity> | LPMonitoringIdentity[], monitoringParams: LPMonitoringParams, completion: (p1: LPGetEngagementResponse) => void, failure: (p1: NSError) => void): void;

	sendSDEWithConsumerIDMonitoringParamsCompletionFailure(consumerID: string, monitoringParams: LPMonitoringParams, completion: (p1: LPSendSDEResponse) => void, failure: (p1: NSError) => void): void;

	sendSDEWithIdentitiesMonitoringParamsCompletionFailure(identities: NSArray<LPMonitoringIdentity> | LPMonitoringIdentity[], monitoringParams: LPMonitoringParams, completion: (p1: LPSendSDEResponse) => void, failure: (p1: NSError) => void): void;
}

declare class LPMonitoringDataManager extends NSObject implements GeneralManagerProtocol {

	static alloc(): LPMonitoringDataManager; // inherited from NSObject

	static new(): LPMonitoringDataManager; // inherited from NSObject

	readonly isInitialized: boolean;

	monitoringIdentities: NSArray<LPMonitoringIdentity>;

	monitoringParam: LPMonitoringParams;

	static readonly instance: LPMonitoringDataManager;

	clearEngagementMonitoring(): void;

	clearManager(): void;

	initializeWithAccountIdMonitoringInitParms(accountId: string, monitoringInitParms: LPMonitoringInitParams): void;
}

declare class LPMonitoringIdentity extends NSObject {

	static alloc(): LPMonitoringIdentity; // inherited from NSObject

	static new(): LPMonitoringIdentity; // inherited from NSObject

	constructor(o: { consumerID: string; issuer: string; });

	initWithConsumerIDIssuer(consumerID: string, issuer: string): this;
}

declare class LPMonitoringInitParams extends NSObject {

	static alloc(): LPMonitoringInitParams; // inherited from NSObject

	static new(): LPMonitoringInitParams; // inherited from NSObject

	constructor(o: { appInstallID: string; });

	initWithAppInstallID(appInstallID: string): this;
}

declare class LPMonitoringParams extends NSObject {

	static alloc(): LPMonitoringParams; // inherited from NSObject

	static new(): LPMonitoringParams; // inherited from NSObject

	engagementAttributes: NSArray<NSDictionary<string, any>>;

	entryPoints: NSArray<string>;

	pageId: string;

	constructor(o: { entryPoints: NSArray<string> | string[]; engagementAttributes: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[]; pageId: string; });

	initWithEntryPointsEngagementAttributesPageId(entryPoints: NSArray<string> | string[], engagementAttributes: NSArray<NSDictionary<string, any>> | NSDictionary<string, any>[], pageId: string): this;
}

declare class LPSendSDEResponse extends NSObject {

	static alloc(): LPSendSDEResponse; // inherited from NSObject

	static new(): LPSendSDEResponse; // inherited from NSObject

	pageId: string;

	sessionId: string;

	visitorId: string;
}

declare var MonitoringVersionNumber: number;

declare var MonitoringVersionString: interop.Reference<number>;
