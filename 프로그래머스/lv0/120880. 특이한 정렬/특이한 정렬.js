function solution(numlist, n) {
    // 같은 수일 때 함수 추가
    // 객체에 담기 -> {1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2}
    let obj = {};
    for(let el of numlist) {
        obj[el] = Math.abs(el-n);
    }
    let arr = Object.entries(obj); // [['1', 3], ['2', 2], ['3', 1], ...]
    // sort 사용 -> arr[1]을 기준으로 정렬
    // 함수가 0보다 큰 수를 리턴하면 b를 a 앞으로 정렬, 0보다 작은 수를 리턴하면 a를 b 앞으로 정렬
    // 0이면 따로 정렬 진행하지 않음
    arr.sort(function (a, b) {
        if (a[1] > b[1]) {return 1;}
        if (a[1] < b[1]) {return -1;}
        if (a[1] === b[1]) {
            if(Number(a[0])>=Number(b[0])) {return -1}
            if(Number(a[0]) < Number(b[0])) {return 1}
        }
        return 0;
    });
    // 배열의 요소를 arr[0]으로 바꾼 것을 리턴
    return arr.map(el => Number(el[0]));
}