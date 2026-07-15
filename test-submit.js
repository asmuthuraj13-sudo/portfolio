import http from 'node:http';

const data = JSON.stringify({
  name: 'Local Test',
  email: 'local@test.com',
  subject: 'Hello',
  message: 'Testing local save',
});

const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/contact',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = http.request(options, (res) => {
  console.log('status', res.statusCode);
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => console.log('body', body));
});

req.on('error', (err) => console.error('request error', err));
req.write(data);
req.end();
