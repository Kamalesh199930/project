import React from "react";
import UseInput from "./UseInput";
function CustomHooks() {
  // const [firstName, setFirstName] = useState("");
  const [firstName, bindFirstName, resetFirstName] = UseInput("");
  const [lastName, bindLastName, resetLastName] = UseInput("");
  const handleSubmit = () => {
    alert("Hello " + firstName + "" + lastName);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <h1>CUSTOM HOOKS</h1>
      <label>First Name</label>
      <input type="text" {...bindFirstName} />
      <label>Last Name</label>
      <input type="text" {...bindLastName} />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default CustomHooks;
