import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';
import SingleOrders from './SingleOrders';

const Extrapage = () => {
    const { id } = useParams();
    const [dataset, setData] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    console.log(id);

    useEffect(() => {
        fetch(`https://blooming-basin-84674.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [id]);


    const onSubmit = (data) => {
        // console.log(data);
        const newBooking = {
            userName: user.displayName,
            email: user.email,
            userImg: user.photoURL,
            phone: data.phone,
            address: data.address,
            packageInfo: {
                packageId: dataset._id,
                packageImg: dataset.img,
                packageTitle: dataset.title,
                packagePrice: dataset.price,
                packageDetails: dataset.details
            }
        }


        fetch('https://blooming-basin-84674.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        }).then(res => {
            if (res.status === 200) {
                alert("Booked Successfully");
                history.push('/mybooking');


            }
        })
    };


    return (
        <div>
            {<Container>
                <div className="text-center my-5 py-5">

                    <h1 className="fw-bolder">Confirm your Booking </h1>
                </div>

                <Container className="mb-5">
                    <Row xs={1} md={2} lg={2} className="g-4">{
                        <Container><SingleOrders key={dataset.key} serviceData={dataset}></SingleOrders></Container>

                    }
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="row mb-4">
                                <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example1" >Name</label>
                                        <input type="text" id="form3Example1" class="form-control" value={user.displayName} />

                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example2">Email</label>
                                        <input type="text" id="form3Example2" class="form-control" value={user.email} disabled />
                                    </div>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Phone no</label>
                                <input type="number" id="form3Example3" class="form-control"  {...register("phone", { required: true })} />

                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example4">Address</label>
                                <input type="text" id="form3Example4" class="form-control" {...register("address", { required: true })} />

                            </div>
                            <button type="submit" class="btn btn-primary btn-block mb-4">Book</button>
                        </form >
                    </Row>
                </Container>
            </Container>
            }

        </div>
    );
};

export default Extrapage;