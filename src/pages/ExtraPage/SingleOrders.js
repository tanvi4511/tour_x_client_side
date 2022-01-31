import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleOrders = (props) => {

    const { key, title, img, price, _id } = props.serviceData
    return (
        <div>
            <Col>
                <Card className="h-100 text-center hoverEffect">
                    <Card.Img className="image-size" variant="top" src={img} />
                    <Card.Body>
                        <div className="d-flex ">
                            <p className="me-5 pe-5">${price}<span >/Per person</span></p>
                            <p className="ms-4"><i class="far fa-calendar-alt"></i> 5 days/6 nights</p>
                        </div>
                        <h2 className="text-start"><i class="fas fa-map-marker-alt"></i><span className="text-danger">{title}</span></h2>
                        <p className="text-start"><i class="fas fa-star text-danger"></i> 8k+ Rating</p>


                    </Card.Body>
                </Card>

            </Col>

        </div>
    );

};

export default SingleOrders;