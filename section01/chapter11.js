/*
    함수
    function getArea(매개변수){
        return 반환값
    }
    getArea(인수);
    인수 -> 매개변수 -> 함수 내부에 전달
*/


// 함수선언 : 함수를 선언할 때는 무조건 함수명을 호출해야한다
// function greeting(){ // 1실행
//     console.log('안녕하세요'); // 4실행
// }
// console.log('호출 전'); // 2실핼
// greeting(); // 3실행
// console.log('호출 후'); // 5실행

// function getArea(width, height){
//     function another(){ // 중첩 함수
//         console.log('another');
//     }
//     another();

//     let area = width * height;

//     // console.log(area);
//     return area; // 리턴문 반환값 / 여기서 종료
//     console.log('hello'); // 실행 안됨
// }
let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2)

getArea(120, 200);

// 함수 호이스팅 : 끌어 올리다
function getArea(width, height){
    function another(){ // 중첩 함수
        console.log('another');
    }
    another();

    let area = width * height;

    // console.log(area);
    return area; // 리턴문 반환값 / 여기서 종료
    console.log('hello'); // 실행 안됨
}

