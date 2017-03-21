// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { LiveEngage } from 'nativescript-live-engage';
import * as application from "application";

application.on(application.launchEvent, function (args: application.ApplicationEventData) {
    if (args.ios !== undefined) {
        // For iOS applications, call initializeChat, you can also use a custom AppDelegate for this
        LiveEngage.initializeChat('12345678');
    }
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
