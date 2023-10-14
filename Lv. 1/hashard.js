// 하샤드 수
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 
// 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, 
// solution을 완성해주세요.

// 입출력 예
// x	return
// 10	true
// 12	true
// 11	false
// 13	false

function solution(x) {
    // toString : 문자열로 만드는 거
    // split('') : ''를 이용해 여러개 문자열로 나눔
    // Number() : 값을 Number타입으로 변환
    // reduce() : 배열의 각 요소에 대해 함수 실행
    // acc 부분은 배열요소 첫번째값 들어감 , val 부분에는 마지막값 배열요소

    const sum = x.toString().split('').map(a=>Number(a)).reduce((acc,val) => acc + val, 0)
    
    // // Number.isInteger() : 정수 판별 메소드
    const isHarshard = Number.isInteger(x / sum)
    return isHarshard;
}

console.log(solution(10))
console.log(solution(12))
console.log(solution(11))
console.log(solution(13))
