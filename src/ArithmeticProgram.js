import { useState } from "react";
function ArithmeticProgram(){
const[a,setA]=useState(undefined)
const[b,setB]=useState(undefined)
const[res,setRes]=useState(undefined)

function Add(){
    const result=parseInt(a)+parseInt(b)
    setRes(result)
}
function subtract(){
    const result=parseInt(a)-parseInt(b)
    setRes(result)
}
function multiply(){
   const  result=parseInt(a)*parseInt(b)
    setRes(result)
}
function divide(){
   const result=parseInt(a)/parseInt(b)
    setRes(result)
}

    return(<div>
        <input type="text" placeholder="enter a" onChange={(e)=>setA(e.target.value)}/>
        <br/>
        <input type="text" placeholder="enter b" onChange={(e)=>setB(e.target.value)}/>
        <br/>
<input type="radio" name="value" onClick={Add}></input>addition
<br/>
<input type="radio" name="value" onClick={subtract}></input>subtract
<br/>
<input type="radio" name="value" onClick={multiply}></input>multiply
<br/>
<input type="radio" name="value" onClick={divide}></input>division
<br/>
<h1>{res}</h1>
    </div>)
}
export default ArithmeticProgram