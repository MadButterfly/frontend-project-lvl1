import runGame from '../index.js';
import getRandomNumber from '../lib.js';

const description = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (firstNumber, difference, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(firstNumber + i * difference);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const firstElement = getRandomNumber();
  const difference = getRandomNumber();
  const progression = generateProgression(firstElement, difference, progressionLength);
  const hiddenElementIndex = getRandomNumber(0, progression.length - 1);
  const answer = String(progression[hiddenElementIndex]);

  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return { question, answer };
};

export default function () {
  runGame(description, getQuestionAndAnswer);
}
