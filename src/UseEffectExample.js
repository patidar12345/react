import {useState,useEffect } from "react";
function UseEffectExample(){
let [count,setcount]=useState(0)


useEffect(()=>{
    document.title=`welcome ${count}`
},[count]);

function ChangeCount(){
    count+=1
    setcount(count)
}
return(<div>
    <input type="button" value="click" onClick={ChangeCount}/>
    <br/>
    <h1>useEffect example ${count}</h1>
</div>)
}
export default UseEffectExample;




import {useState,useEffect } from "react";
function UseEffectExample(){
let [count,setcount]=useState(0)
useEffect(()=>{
    document.title=`welcome ${count}`
},[count]);
function increment(){
    count+=1
    setcount(count)
}
function decrement(){
    count-=1 
    setcount(count)
}
function reset(){
    count=0
    setcount(count)
}
return(<div>
    <input type="button" value="increment" onClick={increment}/>
    <br/>
    <h1>counter:{count}</h1>
    <input type="button" value="decrement" onClick={decrement}/>
    <br/>
    <br/>
    <input type="button" value="reset" onClick={reset}/>
</div>)
}
export default UseEffectExample





