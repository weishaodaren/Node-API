const fs = require('fs');

fs.readFile('./sample.txt', (err, data) => {
  if (err) console.error(error);
  console.log(data.toString(), `no sync`);
});

const data = fs.readFileSync('./sample.txt');
console.log(String(data));
