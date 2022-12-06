function solution(n) {
    // 합성수의 개수를 담을 변수
    var answer = 0;

    // 1부터 n까지 도는 반복문
    for(let i=1; i<=n; i++) {
        // 약수의 개수를 담을 변수(합성수를 판별하기 위해)
        let count = 0;
        // 1부터 i까지 i를 나눠 나머지 구하는 반복문
        for(let j=1; j<=i; j++) {
            if(i%j === 0) count++;
        }
        if(count >= 3) answer++;
    }
    return answer;
}