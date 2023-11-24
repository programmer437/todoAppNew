import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";


const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='signUpForm'>
            <div className="signUpFormContainer">
                <h1 className="logo">Logo</h1>
                <h1 className="signUpHeading">SignUp</h1>
                <Link className="continueWithGoogle"><FcGoogle />Continue With Google</Link>
                <form className="emailAndPassword">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email..." name="email" id="email" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <div className="passwordInput">
                            <input type={showPassword ? "text":"password"} placeholder="Enter your password..." name="password" id="password" />
                            {showPassword ?
                                <MdOutlineRemoveRedEye className='passwordIcon' onClick={() => setShowPassword(!showPassword)} /> :
                                <AiOutlineEyeInvisible className='passwordIcon' onClick={() => setShowPassword(!showPassword)} />
                            }
                            
                            
                        </div>
                    </div>
                    <Link className="forgotPassword">Sign up with Email</Link>

                </form>
                <p className="termsOfService">
                    By signing up, you agree to our 
                    <Link> Terms of Service </Link> 
                     and <Link> Privacy Policy</Link>
                </p>
                <div className="alreadySignUp">
                    <p>Already have an account? <Link to='/login'>Go to Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;