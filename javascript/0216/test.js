// Callback

function disply(str){
    console.log(str);
}

function mySum(num1,num2,myCallback){
    let sum =num1+num2;
    myCallback(sum);
}


function mySum(num1,num2){
    let sum =num1+num2;
    disply(sum);
}

mySum(10,20);

let a =21;
let b =23;
mySum(a,b);
