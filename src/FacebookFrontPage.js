
import { useRef } from "react";
function FacebookFrontPage() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const genderRef = useRef();
  const dateRef = useRef();
  const monthRef = useRef();
  const yearRef = useRef();

  const startYear = 1990;
  const endYear = 2024;
  const years = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  const startDay = 1;
  const endDay = 31;
  const days = [];
  for (let day = startDay; day <= endDay; day++) {
    days.push(day);
  }

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ]

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    const email = emailRef.current.value
    const password = passwordRef.current.value
    const gender = genderRef.current.value

    const selectedDay = dateRef.current.value
    const selectedMonth = monthRef.current.value
    const selectedYear = yearRef.current.value

    alert(`
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Password: ${password}
      Date of Birth: ${selectedDay}/${selectedMonth}/${selectedYear}
      Gender: ${gender}
    `);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <form onSubmit={handleSubmit}>

        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "48%" }}>
            <label>First Name:</label>
            <input
              type="text"
              ref={firstNameRef}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ width: "48%" }}>
            <label>Last Name:</label>
            <input
              type="text"
              ref={lastNameRef}
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

     
        <div
          style={{
            marginBottom: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "30%" }}>
            <label>Date of Birth:</label>
            <select
              ref={dateRef}
              defaultValue={startDay} 
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
          <div style={{ width: "30%" }}>
            <select
              ref={monthRef}
              defaultValue={months} 
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              {months.map((month, index) => (
                <option key={month} value={index + 1}>
                  {month} 
                </option>
              ))}
            </select>
          </div>
          <div style={{ width: "30%" }}>
            <select
              ref={yearRef}
              defaultValue={startYear} 
              required
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

    
        <div style={{ marginBottom: "15px" }}>
          <label>Gender:</label>
          <div style={{ marginTop: "5px" }}>
            <input
              type="radio"
              ref={genderRef}
              name="gender"
              value="Male"
              required
              style={{ marginRight: "5px" }}
            />
            <label>Male</label>
            <input
              type="radio"
              ref={genderRef}
              name="gender"
              value="Female"
              required
              style={{ marginLeft: "15px", marginRight: "5px" }}
            />
            <label>Female</label>
            <input
              type="radio"
              ref={genderRef}
              name="gender"
              value="Custom"
              required
              style={{ marginLeft: "15px", marginRight: "5px" }}
            />
            <label>Custom</label>
          </div>
        </div>

     
        <div style={{ marginBottom: "15px" }}>
          <label>Email Address or Mobile Number:</label>
          <input
            type="text"
            ref={emailRef}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

    
        <div style={{ marginBottom: "15px" }}>
          <label>Password:</label>
          <input
            type="password"
            ref={passwordRef}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

       
        <div style={{ marginBottom: "15px" }}>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default FacebookFrontPage;
