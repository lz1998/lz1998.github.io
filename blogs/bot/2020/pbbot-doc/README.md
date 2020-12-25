---
title: pbbot-spring-boot-starter
date: 2020-12-26
tags:
 - bot
categories:
 - Bot
---

**这是一个spring-boot-starter，可以用于快速创建机器人项目。**

<!-- more -->

介绍：这是一个websocket server，在收到消息内容时自动进行解析，并交给开发者编写的插件进行处理。当开发者调用API时，自动根据参数发送数据到websocket client。

为了降低门槛，本文使用Java举例，如果用Kotlin会更爽。

## 基本说明及举例

### 创建项目

**环境要求**
- Intellij IDEA (有这个就行了)
- JDK 1.8 (第一条 IDEA会自动装)
- Maven (第一条 IDEA会自动装)

创建项目 New -> Project -> Spring Initializer

### 导入maven依赖

找到pom.xml，在dependencies节点，添加以下代码

```xml
    <dependency>
        <groupId>net.lz1998</groupId>
        <artifactId>pbbot-spring-boot-starter</artifactId>
        <version>0.0.17</version>
    </dependency>
```

可以在[这里](https://repo.maven.apache.org/maven2/net/lz1998/pbbot-spring-boot-starter/)找到最新的版本

### 编写插件

创建一个类，继承BotPlugin，上面加上 `@Component`，override所需的方法。

#### 举例1

```java
import net.lz1998.pbbot.bot.Bot;
import net.lz1998.pbbot.bot.BotPlugin;
import onebot.OnebotEvent;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Component;

@Component
public class DemoPlugin extends BotPlugin {

    @Override
    public int onPrivateMessage(@NotNull Bot bot, @NotNull OnebotEvent.PrivateMessageEvent event) {
        long userId = event.getUserId();
        String rawMessage = event.getRawMessage();
        bot.sendPrivateMsg(userId, "你发送了" + rawMessage, false);
        return MESSAGE_BLOCK;
    }
}
```

**解释**

- `onPrivateMessage` 当收到私聊消息时执行，bot表示机器人，event中包含了私聊消息内容、发送者等基本信息
- `event.getUserId();` 获取发送者QQ
- `event.getRawMessage();` 获取收到的内容
- `bot.sendPrivateMsg(userId, "你发送了" + rawMessage, false);` 让机器人发送私聊消息给`userId`，消息内容是`你发送了<收到的内容>`，最后一个参数一般填`false`，表示不进行转义（初期不需要知道）。
- `return MESSAGE_BLOCK;` 不执行下一个插件（如果有多个插件）

#### 举例2

```java
import net.lz1998.pbbot.bot.Bot;
import net.lz1998.pbbot.bot.BotPlugin;
import net.lz1998.pbbot.utils.Msg;
import onebot.OnebotEvent;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Component;

@Component
public class DemoPlugin extends BotPlugin {

    @Override
    public int onGroupMessage(@NotNull Bot bot, @NotNull OnebotEvent.GroupMessageEvent event) {
        long userId = event.getUserId();
        long groupId = event.getGroupId();
        String rawMessage = event.getRawMessage();
        if ("hello".equals(rawMessage)) {
            Msg.builder().at(userId).text("hi，").face(1).text("你的QQ是" + userId).sendToGroup(bot, groupId);
        }
        return MESSAGE_IGNORE;
    }
}
```

**解释**

- `onGroupMessage` 当收到群聊消息时执行，bot表示机器人，event中包含了消息内容、发送者、群号等基本信息
- `event.getUserId();` 获取发送者QQ
- `event.getGroupId();` 获取这条消息所在群号
- `event.getRawMessage();` 获取收到的内容
- `if ("hello".equals(rawMessage))` 如果消息内容是`hello`
- `Msg.builder().at(userId).text("hi，").face(1).text("你的QQ是" + userId).image("https://www.baidu.com/img/flexible/logo/pc/result@2.png").sendToGroup(bot, groupId);` 构造一条消息，消息内容是`@发送者`+`hi，`+表情+`你的QQ是<QQ>`+一张图片，并使用bot机器人发送给这个群。
- `return MESSAGE_IGNORE;` 继续执行下一个插件

### 配置插件顺序

1. 删除默认的`src/main/resources/application.properties`
2. 创建`src/main/resources/application.yml`
3. 写入以下配置，插件内容和顺序需要自行调整
    ```yaml
    spring:
      bot:
        plugin-list: # 配置插件列表（有序），如果插件返回MESSAGE_IGNORE，继续执行剩余插件，如果插件返回MESSAGE_BLOCK，终止剩余插件执行
          - net.lz1998.pbbot.plugin.LogPlugin # 日志插件
          - net.lz1998.pbbot.plugin.DemoPlugin # 测试插件
          - net.lz1998.pbbot.plugin.HelloPlugin # 测试插件
    
    server:
      port: 8081
    ```

## 详细说明

### BotPlugin可接受的事件(Event)

- `onPrivateMessage` 收到私聊消息时调用此方法
- `onGroupMessage` 收到群消息时调用此方法
- `onGroupUploadNotice` 群内有文件上传时调用此方法
- `onGroupAdminNotice` 群管理员变动时调用此方法
- `onGroupDecreaseNotice` 群成员减少时调用此方法(有人退群/被踢，事件已发生)
- `onGroupIncreaseNotice` 群成员增加时调用此方法(有人进群，事件已发生)
- `onGroupBanNotice` 群禁言时调用此方法
- `onFriendAddNotice` 好友添加时调用此方法(事件已发生)
- `onGroupRecallNotice` 群撤回消息时调用此方法
- `onFriendRecallNotice` 好友撤回消息时调用此方法
- `onFriendRequest` 加好友请求时调用此方法(还没加，请求是否通过)
- `onGroupRequest` 加群请求/邀请时调用此方法(还没加，请求是否通过)

建议直接查看[BotPlugin源码](https://github.com/ProtobufBot/pbbot-spring-boot-starter/blob/master/src/main/kotlin/net/lz1998/pbbot/bot/BotPlugin.kt)

如果你不知道event里面有什么，可以看[onebot_idl](http://github.com/protobufbot/onebot_idl)，或者输入`event.get`，等待代码编辑器自动提示

### Bot可执行的方法

- `sendPrivateMsg` 发送私聊消息
- `sendGroupMsg` 发送群消息
- `deleteMsg` 撤回消息
- `getMsg` 获取消息
- `setGroupKick` 群组踢人
- `setGroupBan` 群组单人禁言
- `setGroupWholeBan` 群组全员禁言
- `setGroupCard` 设置群名片（群备注）
- `setGroupLeave` 退群
- `setGroupSpecialTitle` 设置群组专属头衔
- `setFriendAddRequest` 处理加好友请求 (flag参数：在onFriendRequest中`event.getFlag()`)
- `setGroupAddRequest` 处理加群请求／邀请(flag参数：在onFriendRequest中`event.getFlag()`)
- `getLoginInfo` 获取登录号信息
- `getStrangerInfo` 获取陌生人信息
- `getFriendList` 获取好友列表
- `getGroupList` 获取群列表
- `getGroupInfo` 获取群信息
- `getGroupMemberInfo` 获取群成员信息
- `getGroupMemberList` 获取群成员列表

建议直接查看[Bot源码](https://github.com/ProtobufBot/pbbot-spring-boot-starter/blob/master/src/main/kotlin/net/lz1998/pbbot/bot/Bot.kt)

### 消息构造器

发送at，图片，表情等需要使用消息构造器

```java
Msg msg = Msg.builder().text().image().record().flash().face().at().atAll().share().reply();
bot.sendGroupMsg(groupId, msg, false);

Msg.builder().text().image().record().flash().face().at().atAll().share().reply().sendToGroup(bot, groupId);
```

建议直接查看[Msg源码](https://github.com/ProtobufBot/pbbot-spring-boot-starter/blob/master/src/main/kotlin/net/lz1998/pbbot/utils/Msg.kt)

