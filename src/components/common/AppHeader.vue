<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isUserLogin">by {{ $store.state.username }}</span>
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
// import { useRoute } from 'vue-router';
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    // const state =

    // }

    const logoLink = computed(() => {
      return store.getters['auth/getIsLogin'] ? '/main' : '/login';
    });
    const isUserLogin = computed(() => {
      return store.getters['auth/getIsLogin'];
    });
    return { logoLink, isUserLogin };
  },
});
</script>

<style scoped></style>
