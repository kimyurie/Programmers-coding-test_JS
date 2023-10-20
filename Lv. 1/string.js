// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, 
// solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 
// "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	   return
// "a234"	false
// "1234"	true

function solution(s) {
    // replace('찾을 문자열', '변경할 문자열');
    // \d : 숫자
    // 숫자를 빈문자열로 바꿈 => 다 숫자로 이루어져있으면 길이는 0
    return s.replace(/\d/g, '').length === 0 && (s.length === 4 || s.length === 6);
}

console.log(solution("a234"))
console.log(solution("1234"))