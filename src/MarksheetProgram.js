
import { useState } from "react";
function MarksheetProgram() {
    const [physics, setPhysics] = useState(undefined);
    const [maths, setMaths] = useState(undefined);
    const [english, setEnglish] = useState(undefined);
    const [pe, setPe] = useState(undefined);
    const [hindi, setHindi] = useState(undefined);
    const [res, setRes] = useState(undefined);

    function result() {
        let errorMessage = "";
        let supplyMessage = "";
        let graceMessage = "";
        let graceMarks = 0;
        let total=0
        let failedSubject = false;
        if (parseInt(maths) < 0 || parseInt(maths) > 100) {
            errorMessage += "Maths marks must be between 0 and 100.\n";
        }
        if (parseInt(english) < 0 || parseInt(english) > 100) {
            errorMessage += "English marks must be between 0 and 100.\n";
        }
        if (parseInt(pe) < 0 || parseInt(pe) > 100) {
            errorMessage += "PE marks must be between 0 and 100.\n";
        }
        if (parseInt(physics) < 0 || parseInt(physics) > 100) {
            errorMessage += "Physics marks must be between 0 and 100.\n";
        }
        if (parseInt(hindi) < 0 || parseInt(hindi) > 100) {
            errorMessage += "Hindi marks must be between 0 and 100.\n";
        }
        if (errorMessage) {
            setRes(errorMessage);
        } else {
            if (parseInt(maths) < 28) {
                supplyMessage += "You have supply in Maths.\n";
                failedSubject = true;
            } 
            else if (parseInt(maths) >= 28 && parseInt(maths) < 33) {
                graceMarks = 33 - parseInt(maths);
                graceMessage += `You passed by grace in Maths, and the grace marks are ${graceMarks}.\n`;  
            }

  if (parseInt(english) < 28) {
                supplyMessage += "You have supply in English.\n"
                failedSubject = true
            }
             else if (parseInt(english) >= 28 && parseInt(english) < 33) {
                graceMarks = 33 - parseInt(english);
                graceMessage += `You passed by grace in English, and the grace marks are ${graceMarks}.\n`
            } 

            if (parseInt(physics) < 28) {
                supplyMessage += "You have supply in Physics.\n";
                failedSubject = true;
            } 
            else if (parseInt(physics) >= 28 && parseInt(physics) < 33) {
                graceMarks = 33 - parseInt(physics);
                graceMessage += `You passed by grace in Physics, and the grace marks are ${graceMarks}.\n`
               
            } 

            if (parseInt(pe) < 28) {
                supplyMessage += "You have supply in PE.\n";
                failedSubject = true;
            } else if (parseInt(pe) >= 28 && parseInt(pe) < 33) {
                graceMarks = 33 - parseInt(pe);
                graceMessage += `You passed by grace in PE, and the grace marks are ${graceMarks}.\n`
               
            }

            if (parseInt(hindi) < 28) {
                supplyMessage += "You have supply in Hindi.\n";
                failedSubject = true;
            } else if (parseInt(hindi) >= 28 && parseInt(hindi) < 33) {
                graceMarks = 33 - parseInt(hindi);
                graceMessage += `You passed by grace in Hindi, and the grace marks are ${graceMarks}.\n`
            } 
            if (failedSubject) {
                setRes(supplyMessage);
            } else {
                if(failedSubject!=true){
                 total=parseInt(maths)+parseInt(pe)+parseInt(english)+parseInt(physics)+parseInt(hindi)
                const percentage = total/5
                if (graceMessage) {
                    setRes(`Total Marks: ${total} \n Percentage: ${percentage.toFixed(2)}%\n${graceMessage}`)
                } else {
                    setRes(`Total Marks: ${total} \nPercentage: ${percentage.toFixed(2)}%`);
                }
            }
            }
        }
    }
    return (
        <div>
            <input type="text" placeholder="Enter physics marks" onChange={(e) => setPhysics(e.target.value)} />
            <br />
            <input type="text" placeholder="Enter maths marks" onChange={(e) => setMaths(e.target.value)} />
            <br />
            <input type="text" placeholder="Enter english marks" onChange={(e) => setEnglish(e.target.value)} />
            <br />
            <input type="text" placeholder="Enter PE marks" onChange={(e) => setPe(e.target.value)} />
            <br />
            <input type="text" placeholder="Enter hindi marks" onChange={(e) => setHindi(e.target.value)} />
            <br />

            <input type="submit" value="Result" onClick={result} />
            <h1>{res}</h1>
        </div>
    )
}export default MarksheetProgram;
