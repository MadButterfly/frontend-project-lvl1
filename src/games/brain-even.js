import game from '../index.js';
import { randomNumber } from '../lib.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const buildQuestion = () => {
  const question = randomNumber();
  console.log(`Question: ${question}`);
  return isEven(question) ? 'yes' : 'no';
};

export default function () {
  game(rules, buildQuestion);
}
