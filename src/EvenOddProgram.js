import{useState} from "react";
function EvenOddProgram(){
    const[num,setNum]=useState(undefined)
    const[res,setRes]=useState(undefined)

    function OddEven(){
        if(parseInt(num)%2==0){
            setRes("even")
        }
        else{
            setRes("odd")
        }
    }

return(<div>
    <input type="text" placeholder="enter a number" onChange={(e)=>setNum(e.target.value)} />
    <br/>
    <input type="button" value="click" onClick={OddEven}/>
    <h1>{res}</h1>
</div>)
}
export default EvenOddProgram



