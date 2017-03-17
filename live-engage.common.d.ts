import * as view from 'ui/core/view';
export declare abstract class LiveEngage extends view.View {
    private static brandIdProperty;
    private static appIdProperty;
    private static firstNameProperty;
    private static lastNameProperty;
    private static phoneProperty;
    static initializeChatIOS(brandId: string): void;
    brandId: string;
    appId: string;
    firstName: string;
    lastName: string;
    phone: string;
    abstract loadChat(brandId: string, appId: string): any;
    abstract setUserProfile(): any;
}
