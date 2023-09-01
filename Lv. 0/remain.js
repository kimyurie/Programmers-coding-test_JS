// 나머지 구하기
// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

// 입출력 예
// num1	num2	result
// 3	2	1
// 10	5	0

function solution(num1, num2) {
    var answer = num1 % num2;
    return answer;
}


console.log(solution(3, 2));
console.log(solution(10, 5));