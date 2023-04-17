function solution(n)
{
    let answer = 0;
    const str = n.toString();
    for(let el of str) {
        answer += Number(el);
    }
    return answer;
}