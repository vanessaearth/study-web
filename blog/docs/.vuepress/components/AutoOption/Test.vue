

<template>
  <div>
    <div class="tip">使用方法：填写内容后，点击按钮，在项目中新建文件，进行粘贴即可</div>
    <div class="mb__10">
      接口地址-routeName：
      <ElInput
        class="short-input"
        v-model="apiName"
        size="small" />
    </div>
    <ElCollapse v-model="activeNames">
      <ElCollapseItem title="控制区" name="1">
        <ElForm
          ref="addForm"
          :model="addForm">
          <ElFormItem label="新增表单">
            <ElRadioGroup v-model="addForm.visible" size="small">
              <ElRadio :label="1">有</ElRadio>
              <ElRadio :label="0">无</ElRadio>
            </ElRadioGroup>
          </ElFormItem>
          <template v-if="addForm.visible">
            <ElFormItem label="表单标题">
              <ElInput
                size="small"
                class="short-input"
                v-model="addForm.title" />
            </ElFormItem>
            <ElFormItem>
              <ElTable
                size="small"
                :data="addForm.data">
                <ElTableColumn
                  prop="label"
                  label="左侧文案"
                  width="180">
                  <template slot-scope="{row}">
                    <ElInput size="small" v-model="row.label" />
                  </template>
                </ElTableColumn>
                <ElTableColumn
                  prop="prop"
                  label="prop"
                  width="180">
                  <template slot-scope="{row}">
                    <ElInput size="small" v-model="row.prop" />
                  </template>
                </ElTableColumn>
                <ElTableColumn
                  prop="type"
                  label="类型"
                  width="400">
                  <template slot-scope="{row}">
                    <ElRadioGroup v-model="row.type" size="small">
                      <ElRadioButton label="input">input</ElRadioButton>
                      <ElRadioButton label="select">select</ElRadioButton>
                      <ElRadioButton label="radio">radio</ElRadioButton>
                      <ElRadioButton label="checkbox">checkbox</ElRadioButton>
                      <ElRadioButton label="textarea">textarea</ElRadioButton>
                    </ElRadioGroup>
                  </template>
                </ElTableColumn>
                <ElTableColumn
                  align="center"
                  prop="required"
                  label="是否必填"
                  width="100">
                  <template slot-scope="{row}">
                    <ElSwitch
                      v-model="row.required">
                    </ElSwitch>
                  </template>
                </ElTableColumn>
                <ElTableColumn
                  prop="requiredTxt"
                  label="必填文案"
                  width="180">
                  <template slot-scope="{row}">
                    <ElInput size="small" v-model="row.requiredTxt" />
                  </template>
                </ElTableColumn>
                <ElTableColumn
                  prop="action"
                  label="操作"
                  width="180">
                  <template slot-scope="{row,$index}">
                    <ElButton
                      size="small"
                      type="primary"
                      plain
                      @click="addFormDelRow(row,$index)">删除</ElButton>
                  </template>
                </ElTableColumn>
              </ElTable>
              <ElButton
                size="small"
                class="mt__10"
                type="primary"
                plain
                @click="addFormAddLine">新增一行</ElButton>
            </ElFormItem>
            <ElButton
              v-if="addForm.visible"
              size="small"
              type="primary"
              @click="handleAddForm">生成AddForm文件</ElButton>
          </template>
        </ElForm>
      </ElCollapseItem>
      <ElCollapseItem title="查询区" name="2">
        <ElForm
          ref="searchForm"
          :model="searchForm"
          label-width="80px">
          <ElFormItem label="新增表单">
            <ElRadioGroup v-model="searchForm.visible" size="small">
              <ElRadio :label="1">有</ElRadio>
              <ElRadio :label="0">无</ElRadio>
            </ElRadioGroup>
          </ElFormItem>
          <template v-if="searchForm.visible">
            <ElTable
              size="small"
              :data="searchForm.data">
              <ElTableColumn
                prop="label"
                label="左侧文案"
                width="180">
                <template slot-scope="{row}">
                  <ElInput size="small" v-model="row.label" />
                </template>
              </ElTableColumn>
              <ElTableColumn
                prop="prop"
                label="prop"
                width="180">
                <template slot-scope="{row}">
                  <ElInput size="small" v-model="row.prop" />
                </template>
              </ElTableColumn>
              <ElTableColumn
                prop="type"
                label="类型"
                width="200">
                <template slot-scope="{row}">
                  <ElRadioGroup v-model="row.type" size="small">
                    <ElRadioButton label="input">input</ElRadioButton>
                    <ElRadioButton label="select">select</ElRadioButton>
                  </ElRadioGroup>
                </template>
              </ElTableColumn>
              <ElTableColumn
                prop="placeholder"
                label="placeholder"
                width="180">
                <template slot-scope="{row}">
                  <ElInput size="small" v-model="row.placeholder" />
                </template>
              </ElTableColumn>
              <ElTableColumn
                prop="action"
                label="操作"
                width="180">
                <template slot-scope="{row,$index}">
                  <ElButton
                    size="small"
                    type="primary"
                    plain
                    @click="searchFormDelRow(row,$index)">删除</ElButton>
                </template>
              </ElTableColumn>
            </ElTable>
            <ElButton
              size="small"
              type="primary"
              plain
              class="mt__10"
              @click="searchFormAddLine">新增一行</ElButton>
          </template>
        </ElForm>
      </ElCollapseItem>
      <ElCollapseItem title="列表区" name="3">
        <ElTable
          size="small"
          :data="listData">
          <ElTableColumn
            prop="label"
            label="表头th"
            width="180">
            <template slot-scope="{row}">
              <ElInput size="small" v-model="row.label" />
            </template>
          </ElTableColumn>
          <ElTableColumn
            prop="prop"
            label="prop"
            width="180">
            <template slot-scope="{row}">
              <ElInput size="small" v-model="row.prop" />
            </template>
          </ElTableColumn>
          <ElTableColumn
            prop="width"
            label="width"
            width="180">
            <template slot-scope="{row}">
              <ElInput size="small" v-model="row.width" />
            </template>
          </ElTableColumn>
          <ElTableColumn
            prop="align"
            label="对其方式(居左不用选)"
            width="240">
            <template slot-scope="{row}">
              <ElRadioGroup v-model="row.align" size="small">
                <ElRadio label="left">居左</ElRadio>
                <ElRadio label="center">居中</ElRadio>
                <ElRadio label="right">居右</ElRadio>
              </ElRadioGroup>
            </template>
          </ElTableColumn>
          <ElTableColumn
            prop="action"
            label="操作"
            width="180">
            <template slot-scope="{row,$index}">
              <ElButton
                size="small"
                type="primary"
                plain
                @click="listDelRow(row,$index)">删除</ElButton>
            </template>
          </ElTableColumn>
        </ElTable>
        <ElButton
          size="small"
          type="primary"
          plain
          class="mt__10"
          @click="listAddLine">新增一行</ElButton>
      </ElCollapseItem>
    </ElCollapse>
    <ElButton
      class="mt__20"
      type="primary"
      @click="handleAdd">生成列表文件</ElButton>

  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1', '2', '3'],
      apiName: '',
      addForm: {
        visible: '',
        title: '',
        data: [{
          label: '',
          prop: '',
          required: true,
          requiredTxt: ''
        }]
      },
      searchForm: {
        visible: '',
        data: [{
          label: '',
          prop: '',
          type: '',
          placeHolder: ''
        }]
      },
      listData: [{
        label: '',
        prop: '',
        width: '',
        align: ''
      }, {
        label: '',
        prop: '',
        width: '',
        align: ''
      }]
    }
  },

  methods: {
    handleAdd () {
      let ctrlStr = ''
      let filterStr = ''
      let dialog = ''
      let dataFormStr = ''
      let initFomStr = ''
      let submitStr = ''
      let routerUpdateStr = ''
      if (this.addForm.visible) {
        ctrlStr = `
          <template #ctrl>
            <ElButton
              type="primary"
              size="small"
              @click="$formAdd(initForm())">新增</ElButton>
          </template>`
        dialog = `
          <template #dialogs>
            <AddForm
              v-if="form.visible"
              :form="form"
              @submit="handleFormSubmit" />
          </template>`
        const initDataArray = this.addForm.data.map(v => {
          return `
            ${v.prop}:''`
        }).join(',')
        initFomStr = `
          const initForm = (data) => ({${initDataArray}
          })`
        const formRule = this.addForm.data.map(v => {
          if (v.required) {
            return `
            ${v.prop}: { required: true, message: '${v.requiredTxt}' }`
          }
        }).join(',')

        dataFormStr = `,
          form: {
            type: 'add',
            visible: false,
            loading: false,
            data: initForm(),
            rules: { ${formRule}
            }
          }`
        submitStr = `,
    /**
     * @description: 提交表单
     */
          handleFormSubmit () {
            this.$formSubmit('${this.apiName}', this.form.data)
          }`
      }
      if (this.searchForm.visible) {
        routerUpdateStr = `
         async beforeRouteUpdate (to, from, next) {
          this.getPageData(to.query)
          next()
        },`

        filterStr = this.searchForm.data.map(v => {
          let innerTitle = ''
          if (v.label) {
            innerTitle = `
            innerTitle="${v.label}"`
          }
          if (v.type === 'select') {
            return `
            <WmRouteFilter${innerTitle}
              type="${v.type}"
              :data="[]"
              prop="${v.prop}"
              placeholder="${v.placeholder}" />`
          } else {
            return `
            <WmRouteFilter${innerTitle}
              type="${v.type}"
              prop="${v.prop}"
              placeholder="${v.placeholder}" />`
          }
        }).join('')
        filterStr = `
          <template #filter>${filterStr}
          </template>`
      }
      const table = this.listData.map(v => {
        let tableCol = `
          <ElTableColumn
            prop="${v.prop}"
            label="${v.label}"`
        if (v.width) {
          tableCol = `${tableCol}
            width="${v.width}"`
        }
        if (v.align && v.align !== 'left') {
          tableCol = `${tableCol}
            align="${v.align}"`
        }
        return `${tableCol} />`
      }).join('')
      const template = `
        <template>
          <WmListLayout :list-total="list.total">${ctrlStr}${filterStr}
            <WmTable :list="list">${table}
            </WmTable>${dialog}
          </WmListLayout>
        </template>`
      const script = `
        <script>${initFomStr}
        export default {${routerUpdateStr}
          data () {
            return {
              list: {
                total: 0,
                loading: false,
                data: []
              }${dataFormStr}
            }
          },
          created () {
            this.getPageData(this.$route.query)
          },
          methods: {
            getPageData (query) {
              this.$queryTable('${this.apiName}',{
               mergeQuery: false,
                query
              })
            }${submitStr}
          }
        }
        `
      // eslint-disable-next-line no-useless-escape
      const str = `${template}${script}` + '<\/script>\n'
      this.copy(str)
    },
    // 复制到粘贴板
    copy (str) {
      var input = document.createElement('textarea') // js创建一个input输入框
      input.value = str // 将需要复制的文本赋值到创建的input输入框中，this.ruleForm.url这个是我要复制的内容
      document.body.appendChild(input) // 将输入框暂时创建到实例里面
      input.select() // 选中输入框中的内容
      document.execCommand('Copy') // 执行复制操作
      document.body.removeChild(input) // 最后删除实例中临时创建的input输入框，完成复制操作
      this.$message({
        message: '复制成功',
        type: 'success'
      })
    },
    // 生成新建表单文件
    handleAddForm () {
      const formStr = this.addForm.data.map(v => {
        if (v.type === 'input') {
          return `
            <ElFormItem label="${v.label}" prop="${v.prop}">
              <ElInput 
                size="small"
                v-model="form.data.${v.prop}"
                placeholder="${v.requiredTxt}" />
            </ElFormItem>`
        } else if (v.type === 'select') {
          return `
            <ElFormItem label="${v.label}" prop="${v.prop}">
              <ElSelect
                size="small"
                v-model="form.data.${v.prop}"
                placeholder="${v.requiredTxt}">
                <ElOption
                  v-for="item in selectList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </ElOption>
              </ElSelect>
            </ElFormItem>`
        } else if (v.type === 'radio') {
          return `
            <ElFormItem
              size="small"
              label="${v.label}"
              prop="${v.prop}">
              <ElRadioGroup v-model="form.data.${v.prop}">
                <ElRadio :label="true">是</ElRadio>
                <ElRadio :label="false">否</ElRadio>
              </ElRadioGroup>
            </ElFormItem>`
        } else if (v.type === 'checkbox') {
          return `
            <ElFormItem label="${v.label}" prop="${v.prop}">
              <ElCheckboxGroup size="small" v-model="form.data.${v.prop}">
                <ElCheckbox label="复选框 A"></ElCheckbox>
                <ElCheckbox label="复选框 B"></ElCheckbox>
              </ElCheckboxGroup>
            </ElFormItem>`
        } else if (v.type === 'textarea') {
          return `
            <ElFormItem label="${v.label}" prop="${v.prop}">
              <ElInput
                size="small"
                type="textarea"
                :rows="3"
                v-model="form.data.${v.prop}"
                placeholder="${v.requiredTxt}" />
            </ElFormItem>`
        }
      }).join('')
      const templete = `<template>
        <WmForm
          ref="form"
          title="${this.addForm.title}"
          :form="form"
          @submit="$emit('submit')">${formStr}
        </WmForm>
      </template>
      <script>
      export default {
        props: {
          form: {
            type: Object,
            required: true
          }
        }
      }
      `
      // eslint-disable-next-line no-useless-escape
      this.copy(templete + '<\/script>\n')
    },
    // 删除列表区某一行
    addFormDelRow (row, index) {
      this.addForm.data.splice(index, 1)
    },
    // 删除列表区某一行
    searchFormDelRow (row, index) {
      this.searchForm.data.splice(index, 1)
    },
    // 删除列表区某一行
    listDelRow (row, index) {
      this.listData.splice(index, 1)
    },
    // 新增弹框中增加一项
    addFormAddLine () {
      this.addForm.data.push({
        label: '',
        prop: '',
        required: true,
        requiredTxt: ''
      })
    },
    // 查询项新增一行
    searchFormAddLine () {
      this.searchForm.data.push({
        label: '',
        prop: '',
        width: '',
        align: ''
      })
    },
    // 列表新增一行
    listAddLine () {
      this.listData.push({
        label: '',
        prop: '',
        width: '',
        align: ''
      })
    }
  }

}
</script>
<style lang="scss" scoped>
/deep/ table{
  th, td{
    border:none;
  }
  margin:0;
}
.tip {
  color: #e6a23c;
  margin-bottom: 15px;
}

.short-input {
  width: 200px;
}

/deep/ .el-collapse-item__header {
  font-size: 20px;
  font-weight: 700;
  background-color: #f3f3f3;
  padding-left: 20px;
  border-bottom: 1px solid #ccc;
}
.mb__10{
  margin-bottom: 10px;
}
.mt__10{
  margin-top: 10px;
}
.mt__20{
  margin-top: 20px;
}
</style>
