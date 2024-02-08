import CommonNavbar from "../Common/Navbar";
import { Image, Row, Col, Container } from 'react-bootstrap';
import chart1 from "../assets/images/chart1.png";
import chart2 from "../assets/images/chart2.png";
import chart3 from "../assets/images/chart3.png";
import chart4 from "../assets/images/chart4.png";
import "./AdminDashboard.css";

function AdminDashboard({isAuthenticated, SetIsAuthenticated}) {

  return (
    <div className="AdminDashboard">
        <CommonNavbar isAuthenticated={isAuthenticated} SetIsAuthenticated={SetIsAuthenticated} />
        <Container id="charts-container">
            <Row className="mb-3">
                <Col>
                    <Image src={chart1} fluid />
                </Col>
                <Col>
                    <Image src={chart2} fluid />
                </Col>
                <Col>
                    <Image src={chart3} fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={chart4} fluid id="chart-4" />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default AdminDashboard;