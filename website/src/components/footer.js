import React, {Component} from "react";

class Footer extends Component {

    handleCopy = () => {
        navigator.clipboard.writeText('m.chmielewski@tut.by')
    };

    render() {
        return (
            <footer>
                <div className="icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/artpaulinawyrt/" className="icon facebook-icon"><i className="fab fa-facebook-square"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/paulinawyrt/" className="icon instagram-icon"><i className="fab fa-instagram"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/PaulinaWyrt" className="icon behance-icon"><i className="fab fa-behance-square"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/paulinawyrt" className="icon vimeo-icon"><i className="fab fa-vimeo"/></a>
                </div>
                {this.props.language === "pl" ?
                    <div className="email-address"
                         onClick={this.handleCopy}>stronę wykonał: m.chmielewski@tut.by
                         <span className="tooltip tooltip">Kliknij aby skopiować</span>
                    </div> :
                    <div className="email-address"
                         onClick={this.handleCopy}>website created by: m.chmielewski@tut.by
                         <span className="tooltip tooltip">Click to copy</span>
                    </div>}
            </footer>
        )
    }
}

export default Footer