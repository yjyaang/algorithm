function solution(s) {
    var answer = '';
    let obj = {};
    for(let el of s) {
        if(el in obj === false) {
            obj[el] = 0;
        }
        obj[el]++;
    }
    
    for(let x in obj) {
        if(obj[x] === 1) {
            answer += x;
        }
    }
    
    answer = answer.split('').sort().join('');
    return answer;
}