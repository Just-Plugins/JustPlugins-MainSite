import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Plugins from "../views/Plugins.vue";
import PluginView from "../views/PluginView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/plugins',
        name: 'Plugins',
        component: Plugins
      },
      {
        path: '/plugins/:plugin',
        name: 'Plugin',
        component: PluginView
      },
      // Catch all 404
      {
        path: '/:catchAll(.*)',
        name: '404',
        component: NotFound
      }
    ]
  })

export default router