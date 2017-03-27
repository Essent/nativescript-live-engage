import { CommonLiveEngage } from './live-engage.common';

declare const LPMessagingSDK : any;
declare const LPUser : any;

export class LiveEngage implements CommonLiveEngage {

    private static instance: LiveEngage = new LiveEngage();
    private brandId: string;
    private appId: string;
    private firstName: string = '';
    private lastName: string = '';
    private nickName: string = '';
    private phone: string = '';
    private avatarUrl: string = '';

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
            LPMessagingSDK.instance.initializeError(brandId);
            LiveEngage.instance.brandId = brandId;
            LiveEngage.instance.appId = appId;
        } catch (e) {
            console.error(e);
        }
    }

    public showChat(): void {
        if (!LiveEngage.instance.brandId) {
            return;
        }

        const conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(LiveEngage.instance.brandId);
        LPMessagingSDK.instance.showConversationAuthenticationCodeContainerViewController(conversationQuery, null, null);
        this.setUserProfile()
    }

    public setUserProfile(): void {
        this.setUserProfileValues(
            LiveEngage.instance.firstName,
            LiveEngage.instance.lastName,
            LiveEngage.instance.nickName,
            LiveEngage.instance.phone,
            LiveEngage.instance.avatarUrl
        );
    }

    public setUserProfileValues(firstName: string, lastName: string, nickName: string, phone: string, avatarUrl: string): void {
        LiveEngage.instance.firstName = firstName;
        LiveEngage.instance.lastName = lastName;
        LiveEngage.instance.nickName = nickName;
        LiveEngage.instance.phone = phone;
        LiveEngage.instance.avatarUrl = avatarUrl;

        if (!LiveEngage.instance.brandId) {
            return;
        }

        const user = LPUser.alloc().initWithFirstNameLastNameNickNameUidProfileImageURLPhoneNumberEmployeeID(firstName, lastName, nickName, "", avatarUrl, phone, "");
        LPMessagingSDK.instance.setUserProfileBrandID(user, LiveEngage.instance.brandId);
    }
}
