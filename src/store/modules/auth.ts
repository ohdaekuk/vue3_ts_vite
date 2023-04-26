import type { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import type { RootState } from '@/store/index';
import { loginUser } from '@/api/auth';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';

export interface BaseAuth {
  isLogin?: boolean;
  token?: string;
  username?: string;
  password?: string;
  nickname?: string;
}

export interface loginRes {
  data: {
    success: boolean;
    user: {
      username: string;
      nickname: string;
    };
    message: string;
    token: string;
  };
}

const state = (): BaseAuth => ({
  isLogin: false,
  username: getUserFromCookie() || '',
  token: getAuthFromCookie() || '',
  password: '',
  nickname: '',
});

const getters: GetterTree<BaseAuth, RootState> = {
  isLogin(state) {
    return state.username !== '';
  },
};

export enum MutationTypes {
  SET_ISLOGIN = 'SET_ISLOGIN',
  SET_USER = 'SET_USER',
  SET_TOKEN = 'SET_TOKEN',
  CLEAR_USERNAME = 'CLEAR_USERNAME',
  CLEAR_TOKEN = 'CLEAR_TOKEN',
}

const mutations: MutationTree<BaseAuth> = {
  [MutationTypes.SET_ISLOGIN](state, payload) {
    state.isLogin = true;
  },
  [MutationTypes.SET_USER](state, data) {
    state.username = data.nickname;
  },
  [MutationTypes.SET_TOKEN](state, token) {
    state.token = token;
  },
  [MutationTypes.CLEAR_TOKEN](state) {
    state.token = '';
  },
  [MutationTypes.CLEAR_USERNAME](state) {
    state.username = '';
  },
};

export enum ActionType {
  LOGIN = 'LOGIN',
}

const actions: ActionTree<BaseAuth, RootState> = {
  async [ActionType.LOGIN]({ commit }, userData) {
    const { data } = await loginUser(userData);
    commit(MutationTypes.SET_TOKEN, data.token);
    saveAuthToCookie(data.token);
    saveUserToCookie(data.user.username);

    commit(MutationTypes.SET_USER, data.user);

    return data;
  },
};

export const auth: Module<BaseAuth, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
