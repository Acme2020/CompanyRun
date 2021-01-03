import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import FormGroup from "react-bootstrap/FormGroup"
import FormControl from "react-bootstrap/FormControl"
import FormLabel from "react-bootstrap/FormLabel"
import FormText from "react-bootstrap/FormText"
import FormFile from "react-bootstrap/FormFile"

const ParticipantFormComponent = () => {
    return (
        <Form>
            <Row>
                <Col md={{ span: 3, offset: 0 }}>
                    <FormGroup>
                        <FormLabel>First Name</FormLabel>
                        <FormControl type="text" />
                        <FormText></FormText>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 0 }}>
                    <FormGroup>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl type="text" />
                        <FormText></FormText>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 0 }}>
                    <FormGroup>
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl type="email" />
                        <FormText></FormText>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 0 }}>
                    <Form.Group>
                        <FormFile id="exampleFormControlFile1" label="Your Picture" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 0 }}>
                    <FormGroup>
                        <FormLabel>Team</FormLabel>
                        <FormControl type="email" />
                        <FormText></FormText>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 3, offset: 0 }}>
                    <FormGroup>
                        <FormLabel>Company</FormLabel>
                        <FormControl type="email" />
                        <FormText></FormText>
                    </FormGroup>
                </Col>
            </Row>
        </Form>
    )
}

export default ParticipantFormComponent 