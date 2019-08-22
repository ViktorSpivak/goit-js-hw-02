const fruits = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
const dates = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
function logItems(array) {
  for (const element of array) {
    console.log(`${array.indexOf(element) + 1} - ${element}`);
  }
}
logItems(fruits);
logItems(dates);
