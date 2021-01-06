import React, {Component} from 'react';
import {Button, Container, FormControl, Navbar, NavbarBrand, NavLink, Nav, Form} from "react-bootstrap";
import logo from './logo192.png';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import Switch from "react-bootstrap/Switch";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contacts from "../Pages/Contacts";
import Blog from "../Pages/Blog";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"/>
                            React Site
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav"/>
                        <NavbarCollapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/about">About us</NavLink>
                                <NavLink href="/contacts">Contacts</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-cm-2"/>
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </NavbarCollapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/blog" component={Blog}/>
                    </Switch>
                </Router>
            </>
        );
    }
}

