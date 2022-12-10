/* 
  import와 export
    1) 확장자 .mjs
    2) export되는 값들은 사용하고자 하는 mjs파일에서 import { export값 } from "경로" 형태로 사용 => as 키워드로 식별자 변경가능
    3) export default는 하나만 가능. import 식별자 from "경로" => 식별자를 자유롭게 지을 수 있음
    4) 모듈은 별개의 유효범위를 가지게 되기 때문에 캡슐화를 할 수 있다
 */
export const PI = 3.141592;

export function getSum(a, b) {
  return a + b;
}

let obj = {
  PI,
  getSum,
};

export default obj;
