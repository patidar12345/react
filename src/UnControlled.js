import { useRef } from "react";
function UnControlled(){
    let txtRef=useRef()
    function toCheck(e){
       
        let str=txtRef.current.value.toLowerCase()
        var c1=0
        var c2=0
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
alert('total vowel is '+c1+'total consonant is'+c2)
e.preventDefault()
    }
    return (
        <div>
          <form onSubmit={toCheck}>
            <input type="text" ref={txtRef} placeholder="Enter your name" />
            <br/>
            <br/>
            <input type="submit" value="Count vowels and consonants" />
          </form>
        </div>
      );
}
export default UnControlled


import { useRef } from "react";
function UnControlled(){
    let txtRef=useRef()
    function validate(e){
        let str=txtRef.current.value
        let message='valid name'
        for(let i=0;i<str.length;i++){
            let char=str[i]
            if(!((char>='A' && char<='Z') || (char>='a'&&char<='z') || (char==' '))){
                message='invalid name'
                break;
            }
        }
        alert(message)
        e.preventDefault()
    }
    return(<div>
        <form onSubmit={validate}>
            <input type="text" ref={txtRef} placeholder="enter your name"/>
            <br/>
            <br/>
            <input type="submit" value="valid name or not"/>
        </form>
    </div>)
}
export default UnControlled






import{useRef} from "react"
function UnControlled(){
    let txtRef=useRef()
    function valid(e){
let email=txtRef.current.value
let message=''
let dotpos=0
let atpos=0
let i=0
for(let data of email){
    if(data=='.'){
        dotpos+=i
    }
    if(data=='@'){
        atpos+=i
    }
    i++
}
if(dotpos==0 || atpos==0 ||atpos>dotpos||(dotpos-atpos)<3||dotpos==email.length-1){
    message='invalid email id'
}
else{
    message='valid email id'
}
alert(message)
e.preventDefault()
}
return(<div>
    <form onSubmit={valid}>
        <input type="text" ref={txtRef} placeholder="enter your email"/>
        <br/>
        <br/>
        <input type="submit" value="valid email or not"/>
    </form>
</div>)
}
export default UnControlled

    


