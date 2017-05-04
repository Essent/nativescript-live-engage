// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { LiveEngage } from 'nativescript-live-engage';
import * as application from "application";
import { NsUrbanairship } from 'nativescript-urban-airship';
import { urbanAirshipSettings } from './urbanAirshipSettings';
import { ios } from 'application';

application.on(application.launchEvent, function (args: application.ApplicationEventData) {

    /*
     For iOS applications you can also subclass AppDelegate for this
     For Android applications you can also subclass Application for this
     */
    LiveEngage.getInstance().initializeChat('12345678', 'com.example.myapp');

    if (ios) {
        NsUrbanairship.getInstance().startUp(urbanAirshipSettings);
    }
});

application.on(application.resumeEvent, function (args: application.ApplicationEventData) {
    if (ios) {
        NsUrbanairship.getInstance().resetBadgeCount();
    }
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
