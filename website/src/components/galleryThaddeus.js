import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bear from "../assets/Thaddeus/bear.png";
import bookCover from "../assets/Thaddeus/bookCover.png";
import chaptersOne from "../assets/Thaddeus/chapters1.png";
import chaptersTwo from "../assets/Thaddeus/chapters2.png";
import chaptersThree from "../assets/Thaddeus/chapters3.png";
import chaptersFour from "../assets/Thaddeus/chapters4.png";
import chaptersFive from "../assets/Thaddeus/chapters5.png";
import garlandOne from "../assets/Thaddeus/garland1.png";
import garlandTwo from "../assets/Thaddeus/garland2.png";
import garlandThree from "../assets/Thaddeus/garland3.png";
import garlandFour from "../assets/Thaddeus/garland4.png";
import garlandFive from "../assets/Thaddeus/garland5.png";
import detailsOne from "../assets/Thaddeus/details1.png";
import detailsTwo from "../assets/Thaddeus/details2.png";
import detailsThree from "../assets/Thaddeus/details3.png";
import detailsFour from "../assets/Thaddeus/details4.png";
import flower from "../assets/Thaddeus/flower.png";
import thaddeus from "../assets/Thaddeus/thaddeus.gif";

const images = [
    {
        src: thaddeus,
        height: 644,
        width: 792
    },
    {
        src: bear,
        height: 920,
        width: 1178
    },
    {
        src: bookCover,
        height: 827,
        width: 1400
    },
    {
        src: chaptersOne,
        height: 920,
        width: 1362
    },
    {
        src: garlandOne,
        height: 920,
        width: 918
    },
    {
        src: detailsOne,
        height: 709,
        width: 1400
    },
    {
        src: chaptersTwo,
        height: 920,
        width: 1362
    },
    {
        src: garlandTwo,
        height: 920,
        width: 899
    },
    {
        src: detailsTwo,
        height: 709,
        width: 1400
    },
    {
        src: chaptersThree,
        height: 920,
        width: 1362
    },
    {
        src: garlandThree,
        height: 920,
        width: 899
    },
    {
        src: detailsThree,
        height: 709,
        width: 1400
    },
    {
        src: chaptersFour,
        height: 920,
        width: 1362
    },
    {
        src: garlandFour,
        height: 920,
        width: 899
    },
    {
        src: detailsFour,
        height: 709,
        width: 1400
    },
    {
        src: chaptersFive,
        height: 920,
        width: 1362
    },
    {
        src: garlandFive,
        height: 920,
        width: 899
    },
    {
        src: flower,
        height: 920,
        width: 2950
    },
];

function Thaddeus() {
    const openLightbox = useCallback((event, {photo, index}) => {
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

class GalleryThaddeus extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <Thaddeus/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Pan Tadeusz</p> : <p className='title'>Sir Thaddeus</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Autor: Adam Mickiewicz</p> : <p className="author">Written by Adam Mickiewicz</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Ilustracje: Michał Elwiro Andriolli<br/>Elementy dekoracyjne: Paulina Wyrt</p> : <p className="illustrations">Illustrated by Michał Elwiro Andriolli<br/>Decorative motifs by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Greg</p> : <p className="publishing-house">Greg Publishing House</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 2017</p> : <p className="premiere-date">Release date: 2017</p>}
                    {this.props.language === 'pl' ? <p className="description">Polska epopeja narodowa ilustrowana klasycznymi rysunkami Michała Elwiro Andriollego, wydanymi po raz pierwszy w 1882 roku we Lwowie oraz uzupełniona ozdobnymi, głównie floralnymi motywami w wykonaniu Pauliny Wyrt.</p> : <p className="description">Polish national epic illustrated with classical drawings by Michał Elwiro Andriolli, first published in 1882 in Lviv, and supplemented with decorative, mainly floral motifs created by Paulina Wyrt.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryThaddeus