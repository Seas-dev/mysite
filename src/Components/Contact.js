import React from 'react';

const Contact = props => {

    return (
        <div className="row mb-3">
            <div className="col">
                <div className="div text-center res-text">
                    <h2>Coffee Chat? Interview?</h2>
                    <h2>Let's Connect!</h2>
                </div>
                <div className="d-inline-block w-50">
                    <img src="../img/phone.png" alt="phone number"/>
                    <h3 className="d-inline-block">Phone: (307) 760-8888</h3>
                </div>
                <div className="d-inline-block">
                    <img src="../img/mail.png" alt="phone number"/>
                    <h3 className="d-inline-block ml-3">Email: <a href="mailto:seastedt.ej@gmail.com" className="no-dec text-dark">seastedt.ej@gmail.com </a></h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;