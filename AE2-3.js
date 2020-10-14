function findMininum(a, b){
    return Math.min(a, b);
}

let values = [7, 5, 6, 8, 15, 3, 21];
console.log(values.reduce(findMininum, Infinity));