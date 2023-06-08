import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/account',
    },
    {
      path: '/account',
      name: 'AccountList',
      component: () => import('@/views/Account/AccountList.vue'),
    },
    {
      path: '/account/add',
      name: 'CreateAccount',
      component: () => import('@/views/Account/CreateAccount.vue'),
    },
    {
      path: '/CreateAdmin/:id',
      name: 'CreateAdmin',
      component: () => import('@/views/Account/CreateAdmin.vue'),
    },
  ],
});

export default router;
