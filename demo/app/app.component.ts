import { Component, AfterViewInit } from "@angular/core";
import { LiveEngage } from 'nativescript-live-engage';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements AfterViewInit {

    public constructor() { }

    public showChat(): void {
        LiveEngage.getInstance().showChat('12345678', 'com.example.myapp');
    }
}
