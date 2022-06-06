### 3.keep-alive组件有什么作用
组件切换时候，保存一些组件的状态防止多次渲染，就可以用keep-alive组件包裹需要保存的组件

keep-alive拥有2个独立的生命周期，activated和deactived

keep-alive包裹的组件，在隐藏时候，不会被销毁，而是换成在内存中，并执行deactived钩子函数，组件显示出来，会触发actived构造函数