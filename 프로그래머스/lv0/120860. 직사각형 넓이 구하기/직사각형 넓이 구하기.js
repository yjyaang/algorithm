function solution(dots) {
    // 직사각형의 넓이: 가로x세로
    // 0번째 인덱스를 arr1에 넣어놓기
    // arr1 요소의 각각의 인덱스와 모두 일치하지 않는 요소만 arr2에 추가
    let arr1 = dots[0];
    let arr2;
    for(let i=1; i<dots.length; i++) {
        if(arr1[0] !== dots[i][0] && arr1[1] !== dots[i][1]) {
            arr2 = dots[i];
        }
    }
    // 0번째 인덱스끼리 뺀 절댓값 * 1번째 인덱스끼리 뺀 절댓값을 리턴
    return Math.abs(arr1[0]-arr2[0]) * Math.abs(arr1[1]-arr2[1]);
}