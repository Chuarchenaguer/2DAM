//2-1a
let arrayValues = ["Ana", 2, "Javi", 5, "Roberto", 7, "Vannessa", 10];

function names(x) {
    if (isNaN(x)) {
      return x;
    }
  }

let arrayNames = arrayValues.filter(names);
console.log(arrayNames);


//2-1b

function namesPares(x) {
    if (isNaN(x)) {
        return x;
    }
    if (x%2==0) {
        return x;
    }
  }

let arrayNamesPares = arrayValues.filter(namesPares);
console.log(arrayNamesPares);