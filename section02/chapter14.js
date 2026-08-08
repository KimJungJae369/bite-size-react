/*
    비동기 작업 처리하기 3. async/await

    async 
    = 함수 앞에 붙이는 키워드
    = 어떤 함수를 비동기 함수로 만들어주는 키워드
    = 함수가 프로미스를 반환하도록 변환해주는 키워드  
    = 함수(function) 앞에 'async'을 붙이면 그 함수는 '비동기'함수로 바뀐다 
    = 객체 그대로 반환하는 함수가 아니라 객체의 결과 값으로 갖는 새로운 프로미스를 반환하는 함수로 변환

    await
    = 'async' 함수 내부에서만 사용이 가능 한 키워드
    = 비동기 함수가 다 처리되기를 기다리는 역할
*/

// async
// async function getDate(){
//     return{
//         name : '홍길동',
//         id : 'winterwood' 
//     }
// }

async function getDate(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name : "홍길동",
                id : 'winterlood'
            })
        }, 1500);
    });
}
console.log(getDate());


// await : then() 사용
// function printDate(){
//     getDate().then((result) => {
//         console.log(result);
//     });
// }
// printDate();


// await 
async function printDate(){
    const date = await getDate();
    console.log(date);
}
printDate();