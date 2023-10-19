import { createRouter, createWebHistory } from 'vue-router';
import CreateUserVue from '../views/CreateUser.vue'
import UsersListVue from "../views/UsersList.vue"
import HomeVue from "../views/home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/createuser",
      component: CreateUserVue
    },
    {
      path:"/users",
      component : UsersListVue
    },
    {
      path :"/",
      component:HomeVue
    }
  ]
});

export default router;