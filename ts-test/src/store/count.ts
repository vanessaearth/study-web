/*
 * @Author: your name
 * @Date: 2021-07-08 09:25:44
 * @LastEditTime: 2021-07-08 09:49:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ts-test\src\store\count.ts
 */
import { Module, VuexModule, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '.'

@Module({ dynamic: true, store: store, name: 'counter', namespaced: true })
class CountModule extends VuexModule {
  count = 1

  @Mutation
  add (num = 1) {
    this.count += num
  }

  @Action
  add2 (num = 1) {
    setTimeout(() => {
      this.add(num)
    })
  }
}
export default getModule(CountModule)
