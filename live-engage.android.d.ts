import { CommonLiveEngage, ChatProfile } from './live-engage.common';
export declare class LiveEngage implements CommonLiveEngage {
    private static instance;
    private brandId;
    private appId;
    private chatProfile;
    private gcmToken;
    constructor();
    static getInstance(): LiveEngage;
    initializeChat(brandId: string, appId: string): void;
    private getSDKVersion();
    private isValidState();
    showChat(): void;
    closeChat(): void;
    setUserProfileValues(chatProfile: ChatProfile): void;
    registerPushToken(token: any, delegate?: any): void;
    unregisterPushToken(): void;
    handlePushMessage(data: any, image?: any, showNotification?: boolean): void;
    parsePushMessage(data: any): any;
    killChat(): Promise<boolean>;
}
