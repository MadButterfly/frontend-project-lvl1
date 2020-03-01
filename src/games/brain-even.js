import game from '../index.js';
import { randomNumber, isEven } from '../lib.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateQuestionData = () => randomNumber();
const buildQuestion = (questionData) => questionData;
const expectedAnswer = (questionData) => (isEven(questionData) ? 'yes' : 'no');

export default function () {
  game(rules, generateQuestionData, buildQuestion, expectedAnswer);
}
