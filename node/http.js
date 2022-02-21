/*
 * @Autor: yangjin
 * @Date: 2021-09-28 09:18:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-28 10:28:55
 * @Description: 
 */
// 状态：对事物处理的记忆
// 无状态：无记忆
// 有状态：需要在请求中记忆维护请求

const Application = require("koa")

// cookie就是登录后后携带的信息，每次请求时候携带
// cookie是存在客户端的，容易被串改，需要被加密,
// 根据后端的hash规则加密，然后每次请求时候验证这个加密的信息,是否一致
// 生成前面字符串
// App.keys[]


