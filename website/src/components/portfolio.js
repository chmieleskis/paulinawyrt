import React, {Component} from "react";
import {Link} from "react-router-dom";

class Portfolio extends Component {
        render() {
        if (this.props.category === '') {
            return (
                <section className='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li className='highlightened' onClick={this.props.all}>Wszystkie projekty</li> : <li className='highlightened' onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li>Własne projekty</li> : <li>Personal projects</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-licho-two'} className="miniature gallery-licho-two"><div className="mini-shade">{this.props.language === "pl" ? <p>Małe Licho i anioł z kamienia</p> : <p>Little Devil And The Stone Angel</p>}</div></Link>
                    <Link to={'/portfolio/gallery-OTOZ'} className="miniature gallery-OTOZ"><div className="mini-shade"><p>OTOZ "Animals"</p></div></Link>
                    <Link to={'/portfolio/gallery-what-dogs-do'} className="miniature gallery-what-dogs-do"><div className="mini-shade">{this.props.language === "pl" ? <p>Co robią psy</p> : <p>What dogs do</p>}</div></Link>
                    <Link to={'/portfolio/gallery-english-words'} className="miniature gallery-english-words"><div className="mini-shade">{this.props.language === "pl" ? <p>Na tropie angielskich słówek</p> : <p>On The Trail of English Words</p>}</div></Link>
                    <Link to={'/portfolio/gallery-logrelet'} className="miniature gallery-logrelet"><div className="mini-shade">{this.props.language === "pl" ? <p>Olbrzymek</p> : <p>L'ogrelet</p>}</div></Link>
                    <Link to={'/portfolio/gallery-row-fairy-tales'} className="miniature gallery-row-fairy-tales"><div className="mini-shade">{this.props.language === "pl" ? <p>Awantura w bajkach</p> : <p>Row in Fairy Tales</p>}</div></Link>
                    <Link to={'/portfolio/gallery-cats-city'} className="miniature gallery-cats-city"><div className="mini-shade">{this.props.language === "pl" ? <p>Miasto Kotów</p> : <p>City of Cats</p>}</div></Link>
                    <Link to={'/portfolio/gallery-8'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 8</p> : <p>Title 8</p>}</div></Link>
                    <Link to={'/portfolio/gallery-9'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 9</p> : <p>Title 9</p>}</div></Link>
                    <Link to={'/portfolio/gallery-10'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 10</p> : <p>Title 10</p>}</div></Link>
                    <Link to={'/portfolio/gallery-11'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 11</p> : <p>Title 11</p>}</div></Link>
                    <Link to={'/portfolio/gallery-12'} className="miniature"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 12</p> : <p>Title 12</p>}</div></Link>
                </section>
            )
        } else if (this.props.category === 'books') {
            return (
                <section className='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li className='highlightened' onClick={this.props.books}>Książki</li> : <li className='highlightened' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li>Własne projekty</li> : <li>Personal projects</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-licho-two'} className="miniature gallery-licho-two"><div className="mini-shade">{this.props.language === "pl" ? <p>Małe Licho i anioł z kamienia</p> : <p>Little Devil And The Stone Angel</p>}</div></Link>
                    <Link to={'/portfolio/gallery-what-dogs-do'} className="miniature gallery-what-dogs-do"><div className="mini-shade">{this.props.language === "pl" ? <p>Co robią psy</p> : <p>What dogs do</p>}</div></Link>
                    <Link to={'/portfolio/gallery-english-words'} className="miniature gallery-english-words"><div className="mini-shade">{this.props.language === "pl" ? <p>Na tropie angielskich słówek</p> : <p>On The Trail of English Words</p>}</div></Link>
                    <Link to={'/portfolio/gallery-row-fairy-tales'} className="miniature gallery-row-fairy-tales"><div className="mini-shade">{this.props.language === "pl" ? <p>Awantura w bajkach</p> : <p>Row in Fairy Tales</p>}</div></Link>
                </section>
            )
        } else if (this.props.category === 'posters') {
            return (
                <section className='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li className='books' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li className='highlightened' onClick={this.props.posters}>Plakaty</li> : <li className='highlightened' onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li>Własne projekty</li> : <li>Personal projects</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-OTOZ'} className="miniature gallery-OTOZ"><div className="mini-shade"><p>OTOZ "Animals"</p></div></Link>
                    <Link to={'/portfolio/gallery-logrelet'} className="miniature gallery-logrelet"><div className="mini-shade">{this.props.language === "pl" ? <p>Olbrzymek</p> : <p>L'ogrelet</p>}</div></Link>
                    <Link to={'/portfolio/gallery-cats-city'} className="miniature gallery-cats-city"><div className="mini-shade">{this.props.language === "pl" ? <p>Miasto Kotów</p> : <p>City of Cats</p>}</div></Link>
                </section>
            )
        } else if (this.props.category === 'films') {
            return (
                <section className='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li className='books' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films} className='highlightened'>Animacje</li> : <li onClick={this.props.films} className='highlightened'>Animated films</li>}
                        {this.props.language === 'pl' ? <li>Własne projekty</li> : <li>Personal projects</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-OTOZ'} className="miniature gallery-OTOZ"><div className="mini-shade"><p>OTOZ "Animals"</p></div></Link>
                </section>
            )
        } else if (this.props.category === 'booklets') {
            return (
                <section className='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li className='books' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets} className='highlightened'>Broszury</li> : <li onClick={this.props.booklets} className='highlightened'>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li>Własne projekty</li> : <li>Personal projects</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-logrelet'} className="miniature gallery-logrelet"><div className="mini-shade">{this.props.language === "pl" ? <p>Olbrzymek</p> : <p>L'ogrelet</p>}</div></Link>
                </section>
            )
        }
    }
}

export default Portfolio