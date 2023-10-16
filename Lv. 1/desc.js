// 정수 내림차순으로 배치하기
// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
//  예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 입출력 예
// n	return
// 118372	873211

function solution(n) {
    // 1. 정수 => 문자열 변경 2. map 함수로 요소 숫자로 바꿈 3. 숫자 정렬 4. 역순 정렬 5 배열 요소 합치기
    // join 메서드 : 배열의 모든 요소 연결해 하나의 문자열로 만듬
    const answer = Number(n.toString().split('').sort().reverse().join(''))
    return answer;
}

console.log(solution(118372))