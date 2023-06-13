const {readFileSync, writeFileSync} = require('fs') // fs= file system module
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    { flag: 'a' } // this flag: a means appending in the file
)
console.log('done with the task');
console.log('starting the next one');