// 개인정보 수집 유효기간
// 문제 설명
// 고객의 약관 동의를 얻어서 수집된 1~n번으로 분류되는 개인정보 n개가 있습니다. 
// 약관 종류는 여러 가지 있으며 각 약관마다 개인정보 보관 유효기간이 정해져 있습니다. 
// 당신은 각 개인정보가 어떤 약관으로 수집됐는지 알고 있습니다. 수집된 개인정보는 유효기간 전까지만 보관 가능하며, 
// 유효기간이 지났다면 반드시 파기해야 합니다.
// 예를 들어, A라는 약관의 유효기간이 12 달이고, 2021년 1월 5일에 수집된 개인정보가 A약관으로 수집되었다면 
// 해당 개인정보는 2022년 1월 4일까지 보관 가능하며 2022년 1월 5일부터 파기해야 할 개인정보입니다.
// 당신은 오늘 날짜로 파기해야 할 개인정보 번호들을 구하려 합니다.
// 모든 달은 28일까지 있다고 가정합니다.
// 다음은 오늘 날짜가 2022.05.19일 때의 예시입니다.

// 약관 종류	유효기간
// A	         6 달
// B	        12 달
// C	        3 달
// 번호	  개인정보수집일자	약관 종류
// 1	2021.05.02	          A
// 2	2021.07.01	          B
// 3	2022.02.19	          C
// 4	2022.02.20	          C

// 입출력 예
// today	               terms	                               privacies	                                        result
// "2022.05.19"	["A 6", "B 12", "C 3"]	    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]	        [1, 3]
// "2020.01.01"	["Z 3", "D 5"]	    ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]	[1, 4, 5]

function solution(today, terms, privacies) {
    var answer = [];
// 1. { A: 6, B: 12, C: 3 }  이 형태로 terms 만들기
    const obj = {};
    let c = 1;
    terms.forEach((e) => {
        const [alpha, exp] = e.split(' '); // 구조분해할당 
        obj[alpha] = Number(exp); // ex) obj['A'] = 1; => { A: 1 }
    }) 
        // 2. today와 privacies 날짜 [2022, 5, 19] 이런식으로 배열 형태로 나타내기 
        today = today.split(".").map(e => Number(e)) // 중요! split은 문자열 형태 배열로 반환되므로 숫자 형태로 변환해줘야 한다 
        for (let privacy of privacies) { // privacies 이런 복수형으로 나오면 대게 for문 이 형태로 나타냄 
            let [privacyDate, privacyGrade] = privacy.split(' ')
            privacyDate = privacyDate.split(".").map(e => Number(e));
            let [year, month, day] = privacyDate; // 개인정보수집일자
            const [todayYear, todayMonth, todayDay] = today; // 오늘 날짜

            // 3. 개인정보수집일자 달에 약관 유효기간 달 더하기 
            month += obj[privacyGrade];
            // 4. 달이 12보다 클때 조건문으로 나누기
            if (month > 12) {
                if (month % 12 == 0) {
                    year += Math.floor(month/12)-1; // Math.floor은 내림, Math.ceil는 올림
                    month = 12;
                }else { 
                    year += Math.floor(month/12)
                    month = month % 12;
                }
            }
            // 5. 개인정보수집일자 년보다 오늘 년도가 크면 파기(달, 일도 마찬가지)
            if (year < todayYear) {
                answer.push(c);
            } else if (year == todayYear) {
                if (month < todayMonth) {
                    answer.push(c);
                } else if (month == todayMonth) {
                    if (day - 1 < todayDay) {
                        answer.push(c);
                    }
                }
            }
            c++;
        }
        return answer;
}

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))