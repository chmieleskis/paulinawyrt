import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Navigation extends Component {


    render() {
        return (
            <div className="fixed">
                <header>
                    <div className='left-container'>
                        <NavLink className='logo' to='/' onClick={this.props.all}>Paulina<br/>Wyrt</NavLink>
                        <div className="animation-motorbike"/>
                    </div>
                    <div className="right-container">
                        <ul className='main-navigation'>
                            <li><NavLink className='nav-link' exact to='/' activeClassName='active' onClick={this.props.all}>Portfolio</NavLink></li>
                            {this.props.language === "pl" ? <li><NavLink className='nav-link' exact to='/paulina' activeClassName='active'>O mnie</NavLink></li> : <li><NavLink className='nav-link' exact to='/paulina' activeClassName='active'>About Me</NavLink></li>}
                            {this.props.language === "pl" ? <li><NavLink className='nav-link' exact to='/contact' activeClassName='active'>Kontakt</NavLink></li> : <li><NavLink className='nav-link' exact to='/contact' activeClassName='active'>Contact</NavLink></li>}
                        </ul>
                        <div className="flags">
                            <div className="flag pl" onClick={this.props.polish}/>
                            <div className="flag uk" onClick={this.props.english}/>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navigation