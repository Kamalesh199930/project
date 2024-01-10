//Props
import PropTypes  from "prop-types"
import Props from "./Props"


const Person = ({name,age,email,children})=>{
    
return(
    <div>
        <Props>
        <h1>Props</h1>
        <h4>{name}</h4>
        <h4>{age}</h4>
        <h4>{email}</h4>
        <ul>
            {children && children.map((child,index)=>{
                return  <li key={index}>{child}</li>
                    
                
            })}
        </ul>

        </Props>
    </div>
)
}
Person.propTypes={
    name:PropTypes.string,
    email:PropTypes.string,
    age:PropTypes.number,
    children:PropTypes.array


}
export default Person