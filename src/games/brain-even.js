import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return { question: String(question), answer };
};

export default function () {
  runGame(description, getQuestionAndAnswer);
}
