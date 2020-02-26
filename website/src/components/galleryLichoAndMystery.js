import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bookCover from "../assets/Licho1/bookCover.png";
import house from "../assets/Licho1/house.png";
import workshop from "../assets/Licho1/workshop.png";
import bath from "../assets/Licho1/bath.png";
import readingBook from "../assets/Licho1/readingBook.png";
import halloweenBall from "../assets/Licho1/halloweenBall.png";
import walkingSchool from "../assets/Licho1/walkingSchool.png";

const images = [
    {
        src: bookCover,
        height: 920,
        width: 613
    },
    {
        src: house,
        height: 920,
        width: 613
    },
    {
        src: workshop,
        height: 920,
        width: 613
    },
    {
        src: bath,
        height: 920,
        width: 613
    },
    {
        src: readingBook,
        height: 920,
        width: 613
    },
    {
        src: halloweenBall,
        height: 920,
        width: 613
    },
    {
        src: walkingSchool,
        height: 920,
        width: 613
    },
];

function LichoAndMystery() {
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

class GalleryLichoAndMystery extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <LichoAndMystery/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Małe Licho i tajemnica Niebożątka</p> : <p className='title'>Little Devil and the Mystery of Bożek</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Autor: Marta Kisiel</p> : <p className="author">Written by Marta Kisiel</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Ilustracje: Paulina Wyrt</p> : <p className="illustrations">Illustrated by Paulina Wyrt</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Wilga</p> : <p className="publishing-house">Wilga Publishing House</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 19.09.2018</p> : <p className="premiere-date">Release date: 19.09.2018</p>}
                    {this.props.language === 'pl' ? <p className="description">W pewnym starym, niesamowitym domu na uboczu, za wysokim ogrodzeniem, mieszka chłopiec imieniem Bożek, zwany też Niebożątkiem, który nigdy nie jest sam. Bo oprócz starej skrzyni ze skarbami i najfajniejszej mamy pod słońcem ma też najprawdziwszego anioła stróża... a pod jego łóżkiem mieszka potwór, który ciągle podkrada mu kapcie.<br/>"Małe Licho i tajemnica Niebożątka" to trochę zabawna, a trochę straszna historia o tym, że bycie innym wcale nie jest takie złe, jak może się z początku wydawać, lecz najważniejsze jest zawsze bycie sobą.<br/>Wydanie zawiera kolorową okładkę i piętnaście czarno-białych ilustracji.</p> : <p className="description">In a certain old, amazing house off the beaten track, behind a high fence, lives a boy named Bożek, also known as the Poor Thing who is never alone. Because in addition to the old treasure chest and the coolest mother under the sun, he also has a real guardian angel... and under his bed lives a monster who constantly steals his slippers.<br/>"Little Devil and the Mystery of Poor Thing" is a bit funny and a bit scary story about being different is not as bad as it may seem at first, but the most important thing is always being yourself.<br/>Edition includes a colored cover and fifteen black and white illustrations.</p>}
                    {this.props.language === 'pl' ? <p className="award">Nagrody:</p> : <p className="awards">Awards:</p>}
                    <div className="ferdynand"/>
                </div>
            </section>
        )
    }
}

export default GalleryLichoAndMystery