import React from "react";
import { useState } from "react";
function Form(props) {
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;


// import React from "react";

// import { useState } from "react";
// function Form(props){
//     const [name,setName]= useState("")
// const submitHandler =(e)=>{
//     e.preventDefault();
//  console.log(name)
// }

// return( 
// <div>
//     <form onSubmit={submitHandler}>
// <input value={name} type="text" onChange={(e)=>{
//     setName(e.target.value)
// }}></input>
// <button type="submit">Submit</button>
// </form>
// </div>

    
// )
// }
// export default Form;







