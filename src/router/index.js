import { createRouter, createWebHistory } from '@ionic/vue-router';
import MainList from '../components/mainList.vue';


const routes = [
  {
    path: '/',
    redirect: '/mainlist',

  },
  {
    path: '/mainlist',
    component: MainList,
  },
  {
    path: '/addexpenses',
    component: () => import('../components/addExpenses.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
