// 최댓값과 최솟값
// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
// str에 나타나는 숫자 중 최소값과 최대값을 찾아 
// 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면
//  "-4 -1"을 리턴하면 됩니다.

// 입출력 예
// s	           return
// "1 2 3 4"	    "1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	        "-1 -1"

function solution(s) {
    let 최댓값 = -Infinity, 최솟값 = Infinity;
    s.split(' ').map(a => {
        const num = Number(a);
        최댓값 = Math.max(최댓값, num);
        최솟값 = Math.min(최솟값, num);
    })

    const answer = [String(최솟값), String(최댓값)].join(' ');
    return answer;
}

console.log(solution("1 2 3 4"))
console.log(solution("-1 -2 -3 -4"))
console.log(solution("-1 -1"))
