import React from 'react';

const About = props => {

    return (
        <div className="row">
            <div className="col-3 p-2 res-bg round">
                <img src="img/DSC_0276_bw.jpg" alt="Jonathan Seastedt" className="w-100"/>
            </div>
            <div className="col align-self-center mb-4">
                <fieldset className="p-2">
                    <legend className="font-weight-bold w-auto res-text">About</legend>
                    <p className="p-1 bigger">I enjoy solving problems, and thinking through every angle to find the best path forward. Teamwork and collaboration are two things that I strive for. I love it when a team comes together. Without a cohesive team, how do you expect to take your project to the next level?</p>
                    <p className="p-1 bigger">Additionally, I also happen to be a pretty big nerd with a penchant for game-mastering table-top role-```playing games like Dungeons &amp; Dragons. I enjoy cooking and trying new foods, creative writing, and gaming.</p>
                </fieldset>
            </div>
        </div>
    );
}

export default About;