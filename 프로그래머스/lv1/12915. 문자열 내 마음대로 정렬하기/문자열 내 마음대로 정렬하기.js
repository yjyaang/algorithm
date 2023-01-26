function solution(strings, n) {
    // n번째 인덱스로 strings를 바꾸기
    // sort 해서 정렬하기 -> 다시 원래대로 바꾸기
    strings.sort((a,b) => {
        if(a[n] < b[n]) return -1;
        if(a[n] > b[n]) return 1;
        // 두 문자가 같은 경우에는 사전순으로 앞선 문자열이 앞쪽에 위치
        if(a[n] === b[n]) {
            // 인덱스에서 차이 날 때까지 인덱스에 1 더해주기
            let idx = 0;
            while(a[idx] === b[idx]) {
                idx++;
            }
            if(a[idx] < b[idx]) return -1;
            if(a[idx] > b[idx]) return 1;
        }
        
    })
    return strings;
}