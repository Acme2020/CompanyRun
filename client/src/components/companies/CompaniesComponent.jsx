import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

const CompaniesComponent = () => {
	return (
		<CardDeck>
			<div className="row justify-content-between">
				<div className="col-3">
					<Card>
						<Card.Img
							variant="top"
							src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</Card.Footer>
					</Card>
				</div>
				<div className="col-3">
					<Card>
						<Card.Img
							variant="top"
							src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</Card.Footer>
					</Card>
				</div>
				<div className="col-3">
					<Card>
						<Card.Img
							variant="top"
							src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</Card.Footer>
					</Card>
				</div>
				<div className="col-3">
					<Card>
						<Card.Img
							variant="top"
							src="https://static.vecteezy.com/system/resources/thumbnails/000/649/142/small/illust58-2190.jpg"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a wider card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</Card.Footer>
					</Card>
				</div>
			</div>
		</CardDeck>
	);
};

export default CompaniesComponent;
