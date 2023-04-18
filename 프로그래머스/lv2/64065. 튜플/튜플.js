function solution(s) {
    // 반복문 -> 길이 1부터 s.length까지
    // 배열 작업부터 먼저 진행
    let str = s.replaceAll("{", "[");
    str = str.replaceAll("}", "]");
    str = JSON.parse(str);
    var answer = [];
    for(let i = 1; i <= str.length; i++) {
        let cur = str.filter(el => el.length === i);
        if(i === 1) {
            answer.push(cur[0][0]);
        } else {
            // 예: [1, 2, 3]일 때, [2, 1] 이미 들어있는 상태 -> filter로 answer에 없는 원소 찾기
            let another = cur[0].filter(el => !(answer.includes(el)));
            answer.push(another[0]);
        }
    }
    return answer;
}