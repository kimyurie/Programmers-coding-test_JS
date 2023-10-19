// 수박수박수박수박수박수?
// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 
// 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

function solution(n) {
    // Array(3).fill(0) : [ 0, 0, 0 ]
    // 각 배열에 map 함수 써서 수박수~글자 넣기
    // text[0], text[1] 활용해서
    // => 각 인덱스를 2로 나눈 나머지 값은 0 또는 1밖에 나오지 않으므로
    // join() : [ '수', '박', '수' ] => 수박수
    const text = '수박';
    const answer = Array(n).fill(0).map((a,b) => text[b%2]).join('');
    return answer;
}

console.log(solution(3))
console.log(solution(4))