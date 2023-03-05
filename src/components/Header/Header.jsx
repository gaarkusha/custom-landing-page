import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
const Header = () => {
    return(
        <header className="header-wrapper">
            <div className="header-container">
                <div className="link-container-desktop">
                    <div className="header-logo">
                        <Link to='/' className="img-link">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="link-item">
                        <Link to='/' className="link-item-text">Главная</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/price' className="link-item-text">Стоимость</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/about' className="link-item-text">О нас</Link>
                    </div>
                    <div className="link-item">
                        <Link to='/contacts' className="link-item-text">Контакты</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;