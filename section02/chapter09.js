/*
    배열 메서드 3. 변형
*/

// 1. filter : 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
    {name : '홍길도', hobby : '스쿼시'},
    {name : '홍길동', hobby : '헬스'},
    {name : '홍길돈', hobby : '코딩'},
];

const sqPeople = arr1.filter(
    (item) => item.hobby === '코딩'
);

// console.log(sqPeople);



// 2. map : 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item, idx, arr) => {
    // console.log(idx, item);
    return item * 2;
});
// console.log(mapResult1);

let names = arr1.map((item) => item.name);
// console.log(names);




// 3. sort : 배열을 사전순으로 정렬하는 매서드 / 자동으로 정렬해준다 / 숫자는 정렬되지 않는다 정렬을 받으려면 콜백함수를 사용
// let arr3 = ['b', 'a', 'c'];
let arr3 = [10, 4, 64];
arr3.sort((a,b) => {
    if(a > b){
        // b가 a앞에 정렬
        return 1; // -> b, a
    }else if(a < b){
        // a가 b앞에 정렬
        return -1; // -> a, b
    }else{
        // 두 값의 자리를 바꾸지 마라
        return 0; // a,b 자리를 유지
    }
});
// console.log(arr3);




// 4. toSorted(가장 최큰에 추가된 함수) : 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ['g' ,'c', 'f'];
const sorted = arr5.toSorted();
// console.log(arr5);
// console.log(sorted);




// 5. join : 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ['hi', 'im', 'winterlood'];
arr6.join();
const joined = arr6.join(' ');
console.log(joined);