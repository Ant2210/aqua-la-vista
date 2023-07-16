import React from "react";
import Card from "react-bootstrap/Card";

const Quote = () => {
    return (
        <Card style={{maxWidth: "80%", boxShadow: "2px 2px 2px 1px var(--clr-dark)"}} className="mx-auto">
            <Card.Body>
                <Card.Text className="fst-italic text-center">
                Aqua La Vista is dedicated to promoting the health and wellness benefits of wild swimming. Wild swimming, the act of swimming in natural bodies of water like lakes, rivers, and oceans, offers a refreshing and exhilarating experience for adventure-seeking water enthusiasts. Unlike swimming in pools, wild swimming immerses you in the beauty of nature while providing physical and mental benefits. Say goodbye to boring pools and HELLO to wild swimming excitement.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Quote;
