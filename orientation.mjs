import math, { PI as PINUM, getSum } from "./lib.mjs";
/* 
    최신문법의 기준 ES6(2015)


    1. var 문제점
        1) 중복선언이 가능 => 의도치 않게 값이 변경될 수 있어서 예상치 못한 오류 발생
        2) 변수 호이스팅 발생 => 변수 선언 이전에 참조가 됨. 변수 초기화시 undefined가 할당됨.
        3) 블록 레벨 스코프(유효범위)를 지원하지 않는다.(함수레벨 스코프만 지원함)
*/

console.log(num); //호이스팅 발생
var num = 1;
console.log(num);
var num = 10;
console.log(num);

function sum(a) {
  var num = 0;
  num = num + a;
  return num;
}

console.log(sum(100));
console.log(num);

if (true) {
  var num = 99;
  var num2 = 199; //블록 레벨 스코프를 지원하지 않기 때문에 전역변수 num2가 생성됨.
  console.log(num);
}

console.log(num, num2);

if (true) {
  //   console.log(num3); 선언 이전에 참조 불가능 => 엄밀히 말하면 호이스팅 자체는 일어남 => TDZ문제
  let num3 = 55;
  //   let num3 = 10; 중복선언 불가능
}

// console.log(num3); 블록레벨 스코프를 지원하기 때문에 전역변수가 생성되지 않음

const TAX = 10; //ConsTant(상수) => 값을 무조건 초기화시켜야 함
// TAX = 100; 상수는 재할당 불가능

console.log("세율이 " + TAX + "% 입니다");
// 템플릿 리터럴 : ``(백틱) ${표현식}을 통해 문자열 안에 표현식을 포함시킬 수 있음
console.log(`세율이 ${TAX / 2}% 입니다`);

/* 
    화살표 함수(Arrow function)
        1) 표현이 간결해서 주로 콜백함수로 전달할 때 사용
        2) 코드블록을 생략하면 return을 생략할 수 있음 => 객체도 {}를 사용하기 때문에 ()안에 사용해야 객체로 인식
        3) this 바인딩이 되지 않음
 */
let divide = (a, b) => a / b;
let getObj = (name, age) => ({
  name,
  age,
});

let user = {
  name: "b",
  age: 30,
  hello: () => {
    // 화살표 함수를 사용하면 this 바인딩이 되지않음
    // console.log(this.name, this.age);
  },
};

user.hello();

setTimeout(() => {
  console.log("2초 경과");
}, 2000);

console.log(`10 / 2 = ${divide(10, 2)}`);

/* 
    비구조화 할당
        - 객체나 배열의 값을 간결하게 할당할 수 있음
            1) 객체는 변수선언을 {} 안에 해주면 됨 => 객체의 키값과 동일하게 작성해야 됨
            2) 배열은 []안에 순서대로 변수명을 작성하면 배열에 저장된 인덱스에 따라 값이 할당됨
                => 객체 비구조할당에 비해 변수명을 자유롭게 지을 수 있음. 키값 또한 알 필요 없음
*/

// let name = user.name;
// let age = user.age;
let { name: userName, age, height } = user;
console.log(userName, age, height);

let arr = ["nb", 30, "apple", function () {}];
let [name02, age02, fruit, func] = arr;
console.log(name02, func);

/* 
    펼침 연산자(스프레드)
        1) 배열이나 객체의 값들을 나열하는 효과가 있음 => 기존값을 복사하고 새로운 값을 추가 및 변경하는 데 유용함
        2) 복사할 경우 참조값이 아닌 값 자체를 복사하기 때문에 불변성을 지킬 수 있음
            => 객체가 중첩되는 경우 중첩된 객체는 참조복사가 일어남
*/
let copy = user;
let copy2 = { ...user, done: true, name: "bb" };

let copyArr = [1, ...arr, false];
copy.age = 31; // 객체는 참조값을 복사해옴
copy2.age = 33;
console.log(user, copy2, user === copy2);

let numArr = [1, 6, 2, 234, 9];
let max = Math.max(...numArr);
console.log(`max: ${max}`);

console.log(copyArr);

// console.log(PI);
console.log(getSum(1, 2));

console.log(math.PI);

/* 
  Promise
    - Promise는 비동기처리를 도와주는 객체 => 서버에서 데이터를 받아올 때
    - Promise 생성자의 인자로 함수를 전달 => 그 함수에 두개의 함수가 전달됨
      => resolve: 성공했을 때 실행할 함수. resolve 값을 Promise.prototype.then(콜백함수)의 콜백함수의 첫번째 인자로 전달됨
      => reject: 실패했을 때 실행할 함수. reject값을 에러 메세지로 전달함 => Promise.prototype.catch(콜백함수)의 콜백함수의 첫번째 인자로 에러가 전달됨
*/

let num4 = 5;
let promise = new Promise(function (resolve, reject) {
  if (num4 < 10) {
    reject("숫자가 10보다 작음");
  }
  resolve(num4);
});

promise
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

function getData(str) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(str);
    }, 2000);
  });
}

function getId(id) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(id);
    }, 2000);
  });
}

// Promise가 중첩되면 복잡해짐
getData("자바스크립트")
  .then(function () {
    return getId(1);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

/* 
  async/await
    - 함수 키워드 앞에 async를 붙인다
    - await을 앞에 붙이면 resolve될 때까지 다음 코드를 실행하지 않음
      => 비동기 코드를 동기처럼 순서를 제어하기 쉬움
    - try/catch문을 통해 에러처리 가능
    - Promise.all 등을 통해 병렬적으로 처리할 수 있음
    - async 함수는 return 값을 resolve하는 프로미스를 반환
*/
async function fetchData() {
  try {
    // let data = await getData("JS");
    // let id = await getId(100);
    let result = await Promise.all([getData("JS"), getId(100)]);
    console.log(result);
    // console.log(data, id);
  } catch (e) {
    console.log(e);
  }

  return 1;
}

console.log(fetchData());

// 삼항 연산자 : 조건식 ? true : false
let result2 = num4 < 10 ? "10보다 작음" : "10보다 크거나 같음";
console.log(result2);

// 단축 평가
// &&(and) : 앞의 값이 truthy한 값이라면 뒤에 값으로 평가되고, 앞의 같이 falsy한 값이면 false로 평가됨
let color = num4 < 10 && "red";
console.log("color:", color);

// ||(or) : &&(and)와 반대
let str = "" || "hi";
console.log(str);

// ??(nullish) : ?? 앞의 값이 null이나 undefined면 ?? 뒤의 값으로 평가, 그 외의 값이면 앞의 값으로 평가
//    => 값을 참조해서 있으면 그 값을 사용하고 없으면 대신할 값을 작성하면 됨
let checkNull = user.height ?? "할당 안됨";
console.log(checkNull);

// 옵셔널 체이닝 : 참조한 객체의 값이 null이거나 undefined인 경우 뒤의 프로퍼티를 평가하지 않음
console.log(undefined?.age);
console.log(user.age?.height?.str);

// 배열 고차 함수
let userList = [
  { id: 1, name: "aa", age: 31 },
  { id: 2, name: "bb", age: 32 },
  { id: 3, name: "cc", age: 33 },
];

// Array.prototype.forEach() : 배열을 순회하며 각 값을 인자로 함수를 반복 실행함
userList.forEach((user) => {
  console.log(user);
});

// Array.prototype.filter() : 배열을 순회하며 각 값을 조건식에 따라 해당하는 요소만 배열로 반환
//  => 콜백함수의 리턴값이 true인 요소만 반환. 원본배열을 변경하지않음
let filterArr = userList.filter((user) => {
  return user.age > 31;
});
console.log(filterArr);

// 짝수번째 요소만 모으기
let filterArr2 = userList.filter((_, i) => (i + 1) % 2 === 0);
console.log(filterArr2);

// Array.prototype.map() : 요소에 변형을 줄 때 사용
//  => 매 반복마다의 return값을 새로운 배열로 반환(기존 배열은 변경하지 않음)
let mapArr = userList.map((user) => {
  return user.age;
});
console.log(mapArr);

// age가 32이상인 user의 name값만 배열로 반환
let nameArr = userList.filter((user) => user.age > 31).map((user) => user.name);
let count = userList.filter((user) => user.age > 31).length;
console.log(nameArr, count);

// Array.prototype.reduce() : 누산할 때 사용
//  => 콜백함수의 첫번째 인자로 누적되고 있는 값, 두번째 인자로는 순회중인 요소의 값이 전달됨, 세번째(초기값)
let ageArr = userList.map((user) => user.age);
let totalAge = ageArr.reduce((acc, curr) => acc + curr, 100);
console.log(totalAge);

// rest문법 : 매개변수에 ...을 붙이면 전달된 인자가 몇개이던 배열로 모아줌
//  => 매개변수의 마지막에 사용해야함
function getTotal(a, b, c, ...numList) {
  return numList.reduce((acc, curr) => acc + curr);
}

console.log(getTotal(1, 2, 3, 4));

//vscode extention : Prettier - Code formatter, ESLint
