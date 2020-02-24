import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import robot from "../assets/Otoz/robot_m.png";
import beach from "../assets/Otoz/plaza.gif";
import plane from "../assets/Otoz/samolot_m.png";
import stroller from "../assets/Otoz/wozek_m.png";
import motorcycle from "../assets/Otoz/motor.gif";

const images = [
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
        src: motorcycle,
        height: 450,
        width: 800
    },
    {
        src: stroller,
        height: 920,
        width: 839
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
                    {this.props.language === 'pl' ? <p className='title'>Ogólnopolskie Towarzystwo Ochrony Zwierząt "Animals"</p> : <p className='title'>The National Association For Animal Protection "Animals"</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.posters} to={'/'}>plakaty, </Link><Link className='category-link' onClick={this.props.films} to={'/'}>filmy</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.posters} to={'/'}>posters, </Link><Link className='category-link' onClick={this.props.films} to={'/'}> animated films</Link></p>}
                    {this.props.language === 'pl' ? <p className="description">Projekty plakatów i krótkich animacji dla Ogólnopolskiego Towarzystwa Ochrony Zwierząt "Animals".</p> : <p className="description">Poster and short animation projects for The National Association For Animal Protection "Animals".</p>}
                </div>
            </section>
        )
    }
}

export default GalleryOTOZ