import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {CardDeck, CardImg, Container, Card, Button} from "react-bootstrap";
//import Carousel from "react-bootstrap/Carousel";

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card bg="success" border="primary" text="white">
                            <CardImg variant="top"
                                     src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map. ...
                                    Click Erase and OS X will format the drive.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="warning" border="success" text="info">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map. ...
                                    Click Erase and OS X will format the drive.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                            <CardImg variant="bottom"
                                     src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                        </Card>
                        <Card bg="info" border="secondary" text="warning">
                            <CardImg variant="top"
                                     src="https://images.pexels.com/photos/3182748/pexels-photo-3182748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map. ...
                                    Click Erase and OS X will format the drive.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                        <Card bg="success" border="primary" text="white">
                            <CardImg variant="top"
                                     src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>
                                    Connect the drive to the Mac. Open Disk Utility.
                                    Select the drive you want to format. Click Erase.
                                    Give the drive a descriptive name and leave the default settings: OS X Extended
                                    format and GUID partition map. ...
                                    Click Erase and OS X will format the drive.
                                </Card.Text>
                                <Button variant="primary">About team</Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>

        );
    }
}