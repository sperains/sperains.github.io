---
title: "vue中判断图片是否正常加载"
date: 2020-10-11T13:11:54+08:00
draft: false
---


## img标签中的事件

### onload
> 当图片加载完成时触发


### onerror
> 当图片加载发生错误时触发


在vue中可以通过以下方式来监听上述两种事件
```html
<img src="" @load="onLoad" @error="onError" />
```