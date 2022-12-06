function solution(n) {
    //factorial(n) = n * factorial(n-1)
    const factorial = (num) => (num===0) ? 1 : num*factorial(num-1)
    let i=0;
    while(factorial(i) <= n) {
        i++
    }
    return i-1;
}