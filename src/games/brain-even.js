import { game, randomNumber } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionData = () => randomNumber();
const buildQuestion = (questionData) => questionData;
const expectedAnswer = (questionData) => (isEven(questionData) ? 'yes' : 'no');

export default function () {
  game(rules, generateQuestionData, buildQuestion, expectedAnswer);
}
