//bt6

let arr = [1, 2, 3, 4, 5];

const findLargestNumber = arr.reduce(
  (max, current) => (current > max ? current : max),
  arr[0]
);
console.log(findLargestNumber);

//bt 7

function checkIfElementExists(arr, value) {
  return arr.includes(value);
}
console.log(checkIfElementExists([1, 2, 3, 4, 5], 3)); // true

//bt 8
function calculateSumOfPrimes(arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const primes = arr.filter(isPrime);

  const sum = primes.reduce((acc, curr) => acc + curr, 0);

  return sum;
}

console.log(calculateSumOfPrimes([1, 2, 3, 4, 5])); // 10

//bt9
function calculateTotalSalary(employees) {
  const salaries = employees.map((employee) => employee.salary);
  const totalSalary = salaries.reduce((acc, curr) => acc + curr, 0);
  return totalSalary;
}

//bt10

function squareNumbers(numbers) {
  return numbers.map((num) => Math.pow(num, 2));
}
