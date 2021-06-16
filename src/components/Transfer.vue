<template>
  <div>
<!--    <h1>基础用法</h1>-->
<!--    <el-transfer v-model="value1" :data="data"></el-transfer>-->
    <h1>可搜索</h1>
    <el-transfer
      filterable
      :filter-method="filterMethod"
      filter-placeholder="请输入城市拼音"
      v-model="value2"
      :data="data2"
    ></el-transfer>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data () {
    // const generateData = _ => {
    //   const data = []
    //   for (let i = 1; i <= 15; i++) {
    //     data.push({
    //       key: i,
    //       label: `备选项 ${i}`,
    //       disabled: i % 4 === 0
    //     })
    //   } return data
    // }
    // return {
    //   data: generateData(),
    //   value1: [1, 4]
    // }
    const generateData2 = _ => {
      const data = []
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
      // forEach() 列出数组的每个元素
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        })
      })
      // data = [ '上海', 0, 'shanghai' ]
      return data
    }
    return {
      data2: generateData2(),
      value2: [],
      filterMethod (query, item) {
        // true 显示对应的数据
        // query 被搜索的字段
        // item data中的对象
        // console.log(query, item)
        return item.pinyin.indexOf(query) > -1
      }
    }
  }
}
</script>

<style scoped>

</style>
