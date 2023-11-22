import React from 'react'

import{NavLink} from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar position-sticky z-2 top-0 navbar-expand-lg " style={{backgroundColor: "white"}}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse navigation" id="navbarTogglerDemo01">
                    <NavLink className="navbar-brand" to="/homepage">TaskHarmony</NavLink>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/features"><button className="commonLink">Features</button></NavLink>
                        </li>
                    <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/pricing"><button className="commonLink">Pricing</button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/login"><button className="login">Log in</button></NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to="/signup"><button className="signup">Sign Up</button></NavLink>

                        </li>
        
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header