import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'), // Lazy load
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'), // Lazy load
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router