const greenAir = ["교대", "강남", "방배"]

const yelloAir = ["미금", "정자", "수서"]

//splice, pop, shift, push, unshift
//splice() 메서드는 배열에 새 항목을 추가합니다.

let rs = greenAir.splice(2, 1, "서초", "역삼")
console.log(greenAir)

//pop() method 마지막 요소를 제거
// 제거된 요소를 반환
let rsa = yelloAir.pop()
console.log(yelloAir)

//shift() method 배열의 첫 번째 항목을 제거
// 이동된 요소를 반환
let rsb = yelloAir.shift()
console.log(yelloAir)

//push() method 배열 끝에 새 항목을 추가
//새 길이 .length를 반환
yelloAir.push(rs)

//unshift() method 배열의 시작부분에 새 요소를 추가
//새 길이 .length를 반환
yelloAir.unshift(rsb)
console.log(yelloAir)