import React, {Component} from "react";
import {Link} from "react-router-dom";

class Portfolio extends Component {
    state = {
        language: null,
    };

    componentDidMount() {
        this.setState({
            language: localStorage.getItem('language')
        }, () => {
            console.log(this.state.language)
        });
    };

    render() {
        return (
            <section className='portfolio'>
                <Link to={'/portfolio/gallery-1'} className="miniature gallery-food"><div className="mini-shade">{this.state.language === "pl" ? <p>Madzia</p> : <p>Na Frasunek Blog</p>}</div></Link>
                <Link to={'/portfolio/gallery-2'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>O prawie rozmowy z użyciem głowy</p> : <p>conversations about law</p>}</div></Link>
                <Link to={'/portfolio/gallery-3'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>jest</p> : <p>absolutnie</p>}</div></Link>
                <Link to={'/portfolio/gallery-4'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>super</p> : <p>najfajniejsza</p>}</div></Link>
                <Link to={'/portfolio/gallery-5'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>Tytuł 5</p> : <p>Title 5</p>}</div></Link>
                <Link to={'/portfolio/gallery-6'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>Tytuł 6</p> : <p>Title 6</p>}</div></Link>
                <Link to={'/portfolio/gallery-7'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>Tytuł 7</p> : <p>Title 7</p>}</div></Link>
                <Link to={'/portfolio/gallery-8'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>Tytuł 8</p> : <p>Title 8</p>}</div></Link>
                <Link to={'/portfolio/gallery-9'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>Tytuł 9</p> : <p>Title 9</p>}</div></Link>
                <Link to={'/portfolio/gallery-10'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>Tytuł 10</p> : <p>Title 10</p>}</div></Link>
                <Link to={'/portfolio/gallery-11'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>Tytuł 11</p> : <p>Title 11</p>}</div></Link>
                <Link to={'/portfolio/gallery-12'} className="miniature"><div className="mini-shade">{this.state.language === "pl" ? <p>Tytuł 12</p> : <p>Title 12</p>}</div></Link>
            </section>
        )
    }
}

export default Portfolio