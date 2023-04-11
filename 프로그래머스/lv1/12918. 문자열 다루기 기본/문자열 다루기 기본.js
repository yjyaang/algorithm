function solution(s) {
    let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = true;
    if(s.length !== 4 && s.length !== 6) result = false;
    for(let el of s) {
        if(!number.includes(Number(el)))result = false;
    }
    return result;
}