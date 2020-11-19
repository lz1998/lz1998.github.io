---
title: Centos7 安装Docker
date: 2020-11-17
tags:
 - linux
 - centos
 - docker
categories:
 - Server
---

## Uninstall old versions

```shell script
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine
```

## SET UP THE REPOSITORY

```shell script
$ sudo yum install -y yum-utils

$ sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```

## INSTALL DOCKER ENGINE

```shell script
$ sudo yum install docker-ce docker-ce-cli containerd.io
```

## Start Docker.

```shell script
$ sudo systemctl start docker
```
