import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage.vue';
import SignUp from '../views/SignUpForm.vue';
import LoginUser from '@/components/LoginUser.vue';
import Prof from '@/components/LoginProf.vue';
import Eleve from '@/components/LoginEleve.vue';

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
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginUser
  },
  {
    path: '/Prof',
    name: 'Prof',
    component: Prof
  },
  {
    path: '/Eleve',
    name: 'Eleve',
    component: Eleve
  }
];

const router = new Router({
  mode: 'history',
  routes
});

export default router;
