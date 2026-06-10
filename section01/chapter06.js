/*
    형 변환
    - 어떤 값의 타입을 다른 타입으로 변경하는 것을 말한다
    1 -> '1'
    Number -> String


    1. 묵시적 형 변환
    - 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형 변환 하는 것(암묵적 변환)
    - 내 생각 대로 형 변환이 일어나지 않는다

    2. 명시적 형 변환
    - 개발자가 직접 내장함수(자바스크립트가 기본적으로 제공하는 함수) 등을 이용해 형 변환 하는 것(명시적 변환)
    - 내가 원하는 대로 형 변환이 일어난다
*/

// 1. 묵시적 형 변환
let num = 10;
let str = '20';
const result = num + str;
// console.log(result); // '1020' -> 숫자 10이 문자열 '20'으로 변환되어 문자열 결합이 일어남




// 2. 명시적 형 변환

// 문자열 -> 숫자
let str1 = '10';
let strToNum1 = Number(str1);
// console.log(10 + strToNum1); // 20 -> 문자열 '10'이 숫자 10으로 변환되어 숫자 덧셈이 일어남

let str2 = '10개';
let strToNum2 = parseInt(str2);
// parseInt : 문자열에서 숫자 부분만 추출하여 정수로 변환하는 함수 / 문자가 앞에 있을 경우 NaN이 나옴 숫자가 앞으로 나와야 한다

// console.log(strToNum2); // NaN -> 문자열 '10개'는 숫자로 변환할 수 없기 때문에 NaN이 나옴
// console.log(strToNum2); // NaN -> 문자열 '10개'는 숫자로 변환할 수 없기 때문에 NaN이 나옴



// 숫자 -> 문자열
let num1 = 20;
let numToStr = String(num1);
console.log(numToStr + '입니다'); // '20입니다' -> 숫자 20이 문자열 '20'으로 변환되어 문자열 결합이 일어남