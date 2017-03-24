import { CommonLiveEngage } from './live-engage.common';
export declare class LiveEngage implements CommonLiveEngage {
    private _android;
    private fragmentId;
    private fragment;
    private static instance;
    constructor();
    static getInstance(): LiveEngage;
    initializeChat(brandId: string): void;
    private getSDKVersion();
    private isValidState();
    showChat(brandId: string, appId: string): void;
    setUserProfile(): void;
}
