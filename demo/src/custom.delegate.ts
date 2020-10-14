import { ios, run as applicationRun } from "tns-core-modules/application";
import { LiveEngage } from 'nativescript-live-engage';

class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        console.log("******** Brane **** applicationWillFinishLaunchingWithOptions: " + launchOptions);
        UIApplication.sharedApplication.registerForRemoteNotifications();
        UIApplication.sharedApplication.registerForRemoteNotificationTypes(UIRemoteNotificationType.Alert);
        return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
        console.log("****** applicationDidBecomeActive: " + application)
    }

    applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void{
        console.info("*******%%%*** Brane push token + " + deviceToken);
        LiveEngage.getInstance().registerPushToken(deviceToken, this);
    }
}
ios.delegate = MyDelegate;
//applicationRun({ moduleName: "app.module" });
