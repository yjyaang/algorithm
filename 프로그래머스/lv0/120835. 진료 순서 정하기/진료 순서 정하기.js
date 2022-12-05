function solution(emergency) {
    // 숫자 크기 순서대로 정렬 ([76, 24, 3])
    var newArr = emergency.slice();
    newArr.sort((a,b) => b-a)
    // 빈 배열에 push => newArr에서의 index+1
    // 다른 사람의 풀이 -> arr.map사용 (filter, map, reduce를 잘 사용해보자!)
    return emergency.map((el) => newArr.indexOf(el) + 1)
}