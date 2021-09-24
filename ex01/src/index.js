function myRecursion(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
console.log(myRecursion([1], 0));
module.exports = myRecursion;