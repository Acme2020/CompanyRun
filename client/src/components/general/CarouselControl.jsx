import React, { useState, useEffect } from "react";
import CardDeck from "react-bootstrap/CardDeck"
import Carousel from 'react-bootstrap/Carousel'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CarouselControlComponent = (props) => {
	const [Index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }

    const handleCarousel = (direction) => {
        if (direction === 1)
            setIndex(Index+1) 
        else if (Index > 0)
            setIndex(Index-1)
        else return
	}
        
   return (
        <Container>
            <Row className="mb-3">
                <Col md={{ span: 5, offset: 0 }}>
                    <h1>{props.headline}</h1>
                </Col>
                <Col md={{ span: 1, offset: 5 }} className="d-flex justify-content-end align-items-center px-0">
                    <Button variant="primary" onClick={() => handleCarousel(-1)}>Prev</Button>
                </Col>
                <Col md={{ span: 1, offset: 0 }} className="d-flex justify-content-center align-items-center px-0">
                    <Button variant="primary" onClick={() => handleCarousel(+1)}>Next</Button>
                </Col>
            </Row>
        </Container>
   )
}