---
title: Docker Redis
date: 2020-11-21
tags:
 - linux
 - docker
 - redis
categories:
 - Server
---

所有`xxx`位置需要修改成具体内容


## Redis

```shell script
docker run -d \
--name redis \
-p 6379:6379 \
-v ~/redis/data:/data \
redis redis-server \
--appendonly yes \
--requirepass xxx
```
