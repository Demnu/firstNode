//Fs Module
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync("./content/first.txt","utf-8");
const second = readFileSync("./content/second.txt","utf-8");
console.log('start');
writeFileSync('./content/resultSync.txt',`Here is the result: ${first}, ${second}`,
{flag: "a"}
);
console.log('done with this task');
console.log('starting the next one');