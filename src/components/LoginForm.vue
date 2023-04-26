<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="pqssword" v-model="password" />
        </div>
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          로그인
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue';
import { validateEmail } from '@/utils/validation';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ActionType } from '@/store/modules/auth';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const loginData = reactive({
      username: '',
      password: '',
      logMessage: '',
    });

    const submitForm = async () => {
      try {
        const userData = {
          username: loginData.username,
          password: loginData.password,
        };
        await store.dispatch('auth/' + ActionType.LOGIN, userData);

        router.push('/main');
      } catch (error) {
        console.log(error);
      }
      return;
    };

    const isUsernameValid = computed(() => {
      return validateEmail(loginData.username);
    });

    return { ...toRefs(loginData), isUsernameValid, submitForm };
  },
});
</script>

<style scoped></style>
