import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const description = 'Find the greatest common divisor of given numbers.';

const findMaxDivisor = (firstOperand, secondOperand) => {
  if (firstOperand === 0 && secondOperand === 0) {
    return null;
  }
  let first = firstOperand;
  let second = secondOperand;
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }
  return first + second;
};


const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(findMaxDivisor(firstNumber, secondNumber));
  return { question, answer };
};

export default function () {
  runGame(description, getQuestionAndAnswer);
}
