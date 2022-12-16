function solution(spell, dic) {
    //같은 글자수인 단어만 남기기 -> replace로 빈문자열로 대체 -> 빈 문자열 있으면 1, 없으면 2
    dic = dic.filter(word => word.length === spell.length);
    for(let i=0; i<dic.length; i++) {
        for(let j=0; j<spell.length; j++) {
            dic[i] = dic[i].replace(spell[j], '');
        }
    }
    if(dic.indexOf('') === -1) return 2;
    return 1;
}