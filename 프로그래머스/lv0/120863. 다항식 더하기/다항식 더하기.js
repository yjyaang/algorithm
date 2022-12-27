function solution(polynomial) {
    var answer = '';
    // 경우의 수: 1. x만 존재 / 2. 상수만 존재 / 3. 모두 존재
    let arr = polynomial.split(' + ');
    let answerArr = [0, 0]
    // 1. nx / 2. x / 3. 상수
    for(let el of arr) {
        if(Number(el) || Number(el) === 0) {
            answerArr[1] += Number(el);
        }
        else {
            // x 분리 (더하는 숫자가 2자리 이상 되는 경우도 있어 0번째 인덱스로만 접근할 수 없음)
            el = el.slice(0, el.length-1); // '13' or ''
            if(el.length === 0) {answerArr[0] += 1}
            else {answerArr[0] += Number(el)};
        }
    }
    answer = answerArr[0] + 'x' + ' + ' + answerArr[1]; // "0x + 0"
    // x 0일 경우 / x 1일 경우 / 상수항 0일 경우
    // 상수항 0일 경우 상수항 지우기 -> x의 인덱스 파악 후 다음인덱스까지 slice
    let idx = answer.indexOf('x');
    if(answerArr[1] === 0) {answer = answer.slice(0, idx+1)};//"0x + 0" 또는 "0x"
    // x가 0 또는 1일 경우 그에 맞게 slice
    if(answerArr[0] === 0) {answer = answer.slice(5)}
    else if(answerArr[0] === 1) {answer = answer.slice(1)}
    
    return answer;
}