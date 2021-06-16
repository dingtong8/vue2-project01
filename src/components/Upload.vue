<template>
  <div>
    <h1>点击上传</h1>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传 jpg/png 文件，且不超过500kb</div>
    </el-upload>
    <h1>用户头像上传</h1>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <h1>照片墙</h1>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <!-- el-dialog 弹窗组件，值为 ture 显示弹框，为 false 隐藏弹框 .sync来表示同步的修改了visible的值。 -->
    <el-dialog :visible.sync="dialogVisible" size="tiny">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <h1>图片列表缩略图</h1>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList2"
      list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <h1>上传文件列表控制</h1>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleChange"
      :file-list="fileList3">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <h1>拖拽上传</h1>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <h1>手动上传</h1>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data: () => ({
    imageUrl: '',
    dialogImageUrl: '',
    dialogVisible: false,
    fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
    fileList3: [{
      name: 'food.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      status: 'finished'
    }, {
      name: 'food2.jpeg',
      url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      status: 'finished'
    }]
  }),
  methods: {
    handleRemove (file, fileList) {
      // file 是被删除的文件，fileList 是已经上传的文件列表
      console.log(file, fileList)
    },
    handlePreview (file) {
      // web 页面点击文件名出现的属性
      console.log(file)
    },
    // 定义超出限制时的行为
    handleExceed (files, fileList) {
      // file 是准备上传的文件，fileList 是已经上传的文件列表
      console.log(files, fileList)
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    // 阻止文件移除操作
    beforeRemove (file, fileList) {
      // file 准备删除的文件，fileList 列表中还剩下的文件
      console.log(file, fileList)
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log('imageUrl' + this.imageUrl)
    },
    // 限制用户上传的图片格式和大小
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // 所有文件，包括上传失败的
    handleChange (file, fileList) {
      this.fileList3 = fileList.slice(-3)
      console.log(this.fileList3)
    },
    submitUpload () {
      this.$refs.upload.submit()
    }
  }
}
</script>

<style scoped lang="less">
.avatar-uploader .el-upload {
  // border 定义边框，边框宽度 边框样式 边框颜色
  border: 1px dashed #d9d9d9;
  // border-radius 圆角边框
  border-radius: 6px;
  // 鼠标指针放在一个元素边界范围内时所用的光标形状
  cursor: pointer;
  // position 属性指定一个元素（静态的，相对的，绝对或固定）的定位方法的类型
  position: relative;
  // overflow 属性指定如果内容溢出一个元素的框，会发生什么
  overflow: hidden;
}
// hover 鼠标移到链接上时添加的特殊样式
.avatar-uploader .el-upload:hover {
  // border-color 属性设置一个元素的四个边框颜色。此属性可以有一到四个值。
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  // 属性规定元素应该生成的框的类型。 此元素将显示为块级元素，此元素前后会带有换行符。
  display: block;
}
</style>
