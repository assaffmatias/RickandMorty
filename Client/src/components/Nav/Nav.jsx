import React from 'react';
import style from './Nav.module.css'
import logo from '../../public/Wellcome.png'
import { Link, useLocation } from 'react-router-dom';
import PATHROUTES from '../../helpers/PathRoutes';

export default function Nav({ onSearch }) {
    const location = useLocation();

    if (location.pathname === '/') {
        return null;
    }

    return (
        <nav className={style.nav}>
            <div className={style.right}>
                <Link to={PATHROUTES.ABOUT}>
                    <button className={style.button}>About</button>
                </Link>
                <Link to={PATHROUTES.LOGIN}>
                    <button className={style.button}>Log out</button>
                </Link>
            </div>

            <div>
                <Link to={PATHROUTES.CHARACTERS}>
                    <img src={logo} alt="" className={style.img} />
                </Link>
            </div>

            <div className={style.button_nav}>
                <Link to={PATHROUTES.HOME}>
                    <button className={style.button}>Home</button>
                </Link>
                <Link to={PATHROUTES.FAVORITES}>
                    <button className={style.button}>Favorites</button>
                </Link>

            </div>
        </nav>
    )
}