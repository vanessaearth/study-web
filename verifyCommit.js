/*
 * @Autor: yangjin
 * @Date: 2022-04-21 10:48:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-21 10:59:31
 * @Description: commit信息处理
 */

//process.env.GIT_PARAMS是git msg对应存储目录
console.log(process.env.GIT_PARAMS)
const 
//process.exit(code)判断当前进程是否退出 0 1抛出错误
process.exit(1)//让进程失败退出，使校验不通过
// git commit -m '' --no-verify 不校验
// npm i yorkie/husky -D 校验gitcommit信息的库
// npm i chalk -D 控制台样式