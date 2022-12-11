function solution(dots) {
    // 기울기 공식: y값의 증가량/x값의 증가량
    // 증가량 -> 절댓값 i-j
    // 예: i=0, j=2일 때 나머지 둘의 인덱스는 1, 3 -> 2-i 2-j
    // i=3, j=1일 때 나머지 둘의 인덱스는 0, 2 -> 3-i 3-j
    // 반복문에 해당하는 숫자들을 잇고, 나머지 숫자들을 이음
    let arr = [];
    let slope = 0;
    for(let i=0; i<dots.length; i++) {
        for(let j=i+1; j<dots.length; j++) {
            slope = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0]);
            if(arr.includes(slope)) {
                return 1;
            }
            arr.push(slope);
        }
    }
    return 0;
}