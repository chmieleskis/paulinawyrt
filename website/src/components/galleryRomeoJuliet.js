import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import covers from "../assets/RomeoAndJuliet/covers.webp";
import books from "../assets/RomeoAndJuliet/books.webp";
import titlePages from "../assets/RomeoAndJuliet/titlePages.webp";
import hands from "../assets/RomeoAndJuliet/hands.webp";
import romeoJuliet from "../assets/RomeoAndJuliet/romeoJuliet.webp";
import bookHands from "../assets/RomeoAndJuliet/booksHands.webp";
import romeo from "../assets/RomeoAndJuliet/romeo.webp";
import julietPoison from "../assets/RomeoAndJuliet/julietPoison.webp";
import swords from "../assets/RomeoAndJuliet/swords.webp";
import julietMask from "../assets/RomeoAndJuliet/julietMask.webp";
import romeoJulietSuicide from "../assets/RomeoAndJuliet/romeoJulieSuicide.webp";
import dagger from "../assets/RomeoAndJuliet/dagger.webp";


const images = [
    {
        src: covers,
        height: 920,
        width: 732
    },
    {
        src: titlePages,
        height: 920,
        width: 1073
    },
    {
        src: books,
        height: 920,
        width: 677
    },
    {
        src: hands,
        height: 920,
        width: 657
    },
    {
        src: romeoJuliet,
        height: 920,
        width: 657
    },
    {
        src: bookHands,
        height: 920,
        width: 1057
    },
    {
        src: romeo,
        height: 920,
        width: 715
    },
    {
        src: julietPoison,
        height: 920,
        width: 657
    },
    {
        src: swords,
        height: 645,
        width: 2000
    },
    {
        src: julietMask,
        height: 920,
        width: 657
    },
    {
        src: romeoJulietSuicide,
        height: 920,
        width: 657
    },
    {
        src: dagger,
        height: 920,
        width: 648
    },
];

function RomeoJuliet() {
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

class GalleryRomeoJuliet extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <RomeoJuliet/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Romeo i Julia</p> : <p className='title'>Romeo and Juliet</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Autor: William Sheakespeare</p> : <p className="author">Written by William Sheakespeare</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Ilustracje: Paulina Wyrt<br/>Liternictwo: Beata Kurek</p> : <p className="illustrations">Illustrated by Paulina Wyrt<br/>Lettering by Beata Kurek</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Greg</p> : <p className="publishing-house">Greg Publishing House</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 2017</p> : <p className="premiere-date">Release date: 2017</p>}
                    {this.props.language === 'pl' ? <p className="description">W pewnym starym, niesamowitym domu na uboczu, za wysokim ogrodzeniem, mieszka chłopiec imieniem Bożek, zwany też Niebożątkiem, który nigdy nie jest sam. Bo oprócz starej skrzyni ze skarbami i najfajniejszej mamy pod słońcem ma też najprawdziwszego anioła stróża... a pod jego łóżkiem mieszka potwór, który ciągle podkrada mu kapcie.<br/>"Małe Licho i tajemnica Niebożątka" to trochę zabawna, a trochę straszna historia o tym, że bycie innym wcale nie jest takie złe, jak może się z początku wydawać, lecz najważniejsze jest zawsze bycie sobą.<br/>Wydanie zawiera kolorową okładkę i piętnaście czarno-białych ilustracji.</p> : <p className="description">In a certain old, amazing house off the beaten track, behind a high fence, lives a boy named Bożek, also known as the Poor Thing who is never alone. Because in addition to the old treasure chest and the coolest mother under the sun, he also has a real guardian angel... and under his bed lives a monster who constantly steals his slippers.<br/>"Little Devil and the Mystery of Poor Thing" is a bit funny and a bit scary story about being different is not as bad as it may seem at first, but the most important thing is always being yourself.<br/>Edition includes a colored cover and fifteen black and white illustrations.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryRomeoJuliet