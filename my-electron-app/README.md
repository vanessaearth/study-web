# 第一步 初始化项目
1.mkdir my-electron-app && cd my-electron-app
npm init

# 第二步 安装依赖
npm install --save-dev electron

# 第三步 设置启动脚本

{
  "scripts": {
    "start": "electron ."
  }
}

# 第四步 创建main.js和index.html



# 第五步 启动
npm start

分发应用程序
 1.将 Electron Forge 添加到您应用的开发依赖中，并使用其"import"命令设置 Forge 的脚手架：
 npm install --save-dev @electron-forge/cli
npx electron-forge import


html写元素，render中获取元素，调用preload中方法，main监听preload方法