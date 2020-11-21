---
title: Docker Mysql
date: 2020-11-21
tags:
 - linux
 - docker
 - mysql
 - phpmyadmin
categories:
 - Server
---

所有`xxx`位置需要修改成具体内容

## MySQL

```shell script
docker run -d \
--name mysql \
-p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=xxx \
mysql:5.7 \
--character-set-server=utf8mb4 \
--collation-server=utf8mb4_unicode_ci
```

## PhpMyAdmin

```shell script
docker run -d \
--name pma \
-p 80:80 \
-e PMA_ARBITRARY=1 \
phpmyadmin/phpmyadmin
```

