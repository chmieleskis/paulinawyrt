import React, {Component} from "react";
import emailjs from "emailjs-com";
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

    handleCopy = () => {
        navigator.clipboard.writeText('wyrtpaulina@gmail.com')
    };

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

        const templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };

        const isValid = this.validate();

        if (isValid) {

            emailjs.send('gmail', 'paulinawyrt_com', templateParams, 'user_0rVTQqVOSsgX52Rtx3OC0')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                    console.log('FAILED...', error);
                }).then(() => {
                this.setState({
                    emailSend: true,
                });
                console.log(this.state.emailSend);
            });

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
                    <span className='contact-text'>
                        Jeśli chcesz ze mną współpracować lub po prostu się przywitać, skorzystaj<br/>z formularza kontaktowego poniżej lub napisz do mnie na adres:<br/>
                        <div
                            className="email-address" onClick={this.handleCopy}>wyrtpaulina@gmail.com
                            <span className="tooltip tooltip-pl">Kliknij, aby skopiować</span>
                        </div>
                    </span>
                    {this.state.emailSend === true ? <p className="success">Dziękuję za wiadomość!</p> : null}
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