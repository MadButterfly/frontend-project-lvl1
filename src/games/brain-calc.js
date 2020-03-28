import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const operators = ['+', '-', '*'];

const randomElement = (arr) => {
  const index = getRandomNumber(0, arr.length - 1);
  return arr[index];
};

const description = 'What is the result of the expression?';

const caclulate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;

    case '-':
      return firstOperand - secondOperand;

    case '*':
      return firstOperand * secondOperand;

    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const firstOperand = getRandomNumber();
  const secondOperand = getRandomNumber();
  const operator = randomElement(operators);

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(caclulate(firstOperand, secondOperand, operator));
  return { question, answer };
};

export default function () {
  runGame(description, getQuestionAndAnswer);
}
