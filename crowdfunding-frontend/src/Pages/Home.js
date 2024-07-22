import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavbarComponent from '../Components/NavbarComponent';
import FooterComponent from '../Components/FooterComponent';
import { animalrights, baby1, currencybro, familybro } from '../Images';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylings/Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/sign-up');
    };

    return (
        <>
            <NavbarComponent />
            <Container fluid className="main-content mt-5">
                <Row className="align-items-center mb-5">
                    <Col md={8}>
                        <p>CrowdFund is dedicated to helping individuals and organizations raise funds for their causes. Whether you're looking to start a new project or support an existing one, we provide the tools and resources you need to make a difference.</p>
                    </Col>
                    <Col sm={4}>
                        <img src={currencybro} alt="About CrowdFund" className="img-fluid rounded" />
                    </Col>
                </Row>

                <h2 className="text-center mb-4">Active Fundraisers</h2>
                <Row className="mb-5">
                    <Col md={4} className="mb-4">
                        <Card className="shadow-sm custom-card">
                            <Card.Img variant="top" src={animalrights} height="300" width="200" />
                            <Card.Body>
                                <Card.Title>Fundraiser Title 1</Card.Title>
                                <Card.Text>Brief description of the fundraiser. Help support this cause and make a difference.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="shadow-sm custom-card ">
                            <Card.Img variant="top" src={familybro} height="300" width="200" />
                            <Card.Body>
                                <Card.Title>Fundraiser Title 2</Card.Title>
                                <Card.Text>Brief description of the fundraiser. Help support this cause and make a difference.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="shadow-sm custom-card">
                            <Card.Img variant="top" src={baby1} height="300" width="200" />
                            <Card.Body>
                                <Card.Title>Fundraiser Title 3</Card.Title>
                                <Card.Text>Brief description of the fundraiser. Help support this cause and make a difference.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="text-center bg-white py-5">
                    <Col>
                        <h2>Join the Movement</h2>
                        <p>Be a part of something bigger. Start your own fundraiser or support one today!</p>
                        <Button className="custom-button" onClick={handleSignUpClick}>Get Started</Button>
                    </Col>
                </Row>
            </Container>
            <FooterComponent />
        </>
    );
};

export default Home;
