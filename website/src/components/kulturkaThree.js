import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import boatBottom from "../assets/Kulturka2017/boatBottom.webp";
import boats from "../assets/Kulturka2017/boats.webp";
import houseAnim from "../assets/Kulturka2017/houseAnom.gif";
import carts from "../assets/Kulturka2017/carts.webp";
import boatAnim from "../assets/Kulturka2017/boatAnim.gif";
import artist from "../assets/Kulturka2017/artist.webp";
import detailsBooklet from "../assets/Kulturka2017/detailsBooklet.webp";
import robot from "../assets/Kulturka2017/robot.webp";
import robotAnim from "../assets/Kulturka2017/robotAnim.gif";
import musicHouse from "../assets/Kulturka2017/musicHouse.webp";

const images = [
    {
        src: boatBottom,
        height: 685,
        width: 1399
    },
    {
        src: boats,
        height: 920,
        width: 1054
    },
    {
        src: houseAnim,
        height: 587,
        width: 789
    },
    {
        src: carts,
        height: 832,
        width: 1400
    },
    {
        src: boatAnim,
        height: 455,
        width: 793
    },
    {
        src: artist,
        height: 920,
        width: 1096
    },
    {
        src: detailsBooklet,
        height: 920,
        width: 743
    },
    {
        src: robot,
        height: 215,
        width: 1400
    },
    {
        src: robotAnim,
        height: 290,
        width: 792
    },
    {
        src: musicHouse,
        height: 920,
        width: 564
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

class GalleryKulturkaThree extends Component {
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

export default GalleryKulturkaThree