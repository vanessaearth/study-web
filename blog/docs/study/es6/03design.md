# 设计原则和模式
## 设计原则

1.单一原则：一个类应该只有一个发生变化的原因

一个方法只干一件事儿

2.开闭原则：

一个软件实体，如类，模块，函数应该对扩展开放，对修改关闭

3.里氏替换原则：

所有引用基类的地方必须能透明地使用其子类的对象，即子类对象可以替换父类对象，而程序执行效果不变

4.迪米特法则

也叫最少知识原则，一个类对于其他类知道的越少越好，一个对象应该对其他对象知道的越少越好，不要和陌生人说话

5.接口隔离原则

多个特定的客户端接口，好于一个个通用型的总接口

6.依赖倒置原则

a.上层模块不应该依赖底层模块，他们都应该依赖抽象

b.抽象不应该依赖细节，细节应该依赖抽象

## **设计模式**



**单例模式**：保证一个类只有一个实例，并提供一个访问它的全局访问点

**工厂模式**：封装具体实例创建逻辑和过程，外部只需要根据不同条件返回不同的实例

优点：实现代码复用性，封装良好，抽象逻辑

缺点：增加代码复杂程度



**装饰者模式**：使用一种灵活的方式动态给对象添加额外信息

扩展功能和继承相似，扩展不同类的功能，和原始类无关联

**观察者模式**：定义一个对象和其他对象之间的一种依赖关系，当对象发生某种变化的时候，依赖他的其他对象都会发生更新。

自定义事件绑定addEvent

自定义事件触达triggger

自定义事件移除removeEvent

**代理模式**：为其他对象提供一种代理以控制对这个对象的访问，类似中介

**适配器模式**：2个不兼容的接口之间的桥梁，将一个类的接口转化成客户希望的另一个接口

**享元模式**：通过共享技术有效滴支持对象的复用，以减少创建对象的数量，节约内存，提高效率和性能