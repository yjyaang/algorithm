function solution(my_str, n) {
    // 문자열이 남지 않을 때까지 -> 빈 배열에 6글자씩 자른 문자를 넣기
    let answer = [];
    while(my_str.length !== 0) {
        let head = my_str.slice(0,n)
        my_str = my_str.slice(n);
        answer.push(head);
    }
    return answer;
}