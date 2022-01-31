import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import SingleOrder from './SingleOrder';

const AllOrders = () => {


    const [totalBooking, setTotalBooking] = useState(0);
    const [allBookings, setAllBookings] = useState([]);

    useEffect(() => {
        fetch(`https://blooming-basin-84674.herokuapp.com/bookings`)
            .then(res => res.json())
            .then(data => {
                setAllBookings(data);
                setTotalBooking(data.length);
            })
    }, [])



    return (
        <div>
            <Container classNameName="p-5 " >
                <div classNameName=" d-flex justify-content-center text-center">
                    <div>
                        <h1 classNameName=" fw-bolder fs-1">
                            All Order
                        </h1>
                    </div>
                    <div>
                        <p >
                            Total order:{totalBooking}
                        </p>
                    </div>
                    <hr></hr>
                </div>
            </Container>
            <Container>

                <Row xs={1} md={1} lg={1} className="g-3">{
                    allBookings.map(booking => <SingleOrder key={booking._id} booking={booking}></SingleOrder>)
                }
                </Row>
            </Container >


        </div >
    );
};

export default AllOrders;