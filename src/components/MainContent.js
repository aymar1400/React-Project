import React, { useState } from "react";
import Axios from 'axios';

function MainContent() {

    //usernameReg & passwordReg are the variable names for username and password
    //You use the setUsernameReg to set it in the state.

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    //const [emailReg, setEmailReg] = useState("");

    // Logs the saved username and password that was typed in but it refreshes immediately

    const onSubmit = () => {
        console.log("Hello " + usernameReg)
        console.log("Your Password is " + passwordReg)
    }

    //the event is getting passed into this which is the user typing into the text box, that value whatever it is, is then stored using the state function setUsernameReg

    const getUsername = (event) => {
        const localUsername = event.target.value;
        setUsernameReg(event.target.value);

    }

    const getPassword = (event) => {
        const localPassword = event.target.value;
        setPasswordReg(event.target.value);
    }

    //Not sure if we are doing email but I have it included just incase
    
    const getEmail = (event) => {
        const localEmail = event.target.value;
    }
    
    const addNewUser = () => {
        console.log("test1")
        Axios.post("http://localhost:3001/create", {
            username: usernameReg, 
            password: passwordReg,
        }).then(() => {
            console.log("success");
        })
    }
    

    // Create Simple two Form layout with Register and Login
    return (
        <>
            <div className="main-container">
            <h2 className="main-h2">Register Here</h2>
            <form className="register-container">
                <main>
                    <h2>Username</h2>
                    <input type="text" id="username" onChange={getUsername} /> 
                    <br />
                    <h2>Email</h2>
                    <input type="text" id="email" onChange={getEmail}/>
                    <br />
                    <h2>Password</h2>
                    <input type="text" id="password" onChange={getPassword}/>
                    <br />
                    <button type="submit" onClick={addNewUser}>Submit</button>
                </main>
            </form>
            <h2 className="main-h2">Login Here</h2>
            <form className="login-container">
                <main>
                    <h2>Username</h2>
                    <input type="text" id="username" onChange={getUsername} /> 
                    <br />
                    <h2>Password</h2>
                    <input type="text" id="password" onChange={getPassword}/>
                    <br />
                    <button type="submit">Login</button>
                </main>
            </form>
            </div>
            <div>
                <button type="submit">Show Users</button>
            </div>
        </>
    )
}

export default MainContent;