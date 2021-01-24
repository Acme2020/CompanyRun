import React, { useState } from "react";
import CardDeck from "react-bootstrap/CardDeck"
import Carousel from 'react-bootstrap/Carousel'
import Card from "react-bootstrap/Card"
import CarouselControlComponent from "../general/CarouselControlComponent";

const ParticipantsSliderComponent = (props) => {
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
		<>
		{props.data &&
		<div>
        <CarouselControlComponent direction={(dir) => {handleCarousel(dir)}} headline={props.headline} />

        <Carousel interval={null} activeIndex={Index} onSelect={handleSelect}>
					{props.data.data.response_chunks.map((chunk) => {
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