import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import ReactPlayer from "react-player";

import trees from "../assets/Fury/trees.webp";
import fieldAnim from "../assets/Fury/fieldAnim";
import birdsAnim from "../assets/Fury/birdsAnim";
import workAnim from "../assets/Fury/workAnim";
import work from "../assets/Fury/work.webp";

const images = [
    {
        src: trees,
        height: 738,
        width: 1400
    },
    {
        src: fieldAnim,
        height: 380,
        width: 720
    },
    {
        src: birdsAnim,
        height: 380,
        width: 720
    },
    {
        src: workAnim,
        height: 380,
        width: 720
    },
    {
        src: work,
        height: 738,
        width: 1400
    },
];

function Fury() {
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
            <ReactPlayer url='https://vimeo.com/150811360' width='100%'/>
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

class GalleryFury extends Component {
    render() {
        return (
            <section className="image-gallery">
                <Fury/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Furia</p> : <p className='title'>Fury</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.films} to={'/'}>animacje</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.films} to={'/'}> animated films</Link></p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Realizacja filmu: Paulina Wyrt<br/>Muzyka i udźwiękowienie: Aleksandra Słyż</p> : <p className="illustrations">Realized by Paulina Wyrt<br/>Music and sound by Aleksandra Słyż</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 2016</p> : <p className="premiere-date">Release date: 2016</p>}
                    {this.props.language === 'pl' ? <p className="description">Czy film animowany, przedstawiający nieznane powszechnie wydarzenia, może mieć walor dokumentalny? Animacja zrealizowana została w sposób charakterystycznej dla kina poetyckiego. Jej efemeryczna forma koresponduje, wbrew dokumentalnym aspiracjom filmu, z ulotnością wydarzenia. Kameralna rekonstrukcja pewnych dramatycznych wydarzeń, staje się próbą odpowiedzi na pytanie o granice oraz wiarygodność animowanego dokumentu.</p> : <p className="description">Does an animated film that deals with the widely unknown incidents may have any documentary value? This animation has been produced within a poetic cinema pardigm. Despite documentary aspirations, its ephemeral form corresponds with the transience of the event itself. The intimate reconstruction of some dramatic developments becomes an attempt to answer the question of the limits and reliability of an animated document.</p>}
                    {this.props.language === 'pl' ? <p className="description">Film zrealizowany został jako praca dyplomowa na Uniwersytecie Artystycznym w Poznaniu.</p> : <p className="description">This film was created as a basis for the Master thesis defended at the University of Arts in Poznan.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryFury