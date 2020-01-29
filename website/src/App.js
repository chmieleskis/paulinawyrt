import React, {Component} from 'react';
import Navigation from "./components/navigation";
import Portfolio from "./components/portfolio";
import AboutMe from "./components/aboutMe";
import Footer from "./components/footer";
import {
    // withRouter,
    HashRouter,
    Route,
    // Link,
    // Switch,
    // NavLink
} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <>
                <HashRouter>
                    <Navigation/>
                    <Route path="/" component={Portfolio}/>
                    <Route path="/paulina" component={AboutMe}/>
                    <Footer/>
                </HashRouter>
            </>
    )
    }
}

export default App;
