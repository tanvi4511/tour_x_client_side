import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import "./style.css";

const WhyTourx = () => {
    return (
        <div className="mt-5 text-center background py-5">
            <p className="text-danger fw-bold">Why Tour X</p>
            <h1 className="fw-bolder">Why you are travel with <br /> tourx </h1>
            <Container className="my-3 ">
                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4  g-4">
                    <div className="col">
                        <div className="card pt-3 px-5 bg-secondary">

                            <div className="card-body text_color">
                                <i className="far fa-address-book size"></i>
                                <p className="fs-5 fw-light pt-2">2000+ Our worldwide guide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card pt-3 px-5 bg-secondary">

                            <div className="card-body text_color">
                                <i className="far fa-handshake size"></i>
                                <p className="fs-5 fw-light pt-2">100% trusted travel agency</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card pt-3 px-5 bg-secondary">

                            <div className="card-body text_color">
                                <i className="fas fa-business-time size"></i>
                                <p className="fs-5 fw-light pt-2">10+ year of travel experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card pt-3 px-5 bg-secondary">

                            <div className="card-body text_color">
                                <i className="far fa-smile-beam size"></i>
                                <p className="fs-5 fw-light pt-2">90% of our traveller happy</p>
                            </div>
                        </div>
                    </div>
                </div >



            </Container >



        </div >
    );
};

export default WhyTourx;