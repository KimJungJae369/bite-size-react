/*
    Node.js = npm : 노드 패키지 매니저
    = '포로젝트' = '패키지' 단어를 사용

    터미널 단축키 : 컨 + j

    패키지 설치 과정
    1. npm init : 생성하려는 패키지 이름이 머냐? enter
    2. 패키지 버전(배포할때) enter
    3. 패키지의 간단한 설명 enter
    4. 메인으로 실행 될 '.js'파일 enter
    5. test command enter
    6. git enter
    7. 키워드 enter
    ....enter
    8. 마지막 정보 확인 enter
    9. 'package.json'생성

    경로 확인 : section03/index.js

    package.json -> 스크립트 파일에 "test" 밑에 'start' 만들기 -> "node section03/index.js" 생성 -> 터미널에 'npm run start' 입력 -> 터미널에 결과 확인 
*/

// console.log('안녕');

// const {add, sub} = require('./math');

console.log(add(1,2));
console.log(sub(1,2));
console.log(mul(3,2));

// console.log(moduleDate);

// es 모듈
// import mul from './math.js'
// import mul, {add, sub} from './math.js'