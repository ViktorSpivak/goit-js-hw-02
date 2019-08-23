const numOfSymbol = 40;
function formatString(string) {
  const arrayPerSymbol = string.split("");

  if (arrayPerSymbol.length >= numOfSymbol) {
    arrayPerSymbol.length = numOfSymbol;
    arrayPerSymbol.push("...");
  }
  console.log(arrayPerSymbol.join(""));
}

formatString("Curabitur ligula sapien, tincidunt non.");
formatString("Vestibulum facilisis, purus nec pulvinar iaculis.");
formatString("Curabitur ligula sapien.");
formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.");
