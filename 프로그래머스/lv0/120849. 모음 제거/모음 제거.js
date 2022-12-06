function solution(my_string) {
    // var answer = '';
    // var vowel = 'aeiou';
    // // 반복문: my_string의 모든 인덱스 순회
    // // 해당 인덱스가 vowel에 없을 때 answer에 추가
    // for(let i=0; i<my_string.length; i++) {
    //     if(vowel.indexOf(my_string[i]) === -1) {
    //         answer += my_string[i];
    //     }
    // }
    // return answer;
    
    //arr.filter사용
    return my_string.split('').filter(el => 'aeiou'.indexOf(el) === -1).join('')
}