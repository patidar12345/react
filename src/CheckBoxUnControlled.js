
import { useRef } from "react";

function CheckBoxUnControlled()
{
   const chk1 = useRef()
   const chk2 = useRef()
   const chk3 = useRef()
   function selectCourse(e)
   {
    let course1="",course2="",course3=""
    if(chk1.current.checked){
        course1=chk1.current.value
    }
    else
    {
        course1=' '
    }
    if(chk2.current.checked){
        course2=chk2.current.value
    }
    else
    {
        course2=' '
    }
    if(chk3.current.checked){
        course3=chk3.current.value
    }
    else
    {
        course3=' '
    }
    alert("selected course is "+(course1+ " " +course2+ " " +course3))
    e.preventDefault()
   }
    return (<div>
       <form onSubmit={selectCourse}>
        <input type="checkbox" value="C" ref={chk1}/>C <br/>
        <input type="checkbox" value="CPP" ref={chk2} />CPP <br/>
        <input type="checkbox" value="DS" ref={chk3} />DS <br/>
        <input type="submit" name="btnsubmit" value="Select Course" />
       </form>
    </div>)
}

export default CheckBoxUnControlled;