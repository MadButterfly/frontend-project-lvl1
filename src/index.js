import readlineSync from 'readline-sync';

const greetings = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const correctAnswersInRow = 3;
const isEven = (num) => num % 2 === 0;
const gameRules = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
const gameWin = (userName) => console.log(`Congratulations, ${userName}!`);
const attemptFail = (answer, expectedAnswer, userName) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".'`);
  console.log(`Let's try again, ${userName}!`);
};
const attemptWin = () => console.log('Correct!');

const gameRound = (userName) => {
  const question = Math.round(Math.random() * 10);
  const isQuestionEven = isEven(question);
  const expectedAnswer = isQuestionEven ? 'yes' : 'no';
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  const result = answer === expectedAnswer;
  if (!result) {
    attemptFail(answer, expectedAnswer, userName);
  } else {
    attemptWin();
  }
  return result;
};

const evenGame = (userName) => {
  gameRules();
  let correctAnswers = 0;
  while (correctAnswers < correctAnswersInRow) {
    const roundResult = gameRound(userName);
    if (!roundResult) {
      return;
    }
    correctAnswers += 1;
  }
  gameWin(userName);
};

export { greetings, evenGame };
