import React, {Component} from "react";
import bookCover from "../assets/Licho/book-cover.png";
import bookCoverGif from "../assets/Licho/book-cover.gif";
import onTheRoad from "../assets/Licho/onTheRoad.png";
import auntOda from "../assets/Licho/auntOda.png";
import auntOdaGif from "../assets/Licho/auntOda.gif";
import bozek from "../assets/Licho/bozek.png";
import odaChopsWood from "../assets/Licho/odaChopsWood.png";

class GalleryLicho extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <div className="gallery-images">
                    <img src={bookCover} alt="book cover"/>
                    <img src={bookCoverGif} alt="book cover making of"/>
                    <img src={onTheRoad} alt="on the road"/>
                    <img src={auntOda} alt="aunt Oda"/>
                    <img src={auntOdaGif} alt="aunt Oda making of"/>
                    <img src={bozek} alt="Bozek look out the window"/>
                    <img src={odaChopsWood} alt="aunt Oda chops wood"/>
                </div>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Małe licho i anioł<br/>z kamienia</p> : <p className='title'>Little Devil And The Stone Angel</p>}
                    {this.props.language === 'pl' ? <p className="author">Autor: Marta Kisiel</p> : <p className="author">Written by Marta Kisiel</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Ilustracje: Paulina Wyrt</p> : <p className="illustrations">Illustrated by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Wilga</p> : <p className="publishing-house">Wilga Publishing House</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 30.10.2019</p> : <p className="premiere-date">Release date: 30.10.2019</p>}
                    {this.props.language === 'pl' ? <p className="description">Drugi tom przygód Bożka i jego fantastycznej ferajny. Uciekając przed epidemią odwiedzają ciotkę Odę, o której dotąd nie słyszeli, w jej zagubionej w sercu lasu chatce.<br/>Wydanie zawiera kolorową okładkę i piętnaście czarno-białych ilustracji.</p> : <p className="description">The second volume of the adventures of Bożek and his fantastic bunch. Escaping the epidemic, they visit Aunt Oda, whom they have never heard of, in her hut lost in the heart of the forest.<br/>The issue includes a colored cover and fifteen black and white illustrations.</p>}
                    {this.props.language === 'pl' ? <p className="award">Nagrody:</p> : <p className="awards">Awards:</p>}
                    <div className="ibby"/>
                </div>
            </section>
        )
    }
}

export default GalleryLicho