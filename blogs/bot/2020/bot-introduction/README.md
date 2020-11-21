---
title: ProtobufBot介绍
date: 2020-11-21
tags:
 - bot
categories:
 - Bot
---

## 整体介绍

![](./architecture.png)

左侧为`QQ Client`(绿色)，右侧为`Message Processor`(蓝色)

`QQ Client`通过websocket连接到`Message Processor`

当`QQ Client`接收到某事件(私聊消息/群消息/加好友请求等)，通过websocket通知`Message Processor`处理

当`Message Processor`需要执行动作时(发送消息/踢人/禁言等)，通过websocket通知`QQ Client`执行

可以有多个`QQ Client`连接到同一个`Message Processor`，每个`QQ Client`对应一个QQ账号

## QQ Client

主要功能：
- 登陆
- 接受事件(Event)
- 执行动作(Api)

这一部分不需要自己编写，可选择以下任意一个下载并运行

- [Go-Mirai-Client](https://github.com/ProtobufBot/Go-Mirai-Client/releases)
    - 不需要任何环境，可以直接运行
    - 比较稳定
    - 只支持单账号登陆
- [Spring-Mirai-Client](https://github.com/ProtobufBot/Spring-Mirai-Client/releases)
    - 需要安装 JDK 1.8
    - 比较不稳定，可能收不到、发不出消息
    - 支持多账号登陆

## Websocket协议

连接时，Header Key：`x-self-id` Value：机器人账号

消息内容为二进制，使用proto定义：https://github.com/protobufbot/onebot_idl

## 消息处理器

建议使用[pbbot-spring-boot-starter](https://github.com/protobufbot/pbbot-spring-boot-starter)

Maven：

```xml
        <dependency>
            <groupId>net.lz1998</groupId>
            <artifactId>pbbot-spring-boot-starter</artifactId>
            <version>0.0.15</version>
        </dependency>
```

编写功能：

```java
package net.lz1998.pbbot.plugin;

import net.lz1998.pbbot.bot.Bot;
import net.lz1998.pbbot.bot.BotPlugin;
import onebot.OnebotEvent;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class HelloPlugin extends BotPlugin {
    @Override
    public int onGroupMessage(@NotNull Bot bot, @NotNull OnebotEvent.GroupMessageEvent event) {
        long groupId = event.getGroupId();
        String text = event.getRawMessage();
        if ("hello".equals(text)) {
            bot.sendGroupMsg(groupId, "hi", false);
        }
        return MESSAGE_BLOCK;
    }
}
```

配置application.yml

```yaml
spring:
  bot:
    plugin-list: # 配置插件列表（有序），如果插件返回0，继续执行剩余插件，如果插件返回1，终止剩余插件执行
      - net.lz1998.pbbot.plugin.HelloPlugin

server:
  port: 8081
```

