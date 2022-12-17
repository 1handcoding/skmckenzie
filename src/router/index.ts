import { createRouter, createWebHistory } from 'vue-router'
import AboutView from "../views/AboutView.vue";
import AlphaView from "../views/AlphaView.vue";
import BetaView from "../views/BetaView.vue";
import DeltaView from "../views/DeltaView.vue";
import GammaView from "../views/GammaView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/aboutview",
      name: "about",
      component: AboutView,
    },
    {
      path: "/alphaview",
      name: "alpha",
      component: AlphaView,
    },
    {
      path: "/betaview",
      name: "beta",
      component: BetaView,
    },
    {
      path: "/deltaview",
      name: "delta",
      component: DeltaView,
    },
    {
      path: "/gammaview",
      name: "gamma",
      component: GammaView,
    },
  ]
})

export default router
