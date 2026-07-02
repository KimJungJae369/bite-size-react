/*
    배열 메서드 2 : 순회와 탐색
*/

// 5가지 요소 순횐 및 탐색 메서드
// 1. forEach : 배열의 모든 요소를 순회하면서 각각에 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3]; 
arr1.forEach(function(item, idx, arr){
    // console.log(idx, item * 2);
});

let doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);    
});

// console.log(doubledArr); // [2, 4, 6]



// 2. includes : 배열의 특정 요소가 있는지 확인하는 요소 
let arr2 = [1, 2, 3];
// let isIncludes = arr2.includes(3); // true
let isIncludes = arr2.includes(10); // false
// console.log(isIncludes);




// 3. indexOf : 특정 요소에 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(1);
// console.log(index);




// 4. findIndex : 특정 요소에 인덱스(위치)를 반환하는 메서드/ 모든 요소를 순회하면서 콜백함수를 만족하는
let arr4 = [1,2,3];
const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
// console.log(findedIndex);




// 5. find : 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데 요소를 그대로 반환
let arr5 = [
    {name : '홍길동'},
    {name : '한석봉'}
]

const finded = arr5.find((item) => item.name === '홍길동');
console.log(finded);