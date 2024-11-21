// import { useState } from "react";
// function ControlledExample(){
//     const[a,setA]=useState(undefined)
//     const[b,setB]=useState(undefined)
//     const[res,setRes]=useState(undefined)

//     function add(e){
//         let c=parseInt(a)+parseInt(b)
//         setRes('addition is '+c)
//         e.preventDefault()
//     }

//     return(<div>
//         <form onSubmit={add}>
//             <input type="text" placeholder="enter first number" onChange={(e)=>setA(e.target.value)}/>
//             <br/>
//             <input type="text" placeholder="enter second number" onChange={(e)=>setB(e.target.value)}/>
//             <br/>
// <input type="submit" name="btnsubmit" value="Add"/>
//         </form>
//         {res}
//     </div>)
// }
// export default ControlledExample









// import { useState } from "react";
// function ControlledExample(){
//     const[p,setP]=useState(undefined)
//     const[r,setR]=useState(undefined)
//     const[t,setT]=useState(undefined)
//     const[res,setRes]=useState(undefined)

// function SI(e){
//     let c=parseInt(p*r*t)/100
//     setRes('simple interest is :'+c)
//     e.preventDefault()
// }
// return(<div>
//     <form onSubmit={SI}>
//         <input type="text" placeholder="enter principal" onChange={(e)=>setP(e.target.value)}/>
//         <br/>
//         <input type="text" placeholder="enter rate" onChange={(e)=>setR(e.target.value)}/>
//         <br/>
//         <input type="text" placeholder="enter time" onChange={(e)=>setT(e.target.value)}/>
//         <br/>
//         <input type="submit" value="click"/>
//     </form>
//     <br/>
//     {res}
// </div>)
// }
// export default ControlledExample



// import { useState } from "react";
// function ControlledExample(){
//     const[a,setA]=useState(undefined)
//     const[b,setB]=useState(undefined)
//     const[res,setRes]=useState(undefined)

//     function add(){
//         let c=parseInt(a)+parseInt(b)
//         setRes('addition is'+c)
//     }
//     function subtract(){
//         let c=parseInt(a)-parseInt(b)
//         setRes('subtract is'+c)
//     }
//     function divide(){
//         let c=parseInt(a)/parseInt(b)
//         setRes('divide is'+c)
//     }
//     function multiply(){
//         let c=parseInt(a)*parseInt(b)
//         setRes('multiply is'+c)
//     }

// return(<div>
//    <input type="text" placeholder="enter a" onChange={(e)=>setA(e.target.value)}/>
//    <br/>
//    <br/>
//    <input type="text" placeholder="enter b" onChange={(e)=>setB(e.target.value)}/>
// <br/>
// <br/>
// <input type="radio" name="value" onClick={add}/>Add
// <br/>
// <input type="radio" name="value" onClick={subtract}/>subtract
// <br/>
// <input type="radio" name="value" onClick={divide}/>divide
// <br/>
// <input type="radio" name="value" onClick={multiply}/>multiply
// <br/>
// <br/>
// <input type="button" value="submit"/>
// <br/>
// <h1>result is{res}</h1>
// </div>)
//  }
// export default ControlledExample









