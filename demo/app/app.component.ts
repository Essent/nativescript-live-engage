import { Component } from "@angular/core";
import { LiveEngage, ChatProfile } from 'nativescript-live-engage';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public constructor() { }

    public showChat(): void {
        const chatProfile: ChatProfile = {
            firstName: 'Jane',
            lastName: 'Doe',
            nickName: '',
            phone: '0132100000',
            avatarUrl: ''
        };

        LiveEngage.getInstance().showChat();
        LiveEngage.getInstance().setUserProfileValues(chatProfile);
    }
}
