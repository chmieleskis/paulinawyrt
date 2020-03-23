import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bookCover from "../assets/English-words/book-cover.webp";
import centerfold from "../assets/English-words/centerfold.webp";
import centerfoldWords from "../assets/English-words/centerfold-words.webp";
import detail1 from "../assets/English-words/detail1.webp";
import detail2 from "../assets/English-words/detail2.webp";
import detail3 from "../assets/English-words/detail3.webp";
import detail4 from "../assets/English-words/detail4.webp";

const images = [
    {
        src: bookCover,
        height: 920,
        width: 665
    },
    {
        src: centerfold,
        height: 920,
        width: 1364
    },
    {
        src: centerfoldWords,
        height: 920,
        width: 1364
    },
    {
        src: detail1,
        height: 920,
        width: 646
    },
    {
        src: detail2,
        height: 920,
        width: 833
    },
    {
        src: detail3,
        height: 920,
        width: 1208
    },
    {
        src: detail4,
        height: 920,
        width: 1124
    },
];

function English() {
    const openLightbox = useCallback((event, {image, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    return (
        <div className="gallery-images">
            <Gallery photos={images} direction='column' onClick={openLightbox}/>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={images.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
};

class GalleryEnglishWords extends Component {
    render() {
        return (
            <section className="image-gallery">
                <English/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Na tropie angielskich słówek</p> : <p className='title'>On The Trail of English Words</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Praca zbiorowa<br/>Okładka i rozkładówka: Paulina Wyrt</p> : <p className="illustrations">Group work<br/>Cover and centerfold by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Edgard<br/>seria Kapitan Nauka</p> : <p className="publishing-house">Edgard Publishing House<br/>Captain Science series</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 25.10.2017</p> : <p className="premiere-date">Release date: 25.10.2017</p>}
                    {this.props.language === 'pl' ? <p className="description">Wyjątkowe połączenie picture booka ze słownikiem, w którym ilustracje odgrywają główną rolę i nie są jedynie graficznym przedstawieniem słówek. Angielskie wyrazy, zwroty i proste zdania pojawiają się na planszach na zasadzie skojarzeń, co sprawia, że czytelnik przyswaja je w naturalny i intuicyjny sposób. Szukanie szczegółów, ukrytych postaci i wymyślanie historii inspirowanych ilustracjami to zabawa na wiele godzin i doskonałe ćwiczenie spostrzegawczości i koncentracji.</p> : <p className="description">A unique combination of a picture book and a dictionary, in which illustrations play the main role and are not just a graphic representation of words. English words, phrases and simple sentences appear on the boards on the basis of associations, which makes the reader assimilate them in a natural and intuitive way. Looking for details, hidden characters and coming up with stories inspired by illustrations is fun for hours and an excellent exercise of perceptiveness and concentration.</p>}
                    {this.props.language === 'pl' ? <p className="description">Wydanie zawiera zróżnicowane tematycznie rozkładówki, stworzone przez jedenastu artystów.</p> : <p className="description">Edition contains thematically diverse centerfolds created by eleven artists.</p>}
                    {this.props.language === 'pl' ? <p className="award">Nagrody:</p> : <p className="award">Awards:</p>}
                    <div className="zabawkowicz"/>
                </div>
            </section>
        )
    }
}

export default GalleryEnglishWords