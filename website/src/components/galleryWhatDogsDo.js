import React, {Component, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";

import bookCover from "../assets/WhatDogsDo/bookCover.webp";
import balcony from "../assets/WhatDogsDo/balcony.webp";
<<<<<<< HEAD
import restaurant from "../assets/WhatDogsDo/restaurant.webp";
import town from "../assets/WhatDogsDo/town.webp";
import beautySalon from "../assets/WhatDogsDo/beautySalon.webp";
=======
import suitecasePacking from "../assets/WhatDogsDo/suitcasePacking.webp";
import restaurant from "../assets/WhatDogsDo/restaurant.webp";
import birds from "../assets/WhatDogsDo/birds.webp";
import rainingMan from "../assets/WhatDogsDo/rainingMan.webp";
import lilasHouse from "../assets/WhatDogsDo/lilasHouse.webp";
import lilasHouseInteriors from "../assets/WhatDogsDo/lilasHouseInteriors.webp";
import game from "../assets/WhatDogsDo/game.webp";
import town from "../assets/WhatDogsDo/town.webp";
import similarities from "../assets/WhatDogsDo/similarities.webp";
import foodLabirynth from "../assets/WhatDogsDo/foodLabiryth.webp";
import beautySalon from "../assets/WhatDogsDo/beautySalon.webp";
import beforeChristmas from "../assets/WhatDogsDo/beforeChristmas.webp";
import christmasTree from "../assets/WhatDogsDo/manWithChristmasTree.webp";
import lady from "../assets/WhatDogsDo/ladyWithDogsSketch.webp";
import lilaFeler from "../assets/WhatDogsDo/lilaFeler.webp";
>>>>>>> 5aaa45053e94f2e89f4f2283cf1ec6d2410a6e4e


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
<<<<<<< HEAD
=======
        src: suitecasePacking,
        height: 920,
        width: 1317
    },
    {
>>>>>>> 5aaa45053e94f2e89f4f2283cf1ec6d2410a6e4e
        src: restaurant,
        height: 920,
        width: 1317
    },
    {
<<<<<<< HEAD
=======
        src: birds,
        height: 920,
        width: 883
    },
    {
        src: rainingMan,
        height: 920,
        width: 985
    },
    {
        src: lilasHouse,
        height: 920,
        width: 1198
    },
    {
        src: lilasHouseInteriors,
        height: 920,
        width: 1317
    },
    {
        src: game,
        height: 920,
        width: 1317
    },
    {
>>>>>>> 5aaa45053e94f2e89f4f2283cf1ec6d2410a6e4e
        src: town,
        height: 920,
        width: 1317
    },
    {
<<<<<<< HEAD
=======
        src: similarities,
        height: 920,
        width: 1317
    },
    {
        src: foodLabirynth,
        height: 920,
        width: 1317
    },
    {
>>>>>>> 5aaa45053e94f2e89f4f2283cf1ec6d2410a6e4e
        src: beautySalon,
        height: 920,
        width: 1317
    },
<<<<<<< HEAD

];

function WhatDogsDo() {
    const openLightbox = useCallback((event, {photo, index}) => {
=======
    {
        src: beforeChristmas,
        height: 920,
        width: 956
    },
    {
        src: christmasTree,
        height: 920,
        width: 1306
    },
    {
        src: lady,
        height: 920,
        width: 785
    },
    {
        src: lilaFeler,
        height: 920,
        width: 910
    },
];

function WhatDogsDo() {
    const openLightbox = useCallback((event, {index}) => {
>>>>>>> 5aaa45053e94f2e89f4f2283cf1ec6d2410a6e4e
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
                    {this.props.language === 'pl' ? <p className="publishing-house">Wydawnictwo Nasza Księgarnia<br/>seria "Opowiem ci mamo"</p> : <p className="publishing-house">Nasza Księgarnia Publishing House<br/>"I Will Tell You, Mom" series</p>}
                    {this.props.language === 'pl' ? <p className="premiere-date">Data premiery: 20.06.2018</p> : <p className="premiere-date">Release date: 20.06.2018</p>}
                    {this.props.language === 'pl' ? <p className="description">Poznaj Felera, trochę nieokrzesanego, ale uroczego psiaka, któremu dom i miłość ofiarowuje sympatyczna Lila. Wprawdzie musi nad nim jeszcze trochę popracować (na przykład nauczyć go, że kot to też przyjaciel), ale jest na dobrej drodze. A radość z posiadania tak wiernego druha wynagradza wszelkie trudy.</p> : <p className="description">Meet Feler, a little rough, but cute doggy, whom home and love are offered by the sympathetic Lila. He may have to work on it a little more (for example, teach him that a cat is also a friend), but he is on the right track. And the joy of having such a faithful friend rewards all hardships.</p>}
                    {this.props.language === 'pl' ? <p className="description">„Opowiem ci, mamo, co robią psy” to zabawna książka obrazkowa nie tylko o Felerze. Wraz z bohaterami odwiedzisz weterynarza, salon piękności, plac zabaw dla zwierząt i wiele innych ciekawych miejsc. Dowiesz się, jak odpowiedzialną pracę wykonują niektóre psy, poznasz ich rasy, zwyczaje i umiejętności. Nauczysz się także opiekować tymi zwierzętami, a przy okazji sprawdzisz swoją spostrzegawczość, wyszukując ukryte szczegóły i rozwiązując zagadki.</p> : <p className="description">"I will tell you, mom, what dogs do" is a funny picture book not only about Feler. Together with the characters you will visit a vet, beauty salon, animal playground and many other interesting places. You will learn how responsible work some dogs do, learn their breeds, habits and skills. You will also learn to look after these animals, and by the way check your perceptiveness, finding hidden details and solve puzzles.</p>}
                    {this.props.language === 'pl' ? <p className="description">Wydanie zawiera okładkę i trzynaście dwustronnych ilustracji.</p> : <p className="description">Edition includes a colored cover and thirteen two-sided illustrations.</p>}
                </div>
            </section>
        )
    }
}

export default GalleryWhatDogsDo