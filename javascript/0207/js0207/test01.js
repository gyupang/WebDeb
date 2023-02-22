const tv = {
    com: "LG",
    size: "100inch",
    color: "white",
    price: "500만원",
    start: function () {
        console.log(this.com + "의" + this.size + "tv를 켭니다.");
    },
    stop: function () {
        return this.com + "의" + this.size + "tv를 끕니다.";
    }
}

// tv.start()


// function 이름() {
//     실행식
// }

//생성자 함수 --> new라는 키우드를 통해 함수를 불러온다.

const led = new Object();
led.com = "Samsung",
    led.size = "120inch",
    led.color = "black",
    led.price = "700만원",
    led.start = function () {
        console.log(this.com + "의" + this.size + "tv를 켭니다.");
    },
    led.stop = function () {
        return this.com + "의" + this.size + "tv를 끕니다.";
    }

const thisDate = new Date();
console.log(thisDate)

