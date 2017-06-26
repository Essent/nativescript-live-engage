import {setActivityCallbacks, AndroidActivityCallbacks} from "ui/frame";
// import { urbanAirshipSettings } from './urbanAirshipSettings';
import * as application from 'application';

declare const com: any;

@JavaProxy("org.myApp.MainActivity")
class Activity extends android.support.v7.app.AppCompatActivity {
    private _callbacks: AndroidActivityCallbacks;

    protected onCreate(savedInstanceState: android.os.Bundle): void {
        if (!this._callbacks) {
            setActivityCallbacks(this);
        }

        this._callbacks.onCreate(this, savedInstanceState, super.onCreate);

        // const options = new com.urbanairship.AirshipConfigOptions.Builder()
        //     .setDevelopmentAppKey(urbanAirshipSettings.developmentAppKey)
        //     .setDevelopmentAppSecret(urbanAirshipSettings.developmentAppSecret)
        //     .setProductionAppKey(urbanAirshipSettings.productionAppKey)
        //     .setProductionAppSecret(urbanAirshipSettings.productionAppSecret)
        //     .setInProduction(urbanAirshipSettings.inProduction)
        //     .setGcmSender(urbanAirshipSettings.gcmSender)
        //     .build();
        //
        // com.urbanairship.UAirship.takeOff(application.android.context, options);
    }

    protected onSaveInstanceState(outState: android.os.Bundle): void {
        this._callbacks.onSaveInstanceState(this, outState, super.onSaveInstanceState);
    }

    protected onStart(): void {
        this._callbacks.onStart(this, super.onStart);
    }

    protected onStop(): void {
        this._callbacks.onStop(this, super.onStop);
    }

    protected onDestroy(): void {
        this._callbacks.onDestroy(this, super.onDestroy);
    }

    public onBackPressed(): void {
        this._callbacks.onBackPressed(this, super.onBackPressed);
    }

    public onRequestPermissionsResult(requestCode: number, permissions: Array<String>, grantResults: Array<number>): void {
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    }

    protected onActivityResult(requestCode: number, resultCode: number, data: android.content.Intent): void {
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, super.onActivityResult);
    }
}