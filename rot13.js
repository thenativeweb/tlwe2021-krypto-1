'use strict';

const { encrypt } = require('./caesar');

const process = function ({ text }) {
  return encrypt({ plainText: text, key: 13 });
};

module.exports = { process };
