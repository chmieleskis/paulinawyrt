import React, {Component} from "react";

class Navigation extends Component {
    render() {
        return (
            <header>
                <a className='logo'>Paulina<br/>Wyrt</a>
                <ul className='main-navigation'>
                    <li>Portfolio</li>
                    <li>O mnie</li>
                    <li>Kontakt</li>
                </ul>
            </header>
        )
    }
}

export default Navigation