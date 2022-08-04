export interface UserData {
  username: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  name: string;
  sex: string;
  campus: string;
  faculty: string;
  email: string;
}

export interface LoginStatusResponse {
  jwt: string;
  user: UserData;
}
