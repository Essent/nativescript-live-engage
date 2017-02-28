import * as common from './live-engage.common';
export declare class LiveEngage extends common.LiveEngage {
    private _android;
    constructor();
    android: android.widget.FrameLayout;
    private _createUI();
    private getSDKVersion();
    private isValidState();
    loadChat(brandId: string, appId: string): void;
    setUserProfile(): void;
}
