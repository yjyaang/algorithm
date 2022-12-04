function solution(rsp) {
    var answer = '';
    //문자열을 split으로 쪼개기 => map으로 숫자 바꾸기
    let arr = rsp.split('').map(el => {
        return ((el === '2') ? '0' : (el === '0') ? '5' : '2')
    })
    answer = arr.join('');
    return answer;
}