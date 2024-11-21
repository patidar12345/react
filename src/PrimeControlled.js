
import{useState}from "react"
function PrimeControlled(){
    const[num,setNum]=useState(undefined)
    const[res,setRes]=useState(undefined)

    function CheckPrime(e){
const number=parseInt(num)
if(number%2==0 && number!=2){
    setRes("not prime")
}
else{
    let count=0
for(let i=2;i<number;i++){
if(number%i==0){
    count++
    break;
}
}
if(count==1){
    setRes("not prime")
}
else{
    setRes("prime")
}

e.preventDefault()
}
    }
    return(<div>
        <input type="text" placeholder="enter number" onChange={(e)=>setNum(e.target.value)}/>
<br/>
<br/>
<input type="submit" value="check" onClick={CheckPrime}/>
<br/>
<h1>{res}</h1>
    </div>)

}
export default PrimeControlled
