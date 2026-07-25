/*
    비동기 작업 처리하기2 : promise
    = 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
    = 비동기 작업을 감싸는 객체

    1. promise 효능
    = 비동기 작업 실행
    = 비동기 작업 상태 관리
    = 비동기 작업 결과 저장
    = 비동기 작업 병렬 실행
    = 비동기 작업 다시 실행
    ...
    = 비동기의 모든 기능을 처리하는 것

    2. promise의 3가지 상태
    = 대기(Pending) : 아직 작업이 완료되지 않은 상태  
        -> 해결(resolve) : '대기 상태'에서 '성공'으로 넘어 갈때 -> 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
        -> 거부(reject) : '대기 상태'에서 '실패'으로 넘어 갈때 -> 실패(Rejected) : 비동기 작업이 실패한 상태 
    
    
    3. 익세큐티 함수의 '그 후에' 결과 
    = then() 메서드 : 그 후에 / 비동기 작업에서 성공(Filfilled)했을 때만 결과가 호출된다
    = catch() 메서드 : 그 후에 / then()' 메서드의 반대로 실패(Rejected)했을 때만 결과가 호출된다


    4. promise 체이닝 : 두 메서드를 연결해서 사용할 수 있다
        promise.then((value) => {
            console.log(value);
        }).catch((error) => {
            console.log(error);
        });
*/


function add10(num){
    // 익세큐터(executor) 함수 : 비동기 작업 실행하는 함수
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // const num = null;

            if(typeof num === 'number'){
                resolve(num + 10);
            }else{
                reject('num이 숫자가 아닙니다');
            }
            // console.log('안녕');
            // resolve('안녕');  // 성공 : Fulfilled
            // reject('왜 실패했는지 이유...'); // 실패 : Rejected
        }, 2000);
    });
    return promise;
}

add10(0)
.then((result) => {
    console.log(result);
    return add10(result);
})
.then((result) => {
    console.log(result);
    return add10(undefined);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


// setTimeout(() => {
    // console.log(promise);
// }, 3000);

// promise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });