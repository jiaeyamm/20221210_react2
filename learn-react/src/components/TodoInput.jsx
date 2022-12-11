import { useState, useCallback } from "react";

function TodoInput({ handleSubmit }) {
  const [inputs, setInputs] = useState({
    text: "",
    date: "",
  });

  const handleInput = useCallback(
    (e) => {
      // 객체의 프로퍼티 참조하는 방법 2가지 중 하나. 객체["문자열"] => 동적 프로퍼티 업데이트
      const { name, value } = e.target;
      const newInput = { ...inputs, [name]: value };
      setInputs(newInput);
    },
    [inputs]
  );

  //   const inputRef = useRef();
  return (
    <div>
      <input
        type="text"
        onChange={handleInput}
        value={inputs.text}
        name="text"
      />
      <input
        type="text"
        onChange={handleInput}
        value={inputs.date}
        name="date"
      />
      <button onClick={() => handleSubmit(inputs)}>등록</button>
    </div>
  );
}

export default TodoInput;
