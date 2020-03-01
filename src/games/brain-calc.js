import game from '../index.js';
import { randomNumber, randomElement } from '../lib.js';

const operators = ['+', '-', '*'];

const rules = 'What is the result of the expression?';

const generateQuestionData = () => {
  const result = [];
  result.firstOperand = randomNumber();
  result.secondOperand = randomNumber();
  result.operator = randomElement(operators);
  return result;
};

const buildQuestion = (questionData) => {
  const { firstOperand, secondOperand, operator } = questionData;
  return `${firstOperand} ${operator} ${secondOperand}`;
};

const expectedAnswer = (questionData) => {
  const { firstOperand, secondOperand, operator } = questionData;
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
  game(rules, generateQuestionData, buildQuestion, expectedAnswer);
}
