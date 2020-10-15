function findGreaterThan(arr){
    return 5 < arr;
}

let values = [7, 8, 52, 12];

console.log(values.every(findGreaterThan));