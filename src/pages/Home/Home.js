import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Home.css";
import "./banner.jpg"
import WhyTourx from '../WhyTourx/WhyTourx';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://blooming-basin-84674.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])




    return (
        <>
            <div className="home">
                <div className="d-flex align-items-center h-100">
                    <Container className="p-5 " >
                        <Row>
                            <Col xs={12} lg={12} className=" align-middle" >
                                <Container className="container-lg  align-items-center align-middle">
                                    <div className=''>
                                        <h1 className="align-items-center fw-bolder fs-1">
                                            Amazing Tour  <span className="text-danger" ></span> <br /> In Different Country  <br /> <span className="text-info"></span>
                                        </h1>
                                        <p>
                                            7 Days , 8 Night Tour
                                        </p>
                                        <button type="button" className="btn btn-danger btn-lg px-5 w-47">Book Now</button>
                                    </div>
                                </Container>
                            </Col>

                        </Row>
                    </Container>

                </div >

            </div >
            <Container>
                <div className="text-center my-5">
                    <p className="text-danger fw-bold ">Choose Your Package </p>
                    <h1 className="fw-bolder">Select Your best Package<br /> For Your Travel  </h1>
                </div>
                <Container className="mb-5">
                    <Row xs={1} md={2} lg={3} className="g-4">{
                        data.map(serviceData => <Service key={serviceData.key} serviceData={serviceData}></Service>)
                    }
                    </Row>
                </Container>
            </Container>


            <Info></Info>




            <WhyTourx></WhyTourx>
            <Footer></Footer>
        </>
    );
};

export default Home;