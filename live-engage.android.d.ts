import { CommonLiveEngage } from './live-engage.common';
export declare class LiveEngage implements CommonLiveEngage {
    private static instance;
    constructor();
    static getInstance(): LiveEngage;
    initializeChat(brandId: string): void;
    private getSDKVersion();
    private isValidState();
    showChat(brandId: string, appId: string): void;
    setUserProfile(): void;
}
