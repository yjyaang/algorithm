function solution(chicken) {
    // 1081을 10으로 나누면 몫 108 나머지 1
    // 108을 10으로 나누면 몫 10 나머지 8
    // 10을 10으로 나누면 몫 1 나머지 0
    let answer = 0;
    let coupon = 0;
    while(chicken >= 10) {
        answer = answer + Math.floor(chicken/10);
        coupon = coupon + chicken % 10;
        chicken = Math.floor(chicken/10);
    }
    coupon = coupon + chicken;
    if(coupon >= 10) {
        while(coupon>=10) {
        answer = answer + Math.floor(coupon/10);
        coupon = coupon%10 + Math.floor(coupon/10);
            }
    }
    return answer;
}