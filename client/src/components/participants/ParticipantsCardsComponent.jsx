import React from "react";
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"

const ParticipantsCardsComponent = (props) => {
	
    return (
		<>
		{props.data &&
		<div>
			{props.data.data.response_all.map((card) => {
				return (
						<CardDeck>
							<div className="row">
									<div className="col-3">
									<Card>
										<Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg" />
										<Card.Body>
										<Card.Title>{card.first_name}</Card.Title>
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
					)
				})
			}

		</div>
		}
        </>
    )
}

export default ParticipantsCardsComponent