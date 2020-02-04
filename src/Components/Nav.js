import React from 'react';
import { Link } from '@reach/router';

const Nav = props => {
    return (
        <div className="row justify-content-center mt-2">
            <div className="col text-center">
                <div className="row res-bg rounded p-2 mb-2">
                        <div className="col bigger">    
                            <Link to="/mysite" className="t-light">About</Link>
                        </div>
                        <div className="col bigger">    
                            <Link to="/skills" className="t-light">Skills</Link>
                        </div>
                        <div className="col bigger">
                            <Link to="/projects" className="t-light">Projects</Link>
                        </div>
                        {/* UPDATE THIS LINK REGULARLY!!!!!!!!!!! */}
                        <div className="col bigger">    
                            <a href="https://drive.google.com/open?id=13Uhw5kH4pUg14omHRsBPMGrP5WULjFOe" className="text-light">Resume</a>
                        </div>
                        <div className="col bigger">    
                            <Link to="/contactme" className="t-light">Contact</Link>
                        </div>
                </div>

            </div>
        </div>
    );
}

export default Nav;