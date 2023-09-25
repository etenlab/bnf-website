import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {

  
    return (
        <Navbar variant="dark" bg="" className="navbar-inverse header-menu" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                    id="nav-dropdown-community"
                    title="Community"
                    menuVariant="light"
                    >
                        <NavDropdown.Item href="#">Contributor Getting Started</NavDropdown.Item>
                        <NavDropdown.Item href="#">Becoming a Committer</NavDropdown.Item>
                        <NavDropdown.Item href="#">Code of Conduct</NavDropdown.Item>
                        <NavDropdown.Item href="#">Community Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                    id="nav-dropdown-projects"
                    title="Projects"
                    menuVariant="light"
                    >
                        <NavDropdown.Item href="#">Projects</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                    id="nav-dropdown-learn"
                    title="Learn"
                    menuVariant="light"
                    >
                        <NavDropdown.Item href="#">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="#">How the ASF Works</NavDropdown.Item>
                        <NavDropdown.Item href="#">Legal &amp; Trademark</NavDropdown.Item>
                        <NavDropdown.Item href="#">Licenses</NavDropdown.Item>
                        <NavDropdown.Item href="#">Glossary</NavDropdown.Item>
                        <NavDropdown.Item href="#">FAQ</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                    id="nav-dropdown-about"
                    title="About"
                    menuVariant="light"
                    >
                        <NavDropdown.Item href="#">About</NavDropdown.Item>
                        <NavDropdown.Item href="#">Our Sponsors</NavDropdown.Item>
                        <NavDropdown.Item href="#">Leadership</NavDropdown.Item>
                        <NavDropdown.Item href="#">Members</NavDropdown.Item>
                        <NavDropdown.Item href="#">Contact</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
  
  export default Header;