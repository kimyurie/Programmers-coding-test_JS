// 배열 뒤집기
// 문제 설명
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. 
// num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// num_list	                result
// [1, 2, 3, 4, 5]	        [5, 4, 3, 2, 1]
// [1, 1, 1, 1, 1, 2]	    [2, 1, 1, 1, 1, 1]
// [1, 0, 1, 1, 1, 3, 5]	[5, 3, 1, 1, 1, 0, 1]

function solution(num_list) {
    var answer = [];
    for(let i = 0; i < num_list.length; i++) {
        answer.push(num_list[num_list.length - i -1])
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 1, 1, 1, 1, 2]));
console.log(solution([1, 0, 1, 1, 1, 3, 5]));