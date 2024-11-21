import { useRef } from "react";
function uncontrolledcomponent(){
    let txtref=useRef()
    function toCheck(e){
        let str=txtref.current.value.toLowerCase()
        let c1=0
        let c2=0
        for(let i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
            c1++
        }
        else if(str[i]==' '){
            continue
        }
        else{
            c2++
        }
    }
alert(str)
e.preventDefault()
    }
    return (
        <div>
          <form onSubmit={toCheck}>
            <input type="text" ref={txtRef} placeholder="Enter your name" />
            <input type="submit" value="Count vowels and consonants" />
          </form>
        </div>
      );
      
}
export default uncontrolledcomponent