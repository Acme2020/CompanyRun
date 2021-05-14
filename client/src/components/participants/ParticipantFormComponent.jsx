import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import FormText from "react-bootstrap/FormText";
import FormFile from "react-bootstrap/FormFile";
import Button from "react-bootstrap/Button";

const ParticipantFormComponent = () => {
	const [FirstName, setFirstName] = useState();
	const [LastName, setLastName] = useState();
	const [Email, setEmail] = useState();
	const [Avatar, setAvatar] = useState();
	const [Team, setTeam] = useState();
	const [Company, setCompany] = useState();
	const [Password, setPassword] = useState();

	const submitForm = (event) => {
		event.preventDefault();
		const data = new FormData();
		data.append("FirstName", FirstName);
		data.append("LastName", LastName);
		data.append("Email", Email);
		data.append("Password", Password);
		data.append("Team", Team);
		data.append("Company", Company);
		data.append("Avatar", Avatar);

		fetch("/participant/new", {
			method: "POST",
			mode: "cors",
			body: data,
		})
			.then(async (response) => response.text())
			.then((data) => console.log(data));
	};

	return (
		<Form>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<FormGroup>
						<FormLabel>First Name</FormLabel>
						<FormControl
							type="text"
							onChange={(event) => {
								const { value } = event.target;
								setFirstName(value);
							}}
						/>
						<FormText id="firstname"></FormText>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<FormGroup>
						<FormLabel>Last Name</FormLabel>
						<FormControl
							type="text"
							onChange={(event) => {
								const { value } = event.target;
								setLastName(value);
							}}
						/>
						<FormText id="lastname"></FormText>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<FormGroup>
						<FormLabel>E-Mail</FormLabel>
						<FormControl
							type="email"
							onChange={(event) => {
								const { value } = event.target;
								setEmail(value);
							}}
						/>
						<FormText id="email"></FormText>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<FormGroup>
						<FormLabel>Passwort</FormLabel>
						<FormControl
							type="text"
							onChange={(event) => {
								const { value } = event.target;
								setPassword(value);
							}}
						/>
						<FormText id="email"></FormText>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<Form.Group>
						<FormFile
							type="file"
							id="avatar"
							label="Your Picture"
							onChange={(event) => {
								const file = event.target.files[0];
								setAvatar(file);
							}}
						></FormFile>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<FormGroup>
						<FormLabel>Team</FormLabel>
						<FormControl
							type="text"
							onChange={(event) => {
								const { value } = event.target;
								setTeam(value);
							}}
						/>
						<FormText id="team"></FormText>
					</FormGroup>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 3, offset: 0 }}>
					<FormGroup>
						<FormLabel>Company</FormLabel>
						<FormControl
							type="text"
							onChange={(event) => {
								const { value } = event.target;
								setCompany(value);
							}}
						/>
						<FormText id="company"></FormText>
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

export default ParticipantFormComponent;
