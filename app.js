'use strict';

// const { encrypt, decrypt } = require('./caesar');
//
// const plainText = 'HALLO WELT!';
// const cipherText = encrypt({ plainText, key: 1 });
//
// console.log(cipherText);
//
// const decipheredText = decrypt({ cipherText, key: 1 });
//
// console.log(decipheredText);


const { getRandomNumber } = require('./pseudoRandomNumberGenerator');

for (let i = 0; i < 100; i++) {
  const { randomNumber } = getRandomNumber();

  process.stdout.write(`${randomNumber}  `);
}
