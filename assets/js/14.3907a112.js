(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{284:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[t._v("#")]),t._v(" Git")]),t._v(" "),s("h2",{attrs:{id:"流程图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流程图"}},[t._v("#")]),t._v(" 流程图")]),t._v(" "),s("img",{staticStyle:{"margin-top":"10px"},attrs:{src:t.$withBase("/images/git_workflows.png"),alt:"foo"}}),t._v(" "),s("p",[t._v("Workspace：工作区")]),t._v(" "),s("p",[t._v("Index / Stage：暂存区")]),t._v(" "),s("p",[t._v("Repository：仓库区（或本地仓库）")]),t._v(" "),s("p",[t._v("Remote：远程仓库")]),t._v(" "),s("h2",{attrs:{id:"新建代码库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建代码库"}},[t._v("#")]),t._v(" 新建代码库")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前目录新建一个代码库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project-name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前目录新建一个代码库并指定项目名称")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("project-email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远端下载一个项目到本地")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"配置-git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-git"}},[t._v("#")]),t._v(" 配置 git")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--list")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看代码库信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.name 用户名  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置提交的用户名")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--global")]),t._v(" user.email 用户邮箱 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置提交的邮箱地址")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"增加删除文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加删除文件"}},[t._v("#")]),t._v(" 增加删除文件")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" file1 file2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加指定文件及目录到暂存区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加所有当前目录在工作区的文件到暂存区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" file1 file2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将指定文件删除并将这次删除记录在暂存区")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"代码提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码提交"}},[t._v("#")]),t._v(" 代码提交")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit file1 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将暂存区指定文件及目录的修改提交到版本库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将暂存区当前目录的修改提交到版本库")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--amend")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置上一次提交到工作区一起提交到版本库")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"提交撤销"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交撤销"}},[t._v("#")]),t._v(" 提交撤销")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复暂存区的指定文件到工作区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复某个commit的指定文件到暂存区和工作区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 恢复暂存区的所有文件到工作区")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--hard")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 彻底回退到某个版本,暂存区和工作区都会与commit一致")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂时将未提交的变化移除，稍后再移入")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看stash")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一如stash中的内容")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"查看信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看信息"}},[t._v("#")]),t._v(" 查看信息")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示变更的文件")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示当前分支的版本了历史")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-r")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，指向指定commit")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并切换分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远端分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立追踪关系，在现有分支与指定的远程分支之间")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签"}},[t._v("#")]),t._v(" 标签")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地标签")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("commit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个tag在指定commit")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个tag在当前commit")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin :refs/tags/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tagName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看tag信息")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交指定tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tags")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交所有tag")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新建一个分支，指向某个tag")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"远程同步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程同步"}},[t._v("#")]),t._v(" 远程同步")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置远端推送地址")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("newBrach"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" origin/master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于远端(origin/master) 创建并切换分支")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程主机的master分支拉取最新内容(拉取到版本库,pull=fetch +merge)")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将远端master分支拉下来和本地指定分支进行合并(需要操作的放前面)")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":master "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远端的master分支(需要操作的放前面)")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":master "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--force")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强行推送当前分支到远程仓库并覆盖")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 撤销文件修改")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);