import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';



const Spinner = ({path= "login"}) => {
    const [count, setCount] = useState(3);
    const navigate=useNavigate();
    const location=useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => --currentCount);
        }, 1000);
        if(count===0){
            navigate(`/${path}`,{state:location.pathname});
        }
        return () => clearInterval(interval);
    }, [count,navigate,path,location.pathname]);

    return (
        <div className="d-flex align-items-center justify-content-center flex-column" style={{height: "85vh"}}>
            <h1 className='text-center'>{`You are not logged in redirecting to login in ${count} seconds`}</h1>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    )
}

export default Spinner