import React from 'react';


const Projects = props => {

    // list of projects
    // #TODO: Add a gif animation when hovering over the image
    const projectList = [
        {
          name: "User Message Board",
          techUsed: "Python, Django, SQLite, HTML5, CSS, Bootstrap",
          description: "A message board where registered users can see all their messages, message other users, and comment on any messages on the site. Features login and password validation, user access levels, Bcrypt password hashing, and various schema relationships",
          github: "https://github.com/Seas-dev/user_dasboard/tree/master/user_dashboard",
          url: "http://18.188.214.143",
          stillImg: "../img/user_mb_screen.png",
          gifImg: "",
        },
        {
          name: "Pet Shelter",
          techUsed: "JavaScript, MERN (MongoDB, Express, React, Node.js), Bootstrap",
          description: "A common area where users can share details on a pet that's up for adoption. Pets have associated attributes and skills. Features API calls, AJAX methodologies, and is a single-page application.",
          github: "https://github.com/Seas-dev/MERN-Deployment",
          url: "http://3.14.153.108/",
          stillImg: "../img/pet_shelter_screen.png",
          gifImg: "",
        },
        {
            name: "Activity Center",
            techUsed: "C#, ASP.NET, MySQL, HTML5, CSS, Bootstrap",
            description: "Activity planner in which registered users may plan fun activities and join other user-created activities. Features login and password validation, password hashing, and one-to-many and many-to-many relationships",
            github: "https://github.com/Seas-dev/ActivityCenter",
            url: "http://3.134.91.121/",
            stillImg: "../img/activity_center_screen.png",
            gifImg: "",
          },
          {
            name: "Travel Buddy",
            techUsed: "Python, Django, SQLite, HTML5, CSS, Bootstrap",
            description: "Travel organizer allowing multiple registered users to coordinate travel plans and join travel itineraries via a user-friendly web interface. Features login validations, Bcrypt password hashing, Session, and various schema relationships.",
            github: "https://github.com/Seas-dev/travel_buddy",
            url: "http://18.188.246.69",
            stillImg: "../img/travel_buddy_screen.png",
            gifImg: "",
          },
      ]

    return (
        <>
        {
            projectList.map((proj,i) => 
                <div className="row bords mb-2 p-2"  key={i}>
                    <div className="col-5">
                        <h4 className="font-weight-bold">{proj.name}</h4>
                        <p className="res-text">{proj.techUsed}</p>
                        <p>{proj.description}</p>
                        <p className="text-center font-weight-bold">
                            <a href={proj.github}>View Code</a>
                            {proj.url !== "" ? ' | ' : ""} 
                            {proj.url === "" 
                            ? 
                                "" 
                            :
                               <a href={proj.url}>View Site</a>
                            }
                        </p>
                    </div>
                    <div className="col">
                        <img src={proj.stillImg} alt={proj.name} className="w-100"/>
                    </div>
                </div>
            )
        }
        </>
    );
}

export default Projects;