import { useInputs } from "../hooks/useInputs";

// // reducer 함수 : 액션의 값에 따라 상태를 관리하는 함수
// function reducer(state, action) {
//   switch (action.type) {
//     case "CHANGE_INPUT":
//       return {
//         ...state,
//         inputs: {
//           ...state.inputs,
//           [action.name]: action.value,
//         },
//       };
//     case "INCREASE_COUNTER":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     default:
//       return state;
//   }
// }

function Inputs() {
  // useReducer(reducer함수) : [상태값, 디스패치 함수] 반환
  // dispatch : 액션을 발생시키는 함수
  const [state, dispatch] = useInputs({
    name: "",
    email: "",
    title: "",
  });
  const { name, email, title } = state;
  console.log(state);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE_INPUT", name, value });
  };

  //   const handleCounter = () => {
  //     dispatch({ type: "INCREASE_COUNTER" });
  //   };
  return (
    <div>
      <p>
        입력값 : {name} ({email}) / {title}
      </p>
      <input type="text" onChange={handleInputs} name="name" />
      <input type="text" onChange={handleInputs} name="email" />
      <input type="text" onChange={handleInputs} name="title" />
    </div>
  );
}

export default Inputs;
