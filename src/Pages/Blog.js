import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container, Col, Row, Media, Card, ListGroup, ListGroupItem,} from "react-bootstrap";

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img className="mr-3"
                                 width="150"
                                 height="150"
                                 src="data:image/png;base64,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"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img className="mr-3"
                                 width="150"
                                 height="150"
                                 src="data:image/png;base64,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"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img className="mr-3"
                                 width="150"
                                 height="150"
                                 src="data:image/png;base64,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"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img className="mr-3"
                                 width="150"
                                 height="150"
                                 src="data:image/png;base64,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"
                            />
                            <Media.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroupItem>HTML/CSS</ListGroupItem>
                                <ListGroupItem>JavaScript</ListGroupItem>
                                <ListGroupItem>Java</ListGroupItem>
                                <ListGroupItem>Python</ListGroupItem>
                                <ListGroupItem>C++</ListGroupItem>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
