import { AxiosInstance } from "axios";
import VueRouter from "vue-router";
//只是声明
declare const router:VueRouter

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
// 扩充vue,做垫片
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
}