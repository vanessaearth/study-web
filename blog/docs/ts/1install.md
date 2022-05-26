


# 1.安装
typescript编写的程序在浏览器中不能直接运行，需要通过nodejs转化为js文件，需要先安装[Node.js](http://nodejs.cn/download/)

```js
npm install -g typescript
// 查看版本号
tsc -v
// 转化ts文件为js文件,同目录下会生成app.js文件
tsc app.ts
```
### 编译选项
1. --outDir指定文件输出的目录
2. --target 指定编译的代码版本目标 默认为ES3
3. --watch 在监听模式下运行，当文件发生改变的时候自动编译
```js
tsc --outDir ./dist --target ES6 --watch ./src/app.ts
```
### 编写配置文件tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "target": "ES2015",
    "watch": true,
    "skipLibCheck": true, //跳过node_module文件内检查
    //启用严格的空校验特性，就可以使得null 和 undefined 只能被赋值给 void 或本身对应的类型
    "strictNullChecks": true 
  },
  //** 所以目录(包含子目录)
  //* 所右文件也可以指定文件类型，*.ts
  "exclude": ["node_modules", "dist"],
  "include": ["./*.ts","./src/**/*"]
}
```
有了单独的配置文件，直接输入tsc就能运行，如果tsconfig.json在单独的配置文件，需要指定-project 
```
tsc
tsc --project ./configs/tsconfig.json
```


