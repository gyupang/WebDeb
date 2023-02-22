const dt = new Date();

// ---날짜 관련 메소드---
const nYear = dt.getFullYear(); //연도
const nMonth = dt.getMonth() + 1; //배열 [0,1,2~11]
const nDate = dt.getDate(); //날짜

dt.getHours     //시간
dt.getMinutes   //분
dt.getSeconds   //초
dt.getMilliseconds  //밀리초
dt.getTime // 1970 01 01 이후 밀리초

const nDay = dt.getDay(); // 요일 [0,1,2,3,4,5,6] 일월화

const week = ["일", "월", "화", "수", "목", "금", "토"]
// 배열만들어서 날짜값 찾기

console.log(`지금은 ${nYear}년 ${nMonth}월 ${nDate}일 
${week[nDay]}요일 ${dt.getHours()}시 ${dt.getMinutes()}분 ${dt.getSeconds()}초  ${dt.getMilliseconds()}밀리초 입니다.`)

// 올림픽이후 지난날짜
// 현재밀리초-올림픽까지 밀리초 = 올림픽이후 밀리초
const olp = new Date("1988-9-17")
const rst = (new Date().getTime()-(olp.getTime()))/(1000*60*60*24)
console.log(rst)

// ---숫자 관련 메소드---
Math.abs(-5) // 5 숫자의 절대값을 반환
Math.max(1,3,5,7) // 7 가장 큰 값을 반환
Math.min(1,3,5,7) // 1 가장 작은 값을 반환 
Math.pow(2,4) // 16 숫자의 거듭제곱값을 반환

Math.random() // 0-1사이의 난수
Math.round() // 반올림
Math.ceil() // 올림
Math.floor() // 내림
Math.trunc() // 소숫점 제거하고 반환

Math.sign() // 음수 0 양수일때 -1 0 1 반환 그이외 NaN