<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title: </label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents: </label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 200
          </p>
        </div>
        <button class="btn" type="submit" :disabled="!isContentsValid">
          Create
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { createPost } from '@/api/posts';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const addData = reactive({
      title: '',
      contents: '',
      logMessage: '',
    });

    const submitForm = async () => {
      try {
        await createPost({
          title: addData.title,
          contents: addData.contents,
        });

        router.push('main');
      } catch (error) {
        console.log(error);
        addData.logMessage = error as string;
      }
    };

    const isContentsValid = computed(() => {
      return addData.contents.length <= 200;
    });

    return { ...toRefs(addData), isContentsValid, submitForm };
  },
});
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>
