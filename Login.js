import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const [role,setRole] = useState("");    
    const navigate = useNavigate();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const data = {
            email:email,password:password,role:role
        }
        const response = await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        const msg = await response.text();
        alert(msg)
        if(msg == 'ok')
        {
            window.open();
        }
    }
    return(
        <div className="main">
            <div className="main">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name="Email" onChange={(e => setEmail(e.target.value))}></input>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name="pass" onChange={(e => setPass(e.target.value))}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role"><strong>Role</strong></label>
                        <input type="text" placeholder="Role" name="role" onChange={(e => setRole(e.target.value))}></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
                        <p>you are agree to our terms and conditions</p>
                        <Link to='/register'>Create Account</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Login;