<template>
  <div>
    <h1 class="page-header">회원 가입 페이지</h1>
    <SignupForm></SignupForm>
  </div>
</template>

<script lang="ts">
import SignupForm from '@/components/SignupForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { SignupForm },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
