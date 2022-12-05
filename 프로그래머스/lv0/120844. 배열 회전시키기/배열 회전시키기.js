function solution(numbers, direction) {
    var answer = [];
    // right일 경우 변수에 마지막인덱스 할당, pop->unshift
    if(direction === "right") {
        let num = numbers[numbers.length-1];
        numbers.pop();
        numbers.unshift(num);
        return numbers;
    }
    // left일 경우 변수에 첫번째인덱스 할당, shift->push
    if(direction === "left") {
        let num = numbers[0];
        numbers.shift();
        numbers.push(num);
        return numbers;
    }
}