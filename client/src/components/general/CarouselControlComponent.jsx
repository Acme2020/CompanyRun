import React from "react";
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default (props) => {
    return (
        <Container>
            <Row className="mb-3">
                <Col md={{ span: 5, offset: 0 }}>
                    <h1>{props.headline}</h1>
                </Col>
                <Col md={{ span: 1, offset: 5 }} className="d-flex justify-content-end align-items-center px-0">
                    <Button variant="primary" onClick={() => props.direction(-1)}>Prev</Button>
                </Col>
                <Col md={{ span: 1, offset: 0 }} className="d-flex justify-content-center align-items-center px-0">
                    <Button variant="primary" onClick={() => props.direction(+1)}>Next</Button>
                </Col>
            </Row>
        </Container>
    );
}

