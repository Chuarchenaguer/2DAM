let users = ["Pedro", "Maria", "Jose", "Ovidi", "Oscar"];
let blackListed = ["Pedro", "Oscar"];

console.log(users.filter(function(names){
    return !blackListed.includes(names);
}));
