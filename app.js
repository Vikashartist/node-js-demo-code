// const maha = require("./second.js");

const fs = require('fs');
const data = new Uint8Array(Buffer.from('Hello Node.js'));
writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});