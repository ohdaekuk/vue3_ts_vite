<template>
  <div class="form-container">
    <PostEditForm></PostEditForm>
  </div>
</template>

<script lang="ts">
import PostEditForm from '@/components/posts/PostEditForm.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { PostEditForm },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
