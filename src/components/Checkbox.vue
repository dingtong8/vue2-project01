<template>
  <div>
    <h1>基础用法</h1>
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <h1>禁用状态</h1>
    <el-checkbox v-model="checked1" disabled>备选项</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    <h1>多选框组</h1>
    <el-checkbox-group v-model="checklist">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <h1>indeterminate 状态</h1>
    <!-- @change 当绑定值变化时触发的事件-->
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <!-- @change 当绑定值变化时触发的事件-->
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <h1>可选项目数量的限制</h1>
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <h1>按钮样式</h1>
    <div>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup2" size="medium">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup3" size="small">
        <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <h1>带有边框</h1>
    <div>
      <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
      <el-checkbox v-model="checked4" label="备选项2" border></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox v-model="checked5" label="备选项1" border size="medium"></el-checkbox>
      <el-checkbox v-model="checked6" label="备选项2" border size="medium"></el-checkbox>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup5" size="small">
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border disabled></el-checkbox>
      </el-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  name: 'Checkbox',
  data: () => ({
    checked: true,
    checked1: false,
    checked2: true,
    checklist: ['选中且禁用', '复选框 A'],
    checkAll: false,
    checkedCities: ['上海', '北京'],
    cities: cityOptions,
    isIndeterminate: true,
    checkboxGroup1: ['上海'],
    checkboxGroup2: ['上海'],
    checkboxGroup3: ['上海'],
    checkboxGroup4: ['上海'],
    checked3: true,
    checked4: false,
    checked5: true,
    checked6: false,
    checkboxGroup5: [],
    checkboxGroup6: []
  }),
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkCount = value.length
      // 后面两个为真，则第一个为 true，否则为 false
      this.checkAll = checkCount === this.cities.length
      // this.checkAll = (checkCount === this.cities.length)
      console.log(this.checkAll, checkCount, this.cities.length)
      // 后面两个为真，则第一个为 true，否则为 false
      this.isIndeterminate = checkCount > 0 && checkCount < this.cities.length
      // this.isIndeterminate = (checkCount > 0 && checkCount < this.cities.length)
      console.log(this.isIndeterminate, checkCount, this.cities.length)
    }
  }
}
</script>

<style scoped>

</style>
