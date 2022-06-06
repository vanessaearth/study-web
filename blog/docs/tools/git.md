# git
版本控制工具svn
git分布式版本控制工具
mac 查看隐藏文件commond+shift+.
文件状态：
-  untracked未追踪文件
-  modified 已修改
-  staged 已暂存
-  committed 已提交


git init：初始化git仓库
git status 查看文件状态
git ls-file 查看本地仓库存储的文件
git commit
-   如果不写提交信息，会进入vim编辑器
-   -m 最近提交信息，不打开编辑器
-   -a 将已追踪已修改的文件提交 
-   -a -m 可以缩写为-am
  
git log 查看提交日志
git reset 
git diff branch name查看本地和branch name分支差异

git branch 查看分支，分支之间独立
-   git branch &lt;branch name&gt; 新建分支
-   git checkout &lt;branch name&gt; 切换分支
-   git branch -d &lt;branch name&gt;删除分支，无法删除未合并分支
-   git branch -D &lt;branch name&gt;强制删除分支
-   
git merge  合并分支
```js
<<<<<<<<<HEAD   当前分支代码
==========
>>>>>>>>>;new branch 被合并分支的代码
```
git revert &lt;commit id&gt; 撤销某次提交，会添加一个revert记录， 然后执行git push
gitignore文件，让git忽略某些文件的变化
```js
.idea
dist
node_modules
```
git hooks
 yorkie/husky，yarn add yorkie -D 安装yorkie,为了使用git hooks
 pre-commit 提交前执行
 commit-msg 获取commit信息
pr(pull request) 主要用于协助第三方开发

git 工作流程
 - git workFlow
 - github workflow
   - pull request
   - code review 代码复查
 - gitlab workflow
 - 
自动化：
CI持续集成
  - 持续集成 主要用于测试代码格式化检查或者格式化操作
  - github action 
    - workfow使用yaml格式，.yml文件
    - 在根目录下新建.github文件夹-&gt;workflows-&gt;main.yml
    - yaml文件通过缩进表示层级关系，只能使用空格，不是使用tab
    - YAML: 
      - name工作流名称,
      - on控制action在何时执行
        - push 
          - branches:[master] 
      - job action 需要执行的工作 
        - 声明对应的工作 自行起名
          - runs on action执行时候的一个虚拟机环境，ubuntu-laster
          - steps action执行的步骤
            - uses 对应action执行的预设代码
            - name 对应当前操作名字
            - run 真实执行的操作如：yarn build
    - 
CD持续交付
 settings-&gt;pages设置
 npm i -D webpack webpack-cli html-webpack-plugin 


#### 1. 工作区：当前工作目录(初始化git仓库后）
git add &lt;file&gt;  //文件推送到暂存区
git add . 将全部文件推送至暂存区，不包含忽略的文件
git rm --cached &lt;file&gt;  //将文件从暂存区删除，会将文件重置为未追踪状态,在暂存区生成一个deleted
git restore --staged &lt;file&gt; //将文件从暂存区删除,文件是追踪状态


#### 2. 暂存区
git commit -m '提交信息'  //提交文件到本地仓库

#### 3. 本地仓库
git reset --soft &lt;commit id&gt; //将文件从本地仓库回退到暂存区 
git reset --mixed 默认的，将改动文件放到工作区
git reset --hard &lt;commit id&gt; //将全部区域回退到目标版本,改动的内容删除
git rm &lt;file&gt; 删除文件，添加一个删除记录

#### 4. 远程仓库
git pull 将远端文件拉取到本地仓库和工作区
git fetch + git merge 


###### 本地已有仓库
git remote add origin 仓库地址
git push -u origin new_branch 
git push --set-upstream origin new_branch 在远程仓库创建new_branch分支
git remote -v 查看远程仓库
git branch -M main 设置主分支为main

###### 本地无仓库
git init 
git add &lt;file&gt;
git commit -m 'feat: commiit'
git branch -M main
git remote add origin http://git仓库地址
git push -u origin main

