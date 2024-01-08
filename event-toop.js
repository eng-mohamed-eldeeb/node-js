import fs from 'fs';

fs.readFile('./stars.txt', (err, data) => {
  console.log('top level in a callback');

  setTimeout(() => {
    console.log('timeout callback 2');
  }, 200);
  setImmediate(() => {
    console.log('immediate callback');
  });
  setTimeout(() => {
    console.log('timeout callback 0');
  }, 0);
  process.nextTick(() => {
    console.log('next tick callback');
  });
});

console.log('top level code');
