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
    },
    {
      path: '/Container',
      name: 'Container',
      component: () => import('../components/Container')
    },
    {
      path: '/Style',
      name: 'Style',
      component: () => import('../components/Style')
    },
    {
      path: '/Icon',
      name: 'Icon',
      component: () => import('../components/Icon')
    },
    {
      path: '/Button',
      name: 'Button',
      component: () => import('../components/Button')
    },
    {
      path: '/Link',
      name: 'Link',
      component: () => import('../components/Link')
    },
    {
      path: '/Radio',
      name: 'Radio',
      component: () => import('../components/Radio')
    },
    {
      path: '/Checkbox',
      name: 'Checkbox',
      component: () => import('../components/Checkbox')
    },
    {
      path: '/Input',
      name: 'Input',
      component: () => import('../components/Input')
    },
    {
      path: '/InputNumber',
      name: 'InputNumber',
      component: () => import('../components/InputNumber')
    },
    {
      path: '/Select',
      name: 'Select',
      component: () => import('../components/Select')
    },
    {
      path: '/Cascader',
      name: 'Cascader',
      component: () => import('../components/Cascader')
    },
    {
      path: '/Switcher',
      name: 'Switcher',
      component: () => import('../components/Switcher')
    },
    {
      path: '/Slider',
      name: 'Slider',
      component: () => import('../components/Slider')
    },
    {
      path: '/TimePicker',
      name: 'TimePicker',
      component: () => import('../components/TimePicker')
    },
    {
      path: '/DatePicker',
      name: 'DatePicker',
      component: () => import('../components/DatePicker')
    },
    {
      path: '/DateTimePicker',
      name: 'DateTimePicker',
      component: () => import('../components/DateTimePicker')
    },
    {
      path: '/Upload',
      name: 'Upload',
      component: () => import('../components/Upload')
    },
    {
      path: '/Rate',
      name: 'Rate',
      component: () => import('../components/Rate')
    },
    {
      path: '/ColorPicker',
      name: 'ColorPicker',
      component: () => import('../components/ColorPicker')
    },
    {
      path: '/Transfer',
      name: 'Transfer',
      component: () => import('../components/Transfer')
    },
    {
      path: '/Form',
      name: 'Form',
      component: () => import('../components/Form')
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: () => import('../components/Progress')
    },
    {
      path: '/NavMenu',
      name: 'NavMenu',
      component: () => import('../components/NavMenu')
    },
    {
      path: '/Steps',
      name: 'Steps',
      component: () => import('../components/Steps')
    }
  ]
})
