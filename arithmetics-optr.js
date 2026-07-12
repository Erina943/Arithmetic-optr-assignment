//[+, -, *, /, %]

let x = 12;
let y = 2;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

let milk = 30.2;
let bread = 10.5;
let apple = 10.5;
let total = milk + bread + apple;
let discount_rate = 0.1;
console.log("Total " + total);

let discount_amount = (total * discount_rate).toFixed(2);
console.log(discount_amount);

let net_total = (total - discount_amount).toFixed(2);
console.log("Net Total " + net_total);
