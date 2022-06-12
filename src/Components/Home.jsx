import React from "react";
import { Nav, Container, Navbar, Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Home() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Accueil</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Addition">Addition</Nav.Link>
                        <Nav.Link as={Link} to="/Substraction">Substraction</Nav.Link>
                        <Nav.Link as={Link} to="/Multiplication">Multiplication</Nav.Link>
                        <Nav.Link as={Link} to="/Division">Division</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br /><br /><br /><br />
            <center>
                <Row>
                    <Col xs={6} md={2}>
                    </Col>
                    <Col xs={6} md={8}>

                        <Alert show={show} variant="success">
                            <Alert.Heading>Bienvenue !!!</Alert.Heading>
                            <p>
                                Dans notre menu vous pouvez selectionner le type de calcule que vous voulez réaliser
                            </p>
                            <hr />
                            <Alert show={show} variant="success">
                                <p>AMUSEZ-VOUS BIEN ^^</p>
                            </Alert>
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => setShow(false)} variant="outline-success">
                                    Fermer
                                </Button>
                            </div>
                        </Alert>
                        <div className="d-grid gap-2">
                            {!show && <Button variant="primary" size="lg" onClick={() => setShow(true)}>AFFICHER LE MESSAGE</Button>}
                        </div>


                    </Col>
                    <Col xs={6} md={2}>

                    </Col>
                </Row>
            </center>


        </>

    );
}

