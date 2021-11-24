'use strict';

const crypto = require('crypto');

for (let i = 0; i < 10; i++) {
  const randomNumber = crypto.randomInt(0, 10);

  process.stdout.write(`${randomNumber}  `);
}
