import { Component } from "@angular/core";
import { LiveEngage, ChatProfile } from 'nativescript-live-engage';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public constructor() {
        LPConfig.defaultConfiguration.enableFileSharing = true;
        LPConfig.defaultConfiguration.enablePhotoSharing = true;
        LPConfig.defaultConfiguration.brandName = 'Demo Brand Name';
    }

    public showChat(): void {
        const chatProfile: ChatProfile = {
            firstName: 'Jane',
            lastName: 'Doe',
            nickName: '',
            phone: '0132100000',
            avatarUrl: ''
        };

        LiveEngage.getInstance().showChat(() => {
            console.log('Closed chat');
        });
        LiveEngage.getInstance().setUserProfileValues(chatProfile);
    }

    public killChat(): void {
        LiveEngage.getInstance().killChat()
            .then(() => {
                console.log('killChat success');
            }).catch((error: any) => {
                console.log('killChat error: ', error);
        });
    }

    public getUnreadCount(): void {
        LiveEngage.getInstance().getUnreadMessagesCount((count: number) => {
            console.log('getUnreadMessagesCount', count);
        }, (error: any) => {
            console.log('getUnreadMessagesCount error: ', error);
        });
    }
}
