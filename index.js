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

const{readFileSync} = require("fs");
const txt = readFileSync('./hello.txt');
console.log(txt);
console.log("Do this");

// readFile('./hello.txt','utf8', (err, txt) => {
//     console.log(txt);
// });

console.log("2nd");

const {readFile} = require('fs').promises;
async function hello() {
const file = await readFile('./hello.txt', 'utf8');
console.log(file);
}

const myModule = require('./my-module');
console.log(myModule)

const express = require('express')

const app = express();

app.get('/', async (request, response) => {
        // if (err){
        //     response.status(500).send('sorry, out of order')
        // }
        response.send( await readFile('./hello.txt','utf8'));

});

app.listen(process.env.PORT || 3000, () => console.log("app is available on local host port http://localhost:3000"))