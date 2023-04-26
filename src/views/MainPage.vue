<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>

      <LoadingSpinner v-if="isLoading"></LoadingSpinner>

      <ul v-else>
        <PostListItem
          v-for="postItem in postItems"
          :key="postItem._id"
          :items="postItem"
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
import { fetchPosts } from '@/api/posts';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import PostListItem from '@/components/posts/PostListItem.vue';
import { defineComponent, reactive, ref, toRefs } from 'vue';

export default defineComponent({
  components: { LoadingSpinner, PostListItem },
  setup() {
    const isLoading = ref<boolean>(false);
    const state = reactive({
      postItems: [],
    });

    const fetchData = async () => {
      isLoading.value = true;
      const { data } = await fetchPosts();
      state.postItems = data.posts;
      isLoading.value = false;

      // console.log('피카피카', state.postItems);
    };

    fetchData();
    return { isLoading, ...toRefs(state), fetchData };
  },
});
</script>

<style scoped></style>
