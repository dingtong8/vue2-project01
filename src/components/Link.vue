<template>
  <div>
    <h1>基础用法</h1>
    <el-link href="https://element.eleme.cn/2.15/#/zh-CN/component/link" target="_blank">默认链接</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功链接</el-link>
    <el-link type="warning">警告链接</el-link>
    <el-link type="danger">危险链接</el-link>
    <el-link type="info">信息链接</el-link>
    <h1>禁用状态</h1>
    <div>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
    <h1>下划线</h1>
    <div>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </div>
    <h1>图标</h1>
    <div>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Link'
}
</script>

<style scoped>

</style>
