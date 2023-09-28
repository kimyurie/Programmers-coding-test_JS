// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24

function solution(n)
{  
//     // n 배열로 만들기 (정수 -> 정수 배열로)
//     // 1. 정수 -> 문자열(유사배열객체)로 변경
//     var a = String(n);
//     // 2. 배열 모든 요소 숫자로 변경
//    var b = (arg) => Number(arg); // 입력받은 파라미터(arg)를 숫자로 변경하여 리턴
//     // 3. 문자열 -> 숫자 배열로 변경
//     // 문자열 -> 배열 변경 : Array.from()
//     var newArr = Array.from(a, b);

//     var answer = 0;
//     for (let i = 0; i < newArr.length; i++){
//         answer += newArr[i];
//     }  
//     return answer;
    
//     // 몰랐던 부분
//     // 정수-> 정수 배열로 만드는 것

    const answer = String(n).split('').reduce((acc,val)=>acc+Number(val),0)
   return answer
}

console.log(solution(123))
console.log(solution(987))
