export interface CommonLiveEngage {
    initializeChat(brandId: string, appId: string): void;
    showChat(): void;
    setUserProfileValues(chatProfile: ChatProfile): void;
    registerPushToken(token: any): void;
    unregisterPushToken(): void;
}
export interface ChatProfile {
    firstName: string;
    lastName: string;
    nickName: string;
    phone: string;
    avatarUrl: string;
}
