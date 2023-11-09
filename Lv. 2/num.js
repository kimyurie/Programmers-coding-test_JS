// 숫자의 표현
// 문제 설명
// Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다.
// 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15

// 자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

// 입출력 예
// n	result
// 15	4
function solution(n) {
    // 아래 코드 답은 맞는데 시간 초과 나옴
//    var answer = 0;
//    for (let i = 1; i <= n; i++){
//     var sum = 0;
//     for(let j = i; j <= n; j++){
//         sum += j;  
//         if(sum == n) {answer += 1;}
//      }
//    }
//    return answer;

// 해결 팁 //https://jsikim1.tistory.com/258 참고
// "주어진 자연수를 연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 주어진 자연수의 약수 중에서 홀수인 수의 개수와 같다."
  var answer = 0;
  for (let i = 1; i <= n; i++){
    if(n % i === 0 && i % 2 === 1) answer+=1;
  }
  return answer;
} 

console.log(solution(15))