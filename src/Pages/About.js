import React, {Component} from 'react';
import {Col, Container, Nav, NavItem, TabContainer, NavLink, Row, TabContent, TabPane} from "react-bootstrap";
export default class About extends Component {
    render() {
        return (
            <Container>
                <TabContainer id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <NavItem>
                                    <NavLink eventKey="first">Design</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="second">Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="third">Programming</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="fourth">Frameworks</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="fifth">Libraries</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <TabContent className="mt-3">
                                <TabPane eventKey="first">
                                    <img
                                        src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/5aa962fe2c7d3a2c4983093d/images/5dae8f0d04286364bc90b3a5/file-usyUamkmgd.png"/>
                                    <p>Marry Christmas and working in best days in Sacramento</p>
                                </TabPane>
                                <TabPane eventKey="second">
                                    <img
                                        src="https://miro.medium.com/max/2560/1*ANqMvMGPBzbU2dIxWP9HcQ.png"/>
                                    <p>Your claim has expired and benefits are no longer payable on this claim for weeks
                                        ending after 12/31/2020. If you are still unemployed or partially unemployed,
                                        you must reapply for unemployment benefits.</p>
                                    <p>Marry Christmas and working in best days in Sacramento</p>
                                </TabPane>
                                <TabPane eventKey="third">
                                    <img
                                        src="https://cdn.vox-cdn.com/thumbor/1e0WhpZRO0vWaX5fb8G8jo_MJJY=/0x0:3360x2100/1200x800/filters:focal(1412x782:1948x1318)/cdn.vox-cdn.com/uploads/chorus_image/image/65619994/Coediting.0.png"/>
                                    <p>Marry Christmas and working in best days in Sacramento</p>
                                </TabPane>
                                <TabPane eventKey="fourth">
                                    <img
                                        src="https://miro.medium.com/max/5200/1*x1kRbzq47VhGQBfE12u5pg.png"/>
                                    <p>If you are receiving Pandemic Unemployment Assistance benefits, do not submit a
                                        new application. You won’t be able to certify for weeks of unemployment after
                                        12/26/2020 until we update our system based on the new federal legislation. You
                                        will receive a message here once you have weeks available to certify.</p>
                                </TabPane>
                                <TabPane eventKey="fifth">
                                    <img
                                        src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/5aa962fe2c7d3a2c4983093d/images/5dae8f0d04286364bc90b3a5/file-usyUamkmgd.png"/>
                                    <p>Marry Christmas and working in best days in Sacramento</p>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>
        );
    }
}

