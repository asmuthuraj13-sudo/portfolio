import https from 'https';

const data = JSON.stringify({
  name: 'Test',
  email: 'test@example.com',
  subject: 'Hello',
  message: 'Test message',
});

const url = new URL('https://script.google.com/macros/s/AKfycby-vvRbBciyVmqAoJCVxjI1JBzV8lwo95sTxiSzWtvAoe7_N3p8z4TIKo5Dmo9ip7c/exec');

const options = {
  method: 'POST',
  hostname: url.hostname,
  path: url.pathname + url.search,
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data),
  },
};

const req = https.request(options, (res) => {
  console.log('statusCode', res.statusCode);
  let body = '';
  res.on('data', (chunk) => (body += chunk));
  res.on('end', () => {
    console.log('body:', body);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
