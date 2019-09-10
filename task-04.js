"use strict";
// const numOfSymbol = 40;
// function formatString(example) {
//   const arrayPerSymbol = example.split("");

//   if (arrayPerSymbol.length >= numOfSymbol) {
//     arrayPerSymbol.length = numOfSymbol;
//     arrayPerSymbol.push("...");
//   }
//   console.log(arrayPerSymbol.join(""));
// }

const formatString = example =>
  example.length > 40 ? example.slice(0, 40) + "..." : example;

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
console.log(formatString("Curabitur ligula sapien."));
console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
