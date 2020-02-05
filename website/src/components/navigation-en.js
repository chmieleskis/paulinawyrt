import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavigationEn extends Component {
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
                        <li><Link className='nav-link' to='/paulina'>About Me</Link></li>
                        <li><Link className='nav-link' to='/contact'>Contact</Link></li>
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

export default NavigationEn