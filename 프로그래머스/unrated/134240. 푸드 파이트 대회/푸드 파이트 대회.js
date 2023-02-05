function solution(food) {
    // [1, 3, 4, 6] -> 물 1개, 1번 음식 3개, 2번 음식 4개, 3번 음식 6개
    // left, mid -> [0], right
    let left = [];
    let mid = [0];
    let right = [];
    for(let i = 1; i < food.length; i++) {
        let cur = food[i];
        // 홀수일 때 1 빼기
        if(food[i] % 2 === 1) {
            cur -= 1;
        }
        // 2 나눠서 그 수만큼 left에는 push, right에는 unshift
        cur = cur/2;
        for(let j=1; j <= cur; j++) {
            left.push(i);
            right.unshift(i);
        }
    }
    // concat 후 join('')
    return left.concat(mid).concat(right).join('');
}