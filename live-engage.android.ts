import { CommonLiveEngage } from './live-engage.common';
const application = require("application");

declare const com: any;
declare const android: any;

export class LiveEngage implements CommonLiveEngage {

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

    public initializeChat(brandId: string): void {

    }

    private getSDKVersion(): string {
        return com.liveperson.infra.BuildConfig.VERSION_NAME;
    };

    private isValidState(): boolean {
        return com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().isInitialized();
    }

    public showChat(brandId: string, appId: string): void {
        if (!brandId || !appId) {
            return;
        }

        const that = new WeakRef<LiveEngage>(this);
        const Callback = com.liveperson.infra.callbacks.InitLivePersonCallBack.extend({
            onInitSucceed: () => {
                console.log('LiveEngage onInitSucceed');
                const instance = that.get();

                com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().showConversation(application.android.foregroundActivity, brandId, null);

                // instance.setUserProfile();
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
            com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().init(application.android.context, new com.liveperson.infra.messaging_ui.MessagingUiInitData(properties, this.getSDKVersion()));
        } else {
            properties.getInitCallBack().onInitSucceed();
        }
    }

    public setUserProfile(): void {
        if (this.isValidState()) {
            // const userProfileBundle = new com.liveperson.messaging.model.UserProfileBundle(this.firstName, this.lastName, this.phone);
            // com.liveperson.messaging.MessagingFactory.getInstance().getController().sendUserProfile(this.brandId, this.appId, userProfileBundle);
        }
    }

    // public killChat(brandId: string, appId: string): void {
    //     console.log('LiveEngage start killChat');
    //     if (!brandId || !appId) {
    //         return;
    //     }
    //
    //     if (!this.isValidState()) {
    //         return;
    //     }
    //     console.log('LiveEngage killChat second step');
    //
    //     /*
    //     Remove fragment, before logging out
    //      */
    //     const fragmentManager = this._context.getSupportFragmentManager();
    //     const fragmentTransaction = fragmentManager.beginTransaction();
    //     fragmentTransaction.remove(this.fragment);
    //     fragmentTransaction.detach(this.fragment).commitAllowingStateLoss();
    //     console.log('LiveEngage fragment removed');
    //
    //     com.liveperson.messaging.MessagingFactory.getInstance().getController().resolveConversation(brandId, brandId);
    //     console.log('LiveEngage resolveConversation done');
    //
    //     const LogoutCallback = com.liveperson.infra.callbacks.LogoutLivePersonCallBack.extend({
    //         onLogoutSucceed: () => {
    //             console.log('LiveEngage onLogoutSucceed');
    //         },
    //         onLogoutFailed: (err: any) => {
    //             console.error(err);
    //         }
    //     });
    //     const initProperties = new com.liveperson.infra.InitLivePersonProperties(brandId, appId, null);
    //     const ui = new com.liveperson.infra.messaging_ui.MessagingUiInitData(initProperties, this.getSDKVersion());
    //     com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().logout(this._context, ui, new LogoutCallback());
    //     console.log('LiveEngage logout');
    // }
}
