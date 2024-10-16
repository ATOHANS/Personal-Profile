import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Container className="mt-5">
                <Alert variant="success">
                    <h4>Thank you {name}! Your message has been sent.</h4>
                    <p><strong>Name: </strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Message:</strong> {message}</p>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <h2>Contact Us</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button className="SubmitButton" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default ContactPage;
