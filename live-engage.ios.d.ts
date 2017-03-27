import { CommonLiveEngage } from './live-engage.common';
export declare class LiveEngage implements CommonLiveEngage {
    private static instance;
    private brandId;
    private appId;
    private firstName;
    private lastName;
    private nickName;
    private phone;
    private avatarUrl;
    constructor();
    static getInstance(): LiveEngage;
    initializeChat(brandId: string, appId: string): void;
    showChat(): void;
    setUserProfile(): void;
    setUserProfileValues(firstName: string, lastName: string, nickName: string, phone: string, avatarUrl: string): void;
}
