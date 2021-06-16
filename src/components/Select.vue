<template>
  <div>
    <h1>基础用法</h1>
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </div>
    <h1>有禁用选项</h1>
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled">
        </el-option>
      </el-select>
    </div>
    <h1>禁用状态</h1>
    <div>
      <el-select v-model="value" disabled placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <h1>可清空单选</h1>
    <div>
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <h1>基础多选</h1>
    <div>
      <el-select v-model="value1" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select
        v-model="value2"
        multiple
        collapse-tags
        style="margin-left: 20px;"
        placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <h1>自定义模板</h1>
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
    </div>
    <h1>分组</h1>
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option-group
          v-for="group in options1"
          :key="group.label"
          :label="group.label">
          <el-option v-for="item in group.options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </div>
    <h1>可搜索</h1>
    <div>
      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <h1>远程搜索</h1>
    <div>
      <el-select
        v-model="value3"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading3">  <!-- loading 是否正在从远程获取数据-->
        <el-option
          v-for="item in options3"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <h1>创建条目</h1>
    <div>
      <el-select
        v-model="value4"
        multiple
        filterable
        allow-create
        default-first-option
        placeholder="请选择文章标签">
        <el-option
          v-for="item in options4"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data: () => ({
    options: [{
      value: '选项1',
      label: '黄金糕',
      disabled: true
    }, {
      value: '选项2',
      label: '双皮奶',
      disabled: false
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }],
    value: '',
    value1: '',
    value2: '',
    cities: [{
      value: 'Beijing',
      label: '北京'
    }, {
      value: 'Shanghai',
      label: '上海'
    }, {
      value: 'Nanjing',
      label: '南京'
    }, {
      value: 'Chengdu',
      label: '成都'
    }, {
      value: 'Shenzhen',
      label: '深圳'
    }, {
      value: 'Guangzhou',
      label: '广州'
    }],
    options1: [{
      label: '热门城市',
      options1: [{
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Beijing',
        label: '北京'
      }]
    }, {
      label: '城市名',
      options1: [{
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }, {
        value: 'Dalian',
        label: '大连'
      }]
    }],
    options3: [],
    value3: [],
    list3: [],
    loading3: false,
    states3: ['Alabama', 'Alaska', 'Arizona',
      'Arkansas', 'California', 'Colorado',
      'Connecticut', 'Delaware', 'Florida',
      'Georgia', 'Hawaii', 'Idaho', 'Illinois',
      'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Maryland',
      'Massachusetts', 'Michigan', 'Minnesota',
      'Mississippi', 'Missouri', 'Montana',
      'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York',
      'North Carolina', 'North Dakota', 'Ohio',
      'Oklahoma', 'Oregon', 'Pennsylvania',
      'Rhode Island', 'South Carolina',
      'South Dakota', 'Tennessee', 'Texas',
      'Utah', 'Vermont', 'Virginia',
      'Washington', 'West Virginia', 'Wisconsin',
      'Wyoming'],
    options4: [{
      value: 'HTML',
      label: 'HTML'
    }, {
      value: 'CSS',
      label: 'CSS'
    }, {
      value: 'JavaScript',
      label: 'JavaScript'
    }],
    value4: []
  }),
  // 钩子函数，为 method 函数提前定义变量
  mounted () {
    // array.map(function(currentValue,index,arr), thisValue) 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
    this.list3 = this.states3.map(item => {
      return {value: `value:${item}`, label: `label:${item}`}
    })
    console.log(this.list3)
  },
  methods: {
    // 在输入值发生变化时调用，参数为当前输入值。
    remoteMethod (query) {
      if (query !== '') {
        // loading 是否正在从远程获取数据
        this.loading3 = true
        setTimeout(() => {
          this.loading3 = false
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。数组中的每个元素都会执行这个函数，item：当前数组中的元素的值
          this.options3 = this.list3.filter(item => {
            console.log(item.label.toLowerCase().indexOf(query.toLowerCase()) > -1)
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1 // 一个一个的判断 item 值是否跟输入的 query 的值一样， 返回 true 或者 false
          })
        }, 200)
      } else {
        this.options3 = []
      }
    }
  }
}
</script>

<style scoped>

</style>
