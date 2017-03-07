# NativeScript plugin for LivePerson LiveEngage

This is a plugin to show the conversation from a LiveEngage chat, using the LP-Messaging SDK ([Android](https://github.com/LP-Messaging/Android-Messaging-SDK), [iOS](https://github.com/LP-Messaging/iOS-Messaging-SDK)) v1.5.
To use this plugin you need to have an account from [LivePerson](https://www.liveperson.com).

# Usage

## Demo

Check out the [demo](./demo) folder for a sample usage.

## Angular 2

If you're using the plugin with Angular 2, the plugin automatically registers
`LiveEngage` as a valid tag for Angular templates. Usage is simple:

1. Add the plugin to your project:

  ```ts
  tns plugin add nativescript-live-engage
  ```

2. Make sure to import `nativescript-live-engage` somewhere in your code, e.g:

  ```ts
  import 'nativescript-live-engage';
  ```

3. Include the tag in your template with your credentials:

  ```html
  <LiveEngage brandId="12345678" appId="com.example.myapp"></LiveEngage>
  ```

4. For Android: Make sure the main activity in your AndroidManifest extends `android.support.v7.app.AppCompatActivity`, check out our [main activity](./demo/app/activity.android.ts) as an example.

5. Optional: Add the first name, last name or phone number of a user.

  ```html
  <LiveEngage  ...  firstName="John" lastName="Doe" phone="0123456789"></LiveEngage>
  ```


# Try the Demo

To try the demo run the following commands:

```sh
npm run setup
npm run demo.ios
npm run demo.android
```
