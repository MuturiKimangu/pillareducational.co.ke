import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../src/components/Index.vue';
import About from '../../src/components/about-us.vue';
import labinstall from '../../src/components/lab-install.vue';
import aboutmini from '../../src/components/about-mini.vue';

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/aboutmini',
    name: 'aboutmini',
    component: aboutmini,
  },

  {
    path: '/labinstall',
    name: 'labinstall',
    component: labinstall,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

