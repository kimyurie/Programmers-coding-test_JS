// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
    // s배열 길이가 홀수라면 s[전체길이/2 + 1]
    // Math.floor는 소수점 버리기함수!
    if(s.length % 2 != 0) return s[Math.floor(s.length/2)]
    if(s.length % 2 == 0) return s[s.length/2 - 1] + s[s.length/2]
}

console.log(solution("abcde"))
console.log(solution("qwer"))
