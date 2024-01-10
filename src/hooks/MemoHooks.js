import { useMemo, useState } from "react";
function MemoHooks({ multiplier }) {
  const [count, setCount] = useState(2);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const multipliedValue = useMemo(() => {
    return count * multiplier;
  }, [count, multiplier]);

  return (
    <div>
      <h1>USE MEMO</h1>
      <div> the count is {count}</div>
      <button onClick={handleIncrement}>Increment</button>

      <div>Multiplied by {multipliedValue}</div>
    </div>
  );
}
export default MemoHooks;
