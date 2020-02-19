import React, {Component} from "react";
import {Link} from "react-router-dom";

class Portfolio extends Component {
    render() {
        return (
            <section className='portfolio'>
                <Link to={'/portfolio/gallery-licho-two'} className="miniature gallery-licho-two"><div className="mini-shade">{this.props.language === "pl" ? <p>Małe Licho i anioł z kamienia</p> : <p>Little Devil And The Stone Angel</p>}</div></Link>
                <Link to={'/portfolio/gallery-2'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł2</p> : <p>Title 2</p>}</div></Link>
                <Link to={'/portfolio/gallery-3'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł3</p> : <p>Title 3</p>}</div></Link>
                <Link to={'/portfolio/gallery-english-words'} className="miniature gallery-english-words"><div className="mini-shade">{this.props.language === "pl" ? <p>Na tropie angielskich słówek</p> : <p>On The Trail of English Words</p>}</div></Link>
                <Link to={'/portfolio/gallery-5'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 5</p> : <p>Title 5</p>}</div></Link>
                <Link to={'/portfolio/gallery-6'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 6</p> : <p>Title 6</p>}</div></Link>
                <Link to={'/portfolio/gallery-7'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 7</p> : <p>Title 7</p>}</div></Link>
                <Link to={'/portfolio/gallery-8'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 8</p> : <p>Title 8</p>}</div></Link>
                <Link to={'/portfolio/gallery-9'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 9</p> : <p>Title 9</p>}</div></Link>
                <Link to={'/portfolio/gallery-10'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 10</p> : <p>Title 10</p>}</div></Link>
                <Link to={'/portfolio/gallery-11'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 11</p> : <p>Title 11</p>}</div></Link>
                <Link to={'/portfolio/gallery-12'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 12</p> : <p>Title 12</p>}</div></Link>
            </section>
        )
    }
}

export default Portfolio