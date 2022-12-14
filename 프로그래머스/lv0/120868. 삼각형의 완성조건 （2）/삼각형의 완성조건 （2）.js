function solution(sides) {
    // 될 수 있는 경우의 수
    // 3, 6 -> 1, 2, 3, 4, 5, 6, 7, 8 -> 두 수의 차이인 3보다 큰 수만 가능 -> 8-3
    // 11, 7 -> 1~17 -> 두 수의 차이인 4보다 큰 수만 가능 -> 17-4
    // 1. sides의 모든 요소의 합보다 작은 수
    // 2. 그 중에서 두 수의 차이보다 큰 수
    return sides[0]+sides[1] - 1 - Math.abs(sides[0] - sides[1]);
}