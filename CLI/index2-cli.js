/*
 * @Autor: yangjin
 * @Date: 2021-09-28 21:33:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-27 09:38:29
 * @Description:
 */
// !# sur/
const chalk = require('chalk')
const { program } = require('commander')
const validateNpmProjectName = require('validate-npm-package-name')
// const program = new Commander()
program.version('0.0.1').parse()
// program.option('-p, --port [port]', '端口', '8888')
// program.action((webServerName, opts) => {
//   try {
//     if (!validateNpmProjectName(webServerName).errors.length) {
//       console.error(chalk.red(`无效的项目名称${webServerName}`))
//       process.exit(1)
//     }
//   } catch (e) {

//   }
// })
