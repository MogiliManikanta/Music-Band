import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate();
  // const [credentials, setCredentials] = useState({firstname:"",lastname:"",branch:"",semester:"",gender:"",email:"",phone:"" });
 

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");

  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          firstname : firstname,
          lastname:lastname,
          branch: branch,
          semester: semester,
          gender: gender,
          email: email,
          phone :phone
        }),
      });
      let resJson = await res.json();
      
      if (res.status === 200) {
        setFirstName("");
        setEmail("");
        setBranch("")
        setSemester("")
        setLastName("")
        setGender("")
        setPhone("")
        alert("Registration successful!")
        navigate('/')
      } else {
        // setMessage("Some error occured");
      }
    } catch (err) {
      alert(err);
    }
  };

//   const onChange = (e)=>{
//     setCredentials({...credentials, [e.target.name]: e.target.value})
// }
 

  return (
    <>
      <div className="container px-5 ">
        <div className="title" style={{color:"#0a0a29"}} >Registration Form</div>
        <div className="form" >
          <div className="input_field">
            <label>First Name</label>
            <input type="text" className="input" value={firstname}  onChange={(e) => setFirstName(e.target.value)} name="firstname" />
          </div>

          <div className="input_field">
            <label>Last Name</label>
            <input type="text" className="input" value={lastname}  onChange={(e) => setLastName(e.target.value)} name="lastname" />
          </div>

          <div className="input_field">
            <label>Branch</label>
            <input type="text" className="input" value={branch}  onChange={(e) => setBranch(e.target.value)} name="branch" />
          </div>

          <div className="input_field">
            <label>Semester</label>
            <input type="number" className="input" value={semester}  onChange={(e) => setSemester(e.target.value)} name="semester" />
          </div>

          <div className="input_field">
            <label>Gender</label>
            <input type="text" className="input" value={gender}  onChange={(e) => setGender(e.target.value)} name="gender" />
          </div>

          <div className="input_field">
            <label>Email Address</label>
            <input type="text" className="input"  value={email}   onChange={(e) => setEmail(e.target.value)} name="email" />
          </div>

          <div className="input_field">
            <label>Phone Number</label>
            <input type="text" className="input" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" />
          </div>

          
          

          <div className="input_field">
            {/* <input type="submit" value="Register" className="btn" /> */}
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
           </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
