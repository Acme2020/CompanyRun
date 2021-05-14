import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormText from "react-bootstrap/FormText";
import Button from "react-bootstrap/Button";

const ParticipantLoginComponent = () => {
	const [Email, setEmail] = useState();
	const [Password, setPassword] = useState();

	const submitForm = (event) => {
		const data = {
			email: Email,
			password: Password,
		};
		event.preventDefault();
		fetch(`/participant/login`, {
			method: "POST",
			mode: "cors",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
		})
			.then(async (response) => response.text())
			.then((data) => console.log(data));
	};

	return (
		<Form>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<FormGroup>
						<FormLabel>E-Mail</FormLabel>
						<FormControl
							type="text"
							onChange={(event) => {
								const { value } = event.target;
								setEmail(value);
							}}
						/>
						<FormText id="firstname"></FormText>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<FormGroup>
						<FormLabel>Password</FormLabel>
						<FormControl
							type="text"
							onChange={(event) => {
								const { value } = event.target;
								setPassword(value);
							}}
						/>
						<FormText id="lastname"></FormText>
					</FormGroup>
				</Col>
			</Row>
			<Button
				onClick={(event) => {
					submitForm(event);
				}}
			>
				{" "}
				Send{" "}
			</Button>
		</Form>
	);
};

export default ParticipantLoginComponent;
