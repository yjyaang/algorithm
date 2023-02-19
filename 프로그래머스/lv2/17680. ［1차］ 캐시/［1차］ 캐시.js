function solution(cacheSize, cities) {
    // cacheSize가 0일 때 cities.length * 5 리턴
    if(cacheSize === 0) return cities.length * 5;
    // cacheSize에 맞게 담아둘 빈 배열 추가
    let cache = [];
    var answer = 0;
    // 대소문자 구분 x -> 바꿔놓기
    cities = cities.map(el => el.toLowerCase())
    // cities의 처음부터 끝까지 반복
    for (let i = 0; i < cities.length; i++) {
        // 1. cities[i]없을 경우
        if(cache.indexOf(cities[i]) === -1) {
            // (1) cache가 다 안 찼으면 cache에 push하고 answer에 5 추가
            if(cache.length < cacheSize) {
                cache.push(cities[i]);
            }
            // (2) cache가 다 찼으면 shift로 맨 앞 빼고 push 하고 answer에 5 추가
            else if(cache.length === cacheSize) {
                cache.shift();
                cache.push(cities[i]);
            }
            answer += 5;
        }
        // 3. cache에 cities[i] 있을 경우 그 요소 삭제하고 push한 후 answer에 1 추가
        else {
            let idx = cache.indexOf(cities[i]);
            cache.splice(idx, 1);
            cache.push(cities[i]);
            answer += 1;
        }
    }
    return answer;
}