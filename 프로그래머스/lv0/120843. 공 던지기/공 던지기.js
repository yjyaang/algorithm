function solution(numbers, k) {
    // 인덱스에 +2, 배열 길이를 넘어갈 경우 배열 길이만큼 빼기 === 배열 길이로 나누었을 때 나머지
    var answer = 0;
    for(let i=1; i<k; i++) {
        answer += 2;
    }
    return numbers[answer%numbers.length];
}