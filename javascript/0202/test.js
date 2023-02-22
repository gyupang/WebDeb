console.log("hello Java world");

const user = "철수"
// 조건문
// if(user){
// if(user=="홍길동"){
//     console.log("도둑놈")
// }else{
//     console.log("누군지 모르겠음")
// }

// }else{
//     console.log("유저가 없습니다")
// }

// 선택문 - 스위치
switch (user) {
    case "철수":
        console.log("철수")
        break;
    case "홍길동":
        console.log("홍길동")
        break;
    default:
        console.log("누군지 모름")
}

//반복문  While 루프 - 지정된 조건이 참인 한 코드 블록을 반복합니다 .
let i = 1
while (i < 10) {
    console.log(i)
    i++;
}

//Do while 루프 - 코드 블록을 한 번 실행한 다음 조건이 참인 동안 루프를 반복합니다. 
let d = 10;

do{
console.log('hello');

}while(d<3){
}
//For 루프 - 3개의 선택적 표현식이 있는 루프를 생성
// 표현식 1은 루프가 시작되기 전에 변수를 설정합니다 (let i = 0).
// 표현식 2는 루프 실행 조건을 정의합니다   (i<=30).
// 표현식 3은 루프의 코드 블록이 실행될 때마다 값(i++)을 증가시킵니다.
for(let i =1; i<=30; i++){

}

