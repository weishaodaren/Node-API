const http = require('http');
const url = require('url');

// const url = new URL();

const start = () => {
  const onRequest = (req, res) => {
    const pathname = url.parse(req.url).pathname;
    res.writeHead(200, { 'Content-type': 'text/plain' });
    res.write(`Node`);
    res.end();
  };

  http.createServer(onRequest).listen(8888);
  console.log(`Server has started`);
};
start();
