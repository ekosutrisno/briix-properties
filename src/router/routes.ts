import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home-page',
        component: () => import('@/views/HomePage.vue')
    }
]

export default routes;