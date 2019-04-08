'use strict';

const fs = require('fs');

fs.watch('target.txt', () => {
  console.log('file changed!');
});

console.log('Now watching target.txt for changed...');
