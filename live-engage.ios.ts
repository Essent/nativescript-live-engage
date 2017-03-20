import * as common from './live-engage.common';
import frameModule = require("ui/frame");

declare const LPMessagingSDK : any;
declare const LPUser : any;
declare const UIView : any;

export class LiveEngage extends common.LiveEngage {
    private _ios: UIView;
    private _viewController: UIViewController;

    public constructor() {
        super();

        const screenFrame = this.mainScreen.bounds;

        this._ios = new UIView();
        this._ios.frame = screenFrame;
        this._ios.clipsToBounds = true;
        this.ios.autoresizingMask =
            UIViewAutoresizing.FlexibleWidth |
            UIViewAutoresizing.FlexibleHeight;

        this._viewController = UIViewController.new();
        this._viewController.view.frame = screenFrame;
        this._viewController.view.clipsToBounds = true;
        this._viewController.view.userInteractionEnabled = true;
        this._viewController.view.autoresizingMask =
            UIViewAutoresizing.FlexibleWidth |
            UIViewAutoresizing.FlexibleHeight;

        this._ios.addSubview(this._viewController.view);
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

    public static initializeChat(brandId: string): void {
        if (!brandId) {
            return;
        }
        try {
            LPMessagingSDK.instance.initializeError(brandId);
        } catch (e) {
            console.error(e);
        }
    }

    public loadChat(brandId: string, appId: string) {
        if (!brandId || !appId || !this.ios) {
            return;
        }

        const conversationQuery = LPMessagingSDK.instance.getConversationBrandQuery(brandId);
        LPMessagingSDK.instance.showConversationAuthenticationCodeContainerViewController(conversationQuery, null, this._viewController);

        this.setUserProfile();
    }

    public setUserProfile() {
        const user = LPUser.alloc().initWithFirstNameLastNameNickNameUidProfileImageURLPhoneNumberEmployeeID(this.firstName, this.lastName, "", "", "", this.phone, "");
        LPMessagingSDK.instance.setUserProfileBrandID(user, this.brandId);
    }
}
