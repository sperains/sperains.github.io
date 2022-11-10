---
title: "Grid网格布局"
date: 2019-10-18T20:03:00+08:00
tags: ["css"]
categories: ["css"]
images: []
# featuredImage: "/posts/css/company_front.png"
featuredImagePreview: "https://www.wangbase.com/blogimg/asset/201903/1_bg2019032501.png"
---

网格布局将网页划分为一个个网格,可以任意组合不同的网格,做出各种各样的布局.
<!--more-->

# 一、概述

网格布局将网页划分为一个个网格,可以任意组合不同的网格,做出各种各样的布局.

![](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032501.png)

# 二、基本概念

## 1. 容器和项目

采用网格布局的区域, 称为`容器`(container).
容器内部采用网格定位的元素, 称为`项目`(item)

## 2. 行和列

容器里面的水平区域称为`行`(row), 垂直区域称为`列`(column)

![](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032502.png)

## 3. 单元格

行和列交叉的区域, 称为`单元格`(cell)
正常情况下, `n`行和`m`列会产生`n * m`个单元格.

## 4. 网格线

划分网格的线, 称为`网格线`(grid line)

# 三、容器属性

Grid布局的属性分为两类. 一类定义在容器上面, 称为容器属性;另一类定义在项目上面, 称为项目属性

## 1. display属性

`display: grid`指定一个容器采用网格布局

```css
.container {
  display: grid;
}
```

## 2. `grid-template-columns`属性、`grid-template-rows`属性

容器指定了网格布局以后, 接着需要划分行和列.
`grid-template-columns`属性定义每一列的列宽
`grid-template-rows`属性定义每一行的行高

```html
<div class="container">
  <div>1</div> 
  <div>2</div> 
  <div>3</div> 
  <div>4</div> 
  <div>5</div> 
  <div>6</div> 
  <div>7</div> 
  <div>8</div> 
  <div>9</div> 
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
}
```

以上代码指定了一个3行3列的网格,列宽和行高都是100px, 如下图所示

![](https://files.catbox.moe/lf5v9t.png)

除了使用绝对单位, 也可以使用百分比.

```css
.container {
  display: grid;
  grid-tempalte-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 33.33% 33.33% 33.33%;
}
```

### (1) repeat()

有时候, 重复写同样的值非常麻烦, 尤其网格很多的时候. 此时可以使用`repeat()`函数, 简化重复的值. 以上代码可以用`repeat()`改写为如下形式

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
```

`repeat()`接收两个参数, 第一个参数是重复的次数(上例是3), 第二个参数是所要重复的值.

`repeat()`重复某种模式也是可以的

```css
grid-template-columns: repeat(2, 100px 20px 80px)
```

以上代码定义了6列, 第一列和第四列的宽度是100px, 第二列和第五列为20px, 第三列和第六列为80px.

### (2) aotu-fill关键字

有时, 单元格的大小是固定的, 但是容器的大小不固定. 如果希望每一行(或每一列)容纳尽可能多的单元格, 这时可以使用`auto-fill`关键字表示自动填充

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
```

以上代码表示每一列单元格的宽度为100px, 然后自动填充, 知道容器不能放置更多的列

![](https://files.catbox.moe/uzqe0f.png)

### (3) fr关键字

为了方便表示比例关系, 网格布局提供了`fr`关键字(fraction的缩写, 意为'片段'). 如果两列的宽度分别为`1fr`和`2fr`, 就表示后者是前者的两倍.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

`fr`可以与绝对长度的单位结合使用, 

```css
.container {
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
}
以上代码表示第一列为固定宽度100px, 第二列、第三列分配剩余的宽度, 并且第三列是第二列的2倍
```

![](https://files.catbox.moe/zbopyp.png)

### (4) minmax()

`minmax()`函数产生一个长度范围, 表示长度就在这个范围之中. 它接收两个参数, 分别为最小值和最大值.

```css
.container {
  grid-template-columns: 1fr 1fr minmax(100px, 1fr)
}
```

以上代码中, `minmax(100px, 1fr)`表示第三列列宽不小于100px, 不大于`1fr`

### (5) auto关键字

`auto`关键字表示由浏览器自己决定长度

```css
.container {
  grid-template-columns: 100px auto 100px;
}
```

以上代码中第二列的宽度基本上等于该列单元格的最大宽度, 除非单元格内容设置了`min-width`, 且这个值大于最大宽度.

### (6) 网格线的名称

`grid-template-columns`属性和`grid-template-rows`属性里面, 还可以使用方括号, 指定每一根网格线的名字, 方便以后的引用

```css
.container {
  display: grid;
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
}
```

网格布局允许同一根线有多个名字，比如`[fifth-line row-5]`。

### (7) 布局实例

```css
.container {
  display: grid,
  grid-template-columns: 70% 30%;
}
```

以上代码将左边栏设为70%, 右边栏设为30%;
传统的12网格布局写起来也很容易

```css
grid-template-columns: repeat(12, 1fr);
```

## 3. `row-gap`属性、`column-gap`属性、`gap`属性

`row-gap`属性设置行与行的间隔(行间距), `column-gap`属性设置列与列的间隔(列间距)

```css
.container {
  row-gap: 20px;
  column-gap: 20px;
}
```

以上代码设置了行列的间隔为20px , 也可以缩写为`gap: 20px 20px`(`<row-gap> <column-gap>`)或`gap: 20px`

![](https://files.catbox.moe/qebdtl.png)

## 4. `grid-template-areas`属性

网格布局允许指定区域(area), 一个区域由单个或多个单元格组成.
`grid-template-areas`属性用于定义区域

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas: 'a b c' 'd e f' 'g h i'
}
```

上面代码先划分出9个单元格, 然后将其命名为`a`到`i`的9个区域, 分别对应这9个单元格
多个单元格合并为一个区域的写法如下:

```css
.container {
  grid-template-areas: 'a a a' 'b b b' 'c c c' 
}
```

上面代码把9个单元格分成了`a`、`b`、`c`三个区域

下面是一个布局实例

```css
.container {
  grid-template-areas: 'header header header' 'main main sidebar' 'footer footer footer'
}
``
上面代码中, 顶部是页眉区域`header`, 底部用页脚区域`footer`, 中间部分为`main`和`sidebar`
如果某些区域不需要利用,则使用点(.)表示
```css
grid-template-areas: 'a . c' 'd . f' 'g . i'
```

> 区域的命名会影响到网格线. 每个区域的起始网格线会自动命名为`区域名-start`, 终止网格线自动命名为`区域名-end`
> 比如, 区域名为`header`, 则起始位置的水平网格线和垂直网格线叫做`header-start`, 终止位置的水平网格线和垂直网格线叫做`header-end`

## 5. `grid-auto-flow`属性

划分网格后, 容器的子元素会按照顺序, 自动放置在每一个网格中. 
默认的放置顺序是`先行后列`, 既先填满第一行, 再开始放入第二行, 即下图数字的顺序.

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032506.png)

这个顺序由`grid-auto-flow`属性决定, 默认值是`row`, 也可以将其设置为`column`, 变成`先列后行`

```css
grid-auto-flow: column;
```

以上代码设置了`column`后, 放置顺序变成了下图所示的样式

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032512.png)

`grid-auto-flow`属性除了设置成`row`和`column`, 还可以设成`row dense`和`column dense`. 这两个值主要用于在某些项目指定位置以后, 剩下的项目应该如何放置

下面的例子让1号项目和2号项目各占据2个单元格, 在默认情况会产生以下的布局

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032513.png)

现在修改设置，设为`row dense`，表示"先行后列"，并且尽可能紧密填满，尽量不出现空格。

效果如下所示

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032514.png)

## 6. `justify-items`、`align-items`、`place-items`属性

`justify-items`属性设置单元格内容的水平位置(左中右)
`align-items`属性设置单元格内容的垂直位置(上中下)

`place-items`属性是`align-items`属性和`justify-items`属性的合并简写形式

```css
// place-items: <align-items> <justify-items>
place-items: start end;
```

## 7. `justify-content`、`align-content`、`place-content`属性

`justify-content`属性是整个内容区域在容器里面的水平位置(左右有)
`align-content`属性是整个内容区域在容器里面的垂直位置(上中下)

start

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032519.png)

center

![](https://www.wangbase.com/blogimg/asset/201903/bg2019032520.png)

# 四、项目属性

## 1. `grid-column-start`、`grid-column-end`、`grid-row-start`、`grid-row-end`、`grid-column`、`grid-row`

项目的位置是可以指定的, 具体方法就是指定项目的四个边框, 分别定位在哪根网格线

- `grid-column-start`属性: 左边框所在的垂直网格线
- `grid-column-end`属性: 右边框所在的垂直网格线
- `grid-row-start`属性: 上边框所在的水平网格线
- `grid-row-end`属性: 下边框所在的水平网格线

```css
.item-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
```

> 使用这四个属性时, 如果产生了项目的重叠, 则使用`z-index`属性指定项目的重叠顺序

`grid-column`属性是`grid-column-start`和`grid-column-end`的简写形式
`grid-row`属性是`grid-row-start`和`grid-row-end`的简写形式

```css
.item {
  grid-column: <start-line> / <end-line>
  grid-row: <start-line> / <end-line>
}
```

下面是一个例子

```css
.item-1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

/*等同于 */ 
.item-1 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
} 
```

这两个属性中, 也可以使用`span`关键字, 表示跨越多少个网格;

```css
.item-1 {
  grid-column: 1 / span 2;
  grid-row: 1 / span2;
}
```

## 2. `grid-area`属性

`grid-area`属性指定项目放在哪一个区域

```css
.item-1 {
  grid-area: a;
}
```

`grid-area`属性还可用作`grid-row-start`、`grid-column-start`、`grid-row-end`、`grid-column-end`的合并简写形式, 直接指定项目位置

```css
.item {
  grid-area: <row-start> / <column-start> / <row-end> / <column-end>;
}
```

下面是一个例子

```css
.item-1 {
  grid-area: 1 / 1 / 3 / 3;
}
```

## 3. `justify-self`、`align-self`、`place-self`属性

`justify-self`属性设置单元格内容的水平位置（左中右），跟`justify-items`属性的用法完全一致，但只作用于单个项目。

`align-self`属性设置单元格内容的垂直位置（上中下），跟`align-items`属性的用法完全一致，也是只作用于单个项目。

`place-self`属性是`align-self`属性和`justify-self`属性的合并简写形式。

```css
place-self: <align-self> <justify-self>;
```