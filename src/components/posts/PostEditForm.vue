<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
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
          Edit
        </button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { editPost, fetchPost } from '@/api/posts';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    const state = reactive({
      title: '',
      contents: '',
      logMessage: '',
      id: computed(() => {
        return route.params.id;
      }),
    });

    const isContentsValid = computed(() => {
      return state.contents.length <= 200;
    });

    const submitForm = async () => {
      try {
        await editPost(state.id as string, {
          title: state.title,
          contents: state.contents,
        });
        router.push('/main');
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDataById = async () => {
      const { data } = await fetchPost(state.id as string);
      state.title = data.title;
      state.contents = data.contents;
    };

    fetchDataById();
    return { ...toRefs(state), isContentsValid, submitForm };
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
