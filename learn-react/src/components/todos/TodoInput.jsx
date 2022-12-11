import React, { useRef, useState } from "react";

// todolist 작성 => 입력값 관리
function TodoInput({ onCreate }) {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const inputRef = useRef();

  const handleSubmit = () => {
    onCreate(input);
    inputRef.current.focus();
    setInput("");
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={input} ref={inputRef} />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

// React.memo => 전달받는 프로퍼티에 변경사항이 있을때만 렌더링이 일어남
export default React.memo(TodoInput);
