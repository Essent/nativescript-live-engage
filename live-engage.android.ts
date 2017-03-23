import * as common from './live-engage.common';
const application = require("application");

declare const com: any;
declare const android: any;

export class LiveEngage extends common.LiveEngage {
    private _android: android.widget.FrameLayout;

    public constructor() {
        super();
    }

    public get android(): android.widget.FrameLayout {
        return this._android;
    }

    public set android(value) {
        this._android = value;
    }

    private _createUI(): void {
        const framelayout = new android.widget.FrameLayout(this._context);
        framelayout.setLayoutParams(new android.widget.FrameLayout.LayoutParams(
            android.widget.FrameLayout.LayoutParams.MATCH_PARENT,
            android.widget.FrameLayout.LayoutParams.MATCH_PARENT));
        framelayout.setId(android.view.View.generateViewId());

        this._android = framelayout;
    }

    private getSDKVersion(): string {
        return com.liveperson.infra.BuildConfig.VERSION_NAME;
    };

    private isValidState(): boolean {
        return com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().isInitialized();
    }

    public loadChat(brandId: string, appId: string): void {
        if (!brandId || !appId || !this.android) {
            return;
        }

        const fragmentManager = this._context.getSupportFragmentManager();
        const that = new WeakRef<LiveEngage>(this);
        const instance = that.get();
        const Callback = com.liveperson.infra.callbacks.InitLivePersonCallBack.extend({
            onInitSucceed: () => {
                if (instance.android) {
                    const fragmentTransaction = fragmentManager.beginTransaction();
                    const fragment = com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().getConversationFragment(brandId, null);
                    fragmentTransaction.replace(instance.android.getId(), fragment);
                    fragmentTransaction.addToBackStack(null).commitAllowingStateLoss();
                    instance.setUserProfile();
                } else {
                    // should initialize again
                    return;
                }
            },
            onInitFailed: (err: any) => {
                console.error(err);
            }
        });

        let properties = new com.liveperson.infra.InitLivePersonProperties(brandId, appId, new Callback());
        if (!com.liveperson.infra.InitLivePersonProperties.isValid(properties)) {
            if (properties != null && properties.getInitCallBack() != null) {
                properties.getInitCallBack().onInitFailed("InitLivePersonProperties not valid or missing parameters.");
            }
            return;
        }
        // check if initialized
        if (!this.isValidState()) {
            com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().init(this._context, new com.liveperson.infra.messaging_ui.MessagingUiInitData(properties, this.getSDKVersion()));
        } else {
            properties.getInitCallBack().onInitSucceed();
        }
    }

    public setUserProfile(): void {
        if (this.isValidState()) {
            const userProfileBundle = new com.liveperson.messaging.model.UserProfileBundle(this.firstName, this.lastName, this.phone);
            com.liveperson.messaging.MessagingFactory.getInstance().getController().sendUserProfile(this.brandId, this.appId, userProfileBundle);
        }
    }
}
