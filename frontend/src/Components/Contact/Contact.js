import React, { useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const [data, setData] = useState({
        Fullname: "",
        phone: "",
        Email: "",
        Msg: "",
    })
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert("Submitted Successfully!!")
        emailjs.sendForm('service_zva740x', 'template_irdcqkm', e.target, 'user_d834o6XEANeELgyS66lit').then(res => {
            console.log(res)

        }).catch(err => console.log(err));

    }

    
    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 mb-4 col-md-5">

                        <div className="card border-primary rounded-0">
                            <div className="card-header p-0">
                                <div className="bg-success text-white text-center py-2">
                                    <h3><i className="fa fa-envelope"></i> Contact Us</h3>
                                    <p className="m-0">Don't hesitate to contact us :)</p>
                                </div>
                            </div>
                            <div className="card-body p-3">
                                <form onSubmit={formSubmit} id="myForm">
                                    <div className="form-group m-2">
                                        <label> Your name </label>
                                        <div className="input-group">
                                            <input value={data.Fullname} onChange={InputEvent} type="text" name="Fullname" className="form-control" id="inlineFormInputGroupUsername" placeholder="Your name" required/>
                                        </div>
                                    </div>
                                    <div className="form-group m-2">
                                        <label>Your email</label>
                                        <div className="input-group mb-2 mb-sm-0">
                                            <input type="email" value={data.Email} name="Email" onChange={InputEvent} className="form-control" id="inlineFormInputGroupUsername" placeholder="Email" required/>
                                        </div>
                                    </div>
                                    <div className="form-group m-2">
                                        <label>Mobile Number</label>
                                        <div className="input-group mb-2 mb-sm-0">
                                            <input type="text" value={data.phone} name="phone" className="form-control" onChange={InputEvent} id="inlineFormInputGroupUsername" placeholder="Mobile Number" required/>
                                        </div>
                                    </div>
                                    <div className="form-group m-2">
                                        <label>Message</label>
                                        <div className="input-group mb-2 mb-sm-0">
                                            <textarea className="form-control" value={data.Msg} id="inlineFormInputGroupUsername" rows="6" name="Msg" onChange={InputEvent} placeholder="Enter Your Message/Suggestions" required></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <input type="submit" name="submit" value="Submit" className="btn btn-outline-success btn-block rounded-0 py-2 m-2" />
                                       
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                    <div className="col-sm-12 col-md-7">

                        <div className="mb-4">
                            <iframe src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=NITK Surathkal&amp;t=h&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>

                        <div className="row text-center">
                            <div className="col-md-4">
                                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block" style={{ textDecoration: "none" }}><i className="fa fa-map-marker"></i>Address</a>
                                <p>NITK Surathkal</p>
                            </div>
                            <div className="col-md-4">
                                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block" style={{ textDecoration: "none" }}><i className="fa fa-phone"></i>Mobile Number</a>
                                <p>8290412782</p>
                            </div>
                            <div className="col-md-4">
                                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block" style={{ textDecoration: "none" }}><i className="fa fa-envelope"></i>Mail</a>
                                <p>itminortest@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )

}

export default Contact;