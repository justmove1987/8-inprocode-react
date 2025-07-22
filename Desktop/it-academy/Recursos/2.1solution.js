/* Work your exercises here */

/* 1. Funciones Flecha */
/* Nivell 1 */
const addTwoNumbers = (a, b) => a + b;
const randomNumber = () => Math.floor(Math.random() * 101);
class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => console.log(`Hola, ${this.name}`);
}
/* Nivell 2 */
const printNumbers = (numbers) => {
  numbers.forEach((number) => console.log(number));
};
/* Nivell 3 */
const printDelayedMessage = () => {
  setTimeout(() => console.log("Missatge després de 3 segons"), 3000);
};
/* 2. Operador Ternari */

/* Nivell 1*/
const canDrive = (age) => (age >= 18 ? "Pots conduir" : "No pots conduir");

const guessTheBigger = (num1, num2) =>
  num1 > num2 ? "num1 és més gran" : "num2 és més gran";

/* Nivell 2 */

const guessTypeNumber = (num) =>
  num > 0 ? "Positiu" : num < 0 ? "Negatiu" : "Zero";

const findTheMaxNumber = (a, b, c) => (a > b ? (a > c ? a : c) : b > c ? b : c);

/* Nivell 3 */
const guessOddOrEvenNumber = (numeros) => {
  numeros.forEach((num) => console.log(num % 2 === 0 ? "Parell" : "Imparell"));
};

/* 3. Callbacks */
/* Nivell 1 */
const processNumber = (num, callback) => callback(num);

const calculator = (a, b, callback) => callback(a, b);

/* Nivell 2 */
const waitAndGreet = (nom, callback) => {
  setTimeout(() => callback(nom), 2000);
};
const processElements = (array, callback) => array.forEach(callback);

/* Nivell 3 */
const processString = (cadena, callback) => callback(cadena.toUpperCase());

/* 4. Rest & Spread operators */
/* Nivell 1*/
const arrayNumbers1 = [1, 2, 3];
const arrayNumbers2 = [4, 5, 6];
const arrayNumbers3 = [...arrayNumbers1, ...arrayNumbers2];

const addRestParameters = (...nums) => nums.reduce((acc, num) => acc + num, 0);

/* Nivell 2 */

const citizen = { name: "Dana", age: 25 };
const citizenPlusCity = { ...citizen, city: "Barcelona" };

const [first, second, ...rest] = [1, 2, 3, 4, 5];

/* Nivell 3 */
const fn = (a, b, c) => a + b + c;
const arrayNumbers = [1, 2, 3];
const resultSpreadArgumentsToFunction = fn(...arrayNumbers);

const object1 = { name: "Dana" };
const object2 = { age: 25 };
const mergeObject = { ...object1, ...object2 };

/* 5. Array transformations */
/* Nivell 1*/
const squareNumbersArray = [1, 2, 3, 4].map((num) => num ** 2);
const evenNumbersArray = [1, 2, 3, 4].filter((num) => num % 2 === 0);
const firstGreaterThan10 = [1, 10, 8, 11].find((num) => num > 10);
const totalCalculated = [13, 7, 8, 21].reduce((acc, num) => acc + num, 0);

/* Nivell 2 */
const calculateDoubleGreaterThan10NumbersAddition = (arrayNumbers) =>
  arrayNumbers
    .filter((num) => num >= 10)
    .map((num) => num * 2)
    .reduce((acc, num) => acc + num, 0);

/* Nivell 3 */
const everyGreaterThan10 = [11, 12, 13, 14].every((num) => num > 10);
const someGreaterThan10 = [11, 12, 13, 14].some((num) => num > 10);

/* 6. Array loops */
/* Nivell 1*/

const printNamesWithForEach = () =>
  ["Anna", "Bernat", "Clara"].forEach((name) => console.log(name));
const printNamesWithForOf = () => {
  for (const name of ["Anna", "Bernat", "Clara"]) {
    console.log(name);
  }
};
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

/* Nivell 2 */
const printKeyValuePairs = () => {
  for (const key in citizenPlusCity) {
    console.log(`${key}: ${citizenPlusCity[key]}`);
  }
};
const printUntilFive = () => {
  for (const number of [1, 2, 3, 4, 5, 6]) {
    if (number === 5) break;
    console.log(number);
  }
};
/* Nivell 3 */
const printNamesWithIndex = () => {
  for (const name of ["Anna", "Bernat", "Clara"]) {
    console.log(`${["Anna", "Bernat", "Clara"].indexOf(name)}: ${name}`);
  }
};
//   const noms = ["Anna", "Bernat", "Clara"];
//   for (const [index, nom] of noms.entries()) {
//     console.log(`${index}: ${nom}`);
//   }

/* 7. Promises & Async/Await */
/* Nivell 1*/
const myFirstPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Hola, món"), 2000);
});
const useMyFirstPromise = () =>
  myFirstPromise.then((value) => console.log(value));
const promiseWithReject = (input) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => (input === "Hola" ? resolve("Correcte") : reject("Erroni")),
      2000
    );
  });
const asyncAwaitFunction = async () => {
  const result = await myFirstPromise;
  console.log(result);
};
/* Nivell 2 */
const tryCatchFunction = async (input) => {
  try {
    const result = await promiseWithReject(input);
    console.log(result);
  } catch (error) {
    throws(error);
  }
};

/* Nivell 3 */
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Primera"), 2000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Segona"), 3000)
);
const allPromises = Promise.all([promise1, promise2]);

export {
  addTwoNumbers,
  randomNumber,
  Person,
  printNumbers,
  printDelayedMessage,
  canDrive,
  guessTheBigger,
  guessTypeNumber,
  findTheMaxNumber,
  guessOddOrEvenNumber,
  processNumber,
  calculator,
  waitAndGreet,
  processElements,
  processString,
  arrayNumbers1,
  arrayNumbers2,
  arrayNumbers3,
  addRestParameters,
  citizen,
  citizenPlusCity,
  rest,
  resultSpreadArgumentsToFunction,
  mergeObject,
  squareNumbersArray,
  evenNumbersArray,
  firstGreaterThan10,
  totalCalculated,
  calculateDoubleGreaterThan10NumbersAddition,
  everyGreaterThan10,
  someGreaterThan10,
  printNamesWithForEach,
  printNamesWithForOf,
  evenNumbers,
  printKeyValuePairs,
  printUntilFive,
  printNamesWithIndex,
  myFirstPromise,
  useMyFirstPromise,
  promiseWithReject,
  asyncAwaitFunction,
  tryCatchFunction,
  promise1,
  promise2,
  allPromises,
};
