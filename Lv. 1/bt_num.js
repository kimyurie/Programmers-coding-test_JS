// 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

function solution(a, b) {
  let sum = 0;
  // Math.min() : 주어진 숫자들 중 가장 작은 값 반환
  // Math.max() : 주어진 숫자들 중 가장 큰 값 반환
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
