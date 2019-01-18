# NativeScript plugin for LivePerson LiveEngage

[![npm version](https://img.shields.io/npm/v/nativescript-live-engage.svg?style=flat-square)](https://www.npmjs.com/package/nativescript-live-engage)

This is a plugin to show the conversation from a LiveEngage chat, using the LP-Messaging SDK ([Android](https://github.com/LP-Messaging/Android-Messaging-SDK) v3.5.0, [iOS](https://github.com/LP-Messaging/iOS-Messaging-SDK) v3.5.0).

## Requirements
* Xcode 10.x
* Android SDK 28
* NativeScript CLI 5.x
* [LivePerson account](https://www.liveperson.com)

## Installation
Run the following command from the root of your project:

```console
npm install nativescript-live-engage
```

### Setup
At the launch of your app call `initializeChat` with your credentials (our example [main.ts](./demo/app/main.ts)):
```ts
LiveEngage.getInstance().initializeChat('12345678', 'com.example.myapp');
```

#### Android
1. Set the minSdkVersion to at least 19, in your [AndroidManifest.xml](./demo/app/App_Resources/Android/AndroidManifest.xml) and [app.gradle](./demo/app/App_Resources/Android/app.gradle).
   
2. Include the following dependencies in the include.gradle file of your app:
   ```gradle
     compile "com.android.support:appcompat-v7:24.2.1"
     compile "com.android.support:design:24.2.1"
     compile "com.android.support:percent:24.2.1"
     compile 'com.google.android.gms:play-services-maps:9.8.0'
     compile 'com.android.support.constraint:constraint-layout:1.0.2'
   
     compile 'com.squareup.picasso:picasso:2.5.2'
     compile 'com.neovisionaries:nv-websocket-client:1.31'
     compile 'com.squareup.okhttp3:okhttp:3.6.0'
     ```

#### iOS
You need to enable keychain sharing, to do this we need a custom entitlements file with a keychain-access-groups key.

Add [nativescript-custom-entitlements](https://github.com/Essent/nativescript-custom-entitlements) to your devDependencies and create a new entitlements file like our example [app.entitlements](./demo/app/App_Resources/iOS/app.entitlements).

### Chatting
To open the chat window call `showChat`:
```ts
LiveEngage.getInstance().showChat();
```

### Optional functions

#### Setting customer information
Add the first name, last name, nick name, avatar url or phone number of a user.
```ts
const chatProfile: ChatProfile = {
          firstName: 'Jane',
          lastName: 'Doe',
          nickName: 'JD',
          phone: '0132100000',
          avatarUrl: ''
      };
LiveEngage.getInstance().setUserProfileValues(chatProfile);
```

#### oAuth
Add a JWT for oAuth support when starting a conversation. Make sure you configure the Live Person data source to support the oAuth 2 authentication in terms of Live person public keys, Signing identities and possible (custom) claims definitions. Make sure to call this method before you start the conversation.
```ts
LiveEngage.getInstance().setAuthenticationCode('<JWT encoded token string>');
```

#### Hiding chat
When you want to hide the chat window programmatically call `closeChat()`.
```ts
LiveEngage.getInstance().closeChat();
```

#### Logging Out
When you want to remove all user data and unregister for push notifications call `killChat()`.

```ts
LiveEngage.getInstance().killChat()
            .then(() => {
                console.log('killChat success');
            }).catch((error: any) => {
                console.log('killChat error', error);
        });
```

#### Push Notifications
To recieve push notifications when the agent sends a new message you need to send the push token to LivePerson.
When you have a push token (FCM for Android and APNS for iOS) you can send it to LivePerson using `registerPushToken`
```ts
LiveEngage.getInstance().registerPushToken('your-token');
```

#### Parsing message on Android
To parse the push notification message on android in `onMessageReceived()` in your FirebaseMessagingService, use `parsePushMessage()`.
This will return a `PushMessageParser` object which has the method `getMessage()` to return the title of the push message.
```ts
try {
    const message = LiveEngage.getInstance().parsePushMessage(data);
    console.log(message.getMessage());
} catch (e) {
    console.error("Failed to parse message:", e);
}
```

### Development setup

For easier development and debugging purposes continue with the following steps:

Open a command prompt/terminal, navigate to src folder and run `npm run demo.ios` or `npm run demo.android` to run the demo.

Now go and make a change to your plugin. It will be automatically applied to the demo project.

#### Clean plugin and demo files

Sometimes you may need to wipe away all generated folders to reinstall them fresh.
Run `npm run clean` to wipe those clean then you can can run `plugin.prepare` to install fresh dependencies.

Sometimes you just need to wipe out the demo's platforms, node_modules and hooks directory only.
Run ```npm run demo.reset``` to delete those.