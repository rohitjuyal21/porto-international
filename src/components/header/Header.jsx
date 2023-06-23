import React, { useState } from 'react';
import './header.css';
import Menu from '../menu/Menu';
import logo from '../../assets/cropped-logo-1-300x111.jpg'
import portugese from '../../assets/portuguese.png'
import english from '../../assets/english.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='main__header'>
            <div className="header">
                <div className="header__up">
                    <div className="header__navbar">
                        <div className="header__navbar-left">
                            <a href="/" className='header__navbar-logo'>
                                <img src={logo} alt="logo" />
                            </a>
                        </div>
                        <div className="header__navbar-right" onClick={() => setToggleMenu(false)}>
                            <Menu />
                        </div>
                        <div className="header__navbar-menu">
                            {toggleMenu
                                ? <FontAwesomeIcon icon={faXmark} onClick={() => setToggleMenu(false)} />
                                : <FontAwesomeIcon icon={faBars} onClick={() => setToggleMenu(true)} />
                            }
                            {toggleMenu && (
                                <div className="header__navbar-menu_container" onClick={() => setToggleMenu(false)}>
                                    <Menu />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className='header__below'>
                    <div className="language">
                        <p>
                            <a href=""><img src={portugese} alt="portugese" /></a>
                        </p>
                        <p>
                            <a href=""><img src={english} alt="english" /></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header