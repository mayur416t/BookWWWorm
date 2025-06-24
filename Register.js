import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//mport axios from 'axios';

function Register(){
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const [address,setAdd] = useState("");
    const [role,setRole] = useState("");
    const [date_of_regi,setDate] = useState("");
    const navigate = useNavigate();

    const handleSubmit =async(event) =>{
        event.preventDefault();
        
        const data = {name:name,email:email,password:password,address:address,role:role,date_of_regi:date_of_regi}
        
        // axios.post('http://localhost:4000/register',(name,email,pass))
        // .then(res => console.log(res))
        // .then(err => console.log(err));
        const response = await fetch('http://localhost:4000/register',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        navigate('/home')
        const msg  = await response.text();
        alert(msg)

    }

    return(
      
            <div className="main">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name"><strong>Name</strong></label>
                        <input type="text" placeholder='Enter Name' name="name" onChange={(e => setName(e.target.value))}></input>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type="email" placeholder="Enter Email" name="Email" onChange={(e => setEmail(e.target.value))}></input>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass"><strong>Password</strong></label>
                        <input type="password" placeholder="Enter Password" name="pass" onChange={(e => setPass(e.target.value))} ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="add"><strong>Address</strong></label>
                        <input type="test" placeholder="Enter Address" name="add" onChange={(e => setAdd(e.target.value))} ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role"><strong>Role</strong></label>
                        <input type="text" placeholder="Enter role" name="role" onChange={(e => setRole(e.target.value))} ></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="date"><strong>date_of_regi</strong></label>
                        <input type="date" placeholder="date" name="date" onChange={(e => setDate(e.target.value))} ></input>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">Sign-Up</button>
                        <p>you are agree to our terms and conditions</p>
                        <Link to='/login' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                    </div>
                </form>
            </div>
    )
}
export default Register;