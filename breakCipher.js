'use strict';

const { decrypt } = require('./caesar');

// const cipherText = 'IBMMP XFMU';
const cipherText = 'T';

for (let key = 0; key < 26; key++) {
  console.log(decrypt({ cipherText, key }));
}
