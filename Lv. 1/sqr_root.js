// 정수 제곱근 판별
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 입출력 예
// n	return
// 121	144
// 3	-1

function solution(n) {
    // 제곱근이 정수면 참 아니면 거짓 
    // Number.isInteger() : 정수 판별 메소드
    // Math.sqrt(n) : n의 제곱근 출력
    // Math.pow(3,2) : 3의 2제곱 계산
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1
}

console.log(solution(121))
console.log(solution(3))