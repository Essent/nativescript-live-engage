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

        this._ios = new UIView(this.mainScreen.bounds);
        this._ios.clipsToBounds = true;
        this.ios.autoresizingMask =
            UIViewAutoresizing.FlexibleWidth |
            UIViewAutoresizing.FlexibleHeight;

        this._viewController = UIViewController.new();
        this._viewController.view.frame = this.mainScreen.bounds;
        this._viewController.view.autoresizingMask =
            UIViewAutoresizing.FlexibleWidth |
            UIViewAutoresizing.FlexibleHeight;
        this._ios.insertSubviewAtIndex(this._viewController.view, 0);

        this.loadChat(this.brandId, this.appId);
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

    public loadChat(brandId: string, appId: string) {
        if (!brandId || !appId || !this.ios) {
            return;
        }

        this.setUserProfile();
    }

    public setUserProfile() {
    }
}
