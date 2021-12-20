/**
 * --- Day 1: Sonar Sweep - Part I ---
 *
 * This module contains a method that counts the number of increases
 * in the received sequence of numbers.
 *
 * @author Sara Hernández <sara.her.su@gmail.com>
 *
 * @param {string} input - A string representing a sequence of numbers.
 * @return {number} - Number of increases found in the list.
 */
const countDepthIncreases = (input = '') => {
  const sequence = getDigitSequence(input);

  let result = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] > sequence[i - 1]) {
      result += 1;
    }
  }

  return result;
};

/**
 * Converts input string into an array of numbers and returns said array.
 * If any of the characters in the string is not a number, an exception
 * will be thrown instead.
 * @param {string} input
 * @return Array of numeric values when input is valid.
 */
 const getDigitSequence = (input = '') => {
  const sequence = input.replace(/ /gi, '')
    .split('\n')
    .filter(n => n !== '')
    .map((digit) => {
      const int = parseInt(digit.trim());
      if (isNaN(int)) {
        throw new Error(`Invalid input! Make sure it doesn't contain non-numeric values.`);
      }
      return int;
    });

  return sequence;
};

module.exports = countDepthIncreases;
