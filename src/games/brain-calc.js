import { game, randomNumber } from '../index.js';

const rules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const randomOperator = (opeartors) => {
  const index = Math.floor(Math.random() * opeartors.length);
  return operators[index];
};

const round = () => {
  const firstOperand = randomNumber();
  const secondOperand = randomNumber();
  const operator = randomOperator(operators);
  console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
  switch (operator) {
    case '+':
      return String(firstOperand + secondOperand);

    case '-':
      return String(firstOperand - secondOperand);

    case '*':
      return String(firstOperand * secondOperand);

    default:
      return null;
  }
};

export default function () {
  game(rules, round);
}
