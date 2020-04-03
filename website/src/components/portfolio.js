import React, {Component} from "react";
import {Link} from "react-router-dom";

class Portfolio extends Component {
        render() {
        if (this.props.category === '') {
            return (
                <section className='portfolio' id='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li className='highlightened' onClick={this.props.all}>Wszystkie projekty</li> : <li className='highlightened' onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.other}>Inne</li> : <li onClick={this.props.other}>Other</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-licho-two'} className="miniature gallery-licho-two"><div className="mini-shade">{this.props.language === "pl" ? <p>Małe Licho<br/>i anioł z kamienia</p> : <p>Little Devil<br/>and The Stone Angel</p>}</div></Link>
                    <Link to={'/portfolio/gallery-OTOZ'} className="miniature gallery-OTOZ"><div className="mini-shade">{this.props.language === "pl" ? <p>Znajdź swoją drugą połówkę</p> : <p>Find Your Soulmate</p>}</div></Link>
                    <Link to={'/portfolio/gallery-what-dogs-do'} className="miniature gallery-what-dogs-do"><div className="mini-shade">{this.props.language === "pl" ? <p>Co robią psy</p> : <p>What dogs do</p>}</div></Link>
                    <Link to={'/portfolio/gallery-english-words'} className="miniature gallery-english-words"><div className="mini-shade">{this.props.language === "pl" ? <p>Na tropie<br/>angielskich słówek</p> : <p>On The Trail<br/>of English Words</p>}</div></Link>
                    <Link to={'/portfolio/gallery-logrelet'} className="miniature gallery-logrelet"><div className="mini-shade">{this.props.language === "pl" ? <p>Olbrzymek</p> : <p>L'ogrelet</p>}</div></Link>
                    <Link to={'/portfolio/gallery-row-fairy-tales'} className="miniature gallery-row-fairy-tales"><div className="mini-shade">{this.props.language === "pl" ? <p>Awantura w bajkach</p> : <p>Row in Fairy Tales</p>}</div></Link>
                    <Link to={'/portfolio/gallery-cats-city'} className="miniature gallery-cats-city"><div className="mini-shade">{this.props.language === "pl" ? <p>Miasto Kotów</p> : <p>City of Cats</p>}</div></Link>
                    <Link to={'/portfolio/gallery-thaddeus'} className="miniature gallery-thaddeus"><div className="mini-shade">{this.props.language === "pl" ? <p>Pan Tadeusz</p> : <p>Sir Thaddeus</p>}</div></Link>
                    <Link to={'/portfolio/gallery-thing-stories'} className="miniature gallery-thing-stories"><div className="mini-shade">{this.props.language === "pl" ? <p>Opowieści przedmiotów</p> : <p>Stories of objects</p>}</div></Link>
                    <Link to={'/portfolio/gallery-licho-and-mystery'} className="miniature gallery-licho-and-mystery"><div className="mini-shade">{this.props.language === "pl" ? <p>Małe Licho i tajemnica Niebożątka</p> : <p>Little Devil and the Mystery<br/>of Poor Thing</p>}</div></Link>
                    <Link to={'/portfolio/gallery-romeo-juliet'} className="miniature gallery-romeo-juliet"><div className="mini-shade">{this.props.language === "pl" ? <p>Romeo i Julia</p> : <p>Romeo and Juliet</p>}</div></Link>
                    <Link to={'/portfolio/gallery-kulturka-two'} className="miniature gallery-kulturka-two"><div className="mini-shade">{this.props.language === "pl" ? <p>Kulturka<br/>repertuar 2019/2020</p> : <p>Kulturka<br/>repertoire 2019/2020</p>}</div></Link>
                    <Link to={'/portfolio/gallery-tainted-bird'} className="miniature gallery-tainted-bird"><div className="mini-shade">{this.props.language === "pl" ? <p>Ptaszysko</p> : <p>Tainted Bird</p>}</div></Link>
                    <Link to={'/portfolio/gallery-kulturka'} className="miniature gallery-kulturka"><div className="mini-shade">{this.props.language === "pl" ? <p>Kulturka<br/>repertuar 2014/2015</p> : <p>Kulturka<br/>repertoire 2014/2015</p>}</div></Link>
                    <Link to={'/portfolio/gallery-floating-islands'} className="miniature gallery-floating-islands"><div className="mini-shade"><p>Floating Islands<br/>Circus in the Sky</p></div></Link>
                    <Link to={'/portfolio/gallery-kulturka-three'} className="miniature gallery-kulturka-three"><div className="mini-shade">{this.props.language === "pl" ? <p>Kulturka<br/>repertuar 2017/2018</p> : <p>Kulturka<br/>repertoire 2017/2018</p>}</div></Link>
                    <Link to={'/portfolio/gallery-fury'} className="miniature gallery-fury"><div className="mini-shade">{this.props.language === "pl" ? <p>Furia</p> : <p>Fury</p>}</div></Link>
                    <Link to={'/portfolio/gallery-ezop'} className="miniature gallery-ezop"><div className="mini-shade">{this.props.language === "pl" ? <p>Bajki Ezopa</p> : <p>Aesop's Fairy Tales</p>}</div></Link>
                </section>
            )
        } else if (this.props.category === 'books') {
            return (
                <section className='portfolio' id='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li className='highlightened' onClick={this.props.books}>Książki</li> : <li className='highlightened' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.other}>Inne</li> : <li onClick={this.props.other}>Other</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-licho-two'} className="miniature gallery-licho-two"><div className="mini-shade">{this.props.language === "pl" ? <p>Małe Licho<br/>i anioł z kamienia</p> : <p>Little Devil<br/>and The Stone Angel</p>}</div></Link>
                    <Link to={'/portfolio/gallery-what-dogs-do'} className="miniature gallery-what-dogs-do"><div className="mini-shade">{this.props.language === "pl" ? <p>Co robią psy</p> : <p>What dogs do</p>}</div></Link>
                    <Link to={'/portfolio/gallery-english-words'} className="miniature gallery-english-words"><div className="mini-shade">{this.props.language === "pl" ? <p>Na tropie<br/>angielskich słówek</p> : <p>On The Trail<br/>of English Words</p>}</div></Link>
                    <Link to={'/portfolio/gallery-row-fairy-tales'} className="miniature gallery-row-fairy-tales"><div className="mini-shade">{this.props.language === "pl" ? <p>Awantura w bajkach</p> : <p>Row in Fairy Tales</p>}</div></Link>
                    <Link to={'/portfolio/gallery-thaddeus'} className="miniature gallery-thaddeus"><div className="mini-shade">{this.props.language === "pl" ? <p>Pan Tadeusz</p> : <p>Sir Thaddeus</p>}</div></Link>
                    <Link to={'/portfolio/gallery-thing-stories'} className="miniature gallery-thing-stories"><div className="mini-shade">{this.props.language === "pl" ? <p>Opowieści przedmiotów</p> : <p>Stories of objects</p>}</div></Link>
                    <Link to={'/portfolio/gallery-licho-and-mystery'} className="miniature gallery-licho-and-mystery"><div className="mini-shade">{this.props.language === "pl" ? <p>Małe Licho i tajemnica Niebożątka</p> : <p>Little Devil and the Mystery<br/>of Poor Thing</p>}</div></Link>
                    <Link to={'/portfolio/gallery-romeo-juliet'} className="miniature gallery-romeo-juliet"><div className="mini-shade">{this.props.language === "pl" ? <p>Romeo i Julia</p> : <p>Romeo and Juliet</p>}</div></Link>
                    <Link to={'/portfolio/gallery-ezop'} className="miniature gallery-ezop"><div className="mini-shade">{this.props.language === "pl" ? <p>Bajki Ezopa</p> : <p>Aesop's Fairy Tales</p>}</div></Link>
                </section>
            )
        } else if (this.props.category === 'posters') {
            return (
                <section className='portfolio' id='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li className='books' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li className='highlightened' onClick={this.props.posters}>Plakaty</li> : <li className='highlightened' onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.other}>Inne</li> : <li onClick={this.props.other}>Other</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-OTOZ'} className="miniature gallery-OTOZ"><div className="mini-shade"><p>OTOZ "Animals"</p></div></Link>
                    <Link to={'/portfolio/gallery-logrelet'} className="miniature gallery-logrelet"><div className="mini-shade">{this.props.language === "pl" ? <p>Olbrzymek</p> : <p>L'ogrelet</p>}</div></Link>
                    <Link to={'/portfolio/gallery-cats-city'} className="miniature gallery-cats-city"><div className="mini-shade">{this.props.language === "pl" ? <p>Miasto Kotów</p> : <p>City of Cats</p>}</div></Link>
                    <Link to={'/portfolio/gallery-tainted-bird'} className="miniature gallery-tainted-bird"><div className="mini-shade">{this.props.language === "pl" ? <p>Ptaszysko</p> : <p>Tainted Bird</p>}</div></Link>
                </section>
            )
        } else if (this.props.category === 'films') {
            return (
                <section className='portfolio' id='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li className='books' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films} className='highlightened'>Animacje</li> : <li onClick={this.props.films} className='highlightened'>Animated films</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.other}>Inne</li> : <li onClick={this.props.other}>Other</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-OTOZ'} className="miniature gallery-OTOZ"><div className="mini-shade"><p>OTOZ "Animals"</p></div></Link>
                    <Link to={'/portfolio/gallery-tainted-bird'} className="miniature gallery-tainted-bird"><div className="mini-shade">{this.props.language === "pl" ? <p>Ptaszysko</p> : <p>Tainted Bird</p>}</div></Link>
                    <Link to={'/portfolio/gallery-floating-islands'} className="miniature gallery-floating-islands"><div className="mini-shade"><p>Floating Islands<br/>Circus in the Sky</p></div></Link>
                    <Link to={'/portfolio/gallery-fury'} className="miniature gallery-fury"><div className="mini-shade">{this.props.language === "pl" ? <p>Furia</p> : <p>Fury</p>}</div></Link>
                </section>
            )
        } else if (this.props.category === 'booklets') {
            return (
                <section className='portfolio' id='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li className='books' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets} className='highlightened'>Broszury</li> : <li onClick={this.props.booklets} className='highlightened'>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.other}>Inne</li> : <li onClick={this.props.other}>Other</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-logrelet'} className="miniature gallery-logrelet"><div className="mini-shade">{this.props.language === "pl" ? <p>Olbrzymek</p> : <p>L'ogrelet</p>}</div></Link>
                    <Link to={'/portfolio/gallery-kulturka-two'} className="miniature gallery-kulturka-two"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 12</p> : <p>Title 12</p>}</div></Link>
                    <Link to={'/portfolio/gallery-kulturka'} className="miniature gallery-kulturka"><div className="mini-shade"><p>Kulturka</p></div></Link>
                </section>
            )
        } else if (this.props.category === 'other') {
            return (
                <section className='portfolio' id='portfolio'>
                    <ul className="categories">
                        {this.props.language === 'pl' ? <li onClick={this.props.all}>Wszystkie projekty</li> : <li onClick={this.props.all}>All projects</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.books}>Książki</li> : <li className='books' onClick={this.props.books}>Books</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.posters}>Plakaty</li> : <li onClick={this.props.posters}>Posters</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.booklets}>Broszury</li> : <li onClick={this.props.booklets}>Booklets</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.films}>Animacje</li> : <li onClick={this.props.films}>Animated films</li>}
                        {this.props.language === 'pl' ? <li onClick={this.props.other} className='highlightened'>Inne</li> : <li onClick={this.props.other} className='highlightened'>Other</li>}
                    </ul>
                    <Link to={'/portfolio/gallery-OTOZ'} className="miniature gallery-OTOZ"><div className="mini-shade">{this.props.language === "pl" ? <p>Znajdź swoją drugą połówkę</p> : <p>Find Your Soulmate</p>}</div></Link>
                    <Link to={'/portfolio/gallery-kulturka-two'} className="miniature gallery-kulturka-two"><div className="mini-shade">{this.props.language === "pl" ? <p>Tytuł 12</p> : <p>Title 12</p>}</div></Link>
                    <Link to={'/portfolio/gallery-floating-islands'} className="miniature gallery-floating-islands"><div className="mini-shade"><p>Floating Islands<br/>Circus in the Sky</p></div></Link>
                </section>
            )
        }
    }
}

export default Portfolio