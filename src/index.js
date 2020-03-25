import readlineSync from 'readline-sync';

const correctAnswersInRow = 3;

export default (description, buildQuestion) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(description);
  for (let i = 0; i < correctAnswersInRow; i += 1) {
    const { question, answer: correctAnswer } = buildQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
