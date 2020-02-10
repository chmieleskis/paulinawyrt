import React, {Component} from "react";
// import axios from "axios";

class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: '',
        nameError: '',
        emailError: '',
        messageError: '',
        emailSend: false,
    };

    handleCopy = (e) => {
        navigator.clipboard.writeText('wyrtpaulina@gmail.com')
    }

    handleChange = e => {
        this.setState( {[e.target.name]: e.target.value})
    };

    validate = () => {
        let nameError = '';
        let emailError = '';
        let messageError = '';

        if (this.state.name.length === 0) {
            nameError = 'Podaj swoje imię!'
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            emailError = 'Podany email jest nieprawidłowy!'
        }
        if (this.state.message.length === 0) {
            messageError = 'Wiadomość jest zbyt krótka!'
        }
        if (nameError || emailError || messageError) {
            this.setState({
                nameError, emailError, messageError
            });
            return false
        }
        return true
    };

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validate();

        // const data = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     message: this.state.message
        // };

        // axios.post('API_URI', data)
        //     .then(res => {
        //         this.setState({emailSend: true, name: '', email: '', message: ''})
        //     })
        //     .catch( () => {
        //         console.log('not sent')
        //     });

        // fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(r => {
        //     if (r.ok === true) {
        //         return r.json();
        //     } else {
        //         throw new Error('Błąd')
        //     }
        // }).then(data => {
        //     console.log(data)
        //     this.setState({
        //         emailSend: true,
        //     })
        // }).catch(err => {
        //     console.log(err)
        // })

        if (isValid) {
            this.setState({
                name: '',
                email: '',
                message: '',
                nameError: '',
                emailError: '',
                messageError: '',
            })
        }
    };

    render() {
        return (
            <section className='contact'>
                <div className="photo"/>
                <form>
                    <p className='contact-text'>
                        Jeśli chcesz ze mną współpracować lub po prostu się przywitać, skorzystaj<br/>z formularza kontaktowego poniżej lub napisz do mnie na adres:<br/>
                        <div
                            className="email-address" onClick={this.handleCopy}>wyrtpaulina@gmail.com
                            <span className="tooltip tooltip-pl">Kliknij aby skopiować</span>
                        </div>
                    </p>
                    <div>
                        <input
                            className='name-input'
                            type="text"
                            placeholder='Imię'
                            name='name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <input
                            className='email-input'
                            type="email"
                            placeholder='Email'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        {this.state.nameError ? (<span className="error name-error">{this.state.nameError}</span>) :
                            <span className="error"/>}
                        {this.state.emailError ? (
                            <span className="error email-error">{this.state.emailError}</span>) : null}
                    </div>
                    <textarea
                        className='message-input'
                        placeholder='Wiadomość'
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        rows="10"
                    />
                    {this.state.messageError ? (
                        <span className="error message-error">{this.state.messageError}</span>) : null}
                    <input
                        className="submit-button"
                        type="submit"
                        value='Wyślij'
                        onClick={this.handleSubmit}
                    />
                </form>
            </section>
        )
    }

}

export default Contact