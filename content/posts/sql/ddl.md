---
weight: 1
title: "DDL(Data Definition Language)手册"
date: 2022-11-10T15:55:54+08:00
draft: false
categroies: ["sql"]
---



## CREATE 创建

### CREATE DATABASE 创建数据库
```sql
CREATE DATABASE <数据库名>;

CREATE DATABASE IF NOT EXISTS <数据库名>;

CREATE DATABASE IF NOT EXISTS <数据库名> 
DEFAULT CHARACTER SET utf8mb4   # 字符集   可选
COLLATE utf8mb4_general_ci;     # 校对规则 可选
```
> 如果不指定字符集和校对规则, 数据库将默认为`utf8`和`uft8_general_ci` <br>
> 若希望存货表情符号, 则需要指定字符集为`utf8mb4`和常用的校对规则`utf8mb4_general_ci`<br>

### CREATE TABLE 创建表

语法
```sql
CREATE TABLE IF NOT EXISTS <数据表名>(
  字段名1 类型长度） [DEFAULT] [NOT NULL] [COMMENT '<注释>'] 
                 ……， 
  [PRIMARY KEY], 
  [CONSTRAINT <外键名>] FOREIGN KEY 字段名 [，字段名2，…] REFERENCES <主表名> 主键列1 [，主键列2，…]
)
```

例子如下:
```sql
CREATE TABLE `user` (
  `user_id` varchar(36) NOT NULL PRIMARY KEY COMMENT '用户主键',
  `username` varchar(255)  NOT NULL,
  `email` varchar(255)  NOT NULL,
  `bio` varchar(255) NOT NULL DEFAULT '',
  `image` text ,
  `password_hash` varchar(255)  NOT NULL,
  `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP
) 
```

还可以在列字段后面指定引擎信息, mysql默认的引擎是innodb, 若想使用`MyISAM`引擎, 则在建表语句后增加如下语法
```sql
CREATE TABLE [IF NOT EXISTS] <数据表名>(...) ENGINE = MyISAM;
```


## SHOW DDL查询
### SHOW CREATE SCHEMA 查询数据库创建的DDL语句
```sql
SHOW CREATE schema if not exists <数据库名>;
```

### SHOW CREATE TABLE 查询数据表创建时的DDL语句
```sql
SHOW CREATE TABLE <数据表名>;
```


## DROP 删除

### DROP DATABASE 删除数据库
```sql
DROP DATABASE <数据库名>;
```
与`CREATE`类似, 为防止数据库不存在时引发错误, 可以增加存在性判断
```sql
DROP DATABASE IF EXISTS <数据库名>;
```

### DROP TABLE 删除数据表
```sql
DROP TABLE IF EXISTS <数据表名>;
```

### TRUNCATE 删除数据, 保留表结构
```sql
TRUNCATE TABLE <数据表明>;
```


## ALTER 修改
对于已定义的数据库和数据表, 如果想修改其中的某些选项和信息, 此时需要用到`ALTER`

### SET
`ALTER`与`SET`配套使用常用于修改字段默认值等信息
语法
```sql
ALTER TABLE <数据表> ALTER <字段> SET DEFAULT <默认值>;
```
```sql
ALTER TABLE `user` ALTER `email` SET DEFAULT NULL;
```

### ADD
对数据表增加字段
```sql
ALTER TABLE <数据表> ADD <新字段> <数据类型> [...];
```
### DROP
删除数据表字段
```sql
ALTER TABLE <数据表> DROP <已有字段名>;
```

### MODIFY
主要用于修改数据类型等
```sql
ALTER TABLE <数据表> MODIFY <已有字段名> <数据类型>;
```

### CHANGE
对已有字段名, 类型等进行修改
```sql
ALTER TABLE <数据表> CHANGE <已有字段名> <新字段名> <数据类型> ;
```

### RENAME TO
修改数据表名
```sql
ALTER TABLE <数据表> RENAME TO <新数据表明>;
```

### 添加主键约束
```sql
ALTER TABLE <表名> ADD PRIMARY KEY(<列名>);
```
例子:
```sql
ALTER TABLE user ADD PRIMARY KEY(user_id);
```

### 修改原有表的外键约束
```sql
ALTER TABLE <数据表> ADD CONSTRAINT <外键名> FOREIGN KEY (<列名>)
REFERENCES <主表名>(<列名>);  
```

例子:
```sql
ALTER TABLE tb_emp ADD CONSTRAINT fk_tb_dept FOREIGN KEY(deptId) REFERENCES tb_dept(id);
```

### 删除外键约束
```sql
ALTER TABLE <表名> DROP FOREIGN KEY <外键约束名>;
```

> 使用外键存在性能问题、并发死锁问题、使用起来不方便等等。<br>
> 每次做DELETE或者UPDATE都必须考虑外键约束，会导致开发的时候很难受,测试数据造数据也不方便。 <br>
> 还有一个场景不能使用外键，就是分库分表。


