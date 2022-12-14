function solution(keyinput, board) {
    // 맵의 크기까지만 이동 가능 -> board의 요소의 수 넘으면 board의 요소 값 리턴
    // up, down -> 1번째 인덱스 조정 / left, right -> 0번째 인덱스 조정
    // 최대 이동 가능 거리-> left, right -> board[0]/2 // up, down -> board[1]/2
    var answer = [0, 0];
    for(let el of keyinput) {
        if(el === 'left') answer[0] -= 1;
        if(el === 'right') answer[0] += 1;
        if(el === 'up') answer[1] += 1;
        if(el === 'down') answer[1] -= 1;
        
        if(Math.abs(answer[0]) > board[0]/2) {
            if(answer[0]>0) answer[0] = Math.floor(board[0]/2);
            if(answer[0]<0) answer[0] = Math.ceil(-board[0]/2);
        }
        
        if(Math.abs(answer[1]) > board[1]/2) {
            if(answer[1]>0) answer[1] = Math.floor(board[1]/2);
            if(answer[1]<0) answer[1] = Math.ceil(-board[1]/2);
        }  
    }
    // answer 절댓값이 board/2보다 클 경우 -> -면 -, +면 +

    return answer;
}