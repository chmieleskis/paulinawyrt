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
                        {this.props.language === "pl" ? <li><Link className='nav-link' to='/paulina'>O mnie</Link></li> : <li><Link className='nav-link' to='/paulina'>About Me</Link></li>}
                        {this.props.language === "pl" ? <li><Link className='nav-link' to='/contact'>Kontakt</Link></li> :<li><Link className='nav-link' to='/contact'>Contact</Link></li>}
                    </ul>
                    <div className="flags">
                        <div className="flag pl" onClick={this.props.polish}/>
                        <div className="flag uk" onClick={this.props.english}/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Navigation