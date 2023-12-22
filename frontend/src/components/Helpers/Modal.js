import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Modal = () => {
    const navigate = useNavigate();

    const styles = {
        border: 'none',
        padding: '6px 12px',
    };

    const logout = () => {
        axios.get('http://localhost:3001/api/v1/auth/logout',{withCredentials: true})
            .then(res => {

                if(res.status === 200){
                    navigate('/login');
                }
            })
            .catch(err => {
                
                console.log(err);
                
            })
    };

    return (
        <Popup trigger={<button style={styles}>
            <p>img</p>
            <p>Username</p>
        </button>} position="bottom left">
            <button onClick={logout}>Logout</button>
        </Popup>
    );
};

export default Modal;
