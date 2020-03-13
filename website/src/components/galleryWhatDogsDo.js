import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bookCover from "../assets/WhatDogsDo/bookCover.webp";
import balcony from "../assets/WhatDogsDo/balcony.webp";
import restaurant from "../assets/WhatDogsDo/restaurant.webp";
import town from "../assets/WhatDogsDo/town.webp";
import beautySalon from "../assets/WhatDogsDo/beautySalon.webp";


const images = [
    {
        src: bookCover,
        height: 920,
        width: 698
    },
    {
        src: balcony,
        height: 920,
        width: 1317
    },
    {
        src: restaurant,
        height: 920,
        width: 1317
    },
    {
        src: town,
        height: 920,
        width: 1317
    },
    {
        src: beautySalon,
        height: 920,
        width: 1317
    },

];

function WhatDogsDo() {
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

class GalleryWhatDogsDo extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <WhatDogsDo/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Co robią psy</p> : <p className='title'>What dogs do</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Autor: Paulina Wyrt</p> : <p className="author">Written by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Ilustracje: Paulina Wyrt</p> : <p className="illustrations">Illustrated by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Nasza Księgarnia<br/>seria Opowiem ci mamo</p> : <p className="publishing-house">Nasza Księgarnia Publishing House<br/>I Will Tell You, Mom series</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 20.06.2018</p> : <p className="premiere-date">Release date: 20.06.2018</p>}
                    {this.props.language === 'pl' ? <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi culpa earum eveniet fugit magni maiores, perspiciatis quod repellendus vero?<br/>Wydanie zawiera okładkę i trzynaście dwustronnych ilustracji.</p> : <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur at distinctio eum hic in ipsam reiciendis sapiente sint ullam.<br/>Edition includes a colored cover and thirteen two-sided illustrations.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryWhatDogsDo