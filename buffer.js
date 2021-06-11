const Buf = Buffer.from('runoob', 'ascii');

console.log(Buf.toString('hex'));
console.log(Buf.toString('base64'));

const buf1 = Buffer.alloc(256).write('weishaodaren');
console.log(buf1);

const buf = JSON.stringify(Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]));

const copy = JSON.parse(buf, (key, value) =>
  value && value.type === 'Buffer' ? Buffer.from(value.data) : value
);

console.log(buf, copy);
