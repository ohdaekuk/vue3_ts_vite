import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
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
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/Error.vue'),
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.authRequired && !store.getters['auth/isLogin']) {
    console.log('인증이 필요합니다');

    next('/login');
    return;
  }
  next();
});

export default router;
