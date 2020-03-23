const randomNumber = (numberOfDigits = 2) => {
  const factor = 10 ** numberOfDigits;
  return Math.ceil(Math.random() * factor);
};

const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

export {
  randomNumber,
  randomIndex,
};
