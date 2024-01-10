import { useState,createContext } from "react";
import GetName from "../hooks/GetName";
import DisplayName from "../hooks/DisplayName";



export const AppContext = createContext(null)
 export default function ContextHooks(){
    const [name,setName] = useState("")
return(
    <div>
        <h1>USE CONTEXT REACT HOOKS</h1>
        <AppContext.Provider value={{name,setName}}>
        <GetName />
        <br/>
        <DisplayName/>
        </AppContext.Provider>
    </div>
)
}
