import Vue from 'vue'
import Router from 'vue-router'
import home from './component/home.vue'

Vue.use(Router);

const routes = [
      {
          path :'/home',
          name:'index',
          component: home  
      }
]

const router = new Router({
    routes: routes
});

export default router;