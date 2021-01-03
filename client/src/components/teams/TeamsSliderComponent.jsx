import React, { useState } from "react"
import CardDeck from "react-bootstrap/CardDeck"
import Carousel from 'react-bootstrap/Carousel'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const TeamsSliderComponent = (props) => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    }

    const handleCarousel = (direction) => {
        if (direction === 1)
            setIndex(index+1) 
        else if (index > 0)
            setIndex(index-1)
        else return
    }
    
    return (
        <>
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

        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <CardDeck>
                    <div className="row">
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
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
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
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
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
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
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
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
                    </div>
                </CardDeck>
            </Carousel.Item>
            <Carousel.Item>
                <CardDeck>
                    <div className="row">
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
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
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
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
                    </div>
                </CardDeck>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default TeamsSliderComponent