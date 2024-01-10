//CONTEXT HOOKS
import { useContext } from "react"
import { AppContext } from "./ContextHooks"
const DisplayName=()=>{
    const{name}=useContext(AppContext)

return(
    <>
    Name : {name}
    </>
)
}
export default DisplayName