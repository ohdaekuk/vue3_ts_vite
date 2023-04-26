import createPersistedState from 'vuex-persistedstate';
import { createStore } from 'vuex';
import { auth, type BaseAuth } from './modules/auth';

export interface RootState {
  auth: BaseAuth;
  user: BaseAuth;
  token: string;
}

const modules = {
  auth,
};
const plugins = [
  createPersistedState({
    paths: ['auth'],
  }),
];

export default createStore({
  modules,
  plugins,
});
