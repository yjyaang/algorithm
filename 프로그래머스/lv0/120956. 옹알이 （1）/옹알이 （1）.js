function solution(babbling) {
    // 1개 포함 -> 4 / 2개 포함 -> 12 / 3개 포함 -> 24 / 4개 포함 -> 1 => 41가지..
    // babbling안의 단어 replace로 계속 대체 -> 4개 다 대체해서 빈 문자열 아닌 것 지우기 -> 개수
    let newArr = babbling.map((el) => {
        el = el.replace("aya", " ");
        el = el.replace("ye", " ");
        el = el.replace("woo", " ");
        el = el.replace("ma", " ");
        return el;
    }) // [" ", "e", "u", "a", "w oo"]
    return newArr.filter((el) => !(/[a-z]/g.test(el))).length;
}