import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import ReactPlayer from "react-player";

import synesthesis from "../assets/Synesthesis/synesthesis.webp";

const images = [
    {
        src: synesthesis,
        height: 920,
        width: 1378
    },
];

function Synesthesis() {
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
            <ReactPlayer url='https://vimeo.com/420339490' width='100%'/>
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

class GallerySynesthesis extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <Synesthesis/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Synestezja 2</p> : <p className='title'>Synesthesia 2</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.other} to={'/'}>Inne</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.other} to={'/'}>Other</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Pomysł i kompozycja: Aleksandra Słyż</p> : <p className="author">Concept and composition by Aleksandra Słyż</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Wideo i mapping 3D: Paulina Wyrt</p> : <p className="illustrations">Video and 3D mapping by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="author">Produkcja i realizacja dźwięku: Aleksandra Słyż, Agata Dankowska</p> : <p className="publishing-house">Production and sound engineering by Aleksandra Słyż and Agata Dankowska</p>}
                    {this.props.language === 'pl' ? <p className="author">Choreografia i taniec: Anna Kamińska, Patryk Durski</p> : <p className="publishing-house">Choreography and performance by Anna Kamińska and Patryk Durski</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: Ung Nordisk Musik, 27.08.2018, Piteå, Szwecja</p> : <p className="premiere-date">Release date: Ung Nordisk Musik, 27.08.2018, Piteå, Sweden</p>}
                    {this.props.language === 'pl' ? <p className="description">Projekt SYNESTE7JA 2 to amalgamat sztuk. Punktem wyjścia jest ciało tancerza, zamknięte w kostce z czterema ekranami, na których odbywa się projekcja. Obraz i dźwięk zmapowany są tak, by móc „zamknąć performerów” w swoistej przestrzeni audiowizualnej.</p> : <p className="description">SYNESTE7JA 2 project is an amalgam of arts. The starting point is the body of the dancer, enclosed in cube with four screens on which the projection takes place. Image and sound are mapped so as to be able to "close performers" in a specific audiovisual space.</p>}
                    {this.props.language === 'pl' ? <p className="description">W opisanym projekcie tancerz staje się bezpośrednim inicjatorem informacji zarówno dźwiękowej, jak i wizualnej. Kreuje on pętlę zwrotną ruchu z muzyką i wizją, obie sfery stają się nierozerwalną całością, w obrębie której nawzajem na siebie wpływają.</p> : <p className="description">In the described project, the dancer becomes a direct initiator of both audio and visual information. It creates a feedback loop of movement with music and vision, both spheres become an inseparable whole, within which they influence each other.</p>}
                </div>
            </section>
        )
    }
}

export default GallerySynesthesis