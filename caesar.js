'use strict';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const encrypt = function ({ plainText, key }) {
  let cipherText = '';

  for (let i = 0; i < plainText.length; i++) {
    const char = plainText[i];
    const index = alphabet.indexOf(char);

    if (index === -1) {
      cipherText += char;
      continue;
    }

    let shiftedIndex = (index + key) % alphabet.length;

    if (shiftedIndex < 0) {
      shiftedIndex += alphabet.length;
    }

    const cipherChar = alphabet[shiftedIndex];

    cipherText += cipherChar;
  }

  return cipherText;
};

const decrypt = function ({ cipherText, key }) {
  return encrypt({ plainText: cipherText, key: key * -1 });
};

module.exports = { encrypt, decrypt };
