// 숫자 비교하기
// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

// 입출력 예
// num1	num2	result
// 2	3	-1
// 11	11	1
// 7	99	-1

function solution(num1, num2) {
    var answer;
     if(num1 == num2) return (answer = 1);
     if(num1 != num2) return (answer = -1);
    return answer;
}

console.log(solution(2, 3));
console.log(solution(11, 11));
console.log(solution(7, 99));