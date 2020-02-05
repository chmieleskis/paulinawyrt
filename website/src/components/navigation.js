import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navigation extends Component {

    render() {
        return (
            <header>
                <div className='left-container'>
                    <Link className='logo' to='/'>Paulina<br/>Wyrt</Link>
                    <div className="animation-motorbike"/>
                </div>
                <div className="right-container">
                    <ul className='main-navigation'>
                        <li><Link className='nav-link' to='/'>Portfolio</Link></li>
                        <li><Link className='nav-link' to='/paulina'>O mnie</Link></li>
                        <li><Link className='nav-link' to='/contact'>Kontakt</Link></li>
                    </ul>
                    <div className="flags">
                        <Link className='nav-link' to='/'><div className="flag pl" onClick={this.props.polish}/></Link>
                        <Link className='nav-link' to='/'><div className="flag uk" onClick={this.props.english}/></Link>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navigation