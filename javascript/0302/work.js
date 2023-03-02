
// document.getElementById("demo").innerHTML = 5 + 6


const dt = new Date();
const week = ["일", "월", "화", "수", "목", "금", "토"]

let y = dt.getFullYear();
let m = dt.getMonth()+1;
let d = dt.getDate();
let i = dt.getDay();
let h = dt.getHours();
let mm = dt.getMinutes();
let ss = dt.getSeconds();
let nt = `오늘은 ${y}년 ${m}월 ${d}일 ${week[i]}요일입니다.
그리고 지금시간은 ${h}시 ${mm}분 ${ss}초입니다.`;
console.log(nt);
// let hour = (h >=12)?"오후":"오전";
// h=(h>=12)?h-12:h;
// 오전표기 삼항연산 공부
let m2 = dt.getMonth()+1;
m2 = (m2<10)?'0'+m2:m2;
console.log(m2);




// document.getElementsByClassName("daytime").innerHTML = nt;


let a = 5;
let b = 6;
let c = 7;

let s = (a + b + c) / 2;
let tr = Math.sqrt((s * (s - a) * (s - b) * (s - c)));
console.log(tr);

function p(){
    window.print();
}

