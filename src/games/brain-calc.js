import game from '../index.js';
import { randomNumber, randomIndex } from '../lib.js';

const operators = ['+', '-', '*'];

const randomElement = (arr) => arr[randomIndex(arr)];

const rules = 'What is the result of the expression?';

const buildQuestion = () => {
  const firstOperand = randomNumber();
  const secondOperand = randomNumber();
  const operator = randomElement(operators);

  console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);

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

export default function () {
  game(rules, buildQuestion);
}
