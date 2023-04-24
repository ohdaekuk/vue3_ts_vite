<template>
  <div>
    <AppHeader></AppHeader>
    <div class="app-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/common/AppHeader.vue';

export default defineComponent({
  components: { AppHeader },
  setup() {
    return {};
  },
});
</script>

<style>
@import url('@/css/common.css');
@import url('@/css/reset.css');
</style>
