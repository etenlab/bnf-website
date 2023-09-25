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
                        <NavDropdown.Item href="/getting-started">Contributor Getting Started</NavDropdown.Item>
                        <NavDropdown.Item href="/becoming-committer">Becoming a Committer</NavDropdown.Item>
                        <NavDropdown.Item href="/code-of-conduct">Code of Conduct</NavDropdown.Item>
                        <NavDropdown.Item href="/community-resources">Community Resources</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                    id="nav-dropdown-projects"
                    title="Projects"
                    menuVariant="light"
                    >
                        <NavDropdown.Item href="/projects">Projects</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                    id="nav-dropdown-learn"
                    title="Learn"
                    menuVariant="light"
                    >
                        <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                        <NavDropdown.Item href="/how-the-asf-works">How the ASF Works</NavDropdown.Item>
                        <NavDropdown.Item href="/leagal-trademark">Legal &amp; Trademark</NavDropdown.Item>
                        <NavDropdown.Item href="/licenses">Licenses</NavDropdown.Item>
                        <NavDropdown.Item href="/gloassary">Glossary</NavDropdown.Item>
                        <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                    id="nav-dropdown-about"
                    title="About"
                    menuVariant="light"
                    >
                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                        <NavDropdown.Item href="/our-sponsers">Our Sponsors</NavDropdown.Item>
                        <NavDropdown.Item href="/leadership">Leadership</NavDropdown.Item>
                        <NavDropdown.Item href="/members">Members</NavDropdown.Item>
                        <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }
  
  export default Header;