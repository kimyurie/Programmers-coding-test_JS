// 나머지가 1이 되는 수 찾기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. 
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
function solution(n) {
    // n을 나눠서 나머지가 1이 되는 수 
    // 10 / 3 = 3 ... 1 
    // 10 / 9 = 1 ... 1
    // 12 / 11 = 1 ... 1
    for (let i = 2; i < n; i++){ // 나누는 수는 2부터 n까지
        if(n % i == 1) return i; 
        // let i; n % i == 1; console.log(i); 
        // -> 내 풀이 : 이렇게 지정하면 i라는 값이 지정되지 않았으므로 undefined
        // -> 해결 : i라는 값의 범위 지정
    }
}


console.log(solution(10));
console.log(solution(12));