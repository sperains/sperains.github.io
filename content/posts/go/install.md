---
weight: 1
title: "Go开发环境配置（Mac）"
date: 2022-11-10T15:55:54+08:00
draft: false
categroies: ["go"]
---


# Go开发环境配置（Mac）

## 下载安装go
```bash
brew install go
```
```bash
~ go version
go version go1.19.3 darwin/amd64
```


## vscode插件安装
在vscode插件搜索安装一下插件 <br>

1. go语言扩展 <br>
![](/posts/go/2022-11-29-11-25-59.png)

1. go运行调试工具 <br>
![](/posts/go/2022-11-29-11-30-07.png)



> 在使用go语言扩展时还需要下载一些其他的依赖项（打开一个.go文件，vscode会自动提示下载其他依赖项），若vscode下载依赖包失败时，可在命令行输入以下命令，之后重启vscode再次点击安装即可

```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct
```