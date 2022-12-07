function solution(my_string) {
    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var arr = my_string.split('').filter(el => num.indexOf(el) !== -1);
    return arr.map(el => Number(el)).reduce((acc, cur) => acc+cur);
}