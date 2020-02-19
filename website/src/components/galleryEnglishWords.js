import React, {Component} from "react";
import {Link} from "react-router-dom";
import bookCover from "../assets/English-words/book-cover.png";
import centerfold from "../assets/English-words/centerfold.png";
import centerfoldWords from "../assets/English-words/centerfold-words.png";
import detail1 from "../assets/English-words/detail1.png";
import detail2 from "../assets/English-words/detail2.png";
import detail3 from "../assets/English-words/detail3.png";
import detail4 from "../assets/English-words/detail4.png";

class GalleryEnglishWords extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <div className="gallery-images">
                    <img src={bookCover} alt="book cover"/>
                    <img src={centerfold} alt="prospect of the city"/>
                    <img src={centerfoldWords} alt="prospect of the city"/>
                    <img src={detail1} alt="illustration detail"/>
                    <img src={detail2} alt="illustration detail"/>
                    <img src={detail3} alt="illustration detail"/>
                    <img src={detail4} alt="illustration detail"/>
                </div>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Na tropie angielskich słówek</p> : <p className='title'>On The Trail of English Words</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Praca zbiorowa</p> : <p className="author">Group work</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Okładka i rozkładówka: Paulina Wyrt</p> : <p className="illustrations">Cover and centerfold by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Edgard<br/>seria Kapitan Nauka</p> : <p className="publishing-house">Edgard Publishing House<br/>Captain Science series</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 25.10.2017</p> : <p className="premiere-date">Release date: 25.10.2017</p>}
                    {this.props.language === 'pl' ? <p className="description">Książka przeznaczona dla najmłodszych dzieci, łączy zabawę z nauką angielskich słówek. Zawiera zróżnicowane tematycznie rozkładówki, stworzone przez dwunastu artystów.</p> : <p className="description">The book is intended for the youngest children and combines fun with learning english words. Contains thematically diverse centerfolds created by twelve artists.</p>}
                    {this.props.language === 'pl' ? <p className="award">Nagrody:</p> : <p className="awards">Awards:</p>}
                    <div className="zabawkowicz"/>
                </div>
            </section>
        )
    }
}

export default GalleryEnglishWords