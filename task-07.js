'use strict';
const numbers = [];
while (true) {
  let input = prompt("Введите число");
  if (!Number(input) && input !== null) {
    alert("Вы  ввели не число");
    continue;
  }
  if (input === null) {
    if (numbers.length === 0) {
      console.log("Вы ничего не ввели");
      break;
    }
    let total = 0;
    for (let number of numbers) {
      total = total + number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
    break;
  } else {
    numbers.push(Number(input));
  }
}
