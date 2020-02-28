import { game, randomNumber, randomIndex } from '../index.js';

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
