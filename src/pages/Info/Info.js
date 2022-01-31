import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./info.css";

const Info = () => {
    return (
        <div className="containe">
            <Row xs={1} md={3} lg={3} className="container-1 ">
                <div>
                    <h4>700K</h4>
                    <p>Youtube Subscribers</p>
                </div>
                <div>
                    <h4>2.5m</h4>
                    <p>Subscribe</p>
                </div>
                <div>
                    <h4>100k</h4>
                    <p>Dribbble Shot Likes</p>
                </div>
            </Row>

        </div>
    );
};

export default Info;