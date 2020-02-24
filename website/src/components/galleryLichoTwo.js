import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bookCover from "../assets/Licho/book-cover.png";
import bookCoverGif from "../assets/Licho/book-cover.gif";
import onTheRoad from "../assets/Licho/onTheRoad.png";
import auntOda from "../assets/Licho/auntOda.png";
import auntOdaGif from "../assets/Licho/auntOda.gif";
import bozek from "../assets/Licho/bozek.png";
import odaChopsWood from "../assets/Licho/odaChopsWood.png";

const images = [
    {
        src: bookCover,
        height: 920,
        width: 636
    },
    {
        src: bookCoverGif,
        height: 581,
        width: 800
    },
    {
        src: onTheRoad,
        height: 920,
        width: 650
    },
    {
        src: auntOda,
        height: 920,
        width: 622
    },
    {
        src: auntOdaGif,
        height: 720,
        width: 596
    },
    {
        src: bozek,
        height: 920,
        width: 622
    },
    {
        src: odaChopsWood,
        height: 920,
        width: 622
    },
];

function LichoAndAngel() {
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

class GalleryLicho extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <LichoAndAngel/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Małe licho i anioł<br/>z kamienia</p> : <p className='title'>Little Devil And The Stone Angel</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
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