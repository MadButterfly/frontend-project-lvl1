import game from '../index.js';
import randomNumber from '../lib.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const buildQuestion = () => {
  const question = randomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default function () {
  game(description, buildQuestion);
}
