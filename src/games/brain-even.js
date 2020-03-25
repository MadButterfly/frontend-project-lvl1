import game from '../index.js';
import randomNumber from '../lib.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const buildQuestion = () => {
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default function () {
  game(description, buildQuestion);
}
