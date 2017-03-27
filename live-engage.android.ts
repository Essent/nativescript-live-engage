import { CommonLiveEngage } from './live-engage.common';
const application = require("application");

declare const com: any;
declare const android: any;

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
        LiveEngage.instance.brandId = brandId;
        LiveEngage.instance.appId = appId;
    }

    private getSDKVersion(): string {
        return com.liveperson.infra.BuildConfig.VERSION_NAME;
    };

    private isValidState(): boolean {
        return com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().isInitialized();
    }

    public showChat(): void {
        console.log('LiveEngage showChat');
        if (!LiveEngage.instance.brandId || !LiveEngage.instance.appId) {
            return;
        }
        console.log('LiveEngage showChat');

        const that = new WeakRef<LiveEngage>(this);
        const Callback = com.liveperson.infra.callbacks.InitLivePersonCallBack.extend({
            onInitSucceed: () => {
                console.log('LiveEngage onInitSucceed');
                com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().showConversation(application.android.foregroundActivity, LiveEngage.instance.brandId, null);
                const instance = that.get();
                instance.setUserProfile()
            },
            onInitFailed: (err: any) => {
                console.error(err);
            }
        });

        let properties = new com.liveperson.infra.InitLivePersonProperties(LiveEngage.instance.brandId, LiveEngage.instance.appId, new Callback());
        if (!com.liveperson.infra.InitLivePersonProperties.isValid(properties)) {
            if (properties != null && properties.getInitCallBack() != null) {
                properties.getInitCallBack().onInitFailed("InitLivePersonProperties not valid or missing parameters.");
            }
            return;
        }
        // check if initialized
        if (!this.isValidState()) {
            console.log('LiveEngage start init');
            com.liveperson.infra.messaging_ui.configuration.UIConfigurationKeys.setDefaultConfiguration(application.android.context);
            const messagingUiInitData = new com.liveperson.infra.messaging_ui.MessagingUiInitData(properties, this.getSDKVersion());
            const initData = new com.liveperson.infra.messaging_ui.MessagingUiConfiguration(null);
            com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().init(application.android.context, messagingUiInitData, initData);
        } else {
            properties.getInitCallBack().onInitSucceed();
            com.liveperson.infra.messaging_ui.MessagingUIFactory.getInstance().setConfiguration(new com.liveperson.infra.messaging_ui.MessagingUiConfiguration(null));
        }
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

        if (this.isValidState()) {
            const userProfile = new com.liveperson.messaging.model.UserProfileBundle.Builder()
                .setFirstName(firstName)
                .setLastName(lastName)
                .setPhoneNumber(phone)
                .setNickname(nickName)
                .setAvatarUrl(avatarUrl)
                .build();
            com.liveperson.messaging.MessagingFactory.getInstance().getController().sendUserProfile(LiveEngage.instance.brandId, userProfile);
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
