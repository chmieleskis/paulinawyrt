import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";

class NavigationMenu extends Component {

    render() {
            return (
                <ul className='main-navigation'>
                    <li><NavHashLink className='nav-link' exact to='/#portfolio' activeClassName='active'
                                     onClick={this.props.all}>Portfolio</NavHashLink></li>
                    {this.props.language === "pl" ?
                        <li><NavHashLink className='nav-link' exact to='/paulina' activeClassName='active'>O mnie</NavHashLink>
                        </li> : <li><NavLink className='nav-link' exact to='/paulina' activeClassName='active'>About Me</NavLink></li>}
                    {this.props.language === "pl" ?
                        <li><NavLink className='nav-link' exact to='/contact' activeClassName='active'>Kontakt</NavLink>
                        </li> :
                        <li><NavLink className='nav-link' exact to='/contact' activeClassName='active'>Contact</NavLink></li>}
                </ul>
            )
    }
}

export default NavigationMenu