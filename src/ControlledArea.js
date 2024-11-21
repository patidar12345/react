import { useState } from "react";

function ControlledArea() {
    const [a, setA] = useState(undefined);
    const [b, setB] = useState(undefined);
    const [res, setRes] = useState(undefined);
    const [selectedArea, setSelectedArea] = useState("")

    function rect() {
        const area = parseInt(a) * parseInt(b);
        setRes(area);
    }

    function triangle() {
        const area2 = (parseInt(a) * parseInt(b)) / 2;
        setRes(area2);
    }

    function handleSubmit() {
        if (selectedArea === "rectangle") {
            rect()
        }
         else if (selectedArea === "triangle") {
            triangle()
        } 
    }

    return (
        <div>
            <input type="text" placeholder="Enter a" onChange={(e) => setA(e.target.value)} />
            <br />
            <input type="text" placeholder="Enter b" onChange={(e) => setB(e.target.value)} />
            <br />
            <input type="radio" name="area" value="rectangle" onClick={() => setSelectedArea("rectangle")} /> Rectangle
            <br />
            <input type="radio" name="area" value="triangle" onClick={() => setSelectedArea("triangle")} /> Triangle
            <br />
            <input type="button" value="Submit" onClick={handleSubmit} />
            <h1>{res}</h1>
        </div>
    );
}
export default ControlledArea;
