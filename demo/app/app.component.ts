import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import frameModule = require('ui/frame');

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements AfterViewInit {
    @ViewChild('chat') public chatRef: ElementRef;

    public constructor() { }

    public ngAfterViewInit(): void {
        this.chatRef.nativeElement.loadChat('12345678', 'com.example.myapp');
    }

}
