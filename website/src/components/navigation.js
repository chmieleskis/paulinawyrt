import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <header>
                <p className='logo'>Paulina<br/>Wyrt</p>
                <ul className='main-navigation'>
                    <li><Link className='nav-link' to='/'>Portfolio</Link></li>
                    <li><Link className='nav-link' to='/paulina'>O mnie</Link></li>
                    <li><Link className='nav-link' to='/contact'>Kontakt</Link></li>

                </ul>
            </header>
        )
    }
}

export default Navigation