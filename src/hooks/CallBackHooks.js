import { useCallback, useState } from "react";
const functionCounter = new Set();
function CallBackHooks() {
  const [count, setCount] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);
  const increment = useCallback(()=>{
    setCount((count)=>count+1)
  },[count])
  const decrement =useCallback(()=>{
    setCount((count)=>count-1)
  },[count])
  const incrementOtherCounter = useCallback(()=>{
    setOtherCounter((otherCounter)=>otherCounter+1)
  },[otherCounter])
  functionCounter.add(increment);
  functionCounter.add(decrement);
  functionCounter.add(incrementOtherCounter);
  console.log(functionCounter.size);
  return (
    <><h1>USE CALL BACK</h1><div>
      Count:{count}
      <br />
      otherCounter:{otherCounter}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementOtherCounter}>
        Increment With Other State
      </button>
    </div></>
  );
}
export default CallBackHooks;
