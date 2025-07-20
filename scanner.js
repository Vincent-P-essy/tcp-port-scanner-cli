#!/usr/bin/env node
const net = require('net');

const [host, range, timeoutArg] = process.argv.slice(2);
if (!host || !range) {
  console.error('Usage: node scanner.js <host> <start-end> [timeout_ms]');
  process.exit(1);
}

const [start, end] = range.split('-').map(Number);
const timeout = Number(timeoutArg) || 200;  // 200 ms par défaut

console.log(`Scanning ${host} ports ${start}→${end} (timeout ${timeout}ms)...`);

function scanPort(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let status = 'closed';

    socket.setTimeout(timeout);
    socket.on('connect', () => {
      status = 'open';
      socket.destroy();
    });
    socket.on('timeout', () => socket.destroy());
    socket.on('error', () => {});
    socket.on('close', () => resolve({ port, status }));

    socket.connect(port, host);
  });
}

(async () => {
  const results = [];
  for (let port = start; port <= end; port++) {
    // Optionnel : limiter la simultanéité pour plus de stabilité
    results.push(await scanPort(port));
  }
  const openPorts = results.filter(r => r.status === 'open').map(r => r.port);
  console.log('\nPorts ouverts :', openPorts.length ? openPorts.join(', ') : 'aucun');
  
  // Optionnel : export JSON
  // require('fs').writeFileSync('results.json', JSON.stringify(openPorts, null, 2));
})();


//Donnez votre avis!