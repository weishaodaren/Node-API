const fs = require('fs');

let data = '';
const readerStream = fs.createReadStream('./sample.txt');
readerStream.setEncoding('utf8');

readerStream.on('data', (chunk) => {
  data += chunk;
});

readerStream.on('end', () => console.log(data));

readerStream.on('error', (err) => console.log(err.stack));

console.log(`Done`);

const zlib = require('zlib');

fs.createReadStream('./sample.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('./sample.txt.gz'));

console.log(`is Zip Done`);
