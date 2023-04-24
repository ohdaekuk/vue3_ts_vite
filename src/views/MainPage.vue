<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>

      <LoadingSpinner v-if="isLoading"></LoadingSpinner>

      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :postItem="postItem"
          @refresh="fetchData"
        >
        </PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const isLoading = ref<boolean>(false);
    const state = reactive({
      postItems: {},
    });

    const fetchData = async () => {
      isLoading.value = true;
      const { data } = await store.dispatch('');
      state.postItems = data;
      isLoading.value = false;
    };

    // fetchData();
    return { isLoading, ...toRefs(state) };
  },
});
</script>

<style scoped></style>
