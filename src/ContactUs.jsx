/*import React from "react";
  const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us Page</h1>
    </div>
  );
};
export default ContactUs;*/

import React, {useState,setState} from 'react';
import './RegistrationForm.css'
import { Link } from "react-router-dom";

function ContactUs() {
    

    
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [mobile,setMobile] = useState(null);
    const [address,setAddress] = useState(null);
    const [fathersname,setFathersName] = useState(null);
    const [mothersname,setMothersName] = useState(null);
    const [aadharno,setAadharNo] = useState(null);
    const [dateofbirth,setDateofBirth] = useState(null);


    const handleInputChange = (e) => {
        const {id , value} = e.target;
        
        if(id === "fullName"){
            setFullName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "mobile"){
            setMobile(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        if(id === "fathersname"){
            setFathersName(value);
        }
        if(id === "mothersname"){
            setMothersName(value);
        }
        if(id === "aadharno"){
            setAadharNo(value);
        }
        if(id === "date-of-birth"){
            setDateofBirth(value);
        }


    }

    const handleSubmit  = () => {
        console.log(fullName,email,password,mobile,address,fathersname,mothersname,aadharno,dateofbirth);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="fullName"> Name </label>
                    <input className="form__input" type="text" value={fullName} onChange = {(e) => handleInputChange(e)} id="fullName"/>
                </div>
               
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                <div className="mobile">
                    <label className="form__label" for="mobile">Mobile No. </label>
                    <input className="form__input" type="text" id="mobile" value={mobile} onChange = {(e) => handleInputChange(e)} placeholder="+91"/>
                </div>
                <div className="address">
                    <label className="form__label" for="address">Address </label>
                    <input className="form__input" type="text" id="address" value={address} onChange = {(e) => handleInputChange(e)}/>
                </div>
                <div className="fathersname">
                    <label className="form__label" for="fathersname">Father's Name </label>
                    <input className="form__input" type="text" id="fathersname" value={fathersname} onChange = {(e) => handleInputChange(e)} />
                </div>
                <div className="mothersname">
                    <label className="form__label" for="mothersname">Mother's Name </label>
                    <input className="form__input" type="text" id="mothersname" value={mothersname} onChange = {(e) => handleInputChange(e)} />
                </div>
                <div className="aadharno">
                    <label className="form__label" for="aadharno">Aadhar No. </label>
                    <input className="form__input" type="text" id="aadharno" value={aadharno} onChange = {(e) => handleInputChange(e)}/>   
                </div>
                <div className="dateofbirth">
                    <label className="form__label" for="dateofbirth">Date of Birth </label>
                    <input className="form__input" type="text" id="dateofbirth" value={dateofbirth} onChange = {(e) => handleInputChange(e)}/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default ContactUs

