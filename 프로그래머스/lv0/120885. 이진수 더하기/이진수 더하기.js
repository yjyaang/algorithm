function solution(bin1, bin2) {
    var answer = '';
    bin1 = parseInt(bin1, 2);
    bin2 = parseInt(bin2, 2);
    answer = bin1 + bin2;
    return answer.toString(2);
}