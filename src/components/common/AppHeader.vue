<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isUserLogin">by {{ username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <!-- 1 -->
      <template v-if="isUserLogin">
        <a href="javascript:;" @click="logoutUser" class="logout-button">
          Logout
        </a>
      </template>
      <!-- 2 -->
      <template v-else>
        <router-link to="/login">로그인</router-link>
        <router-link to="/signup">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script lang="ts">
import store from '@/store';
import { deleteCookie } from '@/utils/cookies';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { MutationTypes } from '@/store/modules/auth';

export default defineComponent({
  setup() {
    // const store = useStore();
    const router = useRouter();

    const state = reactive({
      username: computed(() => store.state.auth.username),
    });

    const logoutUser = () => {
      store.commit('auth/' + MutationTypes.CLEAR_TOKEN);
      store.commit('auth/' + MutationTypes.CLEAR_USERNAME);
      deleteCookie('til_auth');
      deleteCookie('til_user');
      router.push('/login');
    };

    const logoLink = computed(() => {
      return store.getters['auth/isLogin'] ? '/main' : '/login';
    });

    const isUserLogin = computed(() => {
      return store.getters['auth/isLogin'];
    });
    return { logoLink, isUserLogin, ...toRefs(state), logoutUser };
  },
});
</script>

<style scoped>
.username {
  color: white;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #dedede;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
.logout-button {
  font-size: 14px;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
