import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";

class NavigationMenuHamburger extends Component {
    render() {
        if (this.props.isOpen === true) {
            return (
                <div className="main-navigation-hamburger visible">
                    <div className="menu-hamburger-image">
                        <div className="image"/>
                    </div>
                    <ul className='menu-hamburger-container'>
                        <li onClick={this.props.closeMenu}><NavHashLink className='nav-link' exact to='/#portfolio' activeClassName='active'
                                         onClick={this.props.all}>Portfolio</NavHashLink></li>
                        {this.props.language === "pl" ?
                            <li onClick={this.props.closeMenu}><NavLink className='nav-link' exact to='/paulina' activeClassName='active'>O mnie</NavLink>
                            </li> : <li onClick={this.props.closeMenu}><NavLink className='nav-link' exact to='/paulina' activeClassName='active'>About
                                Me</NavLink></li>}
                        {this.props.language === "pl" ?
                            <li onClick={this.props.closeMenu}><NavLink className='nav-link' exact to='/contact' activeClassName='active'>Kontakt</NavLink>
                            </li> :
                            <li onClick={this.props.closeMenu}><NavLink className='nav-link' exact to='/contact' activeClassName='active'>Contact</NavLink>
                            </li>}
                    </ul>
                </div>
            )
        } else {
            return (
                <div className="main-navigation-hamburger">
                    <div className="menu-hamburger-image">
                        <div className="image"/>
                    </div>
                    <ul className='menu-hamburger-container'>
                        <li onClick={this.props.closeMenu}><NavHashLink className='nav-link' exact to='/#portfolio' activeClassName='active'
                                                                        onClick={this.props.all}>Portfolio</NavHashLink></li>
                        {this.props.language === "pl" ?
                            <li onClick={this.props.closeMenu}><NavLink className='nav-link' exact to='/paulina' activeClassName='active'>O mnie</NavLink>
                            </li> : <li onClick={this.props.closeMenu}><NavLink className='nav-link' exact to='/paulina' activeClassName='active'>About
                                Me</NavLink></li>}
                        {this.props.language === "pl" ?
                            <li onClick={this.props.closeMenu}><NavLink className='nav-link' exact to='/contact' activeClassName='active'>Kontakt</NavLink>
                            </li> :
                            <li onClick={this.props.closeMenu}><NavLink className='nav-link' exact to='/contact' activeClassName='active'>Contact</NavLink>
                            </li>}
                    </ul>
                </div>
            )
        }
    }
}

export default NavigationMenuHamburger