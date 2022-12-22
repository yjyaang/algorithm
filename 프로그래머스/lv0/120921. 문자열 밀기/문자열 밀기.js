function solution(A, B) {
     // ohell -> lohel -> llohe -> elloh -> hello
    // 반복문 -> 카운트 받을 수 정하기
    // result의 최대 크기 -> 원래대로 돌아오기 전까지(문자열 length)
    var answer = 0;
    if(A === B) return answer;
    for(let i=1; i<A.length; i++) {
        let arrA = A.split('');
        arrA.unshift(arrA.pop());
        A = arrA.join('');
        answer = i;
        if(A === B) return answer;
    }
    return -1;
}