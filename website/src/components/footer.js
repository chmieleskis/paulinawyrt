import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/artpaulinawyrt/" className="icon facebook-icon"><i className="fab fa-facebook-square"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/paulinawyrt/" className="icon instagram-icon"><i className="fab fa-instagram"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.behance.net/PaulinaWyrt" className="icon behance-icon"><i className="fab fa-behance-square"/></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/paulinawyrt" className="icon vimeo-icon"><i className="fab fa-vimeo"/></a>
                </div>
                <p className="created-by">Created by: <a href="mailto: m.chmielewski@tut.by">m.chmielewski@tut.by</a></p>
            </footer>
        )
    }
}

export default Footer