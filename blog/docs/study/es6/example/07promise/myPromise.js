export default class myPromise {
  constructor(handler) {
    this['[[PromiseState]]'] = 'pending'
    this['[[PromiseResult]]'] = undefined
    //适用1个then
    // this.resolveFn = undefined
    // this.rejectFn = undefined
    //适用多个then
    this.resolveQueue = []
    this.rejectQueue = []
    handler(this.#resolve.bind(this), this.#reject.bind(this))
  }
  #resolve(val) {
    this['[[PromiseState]]'] = 'fulfilled'
    this['[[PromiseResult]]'] = val
    // this.resolveFn(val)
    const run = function () {
      let cb;
      console.log('==',this.resolveQueue)
      while (cb=this.resolveQueue.shift()){
        cb&&cb(val)
      }
    }
    run()
  }
  #reject(err) {
    this['[[PromiseState]]'] = 'reject'
    this['[[PromiseResult]]'] = err
    // this.rejectFn && this.rejectFn(err)
    const run = function () {
      let cb;
      while (cb=this.rejectQueue.shift()){
        cb&&cb(err)
      }
    }
    run()
  }
  then(onResolve, onReject) {
    //当有settimeout不适用
    // onResolve && onResolve(this['[[PromiseResult]]'])
    // onReject && onReject(this['[[PromiseResult]]'])
    //适用1个then
    // this.resolveFn = onResolve
    // this.rejectFn = onReject
    //适用多个then
    this.resolveQueue.push(onResolve)
    this.rejectQueue.push(onReject)
  }
}