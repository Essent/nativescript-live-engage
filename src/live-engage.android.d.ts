import { CommonLiveEngage, ChatProfile } from './live-engage.common';
export declare class LiveEngage implements CommonLiveEngage {
    private static instance;
    private authCode;
    private brandId;
    private appId;
    private chatProfile;
    private fcmToken;
    constructor();
    static getInstance(): LiveEngage;
    initializeChat(brandId: string, appId: string): void;
    enableLogging(logLevel: number): void;
    getSDKVersion(): string;
    private isValidState;
    private initialize;
    private showConversation;
    showChat(closeCallback?: () => void): void;
    closeChat(): void;
    setUserProfileValues(chatProfile: ChatProfile): void;
    setAuthenticationCode(jwt: string): void;
    private getNumUnreadMessages;
    getUnreadMessagesCount(onSuccess: (value: number) => void, onError: (err: any) => void): void;
    registerPushToken(token: any, delegate?: any): void;
    unregisterPushToken(): void;
    handlePushMessage(data: any, image?: any, showNotification?: boolean): void;
    parsePushMessage(data: any): any;
    killChat(): Promise<boolean>;
}
