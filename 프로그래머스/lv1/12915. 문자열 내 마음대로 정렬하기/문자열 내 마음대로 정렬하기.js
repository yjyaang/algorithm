function solution(strings, n) {
    // sort 사용 -> sort 안의 조건을 짜주기
    strings.sort((a,b) => {
        // 리턴이 0보다 작을 경우 a가 앞 => 오름차순 정렬
        if(a[n] < b[n]) return -1;
        // 리턴이 0보다 클 경우 b가 앞
        if(a[n] > b[n]) return 1;
        // 두 문자가 같은 경우에는 사전순으로 앞선 문자열이 앞쪽에 위치
        if(a[n] === b[n]) {
            // 인덱스에서 차이 날 때까지 인덱스에 1 더해주기
            let idx = 0;
            while(a[idx] === b[idx]) {
                idx++;
            }
            // 차이날 경우 위에서 사용했던 오름차순 정렬 방법을 다시 활용
            if(a[idx] < b[idx]) return -1;
            if(a[idx] > b[idx]) return 1;
        }
        
    })
    return strings;
}