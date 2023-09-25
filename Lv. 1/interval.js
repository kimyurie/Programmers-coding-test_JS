// x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]
function solution(x, n) {
    var answer = [];
    if(x > 0){ 
         for (let i = x; i <= (x * n); i += x){
        answer.push(i); }
    }else if(x < 0){
        for (let i = x; i >= (x * n); i += x){
        answer.push(i); }
    }else {
       for (let i = 0; i < n; i++){
        answer.push(0);}
    }
    
    return answer;
}

console.log(solution(2,5));
console.log(solution(4,3));
console.log(solution(-4,2));

console.log(solution(0,2)); // [0, 0]


// 틀린 부분
// 1. x가 정수이므로 양수, 음수, 0인 경우 조건 나누기!
// 2. x가 0일 때 반복문 코드 짜는 부분 


