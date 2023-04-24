import { instance } from '@/api/index';
import { SignupType, LoginType } from '@/types/apiTypes';

// 로그인, 회원가입, 회원탈퇴

// 회원가입 API
function registerUser(userData: SignupType) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData: LoginType) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
