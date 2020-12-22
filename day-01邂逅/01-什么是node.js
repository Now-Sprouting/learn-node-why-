// $什么是 Node?
// 官方定义 :node.js 是基于 V8 JavaScript 引擎的 JavaScript 环境
// ****但不仅仅只有 V8引擎

// !1.JavaScript 最早是应用于浏览器的,做一些简单的 DOM 操作
// !2.浏览器之所以能运行 JavaScript 代码的原因是因为浏览器有浏览器内核的存在(浏览器内核作用是把页面渲染出来并且运行 js 代码)
// !3.不同浏览器有不同的内核
// Gecko 以前的 Netscape 和 Firefox 公司所使用的
// Trident IE4 - IE11浏览器所使用的  Edge已经转向了 Blink
// Webkit 苹果浏览器的开源内核  Safari浏览器所使用的内核
// Blink  Webkit 的一个分支, Google开发,目前应用于 Goole Chrome, Edge , Opera
// !4. JavaScript 的执行需要 JavaScript引擎(JavaScript引擎的作用是把高级语言-->转换成汇编语言-->转换成机器语言(二进制))
// !5. 不同浏览器的JavaScript引擎
// SpiderMonkey :第一款 Javascript 引擎,布兰登-艾奇发明的
// Chakra :微软开发,用于 IE浏览器
// JavaScript-Core : 苹果公司开发的,微信小程序中执行 JavaScript代码就是用的 JavaScript-Core
// V8: Chrome开发的
// !6. JavaScript内核 和 JavaScript引擎
// 实际上 内核主要是做 html 解析, 布局,渲染等操作,   引擎主要是做执行 JavaScript 代码的作用
// !7 V8 执行一段 JavaScript 代码的原理
// 参考浏览器原理(李兵)
