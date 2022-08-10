export interface UserData {
  username: string;
  name: string;
  sex: string;
  campus: string;
  faculty: string;
}

export interface LoginStatusResponse {
  jwt: string;
  user: UserData;
}
