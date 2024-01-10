import { useReducer } from "react";
import React from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      throw Error("Invalid action");
  }
}
function ReducerHooks() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  //   const [count, setCount] = useState(0);

  return (
    <div>
      <h1>USE REDUCER</h1>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
export default ReducerHooks;
