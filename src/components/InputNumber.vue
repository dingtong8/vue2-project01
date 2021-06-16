<template>
  <div>
    <h1>基础用法</h1>
    <div>
      <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    </div>
    <h1>禁用状态</h1>
    <div>
      <el-input-number v-model="num2" :disabled="true"></el-input-number>
    </div>
    <h1>步数(步长)</h1>
    <div>
      <el-input-number v-model="num3" :step="2"></el-input-number>
    </div>
    <h1>严格步数</h1>
    <div>
      <el-input-number v-model="num4" :step="2" step-strictly></el-input-number>
    </div>
    <h1>精度</h1>
    <div>
      <el-input-number v-model="num5" :precision="2" :step="0.1" :max="10"></el-input-number>
    </div>
    <h1>尺寸</h1>
    <div>
      <el-input-number v-model="num6"></el-input-number>
      <el-input-number size="medium" v-model="num7"></el-input-number>
      <el-input-number size="small" v-model="num8"></el-input-number>
      <el-input-number size="mini" v-model="num9"></el-input-number>
    </div>
    <h1>按钮位置</h1>
    <div>
      <el-input-number v-model="num10" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data: () => ({
    num1: 1,
    num2: 1,
    num3: 1,
    num4: 2,
    num5: 1,
    num6: 1,
    num7: 1,
    num8: 1,
    num9: 1,
    num10: 1
  }),
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>
