console.log(1);
// console.clear()/* 清空控制台 */
console.log(2);

function foo(){
    bar()
}
function bar(){
    console.trace(); /* 打印函数调用栈 */
}
foo()





