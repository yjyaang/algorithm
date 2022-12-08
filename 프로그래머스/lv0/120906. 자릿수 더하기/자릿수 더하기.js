function solution(n) {
    var arr = n.toString().split('').map(el => Number(el))
    return arr.reduce((acc, cur) => acc+cur);
}