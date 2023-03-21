//1
function max_num(x, y, z) {
    let max_Val = 0;
    if (x > y) {
        max_Val = x;
    } else {
        max_Val = y;
    }
    if (z > max_Val) {
        max_Val = z;
    }
    return max_Val;
}
console.log(max_num(10, 33, 99));


//2
function near_100(x, y) {
    if (x != y) {
        let x1 = Math.abs(x - 100);
        let y1 = Math.abs(y - 100);
        if (x1 < y1) {
            return x;
        }
        if (y1 < x1) {
            return y;
        }
        return 0;
    } else {
        return false;
    }
}
console.log(near_100(101, 102));

//3 패스
//4 
function max_t(x, y) {
    if ((x >= 40 && x <= 60) && (y >= 40 && y <= 60)) {
        if (x > y) {
            return x;
        } else if (x < y) {
            return y;
        } else {
            return "같음";
        }
    } else {
        return "범위 안에 있지 않음";
    }
}
console.log(max_t(41, 41));

//5
function solution(str, s) {
    let ok = false;
    for (let i = 0; i < str.length; i++) {
        if ((str.charAt(i) == s) && (i >= 1 && i <= 3)) {
            ok = true;
            return ok;
        }
    }
    return ok;
}
console.log(solution("GOOGLE", "O"));

//6
function rest(x, y, z) {
    if ((x > 0) && (y > 0) && (z > 0)) {
        return (x % 10 == y % 10 && y % 10 == z % 10);
    } else {
        return false;
    }
}
console.log(rest(222, 342, 2));

//7
function solution7(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    }
    const f_part = str.substring(0, 3).toLowerCase();
    const b_part = str.substring(3);
    return f_part + b_part;
}

console.log(solution7("PYTHON"));
console.log(solution7("hi"));

//8
function solution8(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const avg = sum / arr.length;
    if (avg > 89) {
        return "A";
    } else if (avg > 79) {
        return "B";
    } else if (avg > 69) {
        return "C";
    } else if (avg > 59) {
        return "D";
    } else {
        return "F";
    }
}
let jum = [95, 85, 70, 69];
console.log(solution8(jum));

//12
let str12 = "가나다라마밧";
str12 = str12.split("").reverse().join("")

console.log(str12);


