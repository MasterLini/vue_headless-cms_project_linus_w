import { createRouter, createWebHistory } from "vue-router"
import PersonsView from "../views/PersonsView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "persons",
      component: PersonsView,
    },
  ],
})

export default router
