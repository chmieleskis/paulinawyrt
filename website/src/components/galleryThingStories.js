import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bookCover from "../assets/Thing-stories/bookCover.webp";
import threeGrumbles from "../assets/Thing-stories/threeGrumbles.webp";
import brother from "../assets/Thing-stories/brother.webp";
import roofs from "../assets/Thing-stories/roofs.webp";


const images = [
    {
        src: bookCover,
        height: 920,
        width: 999
    },
    {
        src: threeGrumbles,
        height: 920,
        width: 920
    },
    {
        src: brother,
        height: 920,
        width: 920
    },
    {
        src: roofs,
        height: 920,
        width: 920
    },

];

function ThingStories() {
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

class GalleryThingStories extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <ThingStories/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Opowieści przedmiotów, czyli bajki podsłuchane w muzeum</p> : <p className='title'>Stories of objects, or fairy tales overheard in a museum</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Autor: Jagoda Gumińska-Oleksy</p> : <p className="author">Written by Jagoda Gumińska-Oleksy</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Ilustracje: Paulina Wyrt</p> : <p className="illustrations">Illustrated by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Muzeum Narodowego w Krakowie</p> : <p className="publishing-house">National Museum in Krakow</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 21.06.2018</p> : <p className="premiere-date">Release date: 21.06.2018</p>}
                    {this.props.language === 'pl' ? <p className="description">"Opowieści przedmiotów" to zestaw baśni zainspirowanych niezwykłymi zbiorami Muzeum Narodowego w Krakowie. Po baśnie te powinien sięgnąć każdy, kto chciałby wiedzieć,skąd się wzięły muszki na twarzy, dlaczego nie należy zbyt intensywnie machać wachlarzem i dlaczego nie warto szukać przyjaciela po drugiej stronie lustra.<br/>Wydanie zawiera okładkę i czterdzieści ilustracji.</p> : <p className="description">"Stories of Objects" is a set of fairy tales inspired by the extraordinary collections of the National Museum in Krakow. Those fairy tales should be reached by anyone who wants to know where the bow ties came from, why you shouldn't wave the fan too hard, and why you shouldn't look for a friend on the other side of the mirror.<br/>Edition includes a colored cover and forty illustrations.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryThingStories