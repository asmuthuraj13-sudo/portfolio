import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'messages.json');

if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, '[]', 'utf8');
}

function readMessages() {
  try {
    const raw = fs.readFileSync(dataFile, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    return [];
  }
}

function writeMessages(messages) {
  fs.writeFileSync(dataFile, JSON.stringify(messages, null, 2), 'utf8');
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(payload));
}

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/api/contact') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const { name, email, subject, message } = parsed;

        if (!name || !email || !subject || !message) {
          sendJson(res, 400, { success: false, message: 'All fields are required.' });
          return;
        }

        const messages = readMessages();
        const newMessage = {
          id: Date.now(),
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          createdAt: new Date().toISOString(),
        };

        messages.push(newMessage);
        writeMessages(messages);

        sendJson(res, 200, {
          success: true,
          message: 'Message saved successfully.',
          data: newMessage,
        });
      } catch (error) {
        sendJson(res, 400, { success: false, message: 'Invalid request body.' });
      }
    });

    return;
  }

  sendJson(res, 404, { success: false, message: 'Not found.' });
});

server.listen(5000, () => {
  console.log('Contact backend running on http://localhost:5000');
});
