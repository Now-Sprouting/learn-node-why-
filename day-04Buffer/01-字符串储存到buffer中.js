// !创建方式1
const message = 'Hello'
// const buffer = new Buffer(message)
// console.log(buffer);


// !创建方式2(推荐)
const buffer = Buffer.from(message)
console.log(buffer);
