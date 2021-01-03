import React, { useState, useEffect } from "react";
import CardDeck from "react-bootstrap/CardDeck"
import Carousel from 'react-bootstrap/Carousel'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ParticipantsSliderComponent = (props) => {
	const [Participants, setParticipants] = useState();
	const [Index, setIndex] = useState(0)

	useEffect(() => {
		loadPartcipants();
	}, []);

	const loadPartcipants = async () => {
		const response = await fetch("/participant");
		const data = await response.json();
		setParticipants(data);
		console.log(data);
	};

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
		<>
		{Participants &&
		<div>
        <Container className="px-0">
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

        <Carousel interval={null} activeIndex={Index} onSelect={handleSelect}>
					{Participants.data.response_chunks.map((chunk) => {
						return (
							<Carousel.Item>
                				<CardDeck>
									<div className="row">
									{chunk.map((cards) => {
										return (
											<>
											<div className="col-3">
											<Card>
												<Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg" />
												<Card.Body>
												<Card.Title>{cards.first_name}</Card.Title>
												<Card.Text>
													This is a wider card with supporting text below as a natural lead-in to
													additional content. This content is a little bit longer.
												</Card.Text>
												</Card.Body>
												<Card.Footer>
												<small className="text-muted">Last updated 3 mins ago</small>
												</Card.Footer>
											</Card>
											</div>
											</>
											)
										})
									}
									</div>
								</CardDeck>
            				</Carousel.Item>
							)
						})
					}
        </Carousel>
		</div>
		}
        </>
    )
}

export default ParticipantsSliderComponent