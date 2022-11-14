---
weight: 2
title: "truncate和delete from"
date: 2022-11-10T15:55:54+08:00
draft: false
categroies: ["sql"]
---



## TRUNCATE TABLE
清空数据, 保留表结构<br>
一旦执行此操作, 表数据全部清除 <br>

`TRUNCATE TABLE` 比 `DELETE` 速度快,且使用的系统和事务日志资源少,但 `TRUNCATE`无事务且不触发 `trigger` ,有可能造成事故,故不建议在开发代码中使用此语句。


## DELETE FROM 
可以选择性的清除数据, 数据可以实现回滚
