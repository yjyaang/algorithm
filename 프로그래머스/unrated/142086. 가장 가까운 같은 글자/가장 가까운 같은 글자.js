function solution(s) {
    // 객체에 저장 -> 키 값에 인덱스를 저장
    let answer = [];
    let obj = {};
    for(let i = 0; i < s.length; i++) {
        // 객체에 저장되어 있지 않을 때(처음 등장)
        // answer에는 -1 push, obj의 키값에 인덱스 넣기
        if(!(s[i] in obj)) {
            answer.push(-1);
            obj[s[i]] = i;
            // 객체에 저장되어 있을 때(이전에 같은 글자 등장)
            // answer에는 obj.s[i] push, obj에 해당 인덱스 넣기
        } else {
            answer.push(Math.abs(obj[s[i]] - i));
            obj[s[i]] = i;
        }
    }
    return answer;
}