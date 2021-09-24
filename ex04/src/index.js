function sumFibonacci(num) {
    var fibonacci = [1, 1,];
    for (var i = 1; i <= num; i++) {
        var answer = fibonacci[i] + fibonacci[i - 1];
        fibonacci.push(answer);
    }
    return fibonacci;
}
console.log(sumFibonacci(20));
module.exports = sumFibonacci;