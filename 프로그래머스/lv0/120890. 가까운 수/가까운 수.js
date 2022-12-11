function solution(array, n) {
    // 반복문 -> 배열 요소에서 n을 뺀 수의 절댓값을 담기
    // 단 절댓값이 기존 절댓값보다 작을 때 담기
    // 변수 두 개 설정
    // 여러 개일 경우 더 작은 수 => 배열 내에서 수를 오름차순 정렬
    let arr = array.sort((a,b) => a-b);
    let answer = 100;
    let num = 100;
    for(let el of arr) {
        let absolute = Math.abs(el-n);
        if(absolute < num) {
            answer = el;
            num = absolute;
        }
    }
    return answer;
}