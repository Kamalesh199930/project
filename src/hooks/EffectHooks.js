import {useEffect,useState} from "react"


function EffectHooks(){
const [count1,setCount1]=useState(0)
const [count2,setCount2]= useState(0)

useEffect(()=>{
    console.log("if we use[]it generates one time,if we used value inside[] it only takes that ")
},[count2])


return(
<div>
<h1>USE EFFECT</h1>
<h1>{count1}</h1>
<button onClick={()=>setCount1(count1=>count1+1)}>Increment</button>
<h1>{count2}</h1>
<button onClick={()=>setCount2(count2=>count2+1)}>Decrement</button>

</div>
)


}
export default EffectHooks