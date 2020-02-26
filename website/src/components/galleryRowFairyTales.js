import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bookCover from "../assets/Row-in-fairytales/bookCover.png";
import soldiers from "../assets/Row-in-fairytales/soldiers.png";
import spider from "../assets/Row-in-fairytales/spider.png";
import runField from "../assets/Row-in-fairytales/runField.png";
import dragonShadow from "../assets/Row-in-fairytales/dragonShadow.png";
import journeySpider from "../assets/Row-in-fairytales/journeySpider.png";


const images = [
    {
        src: bookCover,
        height: 920,
        width: 646
    },
    {
        src: soldiers,
        height: 920,
        width: 1288
    },
    {
        src: spider,
        height: 920,
        width: 1288
    },
    {
        src: runField,
        height: 920,
        width: 1288
    },
    {
        src: dragonShadow,
        height: 920,
        width: 1288
    },
    {
        src: journeySpider,
        height: 920,
        width: 649
    }
];

function RowFairyTales() {
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

class GalleryRowFairyTales extends Component {
    render() {
        return (
            <section className="image-gallery">
                <RowFairyTales/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Awantura w bajkach</p> : <p className='title'>Row in Fairy Tales</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Autor: Agnieszka Olejnik</p> : <p className="author">Written by Agnieszka Olejnik</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Ilustracje: Paulina Wyrt</p> : <p className="illustrations">Illustrated by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Adamada</p> : <p className="publishing-house">Adamada Publishing House</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 13.09.2018</p> : <p className="premiere-date">Release date: 13.09.2018</p>}
                    {this.props.language === 'pl' ? <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur beatae consequatur cumque debitis dicta dolorem ducimus excepturi ipsa labore sed!<br/>Wydanie zawiera okłądkę i dwadzieścia jeden ilustracji.</p> : <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur doloremque fugit iste nihil odio, repudiandae! At cum facilis qui?<br/>Edition includes a colored cover and twenty-one illustrations.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryRowFairyTales