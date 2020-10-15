function multipleFactorial (x){
    return x === 0 ? 1 : x * multipleFactorial(x - 1);
}

let values = [3, 5, 8, 10];
console.log(values.map(multipleFactorial));