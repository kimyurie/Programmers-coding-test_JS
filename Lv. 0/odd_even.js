// 짝수 홀수 개수
// 문제 설명
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 100
// 0 ≤ num_list의 원소 ≤ 1,000

// 입출력 예
// num_list	        result
// [1, 2, 3, 4, 5]	[2, 3]
// [1, 3, 5, 7]	    [0, 4]

function solution(num_list) {
    let answer = [];
    let a = 0, b = 0;
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 ===0){
            a += 1;
        }else{
            b += 1;
        }
    }
    answer.push(a,b);

    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 5, 7]));