function solution(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let result = min;
    for(let i = min + 1; i <= max; i++) {
        result += i;
    }
    return result;
}