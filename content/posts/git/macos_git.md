---
weight: 1
title: "升级到MacOS Ventura 13.0.1 后git无法正常提交的问题"
date: 2022-11-30T10:55:54+08:00
draft: false
categroies: ["git"]
---


最近MacOS推送了最新的`Ventura 13.0.1`，升级之后使用git提交代码时遇到以下问题 <br>
```bash
git push
Unable to negotiate with 106.52.160.162 port 22: no matching host key type found. Their offer: ssh-rsa
致命错误：无法读取远程仓库。

请确认您有正确的访问权限并且仓库存在。
```

一开始以为是秘钥文件在系统升级后被删除了，从新生成一遍秘钥问题依旧

多方搜索后发现是因为MacOs新版本的`openssh`不在默认支持rsa加密算法导致

解决办法如下：

修改~/.ssh/config文件，添加以下代码开启ras算法支持

```
HostkeyAlgorithms +ssh-rsa

PubkeyAcceptedAlgorithms +ssh-rsa
```