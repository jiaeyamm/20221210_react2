import React from "react";
import Hello from "./components/Hello";
import "./App.css";

function App() {
  /* 
    JSX문법
      1. 무조건 하나의 태그로 감싸서 반환해야함 => 프래그먼트를 이용하면 불필요한 태그 추가하지 않고 하나로 묶을 수 있음
      2. 닫는 태그를 생략할 때는 셀프 클로징 태그를 사용해야함
      3. JSX안에 자바스크립트 값을 포함시킬 때는 {} 안에 작성
      4. 스타일 속성을 객체 형태로 전달 => 여러단어인 속성은 카멜 케이스 사용
      5. class는 classNamd 속성으로 할당
      6. 컴포넌트명은 대괄호로 시작
  */
  const name = "bb";
  const style = {
    color: "red",
    fontSize: "30px",
  };
  return (
    <>
      <input />
      <Hello />
      <Hello></Hello>
      <Hello></Hello>
      <p className="content" style={style}>
        이름 : {name}
      </p>
    </>
  );
}

export default App;
