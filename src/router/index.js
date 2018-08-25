import Vue from 'vue'
import Router from 'vue-router'
import Profile from '../components/profile'
import User from '../components/user'
import Events from '../components/events'
import EventDetail from '../components/eventDetail'
import ProfileSite from '../components/profileSite'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/event/:id',
      name: 'EventDetail',
      component: EventDetail
    },
    {
      path: '/',
      name: 'ProfileSite',
      component: ProfileSite
    }
  ]
})
