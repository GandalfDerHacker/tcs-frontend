import Vue from 'vue'
import Router from 'vue-router'
import Profile from '../components/profile'
import Events from '../components/events'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Events',
      component: Events
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
