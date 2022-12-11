import React, { useState, useEffect } from "react";
// import Hello from "./components/Hello";
// import Counter from "./components/Counter";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // 렌더링이 일어날때마다 실행되는 코드
    console.log("렌더링");
  });

  // []안의 값이 변화가 있을때만 실행된다
  useEffect(() => {
    console.log("input : ", input);
  }, [input]);
  useEffect(() => {
    console.log("count : ", count);
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // const name = "bb";
  // const style = {
  //   color: "red",
  //   fontSize: "30px",
  // };
  return (
    <>
      {/* <Hello text="bb" active={false} />
      <Hello color="red" active /> */}
      {/* 조건부 렌더링 */}
      {/* {true && <Hello />} */}
      {/* <p className="content" style={style}>
        이름 : {name}
      </p> */}

      {/* <div>
        <h2>{count}</h2>
        <button onClick={handleCount}>+1</button>
        <div>
          <input type="text" onChange={handleInput} value={input} />
          <p>{input}</p>
        </div>
        <button onClick={handleToggle}>toggle hello component</button>
        {toggle && <Hello />}

        <TodoInput />
      </div> */}

      <Todo />
    </>
  );
}

export default App;
