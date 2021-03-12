import React from 'react'
import "./style.scss"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header_wrapper">
            <div className="header-content">

                <Link
                    to="/"
                    replace
                    className="header-link"
                >
                    <img
                        src={process.env.PUBLIC_URL + "/images/logo192.png"}
                        alt="react Icon Logo"
                        className="header-logo"
                    />
                    <div className="header-title">
                        React Boilerplate Version 2
                    </div>
                </Link>


            </div>
        </div>
    )
}

export default Header
