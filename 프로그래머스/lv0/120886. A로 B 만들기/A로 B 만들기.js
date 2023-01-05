function solution(before, after) {
    //after 문자 분리 -> 하나씩 replace -> 길이 0이면 1, 0 아니면 0 리턴
    for(let el of after) {
        before = before.replace(el, '');
    }
    if(before.length === 0) return 1;
    return 0;
}