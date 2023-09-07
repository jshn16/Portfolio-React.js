import React, { useEffect } from "react";


//App Icons
import WeatherAppImage from "../../assets/weather-app.png";
import tasklyAppImage from "../../assets/to-do-list.png";
import NotesAppImage from "../../assets/notes.png";
import greenGaugeAppImage from "../../assets/green-guage-logo.png";
import carbaseAppImage from "../../assets/carbase-logo.png";
import designAppImage from "../../assets/desiging.png";
import {TiCloudStorage} from 'react-icons/ti'
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import { ReactComponent as Css3Icon } from "../../assets/icons/css3.svg";
import { ReactComponent as Html5Icon } from "../../assets/icons/html5.svg";
import ExpressOriginal from "devicons-react/lib/icons/ExpressOriginal";
import HandlebarsOriginal from "devicons-react/lib/icons/HandlebarsOriginal";
import NodejsOriginal from "devicons-react/lib/icons/NodejsOriginal";
import { ReactComponent as MongoDBIcon } from "../../assets/icons/mongodb.svg";
import { SassOriginal } from 'devicons-react';
import { ReactComponent as JsIcon } from "../../assets/icons/js.svg";
import PhotoshopPlain from "devicons-react/lib/icons/PhotoshopPlain";
import IllustratorPlain from "devicons-react/lib/icons/IllustratorPlain";
import XdPlain from "devicons-react/lib/icons/XdPlain";
import FigmaPlain from "devicons-react/lib/icons/FigmaPlain";
import {FaBootstrap} from 'react-icons/fa'

function Project() {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  return (
    <div className="box">
      <h1 className="bold">Projects</h1>
      <hr />
      <section className="wrapper" id="projects">
        <div className="holder">
          <div className="image-holder-projects">
            <img title="Season Sure" alt="appIcon"src={WeatherAppImage} />
          </div>
          <div>
            <h5>Weatherly</h5>
            <p>
            Web Application designed using HTML5, SASS, JavaScript, React.js that replicates the functioning of a native weather application. It utilizes OpenWeather API, Geolocation API and Axios to obtain weather data in the form of JavaScript Objects. Users can either search by city name or allow location services to automatically detect weather.The searched location is stored in localStorage and displayed in recent weather section. CSS pre-processor Sass is used to style the web application.
            </p>
          </div>
          <div className="languages">
            <div>
              {<Html5Icon />}
              {<Css3Icon />}
              {<JsIcon />}
              {<ReactOriginal />}
              {<TiCloudStorage/>}
              {<SassOriginal/>}
              
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://weatherly-w5qe.onrender.com"
                className="btn-common"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img title="Taskly" src={tasklyAppImage} alt="appIcon" />
          </div>

          <div>
            <h5>Taskly</h5>
            <p>
              Application designed using HTML5, CSS3, JavaScript, React.js and localStorage that replicates the functioning of real life list of tasks you need to complete or things that you want to do. Users are able to create, store, edit or delete tasks upon their requirements. Tasks are being stored in browser localStorage so that they remain active even after the browser window is closed.
            </p>
          </div>
          <div className="languages">
            <div>
              {<Html5Icon />}
              {<Css3Icon />}
              {<JsIcon />}
              {<ReactOriginal />}
              {<SassOriginal/>}
              {<TiCloudStorage/>}
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://taskly-2gi7.onrender.com"
                className="btn-common"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img title="Notely" src={NotesAppImage} alt="appIcon" />
          </div>
          <div>
            <h5>Notely</h5>
            <p>
              Notely is a notes taking application that utilizes React.js
              framework. Users are able to store, edit or delete notes by
              utilizing the localStorage of browser. Perfect tool to help
              organize your thoughts and ease your mind. Notes are being stored in browser localStorage so that they remain active even after the browser window is closed.
            </p>
          </div>
          <div className="languages">
            <div>
              {<Html5Icon />}
              {<Css3Icon />}
              {<JsIcon />}
              {<ReactOriginal />}
              {<TiCloudStorage/>}
              {<FaBootstrap/>}
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://notely-5bnr.onrender.com/"
                className="btn-common"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img title="GreenGauge" src={greenGaugeAppImage} alt="appIcon" />
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
          <div className="languages">
            <div>
              {<Html5Icon />}
              {<Css3Icon />}
              {<JsIcon />}
              {<FaBootstrap/>}
              {<NodejsOriginal />}
              <HandlebarsOriginal />
              {<ExpressOriginal />}
              {<MongoDBIcon />}
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://greengauge.onrender.com/"
                className="btn-common"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img title="Carbase" src={carbaseAppImage} alt="appIcon"/>
            {/* <a href="https://www.flaticon.com/free-icons/car-service" title="car service icons">Car service icons created by wanicon - Flaticon</a> */}
          </div>

          <div>
            <h5>Carbase</h5>
            <p>
              Developed a web application for a car service company, that can used for save clinets and their vehicle information in records. Highly useful for managing huge client base. Developed with use of Node.js, Express.JS, Mongo DB, and JavaScript.
            </p>
            <ul>
              <li>Used to perform CRUD operations on data.</li>
              <li>Create, manage, delete, and store users.</li>
              <li>Use Google and Facebook authentication.</li>
              <li>Interact with databases through RESTful APIs</li>
            </ul>
          </div>
          <div className="languages">
            <div>
              {<Html5Icon />}
              {<Css3Icon />}
              {<JsIcon />}
              {<FaBootstrap />}
              {<NodejsOriginal />}
              <HandlebarsOriginal />
              {<ExpressOriginal />}
              {<MongoDBIcon />}
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://carbase-comp2106.onrender.com"
                className="btn-common"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>

        <div className="holder">
          <div className="image-holder-projects">
            <img title="Desiging Projects" src={designAppImage} alt="appIcon" />
          </div>
          <div>
            <h5>Desiging Projects</h5>
            <p>
              Designed and Developed mockups, wireframes, UI and UX designs for
              web applications. Using Adobe Photoshop, Illustrator and Figma
            </p>

            <ul>
              <li>Designed homepage wireframes for the cafe website</li>
              <li>
                Designed logos for cafe, motorcycle, and community centre
                websites.
              </li>
              <li>Designed Facebook and Skype Login pages.</li>
              <li>Designed full website homepage design.</li>
              <li>Developed UX/UI design for mobile applications.</li>
              <li>Developed brochure design for the company.</li>
            </ul>
          </div>

          <div className="languages">
            <div>
              {<PhotoshopPlain />}
              {<IllustratorPlain />}
              {<XdPlain />}
              {<FigmaPlain />}
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/drive/folders/1CbVA66ObcFFhx16wtI2rK5MYWp3qaNUU?usp=sharing"
                className="btn-common"
              >
                Case Study
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
