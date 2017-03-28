export interface CommonLiveEngage {

  initializeChat(brandId: string, appId: string): void;

  showChat(): void;

  setUserProfileValues(chatProfile: ChatProfile): void;
}

export interface ChatProfile {
  firstName: string;
  lastName: string;
  nickName: string;
  phone: string;
  avatarUrl: string;
}