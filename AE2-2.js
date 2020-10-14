function average (a, b){
    return a+b;
}

let dataArray = [2, 8, 16, 14, 6];
console.log(dataArray.reduce(average, 0)/dataArray.length);
