// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 
// 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 
// 대문자는 소문자보다 작은 것으로 간주합니다.

// 입출력 예
// s	         return
// "Zbcdefg"	"gfedcbZ"

function solution(s) {
    // split('') : 문자열 쪼개서 배열로 만듬
    // sort : 배열을 알파벳 순서대로 정렬(대문자/ 소문자 별로 정렬)
    // reverse : 배열을 내림차순으로 정렬
    // join : 배열을 합쳐 문자열로 다시 구성
    return s.split('').sort().reverse().join('');
}

console.log(solution("Zbcdefg"))
