(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{501:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v('这是一个spring-boot-starter，可以用于快速创建机器人项目。在阅读这篇文章之前需要先阅读"ProtobufBot快速上手"，并成功运行QQ Client。')])]),t._v(" "),a("p",[t._v("介绍：这是一个websocket server，在收到消息内容时自动进行解析，并交给开发者编写的插件进行处理。当开发者调用API时，自动根据参数发送数据到websocket client。")]),t._v(" "),a("p",[t._v("为了降低门槛，本文使用Java举例，如果用Kotlin会更爽。")]),t._v(" "),a("h2",{attrs:{id:"基本说明及举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本说明及举例"}},[t._v("#")]),t._v(" 基本说明及举例")]),t._v(" "),a("h3",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),a("p",[a("strong",[t._v("环境要求")])]),t._v(" "),a("ul",[a("li",[t._v("Intellij IDEA (有这个就行了)")]),t._v(" "),a("li",[t._v("JDK 1.8 (第一条 IDEA会自动装)")]),t._v(" "),a("li",[t._v("Maven (第一条 IDEA会自动装)")])]),t._v(" "),a("p",[t._v("创建项目 New -> Project -> Spring Initializer")]),t._v(" "),a("h3",{attrs:{id:"导入maven依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入maven依赖"}},[t._v("#")]),t._v(" 导入maven依赖")]),t._v(" "),a("p",[t._v("找到pom.xml，在dependencies节点，添加以下代码")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("net.lz1998"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pbbot-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("0.0.17"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("可以在"),a("a",{attrs:{href:"https://repo.maven.apache.org/maven2/net/lz1998/pbbot-spring-boot-starter/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("找到最新的版本")]),t._v(" "),a("h3",{attrs:{id:"编写插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写插件"}},[t._v("#")]),t._v(" 编写插件")]),t._v(" "),a("p",[t._v("创建一个类，继承BotPlugin，上面加上 "),a("code",[t._v("@Component")]),t._v("，override所需的方法。")]),t._v(" "),a("h4",{attrs:{id:"举例1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例1"}},[t._v("#")]),t._v(" 举例1")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lz1998"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pbbot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lz1998"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pbbot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BotPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("onebot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnebotEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jetbrains"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoPlugin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BotPlugin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onPrivateMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotNull")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bot")]),t._v(" bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotNull")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnebotEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PrivateMessageEvent")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" userId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" rawMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRawMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendPrivateMsg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你发送了"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" rawMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MESSAGE_BLOCK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("onPrivateMessage")]),t._v(" 当收到私聊消息时执行，bot表示机器人，event中包含了私聊消息内容、发送者等基本信息")]),t._v(" "),a("li",[a("code",[t._v("event.getUserId();")]),t._v(" 获取发送者QQ")]),t._v(" "),a("li",[a("code",[t._v("event.getRawMessage();")]),t._v(" 获取收到的内容")]),t._v(" "),a("li",[a("code",[t._v('bot.sendPrivateMsg(userId, "你发送了" + rawMessage, false);')]),t._v(" 让机器人发送私聊消息给"),a("code",[t._v("userId")]),t._v("，消息内容是"),a("code",[t._v("你发送了<收到的内容>")]),t._v("，最后一个参数一般填"),a("code",[t._v("false")]),t._v("，表示不进行转义（初期不需要知道）。")]),t._v(" "),a("li",[a("code",[t._v("return MESSAGE_BLOCK;")]),t._v(" 不执行下一个插件（如果有多个插件）")])]),t._v(" "),a("h4",{attrs:{id:"举例2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例2"}},[t._v("#")]),t._v(" 举例2")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lz1998"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pbbot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lz1998"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pbbot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BotPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lz1998"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pbbot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("onebot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnebotEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("jetbrains"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("annotations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NotNull")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("springframework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stereotype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DemoPlugin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BotPlugin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onGroupMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotNull")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Bot")]),t._v(" bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@NotNull")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnebotEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GroupMessageEvent")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" userId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" groupId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGroupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" rawMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRawMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rawMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("at")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi，"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("face")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你的QQ是"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" userId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendToGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" MESSAGE_IGNORE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br")])]),a("p",[a("strong",[t._v("解释")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("onGroupMessage")]),t._v(" 当收到群聊消息时执行，bot表示机器人，event中包含了消息内容、发送者、群号等基本信息")]),t._v(" "),a("li",[a("code",[t._v("event.getUserId();")]),t._v(" 获取发送者QQ")]),t._v(" "),a("li",[a("code",[t._v("event.getGroupId();")]),t._v(" 获取这条消息所在群号")]),t._v(" "),a("li",[a("code",[t._v("event.getRawMessage();")]),t._v(" 获取收到的内容")]),t._v(" "),a("li",[a("code",[t._v('if ("hello".equals(rawMessage))')]),t._v(" 如果消息内容是"),a("code",[t._v("hello")])]),t._v(" "),a("li",[a("code",[t._v('Msg.builder().at(userId).text("hi，").face(1).text("你的QQ是" + userId).image("https://www.baidu.com/img/flexible/logo/pc/result@2.png").sendToGroup(bot, groupId);')]),t._v(" 构造一条消息，消息内容是"),a("code",[t._v("@发送者")]),t._v("+"),a("code",[t._v("hi，")]),t._v("+表情+"),a("code",[t._v("你的QQ是<QQ>")]),t._v("+一张图片，并使用bot机器人发送给这个群。")]),t._v(" "),a("li",[a("code",[t._v("return MESSAGE_IGNORE;")]),t._v(" 继续执行下一个插件")])]),t._v(" "),a("h3",{attrs:{id:"配置插件顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置插件顺序"}},[t._v("#")]),t._v(" 配置插件顺序")]),t._v(" "),a("ol",[a("li",[t._v("删除默认的"),a("code",[t._v("src/main/resources/application.properties")])]),t._v(" "),a("li",[t._v("创建"),a("code",[t._v("src/main/resources/application.yml")])]),t._v(" "),a("li",[t._v("写入以下配置，插件内容和顺序需要自行调整"),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("bot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("plugin-list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置插件列表（有序），如果插件返回MESSAGE_IGNORE，继续执行剩余插件，如果插件返回MESSAGE_BLOCK，终止剩余插件执行")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" net.lz1998.pbbot.plugin.LogPlugin "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志插件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" net.lz1998.pbbot.plugin.DemoPlugin "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试插件")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" net.lz1998.pbbot.plugin.HelloPlugin "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 测试插件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"详细说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#详细说明"}},[t._v("#")]),t._v(" 详细说明")]),t._v(" "),a("h3",{attrs:{id:"botplugin可接受的事件-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#botplugin可接受的事件-event"}},[t._v("#")]),t._v(" BotPlugin可接受的事件(Event)")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("onPrivateMessage")]),t._v(" 收到私聊消息时调用此方法")]),t._v(" "),a("li",[a("code",[t._v("onGroupMessage")]),t._v(" 收到群消息时调用此方法")]),t._v(" "),a("li",[a("code",[t._v("onGroupUploadNotice")]),t._v(" 群内有文件上传时调用此方法")]),t._v(" "),a("li",[a("code",[t._v("onGroupAdminNotice")]),t._v(" 群管理员变动时调用此方法")]),t._v(" "),a("li",[a("code",[t._v("onGroupDecreaseNotice")]),t._v(" 群成员减少时调用此方法(有人退群/被踢，事件已发生)")]),t._v(" "),a("li",[a("code",[t._v("onGroupIncreaseNotice")]),t._v(" 群成员增加时调用此方法(有人进群，事件已发生)")]),t._v(" "),a("li",[a("code",[t._v("onGroupBanNotice")]),t._v(" 群禁言时调用此方法")]),t._v(" "),a("li",[a("code",[t._v("onFriendAddNotice")]),t._v(" 好友添加时调用此方法(事件已发生)")]),t._v(" "),a("li",[a("code",[t._v("onGroupRecallNotice")]),t._v(" 群撤回消息时调用此方法")]),t._v(" "),a("li",[a("code",[t._v("onFriendRecallNotice")]),t._v(" 好友撤回消息时调用此方法")]),t._v(" "),a("li",[a("code",[t._v("onFriendRequest")]),t._v(" 加好友请求时调用此方法(还没加，请求是否通过)")]),t._v(" "),a("li",[a("code",[t._v("onGroupRequest")]),t._v(" 加群请求/邀请时调用此方法(还没加，请求是否通过)")])]),t._v(" "),a("p",[t._v("建议直接查看"),a("a",{attrs:{href:"https://github.com/ProtobufBot/pbbot-spring-boot-starter/blob/master/src/main/kotlin/net/lz1998/pbbot/bot/BotPlugin.kt",target:"_blank",rel:"noopener noreferrer"}},[t._v("BotPlugin源码"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如果你不知道event里面有什么，可以看"),a("a",{attrs:{href:"http://github.com/protobufbot/onebot_idl",target:"_blank",rel:"noopener noreferrer"}},[t._v("onebot_idl"),a("OutboundLink")],1),t._v("，或者输入"),a("code",[t._v("event.get")]),t._v("，等待代码编辑器自动提示")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("消息事件")]),t._v(" "),a("p",[t._v("消息事件中的event包含两种消息格式：messageList(List)和rawMessage(String)")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("messageList(较准确): 消息链 例如 "),a("code",[t._v('{"type":"image","data":{"url":"xxx"}} -> {"type":"at","data":{"qq":"xxx"}} -> {"type":"text","data":{"text":"hello"}}')])]),t._v(" "),a("p",[t._v("每个节点分为type(String类型，text/image/face等)和data(Map<String, String>类型，表示具体内容)")]),t._v(" "),a("p",[t._v("如果需要获取 @的目标、图片地址、表情ID 等数据，推荐使用messageList")])]),t._v(" "),a("li",[a("p",[t._v("rawMessage(较不准确): 文本消息 例如 "),a("code",[t._v('@群成员 你好<image url="xxx"/><face id="123"/>')])]),t._v(" "),a("p",[t._v("messageList中的消息内容不经过任何转义，rawMessage中data中所有内容经过HTML encode")]),t._v(" "),a("p",[t._v("如果处理纯文字，或其他元素不重要时，推荐使用rawMessage，可以使用 "),a("code",[t._v("rawMessage.startsWith()")]),t._v("(Java)、"),a("code",[t._v("rawMessage.contains()")]),t._v("(Java)等方法处理字符串")])])])]),t._v(" "),a("h3",{attrs:{id:"bot可执行的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bot可执行的方法"}},[t._v("#")]),t._v(" Bot可执行的方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("sendPrivateMsg")]),t._v(" 发送私聊消息")]),t._v(" "),a("li",[a("code",[t._v("sendGroupMsg")]),t._v(" 发送群消息")]),t._v(" "),a("li",[a("code",[t._v("deleteMsg")]),t._v(" 撤回消息")]),t._v(" "),a("li",[a("code",[t._v("getMsg")]),t._v(" 获取消息")]),t._v(" "),a("li",[a("code",[t._v("setGroupKick")]),t._v(" 群组踢人")]),t._v(" "),a("li",[a("code",[t._v("setGroupBan")]),t._v(" 群组单人禁言")]),t._v(" "),a("li",[a("code",[t._v("setGroupWholeBan")]),t._v(" 群组全员禁言")]),t._v(" "),a("li",[a("code",[t._v("setGroupCard")]),t._v(" 设置群名片（群备注）")]),t._v(" "),a("li",[a("code",[t._v("setGroupLeave")]),t._v(" 退群")]),t._v(" "),a("li",[a("code",[t._v("setGroupSpecialTitle")]),t._v(" 设置群组专属头衔")]),t._v(" "),a("li",[a("code",[t._v("setFriendAddRequest")]),t._v(" 处理加好友请求 (flag参数：在onFriendRequest中"),a("code",[t._v("event.getFlag()")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("setGroupAddRequest")]),t._v(" 处理加群请求／邀请(flag参数：在onFriendRequest中"),a("code",[t._v("event.getFlag()")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("getLoginInfo")]),t._v(" 获取登录号信息")]),t._v(" "),a("li",[a("code",[t._v("getStrangerInfo")]),t._v(" 获取陌生人信息")]),t._v(" "),a("li",[a("code",[t._v("getFriendList")]),t._v(" 获取好友列表")]),t._v(" "),a("li",[a("code",[t._v("getGroupList")]),t._v(" 获取群列表")]),t._v(" "),a("li",[a("code",[t._v("getGroupInfo")]),t._v(" 获取群信息")]),t._v(" "),a("li",[a("code",[t._v("getGroupMemberInfo")]),t._v(" 获取群成员信息")]),t._v(" "),a("li",[a("code",[t._v("getGroupMemberList")]),t._v(" 获取群成员列表")])]),t._v(" "),a("p",[t._v("建议直接查看"),a("a",{attrs:{href:"https://github.com/ProtobufBot/pbbot-spring-boot-starter/blob/master/src/main/kotlin/net/lz1998/pbbot/bot/Bot.kt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bot源码"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"消息构造器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息构造器"}},[t._v("#")]),t._v(" 消息构造器")]),t._v(" "),a("p",[t._v("发送at，图片，表情等需要使用消息构造器")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Msg")]),t._v(" msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("face")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("at")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("atAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("share")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendGroupMsg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("builder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("record")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("flash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("face")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("at")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("atAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("share")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendToGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" groupId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("建议直接查看"),a("a",{attrs:{href:"https://github.com/ProtobufBot/pbbot-spring-boot-starter/blob/master/src/main/kotlin/net/lz1998/pbbot/utils/Msg.kt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Msg源码"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);