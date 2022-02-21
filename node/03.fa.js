/*
 * @Author: your name
 * @Date: 2021-07-21 10:06:52
 * @LastEditTime: 2021-07-21 10:08:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nodeDemo\03.fa.js
 */
const fs=require('fs')
const data =fs.readFileSync('./conf.js')
console.log('data',data.toString())