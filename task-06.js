"use strict";
const numbers = [];
let total = 0;
let input;
do {
  input = prompt("Введите число");
  Number(input)
    ? numbers.push(Number(input))
    : input !== null
    ? alert("Вы  ввели не число")
    : null;
} while (input !== null);
if (numbers.length !== 0) {
  for (let element of numbers) {
    total = total + element;
  }
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  console.log("Вы ничего не ввели");
}
