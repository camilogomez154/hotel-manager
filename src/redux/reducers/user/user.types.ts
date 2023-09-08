export interface UserInformationMetadataType {
  nickname: string;
  name: string;
}

export interface UserInformationType {
  metadata: UserInformationMetadataType;
  phone: string;
  email: string;
  id: string;
}

export interface UserSessionType {
  refresh_token: string;
  access_token: string;
  token_type: string;
  expires_in: number;
  expires_at?: number;
}

export interface UserTypes {
  information?: UserInformationType;
  session?: UserSessionType;
  loading: boolean;
  signIn: boolean;
  error: unknown;
}
