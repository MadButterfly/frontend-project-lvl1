import { game, randomNumber } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const round = () => {
  const q = randomNumber();
  console.log(`Question: ${q}`);
  return isEven(q) ? 'yes' : 'no';
};

export default function () {
  game(rules, round);
}
