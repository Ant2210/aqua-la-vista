import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
    const form = useRef();
    const [showFlashMessage, setShowFlashMessage] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmail",
                "aqua_la_vista",
                form.current,
                "EfZCNFX08xgO5f9eZ"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    form.current.reset();
                    setShowFlashMessage(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact-form-container" className="container p-3 my-3 mx-auto">
            <h1 className="fs-3 pb-3">Have a buoyant idea or just want to say hi? We're all ears! Drop us a line at Aqua La Vista.</h1>
            {showFlashMessage && (
                <div className="flash-message">
                    <strong>Thank you for diving into our inbox! We appreciate your message and will aim to respond within 1 business day.</strong>
                </div>
            )}
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name here..."
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email here..."
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        placeholder="Enter your message here..."
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" value="Send" className="chat-buttons" style={{
                                backgroundColor: "#575ABA",
                                color: "white",
                                border: "none",
                            }}>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default ContactForm;
