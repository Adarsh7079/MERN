import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const Login=()=> {

    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const loginUser= async(e)=>{
        e.preventDefault();

        const res=await fetch("/signin",{
            method:"POST",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify({
                email,
                password
            })
        });

        //resposne is in peding state so we can get by await fun
        const data=res.json();
        if(res.status===400||!data)
        {
            window.alert("Invalid crededntial");
        }
        else
        {
            window.alert("Login successful");
        }
    }
  return (
    <div>
         <section className="signin">
            <div className="container mt-5">
                <div className="signin-content">
                    
                    <div className="sigin-form">
                        <h2>Signin</h2>
                        <form method="POST" className="register-form" id="register-form">
                            
                            <div className="form-group">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email"></i>
                                </label>
                                <input name="email" id="eamil" type="text" autoComplete="off"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder='your email'/>
                            </div>
                          
                          
                            <div className="form-group">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock material-icon"></i>
                                </label>
                                <input name="passwoed" id="password" type="text" autoComplete="off"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder='your passwrod'/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" 
                                 value="log in"
                                 onClick={loginUser}
                                 />
                            </div>
                            <div>
                                 <NavLink to="/signup">Create a account </NavLink>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login;
