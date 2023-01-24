import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import { Container } from './styles';

export default function FormContact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os campos");
            return;
        }


        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_67415yj", "template_m0dobwo", templateParams, "vpDYz3xICQVqm1Nhb")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text)
                setName('')
                setEmail('')
                setMessage('')

            }, (err) => {
                console.log("ERRO: ", err)
            })

    }

    return (
        <Container>
            <h1>Contact me, let&apos;s make magic together</h1>

            <form onSubmit={sendEmail}>
                <input
                    type="text"
                    placeholder="Name: "
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    type="email"
                    placeholder="E-mail: "
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <textarea
                    type="text"
                    placeholder="Message: "
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />

                <button type="submit"> Send Message </button>
            </form>
        </Container>
    );
}