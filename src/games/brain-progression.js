import game from '../index.js';
import { randomNumber, randomIndex, generateProgression } from '../lib.js';

const rules = 'What number is missing in the progression?';

const progressionLength = 10;

const generateQuestionData = () => {
  const result = [];
  const firstElement = randomNumber();
  const difference = randomNumber();
  const progression = generateProgression(firstElement, difference, progressionLength);
  result.hiddenElementIndex = randomIndex(progression);
  result.progression = progression;
  return result;
};

const buildQuestion = (questionData) => {
  const { progression, hiddenElementIndex } = questionData;
  let q = '';
  for (let i = 0; i < progression.length; i += 1) {
    const elementToAppend = i === hiddenElementIndex ? '..' : progression[i];
    q += `${elementToAppend} `;
  }
  return q;
};

const expectedAnswer = (questionData) => {
  const { progression, hiddenElementIndex } = questionData;
  return progression[hiddenElementIndex];
};

export default function () {
  game(rules, generateQuestionData, buildQuestion, expectedAnswer);
}
