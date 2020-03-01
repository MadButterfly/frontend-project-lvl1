import game from '../index.js';
import { randomNumber, isPrime } from '../lib.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateQuestionData = () => randomNumber();
const buildQuestion = (questionData) => questionData;
const expectedAnswer = (questionData) => (isPrime(questionData) ? 'yes' : 'no');

export default function () {
  game(rules, generateQuestionData, buildQuestion, expectedAnswer);
}
