import game from '../index.js';
import randomNumber from '../lib.js';

const operators = ['+', '-', '*'];

const randomElement = (arr) => {
  const index = randomNumber(0, arr.length - 1);
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

const buildQuestion = () => {
  const firstOperand = randomNumber();
  const secondOperand = randomNumber();
  const operator = randomElement(operators);

  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = String(caclulate(firstOperand, secondOperand, operator));
  console.log('question', question, 'answer', answer);
  return { question, answer };
};

export default function () {
  game(description, buildQuestion);
}
