import { Component, AfterViewInit } from "@angular/core";
// import frameModule = require('ui/frame');
import { LiveEngage } from 'nativescript-live-engage';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements AfterViewInit {
    // @ViewChild('chat') public chatRef: ElementRef;

    public constructor() { }

    public ngAfterViewInit(): void {
        // this.chatRef.nativeElement.loadChat('87555616', 'nl.energiedirect.selfserviceapp');
    }

    public showChat(): void {
        LiveEngage.getInstance().showChat('12345678', 'com.example.myapp');
    }
}
