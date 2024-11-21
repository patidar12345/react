
import { useState } from "react";
function TrafficSignalProgram() {
  const [c, setC] = useState("Red")
  function changeColor() {
    if (c === "Red") {
      setC("Yellow");
      setTimeout(() => setC("Green"), 1000);
    } else if (c === "Yellow") {
      setC("Green");
      setTimeout(() => setC("Red"), 1000);
    } else if (c === "Green") {
      setC("Red");
      setTimeout(() => setC("Yellow"), 1000);
    }
  }

  if (c === "Red" || c === "Yellow" || c === "Green") {
    setTimeout(changeColor, 1000); 
  }

  return (
    <div
      style={{
        width: "200px",
        height: "500px",
        backgroundColor: "black",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: c === "Red" ? "red" : "black",
          borderRadius: "50%",
          margin: "20px auto",
        }}
      />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: c === "Yellow" ? "yellow" : "black",
          borderRadius: "50%",
          margin: "20px auto",
        }}
      />
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: c === "Green" ? "green" : "#333",
          borderRadius: "50%",
          margin: "20px auto",
        }}
      />
      <h3 style={{ color: "white", marginTop: "20px" }}>{c}</h3>
    </div>
  );
}

export default TrafficSignalProgram;





