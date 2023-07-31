import React, { useEffect } from "react";

import WeatherAppImage from "../../assets/weather-app.png";
import taskAppImage from "../../assets/to-do-list.png";
import NotesAppImage from "../../assets/notes.png";
import greenGaugeAppImage from "../../assets/green-guage-logo.png";
import carbaseAppImage from "../../assets/carbase-logo.png";
import { Link } from "react-router-dom";
function Project() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div className="box">
      <h1 className="bold">Projects</h1>
      <hr />
      <section className="wrapper">
        <div className="holder">
          <div className="image-holder-projects">
            <img src={WeatherAppImage} />
          </div>
          <div>
            <h5>Season Sure</h5>
            <p>
              Designed a webpage that emulates the user experience of weather
              applications using HTML5, CSS3, JSON, and JavaScript. It utilizes
              openweather, fetch, and geolocation APIs to get data in JSON from
              popular weather forecasting website. The JSON data is then parsed
              into respected values.
            </p>
          </div>
          <div>
            <a
              target="_blank"
              href="https://jshn16.github.io/weather-app/"
              className="btn-common"
            >
              Case Study
            </a>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img src={taskAppImage} alt="taskAppImage" />
          </div>

          <div>
            <h5>To-Do-List</h5>
            <p>
              Application designed using HTML5, CSS3, and JavaScript that
              replicates the functioning of real life list of tasks you need to
              complete or things that you want to do. Users are able to create,
              edit or delete tasks upon their requirements.
            </p>
          </div>

          <div>
            <a
              target="_blank"
              href="https://jshn16.github.io/to-do-list-js/"
              className="btn-common"
            >
              Case Study
            </a>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img src={NotesAppImage} />
          </div>
          <div>
            <h5>Notely</h5>
            <p>
              Notely is a notes taking application that utilizes React.js
              framework. Users are able to store, edit or delete notes by
              utilizing the localStorage of browser. Perfect tool to help
              organize your thoughts and ease your mind.
            </p>
          </div>
          <div>
            <a
              target="_blank"
              href="https://notely-5bnr.onrender.com/"
              className="btn-common"
            >
              Case Study
            </a>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img src={greenGaugeAppImage} />
          </div>
          <div>
            <h5>GreenGauge</h5>
            <p>
              Developed a web application in the team to showcase rising carbon
              emissions, using Express.JS, Mongo DB and Handlebars. Worked as
              lead designer and developer in the team.
            </p>
            <ul>
              <li>Create, manage, delete, and store users</li>
              <li>Dashboard page with real-time chart data.</li>
              <li>View, Add or delete user blogs</li>

              <li>Much more..</li>
            </ul>
          </div>
          <div>
            <a
              target="_blank"
              href="https://greengauge.onrender.com/"
              className="btn-common"
            >
              Case Study
            </a>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img src={carbaseAppImage} />
            {/* <a href="https://www.flaticon.com/free-icons/car-service" title="car service icons">Car service icons created by wanicon - Flaticon</a> */}
          </div>

          <div>
            <h5>Carbase</h5>
            <p>
              Developed a web application for a car service company, that can
              used for save clinets and their vehicle information in records.
              Highly useful for managing huge client base. Developed with use of
              Node.js, Express.JS, Mongo DB, and JavaScript.
            </p>
            <ul>
              <li>Used to perform CRUD operations on data.</li>
              <li>Create, manage, delete, and store users.</li>

              <li>Use Google and Facebook authentication.</li>

              <li>Interact with databases through RESTful APIs</li>
            </ul>
          </div>

          <div>
            <a
              target="_blank"
              href="https://carbase-comp2106.onrender.com"
              className="btn-common"
            >
              Case Study
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
