<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { registerUser } from '@/api/auth';
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const signupData = reactive({
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    });

    const submitForm = async () => {
      const userData = {
        username: signupData.username,
        password: signupData.password,
        nickname: signupData.nickname,
      };

      const { data } = await registerUser(userData);

      signupData.logMessage = `${data.username} 님이 가입되었습니다.`;
      signupData.username = '';
      signupData.password = '';
      signupData.nickname = '';
    };
    return { ...toRefs(signupData), submitForm };
  },
});
</script>

<style scoped></style>
