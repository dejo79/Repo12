function myCounter(n) {
    if (n < 1) {
        return []
    } else {
        var countArray = myCounter(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter;