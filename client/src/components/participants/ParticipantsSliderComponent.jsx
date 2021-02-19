import React, { useState } from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CarouselControlComponent from "../general/CarouselControlComponent";

const ParticipantsSliderComponent = (props) => {
	const [Index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	const handleCarousel = (direction) => {
		if (
			direction === 1 &&
			Index < props.data.data.response_chunks.length - 1
		)
			setIndex(Index + 1);
		else if (Index > 0) setIndex(Index - 1);
		else return;
	};
	return (
		<div className="ml-0">
			{props.data && (
				<div>
					<CarouselControlComponent
						direction={(dir) => {
							handleCarousel(dir);
						}}
						headline={props.headline}
					/>

					<Carousel
						interval={null}
						controls={false}
						activeIndex={Index}
						onSelect={handleSelect}
					>
						{props.data.data.response_chunks.map((chunk) => {
							return (
								<Carousel.Item key={chunk[0].id}>
									<Row>
										<CardDeck>
											{chunk.map((cards) => {
												return (
													<>
														<Col md={3}>
															<Card
																key={cards.id}
																className="ml-1"
															>
																<Card.Img
																	variant="top"
																	src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg"
																/>
																<Card.Body>
																	<Card.Title>
																		{
																			cards.first_name
																		}
																	</Card.Title>
																	<Card.Text>
																		This is
																		a wider
																		card
																		with
																		supporting
																		text
																		below as
																		a
																		natural
																		lead-in
																		to
																		additional
																		content.
																		This
																		content
																		is a
																		little
																		bit
																		longer.
																	</Card.Text>
																</Card.Body>
																<Card.Footer>
																	<small className="text-muted">
																		Last
																		updated
																		3 mins
																		ago
																	</small>
																</Card.Footer>
															</Card>
														</Col>
													</>
												);
											})}
										</CardDeck>
									</Row>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</div>
			)}
		</div>
	);
};

export default ParticipantsSliderComponent;
