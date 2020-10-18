import React from "react"
import {Link} from 'react-router-dom';
import './Header.less';

const Header = () => {
    return (
        <nav className="nav">        
            <Link to="/countdown" className="nav-link">
                在线倒计时器
            </Link>
            <Link to="/calculator" className="nav-link">
                在线计算器
            </Link>
            <Link to="/" className="nav-link">
                HOME
            </Link>
        </nav>
    )
};

export default Header;
