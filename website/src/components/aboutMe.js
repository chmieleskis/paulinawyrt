import React, {Component} from "react";

class AboutMe extends Component {
    state = {
        language: null
    };

    componentDidMount() {
        this.setState({
            language: localStorage.getItem('language')
        }, () => {
            console.log(this.state.language)
        });
    };

    render() {
        return (
            <section className='about'>
                <div className="photo"/>
                <div className="description">
                    {this.state.language === "pl" ?
                        <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki.</p>
                        : <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    }
                    {this.state.language === "pl" ?
                        <p>Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym.</p>
                        : <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    }
                    {this.state.language === "pl" ?
                        <p>Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
                        : <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    }
                    <p>{this.props.language}</p>
                </div>
            </section>
        )
    }
}

export default AboutMe