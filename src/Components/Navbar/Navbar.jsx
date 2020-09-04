import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
console.log(s);


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
            <NavLink to='/Dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
            <a href='/News'>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Navbar;