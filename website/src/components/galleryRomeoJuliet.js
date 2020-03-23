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
                    {this.props.language === 'pl' ? <p className="description">Nowe wydanie najszerzej znana historia miłosnej świata – na szlachetnym papierze, w niezwykle dopracowanej szacie graficznej utrzymanej w barokowym stylu, z ilustracjami oddającymi ducha utworu.</p> : <p className="description">The new edition of the most widely known love story in the world - on precious paper, in an extremely refined graphic design maintained in the Baroque style, with illustrations reflecting the spirit of the tragedy.</p>}
                    {this.props.language === 'pl' ? <p className="description">Wydanie zawiera okładkę w różnych wersjach kolorystycznych, dziesięć całostronicowych ilustracji oraz szereg dekoracji floralnych.</p> : <p className="description">The edition includes a cover in various color versions, ten full-page illustrations and a number of floral decorations.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryRomeoJuliet