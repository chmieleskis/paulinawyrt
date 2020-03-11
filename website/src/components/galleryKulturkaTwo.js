import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bookletCover from "../assets/Kulturka3/bookletCover.png";
import banjo from "../assets/Kulturka3/banjo.png";
import circus from "../assets/Kulturka3/circus.png";
import flute from "../assets/Kulturka3/flute.png";
import music from "../assets/Kulturka3/music.png";
import theater from "../assets/Kulturka3/theater.png";
import trumpet from "../assets/Kulturka3/trumpet.png";
import house from "../assets/Kulturka3/house1.png";
import houseTwo from "../assets/Kulturka3/house2.png";

const images = [
    {
        src: bookletCover,
        height: 920,
        width: 678
    },
    {
        src: banjo,
        height: 920,
        width: 1423
    },
    {
        src: circus,
        height: 920,
        width: 902
    },    {
        src: flute,
        height: 920,
        width: 662
    },    {
        src: music,
        height: 920,
        width: 827
    },    {
        src: theater,
        height: 920,
        width: 476
    },    {
        src: trumpet,
        height: 920,
        width: 681
    },    {
        src: house,
        height: 920,
        width: 805
    },    {
        src: houseTwo,
        height: 920,
        width: 875
    },
];

function Kulturka() {
    const openLightbox = useCallback((event, {index}) => {
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
}

class GalleryKulturkaTwo extends Component {
    render() {
        return (
            <section className="image-gallery">
                <Kulturka/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Kulturka</p> : <p className='title'>Culture</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.booklets} to={'/'}>broszury</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.booklets} to={'/'}>booklets</Link></p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: listopad 2014</p> : <p className="premiere-date">Release date: november 2014</p>}
                    {this.props.language === 'pl' ? <p className="description">Ilustrowany program dla organizacji <a className='kulturka-link' target="_blank" rel="noopener noreferrer" href="https://www.kulturka-poznan.pl">Kulturka</a> wydana w formie kolorowej książeczki...</p> : <p className="description">Lorem ipsum <a className='kulturka-link' target="_blank" rel="noopener noreferrer" href="https://www.kulturka-poznan.pl">Kulturka</a> dolor sit amet.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryKulturkaTwo