import { useRef } from "react";
import { useInputs } from "../../hooks/useInputs";
import { useTodoDispatch } from "../../contexts/todos";

function TodoCreate() {
  const dispatch = useTodoDispatch();
  const nextId = useRef(4);

  const [inputs, inputDispatch] = useInputs({
    text: "",
  });

  const onCreate = () => {
    dispatch({ type: "CREATE_TODO", text: inputs.text, id: nextId.current });
    nextId.current++;
    // inputs 상태 빈문자열로 업데이트
    inputDispatch({ type: "CHANGE_INPUT", name: "text", value: "" });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    inputDispatch({ type: "CHANGE_INPUT", name, value });
  };

  return (
    <form
      // form태그의 onSubmit 새로고침 방지
      onSubmit={(e) => {
        e.preventDefault();
        onCreate();
      }}
    >
      <input
        type="text"
        name="text"
        onChange={handleInput}
        value={inputs.text}
      />
      <button>등록</button>
    </form>
  );
}

export default TodoCreate;
