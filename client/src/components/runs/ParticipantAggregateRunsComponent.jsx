import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ParticipantAggregateRunsComponent = (props) => {
	return (
		<>
			<Row className="justify-content-center">
				<Col xs={3} className="text-primary">
					<h6>total distance</h6>
				</Col>
				<Col xs={3} className="text-primary">
					<h6>total time</h6>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xs={3} className="text-primary">
					<h4>
						{props.acc_data.sum_distance.toLocaleString() + " km"}
					</h4>
				</Col>
				<Col xs={3} className="text-primary">
					<h4>{props.acc_data.sum_time}</h4>
				</Col>
			</Row>
		</>
	);
};

export default ParticipantAggregateRunsComponent;
