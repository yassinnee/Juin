import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUp from '../views/SignUpForm.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
