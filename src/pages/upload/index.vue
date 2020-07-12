<template lang="pug">
  page
    el-upload( action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :on-success='handleSuccess')
      el-button 点击上传
    el-upload(action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload")
      img.avatar(v-if='imgUrl' :src='imgUrl')
      i.el-icon-plus.avatar-uploader-icon(v-else)
    el-upload(action="https://jsonplaceholder.typicode.com/posts/"  list-type="picture-card"
      :auto-upload="false"
      :file-list='fileList'
      :on-change='onChange')
      i.el-icon-plus(slot='default')
      div(slot='file' slot-scope="{file}")
        img.el-upload-list__item-thumbnail(:src="file.url" alt="")
        span.el-upload-list__item-actions
          span.el-upload-list__item-preview(@click="handlePictureCardPreview(file)")
            i.el-icon-zoom-in
          span.el-upload-list__item-delete(v-if="!disabled" @click="handleDownload(file)")
            i.el-icon-download
          span.el-upload-list__item-delete(v-if="!disabled" @click="handleRemove(file)")
            i.el-icon-delete
    el-dialog(:visible.sync="dialogVisible")
      img(width="100%" :src="dialogImageUrl" alt="")
</template>
<script>
import { Upload, Button, Dialog } from 'element-ui'
import { useComponents } from '@/utils/arr'
const componentList = [Upload, Button, Dialog]
useComponents(componentList)
export default {
  name: 'upload',
  data() {
    return {
      fileList: [],
      imgUrl: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      fileUrl: true
    }
  },
  methods: {
    handlePreview(file) {
      console.log(file, 'handlePreview')
    },
    handleExceed(files, fileList) {
      window.alert(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    beforeRemove(file) {
      return window.alert(`确定移除 ${file.name}？`)
    },
    handleSuccess(response, file, fileList) {
      this.fileList.push(file.name)
      console.log(response, file, fileList, 'handleSuccess')
    },
    handleAvatarSuccess(res, file) {
      this.imgUrl = URL.createObjectURL(file.raw)
      console.log(URL.createObjectURL(file.raw), 'handleAvatarSuccess')
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        window.alert('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        window.alert('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onChange(file, fileList) {
      this.fileList = fileList
      console.log(this.fileList, 'onChange')
    },
    handleRemove(file) {
      const fileUid = file.uid
      const newfileList = this.fileList.filter(item => {
        return item.uid !== fileUid
      })
      this.fileList = newfileList
      console.log(file.uid, newfileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    }
  }
}
</script>
<style lang="less">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  background-size: cover;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
