import { CommonLiveEngage } from './live-engage.common';
import frameModule = require("ui/frame");

declare const LPMessagingSDK : any;

export class LiveEngage implements CommonLiveEngage {
    private _ios: UIView;

    private static instance: LiveEngage = new LiveEngage();

    constructor() {
        if (LiveEngage.instance) {
            throw new Error("Error: Instance failed: Use LiveEngage.getInstance() instead of new.");
        }
        LiveEngage.instance = this;
    }

    static getInstance() {
        return LiveEngage.instance;
    }

    private get mainScreen() {
        return typeof UIScreen.mainScreen === 'function' ?
            UIScreen.mainScreen() :  // xCode 7 and below
            UIScreen.mainScreen;     // xCode 8+
    }

    public get ios(): UIView {
        return this._ios;
    }

    public set ios(value) {
        this._ios = value;
    }

    public initializeChat(brandId: string): void {
        if (!brandId) {
            return;
        }
        try {
            LPMessagingSDK.instance.initializeError(brandId);
        } catch (e) {
            console.error(e);
        }
    }

    public showChat(brandId: string, appId: string) {
        if (!brandId || !appId) {
            return;
        }

        const conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(brandId);
        LPMessagingSDK.instance.showConversationAuthenticationCodeContainerViewController(conversationQuery, null, null);

        this.setUserProfile();
    }

    public setUserProfile() {
        // const user = LPUser.alloc().initWithFirstNameLastNameNickNameUidProfileImageURLPhoneNumberEmployeeID(this.firstName, this.lastName, "", "", "", this.phone, "");
        // LPMessagingSDK.instance.setUserProfileBrandID(user, this.brandId);
    }
}
