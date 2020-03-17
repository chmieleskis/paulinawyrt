import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import ReactPlayer from "react-player";

import island from "../assets/Circus/island.webp";
import sketchCovers from "../assets/Circus/sketchCovers.webp";
import recordCovers from "../assets/Circus/recordCovers.webp";
import circus from "../assets/Circus/circus.webp";
import sketchOne from "../assets/Circus/sketch1.webp";
import fox from "../assets/Circus/fox.gif";
import foxColor from "../assets/Circus/foxColor.gif";
import sketchTwo from "../assets/Circus/sketch2.webp";
import racoon from "../assets/Circus/racoon.gif";
import floatingIsland from "../assets/Circus/floatingIsland.gif";
import sketchThree from "../assets/Circus/sketch3.webp";
import slothColor from "../assets/Circus/slothColor.gif";
import sketchFour from "../assets/Circus/sketch4.webp";

const images = [
    {
        src: island,
        height: 920,
        width: 1004
    },
    {
        src: sketchCovers,
        height: 408,
        width: 1920
    },
    {
        src: recordCovers,
        height: 920,
        width: 1193
    },
    {
        src: circus,
        height: 202,
        width: 1295
    },
    {
        src: sketchOne,
        height: 627,
        width: 1920
    },
    {
        src: fox,
        height: 450,
        width: 800
    },
    {
        src: foxColor,
        height: 450,
        width: 800
    },
    {
        src: sketchTwo,
        height: 408,
        width: 1920
    },
    {
        src: racoon,
        height: 450,
        width: 800
    },
    {
        src: floatingIsland,
        height: 450,
        width: 800
    },
    {
        src: sketchThree,
        height: 408,
        width: 1920
    },
    {
        src: slothColor,
        height: 450,
        width: 800
    },
    {
        src: sketchFour,
        height: 627,
        width: 1920
    },
];

function FloatingIsland() {
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
            <ReactPlayer url='https://vimeo.com/156119885' width='100%'/>
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

class GalleryFloatingIsland extends Component {
    render() {
        return (
            <section className="image-gallery">
                <FloatingIsland/>
                <div className="gallery-descriptions">
                    <p className='title'>Floating Islands / Circus in the Sky</p>
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.posters} to={'/'}>plakat, </Link><Link className='category-link' onClick={this.props.films} to={'/'}>film</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.posters} to={'/'}>posters, </Link><Link className='category-link' onClick={this.props.films} to={'/'}> animated films</Link></p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Projekt, ilustracje, realizacja filmu: Paulina Wyrt<br/>Liternictwo: Beata Kurek</p> : <p className="illustrations">Projected, illustrated and film realisation<br/>by Paulina Wyrt<br/>Lettering by Beata Kurek</p>}
                    {this.props.language === 'pl' ? <p className="description">Lorem ipsum dolor sit amet.</p> : <p className="description">„A Tainted Bird” is a short, half-surrealistic impression based on  Janusz Głowacki’s book‚ 'Good night, Dżerzi'. Centre of gravity for movie lies on relationship between Kosiński (whose identity is hardly suggested) and polish cleaning lady. Irregular braid of intersecting and missing events creates a profile of main character, who is unspecified in unequivocal opinions.</p>}
                    <div className="racoon"/>
                </div>
            </section>
        )
    }
}

export default GalleryFloatingIsland