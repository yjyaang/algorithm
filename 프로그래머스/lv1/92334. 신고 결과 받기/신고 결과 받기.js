function solution(id_list, report, k) {
    // 배열 요소를 띄어쓰기 기준으로 나눈 배열로 바꾸기
    let newRep = [...new Set(report)];
    newRep = newRep.map(el => el.split(" "));
    //newRep을 순회하며 신고당한 횟수를 세는 객체 만들기
    let repObj = {};
    for(let el of newRep) {
        let reported = el[1];
        if(!(reported in repObj)) repObj[reported] = 0;
        repObj[reported] += 1;
    } // 다 돌았을 때 {frodo: 2, neo: 2, muzi: 1}
    // 키값만 배열로 만들고, obj에서 k 이상인 걸로만 필터
    let reportedId = Object.keys(repObj);
    reportedId = reportedId.filter(el => repObj[el] >= k);
    // 여기까지 하면 reportedId = ["frodo", "neo"]
    // result 배열 만들기
    let result = id_list.map(el => 0);
    // newRep 돌면서 1번째 인덱스가 reportedId에 있을 경우 result 해당 인덱스에 1 추가
    for(let el of newRep) {
        if(reportedId.indexOf(el[1]) !== -1) {
            const idx = id_list.indexOf(el[0]);
            result[idx] += 1;
        }
    }
    return result;
}