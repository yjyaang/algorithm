function solution(letter) {
    var answer = '';
    var morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'}
    let arr = letter.split(' '); //['....', '.', '.-..', '.-..', '---']
    //map을 사용해 morse 객체의 키값으로 바꾸기
    let newArr = arr.map(el => morse[el]);
    answer = newArr.join('');
    return answer;
}