import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import GetDataComponent from "../general/GetDataComponent";
import ParticipantRunsComponent from "../runs/ParticipantRunsComponent";

const ParticipantDetailsComponent = (props) => {
	const { id } = useParams();
	return (
		<>
			<Container fluid className="d-flex justify-content-center">
				<Col sm={5}>
					<Card className="text-center my-5 border border-danger">
						<Card.Header className="bg-danger py-3">
							<Image
								src={`images/${props.data.data.response.avatar_name}`}
								roundedCircle
							></Image>
						</Card.Header>
						<Card.Body>
							<Card.Title>
								<h4>{props.data.data.response.first_name}</h4>
							</Card.Title>
							<h5>{props.data.data.response.last_name}</h5>
							<hr></hr>
							<h6>{props.data.data.response.email}</h6>
							<GetDataComponent
								component={ParticipantRunsComponent}
								url={"/participant/" + id + "/run"}
							/>
						</Card.Body>
						<Card.Footer className="bg-danger text-white">
							<small>Last Updated: 2 Days ago</small>
						</Card.Footer>
					</Card>
				</Col>
			</Container>
		</>
	);
};

export default ParticipantDetailsComponent;
