import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profileIcon from '../assets/images/profile.png';
import logo from '../assets/images/logo.png';
import './Navbar.css';
import Button from 'react-bootstrap/esm/Button';
import {useNavigate} from "react-router-dom";

function CommonNavbar({isAuthenticated, SetIsAuthenticated}) {
    let navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        SetIsAuthenticated(false);
        localStorage.setItem("isLoggedIn", false);
        navigate('/');
    }
    
    return (
        <Navbar expand="lg" className="bg-primary" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Book Stack
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="container-fluid">
                <Nav.Link href="/dashboard">Home</Nav.Link>
                <Nav.Link href="#about-us">About</Nav.Link>
                { isAuthenticated ? 
                    <Nav.Link href="/manage-books">Book Management</Nav.Link> : <></> }
                {
                    isAuthenticated ?
                    <NavDropdown className="ms-auto"
                        title={
                            <div className="pull-left">
                                <img className="thumbnail-image" 
                                    src={profileIcon} 
                                    alt="user pic"
                                />
                                Arihant
                            </div>
                        } 
                        id="basic-nav-dropdown">
                        <NavDropdown.Item href="#profile">
                            <Row>
                                <Col xs={3}>
                                    <img src={profileIcon} alt=""/>
                                </Col>
                                <Col xs={6}>
                                    <Row>Arihant</Row>
                                    <Row>arihant.dugar@dal.ca</Row>
                                </Col>
                            </Row>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#profile">Profile Settings</NavDropdown.Item>
                        <NavDropdown.Item href="/manage-books">
                            Book Management
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#dark-mode">Dark Mode</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={handleLogout}>
                            Signout
                        </NavDropdown.Item>
                    </NavDropdown> :
                    <Container className='authentication-buttons'>
                        <Button className="btn login" href='/login'>Login</Button>
                        <Button className="btn signup" variant='outline-primary'>Sign Up</Button>
                    </Container>
                }
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default CommonNavbar;