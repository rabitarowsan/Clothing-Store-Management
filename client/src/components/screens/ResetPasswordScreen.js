import {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import "./ForgotPasswordScreen.css";

const ResetPasswordScreen = ({history, match}) => {
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const resetPasswordHandler = async(e) => {
        e.preventDefault();

        const config = {
            header: {
                "Content-Type": "application/json",
            },
        };

        if(password !== confirmpassword){
            setPassword("");
            setconfirmPassword("");
            setTimeout(() => {
                setError("")
            },5000 );
            return setError("Passwords do not match");
        }

        try {
            const {data} = await axios.post(
                `/api/auth/passwordreset/${match.params.resetToken}`,
                {password},
                config
            );
            console.log(data);
            setSuccess(data.data);
        } catch(error) {
            setError(error.response.data.error);
            setTimeout(() => {
                setError("");
            }, 5000);
        }
    };

    return (
        <div className="resetpassword-screen ">
            <form onSubmit={resetPasswordHandler} className = "resetpassword-screen__form">
                <h3 className = "resetpassword-screen__title">Reset Password</h3>
                {error && <span className = "error-message">{error}</span>}
                {success && (
                <span className = "success-message">
                    {success} <Link to = "/login"> Login</Link></span>)}
                <div className = "form-group">
                    <label htmlFor ="password">New Password:</label>
                    <input type = "password" required id = "password" placeholder = "Enter New Passord" autoComplete = "true" value = {password} onChange= {(e) => setPassword(e.target.value)}/>
                </div>
                <div className = "form-group">
                    <label htmlFor ="confirmpassword">confirm Password:</label>
                    <input type = "password" required id = "confirmpassword" placeholder = "confirm New Passord" autoComplete = "true" value = {confirmpassword} onChange= {(e) => setconfirmPassword(e.target.value)}/>
                </div>
                <button type = "submit" className = "btn btn-primary">Reset Passord</button>
                </form>       
        </div>

        
    );
};

export default ResetPasswordScreen;