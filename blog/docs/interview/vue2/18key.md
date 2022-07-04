#### 18.从 template 到 render 处理过程

1. vue中有个独特的编译器模块，称为compiler,他的主要主要时将用户编写的template编译为js中可执行的render函数

2. 有这个编译过程，是为了前端高效的编写视图模板，相比之下我们更愿意使用html来编写视图，直观且高效，手写render函数不仅效率低下而且失去了编译期的优化能力

3. vue中编译器先对template进行解析，这一步称为parse，结束之后会得到一个js对象，我们称为抽象语法树AST，然后对AST进行深加工的转化过程，称为transform，最后将前面得到的AST生成js代码，也就是render函数

源码解析：
vue3编译过程窥探：

https://github1s.com/vuejs/core/blob/HEAD/packages/compiler-core/src/compile.ts#L61-L62

测试，test-v3.html