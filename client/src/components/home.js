import React, {useState} from "react";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./loginform.css"


export const Home = () => {
    
    
    
    
    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }
    
    return (
        <div className="cover">
            <h1>Welcome to Our Shop</h1>
            <h1>"Logo/Shop Name"</h1>
            
            <h2>Login/Signup Now and Start Shopping </h2>

            

            
            
        </div>
    )
}

export default Home