import React from 'react';


const ContactUs = () => {
    return (
        <div>
            <div>

                <div className="container my-3 my-sm-5">


                    <h1 className="mb-sm-4 text-center mb-4 text-info">Contact Us</h1>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h4 className="fw-bold"> Address</h4>
                            <div> <p>11-gulshan</p>
                                <p>3rd floor of NBC</p>
                                <p>Dhaka-1219</p></div>
                        </div>
                        <div className="col-12 col-md-6">
                            {/* <FontAwesomeIcon icon={faClock} />
                        <FontAwesomeIcon className="text-success" icon={faArrowRight} /> 
                        <FontAwesomeIcon className="text-success" icon={faArrowRight} /> 
                        <FontAwesomeIcon className="text-success" icon={faArrowRight} /> */}

                            <h4 className="fw-bold">  Opening Hours</h4>
                            <p>
                                Monday-Thursday: <span className="float-right">9:00 AM - 9:00 PM   </span> <br />
                            </p>
                            <p>
                                Friday-Saturday: <span className="float-right"> 9:00 AM - 9:00 PM </span> <br />
                            </p>
                            <p>
                                Sunday: <span className="float-right"> 10 am - 6 pm</span> <br />
                            </p>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-12 col-md-6 mb-3">
                            <h4 className="fw-bold">Send us a message</h4>
                            <form action="#">
                                <div className="row">
                                    <div className="col-12 col-md-6">

                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id="name" className="form-control" placeholder="name" required />

                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" className="form-control" placeholder="example@domain.com" required />

                                        </div>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="textarea">Message:</label>
                                    <textarea className="form-control" placeholder="Write your message here..." name="" id="textarea" cols="30" rows="10" required></textarea>



                                </div>
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </form>
                        </div>
                        <div className="col-12 col-md-6">



                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;