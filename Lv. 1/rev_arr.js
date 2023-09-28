// 자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]
function solution(n) {
    const answer = String(n).split('').map(Number); // [ 1, 2, 3, 4, 5 ]
    // i -> 5 - i - 1 = 4-i
    var arr = [];
    for(let i = 0; i < answer.length; i++){
        arr.push(answer[answer.length - i - 1]);
    }
    return arr;
}

console.log(solution(12345));