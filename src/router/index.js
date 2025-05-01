import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'; // Импортируем компонент Home

const routes = [
  { path: '/', component: Home }, // Оставляем только маршрут для Home
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;