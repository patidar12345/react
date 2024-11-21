import { useRef } from "react";

function DropdownList()
{
    const sel = useRef([])
    function fun(e)
    {
        let course1="";
        console.log(sel.current.selectedOptions)
        const selectedOptions = Array.from(sel.current.selectedOptions, 
            option => option.value);
        alert(selectedOptions)
       e.preventDefault()
    }
    return(<div>
        <form onSubmit={fun}>
            <select  ref={sel} >
                <option value="C">C</option>
                <option value="CPP">CPP</option>
                <option value="DS">DS</option>
                <option value="REACT">REACT</option>
            </select>
            <br/>
            <input type="submit" value="Submit" />
        </form>
    </div>)
}
export default DropdownList;