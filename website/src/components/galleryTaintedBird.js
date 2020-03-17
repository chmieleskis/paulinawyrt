import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import ReactPlayer from "react-player";

import poster from "../assets/TaintedBird/poster.webp";
import bird from "../assets/TaintedBird/bird.gif";
import dzerzi from "../assets/TaintedBird/dzerzi.gif";
import maid from "../assets/TaintedBird/maid.gif";
import birdsEye from "../assets/TaintedBird/birdsEye.gif";


const images = [
    {
        src: poster,
        height: 920,
        width: 708
    },
    {
        src: bird,
        height: 459,
        width: 813
    },
    {
        src: dzerzi,
        height: 459,
        width: 813
    },{
        src: maid,
        height: 459,
        width: 813
    },{
        src: birdsEye,
        height: 459,
        width: 813
    },
];

function TaintedBird() {
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
            <ReactPlayer url='https://vimeo.com/88778185' width='100%'/>
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

class GalleryTaintedBird extends Component {
    render() {
        return (
            <section className="image-gallery">
                <TaintedBird/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Ptaszysko</p> : <p className='title'>Tainted Bird</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.posters} to={'/'}>plakat, </Link><Link className='category-link' onClick={this.props.films} to={'/'}>film</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.posters} to={'/'}>posters, </Link><Link className='category-link' onClick={this.props.films} to={'/'}> animated films</Link></p>}
                    {this.props.language === 'pl' ? <p className="description">Lorem ipsum dolor sit amet.</p> : <p className="description">„A Tainted Bird” is a short, half-surrealistic impression based on  Janusz Głowacki’s book‚ 'Good night, Dżerzi'. Centre of gravity for movie lies on relationship between Kosiński (whose identity is hardly suggested) and polish cleaning lady. Irregular braid of intersecting and missing events creates a profile of main character, who is unspecified in unequivocal opinions.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryTaintedBird