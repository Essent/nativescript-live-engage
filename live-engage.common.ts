import { Property } from 'ui/core/dependency-observable';
import * as proxy from 'ui/core/proxy';
import * as view from 'ui/core/view';

export abstract class LiveEngage extends view.View {
  private static brandIdProperty = new Property('brandId', 'LiveEngage', new proxy.PropertyMetadata(''));
  private static appIdProperty = new Property('appId', 'LiveEngage', new proxy.PropertyMetadata(''));
  private static firstNameProperty = new Property('firstName', 'LiveEngage', new proxy.PropertyMetadata(''));
  private static lastNameProperty = new Property('lastName', 'LiveEngage', new proxy.PropertyMetadata(''));
  private static phoneProperty = new Property('phone', 'LiveEngage', new proxy.PropertyMetadata(''));

  public static initializeChat(brandId: string): void {};

  public get brandId(): string {
    return this._getValue(LiveEngage.brandIdProperty).toString();
  }

  public set brandId(value: string) {
    this._setValue(LiveEngage.brandIdProperty, value);
  }

  public get appId(): string {
    return this._getValue(LiveEngage.appIdProperty).toString();
  }

  public set appId(value: string) {
    this._setValue(LiveEngage.appIdProperty, value);
  }

  public get firstName(): string {
    return this._getValue(LiveEngage.firstNameProperty).toString();
  }

  public set firstName(value: string) {
    this._setValue(LiveEngage.firstNameProperty, value);
    this.setUserProfile();
  }

  public get lastName(): string {
    return this._getValue(LiveEngage.lastNameProperty).toString();
  }

  public set lastName(value: string) {
    this._setValue(LiveEngage.lastNameProperty, value);
    this.setUserProfile();
  }

  public get phone(): string {
    return this._getValue(LiveEngage.phoneProperty).toString();
  }

  public set phone(value: string) {
    this._setValue(LiveEngage.phoneProperty, value);
    this.setUserProfile();
  }

  public abstract loadChat(brandId: string, appId: string);

  public abstract setUserProfile();

}

try {
  const registerElement = require('nativescript-angular/element-registry').registerElement;
  registerElement('LiveEngage', () => require('./live-engage').LiveEngage);
} catch (e) {
  // it's ok. nativescript-angular isn't installed.
}

