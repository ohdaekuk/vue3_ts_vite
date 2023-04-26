<template>
  <div>
    <h1 class="page-header">로그인 페이지</h1>
    <LoginForm></LoginForm>
  </div>
</template>

<script lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    LoginForm,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
