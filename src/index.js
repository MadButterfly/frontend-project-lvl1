import readlineSync from 'readline-sync';

const correctAnswersInRow = 3;

const gameRound = (userName, buildQuestion) => {
  const correctAnswer = buildQuestion();
  const answer = readlineSync.question('Your answer: ');
  if (answer !== String(correctAnswer)) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export default (rules, buildQuestion) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(rules);
  let correctAnswers = 0;
  while (correctAnswers < correctAnswersInRow) {
    const roundResult = gameRound(userName, buildQuestion);
    if (!roundResult) {
      return;
    }
    correctAnswers += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
