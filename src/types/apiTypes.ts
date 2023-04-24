export interface SignupType {
  driver: boolean;
  name: string;
  index: number;
  code: number;
  keyPattern: {
    username: number;
  };
  keyValue: {
    username: string;
  };
}

export interface LoginType {
  success: boolean;
  user: {
    username: string;
    nickname: string;
  };
  message: string;
  token: string;
}

export interface PostsData {
  title: string;
  contents: string;
}
