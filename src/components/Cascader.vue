<template>
  <div>
    <h1>基础用法</h1>
    <div class="block">
      <span class="demonstration">默认 click 触发子菜单</span>
      <el-cascader
        v-model="value"
        :options="options"
        @change="handleChange"></el-cascader>
    </div>
    <div style="margin: 10px">
      <span class="demonstration">hover 触发子菜单</span>
       <el-cascader
        v-model="value"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"></el-cascader>
    </div>
    <h1>禁用选项</h1>
    <p>数据中添加 disabled: true,</p>
    <h1>可清空</h1>
    <el-cascader :options="options" clearable></el-cascader>
    <h1>仅显示最后一级</h1>
    <el-cascader :options="options" :show-all-levels="false"></el-cascader>
    <h1>多选</h1>
    <div class="block">
    <span class="demonstration">默认显示所有Tag</span>
    <!-- props.multiple = true 来开启多选模式 -->
    <el-cascader
      :options="options3"
      :props="props3"
      clearable></el-cascader>
    </div>
    <div class="block" style="margin: 10px">
      <span class="demonstration">折叠展示Tag</span>
      <!-- collapse-tags来折叠Tag -->
      <el-cascader
        :options="options3"
        :props="props3"
        collapse-tags
        clearable></el-cascader>
    </div>
    <h1>选择任意一级选项</h1>
    <div class="block">
    <span class="demonstration">单选选择任意一级选项</span>
    <!-- props.checkStrictly = true 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。 -->
    <el-cascader
      :options="options"
      :props="{ checkStrictly: true }"
      clearable></el-cascader>
    </div>
    <div class="block">
      <span class="demonstration">多选选择任意一级选项</span>
      <el-cascader
        :options="options"
        :props="{ multiple: true, checkStrictly: true }"
        clearable></el-cascader>
    </div>
    <h1>动态加载</h1>
    <el-cascader :props="props4"></el-cascader>
    <h1>可搜索</h1>
    <div class="block">
    <span class="demonstration">单选可搜索</span>
    <el-cascader
      placeholder="试试搜索：指南"
      :options="options"
      filterable></el-cascader>
    </div>
    <div class="block">
      <span class="demonstration">多选可搜索</span>
      <el-cascader
        placeholder="试试搜索：指南"
        :options="options"
        :props="{ multiple: true }"
        filterable></el-cascader>
    </div>
    <h1>自定义节点内容</h1>
    <el-cascader :options="options">
    <!-- scoped-slot会传入两个字段 node 和 data，分别表示当前节点的 Node 对象和数据。 -->
    <template slot-scope="{ node, data }">
      <span>{{ data.label }}</span>
      <!-- v-if="!node.isLeaf" 值是true就隐藏 -->
      <span v-if="!node.isLeaf"> ({{ data.children.length}}) </span>
    </template>
    </el-cascader>
    <h1>级联面板</h1>
    <el-cascader-panel :options="options"></el-cascader-panel>
  </div>
</template>

<script>
let id = 0

export default {
  name: 'Cascader',
  data: () => ({
    value: [],
    options: [{
      value: 'zhinan',
      label: '指南',
      // disabled: true,
      children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        children: [{
          value: 'yizhi',
          label: '一致'
        }, {
          value: 'fankui',
          label: '反馈'
        }, {
          value: 'xiaolv',
          label: '效率'
        }, {
          value: 'kekong',
          label: '可控'
        }]
      }, {
        value: 'daohang',
        label: '导航',
        children: [{
          value: 'cexiangdaohang',
          label: '侧向导航'
        }, {
          value: 'dingbudaohang',
          label: '顶部导航'
        }]
      }]
    }, {
      value: 'zujian',
      label: '组件',
      children: [{
        value: 'basic',
        label: 'Basic',
        children: [{
          value: 'layout',
          label: 'Layout 布局'
        }, {
          value: 'color',
          label: 'Color 色彩'
        }, {
          value: 'typography',
          label: 'Typography 字体'
        }, {
          value: 'icon',
          label: 'Icon 图标'
        }, {
          value: 'button',
          label: 'Button 按钮'
        }]
      }, {
        value: 'form',
        label: 'Form',
        children: [{
          value: 'radio',
          label: 'Radio 单选框'
        }, {
          value: 'checkbox',
          label: 'Checkbox 多选框'
        }, {
          value: 'input',
          label: 'Input 输入框'
        }, {
          value: 'input-number',
          label: 'InputNumber 计数器'
        }, {
          value: 'select',
          label: 'Select 选择器'
        }, {
          value: 'cascader',
          label: 'Cascader 级联选择器'
        }, {
          value: 'switch',
          label: 'Switch 开关'
        }, {
          value: 'slider',
          label: 'Slider 滑块'
        }, {
          value: 'time-picker',
          label: 'TimePicker 时间选择器'
        }, {
          value: 'date-picker',
          label: 'DatePicker 日期选择器'
        }, {
          value: 'datetime-picker',
          label: 'DateTimePicker 日期时间选择器'
        }, {
          value: 'upload',
          label: 'Upload 上传'
        }, {
          value: 'rate',
          label: 'Rate 评分'
        }, {
          value: 'form',
          label: 'Form 表单'
        }]
      }, {
        value: 'data',
        label: 'Data',
        children: [{
          value: 'table',
          label: 'Table 表格'
        }, {
          value: 'tag',
          label: 'Tag 标签'
        }, {
          value: 'progress',
          label: 'Progress 进度条'
        }, {
          value: 'tree',
          label: 'Tree 树形控件'
        }, {
          value: 'pagination',
          label: 'Pagination 分页'
        }, {
          value: 'badge',
          label: 'Badge 标记'
        }]
      }, {
        value: 'notice',
        label: 'Notice',
        children: [{
          value: 'alert',
          label: 'Alert 警告'
        }, {
          value: 'loading',
          label: 'Loading 加载'
        }, {
          value: 'message',
          label: 'Message 消息提示'
        }, {
          value: 'message-box',
          label: 'MessageBox 弹框'
        }, {
          value: 'notification',
          label: 'Notification 通知'
        }]
      }, {
        value: 'navigation',
        label: 'Navigation',
        children: [{
          value: 'menu',
          label: 'NavMenu 导航菜单'
        }, {
          value: 'tabs',
          label: 'Tabs 标签页'
        }, {
          value: 'breadcrumb',
          label: 'Breadcrumb 面包屑'
        }, {
          value: 'dropdown',
          label: 'Dropdown 下拉菜单'
        }, {
          value: 'steps',
          label: 'Steps 步骤条'
        }]
      }, {
        value: 'others',
        label: 'Others',
        children: [{
          value: 'dialog',
          label: 'Dialog 对话框'
        }, {
          value: 'tooltip',
          label: 'Tooltip 文字提示'
        }, {
          value: 'popover',
          label: 'Popover 弹出框'
        }, {
          value: 'card',
          label: 'Card 卡片'
        }, {
          value: 'carousel',
          label: 'Carousel 走马灯'
        }, {
          value: 'collapse',
          label: 'Collapse 折叠面板'
        }]
      }]
    }, {
      value: 'ziyuan',
      label: '资源',
      children: [{
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'jiaohu',
        label: '组件交互文档'
      }]
    }],
    props3: { multiple: true },
    options3: [{
      value: 1,
      label: '东南',
      children: [{
        value: 2,
        label: '上海',
        children: [
          { value: 3, label: '普陀' },
          { value: 4, label: '黄埔' },
          { value: 5, label: '徐汇' }
        ]
      }, {
        value: 7,
        label: '江苏',
        children: [
          { value: 8, label: '南京' },
          { value: 9, label: '苏州' },
          { value: 10, label: '无锡' }
        ]
      }, {
        value: 12,
        label: '浙江',
        children: [
          { value: 13, label: '杭州' },
          { value: 14, label: '宁波' },
          { value: 15, label: '嘉兴' }
        ]
      }]
    }, {
      value: 17,
      label: '西北',
      children: [{
        value: 18,
        label: '陕西',
        children: [
          { value: 19, label: '西安' },
          { value: 20, label: '延安' }
        ]
      }, {
        value: 21,
        label: '新疆维吾尔族自治区',
        children: [
          { value: 22, label: '乌鲁木齐' },
          { value: 23, label: '克拉玛依' }
        ]
      }]
    }],
    props4: {
      // lazy 开启动态加载
      lazy: true,
      // lazyload 来设置加载数据源的方法。
      // node 为当前点击的节点; 值为 [object Object]
      // resolve 为数据加载完成的回调(必须调用)。
      // leaf 是否为叶子节点的标志位
      lazyLoad (node, resolve) {
        console.log('node' + node)
        const {level} = node
        console.log('{level}' + level) // level 的值为 1，2 。。。
        console.log('Array' + Array.from({length: level + 1}))
        setTimeout(() => {
          // array.map(function(currentValue,index,arr), thisValue) 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。 item：当前数组中的元素的值
          // nodes [object Object],[object Object] 选中的节点对象
          // Array.from("NOOB") 通过字符串创建一个数组 用法：Array.from(object, mapFunction, thisValue)
          const nodes = Array.from({length: level + 1}).map(item => ({
            value: ++id,
            label: `选项${id}`,
            leaf: level >= 2
          }))
          console.log('nodes' + nodes)
          // 通过调用 resolve 将子节点数据返回，通知组件数据加载完成
          resolve(nodes)
        }, 1000)
      }
    }
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
