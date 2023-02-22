
function 함수명() {
    // 자바스크립트 코드

}

참조변수 = function () {
    // 자바스크립트 코드
}

함수명();
참조변수(); // 호이스팅 안됨



myFunc(); //호이스팅(hoisting) 앞에 있어도 읽어짐

function myFunc() {
    // 자바스크립트 코드
}


var count =0;


myFun();

function myFun(){
count++;
console.log(count)
}

myFun();