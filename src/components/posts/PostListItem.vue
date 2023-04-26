<template>
  <li class="main-body">
    <div class="post-title">
      {{ propsPostItem.title }}
    </div>
    <div class="post-contents">
      {{ propsPostItem.contents }}
    </div>
    <div class="post-time">
      {{ formatDate(propsPostItem.createdAt) }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { deletePost } from '@/api/posts';
import { useRouter } from 'vue-router';
import { formatDate } from '@/utils/filters';

export default defineComponent({
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const state = reactive({
      propsPostItem: props.items,
    });

    const deleteItem = async () => {
      if (confirm('You want to delete it?')) {
        await deletePost(props.items._id);
        emit('refresh');
      }
    };
    const routeEditPage = () => {
      router.push(`/post/${props.items._id}`);
    };

    return { routeEditPage, deleteItem, ...toRefs(state), formatDate };
  },
});
</script>

<style scoped>
.main-body {
  margin-top: 4.5%;
}
</style>
