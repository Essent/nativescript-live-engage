export interface CommonLiveEngage {

  initializeChat(brandId: string, appId: string): void;

  showChat(): void;

  setUserProfileValues(firstName: string, lastName: string, nickName: string, phone: string, avatarUrl: string): void;
}