import React from 'react';

const Skills = props => {

    return (
        <div className="row">
            <div className="col-7 p-0">
                <img src="img/skill-cloud.jpg" alt="skill word cloud" className="w-100"/>
            </div>
            <div className="col">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan="3">Languages</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>C#</td>
                            <td>Python</td>
                            <td>JavaScript</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan="4">Frameworks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ASP.NET</td>
                            <td>React</td>
                            <td>Node.js</td>
                            <td>Express.js</td>
                        </tr>
                        <tr>
                            <td>Mongoose</td>
                            <td>Django</td>
                            <td>Flask</td>
                            <td>Bootstrap</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan="2">Databases</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MySQL</td>
                            <td>MongoDB</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan="3">Environments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VS Code</td>
                            <td>Atom</td>
                            <td>Visual Studio</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Skills;