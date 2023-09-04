// 문자열 뒤집기
// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// my_string	return
// "jaron"	"noraj"
// "bread"	"daerb"

function solution(my_string) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
        answer += my_string[my_string.length-i-1];
    }
    return answer;
}

console.log(solution("jaron"));
console.log(solution("bread"));