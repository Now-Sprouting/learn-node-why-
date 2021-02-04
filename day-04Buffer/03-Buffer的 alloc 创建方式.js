// 通过 alloc 的形式创建 buffer, 提前为 buffer 分配内存
const buffer = Buffer.alloc(8)
console.log(buffer);

buffer[0] = 88
buffer[1] = 0x88
console.log(buffer);