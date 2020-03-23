import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import traveller from "../assets/Ezop/traveller.webp";
import foxCrow from "../assets/Ezop/fox&crow.webp";
import crow from "../assets/Ezop/crow.webp";
import cocks from "../assets/Ezop/cocks.webp";
import fox from "../assets/Ezop/fox.webp";
import hare from "../assets/Ezop/hare.webp";
import cat from "../assets/Ezop/cat.webp";

const images = [
    {
        src: traveller,
        height: 627,
        width: 1359
    },
    {
        src: foxCrow,
        height: 920,
        width: 1264
    },
    {
        src: crow,
        height: 490,
        width: 1395
    },
    {
        src: cocks,
        height: 920,
        width: 1264
    },
    {
        src: fox,
        height: 490,
        width: 1395
    },
    {
        src: hare,
        height: 852,
        width: 1395
    },
    {
        src: cat,
        height: 727,
        width: 1395
    },
];

function Ezop() {
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

class GalleryEzop extends Component {
    render() {
        return (
            <section className="image-gallery gallery-licho">
                <Ezop/>
                <div className="gallery-descriptions">
                    {this.props.language === 'pl' ? <p className='title'>Bajki Ezopa</p> : <p className='title'>Aesop's Fairy Tales</p>}
                    {this.props.language === 'pl' ? <p className='category'>Kategoria: <Link className='category-link' onClick={this.props.books} to={'/'}>książki</Link></p> : <p className='category'>Category: <Link className='category-link' onClick={this.props.books} to={'/'}>books</Link></p>}
                    {this.props.language === 'pl' ? <p className="author">Autor:Mirosław Krzyszewski</p> : <p className="author">Written by Mirosław Krzyszewski</p>}
                    {this.props.language === 'pl' ? <p className="illustrations">Ilustracje: Paulina Wyrt<br/>Liternictwo: Beata Kurek</p> : <p className="illustrations">Illustrated by Paulina Wyrt<br/>Lettering by Beata Kurek</p>}
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Novae Res</p> : <p className="publishing-house">Novae Res Publishing House</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 2015</p> : <p className="premiere-date">Release date: 2015</p>}
                    {this.props.language === 'pl' ? <p className="description">Naiwne owce, butne koguty, uparte koziołki i wiele innych zwierząt noszących bardzo ludzkie cechy… Lubiane i cenione na całym świecie bajki Ezopa to nie tylko uniwersalne i pouczające opowiastki dla najmłodszych. To także doskonała lektura dla starszych czytelników.</p> : <p className="description">Naive sheep, dusty roosters, stubborn goats and many other animals bearing very human qualities... Aesop's fairy tales are not only universal and informative stories for the youngest. It is also great reading for older readers.</p>}
                    {this.props.language === 'pl' ? <p className="description">Wierszowana, wpadająca w ucho adaptacja bajek Ezopa pomoże małym ludziom zrozumieć otaczający ich świat, a dużym sprawi wiele czytelniczej przyjemności.</p> : <p className="description">The poetic, catchy adaptation of Aesop's fairy tales will help small people understand the world around them, and give a lot of reading pleasure to large ones.</p>}
                    {this.props.language === 'pl' ? <p className="description">Wydanie zawiera okładkę i piętnaście całostronicowych ilustracji.</p> : <p className="description">The edition includes a cover and fifteen full-page illustrations.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryEzop