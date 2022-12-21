function solution(chicken) {
    // 1081을 10으로 나누면 몫 108 나머지 1
    // 108을 10으로 나누면 몫 10 나머지 8
    // 10을 10으로 나누면 몫 1 나머지 0
    let answer = 0;
    let coupon = 0;
    // 10마리 미만이 될 때까지 반복문
    while(chicken >= 10) {
        answer = answer + Math.floor(chicken/10);
        coupon = coupon + chicken % 10;
        chicken = Math.floor(chicken/10);
    }
    // 10마리 미만일 시 쿠폰에 치킨 수만큼 더해야 함(서비스 치킨에 대한 쿠폰이 나왔으나 10장 미만이라 어쩌지 못하는 상태)
    coupon = coupon + chicken;
    // 쿠폰이 10장 이상일 경우 쿠폰이 10장 미만이 되어 못 쓰게 될 때까지 서비스 치킨 주문 가능
    if(coupon >= 10) {
        while(coupon>=10) {
        answer = answer + Math.floor(coupon/10);
        coupon = coupon%10 + Math.floor(coupon/10);
            }
    }
    return answer;
}