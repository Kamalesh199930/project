import { useState } from "react";

function StateHooks() {
  const [count, setCount] = useState(0);
  const [toggle,setToggle]=useState(false)
  const [name,setName]=useState("")

  return (
    <div>
      <h1>USE STATE HOOKS</h1>
      {count}
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>decrement</button><br/>
      {toggle ? "true" : "false"}
      <button onClick={()=>setToggle(!toggle)}>Toggle</button><br/>
      <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}>

      </input>
      <button onClick={()=>{
        console.log(name)
      }}>Submit</button>
    </div>
  );
}
export default StateHooks;
