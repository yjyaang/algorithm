function solution(my_string) {
    // replace => 알파벳을 공백으로
    let newStr = '';
    for(let el of my_string) {
        if(Number(el) || Number(el) === 0) {
            newStr += el;
        } else {
            newStr += ' ';
        }
    }
    // 공백 기준으로 쪼개기 -> 숫자인 문자열만 남기기 -> 숫자로 바꾸기
    let arr = newStr.split(' ').filter(el => el !== '').map(el => Number(el));
    // 문자열에 자연수가 없는 경우 0 리턴
    if(arr.length === 0) return 0;
    return arr.reduce((acc, cur) => acc+cur)
}