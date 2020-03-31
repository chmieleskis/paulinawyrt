import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import posters from "../assets/Otoz/posters.webp";
import robot from "../assets/Otoz/robot_m.webp";
import beach from "../assets/Otoz/plaza.gif";
import plane from "../assets/Otoz/samolot_m.webp";
import stroller from "../assets/Otoz/wozek_m.webp";
import motorcycle from "../assets/Otoz/motor.gif";
import postersTshirt from "../assets/Otoz/postersTshirt.webp";
import sketch from "../assets/Otoz/sketch.webp";

const images = [
    {
        src: posters,
        height: 920,
        width: 979
    },
    {
        src: robot,
        height: 920,
        width: 925
    },
    {
        src: beach,
        height: 450,
        width: 756
    },
    {
        src: plane,
        height: 920,
        width: 742
    },
    {
        src: stroller,
        height: 920,
        width: 839
    },
    {
        src: postersTshirt,
        height: 376,
        width: 1396
    },
    {
        src: motorcycle,
        height: 450,
        width: 800
    },
    {
        src: sketch,
        height: 345,
        width: 1400
    },
];

function OTOZ() {
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

class GalleryOTOZ extends Component {
    render() {
        return (
            <section className="image-gallery">
                <OTOZ/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Znajdź swoją drugą połówkę</p> : <p className='title'>Find Your Soulmate</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.posters} to={'/'}>plakaty, </Link><Link className='category-link' onClick={this.props.films} to={'/'}>animacje, </Link><Link className='category-link' onClick={this.props.other} to={'/'}>inne</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.posters} to={'/'}>posters, </Link><Link className='category-link' onClick={this.props.films} to={'/'}> animated films, </Link><Link className='category-link' onClick={this.props.other} to={'/'}>other</Link></p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Opracowanie graficzne i animacja: Paulina Wyrt</p> : <p className="illustrations">Graphic design & animation by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 16.08.2016</p> : <p className="premiere-date">Release date: 16.08.2016</p>}
                    {this.props.language === 'pl' ? <p className="description">Projekty plakatów i krótkich animacji dla Ogólnopolskiego Towarzystwa Ochrony Zwierząt "Animals" promujących adopcję psów. Grafika może być wykorzystywana przy produkcji gadżetów.</p> : <p className="description">Poster and short animation projects for The National Association For Animal Protection "Animals" promoting the adoption of dogs. Graphics may be used in gadgets production.</p>}
                    <div className="face"/>
                </div>
            </section>
        )
    }
}

export default GalleryOTOZ