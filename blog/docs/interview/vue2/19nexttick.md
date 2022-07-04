#### 19.nextTick的使用和原理
1. nextTick是等待下一次DOM更新刷新的工具方法
2. Vue有个异步更新策略，如果数据发生变化，vue不会立刻更新DOM，而是开启一个队列，把组件更新函数保存在队列中，同一事件循环中发生的所有数据变更会异步的批量更新，这导致数据更新后不会立即体现在dom上，此时如果想要获取更新后的dom状态，就需要使用nextTick
3. 开发时，有2个使用场景：
    - created中想要获取dom树
    - 响应式数据变化后获取dom更新后的状态，比如希望获取列表更新后的高度
4. nextTick签名如下：function nextTick(callback?: () => void): Promise<void>

所以我们只需要在传入的回调函数中访问最新DOM状态即可，或者我们可以await nextTick()方法返回的Promise之后做这件事。

5. vue内部，nextTick之所以能够让我们看到dom更新后的结果，是因为我们传入的callback会被添加到队列刷新函数(flushSchedulerQueue)的后面，这样等队列内部的更新函数都执行完毕，所有DOM操作也就结束了，callback自然能够获取最新的dom值


源码解读:
组件更新函数入队：

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/renderer.ts#L1547-L1548

入队函数：

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/scheduler.ts#L84-L85

nextTick定义：

https://github1s.com/vuejs/core/blob/HEAD/packages/runtime-core/src/scheduler.ts#L58-L59

测试案例，test-v3.html