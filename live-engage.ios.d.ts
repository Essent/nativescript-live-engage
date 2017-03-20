import * as common from './live-engage.common';
export declare class LiveEngage extends common.LiveEngage {
    private _ios;
    private _viewController;
    constructor();
    private readonly mainScreen;
    ios: UIView;
    static initializeChat(brandId: string): void;
    loadChat(brandId: string, appId: string): void;
    setUserProfile(): void;
}
