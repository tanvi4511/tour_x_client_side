import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const SingleOrder = (props) => {
    const { _id, userName, email, userImg, phone, address } = props.booking;
    const { packageImg, packageTitle, packagePrice, packageDetails } = props.booking.packageInfo;
    const history = useHistory();




    const handleBookingDelete = () => {
        const sure = window.confirm("Confirm Delete.")
        if (sure) {
            fetch(`https://blooming-basin-84674.herokuapp.com/booking/${_id}`, {
                method: 'DELETE'
            })
                .then(
                    history.push('/mybooking')

                )
        }
    }



    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={packageImg} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className='d-flex justify-content-around'>
                            <div>
                                <h5 className="card-title text-danger"><i class="fas fa-map-marker-alt"></i>{packageTitle}</h5>
                                <h5 className="card-title text-success">${packagePrice}</h5>
                                <p className=""><i class="far fa-calendar-alt"></i> 5 days/6 nights</p>
                                <p className="text-start"><i class="fas fa-star text-danger"></i> 8k+ Rating</p>


                            </div>
                            <div className='fw-bold'>
                                <h4 className='text-primary'>User Info:</h4>
                                <p className="card-text">Name: {userName}</p>
                                <p className=""><small className="text-muted">Email: {email}</small></p>
                                <p><span>Phone No: </span>{phone}</p>
                                <p><span>Address: </span>{address}</p>

                                <button onClick={handleBookingDelete} className="btn btn-danger"> Cancel Booking</button>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleOrder;