

# Shadow DOM
> Shadow DOM接口可以将一个隐藏的、独立的DOM附加到一个元素上.
> Shadow DOM以`shadow root`结点为起始根节点, 在这个根节点下方, 可以是任意元素, 和普通DOM元素一样


- Shadow host: 一个常规的DOM结点, Shadow DOM会被附加到这个节点上
- Shadow tree: Shadow DOM内部的DOM树
- Shadow boundary: Shadow DOM结束的地方, 也是常规DOM开始的地方.
- Shadow root: Shadow tree的根节点

> Shadow DOM内部的元素始终不会影响到它外部的元素(除了`:focus-within`), 这为封装提供了便利



## 基本用法

可以使用`Element.attachShadow()`方法来讲一个shadow root附加到任何一个元素上. 
它接受一个配置对象作为参数, 该对象有一个mode属性, 值可以是`open`或者`closed`:



> ```
>  let shadow = elementRef.attachShadow({mode: 'open'});
>  let shadow = elementRef.attachShadow({mode: 'closed'});
> ```

open表示可以通过页面内的Javascript方法来获取Shadow DOM

> ```javascript
> let myShadowDom = myCustomElem.shadowRoot;
> ```
