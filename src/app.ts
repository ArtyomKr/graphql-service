import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = process.env.PORT || 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
