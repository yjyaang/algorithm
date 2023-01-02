function solution(score) {
    let average = score.map(el => {return (el[0]+el[1])/2});
    let sorted = average.slice(0).sort((a,b) => b-a);
    return average.map(el => sorted.indexOf(el)+1);
}