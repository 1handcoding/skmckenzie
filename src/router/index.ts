import { createRouter, createWebHistory } from 'vue-router'
import AlphaView from "../views/AlphaView.vue";
import BetaView from "../views/BetaView.vue";
import DeltaView from "../views/DeltaView.vue";
import GammaView from "../views/GammaView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: AlphaView,
    },
    {
      path: "/alphaview",
      name: "alphaview",
      component: AlphaView,
    },
    {
      path: "/betaview",
      name: "betaview",
      component: BetaView,
    },
    {
      path: "/deltaview",
      name: "deltaview",
      component: DeltaView,
    },
    {
      path: "/gammaview",
      name: "gammaview",
      component: GammaView,
    },
  ]
})

export default router
