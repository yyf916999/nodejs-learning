console.log(global.luckyNum);
global.luckyNum = "23";

console.log(global.luckyNum);
console.log(process.platform);
console.log(process.env);
process.on('exit', function(){

})
const {EventEmitter} = require('events');
const evnetEmitter = new EventEmitter();
evnetEmitter.on('lunch',() => {
    console.log('yum');
})

evnetEmitter.emit('lunch');
evnetEmitter.emit('lunch');