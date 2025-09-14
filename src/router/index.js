import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import IndexView from '@/views/dashboard/IndexView.vue'
import OrderView from '@/views/dashboard/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { guest: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guest: true },
    },
    {
      path: '/customer/dashboard',
      name: 'dashboard',
      component: IndexView,
      meta: { auth: true },
    },
    {
      path: '/customer/order',
      name: 'order',
      component: OrderView,
      meta: { auth: true },
    },
  ],
})

export default router
