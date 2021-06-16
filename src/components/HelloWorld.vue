<template>
  <div class="hello">
    <el-breadcrumb style="margin: 0 auto; width: 100px">
      <el-breadcrumb-item :to="{ path: '/index' }">index</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Transition' }">Transition</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Layout' }">Layout</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Container' }">Container</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Style' }">Style</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Icon' }">Icon</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Button' }">Button</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Link' }">Link</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Radio' }">Radio</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Checkbox' }">Checkbox</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Input' }">Input</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/InputNumber' }">InputNumber</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Select' }">Select</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Cascader' }">Cascader</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Switcher' }">Switcher</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Slider' }">Slider</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/TimePicker' }">TimePicker</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/DatePicker' }">DatePicker</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/DateTimePicker' }">DateTimePicker</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Upload' }">Upload</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Rate' }">Rate</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/ColorPicker' }">ColorPicker</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Transfer' }">Transfer</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Form' }">Form</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Progress' }">Progress</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/NavMenu' }">NavMenu</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Steps' }">Steps</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
