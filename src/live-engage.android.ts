import { CommonLiveEngage, ChatProfile } from './live-engage.common';
import * as application from 'tns-core-modules/application';

import LivePerson = com.liveperson.messaging.sdk.api.LivePerson;
import InitLivePersonProperties = com.liveperson.infra.InitLivePersonProperties;
import InitLivePersonCallBack = com.liveperson.infra.callbacks.InitLivePersonCallBack;
import MessagingUIFactory = com.liveperson.infra.messaging_ui.MessagingUIFactory;
import LogoutLivePersonCallBack = com.liveperson.messaging.sdk.api.callbacks.LogoutLivePersonCallback;
import LPAuthenticationParams = com.liveperson.infra.LPAuthenticationParams;
import ConversationViewParams = com.liveperson.infra.ConversationViewParams;
import ConversationActivity = com.liveperson.infra.messaging_ui.ConversationActivity;
import ConsumerProfile = com.liveperson.messaging.sdk.api.model.ConsumerProfile;
import ICallback = com.liveperson.infra.ICallback;
import PushMessageParser = com.liveperson.infra.messaging_ui.uicomponents.PushMessageParser;
import NotificationController = com.liveperson.infra.messaging_ui.notification.NotificationController;
import LPMobileLog = com.liveperson.infra.log.LPMobileLog;

export class LiveEngage implements CommonLiveEngage {

    private static instance: LiveEngage = new LiveEngage();
    private authCode: string;
    private brandId: string;
    private appId: string;
    private chatProfile: ChatProfile;
    private gcmToken: string;

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
        this.brandId = brandId;
        this.appId = appId;
    }

    public enableLogging(logLevel: number): void {
        LPMobileLog.setDebugMode(true);
    }

    private getSDKVersion(): string {
        return LivePerson.getSDKVersion();
    };

    private isValidState(): boolean {
        return MessagingUIFactory.getInstance().isInitialized();
    }

    public showChat(): void {
        if (!this.brandId || !this.appId) {
            return;
        }

        const that = new WeakRef<LiveEngage>(this);
        const callback: any = new InitLivePersonCallBack({
            onInitSucceed: () => {
                const lpAuthenticationParams = new LPAuthenticationParams().setHostAppJWT(this.authCode);
                const conversationViewParams = new ConversationViewParams(false);
                LivePerson.showConversation(
                    application.android.foregroundActivity,
                    lpAuthenticationParams,
                    conversationViewParams
                );

                const instance = that.get();
                instance.setUserProfileValues(instance.chatProfile);
                instance.registerPushToken(instance.gcmToken);
            },
            onInitFailed: (err: any) => {
                console.error(err);
            }
        });
        let properties = new InitLivePersonProperties(
            this.brandId,
            this.appId,
            callback
        );
        LivePerson.initialize(application.android.context, properties);
    }

    public closeChat(): void {
        if (!this.isValidState()) {
            return;
        }

        // only try hideConversation() if foregroundActivity is a ConversationActivity or it will crash
        if (application.android.foregroundActivity instanceof ConversationActivity) {
            LivePerson.hideConversation(application.android.foregroundActivity as any);
        }
    }

    public setUserProfileValues(chatProfile: ChatProfile): void {
        this.chatProfile = chatProfile;

        if (!this.brandId || !chatProfile) {
            return;
        }

        if (this.isValidState()) {
            const consumerProfile = new ConsumerProfile.Builder()
                .setFirstName(chatProfile.firstName)
                .setLastName(chatProfile.lastName)
                .setPhoneNumber(chatProfile.phone)
                .setNickname(chatProfile.nickName)
                .setAvatarUrl(chatProfile.avatarUrl)
                .build();
            LivePerson.setUserProfile(consumerProfile);
        }
    }

    public setAuthenticationCode(jwt: string) {
        this.authCode = jwt;
    }

    // getting unread message count will only work with enabled push notifications
    public getUnreadMessagesCount(): Promise<number> {
        return new Promise((resolve, reject) => {
            if (!this.isValidState()) {
                reject(new Error('isValidState false'));
            }

            const callback: any = new ICallback({
                onSuccess: (value: any) => {
                    resolve(value);
                },
                onError: (exception: any) => {
                    reject(exception);
                }
            });
            LivePerson.getNumUnreadMessages(
                this.appId,
                callback
            );
        });
    }

    public registerPushToken(token: any, delegate?: any): void {
        this.gcmToken = token;
        if (!this.isValidState()) {
            return;
        }
        LivePerson.registerLPPusher(this.brandId, this.appId, token);
    }

    public unregisterPushToken(): void {
        if (!this.isValidState()) {
            return;
        }
        LivePerson.unregisterLPPusher(this.brandId, this.appId);
    }

    public handlePushMessage(data: any, image?: any, showNotification?: boolean): void {
        if (!this.isValidState()) {
            return;
        }

        const message = data.getString("message");
        NotificationController.instance.addMessageAndDisplayNotification(application.android.context, this.brandId, message, showNotification, image);
    }

    public parsePushMessage(data: any): any {
        return PushMessageParser.parseBundle(this.brandId, data);
    }

    public killChat(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (!this.brandId || !this.appId) {
                reject(new Error('brandId or appId missing'));
            }

            if (!this.isValidState()) {
                reject(new Error('isValidState false'));
            }

            LivePerson.resolveConversation();

            const callback: any = new LogoutLivePersonCallBack({
                onLogoutSucceed: () => {
                    resolve(true);
                },
                onLogoutFailed: () => {
                    console.error('Logout failed');
                    reject(false);
                }
            });
            LivePerson.logOut(application.android.context, this.brandId, this.appId, callback);
        });
    }
}
