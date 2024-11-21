
import { useState } from "react";
function FactorialProgramControlled(){
    const[num,setNum]=useState(undefined)
    const[res,setRes]=useState(undefined)

    function calci(e){
        const number=parseInt(num)
        let table=""
        for(let i=1;i<=10;i++){
            table+=num*i
            setRes(table)
        }
        e.preventDefault()
    }
    return(<div>
        <input type="text" placeholder="enter a number" onChange={(e)=>setNum(e.target.value)}/>
        <br/>
        <input type="submit" value="click" onClick={calci}/>
        <br/>
        <h1>{res}</h1>
    </div>)
}
export default FactorialProgramControlled