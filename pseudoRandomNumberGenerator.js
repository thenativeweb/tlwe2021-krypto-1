'use strict';

let seed = Date.now();

const getRandomNumber = function () {
  seed = seed * 7 % 27759;

  const randomNumber = seed % 10;

  return { randomNumber };
};

module.exports = { getRandomNumber };
