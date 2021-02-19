import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormText from "react-bootstrap/FormText";
import Button from "react-bootstrap/Button";

const ParticipantAddRunModalComponent = (props) => {
	const { id } = useParams();
	const [RunDate, setRunDate] = useState();
	const [Distance, setDistance] = useState();
	const [RunTime, setRunTime] = useState("00:00:00");

	const submitForm = (event) => {
		const data = {
			run_date: RunDate,
			distance: Distance.replace(",", "."),
			time: RunTime,
		};
		event.preventDefault();
		fetch(`/participant/${id}/run/new`, {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		})
			.then(async (response) => response.text())
			.then((data) => console.log(data));
		props.needDataRefresh(true);
	};

	const displayModal = (state) => {
		props.handleShow(state);
	};

	return (
		<Modal
			onHide={() => {
				displayModal(false);
			}}
			show
			centered
		>
			<Modal.Header>
				<Modal.Title>Add new run</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Col>
						<FormGroup>
							<FormLabel className="mb-1">Date</FormLabel>
							<FormControl
								type="date"
								onChange={(event) => {
									const { value } = event.target;
									setRunDate(value);
								}}
							/>
							<FormText id="rundate"></FormText>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup className="pt-4">
							<FormLabel className="mb-1">Distance</FormLabel>
							<FormControl
								type="text"
								onChange={(event) => {
									const { value } = event.target;
									setDistance(value);
								}}
							/>
							<FormText id="distance"></FormText>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup className="pt-4">
							<FormLabel className="mb-1">Time</FormLabel>
							<FormControl
								type="time"
								step="1"
								value={RunTime}
								onChange={(event) => {
									const { value } = event.target;
									setRunTime(value);
								}}
							/>
							<FormText id="time"></FormText>
						</FormGroup>
					</Col>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={() => {
						displayModal(false);
					}}
				>
					Close
				</Button>
				<Button
					onClick={(event) => {
						submitForm(event);
						displayModal(false);
					}}
				>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ParticipantAddRunModalComponent;
