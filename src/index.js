import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const correctAnswersInRow = 3;

const attemptFail = (answer, expectedAnswer, userName) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".'`);
  console.log(`Let's try again, ${userName}!`);
};
const attemptWin = () => console.log('Correct!');
const gameWin = (userName) => console.log(`Congratulations, ${userName}!`);

const gameRound = (userName, round) => {
  const correctAnswer = round();
  const answer = readlineSync.question('Your answer: ');
  if (answer !== correctAnswer) {
    attemptFail(answer, correctAnswer, userName);
    return false;
  }
  attemptWin();
  return true;
};

const game = (rules, round) => {
  const userName = greetings();
  rules();
  let correctAnswers = 0;
  while (correctAnswers < correctAnswersInRow) {
    const roundResult = gameRound(userName, round);
    if (!roundResult) {
      return;
    }
    correctAnswers += 1;
  }
  gameWin(userName);
};

const randomNumber = () => Math.ceil(Math.random() * 100);

export { game, randomNumber };
