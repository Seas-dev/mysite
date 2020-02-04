import React from 'react';

const Footer = props => {

    return(
        <>
        <div className="row mt-1 mb-1">
            <div className="col p-0 text-center">
                <hr className="mb-1 mt-1 res-bg"/>
                    <a href="https://github.com/Seas-dev" className="mr-1">
                        <img src="img/github.png" alt="Github" className="smol"/>
                    </a>
                    <a href="https://www.linkedin.com/in/jon-seastedt/" className="mr-1">
                        <img src="img/linkedin.png" alt="LinkedIn" className="smol"/> 
                    </a>
                    <a href="mailto:seastedt.ej@gmail.com">
                        <img src="img/gmail.png" alt="Gmail" className="smol"/>
                    </a>
            </div>
        </div>
            <div className="row mb-1">
                <div className="col p-0">
                    <p className="text-center smaller p-0 mb-1">E. Jonathan Seastedt  <span className="font-weight-bold">|</span>  Developer Portfolio  <span className="font-weight-bold">|</span>  2020</p>
                    <hr className="mb-1 mt-0 res-bg"/>
                </div>
            </div>
        </>
    );
}

export default Footer;