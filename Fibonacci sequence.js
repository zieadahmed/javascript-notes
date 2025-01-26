// Fibonacci sequence
// The Fibonacci sequence is a sequence in which each number
// is the sum of the two preceding ones.
// Numbers that are part of the Fibonacci sequence are known as Fibonacci numbers,
// commonly denoted Fn
// (index)  0  1  2  3  4  5  6  7  8
//          1, 1, 2, 3, 5, 8, 13, 21, 34, ...

const Fibonacci = (n) => {
    if (n < 2) {
        return 1;
    } else {
        return Fibonacci(n - 2) + Fibonacci(n - 1);
    }
};
