import { ios, run as applicationRun } from "tns-core-modules/application";
import { LiveEngage } from 'nativescript-live-engage';

class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        UIApplication.sharedApplication.registerForRemoteNotifications();
        UIApplication.sharedApplication.registerForRemoteNotificationTypes(UIRemoteNotificationType.Alert);
        return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
        console.log("****** applicationDidBecomeActive: " + application)
    }

    applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void{
        LiveEngage.getInstance().registerPushToken(deviceToken, this);
    }
}
ios.delegate = MyDelegate;
//applicationRun({ moduleName: "app.module" });
