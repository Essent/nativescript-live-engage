import { UrbanAirshipSettings } from 'nativescript-urban-airship';

export const urbanAirshipSettings: UrbanAirshipSettings = {
    developmentAppKey: "Your Development App Key",
    developmentAppSecret: "Your Development Secret",
    // FCM/GCM Sender ID
    gcmSender: "Your Google API Project Number",
    detectProvisioningMode: false,
    // Toggles between the development and production app credentials
    // Before submitting your application to an app store set to true
    inProduction: false,
    productionAppKey: "Your Production App Key",
    productionAppSecret: "Your Production Secret"
};