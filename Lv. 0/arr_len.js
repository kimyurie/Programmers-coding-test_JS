// 배열 원소의 길이
// 문제 설명
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ strlist 원소의 길이 ≤ 100
// strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.

// 입출력 예
// strlist	                         result
// ["We", "are", "the", "world!"]	[2, 3, 3, 6] // 
// ["I", "Love", "Programmers."]	[1, 4, 12]

// 틀린 코드
// function solution(strlist) {
//     var answer;
//     for(let i = 0; i < strlist.length; i++){ 
//         for(let j = 0; j < strlist[i].length; j++){
//             answer = strlist[i].length;
//         }
//         console.log(answer);
//      }
// }

// // 비슷한 코드 답
// function solution(strlist){
//     var answer = [];
//     for(let i = 0; i < strlist.length; i++){
//         answer.push(strlist[i].length);
//     }
//     return answer;
// }


// map 함수 사용하기!
function solution(strlist){
    return strlist.map((a) => a.length);
}


console.log(solution(["We", "are", "the", "world!"]));
console.log(solution(["I", "Love", "Programmers."]))