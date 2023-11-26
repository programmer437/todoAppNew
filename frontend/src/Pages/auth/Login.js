import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {success, error,Toast} from '../../components/Helpers/Toast';
import ButtonSpinner from '../../components/Helpers/ButtonSpinner';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    console.log(data);

    const handleSignUp = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('http://localhost:3001/api/v1/auth/login', data,{withCredentials: true})
            .then(res => {
                setLoading(false);
                success(res.data.msg);
                setTimeout(() => {
                    navigate(location.state || '/privateRoute/dashboard');
                }, 2020);
            })
            .catch(err => {
                if (err.code === "ERR_NETWORK") {
                    error(err.message);
                } else {
                    error(err.response.data.msg);
                }
                console.log(err);
                setLoading(false);
            })
    }

  return (
    <div className='loginForm'>
            <div className="loginFormContainer">
                <h1 className="logo">Logo</h1>
                <h1 className="loginFormHeading">Login</h1>
                <Link className="continueWithGoogle"><FcGoogle />Continue With Google</Link>
                <form className="emailAndPassword" onSubmit={handleSignUp}>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={data.email}
                            placeholder="Enter your email..."
                            name="email"
                            id="email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <div className="passwordInput">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={data.password}
                                placeholder="Enter your password..."
                                name="password"
                                id="password"
                                onChange={handleChange}
                                required

                            />
                            {showPassword ?
                                <MdOutlineRemoveRedEye className='passwordIcon' onClick={() => setShowPassword(!showPassword)} /> :
                                <AiOutlineEyeInvisible className='passwordIcon' onClick={() => setShowPassword(!showPassword)} />
                            }


                        </div>
                    </div>
                    <button className="SubmitButton" disabled={loading} >
                        {loading ? <ButtonSpinner />
                            : "Login"
                        }
                    </button>

                </form>
                <Link className="forgotPassword" to="/forgot-password">Forgot Password?</Link>
                <p className="termsOfService">
                    By signing up, you agree to our
                    <Link> Terms of Service </Link>
                    and <Link> Privacy Policy</Link>
                </p>
                <div className="alreadySignUp">
                    <p>Already have an account? <Link to='/login'>Go to Login</Link></p>
                </div>
            </div>
            <Toast/>
            

        </div>
  )
}

export default Login