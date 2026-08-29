/*
    라이브러리란?
    = 프로그램을 개발할 때 필요한 다양한 기능을 들을 미리 만들어 모듈화 해 놓은 것
    = 누군가가 필요란 코드들을 모듈화하여 만들어 놓은것 
    = 내가 원한느 기능을 만들필요 없이 만들어져 있는 코드를 가지고 와서 사용할 수 있다(임포트)
    ex)
        날짜 라이브러리
        수락 라이브러리
        그래픽 라이브러리

    node_modules : 실제로 설치된 라이브러리의 저장소
    package-lock.json : 'package.json'보다 더 정확하고 엄밀하게 저장하는 파일, 즉 정확한 정보만 저장한다
    '^' : version Range(버전 범위) : 대략적인 버전, 0~1점대 버전 사이의 버전을 설치

    = 라이브러리의 경로를 가져올때는 'import 이름 from "라이브러리 이름"'만 작성하면 된다  
*/

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);