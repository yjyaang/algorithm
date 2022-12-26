function solution(n) {
    //11-17, 12-19, 13-20, 14-22, 15-25
    // n이 3의 배수일 때 -> 바꾼 숫자가 3의 배수일 때
    var answer = 1;
    for(let i=2; i<=n; i++) {
        if(answer%3 !== 0) {
            answer += 1;
        }
        else {
            answer += 2;
        };
        while(answer%3 === 0 || answer.toString().includes('3')) {
            answer += 1;
        }
    }
    return answer;
}