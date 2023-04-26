<template>
  <div class="form-container">
    <PostAddForm></PostAddForm>
  </div>
</template>

<script lang="ts">
import PostAddForm from '@/components/posts/PostAddForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { PostAddForm },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
