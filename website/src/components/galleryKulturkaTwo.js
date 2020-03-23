import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import sketchOne from "../assets/Kulturka3/sketch1.webp";
import booklet from "../assets/Kulturka3/booklet.webp";
import circusAnim from "../assets/Kulturka3/circusAnim.gif";
import bookletCover from "../assets/Kulturka3/bookletCover.webp";
import banjo from "../assets/Kulturka3/banjo.webp";
import flute from "../assets/Kulturka3/flute.webp";
import fluteAnim from "../assets/Kulturka3/fluteAnim.gif";
import music from "../assets/Kulturka3/music.webp";
import theater from "../assets/Kulturka3/theater.webp";
import trumpet from "../assets/Kulturka3/trumpet.webp";
import house from "../assets/Kulturka3/house1.webp";
import houseTwo from "../assets/Kulturka3/house2.webp";
import details from "../assets/Kulturka3/details.webp";
import sketchTwo from "../assets/Kulturka3/sketch2.webp";

const images = [
    {
        src: sketchOne,
        height: 274,
        width: 1399
    },
    {
        src: booklet,
        height: 920,
        width: 895
    },
    {
        src: circusAnim,
        height: 300,
        width: 1200
    },
    {
        src: bookletCover,
        height: 920,
        width: 678
    },
    {
        src: banjo,
        height: 920,
        width: 650
    },
    {
        src: flute,
        height: 920,
        width: 1117
    },
    {
        src: fluteAnim,
        height: 300,
        width: 1200
    },
    {
        src: music,
        height: 920,
        width: 1301
    },
    {
        src: theater,
        height: 920,
        width: 650
    },
    {
        src: trumpet,
        height: 920,
        width: 895
    },
    {
        src: house,
        height: 920,
        width: 650
    },
    {
        src: houseTwo,
        height: 920,
        width: 650
    },
    {
        src: details,
        height: 920,
        width: 1241
    },
    {
        src: sketchTwo,
        height: 430,
        width: 1399
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
                    {this.props.language === 'pl' ? <p className='title'>Kulturka: repertuar 2019/2020</p> : <p className='title'>Kulturka: repertoire 2019/2020</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.booklets} to={'/'}>broszury, </Link><Link className='category-link' onClick={this.props.other} to={'/'}>inne</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.booklets} to={'/'}>booklets, </Link><Link className='category-link' onClick={this.props.other} to={'/'}>other</Link></p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Opracowanie graficzne: Paulina Wyrt</p> : <p className="illustrations">Graphic design by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: listopad 2019</p> : <p className="premiere-date">Release date: november 2019</p>}
                    {this.props.language === 'pl' ? <p className="description">Ilustrowany repertuar dla organizacji <a className='kulturka-link' target="_blank" rel="noopener noreferrer" href="https://www.kulturka-poznan.pl">Kulturka</a> zajmującej się edukacją kulturalną dzieci i młodzieży, wydany w formie kolorowej książeczki.</p> : <p className="description">Illustrated repertoire for the <a className='kulturka-link' target="_blank" rel="noopener noreferrer" href="https://www.kulturka-poznan.pl">Kulturka</a>  organization, dealing with the cultural education of children and youth, published in the form of a colorful booklet.</p>}
                    {this.props.language === 'pl' ? <p className="description">Grafiki zostały wykorzystane w layoucie strony internetowej, a także jako rewers wizytówek.</p> : <p className="description">The graphics were used in the layout of the website, as well as the reverse of business cards.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryKulturkaTwo