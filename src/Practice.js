// import { useRef, useState } from "react";

// function Practice()
// {
//     const rd1 = useRef()
//     const rd2 = useRef()
//     const txt1 = useRef()
//     const txt2 = useRef()
//     const[v1,setV1] = useState()
//     const[v2,setV2] = useState()
//    function fun(e)
//    {
//     console.log(rd1.current.checked)
//     if(rd1.current.checked)
//     {
//         setV1('block')
//         setV2('block')
//     }
//     else
//     {
//         setV1('block')
//         setV2('none')
//     }
//    }
//    function calc(e)
//    {
//       alert("rno is "+txt1.current.value + "name is "+txt2.current.value)
//       e.preventDefault()
//    }
//     return(
//         <div>
//             <form>
//             <input type="radio" name="r" ref={rd1} value="both" onClick={fun} />both<br/>
//             <input type="radio" name="r" ref={rd2}  value="one" onClick={fun} />ONE<br/>
//             <input type="text" id="rno" ref={txt1} style={{display:v1}}  placeholder="Enter rno" />
//             <br/>
//             <input type="text" id="name" ref={txt2} style={{display:v2}} placeholder="Enter name" />
//              <br/>
//              <input type="submit" onClick={calc} value="Click"/>
//             </form>
//         </div>
//     )
// }

// export default Practice




// import { useRef,useState } from "react";
// function Practice(){
//     const rectangle=useRef()
//     const circle=useRef()
//     const triangle=useRef()
//     const length=useRef()
//     const breadth=useRef()
//     const radius=useRef()
//     const base=useRef()
//     const height=useRef()
//     const [v1,setV1]=useState("block")
//     const [v2,setV2]=useState("block")
//     const [v3,setV3]=useState("block")
//     function check(e){
// if (rectangle.current.checked){
//     setV1("block")
//     setV2("none")
//     setV3("none")
// }
// else if(circle.current.checked){
//     setV1("none")
//     setV2("block")
//     setV3("none")
// }
// else{
//     setV1("none")
//     setV2("none")
//     setV3("block")
// }
//     }

//     function calcSi(e){
//         let area;
//         if(rectangle.current.checked){
//             let l=length.current.value
//             let b=breadth.current.value
//              area=l*b
//         }
//         else if(circle.current.checked){
//             let r=radius.current.value
//             area=3.14*r*r
//         }
//         else{
//             let b=base.current.value
//             let h=height.current.value
//              area=0.5*b*h
//         }
//         alert(`the calculated area is ${area}`)
//     e.preventDefault()
//     }
    
//     return (
//         <div>
//           <form>
//             <input type="radio" name="shape" ref={rectangle} onClick={check} />
//             <label For="rectangle">Rectangle</label>
//             <br />
//             <input type="radio" name="shape" ref={circle} onClick={check} />
//             Circle
//             <br />
//             <input type="radio" name="shape" ref={triangle} onClick={check} />
//             Triangle
//             <br />
    
//             <div style={{ display: v1 }}>
//               <input type="number" ref={length} placeholder="Enter length" />
//               <br />
//               <input type="number" ref={breadth} placeholder="Enter breadth" />
//               <br />
//             </div>
    
         
//                <div style={{ display: v2 }}>
//               <input type="number" ref={radius} placeholder="Enter radius" />
//               <br />
//             </div>
    
          
//             <div style={{ display: v3 }}>
//               <input type="number" ref={base} placeholder="Enter base" />
//               <br />
//               <input type="number" ref={height} placeholder="Enter height" />
//               <br />
//             </div>
    
//             <button type="button" onClick={calcSi}>
//               Calculate Area
//             </button>
//           </form>
//         </div>
//       );
// }
// export default Practice


// import { useRef } from "react";
// function Practice() {
//   const sel = useRef([]);
//   const courseFees = {
//     c: 1000,
//     cpp: 1200,
//     dsa: 15000,
//     react: 2000,
//     angular: 2500,
//     nextjs: 3000,
//   };
//   function calculateFees(e) {
//     e.preventDefault();

//     const selectedOptions = sel.current.selectedOptions;
//     let totalFee = 0;
//     Array.from(selectedOptions).forEach(option => {
//       totalFee += courseFees[option.value];
//     });
//     alert(`The total fee of selected courses is ₹${totalFee}`);
//   }
//   return (
//     <div>
//       <form onSubmit={calculateFees}>
        
//         <div>
//           <h1>Basic Courses</h1>
//           <div>
//             <input type="checkbox" ref={c} id="c" />
//             <label htmlFor="c">C - ₹1000</label>
//           </div>
//           <div>
//             <input type="checkbox" ref={cpp} id="cpp" />
//             <label htmlFor="cpp">C++ - ₹1200</label>
//           </div>
//           <div>
//             <input type="checkbox" ref={dsa} id="dsa" />
//             <label htmlFor="dsa">DSA - ₹15000</label>
//           </div>
//         </div>

       
//         <div>
//           <h3>Advanced Courses </h3>
//           <div>
//             <input type="radio" ref={react} id="react" />
//             <label htmlFor="react">React - ₹2000</label>
//           </div>
//           <div>
//             <input type="radio" ref={angular} id="angular" />
//             <label htmlFor="angular">Angular - ₹2500</label>
//           </div>
//           <div>
//             <input type="radio" ref={nextjs} id="nextjs" />
//             <label htmlFor="nextjs">Next.js - ₹3000</label>
//           </div>
//         </div>

    
//         <button type="submit">Calculate Total Fee</button>
//       </form>

  
  
//     </div>
//   );
// }

// export default Practice;





