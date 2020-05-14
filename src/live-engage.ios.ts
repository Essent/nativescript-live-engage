import { CommonLiveEngage, ChatProfile } from './live-engage.common';

declare const LPMessagingSDK: any;
declare const LPUser: any;
declare const LPAuthenticationParams: any;
declare const LPConversationViewParams: any;
declare const LPMonitoringInitParams: any;

export class LiveEngage implements CommonLiveEngage {
    
    private static instance: LiveEngage = new LiveEngage();
    private authenticationParams: any;
    private brandId: string;
    private appId: string;
    private chatProfile: ChatProfile;
    private apnsToken: any;
    private apnsDelegate: any;

    constructor() {
        if (LiveEngage.instance) {
            throw new Error("Error: Instance failed: Use LiveEngage.getInstance() instead of new.");
        }
        LiveEngage.instance = this;
    }

    static getInstance() {
        return LiveEngage.instance;
    }

    public initializeChat(brandId: string, appId: string): void {
        if (!brandId) {
            return;
        }

        try {
            let param = LPMonitoringInitParams.alloc().initWithAppInstallID(appId);
            let error;
            LPMessagingSDK.instance.initializeMonitoringInitParamsError(brandId, param, error);
            this.brandId = brandId;
            this.appId = appId;
        } catch (e) {
            console.error(e);
        }
    }

    public enableLogging(logLevel: number): void {
        LPMessagingSDK.instance.subscribeLogEventsLogEvent(logLevel, ((log: any) => {
            console.log('LPMessagingSDK log:', log);
        }));
    }

    public showChat(closeCallback?: () => void): void {
        if (!this.brandId) {
            return;
        }
        const conversationQuery = LPMessagingSDK.instance.getConversationBrandQueryCampaignInfo(this.brandId, null);
        const historyControlParam = LPConversationHistoryControlParam
            .alloc()
            .initWithHistoryConversationsStateToDisplayHistoryConversationsMaxDaysHistoryMaxDaysType(
                LPConversationsHistoryStateToDisplay.None
                , null
                , LPConversationHistoryMaxDaysDateType.StartConversationDate
            );

        const conversationViewParams = LPConversationViewParams
            .alloc()
            .initWithConversationQueryContainerViewControllerIsViewOnlyConversationHistoryControlParam(
                conversationQuery,
                null,
                false,
                historyControlParam
            );

        LPMessagingSDK.instance.showConversationAuthenticationParams(conversationViewParams, this.authenticationParams);
        this.setUserProfileValues(this.chatProfile);
        this.registerPushToken(this.apnsToken, this.apnsDelegate);

        if (closeCallback) {
            LPMessagingSDK.instance.delegate = LPMessagingSDKdelegateImpl.initWithCloseCallback(closeCallback);
        }
    }

    public closeChat(): void {
        LPMessagingSDK.instance.removeConversation(null);
    }

    public setUserProfileValues(chatProfile: ChatProfile): void {
        this.chatProfile = chatProfile;

        if (!this.brandId || !chatProfile) {
            return;
        }

        const user = LPUser.alloc().initWithFirstNameLastNameNickNameUidProfileImageURLPhoneNumberEmployeeID(
            chatProfile.firstName,
            chatProfile.lastName,
            chatProfile.nickName,
            "",
            chatProfile.avatarUrl,
            chatProfile.phone,
            "");
        LPMessagingSDK.instance.setUserProfileBrandID(user, this.brandId);
    }

    public setAuthenticationCode(jwt) {
        const authenticationParams = LPAuthenticationParams.alloc().initWithAuthenticationCodeJwtRedirectURICertPinningPublicKeysAuthenticationType(
            null,
            jwt,
            null,
            null,
            null
        );
        this.authenticationParams = authenticationParams;
    }

    // getting unread message count will only work with enabled push notifications
    public getUnreadMessagesCount(onSuccess: (value: number) => void, onError: (err: any) => void): void {
        const conversationQuery = LPMessagingSDK.instance.getConversationBrandQueryCampaignInfo(this.brandId, null);
        LPMessagingSDK.getUnreadMessagesCountCompletionFailure(
            conversationQuery,
            (count: number) => onSuccess(count),
            (error: any) => onError(error)
        );
    }

    public registerPushToken(token: any, delegate?: any): void {
        this.apnsToken = token;
        this.apnsDelegate = delegate;
        if (!this.appId || !token) {
            return;
        }

        LPMessagingSDK.instance.registerPushNotificationsWithTokenNotificationDelegateAlternateBundleIDAuthenticationParams(token, this.apnsDelegate, this.appId, null);
    }

    public unregisterPushToken(): void {
        // not available on iOS
    }

    public handlePushMessage(data: any, image?: any, showNotification?: boolean): void {
        LPMessagingSDK.instance.handlePush(data);
    }

    public parsePushMessage(data: any): any {
        // not available on iOS
        return;
    }

    public killChat(): Promise<boolean> {
        return new Promise((resolve) => {
            LPMessagingSDK.instance.logout();
            resolve(true);
        });
    }
}

class LPMessagingSDKdelegateImpl extends NSObject implements LPMessagingSDKdelegate {
    public static ObjCProtocols = [LPMessagingSDKdelegate];

    private closeCallback: () => void;

    public static initWithCloseCallback(closeCallback: () => void): LPMessagingSDKdelegateImpl {
        let delegate = <LPMessagingSDKdelegateImpl>LPMessagingSDKdelegateImpl.new();
        delegate.closeCallback = closeCallback;
        return delegate;
    }

    // Required functions for LPMessagingSDKdelegate
    LPMessagingSDKAuthenticationFailed(err: NSError): void { }
    LPMessagingSDKError(err: NSError): void { }
    LPMessagingSDKObseleteVersion(err: NSError): void { }
    LPMessagingSDKTokenExpired(brandID: String): void { }

    // Optional functions for LPMessagingSDKdelegate
    LPMessagingSDKConversationViewControllerDidDismiss(): void {
        this.closeCallback();
    }
}
