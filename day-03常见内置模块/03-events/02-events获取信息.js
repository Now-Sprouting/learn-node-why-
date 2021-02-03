const EventEmitter = require('events')
const emitter = new EventEmitter()


emitter.on('click', (arg) => {
    console.log(arg);
})
const listener = (arg) => {
    console.log(arg);
}
emitter.on('tap', listener)

// !获取注册的事件
console.log(emitter.eventNames());
console.log(emitter.listenerCount('click'));
console.log(emitter.listeners('tap'));
