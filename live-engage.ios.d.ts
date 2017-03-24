import { CommonLiveEngage } from './live-engage.common';
export declare class LiveEngage implements CommonLiveEngage {
    private _ios;
    private static instance;
    constructor();
    static getInstance(): LiveEngage;
    private readonly mainScreen;
    ios: UIView;
    initializeChat(brandId: string): void;
    showChat(brandId: string, appId: string): void;
    setUserProfile(): void;
}
