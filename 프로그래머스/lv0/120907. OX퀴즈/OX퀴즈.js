function solution(quiz) {
    // 각 요소마다 split -> 연산자 앞뒤 요소 연산 -> 마지막 인덱스와 비교
    return quiz.map((el) => {
        let arr = el.split(' ');
        let expression;
        if(arr[1] === '+') {
            expression = Number(arr[0]) + Number(arr[2]);
        }
        if(arr[1] === '-') {
            expression = Number(arr[0]) - Number(arr[2]);
        }
        if(expression === Number(arr[4])) return "O";
        else {return "X"};
        }
    );
}