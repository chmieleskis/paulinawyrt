import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import kulturka from "../assets/Kulturka1/kulturka.webp";
import car from "../assets/Kulturka1/car.webp";


const images = [
    {
        src: kulturka,
        height: 920,
        width: 893
    },
    {
        src: car,
        height: 920,
        width: 662
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

class GalleryKulturkaOne extends Component {
    render() {
        return (
            <section className="image-gallery">
                <Kulturka/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Kulturka: repertuar 2014/2015</p> : <p className='title'>Kulturka: repertoire 2014/2015</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.booklets} to={'/'}>broszury</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.booklets} to={'/'}>booklets</Link></p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Opracowanie graficzne: Paulina Wyrt</p> : <p className="illustrations">Graphic design by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: listopad 2014</p> : <p className="premiere-date">Release date: november 2014</p>}
                    {this.props.language === 'pl' ? <p className="description">Ilustrowany repertuar dla organizacji <a className='kulturka-link' target="_blank" rel="noopener noreferrer" href="https://www.kulturka-poznan.pl">Kulturka</a> zajmującej się edukacją kulturalną dzieci i młodzieży, wydany w formie kolorowej książeczki.</p> : <p className="description">Illustrated repertoire for the <a className='kulturka-link' target="_blank" rel="noopener noreferrer" href="https://www.kulturka-poznan.pl">Kulturka</a>  organization, dealing with the cultural education of children and youth, published in the form of a colorful booklet.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryKulturkaOne