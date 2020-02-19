import React, {Component} from 'react';
import Navigation from "./components/navigation";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ContactEn from "./components/contact-en";
import GalleryLichoTwo from "./components/galleryLichoTwo";
import GalleryEnglishWords from "./components/galleryEnglishWords";
import {
    // withRouter,
    HashRouter,
    Route,
    // Link,
    // Switch,
    // NavLink
} from 'react-router-dom'

class App extends Component {
    state = {
        language: 'en',
        category: ''
    };

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

    render() {
        return (
            <>
                <HashRouter>
                    <Navigation polish={this.handlePolish} english={this.handleEnglish} language={this.state.language}/>
                    <Route exact path="/" render={(routeProps) => (<Portfolio {...routeProps}
                                                                              language={this.state.language}
                                                                              category={this.state.category}
                                                                              all={this.handleAll}
                                                                              books={this.handleBooks}/>)}/>
                    <Route exact path="/paulina" render={(routeProps) => (<AboutMe {...routeProps} language={this.state.language}/>)}/>
                    {this.state.language === 'pl' ? <Route exact path="/contact" component={Contact}/> : <Route exact path="/contact" component={ContactEn}/>}
                    <Route exact path="/portfolio/gallery-licho-two" render={(routeProps) => (<GalleryLichoTwo {...routeProps}
                                                                                                               language={this.state.language}
                                                                                                               books={this.handleBooks}/>)}/>
                    <Route exact path="/portfolio/gallery-english-words" render={(routeProps) => (<GalleryEnglishWords {...routeProps}
                                                                                                                       language={this.state.language}
                                                                                                                       books={this.handleBooks}/>)}/>
                    <Footer language={this.state.language}/>
                </HashRouter>
            </>
        )

    }
}

export default App;
