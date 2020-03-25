import game from '../index.js';
import randomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (firstNumber, difference, length) => {
  const result = [];
  for (let i = 0; i < length - 1; i += 1) {
    result.push(firstNumber + i * difference);
  }
  return result;
};

const buildQuestion = () => {
  const firstElement = randomNumber();
  const difference = randomNumber();
  const progression = generateProgression(firstElement, difference, progressionLength);
  const hiddenElementIndex = randomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenElementIndex]);

  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

export default function () {
  game(description, buildQuestion);
}
