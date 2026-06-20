/*
    Spread 연산자 & Rest 매개변수
    Spread : 흩뿌리다, 펼치다 라는 뜻 / 객체나 배열에 저장된 여러개 값을 개별로 흩뿌려 역할
    Rest : 나머지 / 함수 호출 값을 매개변수로 받는데 함수 호출 값을 한 번에 모든 매개변수를 받아 올수 있다, Rest매개변수 뒤에는 어떤 매개변수의 값을 저장할 수 없다 꼭 마지막에 작성
*/

// 1. Spread 연산자
let arr1 = [1, 2, 3];

// 방법1 : 하지만 이 방법은 매우 위험하다 이유는 'arr1'에 배열이 더 추가 되거나 삭제가 될수 있어서
// let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];

// 방법2 : '...' -> 스프레드 연산자 : 'arr1'배열 모두를 풀어 해치다
let arr2 = [4, ...arr1, 5, 6];
// console.log(arr2);


let obj1 = {a : 1, b : 2}
let obj2 = {...obj1, c : 3, d : 4}
// console.log(obj2);

function funcA(p1, p2, p3){
    // console.log(p1, p2, p3);
}
funcA(...arr1);





// 2. Rest 매개변수
function funcB(one, ...rest){
    console.log(one);
    console.log(rest);
}
funcB(...arr1);