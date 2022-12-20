function solution(id_pw, db) {
    // 모두 같은 정보 있음 -> login
    // 같은 아이디 있는데 비밀번호 틀림 -> wrong pw
    // 맞는 정보가 없음 -> fail
    for(let data of db) {
        if(data[0] === id_pw[0] && data[1] === id_pw[1]) return "login";
        if(data[0] === id_pw[0] && data[1] !== id_pw[1]) return "wrong pw"
    }
    return "fail";
}