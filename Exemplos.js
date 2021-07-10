/*
var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);
*/

/*
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
*/

/*
for (var number = 0; number <= 12; number = number + 2)
  console.log(number);
*/

/*
var landscape = function() {
    var result = "";
    var flat = function(size) {
      for (var count = 0; count < size; count++)
        result += "_";
    };
    var mountain = function(size) {
      result += "/";
      for (var count = 0; count < size; count++)
        result += "'";
      result += "\\";
    };
  
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
  };
  
  console.log(landscape());
*/

/*
  function printZeroPaddedWithLabel(number, label) {
    var numberString = String(number);
    while (numberString.length < 3)
      numberString = "0" + numberString;
    console.log(numberString + '' + label);
  }
  
  function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
  }
  
  printFarmInventory(7, 11, 3);
*/

/*
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);

console.log(object1 == object3);


object1.value = 15;
console.log(object2.value);

console.log(object3.value);
*/

function range(inicio, fim){
    var soma = 0
    for (var i = inicio; i <= fim; i++)
        soma = soma + i
    return soma
}

console.log(range(1,10))