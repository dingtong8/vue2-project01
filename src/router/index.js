import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import index from '../components/index'
import Transition from '../components/Transition'
import Layout from '../components/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/Transition',
      name: 'Transition',
      component: Transition
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
