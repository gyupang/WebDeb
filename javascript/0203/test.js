
// 1번
let sum=0;
for(let i=0; i<=100; i++){
    sum = sum + i
}
console.log(sum);


// 2번
const user =15;
switch(user){
case 15:
    console.log("중학생")
    break;
    case 18:
    console.log("고등학생")
    break;
default:
    console.log("일반인")
}

// 3번

/* for(let j=0; j<10; j++){
console.log("출력");
break;
console.log(j)
}

for(let k=0; k<10; k++){
    if(k==6) break;
    console.log(k)
    } */

// 6에서 끝남
// break명령문은 루프에서 벗어나는 데에도 사용

// 4번
for(let m=0; m<10; m++){
if(m%2==0) continue;
console.log(m)
}
// continue는 지정된 조건이 발생하는 경우 건너뜀

// 5번

함수이름();
function 함수이름(매개변수){
    console.log("물건출력");
}

dum(3);
function dum(num){
    console.log(num + 5)
}

