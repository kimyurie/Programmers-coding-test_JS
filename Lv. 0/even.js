// 짝수의 합
// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 입출력 예
// n	result
// 10	30
// 4	6

function solution(n) {
    var answer = 0;
    for(i=0; i<=n; i+=2){ // i+2이라고 써서 틀림
        answer += i;
    }
    return answer;
}

console.log(solution(10));
console.log(solution(4));


