import React, {Component} from 'react';
import Navigation from "./components/navigation";
import Portfolio from "./components/portfolio";
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
                <Navigation/>
                <HashRouter>
                    <Route exact path="/" component={Portfolio}/>
                </HashRouter>
                <Footer/>
            </>
    )
    }
}

export default App;
