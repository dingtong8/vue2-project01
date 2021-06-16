<template>
  <div>
    <h1>基本用法</h1>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <h1>文字描述</h1>
    <el-switch
      v-model="value1"
      active-text="按月付费"
      inactive-text="按年付费">
    </el-switch>
    <el-switch
      style="display: block"
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费">
    </el-switch>
    <h1>扩展的 value 类型</h1>
    <el-tooltip :content="'Switch value: ' + value" placement="top">
      <el-switch
        v-model="value3"
        active-color="13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0"
      ></el-switch>
    </el-tooltip>
    <h1>禁用状态</h1>
    <el-switch
      v-model="value1"
      disabled>
    </el-switch>
    <el-switch
      v-model="value3"
      disabled>
    </el-switch>
  </div>
</template>

<script>
export default {
  name: 'Switcher',
  data: () => ({
    value: true,
    value1: true,
    value2: true,
    value3: false
  })
}
</script>

<style scoped>

</style>
