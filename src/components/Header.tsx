import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import HomeIcon from '@mui/icons-material/Home';
function Header() {
    return (
        <Navbar variant='dark' bg='' className='navbar-inverse header-menu' expand='lg'>
            <Container>
                <Navbar.Brand href='/'>
                    <HomeIcon />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-dark-example' />
                <Navbar.Collapse id='navbar-dark-example'>
                    <Nav>
                        <NavDropdown
                            id='nav-dropdown-community'
                            title='Community'
                            menuVariant='light'
                        >
                            <NavDropdown.Item href='/getting-started'>
                                Contributor Getting Started
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/becoming-committer'>
                                Becoming a Committer
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/code-of-conduct'>
                                Code of Conduct
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/community-resources'>
                                Community Resources
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/community-over-code'>
                                Community Over Code
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            id='nav-dropdown-projects'
                            title='Projects'
                            menuVariant='light'
                        >
                            <NavDropdown.Item href='/projects'>Projects</NavDropdown.Item>
                            <NavDropdown.Item href='/report-a-vulnerability'>
                                Report a Vulnerability
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            id='nav-dropdown-download'
                            title='Download'
                            menuVariant='light'
                        >
                            <NavDropdown.Item href='/distributions'>Distributions</NavDropdown.Item>
                            <NavDropdown.Item href='/releases'>Releases</NavDropdown.Item>
                            <NavDropdown.Item href='/infrastructure-status'>
                                Infrastructure Status
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/infrastructure-statistics'>
                                Infrastructure Statistics
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown id='nav-dropdown-learn' title='Learn' menuVariant='light'>
                            <NavDropdown.Item href='/blog'>Blog</NavDropdown.Item>
                            <NavDropdown.Item href='/how-the-bnf-works'>
                                How the BNF Works
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/the-biblionexus-way'>
                                The BiblioNexus Way
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/leagal-trademark'>
                                Legal &amp; Trademark
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/licenses'>Licenses</NavDropdown.Item>
                            <NavDropdown.Item href='/gloassary'>Glossary</NavDropdown.Item>
                            <NavDropdown.Item href='/faq'>FAQ</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown
                            id='nav-dropdown-resources-tools'
                            title='Resources & Tools'
                            menuVariant='light'
                        >
                            <NavDropdown.Item href='/developer-information'>
                                Developer Information
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/wiki'>Wiki</NavDropdown.Item>
                            <NavDropdown.Item href='/issues'>Issues</NavDropdown.Item>
                            <NavDropdown.Item href='/slack'>Slack</NavDropdown.Item>
                            <NavDropdown.Item href='/self-serve-portal'>
                                Self Serve Portal
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/infrastructure'>
                                Infrastructure
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/whimsy'>Whimsy</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown id='nav-dropdown-about' title='About' menuVariant='light'>
                            <NavDropdown.Item href='/about'>About</NavDropdown.Item>
                            <NavDropdown.Item href='/our-sponsers'>Our Sponsors</NavDropdown.Item>
                            <NavDropdown.Item href='/biblionexus-studio'>
                                BiblioNexus Studio
                            </NavDropdown.Item>
                            <NavDropdown.Item href='/leadership'>Leadership</NavDropdown.Item>
                            <NavDropdown.Item href='/members'>Members</NavDropdown.Item>
                            <NavDropdown.Item href='/contact'>Contact</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
