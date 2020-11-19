---
title: 小米10至尊纪念版 安装xposed
date: 2020-11-17
tags:
 - android
 - xposed
 - root
 - magisk
categories:
 -  Android
---

## 申请解锁

https://www.miui.com/unlock/index.html

需要提前申请，大约10天

## 提取ROM的boot.img

https://www.miui.com/download-365.html#548

下载ROM完整包，解压后获得boot.img

需要保证版本与手机一致

## 用magisk manager修补boot.img

https://github.com/topjohnwu/MagiskManager/releases

下载，安装，打开，Magisk-安装-选择并修补一个文件-选择boot.img

完成后得到`magisk_patched.img`，复制到电脑

## 使用修补后的boot.img启动

执行以下指令，需要Android SDK

```bash
adb reboot bootloader
fastboot boot magisk_patched.img
```

## 临时安装改为永久安装

打开Magisk Manager

Magisk-安装-直接安装(推荐)

## 安装EdXposed

底部Tab选择 模块

安装`Riru(Riru - Core)`

安装`Riru - Xposed`，推荐选择`SandHook`版本

下载并安装EdXposed Manager

https://github.com/ElderDrivers/EdXposedManager/releases
