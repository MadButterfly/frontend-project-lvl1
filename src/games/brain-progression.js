import game from '../index.js';
import { randomNumber, randomIndex } from '../lib.js';

const rules = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (firstNumber, difference, length) => {
  const result = [firstNumber];
  let currentNumber = firstNumber;
  for (let i = 0; i < length - 1; i += 1) {
    currentNumber += difference;
    result.push(currentNumber);
  }
  return result;
};

const buildQuestion = () => {
  const firstElement = randomNumber();
  const difference = randomNumber();
  const progression = generateProgression(firstElement, difference, progressionLength);
  const hiddenElementIndex = randomIndex(progression);
  const answer = progression[hiddenElementIndex];

  progression[hiddenElementIndex] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  return answer;
};

export default function () {
  game(rules, buildQuestion);
}
