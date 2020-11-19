---
title: Centos7 SSH端口修改
date: 2020-11-17
tags:
 - linux
 - centos
 - ssh
categories:
 - Server
---

## 云服务器选择

系统：Centos7

服务商：阿里云/腾讯云

## 安全组打开22端口

在腾讯云/阿里云安全组，关闭所有入流量端口，仅保留22端口

## 修改服务器ssh端口

```bash
vi /etc/ssh/ssh

#Port 22
Port xx

systemctl restart sshd
```

## 安全组修改端口

添加规则，入流量添加xx端口，授权`0.0.0.0/0`
