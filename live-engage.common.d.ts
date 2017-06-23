export interface CommonLiveEngage {
    initializeChat(brandId: string, appId: string): void;
    showChat(): void;
    setUserProfileValues(chatProfile: ChatProfile): void;
    setAuthenticationCode(authCode: string): void;
    registerPushToken(token: any, delegate?: any): void;
    unregisterPushToken(): void;
    handlePushMessage(data: any, image?: any, showNotification?: boolean): void;
    parsePushMessage(data: any): any;
    killChat(): void;
}
export interface ChatProfile {
    firstName: string;
    lastName: string;
    nickName: string;
    phone: string;
    avatarUrl: string;
}
