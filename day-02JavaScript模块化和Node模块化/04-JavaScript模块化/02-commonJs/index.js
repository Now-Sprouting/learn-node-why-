// CommonJs 是在 ES2015之前出现的一种模块化的规范 
// 通过 exports   module.exports   require 的形式进行导入和导出

// !export 和 require(node 中 模块化的原理就是一个浅层的拷贝) require 返回的的对象和 exports是相同的引用 
// js文件就是一个模块
// 每一个模块默认都有一个 exports 对象并且初始值为 {} 一个空对象

// !module.exports
// exports的本质是 module.exports  在 node源码中实现就是 module.exports = exports
// **本质上 require得到的对象就是 module.exports的对象


// !require
// require是一个函数, require 返回值就是一个对象
// require(X)
// 情况一: X 是一个核心模块,直接返回核心模块,并且停止查找
// 情况二: X 是以 ./ 或 ../ 或 /开头的
    // 第一步:将 X 作为一个文件在对应目录下查找
        // 1.如果有后缀名,按照后缀名的格式查找文件
        // 2.如果没有后缀名,则按照如下顺序查找
            // 直接查找该文件  
            // 查找 X.js 文件
            // 查找 X.json 文件
            // 查找 X.node 文件
    // 第二步:没有找到对应文件,将 X 作为一个目录
        // 查找目录下面的 index.js 文件
        // 查找目录下面的 index.json文件
        // 查找目录下面的 index.node文件
    // 如果没找到，报错 not found
// 情况三: X不是一个核心模块也不是一个路径,就一层一层的查找 node_modules中是否有 X



// $CommonJS 的缺点
// CommonJs加载模块是同步的
// 同步意味着只能等到对应的模块加载完毕,当前模块中的内容才能被运行,这种情况在服务器不会有什么问题,因为服务器加载的 js 文件都是本地文件,加载速度很快

