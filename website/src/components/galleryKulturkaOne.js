import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import kulturka from "../assets/Kulturka1/kulturka.png";
import car from "../assets/Kulturka1/car.png";


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
                    {this.props.language === 'pl' ? <p className='title'>Olbrzymek</p> : <p className='title'>L'ogrelet</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.booklets} to={'/'}>broszury</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.booklets} to={'/'}>booklets</Link></p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: listopad 2014</p> : <p className="premiere-date">Release date: november 2014</p>}
                    {this.props.language === 'pl' ? <p className="description">Plakat oraz program teatralny do sztuki "Olbrzymek" Suzanne Lebeau w reżyserii Jerzego Moszkowicza. Spektakl powstał we współpracy Centrum Sztuki Dziecka i Teatru Nowego w Poznaniu.</p> : <p className="description">Poster and theater program for the play "L'ogrelet" by Suzanne Lebeau, directed by Jerzy Moszkowicz. The performance was created in cooperation with the Children's Art Center and Nowy Theater in Poznań.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryKulturkaOne