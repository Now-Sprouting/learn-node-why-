const message = '你好啊'

// 对中文进行编码
const buffer = Buffer.from(message)
console.log(buffer);

// 对字节进行解码
console.log(buffer.toString());