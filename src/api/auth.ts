import { instance } from '@/api/index';
import { type loginRes } from '@/store/modules/auth';
import type { StartType } from '@/types/apiTypes';

// 로그인, 회원가입, 회원탈퇴

// 회원가입 API
function registerUser(userData: StartType) {
  return instance.post('signup', userData);
}

// 로그인 API
function loginUser(userData: StartType): Promise<loginRes> {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
