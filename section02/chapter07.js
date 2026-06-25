/*
    배열 메서드 1. 요소 조작
*/
// 6가지 요소 조작 메서드

// 1. push : 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3];
// arr1.push(4, 5, 6);
const newlength = arr1.push(4, 5, 6, 7);

// console.log(arr1);
// console.log(newlength);



// 2. pop : 배열의 맨 뒤에 있는 요쇼를 제거하고 반환
let arr2 = [1,2,3];
// arr2.pop();
const popItem = arr2.pop();

// console.log(arr2);
// console.log(popItem);



// 3. shift : 배열의 맨 앞에 있는 요소를 제거하고 반환 
let arr3 = [1,2,3];
// arr3.shift();\
const shiftedItem = arr3.shift();

// console.log(arr3, shiftedItem);




// 4. unshift : 배열의 맨 앞에 새로운 요소를 추가
let arr5 = [1, 2, 3];
// arr5.unshift(0);
const newlength2 = arr5.unshift(0);

// console.log(newlength2, arr5);




// 5. slice : 마치 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환 / 선언을 해야한다
let arr6 = [1, 2, 3, 4, 5];
let sliced = arr6.slice(2, 5);
let sliced2 = arr6.slice(2);
let sliced3 = arr6.slice(-3);

// console.log(sliced);
// console.log(arr6);
// console.log(sliced2);
// console.log(sliced3);





// 6. concat : 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr8 = [1, 2];
let arr9 = [3, 4]

let concatedArr = arr8.concat(arr9); 
console.log(concatedArr);

