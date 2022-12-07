function solution(numbers, direction) {
    var answer = [];
    // pop, shift의 리턴값이 '빠진 값'인 것을 활용하면 코드를 좀 더 간결하게 작성 가능
    // right일 경우 변수에 마지막인덱스 할당, pop->unshift
    if(direction === "right") {
        numbers.unshift(numbers.pop());
        return numbers;
    }
    // left일 경우 변수에 첫번째인덱스 할당, shift->push
        numbers.push(numbers.shift());
        return numbers;
}