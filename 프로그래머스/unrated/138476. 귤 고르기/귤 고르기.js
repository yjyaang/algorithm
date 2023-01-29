function solution(k, tangerine) {
    // tangerine을 객체로 바꿨다가 다시 Object.entries로 배열 형태로 바꾸기
    let obj = {};
    for(let el of tangerine) {
        if(!(el in obj)) {
            obj[el] = 0;
        }
        obj[el] += 1;
    }
    let newTan = Object.entries(obj);
    // 귤 숫자대로 정렬(내림차순)
    newTan.sort((a,b) => b[1] - a[1]);
        // while문을 사용해 k가 0이 되거나 더 작아질 때까지 k에서 각 사이즈의 귤 크기 뺌
        // 다시 생각해보니 위의 코드와 합칠 수 있음
        let i = 0;
        while(k > 0) {
            k -= newTan[i][1];
            i++;
        }
        return i;
}