
```nginx
location / {
  root /Users/sperains/jd/dist;
  try_files $uri $uri/ /index.html;
}
```


nginx中`try_files`的作用
> 在nginx中`try_files`的作用一般用户美化url, 或者是实现伪静态功能<br>

> 当用户请求http://localhost/example时, 这里的$uri就是/example <br>

通过`try_files`配置后nginx会进行一下操作
1. ($uri)  `try_files`会尝试在硬盘中查找/root/example这个文件(/root即nginx中的root指令指向的目录) , 若存在则返回给用户, 若没有找到进行下一步
2. ($uri/) `try_files`紧接着会尝试在硬盘中查找/root/example/ 这个目录(多了一个`/`), 此时又没有找到, 继续进行下一步操作
3. (/index.html) `try_fiels`最后在硬盘中查找/root/index.html, 相当于发起了一个到localhost/root/index.html的请求.
  




