---
title: "oh-my-zsh安装"
date: 2020-06-24T14:30:00+08:00
tags: ["zsh"]
categories: ["centos"]
---

## 安装zsh
```
dnf install zsh
```

查看支持的shell脚本, 安装zsh后会自动增加zsh相应的`shell`
```
cat /etc/shell
```

切换shell脚本
```
chsh -s /bin/zsh
```

## 安装oh-my-zsh
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## 安装插件

进入插件目录
```
cd ~/.oh-my-zsh/custom/plugins
```

安装高亮插件
```
// 进入插件目录
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

安装自动补全插件
```
// 进入插件目录
git clone https://github.com/zsh-users/zsh-autosuggestions
```

## 启用插件
```
vi ~/.zshrc

plugins=(
git
zsh-syntax-highlighting
zsh-autosuggestions
)


```