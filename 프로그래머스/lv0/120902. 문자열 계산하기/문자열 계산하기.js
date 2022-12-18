function solution(my_string) {
    // 공백 기준으로 split -> ['3','+','5']
    // 반복문 초기값: split의 0번째 인덱스
    // 연산자 나오면 continue
    // 이전 인덱스가 +면 answer에 더하고 -면 answer에서 빼기
    let arr = my_string.split(' ');
    var answer = parseInt(arr[0]);
    for(let i=1; i<arr.length; i++) {
        if(arr[i] === '+' || arr[i] === '-') continue;
        if(arr[i-1] === '+') {
            answer += parseInt(arr[i]);
        }
        if(arr[i-1] === '-') {
            answer -= parseInt(arr[i]);
        }
    }
    return answer;
}