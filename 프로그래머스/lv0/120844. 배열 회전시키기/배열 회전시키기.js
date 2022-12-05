function solution(numbers, direction) {
    var answer = [];
    // right일 경우 변수에 마지막인덱스 할당, pop->unshift
    if(direction === "right") {
        numbers.unshift(numbers.pop());
        return numbers;
    }
    // left일 경우 변수에 첫번째인덱스 할당, shift->push
        numbers.push(numbers.shift());
        return numbers;
}