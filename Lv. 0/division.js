// 두 수의 나눗셈
// 문제 설명
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.

// 입출력 예
// num1	num2	result
// 3	2	1500
// 7	3	2333
// 1	16	62

function solution(num1, num2) {
    var answer = parseInt(num1 / num2 * 1000);
    return answer;
}

console.log(solution(3, 2));
console.log(solution(7, 3));
console.log(solution(1, 16));