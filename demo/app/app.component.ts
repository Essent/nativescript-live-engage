import { Component, OnInit } from "@angular/core";
import  { LiveEngage } from 'nativescript-live-engage';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    public constructor() {

    }

    public ngOnInit(): void {
        LiveEngage.initializeChatIOS('12345678');
    }

}
