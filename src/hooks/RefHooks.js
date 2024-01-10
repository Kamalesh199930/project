import React, { useEffect, useRef } from "react";
import { useState } from "react";
function RefHooks() {
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  const handleSubmit = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>USE REF</h1>
      <input
        ref={inputRef}
        value={text}
        type="text"
        placeholder="enter text"
        onChange={(e) => setText(e.target.value)}
      />
      {count.current}
      <button onClick={handleSubmit}>submit</button>
    </>
  );
}
export default RefHooks;
