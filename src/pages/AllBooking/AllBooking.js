import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const AllBooking = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://blooming-basin-84674.herokuapp.com/product/:id')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])


    return (
        <div>
            {<Container>
                <div className="text-center my-5 py-5">
                    <p className="text-danger fw-bold ">Choose Your Package </p>
                    <h1 className="fw-bolder">Select Your best Package<br /> For Your Travel  </h1>
                </div>

                <Container className="mb-5">
                    <Row xs={1} md={2} lg={3} className="g-4">{
                        <Service key={data.key} serviceData={data}></Service>
                    }
                    </Row>

                </Container>
            </Container>
            }
        </div>
    );
};

export default AllBooking;