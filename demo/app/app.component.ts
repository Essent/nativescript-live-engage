import { Component } from "@angular/core";
import { LiveEngage } from 'nativescript-live-engage';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {

    public constructor() { }

    public showChat(): void {
        LiveEngage.getInstance().showChat();
        LiveEngage.getInstance().setUserProfileValues('Jane', 'Doe', '', '0132100000', '');
    }
}
