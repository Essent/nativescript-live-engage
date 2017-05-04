import { LiveEngage } from 'nativescript-live-engage';
import * as utils from 'utils/utils';

declare const com: any;

@JavaProxy("org.nativescript.demo.MyGcmListenerService")
class MyGcmListenerService extends com.google.android.gms.gcm.GcmListenerService {

    protected onMessageReceived(from: string, data: any): void {
        try {
            const message = new com.liveperson.infra.messaging_ui.uicomponents.PushMessageParser(data);
            const resImg = utils.ad.resources.getDrawableId('icon');
            this.postNotification(message, resImg);

            LiveEngage.getInstance().handlePushMessage(data, resImg, false);
        } catch (e) {
            console.error("MyGcmListenerService - Failed to process message:", e);
        }
    }

    private postNotification(message: any, image: any): void {

        const context = utils.ad.getApplicationContext();
        let builder = new android.support.v4.app.NotificationCompat.Builder(context)
            .setContentIntent(this.getPendingIntent(context))
            .setContentTitle("LiveEngage")
            .setAutoCancel(true)
            .setDefaults(android.app.Notification.DEFAULT_SOUND | android.app.Notification.DEFAULT_LIGHTS)
            .setSmallIcon(image)
            .setContentText(message.getMessage());

        if (android.os.Build.VERSION.SDK_INT >= 21) {
            builder = builder.setCategory(android.app.Notification.CATEGORY_MESSAGE).setPriority(android.app.Notification.PRIORITY_HIGH);
        }

        const manager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
        manager.notify(12345678, builder.build());
    }

    private getPendingIntent(context: any): any {

        const packageName = context.getPackageName();
        const launchIntent = context.getPackageManager().getLaunchIntentForPackage(packageName);
        const className = launchIntent.getComponent().getClassName();
        const tns = className + '.class';

        const resultIntent = new android.content.Intent(context, eval(tns));
        resultIntent.putExtra("push_notification", true);
        return android.app.PendingIntent.getActivity(context, 0, resultIntent, android.app.PendingIntent.FLAG_UPDATE_CURRENT);
    }
}