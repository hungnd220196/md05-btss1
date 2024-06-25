let arr = [1,2,3,4,5];
let total = 0;
const calculateSum = arr.reduce((item, value, total)=> item + value)
console.log(calculateSum);