// 배열 두배 만들기
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// numbers	                result
// [1, 2, 3, 4, 5]	            [2, 4, 6, 8, 10]
// [1, 2, 100, -99, 1, 2, 3]	[2, 4, 200, -198, 2, 4, 6]

function solution(numbers) {
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        answer.push(numbers[i] * 2);
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 2, 100, -99, 1, 2, 3]));
