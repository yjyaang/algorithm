function solution(array) {
    var answer = 0;
    var newStr = array.map(el => el.toString()).join('');
    for(el of newStr) {
        if(el === '7') answer += 1;
    }
    return answer;
}