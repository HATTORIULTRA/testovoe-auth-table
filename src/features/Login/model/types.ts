export type FieldType = {
  username: string;
  password: string;
  remember: string;
};

export interface UserData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface IAuthState {
  user: UserData | null;
  isLoading: boolean;
  isAuthChecked: boolean;
}
