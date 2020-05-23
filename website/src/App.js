import React, {Component} from 'react';
import Navigation from "./components/navigation";
import NavigationMenuHamburger from "./components/navigationMenuHamburger";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ContactEn from "./components/contact-en";
import {
    // withRouter,
    HashRouter,
    Route,
    // Link,
    // Switch,
    // NavLink
} from 'react-router-dom';

import GalleryLichoTwo from "./components/galleryLichoTwo";
import GalleryOTOZ from "./components/galleryOTOZ";
import GalleryEnglishWords from "./components/galleryEnglishWords";
import GalleryLogrelet from "./components/galleryLogrelet";
import GalleryCatsCity from "./components/galleryCatsCity";
import GalleryThingStories from "./components/galleryThingStories";
import GalleryThaddeus from "./components/galleryThaddeus";
import GalleryRowFairyTales from "./components/galleryRowFairyTales";
import GalleryWhatDogsDo from "./components/galleryWhatDogsDo";
import GalleryLichoAndMystery from "./components/galleryLichoAndMystery";
import GalleryRomeoJuliet from "./components/galleryRomeoJuliet";
import GalleryTaintedBird from "./components/galleryTaintedBird";
import GalleryKulturkaTwo from "./components/galleryKulturkaTwo";
import GalleryFloatingIsland from "./components/galleryFloatingIsland";
import GalleryKulturkaOne from "./components/galleryKulturkaOne";
import GalleryKulturkaThree from "./components/kulturkaThree";
import GalleryFury from "./components/galleryFury";
import GalleryEzop from "./components/galleryEzop";
import GallerySynesthesis from './components/gallerySynesthesis'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'en',
            category: '',
            isOpen: false
        };
    };

    handleOpenMenu = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(this.state.isOpen)
    };

    handleCloseMenu = () => {
        this.setState({
            isOpen: false
        })
    }

    handlePolish = () => {
        this.setState({
           language: 'pl'
        });
    };

    handleEnglish = () => {
        this.setState({
            language: 'en'
        });
    };

    handleAll = () => {
        this.setState({
            category: ''
        })
    };

    handleBooks = () => {
        this.setState({
            category: 'books'
        })
    };

    handlePosters = () => {
        this.setState({
            category: 'posters'
        })
    };
    handleBooklets = () => {
        this.setState({
            category: 'booklets'
        })
    };

    handleFilms = () => {
        this.setState({
            category: 'films'
        })
    };

    handleOther = () => {
        this.setState({
            category: 'other'
        })
    };

    render() {
        return (
            <>
                <HashRouter>
                    <Navigation all={this.handleAll}
                                polish={this.handlePolish}
                                english={this.handleEnglish}
                                language={this.state.language}
                                openMenu={this.handleOpenMenu}
                                isOpen={this.state.isOpen}/>
                    <NavigationMenuHamburger isOpen={this.state.isOpen} closeMenu={this.handleCloseMenu}/>
                    <Route exact path="/" render={(routeProps) => (<Portfolio {...routeProps}
                                                                              language={this.state.language}
                                                                              category={this.state.category}
                                                                              all={this.handleAll}
                                                                              books={this.handleBooks}
                                                                              posters={this.handlePosters}
                                                                              booklets={this.handleBooklets}
                                                                              films={this.handleFilms}
                                                                              other={this.handleOther}/>)}/>
                    <Route exact path="/paulina" render={(routeProps) => (<AboutMe {...routeProps} language={this.state.language}/>)}/>
                    {this.state.language === 'pl' ? <Route exact path="/contact" component={Contact}/> : <Route exact path="/contact" component={ContactEn}/>}
                    <Route exact path="/portfolio/gallery-licho-two" render={(routeProps) => (<GalleryLichoTwo {...routeProps}
                                                                                                               language={this.state.language}
                                                                                                               books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-OTOZ" render={(routeProps) => (<GalleryOTOZ {...routeProps}
                                                                                                      language={this.state.language}
                                                                                                      posters={this.handlePosters}
                                                                                                      films={this.handleFilms}
                                                                                                      other={this.handleOther}/>)}/>
                    <Route exact path="/portfolio/gallery-what-dogs-do" render={(routeProps) => (<GalleryWhatDogsDo {...routeProps}
                                                                                                               language={this.state.language}
                                                                                                               books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-english-words" render={(routeProps) => (<GalleryEnglishWords {...routeProps}
                                                                                                                        language={this.state.language}
                                                                                                                        books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-logrelet" render={(routeProps) => (<GalleryLogrelet {...routeProps}
                                                                                                               language={this.state.language}
                                                                                                               posters={this.handlePosters}
                                                                                                               booklets={this.handleBooklets}/>)}/>
                    <Route exact path="/portfolio/gallery-row-fairy-tales" render={(routeProps) => (<GalleryRowFairyTales {...routeProps}
                                                                                                               language={this.state.language}
                                                                                                               books={this.handleBooks}/>)}/>

                    <Route exact path="/portfolio/gallery-cats-city" render={(routeProps) => (<GalleryCatsCity {...routeProps}
                                                                                                                        language={this.state.language}
                                                                                                                        posters={this.handlePosters}/>)}/>
                    <Route exact path="/portfolio/gallery-thing-stories" render={(routeProps) => (<GalleryThingStories {...routeProps}
                                                                                                                          language={this.state.language}
                                                                                                                          books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-thaddeus" render={(routeProps) => (<GalleryThaddeus {...routeProps}
                                                                                                                       language={this.state.language}
                                                                                                                       books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-licho-and-mystery" render={(routeProps) => (<GalleryLichoAndMystery {...routeProps}
                                                                                                              language={this.state.language}
                                                                                                              books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-romeo-juliet" render={(routeProps) => (<GalleryRomeoJuliet {...routeProps}
                                                                                                                              language={this.state.language}
                                                                                                                              books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-tainted-bird" render={(routeProps) => (<GalleryTaintedBird {...routeProps}
                                                                                                      language={this.state.language}
                                                                                                      posters={this.handlePosters}
                                                                                                      films={this.handleFilms}/>)}/>
                    <Route exact path="/portfolio/gallery-kulturka-two" render={(routeProps) => (<GalleryKulturkaTwo {...routeProps}
                                                                                                                 language={this.state.language}
                                                                                                                 booklets={this.handleBooklets}/>)}/>
                    <Route exact path="/portfolio/gallery-floating-islands" render={(routeProps) => (<GalleryFloatingIsland {...routeProps}
                                                                                                                     language={this.state.language}
                                                                                                                     posters={this.handlePosters}
                                                                                                                     films={this.handleFilms}/>)}/>
                    <Route exact path="/portfolio/gallery-kulturka" render={(routeProps) => (<GalleryKulturkaOne {...routeProps}
                                                                                                              language={this.state.language}
                                                                                                              booklets={this.handleBooklets}/>)}/>
                    <Route exact path="/portfolio/gallery-kulturka-three" render={(routeProps) => (<GalleryKulturkaThree {...routeProps}
                                                                                                                     language={this.state.language}
                                                                                                                     booklets={this.handleBooklets}/>)}/>
                    <Route exact path="/portfolio/gallery-fury" render={(routeProps) => (<GalleryFury {...routeProps}
                                                                                                                     language={this.state.language}
                                                                                                                     posters={this.handlePosters}
                                                                                                                     films={this.handleFilms}/>)}/>
                    <Route exact path="/portfolio/gallery-ezop" render={(routeProps) => (<GalleryEzop {...routeProps}
                                                                                                                     language={this.state.language}
                                                                                                                     books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-synesthesis" render={(routeProps) => (<GallerySynesthesis {...routeProps}
                                                                                                                     language={this.state.language}
                                                                                                                     other={this.handleOther}/>)}/>
                    <Footer language={this.state.language}/>
                </HashRouter>
            </>
        )

    }
}

export default App;
