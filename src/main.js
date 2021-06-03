// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// eslint-disable-next-line no-unused-vars,import/no-duplicates
import ElementUI, { Button, Select } from 'element-ui'
// eslint-disable-next-line import/no-duplicates
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Select)
Vue.use(Element, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
