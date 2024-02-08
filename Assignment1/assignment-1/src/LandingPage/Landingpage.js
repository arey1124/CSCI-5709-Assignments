import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import featuredBook from "../assets/images/featuredBook.png";
import CommonNavbar from '../Common/Navbar';
import "./LandingPage.css";

function LandingPage({isAuthenticated, SetIsAuthenticated}) {
  return (
    <>
        <CommonNavbar isAuthenticated={isAuthenticated} SetIsAuthenticated={SetIsAuthenticated} />
            <Container>
            <Row>
                <Col md={6}>
                <img id="featured-book-img" src={featuredBook} alt="" />
                </Col>
                <Col md={6}>
                {/* Text on the right side */}
                <div style={{ padding: '20px' }}>
                    <h2>Innovation happens when people are free to think, speculate and experiment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <Button className="btn reserve-now" href='#'>Reserve</Button>
                    <Button className="btn read-more">Read more</Button>
                </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default LandingPage;
