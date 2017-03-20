// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";
import { LiveEngage } from 'nativescript-live-engage';

LiveEngage.initializeChat('12345678');

platformNativeScriptDynamic().bootstrapModule(AppModule);
