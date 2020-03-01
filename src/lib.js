const randomNumber = (numberOfDigits = 2) => {
  const factor = 10 ** numberOfDigits;
  return Math.ceil(Math.random() * factor);
};
const randomIndex = (arr) => Math.floor(Math.random() * arr.length);
const randomElement = (arr) => arr[randomIndex(arr)];

const findMinDivisor = (number) => {
  for (let i = 2; i < Math.ceil(number / 2); i += 1) {
    if (number % i === 0) {
      return i;
    }
  }
  return number;
};

const findDivisors = (number) => {
  const result = [];
  if (number === 0) {
    return result;
  }
  let remainder = number;
  while (remainder !== 1) {
    const minDivisor = findMinDivisor(remainder);
    result.push(minDivisor);
    remainder /= minDivisor;
  }
  result.push(remainder);
  return result;
};

const commonElements = (arr1, arr2) => {
  const result = [];
  arr1.forEach((element) => {
    const index = arr2.indexOf(element);
    if (index !== -1) {
      result.push(element);
      arr2.splice(index, 1);
    }
  });
  return result;
};

const generateProgression = (firstNumber, difference, length) => {
  const result = [firstNumber];
  let currentNumber = firstNumber;
  for (let i = 0; i < length - 1; i += 1) {
    currentNumber += difference;
    result.push(currentNumber);
  }
  return result;
};

const isEven = (num) => num % 2 === 0;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const divisors = findDivisors(num);
  return divisors.length === 2
    && divisors.includes(1)
    && divisors.includes(num);
};

export {
  randomNumber,
  randomIndex,
  randomElement,
  isEven,
  isPrime,
  findDivisors,
  commonElements,
  generateProgression,
};
