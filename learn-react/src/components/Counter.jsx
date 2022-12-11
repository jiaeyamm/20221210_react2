import { useState } from "react";

function Counter() {
  /* 
    useState(초기값) : [상태값, 업데이트 함수]
    상태값 : 컴포넌트가 가지는 상태값 => 상태가 변경되면 렌더링이 다시 일어남
        => useState는 비동기적으로 동작함

        setCount((count) => count + opNum);
        => 함수형 업데이트 : useState의 인자로 함수를 전달하면 매개변수에 최신상태값이 담긴다
            
  */
  const [count, setCount] = useState(0);

  const handleCount = (opNum) => {
    if (opNum < 0 && count <= 0) return;
    setCount(count + opNum);
  };

  console.log("렌더링!");
  return (
    <div>
      <h3>{count}</h3>
      {/* 
        이벤트 바인딩시 함수를 전달해야함 => 함수 호출결과는 전달하는게x 
            => 인자가 필요할 경우 익명함수 안에서 호출하는 형태로 작성
      */}
      <button onClick={() => handleCount(1)}>+1</button>
      <button onClick={() => handleCount(-1)}>-1</button>
    </div>
  );
}

export default Counter;
