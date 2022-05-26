#! /usr/bin/env node
//当配置为全局脚本命令时，我们系统无法正确使用解析器解析
console.log('hi')
//commander
// let { program } = require('commander')
import {program} from 'commander'
program
  //版本打印，-V短参数 --version长参数
  .version('0.0.1', '-V, --version')
  //配置usage展示内容
  .usage('<command> [option]')


program
  //配置对应执行命令
  //1.传一个参数，参数为对应的指令名称
  //传入字符串 指令 必选参数<> 可选参数[]
  .command('init [filename]')
  .description('初始化项目')
  //配置参数flag描述，默认值
  //短参数可合并，-a,-b => -ab
  .option('-c,--color','是否彩色')
  //执行对应指令操作，
  //当指令后面配置参数时,第一个参数时指令后面传入的参数，第二个参数为对应使用的option
  .action(( filename='test-default',args) => {
    let {color}=args
    console.log((color?'彩色':'黑白')+filename)
  })
program
  //默认接收process。argv
  .parse()