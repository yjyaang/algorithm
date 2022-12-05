function solution(num_list, n) {
    let result = [];
    // 처음->0, n, 다음->n, 2n 그다음->2n, 3n
    for(let i=0; i<num_list.length/n; i++) {
        let newArr = num_list.slice(i*n, (i+1)*n);
        result.push(newArr);
    }
    return result;
}