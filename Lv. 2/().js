// 올바른 괄호
// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
// 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 입출력 예
//   s	    answer
// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false

function solution(s){
    // 스택 알고리즘 
    // (가 나오면 1을 더하고 )가 나오면 -1을 더하도록 = 합이 0나오면 true
    // 만약 )가 먼저나오면 -1이 되므로 false 출력
    let stackCnt = 0;
    for(let i = 0; i < s.length; i++){
        stackCnt += s[i] === '(' ? 1 : -1;
        if(stackCnt < 0) return false;
    }
    return stackCnt === 0 ? true : false;
}

console.log(solution("()()"))
console.log(solution("(())()"))
console.log(solution(")()("))
console.log(solution("(()("))