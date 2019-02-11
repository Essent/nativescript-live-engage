import { CommonLiveEngage, ChatProfile } from './live-engage.common';
export declare class LiveEngage implements CommonLiveEngage {
    private static instance;
    private authenticationParams;
    private brandId;
    private appId;
    private chatProfile;
    private apnsToken;
    private apnsDelegate;
    constructor();
    static getInstance(): LiveEngage;
    initializeChat(brandId: string, appId: string, callback?: () => void): void;
    enableLogging(logLevel: number): void;
    showChat(): void;
    closeChat(): void;
    setUserProfileValues(chatProfile: ChatProfile): void;
    setAuthenticationCode(jwt: any): void;
    getUnreadMessagesCount(onSuccess: (value: number) => void, onError: (err: any) => void): void;
    registerPushToken(token: any, delegate?: any): void;
    unregisterPushToken(): void;
    handlePushMessage(data: any, image?: any, showNotification?: boolean): void;
    parsePushMessage(data: any): any;
    killChat(): Promise<boolean>;
}
