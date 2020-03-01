import readlineSync from 'readline-sync';

const correctAnswersInRow = 3;

const greetings = (rules) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(rules);
  return userName;
};

const getAnswer = (q) => {
  console.log(`Question: ${q}`);
  return readlineSync.question('Your answer: ');
};

const attemptFail = (answer, expectedAnswer, userName) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${expectedAnswer}".'`);
  console.log(`Let's try again, ${userName}!`);
};

const attemptWin = () => console.log('Correct!');

const gameWin = (userName) => console.log(`Congratulations, ${userName}!`);

const gameRound = (userName, generateQuestionData, buildQuestion, expectedAnswer) => {
  const questionData = generateQuestionData();
  const question = buildQuestion(questionData);
  const correctAnswer = expectedAnswer(questionData);
  const answer = getAnswer(question);
  if (answer !== String(correctAnswer)) {
    attemptFail(answer, correctAnswer, userName);
    return false;
  }
  attemptWin();
  return true;
};

export default (rules, generateQuestionData, buildQuestion, expectedAnswer) => {
  const userName = greetings(rules);
  let correctAnswers = 0;
  while (correctAnswers < correctAnswersInRow) {
    const roundResult = gameRound(userName, generateQuestionData, buildQuestion, expectedAnswer);
    if (!roundResult) {
      return;
    }
    correctAnswers += 1;
  }
  gameWin(userName);
};
