/*
    Date 객체와 날짜
*/

// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
// console.log(date1);

// let date2 = new Date("1996/08/22/10:10:10");
let date2 = new Date(1996,8,22,10,10,10);
// console.log(date2);



// 2. 타임 스탬프 : 특정 시간인 '1970.01.01 00시 00분 00초 : UTC(세계에서 모든 나라가 시작한 시간1)'로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
// console.log(ts1)

let date4 = new Date(ts1);
// console.log(date1, date4);



// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 0부터 시작하기 때문에 +1를 꼭 붙여준다
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(year, month, date, hour, minute, seconds);



// 4. 시간 수정하기
date1.setFullYear(2024);
date1.setMonth(8) + 1;
date1.setDate(22);
date1.setHours(11);
date1.setMinutes(59);
date1.setSeconds(58);

// console.log(date1);




// 5. 시간을 여러 포맷으로 출략하기
console.log(date1.toDateString()); // 날짜만 출력
console.log(date1.toLocaleString()); // 시간, 분, 초