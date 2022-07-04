### 12.Vue要做权限管理该怎么做？控制到按钮级别的权限怎么做？

权限管理一般是页面权限和按钮权限

前端方案：
1.把所有路由信息在前端配置，通过路由守卫要求用户登录，用户登录后根据角色过滤出路由表，
2.配置一个asyncRoutes数组，每个路由对象中加meta属性，添加roles属性
3.用户登录后获取用户的role属性，过滤asyncRoutes中包含该role可以访问的路由accessRoutes
4.router.addRoutes(accessRoutes)方式动态添加路由即可

后端方案：
1.把所有页面路由信息保存在数据库中，
2.用户登录的时候根据角色查询其能访问的所有页面路由信息，接口返回给前端accessRoutes
3.router.addRoutes(accessRoutes)动态添加路由信息

按钮权限的控制通常会实现一个指令，例如v-permission，将按钮要求角色通过值传给v-permission指令，在指令的moutned钩子中可以判断当前用户角色和按钮是否存在交集，有则保留按钮，无则移除按钮。

2中方案比较：
前端方案实现简单，维护成本较大，有新页面和新角色都需要重新打包部署
后端方案需要有配置页面，新增角色和页面都比较方便

问题：
1.类似Tabs这类组件能不能使用v-permission指令实现按钮权限控制？
```html
<el-tabs> 
  <el-tab-pane label="⽤户管理" name="first">⽤户管理</el-tab-pane> 
 <el-tab-pane label="⻆⾊管理" name="third">⻆⾊管理</el-tab-pane>
</el-tabs>
```
v-permission 指令移除的是子节点
v-if移除的是自身
el-tab-pane中使用v-permission只是移除了tab下的内容，tab还在，索引不能用v-permission ，需要使用v-if