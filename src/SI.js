import { useState } from "react";
 function SI(){
const[p,setP]=useState(undefined)
const[r,setR]=useState(undefined)
const[t,setT]=useState(undefined)
const[res,setRes]=useState(undefined)


function CalcSI(e){
let si=(parseInt(p) *parseInt(r) *parseInt(t))/100
setRes(si)
e.preventDefault()
}
return(<div>
    <input type="text" placeholder="enter p" onChange={(e)=>setP(e.target.value)}/>
    <br/>

<input type="text" placeholder="enter r" onChange={(e)=>setR(e.target.value)}/>
<br/>

<input type="text" placeholder="enter t" onChange={(e)=>setT(e.target.value)}/>
<br/>

<input type="button" value="click" onClick={CalcSI}/>

<h1>{res}</h1>
</div>)
}
export default SI