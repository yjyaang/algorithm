function solution(my_string) {
    var answer = [];
    var arr = my_string.split('').filter(el => Boolean(Number(el)) === true || el === '0')
    var newArr = arr.map(el => Number(el))
    return newArr.sort((a, b) => a-b);
}