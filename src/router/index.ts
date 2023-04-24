import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
    },
    // {
    //   path: '/:pathMatch(.*)*',
    //   component: () => import('@/views/Error.vue'),
    // },
  ],
});

// router.beforeEach(async (to, from, next) => {});

export default router;
