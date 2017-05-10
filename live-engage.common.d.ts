export interface CommonLiveEngage {
    initializeChat(brandId: string, appId: string): void;
    showChat(): void;
    setUserProfileValues(chatProfile: ChatProfile): void;
    registerPushToken(token: any): void;
    unregisterPushToken(): void;
    handlePushMessage(data: any, image: any, showNotification: boolean): void;
    parsePushMessage(data: any): any;
}
export interface ChatProfile {
    firstName: string;
    lastName: string;
    nickName: string;
    phone: string;
    avatarUrl: string;
}
