import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='pt-5'>
            <div className="bg-dark text-light pt-5 sticky-bottom">
                <Container >
                    <Row className="mx-auto lh-lg px-5ify-content-center d-flex just" >
                        <Col lg={4} md={6}>
                            <h1 className="fw-bolder" to="/home">Tour<span className="text-danger"> X</span></h1>
                            <p> Amazing Tour
                                In Different Country </p>
                        </Col>
                        <Col lg={4} md={6}>
                            <ul className="list-unstyled nav-links">
                                <li className="fs-3 text-danger">Social Media</li>
                                <li><i class="fab fa-facebook"></i> Facebook</li>
                                <li> <i class="fab fa-youtube"></i> Youtube</li>
                                <li><i class="fab fa-instagram"></i> Instagram</li>

                            </ul></Col>
                        <Col lg={4} md={6}>
                            <ul className="list-unstyled nav-links">
                                <li className="fs-3 text-danger">Opening Hours</li>
                                <li>Mon : 9:00 AM - 9:00 PM </li>
                                <li>Tues : 9:00 AM - 9:00 PM </li>
                                <li>Wed : 9:00 AM - 9:00 PM</li>
                                <li>Thurs : 9:00 AM - 9:00 PM </li>
                                <li>Fri : 9:00 AM - 9:00 PM /li</li>
                            </ul>
                        </Col>
                    </Row>
                    <hr />
                    <Row >
                        <p className="text-center p-3 bg-dark text-light m-0" >Copyright © 2022, All Rights Reserved </p>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Footer;