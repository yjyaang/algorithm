function solution(numlist, n) {
    // 절댓값 계산 -> Math.abs(numlist[i]-n)
    // 객체에 담기 -> {1: 3, 2: 2, 3: 1, 4: 0, 5: 1, 6: 2}
    // sort 사용
    // 같은 수일 때 함수 추가
    let obj = {};
    for(let el of numlist) {
        obj[el] = Math.abs(el-n);
    }
    let arr = Object.entries(obj);
    arr.sort(function (a, b) {
        if (a[1] > b[1]) {return 1;}
        if (a[1] < b[1]) {return -1;}
        if (a[1] === b[1]) {
            if(Number(a[0])>=Number(b[0])) {return -1}
            if(Number(a[0]) < Number(b[0])) {return 1}
        }
        // a must be equal to b
        return 0;
    });
    return arr.map(el => Number(el[0]));
}