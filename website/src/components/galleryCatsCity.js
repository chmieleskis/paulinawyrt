import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import poster from "../assets/Cats-city/poster.webp";
import frame from "../assets/Cats-city/frame.webp";
import poster2 from "../assets/Cats-city/poster2.webp";
import frameTwo from "../assets/Cats-city/frame2.webp";

const images = [
    {
        src: poster,
        height: 920,
        width: 650
    },
    {
        src: frame,
        height: 920,
        width: 885
    },
    {
        src: poster2,
        height: 920,
        width: 650
    },
    {
        src: frameTwo,
        height: 920,
        width: 884
    },
];

function GalleryCats() {
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

class GalleryCatsCity extends Component {
    render() {
        return (
            <section className="image-gallery">
                <GalleryCats/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Miasto kotów</p> : <p className='title'>City of Cats</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.posters} to={'/'}>plakaty</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.posters} to={'/'}>posters</Link></p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: sierpień 2016</p> : <p className="premiere-date">Release date: august 2016</p>}
                    {this.props.language === 'pl' ? <p className="description">Dwa plakaty zaprojektowane dla fundacji "Miasto kotów", na potrzeby kampanii promującej adopcje zwierzaków.</p> : <p className="description">Two posters designed for the "Miasto kotów" foundation (City of Cats Foundation) for the needs of the campaign promoting animal adoption.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryCatsCity