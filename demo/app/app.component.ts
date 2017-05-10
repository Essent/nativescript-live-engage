import { Component } from "@angular/core";
import { LiveEngage, ChatProfile } from 'nativescript-live-engage';
import { NsUrbanairship } from 'nativescript-urban-airship';
import { android } from 'application';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {

    public constructor() {

        NsUrbanairship.getInstance().notificationOptIn();
    }

    public showChat(): void {
        const chatProfile: ChatProfile = {
            firstName: 'Jane',
            lastName: 'Doe',
            nickName: '',
            phone: '0132100000',
            avatarUrl: ''
        };

        if (android) {
            const token = NsUrbanairship.getInstance().getRegistrationToken();
            LiveEngage.getInstance().registerPushToken(token);
        }

        LiveEngage.getInstance().showChat();
        LiveEngage.getInstance().setUserProfileValues(chatProfile);
    }
}
