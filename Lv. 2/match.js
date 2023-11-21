// 짝지어 제거하기
// 문제 설명
// 짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 
// 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 
// 그 다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 
// 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 
// 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 
// 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

// 예를 들어, 문자열 S = baabaa 라면

// b aa baa → bb aa → aa →

// 의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

// 입출력 예
// s	   result
// baabaa	1
// cdcd	    0

function solution(s)
{
    // 1. 처음 문자 다음 문자와 같은지 비교
    // 2. 만약 같다면 둘다 삭제
    // 3. 다르다면 다음 문자열로 넘어가 계속 비교 하기 
    // const answer = s.split('');
    // for (let i = 0; i < answer.length -1; i++){
    //     if(answer[i] === answer[i+1]){
    //         answer.splice(i,2);
    //         i = -1; // 인덱스를 0으로 초기화하고 다시 처음부터 비교 
    //     }
    // }
    // return answer.length == 0 ? 1 : 0; // m1) 답은 맞고 효율성 테스트에서 탈락

    // m2 ) 스택 이용
    const stack = [];

    for (let i = 0; i < s.length; i++){
        // 스택이 비어있거나 스택에 마지막에 있는 문자가 s의 현재 문자와 같지 않으면 stack에 push
        if (!stack.length || stack[stack.length-1] !== s[i]) stack.push(s[i]);
        // 아니면 pop
        else stack.pop();
    }

    return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"))
console.log(solution("cdcd"))