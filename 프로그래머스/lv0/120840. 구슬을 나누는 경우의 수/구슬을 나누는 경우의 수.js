function solution(balls, share) {
    // 힌트 활용 => function을 만들어서 써보기
    function factorial(num) {
        let result = BigInt(1);
        for(let i=1; i<=num; i++) {
            result = result * BigInt(i);
        }
        return result;
    }
    return factorial(balls)/(factorial(balls-share) * factorial(share));
}