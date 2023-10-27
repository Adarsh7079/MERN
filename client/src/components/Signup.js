import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';
// import { useHistory } from "react-router-dom";


const Signup=()=> {
    // const history=useHistory();
    const [user,setUser]=useState({
        name:"",email:"",phone:"",work:"",password:"",cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
    }

    const PostData= async(e)=>{
        e.preventDefault();
    
        const{name,email,password,cpassword}=formData;
        const res=await fetch("/user/signup",{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify({
            name,email,password
        })
        });
    
        const data=await res.json();
    
        if(data.status==404|| !data)
        {
          window.alert("alrday register")
        }
        else
        {
          window.alert("register")
        }
      }

  return (
    <div>
        <section className="signup">
            <div className="container mt-5">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2>Signup</h2>
                        <form method="post" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                <i class="zmdi zmdi-pin-account"></i>
                                </label>
                                <input name="name" id="name" type="text" autoComplete="off" 
                                 value={user.name}
                                 onChange={handleInputs}
                                placeholder='your name'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email"></i>
                                </label>
                                <input name="email" id="eamil" type="text" autoComplete="off"
                                 value={user.email}
                                 onChange={handleInputs}
                                 placeholder='your email'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">
                                <i class="zmdi zmdi-phone-in-talk"></i>
                                </label>
                                <input name="phone" id="phone" type="number" autoComplete="off"
                                 value={user.phone}
                                 onChange={handleInputs}
                                 placeholder='Phone no'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="work">
                                <i class="zmdi zmdi-slideshow"></i>
                                </label>
                                <input name="work" id="work" type="text" autoComplete="off" 
                                 value={user.work}
                                 onChange={handleInputs}
                                placeholder='your profession'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock material-icon"></i>
                                </label>
                                <input name="password" id="password" type="text" autoComplete="off"
                                 value={user.password}
                                 onChange={handleInputs}
                                 placeholder='your passwrod'/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">
                                <i class="zmdi zmdi-lock material-icon"></i>
                                </label>
                                <input name="cpassword" id="cpassword" type="text" autoComplete="off"
                                 value={user.cpassword}
                                 onChange={handleInputs}
                                 placeholder='conform passwrod'/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" 
                                 value="register"
                                 onClick={PostData}
                                 />
                            </div>
                            <NavLink to="/login">I am already Register </NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}


export default Signup;
