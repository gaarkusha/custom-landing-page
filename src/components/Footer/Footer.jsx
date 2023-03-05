import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { PHONE } from "../../config";
import { EMAIL } from "../../config";
import { TIME_WORK } from "../../config";

const Footer = () => {
    return(
        <div className="footer-wrapper">
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <Link to='/' className="img-footer-link">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="footer-text">
                    <div className="textF">
                        {TIME_WORK}
                    </div>
                    <div className="textF">
                        {PHONE}
                    </div>
                    <div className="textF">
                        {EMAIL}
                    </div>
                </div>
                <div className="footer-text">
                    <div className="footer-link-wrapper">
                        <Link to='/politica' className="footer-link">
                            Политика конфиденциальности
                        </Link>
                    </div>
                    <div className="footer-link-wrapper">
                        <Link to='/dogovor_vozvrata' className="footer-link">
                            Правила возврата и обмена товара
                        </Link>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Footer;