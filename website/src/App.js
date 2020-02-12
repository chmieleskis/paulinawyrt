import React, {Component} from 'react';
import Navigation from "./components/navigation";
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
} from 'react-router-dom'

class App extends Component {
    state = {
        language: 'en'
    };

    handlePolish = () => {
        this.setState({
           language: 'pl'
        });

        localStorage.setItem('language', this.state.language)
    };

    handleEnglish = () => {
        this.setState({
            language: 'en'
        });

        localStorage.setItem('language', this.state.language)
    };

    render() {
        return (
            <>
                <HashRouter>
                    <Navigation polish={this.handlePolish} english={this.handleEnglish} language={this.state.language}/>
                    <Route exact path="/" component={Portfolio}/>
                    <Route exact path="/paulina" component={AboutMe}/>
                    {this.state.language === 'pl' ? <Route exact path="/contact" component={Contact}/> : <Route exact path="/contact" component={ContactEn}/>}
                    <Footer language={this.state.language}/>
                </HashRouter>
            </>
        )

    }
}

export default App;
