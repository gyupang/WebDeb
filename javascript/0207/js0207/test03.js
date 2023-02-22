/*  연습 1

1. 10, 5, 8, 30 중 가장 큰수를 구하라
2. 10, 5, 8, 30 중 가장 작은 수를 구하라

변수 num =2.13215
3. 변수 num을 반올림한수
4. num을 소숫점 첫째자리 내림
5. num을 소숫점 첫째자리 올림
6. 0-1사이의 난수
7. 원주율 상수
8. 0-30까지의 난수 */

Math.max(10, 5, 8, 30)  //최대값

Math.min(10, 5, 8, 30)  // 최소값

const num = 2.13215
Math.round(num) //반올림
Math.floor(num) //내림
Math.ceil(num) //올림

Math.random()

Math.PI //원주율

Math.floor(Math.random() * 31) //0-30.999 사이 숫자 내림

// 가위바위보 게임

let user = prompt("가위 바위 보중 하나를 내세요")
console.log("사람"+user)
const rps = ["가위", "바위", "보"]
let com = Math.floor(Math.random() * 3);
console.log("컴퓨터"+rps[com])

switch (user) {
    case "가위":
        user = 0
        break;
    case "바위":
        user = 1
        break;
    case "보":
        user = 2
        break;
    default:
        user = -1
}

console.log("사람스위치"+user)
console.log("컴퓨터숫자"+com)
if (user == 0 && com == 2) {
    console.log("이겼습니다")
} else if (user > com) {
    console.log("이겼습니다")
} else if (user == com) {
    console.log("비겼습니다")
} else {
    console.log("졌습니다")
}