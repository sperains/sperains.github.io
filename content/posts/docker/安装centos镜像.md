---
draft: true
---

# Docker安装Centos


> 默认安装最新版本的centos
```bash
docker pull centos
```

运行centos
> run 表示 启动容器 <br>
> -i 以交互模式运行容器，通常与 -t 同时使用；<br>
> -t 为容器重新分配一个未输入终端, 通常与-i同时使用<br>
> -d 后台运行容器<br>
> --name 为当前运行的容器指定一个别名, 此处的别名为`docker-centos`<br>
> 最后的`centos`为当前使用的镜像名称<br>
```bash
docker run -itd --name docker-centos centos
```

开启systemd服务
```
 run -itd --privileged=true  --name <container-name> -p 89:80 <images-name> /sbin/init
```


查看正在运行容器
```
docker ps 
```

进入容器
> exec 表示进入容器
> 最后`/bin/bash`表示使用bash脚本
```
docker exec -it docker-centos /bin/bash
```
