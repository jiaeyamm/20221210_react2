import { useState, useEffect } from "react";

// 컴포넌트 만들기
// 함수이름은 파스칼케이스로 작성
function Hello({ text, active, color }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("hello component rendering");
  });

  useEffect(() => {
    // 화면에 처음 나타날 때 한번만 실행됨 => setTimeout, setInterval, 서버에 데이터 받아오기, 라이브러리 연동
    console.log("hello component mount");
    const timer = setInterval(() => {
      console.log("1초경과");
    }, 1000);

    return () => {
      // 화면에서 사라질 때(언마운트) 실행 => 클린업 함수, clearTimeout, clearInterval, 인스턴스 삭제
      console.log("unmount");
      clearInterval(timer);
    };
  }, []);
  /* 
    JSX문법
      1. 무조건 하나의 태그로 감싸서 반환해야함 => 프래그먼트를 이용하면 불필요한 태그 추가하지 않고 하나로 묶을 수 있음
      2. 닫는 태그를 생략할 때는 셀프 클로징 태그를 사용해야함
      3. JSX안에 자바스크립트 값을 포함시킬 때는 {} 안에 작성
      4. 스타일 속성을 객체 형태로 전달 => 여러단어인 속성은 카멜 케이스 사용
      5. class는 classNamd 속성으로 할당
      6. 컴포넌트명은 대문자로 시작
  */

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1 style={{ color: active && color }}>
        Hello {text}
        {active && "!"}
      </h1>
      <input type="text" onChange={handleInput} />
    </>
  );
}

Hello.defaultProps = {
  text: "react",
  color: "blck",
};

export default Hello;
