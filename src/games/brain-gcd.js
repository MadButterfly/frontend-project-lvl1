import game from '../index.js';
import { randomNumber } from '../lib.js';

const rules = 'Find the greatest common divisor of given numbers.';

const commonElements = (arr1, arr2) => {
  const result = [];
  arr1.forEach((element) => {
    const index = arr2.indexOf(element);
    if (index !== -1) {
      result.push(element);
      arr2.splice(index, 1);
    }
  });
  return result;
};

const findMinDivisor = (number) => {
  for (let i = 2; i < Math.ceil(number / 2); i += 1) {
    if (number % i === 0) {
      return i;
    }
  }
  return number;
};

const findDivisors = (number) => {
  const result = [];
  if (number === 0) {
    return result;
  }
  let remainder = number;
  while (remainder !== 1) {
    const minDivisor = findMinDivisor(remainder);
    result.push(minDivisor);
    remainder /= minDivisor;
  }
  result.push(remainder);
  return result;
};

const buildQuestion = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const firstNumberDivisors = findDivisors(firstNumber);
  const secondNumberDivisors = findDivisors(secondNumber);
  const commonDivisors = commonElements(firstNumberDivisors, secondNumberDivisors);
  let result = 1;
  commonDivisors.forEach((divisor) => { result *= divisor; });
  return result;
};

export default function () {
  game(rules, buildQuestion);
}
