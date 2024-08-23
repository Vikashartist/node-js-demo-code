const fsw = require('node:fs');

const content = ' This is simply a .txt file created using node js file system  !';

fsw.writeFile('/Users/HP-5/Desktop/node js practice/test.txt', content, err => {
    if (err) {
        console.error(err);
    } else {
        // file written successfully
    }
});
console.log(" file created sucessfully ! ");


// this is the code of reading the file using node js file system
const fsr = require('node:fs');
fsr.readFile('/Users/HP-5/Desktop/node js practice/test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
console.log(" file read sucessfully  ! ");
