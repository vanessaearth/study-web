<template>
  <ElForm
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="120px">
    <ElFormItem label="文章标题" prop="title">
      <el-input
        v-model="ruleForm.title"
        placeholder="请输入文章标题"
      ></el-input>
    </ElFormItem>
    <ElFormItem label="文章链接" prop="url">
      <el-input v-model="ruleForm.url" placeholder="请输入文章链接"></el-input>
    </ElFormItem>
    <ElFormItem label="文章来源" prop="origin">
      <el-input
        v-model="ruleForm.origin"
        placeholder="请输入文章来源"
      ></el-input>
    </ElFormItem>

    <ElFormItem label="发布时间" prop="innerTime">
      <el-input
        v-model="ruleForm.innerTime"
        placeholder="请输入发布时间"
      ></el-input>
    </ElFormItem>
    <ElFormItem label="列表发布时间" prop="time">
      <el-input v-model="ruleForm.time" placeholder="请输入列表发布时间"></el-input>
    </ElFormItem>
    <ElFormItem label="文章内容" prop="content">
      <div class="txt-orange">请粘贴html格式的文章内容</div>
      <el-input
        type="textarea"
        v-model="ruleForm.content"
        :rows="20"
      ></el-input>
    </ElFormItem>

    <ElFormItem>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </ElFormItem>
  </ElForm>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        title: '',
        url: '',
        origin: '',
        time: '',
        innerTime: '',
        content: ''
      },
      rules: {
        title: { required: true, message: '请输入文章标题', trigger: 'blur' },
        url: { required: true, message: '请输入文章链接', trigger: 'blur' },
        origin: { required: true, message: '请输入文章来源', trigger: 'blur' },
        time: {
          required: true,
          message: '请输入列表发布时间',
          trigger: 'blur'
        },
        innerTime: {
          required: true,
          message: '请输入发布时间',
          trigger: 'blur'
        },
        content: [
          {
            required: true,
            message: '请输入html格式的文章内容',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
     let content= this.transferContent(this.ruleForm.content)
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data={
             ...this.ruleForm,
             content
          }
          data.origin = `来源：${this.ruleForm.origin} 发布时间：${this.ruleForm.innerTime}`
          delete data.innerTime
          console.log('copy', data)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    transferContent(str) {
      let app = document.createElement('div')
      app.innerHTML = str
      let AllElement = Array.from(app.children)
      let ret = []
      let type = 'text'
      AllElement.forEach(item => {
        if (item.innerHTML.includes('<b>') || item.innerHTML.includes('bold')|| item.innerHTML.includes('<strong>')) {
          type = 'bold'
        } else if (item.innerHTML.includes('<img')) {
          type = 'img'
        } else {
          type = 'text'
        }
        let detail= item.innerText.replace('　　', '')
        if(detail&&detail!=='\n'){
          ret.push({
            type,
            detail
          })
        }
      })
      return ret
    }
  }
}
</script>

<style lang="scss" scoped>
.txt-orange{
  color:#e6a23c;
}
</style>