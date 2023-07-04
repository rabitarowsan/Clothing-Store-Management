import React, {useState,useEffect} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./RegisterScreen.css";

const RegisterScreen = ({history}) => {
    
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        if(localStorage.getItem("authToken")){
            history.push("/");
        }
    },[history]);

    const registerHandler = async (e) =>{
        e.preventDefault();
        const config = {
            header: {
                "Content-Type": "application/json"
            },
        };
        if(password !== confirmpassword){
            setPassword("");
            setConfirmPassword("");
            setTimeout(() => {
                setError("")
            },5000 );
            return setError("Passwords do not match");
        }
        try{
            const {data} = await axios.post("/api/auth.register", {username, email,password,address,phone},config);
            localStorage.setItem("authToken", data.token);

            history.push("/");
        } catch(error){
            setError(error.response.data.error);
            setTimeout(() =>{
                setError("");
            },5000);
        }
    };

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    
    return (
        <div className="register-screen ">
            <form onSubmit={registerHandler} className = "register-screen__form">
                <h3 className = "register-screen__title">Register</h3>
                {error && <span className = "error-message">{error}</span>}
                <div className = "form-group">
                    <label htmlFor ="name">Username:</label>
                    <input type = "text" required id = "name" placeholder = "Enter Username" value = {username} onChange= {(e) => setUsername(e.target.value)}/>
                </div>
                <div className = "form-group">
                    <label htmlFor ="email">Email:</label>
                    <input type = "email" required id = "email" placeholder = "Enter email address" value = {email} onChange= {(e) => setEmail(e.target.value)}/>
                </div>
                <div className = "form-group">
                    <label htmlFor ="password">Password:</label>
                    <input type = "text" required id = "password" placeholder = "Enter Password" value = {password} onChange= {(e) => setPassword(e.target.value)}/>
                </div>
                <div className = "form-group">
                    <label htmlFor ="confirmpassword">Confirm Password:</label>
                    <input type = "text" required id = "confirmpassword" placeholder = "Confirm Password" value = {confirmpassword} onChange= {(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <div className = "form-group">
                    <label htmlFor ="address">Address:</label>
                    <input type = "text" required id = "address" placeholder = "Enter address" value = {address} onChange= {(e) => setAddress(e.target.value)}/>
                </div>
                <div className = "form-group">
                    <label htmlFor ="phone">Phone:</label>
                    <input type = "number" required id = "phone" placeholder = "Enter phone number" value = {phone} onChange= {(e) => setPhone(e.target.value)}/>
                </div>
                <button type = "submit" className = "btn btn-primary">Register</button>
                <span className = "register-screen__subtext"> Already have an account? <link to = "/login">Login</link></span>
                </form>       
        </div>

        
    );
};

export default RegisterScreen;