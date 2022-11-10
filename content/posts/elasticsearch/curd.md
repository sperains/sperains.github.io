
---
title: "elasticsearch常用语法"
date: 2020-09-09T17:17:00+08:00
tags: ["elasticsearch"]
categories: ["java"]
draft: false
---

## 创建文档
> 只能使用POST, 不能使用PUT
```
POST es_demo/_doc
{
  "title": "小米手机",
  "category": "小米",
  "price": 1999
}
```

##  创建文档时,添加自定义id
```
POST es_demo/_doc/10003
{
  "title": "小米手机",
  "category": "小米",
  "price": 1999
}
```

## 通过id查找文档属性
```
GET es_demo/_doc/10001
```


## 查找索引中所有文档数据
```
GET es_demo/_search
```


## 完全覆盖修改
```
PUT es_demo/_doc/T2EUy3wBvc8vloygt6X2
{
  "title": "华为手机",
  "category": "华为",
  "price": 19999
}
```

## 局部更新
```
POST es_demo/_update/10001
{
  "doc": {
    "title": "华为手机"
  }
}
```

## 删除数据
```
DELETE es_demo/_doc/10001
```




## 分页
>
>  "from": 2,
>  "size": 2,
>
```
POST es_demo/_search
{
  "query": {
    "match": {
      "title": "小"
    }
  },
  "from": 2,
  "size": 2,
  "_source": ["title"],
  "sort": [
    {
      "price": {
        "order": "desc"
      }
    }
  ]
}
```

## 多条件查询
> must => and
> should => or
> filter => 条件查询
```
POST es_demo/_search
{
  "query": {
    "bool": {
      "should": [
        {
          "match": {
            "category": "小米"
          }
        },
        {
          "match": {
            "category": "华为"
          }
        }
      ],
      "filter": [
        {
          "range": {
            "price": {
              "gt": 5000
            }
          }
        }
      ]
    }
  }
}
```


## 完全匹配 match_phrase
```
POST es_demo/_search
{
  "query": {
    "match_phrase": {
      "category": "小米"
    }
  },
  "highlight": {
    "fields": {
      "category": {
      }
    }
  }
}
```


## 聚合查询

```
POST es_demo/_search
{
  "aggs": {
    "price_group": {
      "terms": {
        "field": "price"
      }
    }
  },
  "size": 0
}
```


## 平均值
```
POST es_demo/_search
{
  "aggs": {
    "price_avg": {
      "terms": {
        "field": "price"
      }
    }
  },
  "size": 0
}
```



## 映射关系
```
PUT user;

GET user/_search;


PUT user/_mapping 
{
  "properties": {
    "name": {
      "type": "text",
      "index": true
    },
    "age": {
      "type": "keyword",
      "index": true
    },
    "tel": {
      "type": "keyword",
      "index": false
    }
  }
}

GET user/_mapping;

PUT user/_create/1001
{
  "name": "小米",
  "age": 20,
  "tel": "15623551300"
}

```














