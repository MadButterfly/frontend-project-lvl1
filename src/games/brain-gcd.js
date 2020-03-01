import game from '../index.js';
import { randomNumber, findDivisors, commonElements } from '../lib.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateQuestionData = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  return [firstNumber, secondNumber];
};

const buildQuestion = (questionData) => `${questionData[0]} ${questionData[1]}`;

const expectedAnswer = (questionData) => {
  const firstNumberDivisors = findDivisors(questionData[0]);
  const secondNumberDivisors = findDivisors(questionData[1]);
  const commonDivisors = commonElements(firstNumberDivisors, secondNumberDivisors);
  let result = 1;
  commonDivisors.forEach((divisor) => { result *= divisor; });
  return result;
};

export default function () {
  game(rules, generateQuestionData, buildQuestion, expectedAnswer);
}
