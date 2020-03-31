import React, {Component} from "react";
import {HashLink} from 'react-router-hash-link';
import HamburgerMenu from 'react-hamburger-menu';
import NavigationMenu from "./navigationMenu";

class Navigation extends Component {

    render() {
        return (
            <div className="fixed">
                <header>
                    <div className='left-container'>
                        <HashLink className='logo' to='/#portfolio' onClick={this.props.all}>Paulina<br/>Wyrt</HashLink>
                        <div className="animation-motorbike"><HashLink className='animation-motorbike-link' to='/#portfolio' onClick={this.props.all}/></div>
                    </div>
                    <div className="right-container">
                        <NavigationMenu open={this.props.isOpen} language={this.props.language}/>
                        <div className="hamburger">
                            <HamburgerMenu
                                onClick={this.props.openMenu}
                                isOpen={this.props.isOpen}
                                menuClicked={this.props.openMenu.bind(this)}
                                color='rgba(150, 217, 161, 1)'
                                width={38}
                                height={22}
                                strokeWidth={5}
                                borderRadius={15}
                                animationDuration={.5}
                            />
                        </div>
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