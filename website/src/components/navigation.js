import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';

class Navigation extends Component {
    render() {
        return (
            <div className="fixed">
                <header>
                    <div className='left-container'>
                        <HashLink className='logo' to='/#portfolio' onClick={this.props.all}>Paulina<br/>Wyrt</HashLink>
                        <div className="animation-motorbike"/>
                    </div>
                    <div className="right-container">
                        <ul className='main-navigation'>
                            <li><HashLink className='nav-link' to='/#portfolio' activeClassName='active' onClick={this.props.all}>Portfolio</HashLink></li>
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
};

export default Navigation