/*
    모듈 시스템
    = '모듈'을 다루는 시스템
    = 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템

    모듈이란?
    = 온라인 쇼핑몰
    1. 회원 관리 기능 ===  user.js = user 모듈
    2. 장바구니 기능 === cart.js = cart 모듈
    3. 결제 기능 === payment.js = payment 모듈
    = 한 페이지에서 코드를 작성하면 많은 양에 코드에 수정이나 생상성에 문제가 발생한다
    = 기능 별로 파일을 분리 
    = 어디서 오류가 났는지 수정하고 싶은 곳을 손쉽게 수정도 할수 있다
*/

// math 모듈

// es모듈
export function add(a, b){
    return a + b;
}

export function sub(a, b){
    return a - b;
}

export default function multiply(a,b){
    return a * b;
}

// module.exports = {
//     add, 
//     sub,
// }


// export {add, sub}