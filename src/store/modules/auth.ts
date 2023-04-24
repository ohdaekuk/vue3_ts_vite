import type { ActionTree, GetterTree, Module, MutationTree } from 'vuex';
import type { RootState } from '@/store/index';

export interface BaseAuth {
  isLogin: boolean;
}

const state = (): BaseAuth => ({
  isLogin: false,
});

const getters: GetterTree<BaseAuth, RootState> = {
  getIsLogin(state) {
    return state.isLogin;
  },
};

export enum MutationType {
  SET_ISLOGIN = 'SET_ISLOGIN',
}

const mutations: MutationTree<BaseAuth> = {
  [MutationType.SET_ISLOGIN](state, payload) {
    state.isLogin = true;
  },
};

export enum ActionType {}

const actions: ActionTree<BaseAuth, RootState> = {};

export const auth: Module<BaseAuth, RootState> = {
  state,
  mutations,
  getters,
  actions,
};
