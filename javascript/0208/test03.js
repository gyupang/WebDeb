
// let str = new String("hello javascript"); 안씀 아래처럼 선언
let stra = "hello javascripy"

/* 1. charAt(index) - index 번호에 해당하는 문자를 반환
    ex) str1 = "web he she";
    str.charAt(2);  // b
 
 2. indexOf("찾을 문자",(시작위치)); - 찾은 문자의 인덱스를 반환, -1
    ex) str2 = "그는 정말 개쉬키 였습니다.";
    str2.indexOf("개쉬키"); // 6번 반환, 없으면 -1
    lastIndexOf("찾을 문자",(시작위치)); - 마지막으로 나타나는 인덱스 반환
 
 3. match("찾을문자") - 찾은 문자를 반환 null
 4. replace("찾을문자","바꿀문자")
 5. search("찾을 문자") - 인덱스 번호를 반환
 6. slice(a,b) - a부터 b앞까지 반환 //a개의 문자를 자르고, b번째 이후를 자른후 남은 문자 반환
 7. substing(a,b) - a인덱스 부터 b인덱스 이전 구간 반환
 8. substr(a,문자 개수) - a인덱스 부터 지정된 문자 개수만큼
 9. split("문자") - 지정한 문자를 기준으로 문자 데이터를 나누어 배열에 저장
 10. toLowerCase(), 11. toUpperCase()
 12. length - 문자열 길이
 13. concat("새로운문자") - 문자열 결합
 14. charCodeAt(index) - 문자열 해당 인덱스의 아스키코드 값을 반환
 15. fromCharCode(아스키코드 값) - 해당 문자를 반환
 16. trim() - 문자 앞뒤 공백을 제거  
 */

const str = "Hello Thank you good luck to you";
/* 
1. 인덱스 16 //str.slice(16,17) : g  
ans - str.charAt(16)
2. 처음 you 인덱스 // str.search('you') : 12
ans - str.indexOf('you')
3. 인덱스 16이후 첫번째 you 인덱스값 // str.indexOf('you',16) : 29
4. 오른쪽부터 왼쪽으로 발견되는 you 인덱스 // str.lastIndexOf('you') :29
5. 인덱스 25부터 왼쪽으로 제일먼저 발견되는 인덱스 // str.lastIndexOf('you',25) : 12
6. 왼쪽부터 첫번째 발견되는 luck 찾아 반환 // 

 */