// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { LiveEngage } from 'nativescript-live-engage';
import * as application from "tns-core-modules/application";

application.on(application.launchEvent, function (args: application.ApplicationEventData) {

    /*
     For iOS applications you can also subclass AppDelegate for this.
     For Android applications you can also subclass Application for this.
     */
    LiveEngage.getInstance().initializeChat('63312324', 'nl.energiedirect.selfserviceapp');
});

platformNativeScriptDynamic({createFrameOnBootstrap: true}).bootstrapModule(AppModule);
