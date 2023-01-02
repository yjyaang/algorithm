function solution(a, b) {
    // 기약분수 -> a, b모두 나머지 0 아닐 때까지 반복문으로 나누기
    let min = Math.min(a, b)
    let maxNum = 1;
    for(let i=0; i<= min; i++) {
        if(a%i === 0 && b%i === 0) maxNum = i;
    }
    a = a/maxNum;
    b = b/maxNum;
    // 분모의 소인수가 2와 5만 존재하면 유한소수, 아니면 무한소수
    // 10 -> 2*5 , 20 -> 2*2*5, 4-> 2*2 , 25 -> 5*5
    // 1, 1, 1
    while(b%2 === 0) {
        b = b/2;
    }
    while(b%5 === 0) {
        b = b/5;
    }
    if(b === 1) return 1;
    else {return 2};
}