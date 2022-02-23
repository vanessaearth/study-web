
// 熟悉jsx
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
@Component
class TsxComp extends Vue{
    msg="tsx comp"
    onClick(){
        console.log(this)
    }
    render(){
        return <div onClick={this.onClick}>{this.msg}</div>
    }
}