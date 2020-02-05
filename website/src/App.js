import React, {Component} from 'react';
import Navigation from "./components/navigation";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import Contact from "./components/contact";
import NavigationEn from "./components/navigation-en";
import PortfolioEn from "./components/portfolioEn";
import AboutMeEn from "./components/aboutMeEn";
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
        })
        console.log(this.state.language)
    };

    handleEnglish = () => {
        this.setState({
            language: 'en'
        })
        console.log(this.state.language)
    };

    render() {
        if (this.state.language === 'pl') {
            return (
                <>
                    <HashRouter>
                        <Navigation polish={this.handlePolish} english={this.handleEnglish}/>
                        <Route path="/" component={Portfolio} />
                        <Route path="/paulina" component={AboutMe}/>
                        <Route path="/contact" component={Contact}/>
                        <Footer/>
                    </HashRouter>
                </>
            )
        } else {
            return (
                <>
                    <HashRouter>
                        <NavigationEn polish={this.handlePolish} english={this.handleEnglish}/>
                        <Route path="/" component={PortfolioEn}/>
                        <Route path="/paulina" component={AboutMeEn}/>
                        <Route path="/contact" component={ContactEn}/>
                        <Footer/>
                    </HashRouter>
                </>
            )
        }
    }
}

export default App;
