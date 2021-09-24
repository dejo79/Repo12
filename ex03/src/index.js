function rangeOfNumbers(startN, endN) {
    if (endN - startN === 0) {
        return [startN];
    } else {
          var numbers = rangeOfNumbers(startN, endN - 1);
          numbers.push(endN);
          return numbers;
        }
}

console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
module.exports = rangeOfNumbers;