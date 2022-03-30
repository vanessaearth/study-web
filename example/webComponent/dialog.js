// let temp=document.querySelector('template')
let temp = document.createElement('template')
document.body.appendChild(temp)
temp.innerHTML = `  
<div class="box">
  <h3 class="title">{{title}}</h3>
  <div class="content">
    {{content}}
  </div>
  <input type="text" y-model="title"/>
  <div class="btn-box">
    <button class="btn" data-cancel="true">取消</button>
    <button class="btn">确定</button>
  </div>
</div>
`

class Dialog extends HTMLElement {
  constructor() {
    super()
    this.data = {
      title: 'data默认标题',
      content: 'data默认内容'
    }
    
    for(let a in this.dataset){
      if(this.data.hasOwnProperty(a)){
        this.data[a]=this.dataset[a]
      }
    }
    //todo多个组件之间数据通信
    //todo造一个父级来管理页面上所有组件
    console.log(123, this.dataset)
    this.render()
    this.compileNode(this.obj)
    this.observer(this.data)
    this.bindEvent(this.obj)
   console.dir(this)
    // setTimeout(() => {
    //   this.data.title = "新标题"
    // }, 1000)
  }
 
  render() {
    this.obj = document.createElement('div')
    // this.obj.innerHTML='填充的内容'
    this.obj.append(temp.content.cloneNode(true))
    this.append(this.obj)


  }
  observer(data) {
    let _this = this
    this.data = new Proxy(data, {
      set(target, prop, newValue) {
        console.log('observe', target, prop, newValue)
        let event = new CustomEvent(prop, {
          detail: newValue
        })
        _this.dispatchEvent(event)
        return Reflect.set(...arguments)

      }
    })

  }
  // 编译节点，把{{}}中内容替换为变量内容
  compileNode(el) {

    let child = el.childNodes;

    child.forEach(node => {
      //文本节点
      if (node.nodeType === 3) {
        let text = node.textContent
        //正则匹配
        let reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g
        node.textContent = text.replace(reg, ($1, $2) => {
          console.log('compile-reg:', $1, $2)
          let todo = (event) => {
            let oldValue = this.data[$2]
            console.log('compile-oldValue', oldValue)
            let newReg = new RegExp(oldValue, 'g')
            node.textContent = node.textContent.replace(newReg, event.detail)

          }
          this.addEventListener($2, todo)
          let newText = this.data[$2] ? this.data[$2] : $1
          return newText
        })
      } else if (node.nodeType === 1) {
        //标签节点
        let attr = node.attributes
        if (attr.hasOwnProperty('y-model')) {
          
          let keyName = attr['y-model'].value
          // console.log('把数据填进去')
          node.value = this.data[keyName] || ''
          // console.log('输入框内容发送变化，数据也跟着变化')
          node.addEventListener('input',()=>{
            this.data[keyName]=node.value
          })

        }
        this.compileNode(node)


      }
    })


  }
  bindEvent(obj) { 
    obj.addEventListener('click',(e)=>{
      let target=e.target
      let attr=target.dataset
      for(let a in attr){
        if(this.__proto__.hasOwnProperty(a)){
          this.__proto__[a].apply(this)
        }
      }
    })
  }
  cancel(){
    console.log(this,'执行取消。。。')
  }
}

window.customElements.define('sm-dialog', Dialog)

let style = document.createElement('style')
document.body.appendChild(style)
style.innerText =
  `
html,
body {
  height: 100%;
}
body{
  margin:0;
  display: flex;
  align-items: center;
  justify-content: center;

}

.box {
  width: 400px;
  height: 200px;
  border: thin solid #0b4b5a;
  box-shadow: 5px 5px 20px 0 rgba(0, 0, 0, .3);
  text-align: center;
}
.title{
  margin:10px 0;
}
.content{
  height: 100px;
}
`